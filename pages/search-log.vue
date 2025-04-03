<!-- filepath: g:\nodeJS_Udemy\interview-logger\pages\search-log.vue -->
<template>
  <div class="min-h-screen bg-base-200">
    <div class="container mx-auto p-6">
      <!-- Page Title -->
      <h1 class="text-3xl font-bold text-center mb-6">Search Interview Logs</h1>

      <!-- Search Form -->
      <div class="card bg-base-100 shadow-lg rounded-lg">
        <div class="card-body">
          <form @submit.prevent="searchLogs" class="space-y-6">
            <!-- Company -->
            <div class="form-control">
              <label class="label" for="company">
                <span class="label-text font-medium">Company</span>
              </label>
              <input
                type="text"
                id="company"
                v-model="filters.company"
                placeholder="Enter company name"
                class="input input-bordered w-full"
              />
            </div>

            <!-- Position -->
            <div class="form-control">
              <label class="label" for="position">
                <span class="label-text font-medium">Position</span>
              </label>
              <input
                type="text"
                id="position"
                v-model="filters.position"
                placeholder="Enter position"
                class="input input-bordered w-full"
              />
            </div>

            <!-- Location -->
            <div class="form-control">
              <label class="label" for="location">
                <span class="label-text font-medium">Location</span>
              </label>
              <input
                type="text"
                id="location"
                v-model="filters.location"
                placeholder="Enter location"
                class="input input-bordered w-full"
              />
            </div>

            <!-- Status -->
            <div class="form-control">
              <label class="label" for="status">
                <span class="label-text font-medium">Status</span>
              </label>
              <select
                id="status"
                v-model="filters.status"
                class="select select-bordered w-full"
              >
                <option value="">All</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <!-- Submit Button -->
            <div class="form-control">
              <button type="submit" class="btn btn-primary w-full">Search</button>
            </div>
          </form>
        </div>
      </div>

      <!-- Search Results -->
      <div v-if="results.length > 0" class="mt-6">
        <h2 class="text-2xl font-bold mb-4">Search Results</h2>
        <div class="overflow-x-auto">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Company</th>
                <th>Position</th>
                <th>Location</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="log in results" :key="log.id">
                <td>{{ log.company }}</td>
                <td>{{ log.position }}</td>
                <td>{{ log.location }}</td>
                <td>
                  <span :class="statusClass(log.status)" class="badge">
                    {{ log.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else-if="searched" class="mt-6">
        <p class="text-center text-lg">No results found.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Mock data (replace with API call if needed)
const interviewLogs = [
  {
    id: 1,
    company: 'Amazon',
    position: 'SDE-1',
    location: 'Seattle, WA',
    status: 'Completed',
  },
  {
    id: 2,
    company: 'Google',
    position: 'Software Engineer Intern',
    location: 'Mountain View, CA',
    status: 'Completed',
  },
  {
    id: 3,
    company: 'Microsoft',
    position: 'Cloud Engineer',
    location: 'Redmond, WA',
    status: 'In Progress',
  },
];

// Filters and results
const filters = ref({
  company: '',
  position: '',
  location: '',
  status: '',
});
const results = ref([]);
const searched = ref(false);

// Search logs based on filters
const searchLogs = () => {
  searched.value = true;
  results.value = interviewLogs.filter((log) => {
    return (
      (!filters.value.company || log.company.toLowerCase().includes(filters.value.company.toLowerCase())) &&
      (!filters.value.position || log.position.toLowerCase().includes(filters.value.position.toLowerCase())) &&
      (!filters.value.location || log.location.toLowerCase().includes(filters.value.location.toLowerCase())) &&
      (!filters.value.status || log.status === filters.value.status)
    );
  });
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