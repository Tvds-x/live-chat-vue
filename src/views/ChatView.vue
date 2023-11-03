<script setup lang="ts">
import { useRouter } from 'vue-router';
import Cookie from 'js-cookie';

const router = useRouter();

if( !Cookie.get('authCode') ){
  router.push('/enter-code')
}

</script>

<template>
  <div>
    Chat view
  </div>
</template>



<style scoped>

</style>