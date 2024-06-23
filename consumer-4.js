import {Kafka} from "kafkajs";

const kafka = new Kafka({
  clientId: 'my-consumer-app-4',
  brokers: ['localhost:9092']
})

const consumer = kafka.consumer({ groupId: 'test-group-4' })

const run = async () => {
  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: false })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Consumer 4 - ${topic}[${partition} | ${message.offset}] ${message.value.toString()}`)
    },
  })
  
  //Will work only if in topic exist more than 5 messages
  consumer.seek({ topic: 'test-topic', partition: 0, offset: 5 })
}

run().catch(console.error)