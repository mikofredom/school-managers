// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SchoolAdd from '@/components/SchoolAdd'
import SchoolManagement from '@/components/SchoolManagement'
import SchoolList from '@/components/SchoolList'
import AdministratorsList from '@/components/AdministratorsList'
import router from './router'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' 
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Vuetify, {
  iconfont: 'fa4'
 })
Vue.config.productionTip = false
const routes1 = [
    {path:'/school_list',component:SchoolList},
]
const router1 = new VueRouter({
   routes1
})
const routes2 = [
 
]
const router2 = new VueRouter({
  routes2
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})



