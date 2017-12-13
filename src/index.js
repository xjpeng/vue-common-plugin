import Vue from 'vue';
import Loading from './plugins/loading/index.js';
import UIAlert from './plugins/weui_alert/index.js';
import UIConfirm from './plugins/weui_confirm/index.js';
import UILoading from './plugins/weui_loading/index.js';
import App from './App.vue';
Vue.use(Loading);
Vue.use(UIAlert);
Vue.use(UIConfirm);
Vue.use(UILoading);
let vm = new Vue({
	el:'#app',
	render:(h)=>{
		return h(App);
	}
});
window.vm = vm;
