import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ForHer from '../views/ForHer.vue';
import ForHim from '@/views/ForHim.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/for_her',
            name: 'ForHer',
            component: ForHer
        },
        {
            path: '/for_him',
            name: 'ForHim',
            component: ForHim
        }
    ]
});

export default router;
