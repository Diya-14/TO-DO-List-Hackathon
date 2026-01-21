# Phase 5: Event-Driven Microservices Architecture

## Overview

This phase introduces an Event-Driven Architecture (EDA) to the Todo AI Chatbot system. By decoupling services using asynchronous events, we improve scalability, fault tolerance, and extensibility without modifying the core synchronous logic of the existing backend.

## Core Components

### 1. Dapr (Distributed Application Runtime)
We use Dapr as a sidecar to abstract the underlying message broker implementation. This allows the application to publish and subscribe to events using a standard HTTP/gRPC API, regardless of whether the infrastructure is Redis, Kafka, or RabbitMQ.

**Why Dapr?**
- **Abstraction:** Developers focus on "Publishing an Event" rather than "Connecting to Kafka partition X".
- **Sidecar Pattern:** No SDK bloat in the application code.
- **Flexibility:** Switch from Redis (dev) to Kafka (prod) by changing YAML, not code.

### 2. Kafka (via Redpanda)
We use the Kafka protocol for high-throughput, persistent message streaming. Redpanda is chosen as the implementation because it is a single-binary, free, source-available, Kafka-API-compatible streaming platform that is extremely lightweight for local development and scalable for production.

**Why Kafka/Redpanda?**
- **Durability:** Events are persisted. If a service is down, it can replay events when it comes back online.
- **Scalability:** Multiple instances of a service (Consumer Groups) can process events in parallel.
- **Decoupling:** The Backend does not need to know if the Audit Service is online or offline.

## Architecture Flow

1.  **Event Generation:** The existing Backend API performs an action (e.g., creates a todo item).
2.  **Publish:** Instead of calling a downstream service directly, it calls the local Dapr sidecar endpoint (e.g., `POST /v1.0/publish/pubsub/task.created`).
3.  **Broker:** Dapr forwards this to the configured Pub/Sub component (Redpanda/Kafka).
4.  **Subscribe:** Microservices (Reminder, Audit) have Dapr sidecars configured to subscribe to specific topics.
5.  **Consume:** When an event arrives, Dapr invokes the service's callback endpoint (e.g., `POST /events/task-created`).

## Benefits

*   **Fault Tolerance:** If the Audit Service crashes, the Backend continues to function. The events pile up in Kafka and are processed once the Audit Service recovers.
*   **Extensibility:** Adding a new "Gamification Service" later requires ZERO changes to the Backend. It simply subscribes to `task.completed` topics.
*   **Performance:** High-latency tasks (like sending emails or generating reports) are moved out of the user-facing request loop.
