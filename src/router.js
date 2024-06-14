import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';

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
    {
        path: '/projects/:slug',   
        name: 'single-project',
        component: SingleProject
    },      
 
 ]
});
export { router };

// router.js deve essere esportato in main.js