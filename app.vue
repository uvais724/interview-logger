<!-- filepath: g:\nodeJS_Udemy\interview-logger\app.vue -->
<template>
  <div>
    <!-- Navbar -->
    <Navbar />

    <!-- Page Content -->
    <div class="pt-16">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style>
/* Add global styles if needed */
body {
  padding-top: 4rem; /* Adjust for fixed navbar height */
}
</style>