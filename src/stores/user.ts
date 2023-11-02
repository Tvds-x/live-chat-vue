import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useUserStore = defineStore('user', () => {
  const userMail = ref('');
  const userName = ref('')

  return { userMail, userName }
})