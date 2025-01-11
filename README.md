# Uber Clone Microservices Project

This project is a simplified Uber-like application built using a microservices architecture. Each service operates independently, handling specific functionalities of the system.

---

## **Microservices Architecture**

The application consists of the following microservices:

1. **User Service**:
   - Handles user registration, authentication, and profile management.
   - Manages roles (e.g., rider, captain).

2. **Captain Service**:
   - Handles captain (driver) registration and availability.
   - Updates ride statuses (e.g., accepting, canceling, or completing a ride).

3. **Ride Service**:
   - Manages ride requests, ride statuses, and trip history.
   - Calculates fare dynamically based on distance.

4. **Gateway Service**:
   - Acts as the API Gateway, routing requests to the appropriate services.
   - Provides a unified entry point for all client applications.

---

## **Project Features**
- **Scalable Microservices**: Each service runs independently and communicates via REST APIs and RabbitMQ.
- **Authentication & Authorization**: Secure JWT-based authentication for both users and captains.
- **Asynchronous Communication**: RabbitMQ ensures seamless messaging between services.
- **Dynamic Fare Calculation**: Fare based on the distance between source and destination.
- **API Gateway**: Simplifies interaction between client and backend.

---

## **Technology Stack**
- **Programming Language**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (NoSQL database for persistence)
- **Messaging Queue**: RabbitMQ (for asynchronous communication)
- **Authentication**: JWT (JSON Web Tokens)

---

## **How to Run**

### Prerequisites:
- [Node.js](https://nodejs.org/) installed on your system.
- [MongoDB](https://www.mongodb.com/) running locally or in the cloud.
- [RabbitMQ](https://www.rabbitmq.com/) installed and configured.

