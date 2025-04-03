<template>
  <div>
    <h1>Interview Logs</h1>
    <button @click="goToAddLog">Add Interview</button>
    <button @click="goToSearchLog">Search Interview</button>
    <table>
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Location</th>
          <th>Total Days Taken</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="log in interviewLogs" :key="log.id">
          <td>{{ log.company }}</td>
          <td>{{ log.position }}</td>
          <td>{{ log.location }}</td>
          <td>{{ log.total_days_taken }}</td>
          <td>{{ log.status }}</td>
          <td>
            <button @click="goToDetails(log.id)">Show More</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

// Mock data (replace with API call if needed)
const interviewLogs = [
  {
    id: 1,
    company: 'Amazon',
    position: 'SDE-1',
    location: 'Seattle, WA',
    total_days_taken: 5,
    status: 'Completed',
  },
  {
    id: 2,
    company: 'Google',
    position: 'Software Engineer Intern',
    location: 'Mountain View, CA',
    total_days_taken: 3,
    status: 'Completed',
  },
];

// Navigate to the interview-log page with the selected log ID
const goToDetails = (id) => {
  router.push(`/interview-log/${id}`);
};

// Navigate to the add-log page
const goToAddLog = () => {
  router.push('/add-log');
};

// Navigate to the search-log page
const goToSearchLog = () => {
  router.push('/search-log');
};
</script>

<style scoped>
button {
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>