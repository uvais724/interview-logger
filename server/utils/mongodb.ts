import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/interview-logger';
const client = new MongoClient(uri);

let db: any;

export async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db(); // Use the default database from the URI
  }
  return db;
}