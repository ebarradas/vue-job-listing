<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div>
    <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/jobs">Jobs</RouterLink>
        <RouterLink to="/candidates">Candidates</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 1rem;
  padding-left: 0;
  border-bottom: 1px solid var(--color-border);
  margin-bottom: 1rem;
}

nav a {
  padding: 0 1rem;
  border-right: 1px solid var(--color-border);
}

nav a:last-child {
  border-right: none;
}
</style>
