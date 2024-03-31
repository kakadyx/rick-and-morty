<script setup lang="ts">
import TheHeader from "~/components/TheHeader.vue"
import { NuxtPage } from "#components"
import { useHead } from "#imports"

useHead({
  title: "Rick & Morty",
})
</script>

<template>
  <div class="layout">
    <TheHeader />
    <NuxtPage />
  </div>
</template>

<style lang="scss" scoped>
    .layout {
  padding-bottom: 20px;
}
</style>
