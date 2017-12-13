import Alert from './alert.vue';
export default {
  install(Vue,opts){
     let AlertClass = Vue.extend(Alert);
	 let instance = null;
	 if(!Vue.prototype.$weui) Vue.prototype.$weui={};
	 Vue.prototype.$weui.alert_installed = false;
	 Vue.prototype.$weui.alert=function(msg,callback=null){
 		     if(!this.alert_installed){
				 instance = new AlertClass();
				 instance.$mount();
				 document.querySelector('body').appendChild(instance.$el);
				 this.alert_installed=true;
			 }
			 instance.alert(msg,callback);
		};
	}
}