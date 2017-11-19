import Vue from 'vue';
import App from './App.vue'
import styles from './../styles/all.scss';

import { createRouter } from './router.js';
import { createStore } from './store.js';
import { sync } from 'vuex-router-sync';

export function createApp () {
    const store = createStore();
    const router = createRouter();

    sync(store, router);

    const app = new Vue({
        router,
        store,
        render: h => h(App),
    });

    return { app, router, store }
}
