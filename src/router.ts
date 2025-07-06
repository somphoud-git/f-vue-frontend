import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import CustomerPage from './module/customer/customer.vue';
// import Example5 from './module/customer/new5.vue';
// import Example6 from './module/customer/new6.vue';
import ParentComponent from './components/ParentComponent.vue';
import ToggleButton from './components/ToggleButton.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: CustomerPage,
    },
    {
        path: '/props',
        name: 'parentcomponent',
        component: ParentComponent ,
    },
    {
        path: '/toggle',
        name: 'togglebutton',
        component: ToggleButton,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;