$(() => {
    class NavUI {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        renderUI() {
            let html = this.data.map(function (ele) {

                let tplimg = ele.src.map(function (e) {
                    return ` <a href="https://www.yaya.cn/product/82185.html" title="OPPO A11" data-v-4876c676>
                    <img src=${e} loading="true"
                      class="lazy-img" style="background-image:url(static/images/013938ef1c64dcee.png);"
                      data-v-7c26cbf0 data-v-4876c676></a>
                `
                }).join("");

                let tpl2 = ele.tiltecen.map(function (i) {
                    return `<a href="https://www.yaya.cn/search?keyword=5G%E6%89%8B%E6%9C%BA" title="${i}"
                    data-v-4876c676>${i}</a>`
                }).join("");

                let tpldl = ele.subhead.map(function (j) {
                    let tpldd = j.tiecen.map(function (k) {
                        return ` <a href="https://www.yaya.cn/list/2-7-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html" title=${k}
                        data-v-4876c676>${k}</a>`
                    }).join("");
                    return `
                    <dl class="flex border-bottom" data-v-4876c676>
                      <dt class="flex-child-noshrink" data-v-4876c676><a href="javascript:" title=${j.tie}
                          class="main-color" data-v-4876c676>${j.tie}</a></dt>
                      <dd class="flex-child-grow" data-v-4876c676>
                      ${tpldd}
                    </dd>
                    </dl>
                    `
                }).join("");

                return `<div class="menu-item" data-v-4876c676>
                <div class="menu-title flex flex-justify-between flex-align-center" data-v-4876c676>
                  <div class="flex flex-center" data-v-4876c676><i style="background-image:url();"
                      data-v-4876c676></i> <a
                      href="https://www.yaya.cn/list/2-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-1.html" title=${ele.title}
                      class="font-13 white" data-v-4876c676>${ele.title}</a></div> <svg aria-hidden="true" width="8"
                    height="12.8" viewBox="0 0 320 512" focusable="false" class="white fa-icon"
                    style="font-size:0.8em;" data-v-4876c676>
                    <path
                      d="M285.5 273l-194.3 194.3c-9.4 9.4-24.6 9.4-33.9 0l-22.7-22.7c-9.4-9.4-9.4-24.5 0-33.9l154-154.7-154-154.7c-9.3-9.4-9.3-24.5 0-33.9l22.7-22.7c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9z">
                    </path>
                  </svg>
                </div>
                <div class="sub-menu" data-v-4876c676>
                ${tpl2}
                </div>
                <div class="menu-open flex flex-justify-between" data-v-4876c676>
                  <div class="flex-child-grow" data-v-4876c676>
                   ${tpldl}
                  </div>
                  <div class="menu-ad" data-v-4876c676>
                  ${tplimg}
                  </div>
                </div>
              </div>`
            }).join("");

            this.root = $(html);
            $(".menu-box").append(this.root)
        }
    }
    $.ajax({
        type: "get",
        url: "http://127.0.0.1/www.yaya.cn/server/nav.php",
        dataType: "json",
        success: function (response) {
            let slider = new NavUI(response);
            slider.renderUI();
        }
    });

    function GetRequest() {
        var urls = location.search; //获取url中"?"符后的字串
        var url = decodeURI(urls);
        var obj = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for (var i = 0; i < strs.length; i++) {
                obj[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
            }
        }
        return obj;
    }
    let obj = GetRequest();
    $(".title").text(obj.title);
    let htmls = `<img
    src="${obj.msrc}"
    class="responsive-image thumb" data-v-cf0e1ad2>
    `
    $(".thumb-item").append($(htmls));
    let tpll = `<img src="${obj.src}" class="preview-image" data-v-cf0e1ad2>
            `
    let tpl2 = `
			<img src="${obj.src}">
         `
    $(".big_area").append($(tpl2))
    $(".preview-box").append($(tpll));
    $("#price").text(obj.price);

    var zoom = document.querySelector('.preview-box');
    var simg = document.querySelector('.preview-box img');
    var bimg = document.querySelector('.big_area img');
    var big = document.querySelector('.big_area');
    var small = document.querySelector('.preview-box');
    var mask = document.querySelector('.mask');

    // 设置遮罩层宽高  小图宽 除以 大图宽 乘以 大显示区域边框
    mask.style.width = (simg.offsetWidth / bimg.offsetWidth) * big.clientWidth + "px";
    mask.style.height = (simg.offsetHeight / bimg.offsetHeight) * big.clientHeight + "px";

    // 定义遮罩层最大边距，也就是最大移动距离
    var maxW = simg.clientWidth - mask.offsetWidth;
    var maxH = simg.clientHeight - mask.offsetHeight;

    // 鼠标移入小显示区域发生事件：1.遮罩层显示 2.大显示区域显示
    small.onmouseenter = function () {
        mask.style.left = 0;
        big.style.left = 410 + "px";
    }
    // 鼠标移入小显示区域发生事件：1.遮罩层消失 2.大显示区域消失
    small.onmouseleave = function () {
        mask.style.left = -10000 + "px";
        big.style.left = -10000 + "px";
    }
    // 鼠标在小显示区域移动
    small.onmousemove = function (e) {
        // 解决兼容问题
        e = e || window.event;
        // 定义两个变量 让鼠标位置一直处于遮罩层位置中间
        var nLeft = e.pageX - zoom.offsetLeft - zoom.clientLeft - (mask.offsetWidth / 2);
        var nTop = e.pageY - zoom.offsetTop - zoom.clientTop - mask.offsetHeight / 2 - mask.offsetHeight * 1.5;

        // 设置遮罩层永远显示在小显示区域内部 也就是判断nLeft、nTop值
        nLeft = Math.min(maxW, Math.max(0, nLeft));
        nTop = Math.min(maxH, Math.max(0, nTop));

        // 遮罩层位置
        mask.style.left = nLeft + "px";
        mask.style.top = nTop + "px";

        // 设置大图片移动位置 跟随遮罩层百分比移动（语法带入）
        bimg.style.left = -(bimg.offsetWidth - big.clientWidth) * (nLeft / (simg.clientWidth - mask.offsetWidth)) + "px";
        bimg.style.top = -(bimg.offsetHeight - big.clientHeight) * (nTop / (simg.clientHeight - mask.offsetHeight)) + "px";

    }
})