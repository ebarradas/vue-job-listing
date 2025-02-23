import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import CandidateFormComponent from '../../components/candidates/CandidateFormComponent.vue';

describe('CandidateFormComponent', () => {
  let wrapper: any;

  beforeEach(() => {
    setActivePinia(createPinia());
    
    wrapper = mount(CandidateFormComponent, {
      props: {
        jobId: 1,
      },
    });
  });

  it('renders the form correctly', () => {
    expect(wrapper.find('h1').text()).toBe('Apply for this job!');
    expect(wrapper.find('input[name="name"]').exists()).toBe(true);
    expect(wrapper.find('input[name="email"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it('shows error messages when submitting empty form', async () => {
    await wrapper.find('form').trigger('submit');
    expect(wrapper.find('#name-error-message').text()).toBe('Name is required');
    expect(wrapper.find('#email-error-message').text()).toBe('Email is required');
  });

});