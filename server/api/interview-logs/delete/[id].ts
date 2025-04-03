import { defineEventHandler, getRouterParam } from 'h3';
import { connectToDatabase } from '~/server/utils/mongodb';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const id = getRouterParam(event, 'id');
  const result = await db.collection('interview_logs').deleteOne({ _id: new ObjectId(id) });
  return { success: result.deletedCount > 0 };
});