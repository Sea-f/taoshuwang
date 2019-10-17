$(() => {
    $(".login-button button").click(function() {
        $.ajax({
            type: "post",
            url: "../server/login.php",
            data: {
                "username": `${$("#username").val()}`,
                "password": `${$("#password").val()}`
            },
            dataType: "json",
            success: function(response) {
                if (response.status == "success") {
                    /* 跳转到首页 */
                    alert("登录成功");
                    window.location.href = "./index.html";
                } else {
                    /* 注册失败： */
                    alert("用户名或密码错误");
                }

            }

        })
    })
    $("#register").click(function() {
        window.location.href = "./register.html";
    })
})