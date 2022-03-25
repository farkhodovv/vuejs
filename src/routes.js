import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from './pages/Create.vue'
import Index from './pages/Index.vue'
import Edit from './pages/Edit.vue'
import { path, routesName } from '@/common/constants';

Vue.use(VueRouter)

const routes = [
  {
    path: path.CREATE_CARD_PAGE,
    name: routesName.CREATE,
    component: Add
  },
  {
    path: path.MAIN_PAGE,
    name: routesName.MAIN,
    component: Index
  },
  {
    path: path.EDIT_CARD,
    name: routesName.EDIT,
    component: Edit
  }, 
]

const router = new VueRouter({
  routes
})

export default router
