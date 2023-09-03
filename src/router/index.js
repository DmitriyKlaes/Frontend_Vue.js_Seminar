import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/About.vue'
import Contacts from '@/pages/Contacts.vue'
import Home from '@/pages/Home.vue'
import Catalog from '@/pages/Catalog.vue'
import NotFound from '@/pages/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
    {
    path: '/catalog/:pageNumber?',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/:CatchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
