import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import { useAuthStore } from '@/stores/auth'
import WelcomeView from '@/views/WelcomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: function (to, from) {
        console.log("Entering...")
        const auth = useAuthStore()
        if (!auth.isLogged) {
          return '/welcome'
        }
        console.log("authenticating...", auth.user.username)
        // server.post("/check-token")
        // if (document.cookie)
      },
      component: HomeView
    },
    // {
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('../views/AboutView.vue')
    // },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path : '/dashboard',
      name : 'dashboard',
      component : DashboardView
    }
  ]
})

router.beforeEach(function(from,to){
    console.log({from,to})
})

export default router
