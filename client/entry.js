import 'es6-promise/auto';
import 'babel-polyfill';

import { createApp } from './App/app'

const { app, router, store } = createApp();

router.onReady(() => {
    app.$mount('#app')
});
