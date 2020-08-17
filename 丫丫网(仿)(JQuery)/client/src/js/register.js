$(() => {
    $("#username").blur(function () {
        let Uval = $(this).val();
        if (Uval.length == 0) {
            $("#uname").addClass("vivwred");
            alert("用户名不能为空");
            return;
        }
        if (Uval.length > 0) {
            $("#uname").removeClass("vivwred");
        }

        if (!/^[a-zA-Z0-9]{3,8}$/.test(Uval)) {
            $("#uname").addClass("vivwred");
            alert("用户名格式不规范");
            return;
        } else {
            $("#uname").removeClass("vivwred");
        }
    });

    $("#passwordA").blur(function () {
        let Uval = $(this).val();
        if (Uval.length == 0) {
            $("#pwdA").addClass("vivwred");
            alert("密码不能为空");
            return;
        }
        if (Uval.length > 0) {
            $("#pwdA").removeClass("vivwred");
        }

        if (!/^[a-zA-Z0-9]{6,16}$/.test(Uval)) {
            $("#pwdA").addClass("vivwred");
            alert("密码格式不规范");
            return;
        } else {
            $("#pwdA").removeClass("vivwred");
        }
    });

    $("#passwordB").blur(function () {
        let Uval = $(this).val();
        let Uvals = $("#passwordA").val();
        if (Uval != Uvals) {
            $("#pwdB").addClass("vivwred");
            alert("二次密码不正确");
            return;
        } else {
            $("#pwdB").removeClass("vivwred");
        }
    });
    $("#phone").blur(function () {
        let Uval = $(this).val();
        if (Uval.length == 0) {
            $("#ph").addClass("vivwred");
            alert("手机号码不能为空");
            return;
        }
        if (Uval.length > 0) {
            $("#ph").removeClass("vivwred");
        }

        if (!/^1[3-9]\d{9}$/.test(Uval)) {
            $("#ph").addClass("vivwred");
            alert("手机号码不正确");
            return;
        } else {
            $("#ph").removeClass("vivwred");
        }
    });
    let captcha2 = new Captcha({
        lineWidth: 1, //线条宽度
        lineNum: 20, //线条数量
        dotR: 2, //点的半径
        dotNum: 40, //点的数量
        preGroundColor: [10, 80], //前景色区间
        backGroundColor: [150, 250], //背景色区间
        fontSize: 40, //字体大小
        fontFamily: ['Georgia', '微软雅黑', 'Helvetica', 'Arial'], //字体类型
        fontStyle: 'stroke', //字体绘制方法，有fill和stroke
        content: 'abcdefghijklmnopqrstuvwsyz', //验证码内容
        length: 4 //验证码长度
    }); // 传值
    captcha2.draw(document.querySelector('#captcha2'), r => {
        imgCodeTarget = r;
        $("#txyz").trigger("blur");
        console.log(r, '验证码2');
    });
    $("#txyz").blur(function () {
        let Uval = $(this).val();
        if (Uval.length == 0) {
            $("#yz").addClass("vivwred");
            alert("验证码不能为空");
            return;
        }
        if (Uval.length > 0) {
            $("#yz").removeClass("vivwred");
        }
        if (imgCodeTarget != Uval) {
            $("#yz").addClass("vivwred");
            alert("验证码不正确");
            return;
        } else {
            $("#yz").removeClass("vivwred");
        }
    });
    $("#btn").click(function () {
        if ($(".vivwred").length != 0 || $("#username").length == 0 || $("#passwordA").length == 0 || $("#passwordB").length == 0 || $("#phone").length == 0) {
            alert("请完善注册信息");
            return;
        } else {
            let Uval = $("#username").val();
            let Pval = md5($("#passwordA").val()).substr(0, 10);
            let PHval = $("#phone").val();
            let data = {
                name: Uval,
                password: Pval,
                phone: PHval
            }
            $.ajax({
                type: "post",
                url: "../../../server/register.php",
                data,
                dataType: "json",
                success: function (response) {
                    if (response.status == "success") {
                        alert(response.msg);
                        window.location.href = "./login.html";
                    } else {
                        alert(response.msg);
                    }
                }
            });
        }
    });
})