<script setup lang="ts">
defineProps<{
    name: string,
    image: string,
    origin: { name: string },
    gender: string
}>();
</script>

<template>
  <div class="card">
        <img class="character-image" :src="image" alt="">
        <div class="info">
          <p class="name">
            {{ name }}
          </p>
          <p> Origin: {{ origin?.name }} </p>
          <p> Gender: {{ gender }}</p>
        </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  border: 2px solid $portal-dark;
  border-radius: 14px;
  overflow: hidden;

  .character-image {
    aspect-ratio: 1/1;
    width: 40%;
  }

  .info {
    padding: 10px 16px;

    .name {
      font-size: 28px;
      font-weight: 500;
    }
  }
}
</style>
