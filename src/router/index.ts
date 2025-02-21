import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import CandidatesView from '../views/candidates/CandidatesView.vue'
import JobByIdView from '../views/jobs/JobByIdView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path: '/jobs/:id',
      name: 'jobById',
      component: JobByIdView,
    },
    {
      path: '/candidates',
      name: 'candidates',
      component: CandidatesView,
    },
  ],
})

export default router
