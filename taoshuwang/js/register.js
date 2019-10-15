$(() => {
    let captcha = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 6, //线条数量
        dotR: 2, //点的半径
        dotNum: 2, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 70, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'fill', //字体绘制方法，有fill和stroke
        content: '1234567890', //验证码内容
        length: 4 //验证码长度
    }); // 传值
    $("#user").val("123456123");
    $("#psw").val("123456123");
    $("#psw-true").val("123456123");
    $("#e-mail").val("1184575830@qq.com")
    $("main div >input").focus(function() {
        $(this).parent().css({
            "background": "rgb(255,245,204)",
            "border": "1px solid rgb(215,194,172)"
        })
        $(this).siblings("span:nth-of-type(2)").css("display", "inline");
        $(this).siblings("span:nth-of-type(1)").css("display", "none")
    }).blur(function() {
        $(this).parent().css({
            "background": "",
            "border": ""
        })
        $(this).siblings("span:nth-of-type(2)").css("display", "none");
    })
    let reg0 = /^[a-zA-Z0-9_-]{4,16}$/;
    $("#user").blur(function() {
        //失去焦点发送检验请求
        $.ajax({
                type: "post",
                url: "../server/user.php",
                data: {
                    "username": $("#user").val()
                },
                dataType: "json",
                success: function(response) {
                    if (response.status == "error") {
                        $("#user").siblings("span:nth-of-type(1)").fadeIn(100).children("r").text("该用户已被注册");
                    }
                },

            })
            //当不符合正则时候调整提醒语句
        if (reg0.test($("#user").val().trim()) == false) {
            $("#user").siblings("span:nth-of-type(1)").fadeIn(100).children("r").text("请输入正确用户名");
        }

    })
    var reg1 = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    $("#e-mail").blur(function() {

        if (!reg1.test($("#e-mail").val())) {
            $("#e-mail").siblings("span:nth-of-type(1)").fadeIn(100);
        }
    })
    let reg2 = /^(\w){6,20}$/;
    $("#psw-true,#psw").blur(function() {
        if (!reg2.test($("#psw").val())) {
            $("#psw").siblings("span:nth-of-type(1)").fadeIn(100);
            $("#psw-true").siblings("span:nth-of-type(1)").fadeOut(100);
        } else if (($("#psw").val() == $("#psw-true").val()) && reg2.test($("#psw").val())) {
            $("#psw-true,#psw").siblings("span:nth-of-type(1)").fadeOut(100);
        }
        if (($("#psw").val() != $("#psw-true").val()) && reg2.test($("#psw").val())) {
            $("#psw-true").siblings("span:nth-of-type(1)").fadeIn(100);
        }
    })
    captcha.draw(document.querySelector('canvas'), r => {
        $("#code").blur(function() {
            if ($("#code").val() != r) {
                $("#code").siblings("span:nth-of-type(1)").fadeIn(100);
                console.log(r);
            } else {
                $("#code").siblings("span:nth-of-type(1)").fadeOut(100);
            }
        });
    })
    $("#submit").click(function() {
        new Promise(function(resolve, reject) {
            $("#user").trigger("blur");
            $("#e-mail").trigger("blur");
            $("#psw-true,#psw").trigger("blur");
            $("#code").trigger("blur");
            resolve();
        }).then(function() {
            setTimeout(function() {
                for (let i = 0; i < $(".fault").length; i++) {
                    if ($(".fault").eq(i).css("display") != "none") {
                        alert("仍有不满足条件项，请重新填写");
                        return;
                    } else if ($(".fault").eq(i).css("display") == "none" && i == ($(".fault").length - 1)) {
                        $.ajax({
                            type: "post",
                            url: "../server/register.php",
                            data: {
                                "username": $("#user").val(),
                                "password": $("#psw").val(),
                                "e-mail": $("#e-mail").val()
                            },
                            dataType: "json",
                            success: function(response) {
                                /* if (response.status == "error") {
                                    $("#user").siblings("span:nth-of-type(1)").fadeIn(100).children("r").text("该用户已被注册");
                                } */
                                alert("注册成功，点击确定跳转至登录");
                                console.log(response.msg);
                                window.location.href = `login.html`;
                            }
                        })
                    }
                }
            }, 100);

        })

        // $(".fault").css("display");


    })
})