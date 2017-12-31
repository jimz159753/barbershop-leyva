import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
// import all icons if you don't care about bundle size
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    }
  ]
})
