<script setup lang="ts">
import { useAsyncGql } from "#imports"
import CharacterCard from "~/components/CharacterCard.vue"

const variables = ref({ page: 1 })

const { data } = await useAsyncGql({
  operation: "getCharacters",
  variables: variables.value,
})
</script>

<template>
  <div class="card-container">
    <CharacterCard v-for="character in data.characters?.results" :key="character.id" :="character || {}" />
  </div>
</template>

<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 15px;
  flex-wrap: wrap;
  margin-inline: var(--side-offset);
}
</style>
