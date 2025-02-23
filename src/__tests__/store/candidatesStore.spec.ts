import { describe, it, expect, beforeEach, vi } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useCandidateStore } from '../../stores/candidates';

describe('Candidates Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    // Clear localStorage before each test
    localStorage.clear();
  });

  it('initializes with empty candidates array', () => {
    const store = useCandidateStore();
    expect(store.candidates).toEqual([]);
  });

  it('adds a candidate', async () => {
    const store = useCandidateStore();
    const testCandidate = {
      name: 'John Doe',
      email: 'john@example.com',
      jobId: 1,
      jobTitle: 'Frontend Developer',
      jobCompany: 'TechCorp',
    };

    await store.addCandidate(testCandidate);
    expect(store.candidates).toHaveLength(1);
    expect(store.candidates[0]).toEqual(testCandidate);
  });

  it('persists candidates to localStorage', async () => {
    const store = useCandidateStore();
    const testCandidate = {
      name: 'John Doe',
      email: 'john@example.com',
      jobId: 1,
      jobTitle: 'Frontend Developer',
      jobCompany: 'TechCorp',
    };

    await store.addCandidate(testCandidate);
    const storedCandidates = JSON.parse(localStorage.getItem('candidates') || '[]');
    expect(storedCandidates).toEqual([testCandidate]);
  });

  it('loads candidates from localStorage', async () => {
    const testCandidate = {
      name: 'John Doe',
      email: 'john@example.com',
      jobId: 1,
      jobTitle: 'Frontend Developer',
      jobCompany: 'TechCorp',
    };
    localStorage.setItem('candidates', JSON.stringify([testCandidate]));

    const store = useCandidateStore();
    await store.getCandidates();
    expect(store.candidates).toEqual([testCandidate]);
  });

});
