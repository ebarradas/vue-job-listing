<script setup lang="ts">
// Composition API imports if needed
import { ref, onMounted, computed } from 'vue';
import type { CandidateType } from '@/types/candidateTypes';
import { useJobsStore } from '@/stores/jobs';

defineProps<{
  candidateList: CandidateType[];
}>();

const isLoading = ref(false);
const jobsStore = useJobsStore();

onMounted(async () => {
  try {
    isLoading.value = true;
    await jobsStore.getJobs();
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    isLoading.value = false;
  }
});

</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else >
    <div v-for="candidate in candidateList" class="candidate-listing-component">
      <h3 class="green">{{ candidate.name }}</h3>
      <p>{{ candidate.email }}</p>
      <p>{{ candidate.jobTitle }} <span class="green">({{ candidate.jobCompany }})</span></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.candidate-listing-component {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
}
</style>
