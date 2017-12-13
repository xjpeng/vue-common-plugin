import Loading from './loading.vue';
export default {
  install(Vue,opts){
     let LoadClass = Vue.extend(Loading);
	 let instance = null;
	 Vue.prototype.$loading = {
		 installed:false,
		 show(){
 			 if(!this.installed){
				 instance = new LoadClass();
				 instance.$mount();
				 document.querySelector('body').appendChild(instance.$el);
				 this.installed=true;
			 }
			 instance.open=true; 
		 },
		 hide(){
			 if(this.installed) instance.open=false;
		 }
	 };
  }
}