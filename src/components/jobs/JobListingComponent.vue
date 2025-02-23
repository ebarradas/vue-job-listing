<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import JobCardComponent from './JobCardComponent.vue';
import { useJobsStore } from '@/stores/jobs';

let loading = ref(false);
const jobsStore = useJobsStore();
const selectedCategory = ref('All');

onMounted(async () => {
  try {
    loading.value = true;
    await jobsStore.getJobs();
  } catch (error) {
    console.error('Error fetching jobs', error);
  } finally {
    loading.value = false;
  }
});

watch(selectedCategory, async (newCategory) => {
  try {
    loading.value = true;
    await jobsStore.filterJobs(newCategory);
  } catch (error) {
    console.error('Error filtering jobs', error);
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="loading">
    <div>Loading...</div>
  </div>
  <div v-else>
    <div class="job-listing-tools">
      <h1>Job Listing</h1>
      <div class="job-listing-tools-filters">
        <select v-model="selectedCategory" name="category" id="category">
          <option v-for="category in jobsStore.categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>
    <div class="job-listing-component">
      <JobCardComponent
        v-for="job in jobsStore.jobs"
        :key="job.id"
        :job="job"
        :showApplyButton="true"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.job-listing-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-listing-component {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>
