<script setup lang="ts">
import type { JobType } from '@/types/jobTypes';
import { useRouter } from 'vue-router';

const router = useRouter();

withDefaults(defineProps<{
  job: JobType;
  showApplyButton?: boolean;
}>(), {
  showApplyButton: false
});

const navigateToJob = (id: number) => {
  router.push(`/jobs/${id}`);
};
</script>

<template>
  <div class="job-card-component">
    <h1 class="green">{{ job.title }}</h1>
    <div class="info">
      <span class="company">{{ job.company }}</span>
      <code class="category">{{ job.category }}</code>
    </div>
    <p>{{ job.description }}</p>
    <p>{{ job.location }}</p>
    <div class="apply-button-container">
      <button v-if="showApplyButton" class="apply-button" @click="navigateToJob(job.id)" >Apply for the position</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-card-component {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  .company {
    font-weight: 900;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .apply-button-container{
    display: flex;
    justify-content: center;
    .apply-button {
      margin-bottom: 10px;
    }
  }
  
}
</style>
