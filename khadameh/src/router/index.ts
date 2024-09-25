import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import ChangePasswordView from '../views/ChangePasswordView.vue'
import NewPasswordView from '../views/NewPasswordView.vue'

const routes = [
    {
      path: '/login',
      component: LoginView
    },
    {
      path: '/changepassword',
      component: ChangePasswordView
    },
    {
      path: '/newpassword',
      component: NewPasswordView
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
  export default router