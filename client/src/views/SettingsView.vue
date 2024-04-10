<template>
  <Nav />
  <div class="min-h-screen bg-slate-100 py-8">
    <div style="max-width: 1200px;" class="max-w-lg mx-auto py-8 px-4 bg-white shadow-md rounded-lg">
      <!-- Header -->
      <h1 class="text-2xl font-semibold mb-4 text-center">Settings</h1>

      <!-- Change Email Section -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">Change Email</h2>
        <form @submit.prevent="changeEmail">
          <div class="mb-4">
            <label for="newEmail" class="block text-sm font-medium text-gray-700">New Email</label>
            <input id="newEmail" type="email" v-model="newEmail"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
          <button type="submit"
            class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Change
            Email</button>
        </form>
      </div>

      <!-- Change Password Section -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">Change Password</h2>
        <form @submit.prevent="changePassword">
          <!-- Current password input -->
          <div class="mb-4">
            <label for="currentPassword" class="block text-sm font-medium text-gray-700">Current Password</label>
            <input id="currentPassword" type="password" v-model="currentPassword"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
          <!-- New password input -->
          <div class="mb-4">
            <label for="newPassword" class="block text-sm font-medium text-gray-700">New Password</label>
            <input id="newPassword" type="password" v-model="newPassword"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
          <!-- Confirm new password input -->
          <div class="mb-4">
            <label for="confirmNewPassword" class="block text-sm font-medium text-gray-700">Confirm New Password</label>
            <input id="confirmNewPassword" type="password" v-model="confirmNewPassword"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
          <!-- Submit button -->
          <button type="submit"
            class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Change
            Password</button>
        </form>
      </div>

      <!-- Delete Account Section -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold mb-2">Delete Account</h2>
        <form @submit.prevent="deleteAccount">
          <!-- Password input for confirmation -->
          <div class="mb-4">
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input id="confirmPassword" type="password" v-model="confirmPassword"
              class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          </div>
          <!-- Submit button -->
          <button type="submit"
            class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Delete
            Account</button>
        </form>
      </div>

      <!-- Sessions Section -->
      <div>
        <h2 class="text-lg font-semibold mb-2">Sessions</h2>
        <!-- List of active sessions -->
        <ul class="divide-y divide-gray-200">
          <li v-for="session in sessions" :key="session.id" class="py-3 flex justify-between">
            <!-- Device type -->
            <div>
              <span class="font-semibold">{{ session.device }}</span>
            </div>
            <!-- Login time -->
            <div>
              <span>{{ formatDate(session.loginTime) }}</span>
            </div>
            <!-- Logout button -->
            <div>
              <button @click="logoutFromSession(session.id)" class="text-red-500 hover:text-red-700">Logout</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/user/Nav.vue';

export default {
  data() {
    return {
      newEmail: '',
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
      confirmPassword: '',
      sessions: [
        { id: 1, device: 'Desktop', loginTime: new Date() },
        { id: 2, device: 'Mobile', loginTime: new Date() }
      ]
    };
  },
  components: {
    Nav: Nav
  },
  methods: {
    changeEmail() {
      // Implement email change logic
    },
    changePassword() {
      // Implement password change logic
    },
    deleteAccount() {
      // Implement account deletion logic
    },
    logoutFromSession(sessionId) {
      // Implement session logout logic
    },
    formatDate(date) {
      // Format date as needed
      return date.toLocaleString();
    }
  }
};
</script>

<style>
/* Add your custom styles here */
</style>
