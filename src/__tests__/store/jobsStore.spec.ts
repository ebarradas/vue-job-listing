import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useJobsStore } from '../../stores/jobs';
import jobsList from '../../data/mockApiData.json';

describe('Jobs Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('initializes with empty jobs array', () => {
    const store = useJobsStore();
    expect(store.jobs).toEqual([]);
  });

  it('loads jobs correctly', async () => {
    const store = useJobsStore();
    await store.getJobs();
    expect(store.jobs).toEqual(jobsList);
  });

  it('filters jobs by category', async () => {
    const store = useJobsStore();
    await store.getJobs();
    await store.filterJobs('Frontend');
    expect(store.jobs.every((job) => job.category === 'Frontend')).toBe(true);
  });

  it('gets job by id', async () => {
    const store = useJobsStore();
    const job = await store.getJobById(1);
    expect(job).toEqual(jobsList[0]);
  });
});
