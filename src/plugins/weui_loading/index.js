import LoadingComponent from './loading.vue';
export default {
  install(Vue,opts){
     let Loading = Vue.extend(LoadingComponent);
	 let instance = null;
	 if(!Vue.prototype.$weui) Vue.prototype.$weui={};
	 Vue.prototype.$weui.loading_installed = false;
	 Vue.prototype.$weui.loading=function(msg=''){
 		     if(!this.loading_installed){
				 instance = new Loading();
				 instance.$mount();
				 document.querySelector('body').appendChild(instance.$el);
				 this.loading_installed=true;
			 }
			 instance.loading(msg);
	};
	Vue.prototype.$weui.loadingEnd=function(){
	    if(instance) instance.open = false;
	};
 }
}