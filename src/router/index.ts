import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import AuthCodeForm from '@/components/AuthCodeForm.vue'
import ChatView from '@/views/ChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/enter-code' ,
      name: 'login',
      component: LoginView,
      children:[
        {
        path: 'enter-code',
        component: AuthCodeForm
      },
        {
        path: 'sign-up',
        component: () => import('../components/SignUpForm.vue')
      },
    ]
    },
    {
      path: '/chat',
      name: 'chat',
      component: ChatView,
    }
  ]
})

export default router
