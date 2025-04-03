<template>
  <div>
    <h1>Search Interview Logs</h1>
    <form @submit.prevent="searchLogs">
      <div>
        <label for="company">Company:</label>
        <input type="text" id="company" v-model="filters.company" placeholder="Enter company name" />
      </div>
      <div>
        <label for="position">Position:</label>
        <input type="text" id="position" v-model="filters.position" placeholder="Enter position" />
      </div>
      <div>
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="filters.location" placeholder="Enter location" />
      </div>
      <div>
        <label for="status">Status:</label>
        <select id="status" v-model="filters.status">
          <option value="">All</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div>
        <button type="submit">Search</button>
      </div>
    </form>

    <div v-if="results.length > 0">
      <h2>Search Results</h2>
      <table>
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
            <td>{{ log.status }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="searched">
      <p>No results found.</p>
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
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 0 auto;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, select, button {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  width: auto;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>