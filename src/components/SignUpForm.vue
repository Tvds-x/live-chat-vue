<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';
import LoaderLoginView from './UI/LoaderLoginView.vue';
import ErrorAlert from './UI/ErrorAlert.vue';
import { sendCode } from '../api/auth'
import { ref } from 'vue';
import type { sendCodeResponse } from '../interfaces/interfaces.ts'

const router = useRouter();
const userStore = useUserStore();

const emailInput = ref('')
const isLoading = ref(false)
const isShowError = ref(false)
const errorToShow = ref('')

function showError(text:string, duration: number){
  isShowError.value = true;
  errorToShow.value = text;
  setTimeout(() => isShowError.value = false, duration)
}

async function submitHandler() {

  try {
    isLoading.value = true;
    const response: sendCodeResponse = await sendCode(emailInput.value)

    if (response.error && response.error.responseCode === 504) {
      showError('Enter correct mail!', 3000)
      throw new Error('Invalid Email')
    } else {
      userStore.setUserInfo(response.email, response.name)
      router.push('enter-code');
    }

  } catch (error) {
    console.log(error)
  } finally {
    emailInput.value = ''
    isLoading.value = false
  }

}

</script>

<template>
  <Transition name="error">
    <error-alert v-if="isShowError" :message="errorToShow"/>
  </Transition>
  <p class="welcome">Welcome!</p>
  <loader-login-view v-if="isLoading"></loader-login-view>
  <form v-else class="sign-up-content__form" action="" @submit.prevent="submitHandler">
    <p class="sign-up-content__subtitle">Enter email to get code:</p>
    <input v-model="emailInput" class="sign-up-content__input" type="email">
    <div class="sign-up-content__button-wrapper">
      <router-link to="/enter-code">
        <button class="btn_back" type="button">
          Back to Login
        </button>
      </router-link>
      <button class="btn_send-code" type="submit">
        Send me code
      </button>
    </div>
  </form>
</template>

<style scoped>
.welcome {
  font-size: 32px;
  font-weight: bold;
  color: var(--c-secondary);
}

.sign-up-content__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.sign-up-content__subtitle {
  font-size: 18px;
}

.sign-up-content__input {
  width: 260px;
  height: 35px;
  border-radius: 20px;
  border: 1px solid var(--c-light);
  padding: 2px 10px;
}


.sign-up-content__button-wrapper {
  color: white;
  display: flex;
  gap: 5px;
}

.btn_back {
  width: 120px;
  background-color: var(--c-dark);
}

.btn_send-code {
  width: 140px;
  background-color: var(--c-primary);

}

button {
  padding: 8px 10px;
  border-radius: 20px;
}

button:hover {
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

}

button:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}



</style>