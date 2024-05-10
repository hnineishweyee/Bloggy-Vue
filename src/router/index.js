import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import DetailPosts from "../views/DetailPosts.vue"
import CreatePost from "../views/CreatePost.vue"
import TagPage from "../views/TagPage.vue"
import realTime from "../views/realTime.vue"

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'detail',
    component: DetailPosts,
    props: true
  },
  {
    path: '/create',
    name: 'create',
    component: CreatePost
  },
  {
    path: '/tags/:tag',
    name: 'tag',
    component: TagPage,
    props: true
  },
  {
    path: '/realtime',
    name: 'realtime',
    component: realTime
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
