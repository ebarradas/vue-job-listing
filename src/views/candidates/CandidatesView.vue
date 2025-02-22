<script setup lang="ts">
import CandidateListingComponent from '@/components/candidates/CandidateListingComponent.vue';
import { useCandidateStore } from '@/stores/candidates';
import type { CandidateType } from '@/types/candidateTypes';
import { onMounted, ref } from 'vue';

const candidateStore = useCandidateStore();
const candidateList = ref<CandidateType[]>([]);
const isLoading = ref(false);
onMounted(async () => {
  try {
    isLoading.value = true;
    await candidateStore.getCandidates();
    candidateList.value = candidateStore.candidates;
  } catch (error) {
    console.error('Error fetching candidates:', error);
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <main>
    <div v-if="isLoading">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <div v-if="candidateStore.candidates.length === 0">
        <h1>No candidates found</h1>
      </div>
      <CandidateListingComponent v-else :candidateList="candidateList" />
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
