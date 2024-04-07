import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import { useAuthStore } from '@/stores/auth'
import WelcomeView from '@/views/WelcomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import SettingsView from '@/views/SettingsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { mustLogin: true },

    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { mustLogin: true },
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView,
      meta: { mustLogin: true },
    },
  ]
})

router.beforeEach(function (from, to) {
  if (to.meta?.mustLogin) {
    console.log('Must login')

  }
})

export default router
