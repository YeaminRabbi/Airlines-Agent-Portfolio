import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/Home.vue'
import CityView from '../views/pages/City.vue'
import ServiceView from '../views/pages/Service.vue'
import ContactView from '../views/pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/city',
    name: 'City',
    component: CityView
  },
  {
    path: '/service',
    name: 'Service',
    component: ServiceView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
