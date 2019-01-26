/** layuiAdmin.std-v1.0.0 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(function(e){
 	var i=(layui.$,layui.layer,layui.laytpl,layui.setter,layui.view,layui.admin);
 	i.events.logout=function(){
 		layer.open({
            title: "系统提示",
            content: "确认退出系统?",
            btn: ["确定", "取消"],
            yes: function () {
                var url = layui.setter.base+"json/login.json";
                $.get(url, function (res) {
                    if (res.code == 200) {
                        layer.msg("退出成功!");
                        setTimeout(function () {
                            window.location.href = "login.html";
                        }, 500)
                    }
                });
            }
        });
	},e("common",{})});