import Vue from 'vue'
import Router from 'vue-router'

import Meetups from '../components/Meetup/Meetups.vue'
import CreateMeetup from '../components/Meetup/CreateMeetup.vue'
import Profile from '../components/User/Profile.vue'
import Signup from '../components/User/Signup.vue'
import Signin from '../components/User/Signin.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    }
  ]
})
