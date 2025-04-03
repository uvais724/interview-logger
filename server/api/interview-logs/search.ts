import { defineEventHandler, getQuery } from 'h3';
import { connectToDatabase } from '~/server/utils/mongodb';

export default defineEventHandler(async (event) => {
  const db = await connectToDatabase();
  const query = getQuery(event);

  // Build the search filter
  const filter: any = {};
  if (query.company) {
    filter.company = { $regex: query.company, $options: 'i' }; // Case-insensitive search
  }
  if (query.position) {
    filter.position = { $regex: query.position, $options: 'i' };
  }
  if (query.location) {
    filter.location = { $regex: query.location, $options: 'i' };
  }
  if (query.status) {
    filter.status = query.status;
  }

  // Fetch matching logs from the database
  const results = await db.collection('interview_logs').find(filter).toArray();
  return results;
});