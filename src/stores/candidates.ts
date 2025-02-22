import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { CandidateType } from '@/types/candidateTypes';

export const useCandidateStore = defineStore('candidate', () => {
  const candidates = ref<CandidateType[]>([]);

  const getCandidates = async () => {
    const storedCandidates = localStorage.getItem('candidates');
    if (storedCandidates) {
      candidates.value = JSON.parse(storedCandidates);
    }
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };
  
  const addCandidate = async (candidate: CandidateType) => {
    candidates.value.push(candidate);
    localStorage.setItem('candidates', JSON.stringify(candidates.value));
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const resetCandidates = async () => {
    candidates.value = [];
    localStorage.removeItem('candidates');
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return { candidates, getCandidates, addCandidate, resetCandidates };
});
