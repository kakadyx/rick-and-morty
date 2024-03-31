<script setup lang="ts">
const variables = ref({ page: 1 })

const { data } = await useAsyncGql({
    operation: "getCharacters",
    variables: variables.value
})
</script>

<template>
    <div class="card-container">
        <div class="card" v-for="item in data.characters?.results">
            <p> Name: {{ item?.name }} </p>
            <p> Origin: {{ item?.origin?.name }} </p>
            <p> Gender: {{ item.gender }}</p>
            <img :src="item.image" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .card-container {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    padding: 40px;
  }

  .card {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid yellowgreen;
    border-radius: 14px;
  }
</style>
