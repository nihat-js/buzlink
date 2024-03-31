<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" v-if="!isLogin">
          Register to BuzLink
        </h2>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" v-else>
          Login to BuzLink
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="isLogin ? login() : register()">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address" v-model="form.email">
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password" v-model="form.password">
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5 10a1 1 0 011-1h8a1 1 0 011 1v5a1 1 0 001 1 1 1 0 001-1v-5a1 1 0 00-1-1H5a1 1 0 00-1 1v5a1 1 0 001 1 1 1 0 001-1v-5z"
                  clip-rule="evenodd" />
                <path d="M9 4a3 3 0 016 0v3H9V4z" />
              </svg>
            </span>
            {{ isLogin ? 'Login' : 'Register' }}
          </button>
        </div>
      </form>
      <div class="text-sm text-center">
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500" @click="toggleForm">
          {{ isLogin ? 'Need an account? Register' : 'Already have an account? Login' }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from "../stores/auth.js"
import { useRouter } from 'vue-router';

const authStore = useAuthStore()
const router = useRouter()

const isLogin = ref(false)
const form = ref({
  email: '',
  password: ''
})

const toggleForm = () => { isLogin.value = !isLogin.value }
const register = async () => {
  await authStore.register({email:form.value.email,password: form.value.password},router);
}
const login = async () => {
  await authStore.login({email:form.value.email,password: form.value.password},router);
}

</script>

<style>
/* Add your Tailwind CSS styles here */
</style>
