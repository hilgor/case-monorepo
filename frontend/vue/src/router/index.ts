import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/players',
      component: () => import('@/views/players/PlayersView.vue'),
      meta: { transition: 'slide-left' },
    },
    {
      path: '/matches',
      component: () => import('@/views/matches/MatchesView.vue'),
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: () => import('@/views/ranking/RankingView.vue'),
      meta: { transition: 'slide-right' }
    },
    {
      path: '/:pathMatch(.*)',
      redirect: { name: 'home' }
    }
  ]
})

export default router