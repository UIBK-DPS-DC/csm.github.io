---
title: Collaborative State Machines (CSM)
layout: about
description: about
permalink: "/about/"
---

## Overview  
This project introduces **Collaborative State Machines (CSM)**, a disruptive programming model designed for developing **reactive, event-driven, and stateful applications** across the **Cloud–Edge–IoT continuum**.

Unlike conventional models (e.g., DAG-based workflows, SOA, or serverless systems), CSM explicitly leverages **formal state machines** as first-class programming abstractions. Applications consist of multiple **state machines that collaborate** as a homogeneous distributed system, enabling:  
- Fine-grained **event handling**  
- **State encapsulation** (inherent and shared)  
- Integration of **actions and services**  
- **Advanced data models** with local, static, and persistent lifetimes  
- **Efficient distributed scheduling** across heterogeneous environments

---

## Key Features

### ​ Collaborative State Machines  
- Multiple state machines form distributed applications behaving as a single logical system.  
- Collaboration via **event propagation** and **shared persistent data**.

### ​ Reactive and Event-Driven Behavior  
- Event handling at multiple levels: applications, machines, states, and transitions.  
- Supports autonomous adaptation to dynamic environmental conditions.

### ​ Stateful Computing  
- **State as a core concept**:  
  - **Inherent state**: local to each machine.  
  - **Shared state**: persistent, low-latency data accessible across machines.

### ​ Advanced Data Model  
- Supports multiple data scopes and lifetimes:  
  - **Local**: valid during a state’s execution.  
  - **Static**: preserved throughout a state lifecycle.  
  - **Persistent**: globally available across machines.

### ​ Intelligent Scheduling  
- **Dynamic multi-objective scheduling** optimizes:  
  - Response times  
  - Resource utilization  
  - Costs and energy consumption  
- Leverages contextual knowledge embedded in state machines to enhance placement decisions across the continuum.

### ​​ Virtual Architectures (VAs)  
- High-level abstraction for **infrastructure orchestration**.  
- Decouples application logic from specific underlying resources or platforms.  
- Enables **adaptive, event-driven orchestration**, addressing the limitations of traditional IaC tools.

---

## CSM Platform

The CSM ecosystem includes:

- **CSM API**: A high-level programming interface for building collaborative state machine applications.  
- **CSML (Collaborative State Machine Language)**: A formal, expressive language for defining machine behavior, states, actions, and transitions.  
- **Runtime System**: A distributed execution engine that orchestrates state machines and computational services.  
- **Scheduler**: A multi-objective optimizer balancing cost, latency, and efficiency.  
- **Resource Manager**: Orchestrates deployment across heterogeneous infrastructure using Virtual Architectures.

**System Architecture:**  
1. Applications described using **CSML**  
2. Mapped and optimized by **scheduler + resource manager**  
3. Deployed on the **runtime system** across IoT, edge, and cloud environments

---

## Scientific and Industrial Impact

- **Advances programming models** by moving beyond DAG-based workflows and serverless paradigms.  
- **Boosts developer productivity** with reusable abstractions and a high-level API.  
- **Enhances system performance** through intelligent, context-aware scheduling.  
- **Improves sustainability** via efficient resource allocation across multi-cluster infrastructures.

---

## Use Cases

### ​ NextGenSmartBuilding (NGSB, Industrial Use Case)  
An event-driven smart building system with services for:  
- **Energy efficiency** (e.g., HVAC optimization by occupancy)  
- **Fire safety** (e.g., real-time evacuation, fire door control)  
- **Automation** (e.g., lighting and elevator control)

**Current limitations:**  
- Fragmented components deployed across heterogeneous systems  
- Lack of holistic state limits optimization

**CSM improvements:**  
- Unified service collaboration via shared state and multi-layer events  
- Adaptive real-time optimization → **25 % faster response times**, **20 % lower operational cost**

<div class="text-center my-3">
  <img src="/images/illustrations/usecase.png" alt="Figure 1: An example of a CSM-based smart building." class="img-fluid" style="max-width: 60%;">
  <p class="text-muted fst-italic mt-2">
    Figure 1: An example of a CSM-based smart building..
  </p>
</div>

### ​ Scientific Applications  
CSM is evaluated on two infrastructures—**Grid’5000** and the **Austrian Federated Computing Continuum (AFCC)**—through four scientific applications:  
1. **Stress Testing** – Scales states, events, and persistent data access  
2. **Railway Crossing** – Safety-critical control system  
3. **Intelligent Surveillance** – Event-driven monitoring  
4. **Smart Factory** – Automated industrial control

Expected results:  
- **Scalability** ↑ 20 %  
- **Response times** ↓ 25 %  
- **Costs** ↓ 30 %

---

## Research Foundations

### Academic Background  
- Builds on **Cirrina Runtime** (UIBK), a DAG-based execution prototype.  
- Builds upon research frameworks such as **Askalon**, **Apollo**, and projects like **CELERITY**, **INPACT**, **ENTICE**, and **LIGATE**.

### Industrial Background  
- Collaboration with **SIPLAN**, contributing real-world infrastructure and industrial use cases (e.g., Tiroler Cloud, Smart City Hub Innsbruck, NGSB).

---

## Formal Foundations

- Based on **Statecharts** (Harel) for modeling reactive systems.  
- Incorporates **Finite-State Transducers (FSTs)** with Mealy and Moore semantics.  
- Formalized using **Abstract State Machines (ASMs)** to ensure correctness, consistency, and termination.  
- Bridges rigorous theory and practical distributed execution.

---

## Expected Outcomes

1. **Open-source CSM API and Platform** for developers.  
2. **CSML** for formal distributed application descriptions.  
3. **Dynamic scheduler and VA-based orchestration** for optimized deployments.  
4. **Demonstrated improvements** in productivity, performance, and efficiency.  
5. **Scientific contributions** in programming models and distributed systems orchestration.

---

## Evaluation Platforms  

- **Grid’5000**: Europe’s largest academic edge-cloud testbed—666 compute nodes, 21,000 cores.  
- **AFCC**: Four-site Austrian edge-cloud infrastructure—1,588 cores, 5 TB memory, 40 TB storage.

---

## License  
The CSM API and Platform will be made available as **open source** under a permissive license (TBD).

---

## Citation  

```bash
@article{etheredge2025collaborative,
  title={Collaborative State Machines: A Better Programming Model for the Cloud-Edge-IoT Continuum},
  author={Etheredge, Marlon and Fahringer, Thomas and Erlacher, Felix and Kohler, Elias and Pedratscher, Stefan and Aznar-Poveda, Juan and Saurabh, Nishant and Lebre, Adrien},
  journal={arXiv preprint arXiv:2507.21685},
  year={2025}
}
```

---
