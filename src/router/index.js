import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/pages/Home.vue'
import AboutView from '../views/pages/About.vue'
import ContactView from '../views/pages/Contact.vue'
import VisitView from '../views/pages/visa_process/Visit.vue'
import StudentView from '../views/pages/visa_process/Student.vue'
import MedicalView from '../views/pages/visa_process/Medical.vue'
import InstantView from '../views/pages/package_tour/Instant.vue'
import GroupView from '../views/pages/package_tour/Group.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/visa/visit',
    name: 'Visit',
    component: VisitView
  },
  {
    path: '/visa/student',
    name: 'Student',
    component: StudentView
  },
  {
    path: '/visa/medical',
    name: 'Medical',
    component: MedicalView
  },
  {
    path: '/package/group-tour',
    name: 'Group',
    component: GroupView
  },
  {
    path: '/package/instant-tour',
    name: 'Instant',
    component: InstantView
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
