import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import About from '../views/AboutView.vue';
import JobsView from '../views/jobs/JobsView.vue';
import JobsDetailsView from '../views/jobs/JobDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: JobsView,
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobsDetailsView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;