<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router';
import Cookie from 'js-cookie';

const router = useRouter();

if( Cookie.get('authCode') ){
  router.push('/chat')
}

</script>

<template>
  <div class="login-page">
    <div class="wrappper">
      <img class="login-image" src="@/assets/login-img.svg" alt="">
      <main class="login-content">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.wrappper {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  width: 75vw;
  height: 90vh;
  border-radius: 20px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.login-content{
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.login-image{
  max-width: 350px;
}

.login-content__welcome {
  font-size: 32px;
  font-weight: bold;
}



</style>
