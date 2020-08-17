$(() => {
    let Nvals = Ckie.getItem("name");
    let Pvals = Ckie.getItem("pwd");
    if (Nvals && Pvals) {
        $.ajax({
            type: "post",
            url: "../../../server/login.php",
            data: {
                username: Nvals,
                password: md5(Pvals).substr(0, 10)
            },
            dataType: "json",
            success: function (response) {
                if (response.status == "success") {
                    window.location.href = "../../../shouye.html";
                } else {
                    alert(response.msg);
                }
            }
        });
    }

    $("#btn").click(function () {
        $(this).toggleClass("ant-switch-checked", );
    })


    $("#login").click(function () {
        let Nval = $("#username").val();
        let Pval = $("#password").val();
        if (Nval.length == 0) {
            alert("请输入用户名");
            return;
        }
        if (Pval.length == 0) {
            alert("请输入密码");
            return;
        }
        if ($(".ant-switch-checked").length > 0) {
            Ckie.setItem("name", Nval, 30);
            Ckie.setItem("pwd", Pval, 30);
        }
        $.ajax({
            type: "post",
            url: "../../../server/login.php",
            data: {
                username: Nval,
                password: md5(Pval).substr(0, 10)
            },
            dataType: "json",
            success: function (response) {
                if (response.status == "success") {
                    window.location.href = "../../../shouye.html";
                } else {
                    alert(response.msg);
                }
            }
        });

    })
})