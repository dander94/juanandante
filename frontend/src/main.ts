import { createApp } from 'vue';

import './style.scss';
import './bulma.scss';

import App from './App.vue';

import { Config } from '@oruga-ui/oruga-next';
import { bulmaConfig } from '@oruga-ui/theme-bulma';

const app = createApp(App);

app.use(Config, bulmaConfig);
app.mount('#app');
