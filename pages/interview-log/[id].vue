<!-- filepath: g:\nodeJS_Udemy\interview-logger\pages\interview-log\[id].vue -->
<template>
  <div class="min-h-screen bg-base-200">
    <div class="container mx-auto p-4">
      <!-- Card for Interview Details -->
      <div class="card bg-base-100 shadow-lg rounded-lg">
        <div class="card-body">
          <h2 class="card-title text-2xl">Interview Details</h2>
          <div v-if="log">
            <!-- Basic Details -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <p><strong>Company:</strong> {{ log.company }}</p>
              <p><strong>Position:</strong> {{ log.position }}</p>
              <p><strong>Location:</strong> {{ log.location }}</p>
              <p><strong>Interview Date:</strong> {{ log.interview_date }}</p>
              <p><strong>Interview Type:</strong> {{ log.interview_type }}</p>
              <p><strong>Skills:</strong> {{ log.skills.join(', ') }}</p>
            </div>

            <!-- Rounds -->
            <div class="mt-6">
              <h3 class="text-xl font-bold">Rounds</h3>
              <div
                class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-4"
                v-for="round in log.rounds"
                :key="round.round_number"
              >
                <input type="checkbox" />
                <div class="collapse-title text-lg font-medium">
                  Round {{ round.round_number }}
                </div>
                <div class="collapse-content">
                  <!-- Questions Section -->
                  <p class="font-bold text-lg mb-2">Questions:</p>
                  <ul class="list-disc list-inside space-y-2">
                    <li v-for="(question, index) in round.questions" :key="index" class="text-base leading-relaxed">
                      {{ question }}
                    </li>
                  </ul>

                  <!-- Feedback Section -->
                  <p class="font-bold text-lg mt-4">Feedback:</p>
                  <p class="text-base leading-relaxed text-gray-700">
                    {{ round.feedback }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Additional Details Section -->
            <div class="mt-6">
              <h3 class="text-xl font-bold mb-4">Additional Details</h3>
              <div class="grid grid-cols-1 gap-4">
                <!-- Takeaways -->
                <div>
                  <p class="font-medium text-lg mb-2">Takeaways:</p>
                  <ul class="list-disc list-inside space-y-2">
                    <li v-for="(takeaway, index) in log.takeaways" :key="index" class="text-base leading-relaxed">
                      {{ takeaway }}
                    </li>
                  </ul>
                </div>
            
                <!-- Interview Rating -->
                <p class="text-base leading-relaxed">
                  <strong class="font-medium">Interview Rating:</strong> {{ log.interview_rating }}
                </p>
            
                <!-- Total Days Taken -->
                <p class="text-base leading-relaxed">
                  <strong class="font-medium">Total Days Taken:</strong> {{ log.total_days_taken }}
                </p>
            
                <!-- Status -->
                <p class="text-base leading-relaxed">
                  <strong class="font-medium">Status:</strong>
                  <span :class="statusClass(log.status)" class="badge">
                    {{ log.status }}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Loading...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const log = ref(null);


// Fetch the log details based on the ID from the route
onMounted(async () => {
  const response = await fetch(`/api/interview-logs/${route.params.id}`);
  log.value = await response.json();
});

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