import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import CustomerPage from './module/customer/customer.vue';
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