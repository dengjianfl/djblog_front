import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/pages/Home')
        },
        {
            path: '/classification',
            name: 'classification',
            component: () => import('@/pages/Classification')
        },
        {
            path: '/tags',
            name: 'tags',
            component: () => import('@/pages/Tags')
        }
    ]
});
