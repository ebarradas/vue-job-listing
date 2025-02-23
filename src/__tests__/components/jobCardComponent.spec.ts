import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import JobCardComponent from '../../components/jobs/JobCardComponent.vue';

describe('JobCardComponent', () => {
  const testJob = {
    id: 1,
    title: 'Test Job',
    category: 'Frontend',
    company: 'Test Company',
    description: 'Test Description',
    location: 'Remote',
  };

  it('renders properly', () => {
    const wrapper = mount(JobCardComponent, {
      props: {
        job: testJob,
        showApplyButton: false,
      },
    });

    expect(wrapper.text()).toContain('Test Job');
    expect(wrapper.text()).toContain('Test Company');
    expect(wrapper.text()).toContain('Frontend');
    expect(wrapper.text()).toContain('Test Description');
    expect(wrapper.text()).toContain('Remote');
  });

  it('renders properly with apply button', () => {
    const wrapper = mount(JobCardComponent, {
      props: {
        job: testJob,
        showApplyButton: true,
      },
    });

    expect(wrapper.text()).toContain('Test Job');
    expect(wrapper.text()).toContain('Test Company');
    expect(wrapper.text()).toContain('Frontend');
    expect(wrapper.text()).toContain('Test Description');
    expect(wrapper.text()).toContain('Remote');
    expect(wrapper.text()).toContain('Apply for the position');
  });

});
