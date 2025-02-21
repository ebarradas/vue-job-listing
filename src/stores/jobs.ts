import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import jobsList from '../data/mockApiData.json';
import type { JobType } from '@/types/jobTypes';

export const useJobsStore = defineStore('jobs', () => {
  const jobs = ref<JobType[]>([]);
  const categories = ref<string[]>([]);

  async function getJobs() {
    jobs.value = jobsList;
    categories.value = ['All', ...new Set(jobsList.map((job) => job.category))];
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  async function getJobById(id: number) {
    const job = jobsList.find((job) => job.id === id);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return job;
  }

  function filterJobs(category: string) {
    if (category !== 'All') {
      jobs.value = jobsList.filter((job) => job.category === category);
    } else {
      jobs.value = jobsList;
    }
  }

  return { getJobs, jobs, categories, filterJobs, getJobById };
});
