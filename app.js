import express from 'express';
import { Kafka } from "kafkajs";

const app = express();
const port = 3010

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/produce', async (req, res) => {
  const kafka = new Kafka({
    clientId: 'my-producer-app',
    brokers: ['localhost:9092']
  })
  
  const producer = kafka.producer()
  await producer.connect()
  
  try {
    const result = await producer.send({
      topic: 'test-topic',
      messages: [
        //{ value: 'Hello KafkaJS user!' },
        //{ value: 'Other message publish in the same time' },
        { value: Math.random().toString() },
      ],
    })
    res.send('Message produce')
    console.log('Message sent successfully', result)
  } catch (err) {
    res.send('Message produce error')
    console.error('Error sending message', err)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})