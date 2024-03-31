<script setup lang="ts">
import { NuxtLink } from "#components"
</script>

<template>
  <header class="the-header">
    <span class="logo-text">
      <span class="first-letter">Rick</span>&<span class="last-letter">Morty</span>
    </span>
    <div class="links">
      <NuxtLink class="link" to="/characters">
        Characters
      </NuxtLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.the-header {
  position: sticky;
  top: 0;

  padding-block: 20px;
  padding-inline: var(--side-offset);

  background: white;
  display: flex;
  gap: 30px;
  align-items: center;

  .logo-text {
    margin-right: auto;
    font-size: 44px;
    font-weight: 600;
    letter-spacing: 2px;

    .first-letter {
      color: $rick;
    }

    .last-letter {
      color: $morty;
    }
  }

  .links {
    font-size: 26px;
    display: flex;
    gap: 34px;

    .link {
      transition: 0.1s;
      color: $portal-middle;

      &:hover {
        transition: 0.1s;
        color: $portal-dark;
      }
    }
  }
}
</style>
