import { createApp } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'wowjs/css/libs/animate.css';

import {
  // eslint-disable-next-line camelcase
  required, email, max, url, min_value, image, between,
} from '@vee-validate/rules';
import {
  defineRule, Field, Form, ErrorMessage, configure,
} from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { getDate, getStemp, currency } from '@/methods/filters';

import App from './App.vue';
import router from './router';

library.add(fas, fab, far);
defineRule('required', required);
defineRule('email', email);
defineRule('max', max);
defineRule('url', url);
defineRule('min_value', min_value);
defineRule('image', image);
defineRule('between', between);
configure({
  generateMessage: localize({ zh_TW: zhTw }),
});
setLocale('zh_TW');

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Field', Field);
app.component('Form', Form);
app.component('ErrorMessage', ErrorMessage);

app.config.globalProperties.$filter = {
  getDate,
  getStemp,
  currency,
};

app.use(VueAxios, axios);
app.use(router);
app.mount('#app');
