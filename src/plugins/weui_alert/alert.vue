<template>
 <transition name="fade">
  <div v-if="show" class="box">
		<div class="dialog">
			<div class="dialog__bd">{{msg}}</div>
			<div class="dialog__ft">
				<a href="javascript:;" class="dialog__btn dialog__btn_primary" v-on:click="close">确定</a>
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
		 show:false,
		 cb:null
	  }
   },
   methods:{
      alert(msg,fn=null){
	     this.msg=msg;
		 this.cb = fn;
		 this.show =true;
	  },
	  close(){
	     this.show= false;
		 if(this.cb) this.cb();
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

.dialog__bd{
  padding:2.7em 20px 1.7em;
  font-size:14px;
  line-height:1.3;
  word-wrap:break-word;
  word-break:break-all;
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