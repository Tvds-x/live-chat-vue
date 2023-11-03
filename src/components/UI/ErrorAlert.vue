<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
  }
})

</script>

<template>
    <div class="alert">
      <span class="content">
        <span class="error">Error!</span>
        <br>
        {{ props.message }}
      </span>
    </div>
</template>



<style scoped>
.alert {
  position: absolute;
  top: 10vh;
  left: 15vw;

  width: 300px;
  height: 60px;

  display: flex;
  align-items: center;

}

.content {
  font-size: 10px;
  margin-left: 20px
}

.error {
  font-weight: bold;
  font-size: 18px;
  color: red
}



.error-enter-active,
.error-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.error-enter-from,
.error-leave-to {
  opacity: 0;
}
</style>