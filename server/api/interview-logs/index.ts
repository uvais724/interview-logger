import { defineEventHandler } from 'h3';
import { connectToDatabase } from '~/server/utils/mongodb';

export default defineEventHandler(async () => {
  const db = await connectToDatabase();
  const logs = await db.collection('interview_logs').find().toArray();
  return logs;
});