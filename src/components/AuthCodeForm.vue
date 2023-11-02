<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <p class="welcome">Welcome Back!</p>
  <form class="login-content__form" action="" @submit.prevent="">
    <p class="login-content__subtitle">Enter auth code:</p>
    <input class="login-content__input" type="text">
    <div class="login-content__button-wrapper">
      <router-link to="/sign-up">
        <button class="btn_sign-up" type="button">
          Sign Up
        </button>
      </router-link>
      <button class="btn_login" type="submit">
        Login
      </button>
    </div>
  </form>
</template>

<style scoped>
.login-content__form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.login-content__subtitle {
  font-size: 18px;
}

.login-content__input {
  width: 260px;
  height: 35px;
  border-radius: 20px;
  border: 1px solid var(--c-light);
  padding: 2px 10px;
}


.login-content__button-wrapper {
  color: white;
  display: flex;
  gap: 5px;
}

.btn_sign-up {
  width: 120px;
  background-color: var(--c-dark);
}

.btn_login {
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
.welcome {
  font-size: 32px;
  font-weight: bold;
  color: var(--c-secondary);
}
</style>