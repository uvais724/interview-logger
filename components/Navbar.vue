<!-- filepath: g:\nodeJS_Udemy\interview-logger\components\Navbar.vue -->
<template>
  <div class="navbar bg-base-100 shadow-lg fixed top-0 left-0 w-full z-10">
    <div class="container mx-auto">
      <!-- Logo -->
      <div class="flex-1">
        <a
          class="btn btn-ghost normal-case text-xl ml-2"
          :class="{ 'text-primary': isActive('/') }"
          @click="navigateTo('/')"
        >
          Interview Logger
        </a>
      </div>

      <!-- Navigation Links -->
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li>
            <a
              :class="{ 'active text-primary': isActive('/search-log') }"
              @click="navigateTo('/search-log')"
            >
              Search Interview
            </a>
          </li>
          <li>
            <a
              :class="{ 'active text-primary': isActive('/add-log') }"
              @click="navigateTo('/add-log')"
            >
              Add Interview
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// Function to navigate to a specific route
const navigateTo = (path) => {
  router.push(path);
};

// Function to check if the current route matches the given path
const isActive = (path) => {
  return route.path === path;
};
</script>

<style scoped>
.navbar {
  margin-bottom: 1rem;
}

.active {
  font-weight: bold;
  border-bottom: 2px solid var(--tw-color-primary);
}
</style>