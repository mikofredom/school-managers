import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from '@/components/LoginComponent'
import RegisterComponent from '@/components/RegisterComponent'
import SchoolManagement from '@/components/SchoolManagement'
import SchoolAdd from '@/components/SchoolAdd'
import AdministratorsList from '@/components/AdministratorsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/login',
      name: 'LoginComponent',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'RegisterComponent',
      component: RegisterComponent
    },
    {
      path: '/management/view',
      name:'SchoolAdd',
      component: SchoolAdd
    },
    {
      path:'/management/school',
      component:SchoolManagement
    },
    {
      path:'/administrators_list',
      component:AdministratorsList
    },
  ]
})
