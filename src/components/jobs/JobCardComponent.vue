<script setup lang="ts">
// Composition API imports if needed
import { ref } from 'vue';
import type { JobType } from '@/types/jobTypes';
import { useRouter } from 'vue-router';

const router = useRouter();
defineProps<{
  job: JobType;
}>();

</script>

<template>
  <div class="candidate-card-component">
    <h1 class="green">{{ job.title }}</h1>
    <div class="info">
      <span class="company">{{ job.company }}</span>
      <code class="category">{{ job.category }}</code>
    </div>
    <p>{{ job.description }}</p>
    <p>{{ job.location }}</p>
  </div>
</template>

<style lang="scss" scoped>

.candidate-card-component {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  min-width: fit-content;
  .company {
    font-weight: 900;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}

</style>
