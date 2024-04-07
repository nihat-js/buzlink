<template>
  <nav class="bg-gray-800 text-white">
    <div class="container mx-auto px-6 py-3 flex justify-between items-center">
      <router-link class="text-xl font-semibold" to="/dashboard">MyApp</router-link>
      <div class="flex items-center">
        <router-link to="/profile" class="px-3 py-2 rounded-md text-sm font-medium">Profile</router-link>
        <router-link to="/add" class="px-3 py-2 rounded-md text-sm font-medium">Add URL</router-link>
        <!-- More navigation items here -->
        <router-link to="/settings" class="px-3 py-2 rounded-md text-sm font-medium">Settings</router-link>
        <button @click="logout" class="px-3 py-2 rounded-md text-sm font-medium">Logout</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    // Define your logout method here
    const logout = () => {
      // Perform logout logic
    };

    return {
      logout,
    };
  },
};
</script>
