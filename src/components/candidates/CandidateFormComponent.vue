<script setup lang="ts">
import { ref, watch } from 'vue';
import { useCandidateStore } from '@/stores/candidates';
import { useJobsStore } from '@/stores/jobs';

const nameErrorMessage = ref('');
const emailErrorMessage = ref('');
const formContent = ref({
  name: '',
  email: '',
  jobId: 0,
});
const isLoading = ref(false);
const messageSent = ref(false);
const candidateStore = useCandidateStore();
const jobsStore = useJobsStore();
const props = defineProps<{
  jobId: number;
}>();

const handleSubmit = async () => {
  try {
    messageSent.value = false;
    isLoading.value = true;
    nameErrorMessage.value = '';
    emailErrorMessage.value = '';
    if (formContent.value.name === '') {
      nameErrorMessage.value = 'Name is required';
    }
    if (formContent.value.email === '') {
      emailErrorMessage.value = 'Email is required';
    }
    if (nameErrorMessage.value === '' && emailErrorMessage.value === '') {
      messageSent.value = true;
      const jobInfo = await jobsStore.getJobById(props.jobId);
      candidateStore.addCandidate({
        name: formContent.value.name,
        email: formContent.value.email,
        jobId: jobInfo?.id ?? 0,
        jobTitle: jobInfo?.title ?? '',
        jobCompany: jobInfo?.company ?? '',
      });
      formContent.value.name = '';
      formContent.value.email = '';
      formContent.value.jobId = 0;
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

watch(messageSent, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      messageSent.value = false;
    }, 5000);
  }
});

</script>

<template>
  <div class="candidate-form-component">
    <div v-if="messageSent" class="message-sent">
      <h3>Message sent successfully!</h3>
      <p>Thanks for sending your application. We will contact you soon as soon as possible.</p>
    </div> 
    <form v-else @submit.prevent="handleSubmit">
      <h1>Apply for this job!</h1>
      <div class="input-container">
        <label for="name">Name</label>
        <input v-model="formContent.name" type="text" name="name" />
        <div v-show="nameErrorMessage" class="error-message" id="name-error-message">{{ nameErrorMessage }}</div>
      </div>
      <div class="input-container">
        <label for="email">Email</label>
        <input v-model="formContent.email" type="email" name="email" />
        <div v-show="emailErrorMessage" class="error-message" id="email-error-message">{{ emailErrorMessage }}</div>
      </div>
      <div class="input-container">
        <button :disabled="isLoading" type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.candidate-form-component {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  min-height: 300px;
  padding-bottom: 20px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .input-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
    margin-bottom: 10px;
    input {
      height: 30px;
      width: 100%;
    }
    button {
      margin-top: 10px;
      width: 50%;
      align-self: center;
    }
  }

  .error-message {
    color: red;
    position: absolute;
    bottom: -20px;
    font-size: 0.8em;
  }
}
</style>
