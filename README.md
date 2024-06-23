# Kafka Node.js Demo

This repository demonstrates a simple setup of Apache Kafka with a Node.js producer and consumer. Apache Kafka is managed with Docker using `docker-compose`.

## Prerequisites

- Docker
- Docker Compose
- Node.js

## Setup

1. Start Kafka and Zookeeper using Docker Compose:
```
docker-compose up -d
```

2. Install Node.js dependencies:
```
npm install
```

3. Run the app for produce a message to Kafka:
```
npm start
```

4. Run the consumer to read messages from Kafka:
```
node consumer-1.js
```
