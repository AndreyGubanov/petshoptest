import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Index from './../views/Index.vue';

export function createRouter () {
    const router = new Router({
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            { path: '/', component: Index },
        ]
    });
    return router;
}
