import {Kafka} from "kafkajs";

const kafka = new Kafka({
  clientId: 'my-consumer-app-1',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'test-group' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Consumer 1 - ${topic}[${partition} | ${message.offset}] ${message.value}`)
    },
  })
}

run().catch(console.error)