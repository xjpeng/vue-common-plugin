import Confirm from './confirm.vue';
export default {
  install(Vue,opts){
     let ConfirmClass = Vue.extend(Confirm);
	 let instance = null;
	 if(!Vue.prototype.$weui) Vue.prototype.$weui={};
	 Vue.prototype.$weui.confirm_installed = false;
	 Vue.prototype.$weui.confirm=function(msg,ok,cancel,title){
 		     if(!this.confirm_installed){
				 instance = new ConfirmClass();
				 instance.$mount();
				 document.querySelector('body').appendChild(instance.$el);
				 this.confirm_installed=true;
			 }
			 instance.confirm(msg,ok,cancel,title);
		};
	}
}