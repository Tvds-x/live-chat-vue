<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <form class="sign-up-content__form" action="" @submit.prevent="">
    <p class="sign-up-content__subtitle">Enter email to get code:</p>
    <input class="sign-up-content__input" type="text">
    <div class="sign-up-content__button-wrapper">
      <router-link to="/enter-code">
        <button class="btn_back" type="submit">
          Back to Login
        </button>
      </router-link>
      <button class="btn_send-code">
        Send me code
      </button>
    </div>
  </form>
</template>

<style scoped>
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
}</style>