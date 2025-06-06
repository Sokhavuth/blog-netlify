import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()
const uri = process.env.MONGO_URL
let client

if (process.env.NODE_ENV === "production") {
  client = new MongoClient(uri)
} else {
  if (!global.client) {
    global.client = new MongoClient(uri)
  }

  client = global.client
}

export default client