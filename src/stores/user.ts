import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userMail = ref('')
  const userName = ref('')

  function setUserInfo(mail: string, name: string) {
    userMail.value = mail
    userName.value = name
  }

  return { userMail, userName, setUserInfo }
})