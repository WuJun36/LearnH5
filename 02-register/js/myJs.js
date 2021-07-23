// 文档加载完后的操作
// $(document).ready(function(){
//     alert("文档加载完了");
// });




$(document).ready(function(){

    

    $("input.username").focus(function(){
        $(this).removeClass("error");
        $(".username-div .regist-div-error").text("");
        $(".username-div .hint").css("visibility","visible");
        
    });

    $("input.password").focus(function(){
        $(this).removeClass("error");
        $(".password-div .regist-div-error").text("");
    });

    // 校验用户名与密码不能为空
    $(".regist-form").submit(function(e){
        console.log(e.cancelable);
        let username = $(".username");
        let password = $(".password");
        let usernameError = $(".username-div .regist-div-error");
        let passwordError = $(".password-div .regist-div-error");
        let usernameRes = checkUsername(username.val());
        if(!usernameRes.code){
            
            e.preventDefault();
            
            username.addClass("error");
            usernameError.text(usernameRes.msg);
            
        }
        if(password.val() == ""){
            
            e.preventDefault();
            password.addClass("error");
            passwordError.text("密码不能为空");
         }

    });

    // 检查用户名
    $(".username").blur(function(){
        let username = $(".username");
        let errorDiv = $(".username-div .regist-div-error");
        let res = checkUsername(username.val());
        if(!res.code){ 
            username.addClass("error");
            errorDiv.text(res.msg); 
        }
        $(".username-div .hint").css("visibility","hidden");
    });

    // 检查用户名是否合法
    function checkUsername(username){
        let res = {};
        if(username.length == 0) return res={code:false,msg:"用户名不能为空"};
        if(username.length < 2 ) return res={code:false,msg:"用户名长度不能小于2"};
        if(username.length > 15) return res={code:false,msg:"用户名长度不能大于15"};

        // 正则表达式,只含有汉字、数字、字母、下划线,下划线位置不限
        let reg = new RegExp('^[a-zA-Z0-9_\u4e00-\u9fa5]+$');
        if(!reg.test(username)) return res={code:false,msg:"用户名只能包含中英文字符、数字或下划线"};
        return res={code:true,msg:"用户名合法"};
        
    }
});


