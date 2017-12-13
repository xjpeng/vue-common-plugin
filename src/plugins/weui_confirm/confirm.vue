<template>
 <transition name="fade">
    <div v-if="show" class="box">
		<div v-show="show" class="dialog">
			<div class="dialog__hd"><strong class="dialog__title">{{title}}</strong></div>
			<div class="dialog__bd">{{msg}}</div>
			<div class="dialog__ft">
				<a href="javascript:;" class="dialog__btn dialog__btn_default" v-on:click="cancel">取消</a>
				<a href="javascript:;" class="dialog__btn dialog__btn_primary" v-on:click="ok">确定</a>
			</div>
		</div>
    </div>
</transition>
</template>
<script>
 export default {
   data(){
      return {
	     msg:'',
		 title:'提示',
		 show:false,
		 okcb:null,
		 cancelcb:null
	  }
   },
   methods:{
      confirm(msg,ok=null,cancel=null,title='提示'){
	     this.msg=msg;
		 this.title = title;
		 this.okcb = ok;
		 this.cancelcb = cancel;
		 this.show =true;
	  },
	  ok(){
	     this.show= false;
		 if(this.okcb) this.okcb();
	  },
	  cancel(){
	     this.show= false;
		 if(this.cancelcb) this.cancelcb();
	  }
   }
 }
</script>
<style scoped>
.box{
  position:fixed;
  left:0;
  top:0;
  right:0;
  bottom:0;
  background-color:rgba(0,0,0,.6);
  z-index:99999;
}
.dialog{
  position:absolute;
  width:80%;
  max-width:300px;
  top:50%;
  left:50%;
  -webkit-transform:translate(-50%, -50%);
          transform:translate(-50%, -50%);
  background-color:#FFFFFF;
  text-align:center;
  border-radius:3px;
  overflow:hidden;
}
.dialog__hd{
  padding:1.3em 1.6em 1em;
}
.dialog__title{
  font-weight:400;
  font-size:18px;
}
.dialog__bd{
  padding:0 1.6em 1em;
  min-height:40px;
  font-size:14px;
  line-height:1.3;
  word-wrap:break-word;
  word-break:break-all;
  color:#777;
}
.dialog__bd:first-child{
  padding:2.7em 20px 1.7em;
  color:#353535;
}
.dialog__ft{
  position:relative;
  line-height:48px;
  font-size:16px;
  display:-webkit-box;
  display:-webkit-flex;
  display:flex;
}
.dialog__ft:after{
  content:" ";
  position:absolute;
  left:0;
  top:0;
  right:0;
  height:1px;
  border-top:1px solid #D5D5D6;
  color:#D5D5D6;
  -webkit-transform-origin:0 0;
          transform-origin:0 0;
  -webkit-transform:scaleY(0.5);
          transform:scaleY(0.5);
}
.dialog__btn{
  display:block;
  -webkit-box-flex:1;
  -webkit-flex:1;
          flex:1;
  color:#3CC51F;
  text-decoration:none;
  -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
  position:relative;
}
.dialog__btn:active{
  background-color:#EEEEEE;
}
.dialog__btn:after{
  content:" ";
  position:absolute;
  left:0;
  top:0;
  width:1px;
  bottom:0;
  border-left:1px solid #D5D5D6;
  color:#D5D5D6;
  -webkit-transform-origin:0 0;
          transform-origin:0 0;
  -webkit-transform:scaleX(0.5);
          transform:scaleX(0.5);
}
.dialog__btn:first-child:after{
  display:none;
}

.dialog__btn_default{
  color:#353535;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>