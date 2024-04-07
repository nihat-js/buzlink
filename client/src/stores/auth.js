// store/auth.js
import instance from '@/services/api';
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';


export const useAuthStore = defineStore('auth', () => {

  const user = ref({
    accessToken: null,
    username: null,
    profileImage: null,
    email: null,
    role: null,
  })

  function isAuthenticated() {
    user.isAuthenticated ? true : false
  }

  function setUserAndAccessToken(data) {
    user.email = data.email
    user.profileImage = data.profileImage
    console.log('access token', data.accessToken)
    instance.defaults.headers.common["Authorization"] = "Bearer " + data.accessToken
  }

  async function refreshToken() {
    const response = await instance.post("auth/refresh-token", {
      token: true,
    },
      {
        withCredentials: true
      })
    if (response.status === 200) {
      setUserAndAccessToken(response.data.data)
    }
  }


  async function login({ email, password }, router) {
    const response = await instance.post("auth/login", {
      email,
      password
    }, {
      withCredentials: true
    })
    if (response.status === 200) {
      setUserAndAccessToken(response.data)
      router.push("/")
    }

  }

  async function register({ email, password }, router) {
    // console.log("starting ", email, password)
    const response = await instance.post("auth/register", {
      email,
      password
    }, {
      withCredentials: true
    })
    if (response.status === 201) {
      setUserAndAccessToken(response.data.data)
      router.push("/")
    }
  }

  function logout() {
    setUserAndAccessToken({})
  }

  return { user, login, register, logout, refreshToken };
});
