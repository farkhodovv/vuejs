import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '../pages/Add.vue'
import Index from '../pages/Index.vue'
import Edit from '../pages/_id.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/add',
    name: 'Add',
    component: Add
  },
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/:id',
    name: 'Edit',
    component: Edit
  }, 
]

const router = new VueRouter({
  routes
})

export default router
