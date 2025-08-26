---
title: Cirrina setup and usage
layout: docs
bodyClass: page-about
permalink: "/setup/"
markdown: kramdown
kramdown:
  input: GFM
---

This guide provides a step-by-step overview for setting up, running, and monitoring the Cirrina runtime with associated services, CSM jobs, and observability tools.

---

## Building Cirrina Runtime

1. **Install Protocol Buffers**  
   Download and install `protoc` version **v21.9**.

2. **Clone Cirrina Source**  
   ```bash
   git clone <cirrina-repo-url>
   cd cirrina
   ```

3. **Build the Docker Image**  
   ```bash
   docker build -t <cirrina-image-name> .
   ```

---

## Core Setup

1. **Create a Dedicated Docker Network**  
   ```bash
   docker network create xyz
   ```

2. **Launch ZooKeeper and NATS Containers**  
   ```bash
   docker run -d \
     --name zookeeper-server \
     --network xyz \
     -p 2181:2181 \
     zookeeper:latest

   docker run -d \
     --name nats-server \
     --network xyz \
     -p 4222:4222 -p 8222:8222 \
     nats:latest -js
   ```
   > Expose port `8222` for NATS monitoring.

---

## Flask Application

1. **Run Flask App Container**  
   Mount the dataset path to include images:
   ```bash
   docker run -d \
     --name xyz-service \
     --network xyz \
     -v "/mnt/d/CSM/wisenet_dataset:/usr/src/app/wisenet_dataset" \
     <flask-app-image-name>
   ```

2. **Notes**  
   - Replace `<flask-app-image-name>` with your Flask application image.  
   - The mounted path ensures that your application has access to the necessary dataset.

---

## Defining CSM Jobs

1. **Create a CSM Gist**  
   Example: GitHub Gist containing a serialized CSM (Pickle file).  

2. **Import Job**  
   ```python
   import "https://gist.githubusercontent.com/AlexZangerle/098a806902e4dd348d420483a0becfd4/raw/8881e8c166fb69a18e5fc3b6e0e9f2c5cd613873/buildingControlCSM.pkl" as BuildingControlCSM
   ```

3. **Define Service Implementations**  
   Example:
   ```scala
   serviceImplementations {
     new HttpServiceImplementationDescription {
       name = "detectSunLightService"
       cost = 1.0
       local = false
       scheme = "http"
       host = "building-service"
       port = 8005
       endPoint = "/detectSunLight"
       method = "POST"
     }
   }

   collaborativeStateMachine = BuildingControlCSM
   stateMachineName = "dummy"
   localData = new Mapping {}
   bindEventInstanceIds = new Listing {}
   runtimeName = "runtime"
   ```

4. **Submit Jobs via ZooKeeper**  
   Example Python script using `KazooClient`:
   ```python
   from kazoo.client import KazooClient

   zk = KazooClient(hosts=args.host)
   zk.start()
   zk.ensure_path("/jobs")

   node_path = "/jobs/job0"
   if zk.exists(node_path):
       zk.delete(node_path)

   with open(args.pkl_file, 'rb') as f:
       pkl_content = f.read()

   zk.create(node_path, pkl_content)
   print(f"Node '{node_path}' created successfully")
   ```
   > For multiple jobs, increment the node path: `/jobs/job1`, `/jobs/job2`, etc.

---

## Monitoring Setup

1. **Create `docker-compose.yaml`** with the following services:  
   - OpenTelemetry Collector: `otel/opentelemetry-collector-contrib:latest`  
   - Prometheus: `prom/prometheus:latest`  
   - Grafana: `grafana/grafana-oss:latest`  

2. **Expose Ports**  
   - OTEL Collector: `4317`  
   - Prometheus: `9090`  
   - Grafana: `3000`  

3. **Add Containers to the Same Network**  
   ```yaml
   networks:
     xyz:
       external: true
   ```

4. **Launch Monitoring Stack**  
   ```bash
   docker-compose up -d
   ```

5. **Configure Grafana**  
   - Open `http://localhost:3000`  
   - Go to **Data Sources** → Add Prometheus → URL: `http://prometheus:9090` → Save & Test  

6. **Prometheus Metrics**  
   Accessible at `http://localhost:9090/metrics`.

---

## Runtime Startup

1. **Ensure Required Containers Are Running**  
   - NATS  
   - ZooKeeper  
   - Flask App  
   - OTEL Collector  
   - Prometheus  
   - Grafana  

2. **Run Cirrina Container**  
   ```bash
   docker run --name cirrina-instance \
     --network xyz \
     -e OTEL_EXPORTER_OTLP_ENDPOINT="http://<otel-container-name>:4317" \
     <cirrina-image-name> \
     --nats-context-url nats://<nats-container-name>:4222/ \
     --nats-event-url nats://<nats-container-name>:4222/ \
     --zk-url <zookeeper-container-name>:2181
   ```

3. **Link Runtime Name to Jobs**  
   Update `runtimeName` in job files to match the runtime name created.  

4. **Submit First Job**  
   Use the `submit_job` script. For multiple jobs, change node paths (`/jobs/job0`, `/jobs/job1`, ...).

---

## Tracking and Observability

1. **Prometheus Metrics**  
   - Check that metrics are pulled from OTEL.  
   - Open `http://localhost:9090/metrics`.

2. **Grafana Dashboards**  
   - Open Grafana at `http://localhost:3000`.  
   - Create new dashboards → Add panels → Select metric (e.g., `cirrina-xyz`) → Refresh.

3. **Flask App Logs**  
   - Inspect logs to see received POST requests:  
     ```bash
     docker logs xyz-service
     ```

---

This README provides a complete guide from **environment setup**, **job definition**, to **runtime operation and monitoring**. It is intended for developers or operators deploying Cirrina in a Docker-based environment.

