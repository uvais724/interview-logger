<template>
  <div>
    <h1>Add New Interview Log</h1>
    <form @submit.prevent="submitForm" @reset="resetForm">
      <div>
        <label for="company">Company:</label>
        <input type="text" id="company" v-model="form.company" required />
      </div>
      <div>
        <label for="position">Position:</label>
        <input type="text" id="position" v-model="form.position" required />
      </div>
      <div>
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="form.location" required />
      </div>
      <div>
        <label for="interview_date">Interview Date:</label>
        <input type="date" id="interview_date" v-model="form.interview_date" required />
      </div>
      <div>
        <label for="interview_type">Interview Type:</label>
        <select id="interview_type" v-model="form.interview_type" required>
          <option value="Onsite">Onsite</option>
          <option value="Phone">Phone</option>
          <option value="Virtual">Virtual</option>
        </select>
      </div>
      <div>
        <label for="skills">Skills (comma-separated):</label>
        <input type="text" id="skills" v-model="form.skills" required />
      </div>
      <div>
        <label for="total_days_taken">Total Days Taken:</label>
        <input type="number" id="total_days_taken" v-model="form.total_days_taken" required />
      </div>
      <div>
        <label for="status">Status:</label>
        <select id="status" v-model="form.status" required>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form data
const form = ref({
  company: '',
  position: '',
  location: '',
  interview_date: '',
  interview_type: '',
  skills: '',
  total_days_taken: '',
  status: '',
});

// Submit form
const submitForm = () => {
  const newLog = {
    ...form.value,
    id: Date.now(), // Generate a unique ID
    skills: form.value.skills.split(',').map((skill) => skill.trim()), // Convert skills to an array
  };

  console.log('New Interview Log:', newLog); // Replace this with an API call to save the data
  alert('Interview log added successfully!');
  router.push('/'); // Navigate back to the home page
};

// Reset form
const resetForm = () => {
  form.value = {
    company: '',
    position: '',
    location: '',
    interview_date: '',
    interview_type: '',
    skills: '',
    total_days_taken: '',
    status: '',
  };
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
</style>