import { defineEventHandler, getRouterParam } from 'h3';
import { connectToDatabase } from '~/server/utils/mongodb';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const id = getRouterParam(event, 'id');
  const log = await db.collection('interview_logs').findOne({ _id: new ObjectId(id) });
  return log || { error: 'Log not found' };
});