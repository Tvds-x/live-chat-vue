<script setup lang="ts">
const props = defineProps({
  message: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <!-- eslint-disable vue/require-toggle-inside-transition -->
  <Transition name="alert">
    <div class="alert">
      <span class="content">
        <span class="error">Error!</span>
        <br>
        {{ props.message }}
      </span>
    </div>
  </Transition>
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


.alert-enter-active,
.alert-leave-active {
  transition: opacity 0.5s ease;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
}
</style>