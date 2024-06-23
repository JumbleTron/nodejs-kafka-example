import {Kafka} from "kafkajs";

const kafka = new Kafka({
  clientId: 'my-consumer-app-3',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'test-group-2' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Consumer 3 - ${topic}[${partition} | ${message.offset}] ${message.value}`)
    },
  })
}

run().catch(console.error)