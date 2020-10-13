import '@fortawesome/fontawesome-free/css/all.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

import Vue from 'vue';
import Vuetify from 'vuetify/lib';

import VueGoogleCharts from 'vue-google-charts'

Vue.use(Vuetify);
Vue.use(VueGoogleCharts);

export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    },
});
