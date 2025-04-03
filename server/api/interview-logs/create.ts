import { defineEventHandler, readBody } from 'h3';
import { connectToDatabase } from '~/server/utils/mongodb';

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const body = await readBody(event);
  const result = await db.collection('interview_logs').insertOne(body);
  return { success: true, id: result.insertedId };
});