<template>
  <div>
    <h1>Interview Details</h1>
    <div v-if="log">
      <p><strong>Company:</strong> {{ log.company }}</p>
      <p><strong>Position:</strong> {{ log.position }}</p>
      <p><strong>Location:</strong> {{ log.location }}</p>
      <p><strong>Interview Date:</strong> {{ log.interview_date }}</p>
      <p><strong>Interview Type:</strong> {{ log.interview_type }}</p>
      <p><strong>Skills:</strong> {{ log.skills.join(', ') }}</p>
      <p><strong>Rounds:</strong></p>
      <ul>
        <li v-for="round in log.rounds" :key="round.round_number">
          <strong>Round {{ round.round_number }}:</strong>
          <ul>
            <li><strong>Questions:</strong> {{ round.questions.join(', ') }}</li>
            <li><strong>Feedback:</strong> {{ round.feedback }}</li>
          </ul>
        </li>
      </ul>
      <p><strong>Interview Rating:</strong> {{ log.interview_rating }}</p>
      <p><strong>Takeaways:</strong> {{ log.takeaways.join(', ') }}</p>
      <p><strong>Total Days Taken:</strong> {{ log.total_days_taken }}</p>
      <p><strong>Status:</strong> {{ log.status }}</p>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();
const log = ref(null);

// Mock data (replace with API call if needed)
const interviewLogs = [
  {
    id: 1,
    company: 'Amazon',
    position: 'SDE-1',
    location: 'Seattle, WA',
    interview_date: '2023-10-01',
    interview_type: 'Onsite',
    skills: ['Java', 'AWS', 'Data Structures', 'Algorithms'],
    rounds: [
      {
        round_number: 1,
        questions: [
          'Tell me about yourself.',
          'What is your favorite data structure and why?',
          'How do you handle conflicts in a team?',
        ],
        feedback: 'Strong technical skills, good cultural fit.',
      },
      {
        round_number: 2,
        questions: [
          'Explain the concept of polymorphism.',
          'How would you optimize a slow SQL query?',
          'Describe a challenging project you\'ve worked on.',
        ],
        feedback: 'Excellent problem-solving skills.',
      },
    ],
    interview_rating: 4.5,
    takeaways: ['Prepare for behavioral questions.', 'Brush up on AWS services.'],
    total_days_taken: 5,
    status: 'Completed',
  },
  {
    id: 2,
    company: 'Google',
    position: 'Software Engineer Intern',
    location: 'Mountain View, CA',
    interview_date: '2023-10-05',
    interview_type: 'Phone',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
    rounds: [
      {
        round_number: 1,
        questions: [
          'What is your experience with Python?',
          'Explain the difference between supervised and unsupervised learning.',
          'How do you handle missing data in a dataset?',
        ],
        feedback: 'Good understanding of ML concepts.',
      },
    ],
    interview_rating: 4.0,
    takeaways: ['Focus on Python libraries for data analysis.', 'Understand ML algorithms in depth.'],
    total_days_taken: 3,
    status: 'Completed',
  },
];

// Fetch the log details based on the ID from the route
onMounted(() => {
  const id = parseInt(route.params.id, 10);
  log.value = interviewLogs.find((item) => item.id === id);
});
</script>

<style scoped>
p {
  margin: 10px 0;
}

ul {
  margin: 10px 0;
  padding-left: 20px;
}
</style>