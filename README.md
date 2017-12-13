# vue 通用插件

包括以下插件

- Loading
- Alert
- Confirm
- Toast Loading
## Code ##
    //安装
    yarn install

    //运行
    yarn run dev

    //生成
    yarn run build

    //显示全局ajax loading
    this.$loading.show();

    //关闭loading
    this.$loading.hide();

    //打开Alert
    this.$weui.alert(msg);

    //打开Confirm
    this.$weui.confirm(msg,okcallback=null,cancecallback=null,title='提示');

    //打开Loading Toast
    this.$weui.loading(msg='');

    //关闭loading Toast
    this.$weui.loadingEnd();