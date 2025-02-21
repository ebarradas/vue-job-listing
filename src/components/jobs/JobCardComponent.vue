<script setup lang="ts">
// Composition API imports if needed
import { ref } from 'vue';
import type { JobType } from '@/types/jobTypes';
import { useRouter } from 'vue-router';

const router = useRouter();
const title = ref('Job Card');
const props = defineProps<{
  job: JobType;
}>();

const navigateToJob = (id: number) => {
  router.push(`/jobs/${id}`);
};

</script>

<template>
  <div class="job-card-component" @click="navigateToJob(job.id)">
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

.job-card-component {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
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
