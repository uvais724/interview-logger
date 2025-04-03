import { defineEventHandler, readBody, getRouterParam } from 'h3';
import { connectToDatabase } from '~/server/utils/mongodb';
import { ObjectId } from 'mongodb';

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const id = getRouterParam(event, 'id');
  const body = await readBody(event);
  const result = await db.collection('interview_logs').updateOne(
    { _id: new ObjectId(id) },
    { $set: body }
  );
  return { success: result.modifiedCount > 0 };
});