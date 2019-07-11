import Vue from 'vue'
import Router from 'vue-router'
import Todo from '../components/TodoPage.vue'
// import HelloWorld from '../components/HelloWorld.vue'
import Index from '../components/MoviePage.vue'
import Show from '../components/ShowPage.vue'
import Example from '../components/ExamplePage.vue'
import SimpleBoard from '../components/SimpleBoard.vue'
import BasicBoard from '../components/BasicBoard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/',
      name: 'SimpleBoard',
      component: SimpleBoard
    },
    {
      path: '/board',
      name: 'BasicBoard',
      component: BasicBoard
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/movie',
      name: 'index',
      component: Index
    },
    {
      path: '/:id',
      name: 'show',
      component: Show
    }
  ]
})
