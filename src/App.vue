<template>
   <div id="app">
        <h4>Loading</h4>
		<button v-on:click="showLoading">show Loading</button>
		<button v-on:click="hideLoading">hide Loading</button>
		<h4>Alert</h4>
		<button v-on:click="showAlert">show Alert</button>
		<h4>confirm</h4>
		<button v-on:click="showConfirm">show Confirm</button>
		<h4>Loading2</h4>
		<button v-on:click="showLoading1">show Loading</button>
		<button v-on:click="hideLoading1">hide Loading</button>
	</div>
</template>
<script>
  export default {
     methods:{
	    showLoading(){
		   this.$loading.show();
		},
		hideLoading(){
		   this.$loading.hide();
		},
		showAlert(){
		   this.$weui.alert('测试',function(){console.log('closed');});
		},
		showConfirm(){
		   this.$weui.confirm('你确定要删除吗',function(){console.log('ok')},function(){console.log('cancel')},'tt');
		},
		showLoading1(){
		   this.$weui.loading('加载中');
		},
		hideLoading1(){
		   this.$weui.loadingEnd();
		},
	 }
  }
</script>
<style>
#app{
position:relative;
z-index:999999;
}
h4{margin:0}
</style>