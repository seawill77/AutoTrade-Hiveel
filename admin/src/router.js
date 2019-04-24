import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { name: 'refresh', path: '/refresh', component: () => import('@/view/refresh') },
    { name: 'home', path: '/', component: () => import('@/view/home') },
    { name: 'log', path: '/log', component: () => import('@/view/log') },
    { name: 'inspectionList', path: '/inspection', component: () => import('@/view/inspection') },
    { name: 'addInspection', path: '/inspection/add', component: () => import('@/view/inspection/add') },
    { name: 'planDetailList', path: '/inspection/schedule/detail/list/:id', component: () => import('@/view/inspection/planDetailList') },
    { name: 'reportDetail', path: '/inspection/report/detail', component: () => import('@/view/inspection/reportDetail') },
    { name: 'editReport', path: '/inspection/report/edit', component: () => import('@/view/inspection/editReport') },
    { name: 'addPlan', path: '/inspection/schedule/add', component: () => import('@/view/inspection/addPlan') },
    { name: 'issueList', path: '/issue/list', component: () => import('@/view/issue/list') },
    { name: 'issueDetail', path: '/issue/detail/:id', component: () => import('@/view/issue/detail') },
    { name: 'examList', path: '/service', component: () => import('@/view/exam') },
    { name: 'addExam', path: '/service/add', component: () => import('@/view/exam/add') },
    { name: 'vehicleList', path: '/vehicle/list', component: () => import('@/view/vehicle/list') },
    { name: 'addVehicle', path: '/vehicle/add', component: () => import('@/view/vehicle/add') },
    { name: 'vehicleDetail', path: '/vehicle/detail/:id', component: () => import('@/view/vehicle/detail') },
    { name: 'personList', path: '/user/list', component: () => import('@/view/person/list') },
    { name: 'addPerson', path: '/user/add', component: () => import('@/view/person/add') },
    { name: 'personDetail', path: '/user/detail/:id', component: () => import('@/view/person/detail/index') },
    { name: 'invoiceList', path: '/invoice', component: () => import('@/view/invoice') },
    { name: 'platformInvoice', path: '/invoice/platformInvoice/:id', component: () => import('@/view/invoice/platformInvoice') },
    { name: 'autoSaveInvoice', path: '/invoice/autoSaveInvoice/:id', component: () => import('@/view/invoice/autoSaveInvoice') },
    { name: 'setting', path: '/setting', component: () => import('@/view/setting/index') },
  ],
})
