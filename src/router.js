import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';

const router = createRouter({
 history: createWebHistory(),
 routes: [
    {
        path: '/',
        name: 'home',
        component: AppHome
    },  
    {
        path: '/about',
        name: 'about',
        component: AppAbout
    },      
    {
        path: '/projects',
        name: 'projects',
        component: ProjectList
    },      
 
 ]
});
export { router };

// router.js deve essere esportato in main.js