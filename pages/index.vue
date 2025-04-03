<!-- filepath: g:\nodeJS_Udemy\interview-logger\pages\index.vue -->
<template>
  <div class="min-h-screen bg-base-200">
    <div class="container mx-auto p-4">
      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="table w-full">
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
              <td>
                <span :class="statusClass(log.status)" class="badge">
                  {{ log.status }}
                </span>
              </td>
              <td>
                <button class="btn btn-sm btn-accent" @click="goToDetails(log.id)">Show More</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
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

// Dynamic class for status badge
const statusClass = (status) => {
  switch (status) {
    case 'Completed':
      return 'badge-success';
    case 'In Progress':
      return 'badge-warning';
    case 'Pending':
      return 'badge-error';
    default:
      return 'badge-neutral';
  }
};
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>