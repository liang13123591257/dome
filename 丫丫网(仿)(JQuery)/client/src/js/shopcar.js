$(() => {
    function carUI() {
        function defaultUI() {
            let html = ` <div data-v-71ec8c54="" class="cart-none"><img data-v-71ec8c54="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAe1BMVEUAAACcnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJyLpJD0AAAAKHRSTlMAi/OnfA5ZPwho1OLe7pxtyEUYsIE3zSuic/gkwpROMei5YFIdPY8RZWGCvAAAA+tJREFUaN7t2sliokAQBuBfRGQT2WRz3+v9n3BoTNJkEiY0RdrD+J28qFBUVRc0eHl5+X9Z2/Mdz+ARLQoL2q1JyKCdScIZutkkGDZ0s8sjEW3xDOvUnePp8guew6DtU05/TjXfgh6tlJ6SEEGP1E/3aMxI8KGJS0Shg1pEQgo9ZiRsmo97c1oRNLFI2ONNbFo2tAip5uFDSYdAS0lFxaKJ9LvDI/I6zKzEaZWykLwVmhbzjRMDGxLWqN0PyRkaTIiq5JTIwcASRR2s8ds8EpBPXDpBOMp8/00rEoIm6MVJDIAkhPhtIQk5BCIjKwsSLCiyraXzZtnry83V3bR6ytLJiMiGmtinlin6uJRZEaPWJJgBIA8CKNrSJzn68aogwoxzcQP6ZKIwZbtmIMLl4IEVajqoxGkn+qiLgWyrXD54vavRNuRBRsezze5ItbR/KW/fT/4QWODYU61X5OzcDCvK5ckbYPFVOl98hnAiodQU64blmvl7445H6MKuSnySKAo80XeYDlS7oGUfzTucSPDj3Alpe53/JVqxYn316GfVgr7jRYy8DolhqrzGx60RnqGAginV5OXZEcMECsy/LvJ8cpsMsKHaEgpy2YM5UqpF6s0rB1PWpIp6QZngsStR4YzmxeqACaA91kuqlayFgjFORdAf61C2fAULlW91D0YeVN1kXjNzS3usHXnoemO9fYy+ygrZaIfZUG098HHhRm9uyVgv9OWWFPKalzO4BW15BXWTmxe8guLnFn+huFo/O1UducVYlAvqK8Eg1+/3tnaMQU+lecVf07W3MyT+QmFvqCeX1QMyfHFKzR5SZwbwYq2VzF8H+kWDH2DZZglJ36Jsu0SZDUnXomxxd5nPVNsOnGxPGO4ycGM+e6wQDN6gX4gZ7YM15e6oFoBjPqigUln/epvXkbcrIgegcsCN8QESY1FW/04CgRvrmfqNsQmmaRPrmYpklA38iARDBdUqG/xYD7EB25SGuIFtRUOswGcVU1WFg5eXvu6XGX5iX2KMaz3JKjJC08Y/LI8LqtztCuOZ0Btvhy777IdNCObectk57EjHEc9XKjv/V0owhis13KNH1DVy2tRYHDNqOKO9dlGdP+7Ip53vp6YzYO43RwC+mOTgtuv60VCOHHeDanOwWe0RedMxcvqt4W450ut0ZfsZbNBxkQ+t4TuXR8ritJOl6PhjT2RfOxlvI9+bN5lzxxduM2S1orIc68XmUla013XncGxV9Bp8KQnhcme6JJw6a92f7E7HETvIosezq4Q+iTGGPbVUF3zH9qnFwjjO9MHL8b171tHOWVY3zxB8c4ZOjmsIiyDCy8uLFn8AqcsMXQUtLrMAAAAASUVORK5CYII=">
        <p data-v-71ec8c54="">购物车里还没有商品<span data-v-71ec8c54="">，快 <a data-v-71ec8c54="" href="/" target="_parent" class="main-color">去逛逛</a> 吧</span></p>
    </div>`
            $(".cart-box").html(html);
        }

        function setUI(data) {
            let sum = 0;
            for (let i = 0; i < data.length; i++) {
                sum += (data[i].price) * (data[i].sumcont);
            }

            let tpl = data.map(function (item) {
                return `
            <div data-v-71ec8c54="" class="cart-item">
                <div data-v-71ec8c54="">
                    <div data-v-71ec8c54="" class="cart-check">
                        <label data-v-71ec8c54="" class="checkbox radio-box">
                            <input data-v-71ec8c54="" type="checkbox" class="check">
                        </label>
                    </div> 
                <div data-v-71ec8c54="" class="cart-product-box relative">
                    <div data-v-71ec8c54="" class="product" style="width: 550px;"> 
                        <a data-v-71ec8c54="" href="/product/82193.html" target="_blank" class="block relative left pro-img-box">
                            <img data-v-71ec8c54="" src="${item.src}"> 
                        </a> 
                        <div data-v-71ec8c54="" class="product-title">
                            <p data-v-71ec8c54="" class="title-line"> 
                                <a data-v-71ec8c54="" href="/product/82193.html" target="_blank">${item.title} </a>
                            </p>   
                            <div data-v-71ec8c54="" class="jiuji-serviceCur margin-top"></div> 
                            <div data-v-71ec8c54="" class="jiuji-server margin-top overflow-hide"> 
                                <a data-v-71ec8c54="" href="javascript:;" class="grey-9">
                                    <u data-v-71ec8c54="" class="baoxiu"></u>选服务
                                </a>
                            </div>
                        </div>
                    </div> 
                    <div data-v-71ec8c54="" class="unit-price">
                        <b data-v-71ec8c54="">${item.price}</b>
                    </div> 
                    <div data-v-71ec8c54="" class="discount">0.00</div> 
                    <div data-v-71ec8c54="" class="count">
                        <i data-v-71ec8c54="" class="jian" style="background:#ccc;font-size:14px;">一</i> 
                        <input data-v-71ec8c54="" type="text" value=${item.sumcont}> 
                        <em data-v-71ec8c54=""  class="jia" style="background:#ccc;font-size:14px;">十</em>
                    </div> 
                    <div data-v-71ec8c54="" class="sum">
                        <b data-v-71ec8c54="" class="red">${item.price}</b>
                    </div> 
                    <div data-v-71ec8c54="" class="action">
                        <a data-v-71ec8c54="" href="javascript:;" class="move-to-favorate">移入收藏夹</a> 
                        <button data-v-603ca4e4 >删除</button>
                    </div>
                </div>
                </div>
        </div> 
        `
            }).join("");

            let html = `<div data-v-71ec8c54="">
            <div data-v-71ec8c54="" class="cart-tab">
                <div data-v-71ec8c54="" class="left">
                    <a data-v-71ec8c54="" href="javascript:;" class="cur">全部商品 
                        <span data-v-71ec8c54="" class="red">${data.length}</span>
                    </a>
                </div> 
                <p data-v-71ec8c54="" class="right">已选 
                    <span data-v-71ec8c54="" class="red">${data.length}</span>件，合计（不含运费）
                    <b data-v-71ec8c54="" class="red">￥${data[0].price}</b></p>
            </div>
        </div>
        <div id="cen" data-v-71ec8c54="" class="cart-list">
            <div data-v-71ec8c54="" class="cart-item cart-title">
                <div data-v-71ec8c54="" class="cart-check">
                <label data-v-71ec8c54="" class="checkbox radio-box">
                    <input data-v-71ec8c54="" type="checkbox" id="checkAll">全选</label>
                </div> 
                <div data-v-71ec8c54="" class="cart-product-box">
                    <div data-v-71ec8c54="" class="product">商品</div> 
                    <div data-v-71ec8c54="" class="unit-price">单价（元）</div> 
                    <div data-v-71ec8c54="" class="discount">优惠（元）</div> 
                    <div data-v-71ec8c54="" class="count">数量</div> 
                    <div data-v-71ec8c54="" class="sum">小计（元）</div> 
                    <div data-v-71ec8c54="" class="action">操作</div>
                </div>
            </div> 
            ${tpl}
            <div data-v-71ec8c54="" class="cart-total flex flex-justify-between flex-align-center"><div data-v-71ec8c54="" class="margin-left">
            <label data-v-71ec8c54="" class="checkbox radio-box">
                <input data-v-71ec8c54="" type="checkbox" id="check">全选
            </label>    
            <a data-v-603ca4e4 id="dele">清空</a>
        </div> 
        <div data-v-71ec8c54="" class="flex full-height">
            <span data-v-71ec8c54="" class="flex flex-align-center">
                <img data-v-71ec8c54="" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABVklEQVRoQ+1Z7Q6DQAjD93/omSVmIZdD2gN0c+zncoKl5fhwE5GX5Pw2ZUbb1P9rTyl+38ZTDIlIA1gRwsiARbdlm5UKy5LrtwGoECHJeikDVnIjL5ElLS2hqd8zCTWAI3wRad3GgFWwWPk1gNk9jETxKxhACqN120RuIcpvVSFrAA4NnwBVdaNsDiCymZ5pAEm9UIiB5YdPHkSSOMUv2/+jThsAGim0G0WqLxt1tghOzzcAcpXC1geX+TGJb5HBsNpxX1qfbwBGIUtJUISZqjoQ0bq7C9JbwAYAFBxWTjQDVy53WTDu+ap22nUMbrNdO48DwCY1UvjcKEbYqBrqI9coBfjRACqWu4jkKPbQdtrdUUZ0vDCammsVqxP8OwCUDED2oL1QFgMN4IiAW5eqrtH028aSWQMgJzKqVUYnsop2uiKJob0QMJ+YRyJfI6lNxDhS/jQDOwmL/BPtMHfwAAAAAElFTkSuQmCC" alt="" style="width: 20px; cursor: pointer;">
            </span> 
            <span data-v-71ec8c54="">已选商品 
                <b data-v-71ec8c54="" class="red font-16">${data.length}</b> 件
            </span> 
            <span data-v-71ec8c54="">总计（不含运费）： 
                <b data-v-71ec8c54="" class="red font-18">￥${sum}</b>
            </span> 
            <button data-v-71ec8c54="" id="goConfirm" class="button">结 算</button>
        </div>
    </div>
        </div>        
        `
            $(".cart-box").html(html);
        }

        $.ajax({
            type: "get",
            url: "http://127.0.0.1/www.yaya.cn/server/shopcarUI.php",
            dataType: "json",
            success: function (response) {
                if (response.length == 0) {
                    defaultUI();
                } else {
                    setUI(response);
                }
            }
        });
    }
    carUI();

    $(".cart-box").on("click", "button", function () {
        let title = $(this).parents(".cart-product-box").children(".product").children(".product-title").children("p").children("a").text();
        let price = $(this).parent().prev().children("b").text();
        if ($(".check").is(":checked")) {
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/www.yaya.cn/server/shopcar.php",
                data: `type=dele&title=${title}&price=${price}`,
                dataType: "json",
                success: function (response) {
                    if (response.status == "success") alert(response.msg);
                    carUI();
                }
            });

        }
    })

    $(".cart-box").on("click", "em", function () {
        let title = $(this).parents(".cart-product-box").children(".product").children(".product-title").children("p").children("a").text();
        let cont = $(this).prev().val();
        if (cont < 10) {
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/www.yaya.cn/server/shopcar.php",
                data: `type=jia&title=${title}`,
                // dataType: "dataType",
                success: function (response) {
                    carUI();
                }
            });
        }
    })

    $(".cart-box").on("click", "i", function () {
        let title = $(this).parents(".cart-product-box").children(".product").children(".product-title").children("p").children("a").text();
        let cont = $(this).next().val();
        if (cont > 1) {
            $.ajax({
                type: "post",
                url: "http://127.0.0.1/www.yaya.cn/server/shopcar.php",
                data: `type=jian&title=${title}`,
                // dataType: "dataType",
                success: function (response) {
                    carUI();
                }
            });
        }

    })

    $(".cart-box").on("click", function (eve) {
        if (eve.target.id == "dele") {
            if ($("#check").is(":checked")) {
                $.ajax({
                    type: "post",
                    url: "http://127.0.0.1/www.yaya.cn/server/shopcar.php",
                    data: `type=clear`,
                    // dataType: "dataType",
                    success: function (response) {
                        carUI();
                    }
                });
            }
        }
    })


    $(".button").click(function () {
        let src = $(this).prev().prev().prev().children("img").attr("src");
        let title = $(this).prev().prev().children("a").eq(0).attr("title");
        let price = $(this).prev().children("b").text().substr(1);
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/www.yaya.cn/server/shopcar.php",
            data: `type=btn&src=${src}&title=${title}&price=${price}&sumcont=1`,
            dataType: "json",
            success: function (response) {
                if (response.status == "success") alert(response.msg);
                window.location.reload();
            }
        });
        console.log(src, title, price);
    });
})