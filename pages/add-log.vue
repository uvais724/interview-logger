<template>
  <div class="min-h-screen bg-base-200">
    <div class="container mx-auto p-6">
      <div class="card bg-base-100 shadow-lg rounded-lg">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-6">Add New Interview Log</h2>
          <form @submit.prevent="submitForm" @reset="resetForm" class="space-y-6">
            <!-- Company -->
            <div class="form-control">
              <label class="label" for="company">
                <span class="label-text font-medium">Company</span>
              </label>
              <input
                type="text"
                id="company"
                v-model="form.company"
                placeholder="Enter company name"
                class="input input-bordered w-full"
                required
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
                v-model="form.position"
                placeholder="Enter position"
                class="input input-bordered w-full"
                required
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
                v-model="form.location"
                placeholder="Enter location"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Interview Date -->
            <div class="form-control">
              <label class="label" for="interview_date">
                <span class="label-text font-medium">Interview Date</span>
              </label>
              <input
                type="date"
                id="interview_date"
                v-model="form.interview_date"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Interview Type -->
            <div class="form-control">
              <label class="label" for="interview_type">
                <span class="label-text font-medium">Interview Type</span>
              </label>
              <select
                id="interview_type"
                v-model="form.interview_type"
                class="select select-bordered w-full"
                required
              >
                <option value="" disabled>Select interview type</option>
                <option value="Onsite">Onsite</option>
                <option value="Phone">Phone</option>
                <option value="Virtual">Virtual</option>
              </select>
            </div>

            <!-- Skills -->
            <div class="form-control">
              <label class="label" for="skills">
                <span class="label-text font-medium">Skills (comma-separated)</span>
              </label>
              <input
                type="text"
                id="skills"
                v-model="form.skills"
                placeholder="Enter skills"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Total Days Taken -->
            <div class="form-control">
              <label class="label" for="total_days_taken">
                <span class="label-text font-medium">Total Days Taken</span>
              </label>
              <input
                type="number"
                id="total_days_taken"
                v-model="form.total_days_taken"
                placeholder="Enter total days taken"
                class="input input-bordered w-full"
                required
              />
            </div>

            <!-- Status -->
            <div class="form-control">
              <label class="label" for="status">
                <span class="label-text font-medium">Status</span>
              </label>
              <select
                id="status"
                v-model="form.status"
                class="select select-bordered w-full"
                required
              >
                <option value="" disabled>Select status</option>
                <option value="Completed">Completed</option>
                <option value="In Progress">In Progress</option>
                <option value="Pending">Pending</option>
              </select>
            </div>

            <!-- Buttons -->
            <div class="form-control flex gap-4">
              <button type="submit" class="btn btn-primary w-full md:w-auto">Submit</button>
              <button type="reset" class="btn btn-secondary w-full md:w-auto">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
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
const submitForm = async () => {
  try {
    const newLog = {
      ...form.value,
      skills: form.value.skills.split(',').map((skill) => skill.trim()), // Convert skills to an array
    };

    const response = await fetch('/api/interview-logs/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newLog),
    });

    if (!response.ok) {
      throw new Error('Failed to create interview log');
    }

    const result = await response.json();

    alert('Interview log added successfully!');
    router.push('/'); // Navigate back to the home page
  } catch (error) {
    console.error(error);
    alert('Failed to add interview log. Please try again.');
  }
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
/* Add any additional styles here if needed */
</style>