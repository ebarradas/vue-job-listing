<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useJobsStore } from '@/stores/jobs';
import JobCardComponent from '@/components/jobs/JobCardComponent.vue';
import CandidateFormComponent from '@/components/candidates/CandidateFormComponent.vue';
import type { JobType } from '@/types/jobTypes';

const router = useRouter();
const jobsStore = useJobsStore();
const jobId = router.currentRoute.value.params.id;
const loading = ref(false);
const job = ref<JobType | null>(null);
onMounted(async () => {
  try {
    loading.value = true;
    job.value = await jobsStore.getJobById(Number(jobId)) ?? null;
  } catch (error) {
    console.error('Error fetching job', error);
    job.value = null;
  } finally {
    loading.value = false;
  }
});
const goBack = () => {
  router.push('/jobs');
};
</script>

<template>
  <div v-if="loading">
    <div>Loading...</div>
  </div>
  <div v-else class="job-by-id-view">
    <div class="job-by-id-view-container" v-if="job">
      <JobCardComponent :job="job" />
      <CandidateFormComponent :jobId="Number(jobId)" />
    </div>
    <div v-else>Job not found. Please go back to the jobs list and select a new one.</div>
    <button @click="goBack">Go Back</button>
  </div>
</template>

<style lang="scss" scoped>
.job-by-id-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .job-by-id-view-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
  }
}
</style>
