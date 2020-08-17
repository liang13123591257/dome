$(() => {
    let arr = [{
            title: "华为",
            src: "https://img2.yaya.cn//pic/product/210x90/201309270439540.jpg.webp"
        },
        {
            title: "苹果",
            src: "https://img2.yaya.cn//pic/brand/20170519185532_7641.jpg.webp"
        },
        {
            title: "荣耀",
            src: "https://img2.yaya.cn//pic/brand/20181107144138_6019.jpg.webp"
        },
        {
            title: "vivo",
            src: "https://img2.yaya.cn//pic/brand/20170519185640_5272.jpg.webp"
        },
        {
            title: "OPPO",
            src: "https://img2.yaya.cn//pic/brand/20170519185654_0131.jpg.webp"
        },
        {
            title: "小米",
            src: "https://img2.yaya.cn//pic/brand/20170519185608_5405.jpg.webp"
        },
        {
            title: "三星",
            src: "https://img2.yaya.cn//pic/product/210x90/201309270439180.jpg.webp"
        },
        {
            title: "一加",
            src: "https://img2.yaya.cn//pic/brand/20170519190414_7726.jpg.webp"
        },
        {
            title: "iQOO",
            src: "https://img2.yaya.cn//pic/brand/20191121104314_2460.jpg.webp"
        },
        {
            title: "realme",
            src: "https://img2.yaya.cn//pic/brand/20190904141258_9902.jpg.webp"
        },
        {
            title: "诺基亚",
            src: "https://img2.yaya.cn//pic/brand/20170519190332_5117.jpg.webp"
        },
        {
            title: "魅族",
            src: "https://img2.yaya.cn//pic/brand/20170519185626_6859.jpg.webp"
        },
        {
            title: "黑鲨",
            src: "https://img2.yaya.cn//pic/brand/20180413174720_7016.jpg.webp"
        },
        {
            title: "AGM旅行手机",
            src: "https://img2.yaya.cn//pic/brand/20170623160642_6905.jpg.webp"
        }
    ]

    let html = arr.map(function (ele) {
        return `<a href="/list/2-1_7-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0-0_0.html" title=${ele.title}
    class="brand-item flex flex-center" data-v-603ca4e4><img
      src=${ele.src}
      loading="true" class="lazy-img" style="background-image:url(static/images/013938ef1c64dcee.png);"
      data-v-7c26cbf0 data-v-603ca4e4>
   </a>`
    }).join("");
    $(".screening-option").eq(0).append($(html))

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


    let data = [{
        "h4": "浏览了最终购买了",
        "marr": [{
            "src": "https://img2.yaya.cn/pic/product/440x440/20191209202257675.jpg.webp",
            "title": "华为Mate30(TAS-AN00)全网通5G版",
            "price": "￥4999"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20191209195324785.jpg.webp",
            "title": "Apple iPhone11(A2223)全网通",
            "price": "￥5260"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20191209195431227.jpg.webp",
            "title": "华为Mate30 Pro全网通5G版",
            "price": "￥6899"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20191216203128621.jpg.webp",
            "title": "vivo X30 全网通5G版",
            "price": "￥3298"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20191210165444912.jpg.webp",
            "title": "红米 Redmi K30 全网通5G版",
            "price": "￥2599"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20191219165627318.jpg.webp",
            "title": "OPPO Reno 3 全网通5G版",
            "price": "￥3398"
        }]
    }, {
        "h4": "浏览了还购买了",
        "marr": [{
            "src": "https://img2.yaya.cn/pic/product/440x440/20200108190859397.jpg.webp",
            "title": "乐物 华为 Mate 30 全屏2.5D钢化膜",
            "price": "￥89"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20190918174315781.jpg.webp",
            "title": "苹果 iPhone 11 硅胶 定制保护壳",
            "price": "￥159"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20190918174326391.jpg.webp",
            "title": "苹果 iPhone 11 硅胶 定制保护壳",
            "price": "￥159"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/2019091817433616.jpg.webp",
            "title": "苹果iPhone11硅胶定制保护壳",
            "price": "￥159"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20190918174354884.jpg.webp",
            "title": "苹果 iPhone 11 硅胶 定制保护壳",
            "price": "￥159"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20200108174321195.jpg.webp",
            "title": "乐物华为Nova6/荣耀V30/V30Pro 全屏2.5D钢化膜",
            "price": "￥89"
        }]
    }, {
        "h4": "最新上架的商品",
        "marr": [{
            "src": "https://img2.yaya.cn/pic/product/440x440/20190717142512874.jpg.webp",
            "title": "￥1099",
            "price": "红米RedmiNote7Pro全网通版"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20190618234241821.jpg.webp",
            "title": "￥1260",
            "price": "华为nova4e(MAR-AL00)全网通版"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20191126095213954.jpg.webp",
            "title": "￥2298",
            "price": "vivo X27 全网通版"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20190711094810531.jpg.webp",
            "title": "￥2998",
            "price": "vivo iQOO 全网通版"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/20190618233637915.jpg.webp",
            "title": "￥2640",
            "price": "小米9 全网通版"
        }, {
            "src": "https://img2.yaya.cn/pic/product/440x440/2019062114465050.jpg.webp",
            "title": "￥4599",
            "price": "三星GalaxyS10(SM-G9730)全网通版"
        }]
    }]

    let html2 = data.map(function (ele) {
        let tpl = ele.marr.map(function (e) {
            return `
            <a href="./details.html?title=${e.title}&price=${e.price}&src=${e.src}&msrc=${e.src}"
            title=${e.price} class="flex guess-item" data-v-2162eccc>
            <img src=${e.src} loading="true"
              width="70" height="70" class="lazy-img flex-child-noshrink"
              style="background-image:url(static/images/013938ef1c64dcee.png);" data-v-7c26cbf0 data-v-2162eccc>
            <div class="flex-child-grow margin-left flex flex-col flex-justify-between overflow-hide"
              data-v-2162eccc>
              <p class="lines-2" data-v-2162eccc>${e.price}</p>
              <p class="red font-14" data-v-2162eccc>${e.title}</p>
            </div>
          </a>`
        }).join("")
        return `
        <div class="guess border margin-top" data-v-2162eccc>
              <h4 class="box-title" data-v-2162eccc>${ele.h4}</h4> 
                ${tpl}
            </div>`
    }).join("");

    $("#lf").append($(html2));


    function listUI(data) {
        let html = data.map(function (ele) {
            return `
            <li data-ppid="81755" data-v-603ca4e4="">

            <a href="./details.html?title=${ele.title}&price=${ele.price}&src=${ele.src}&msrc=${ele.msrc}" title='${ele.title}' class="main-pic-link" data-v-603ca4e4="">
                <img src=${ele.src} class="lazy-img main-pic" style="" data-v-7c26cbf0="" data-v-603ca4e4="" loaded="true">
            </a> 
            
            <div class="sku-color flex mt-5 overflow-hide" data-v-603ca4e4="">
                <a href="" title='${ele.mtitle}' data-ppid="81755" class="flex-child-noshrink cur" data-v-603ca4e4="">
                    <img src=${ele.msrc} class="lazy-img" style="" data-v-7c26cbf0="" data-v-603ca4e4="" loaded="true">
                </a>
                </div> 
                
                <a href="/product/81755.html" title='${ele.title}' class="lines-2 mt-5" data-v-603ca4e4="">
              ${ele.title}
                </a> 
            
            <div class="price mt-5 mb-5 flex" data-v-603ca4e4="">
            <span data-v-603ca4e4="">
                <div role="tooltip" id="el-popover-8731" aria-hidden="true" class="el-popover el-popper" style="width:260px;display:none;" tabindex="0">
                    <p class="all-sku-none text-center" data-v-603ca4e4=""></p> 
                </div>
                    <b class="red font-14 el-popover__reference" data-v-603ca4e4="" aria-describedby="el-popover-8731" tabindex="0">￥${ele.price}</b><br/>
                    <b class="red font-14 el-popover__reference" data-v-603ca4e4="" aria-describedby="el-popover-8731" tabindex="0"><button data-v-603ca4e4>加入购物车</button></b>
                    
            </span>
            </div> <p class="grey-9" data-v-603ca4e4="">已有<a href="/product/81755.html#tab_top" class="grey-9" data-v-603ca4e4="">${ele.evaluate}</a>
              人评价</p> <!----> <!----> <div class="tool" data-v-603ca4e4=""><a href="javascript:" data-v-603ca4e4="">对比</a> <a href="javascript:" data-v-603ca4e4="">收藏</a></div></li>
            `
        }).join("");

        $("#list").html(html);
    }

    $.ajax({
        type: "get",
        url: "http://127.0.0.1/www.yaya.cn/server/list.php",
        dataType: "json",
        success: function (response) {
            listUI(response);
        }
    });

    $("#zh").click(function () {
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/www.yaya.cn/server/sort.php",
            data: "type=zh",
            dataType: "json",
            success: function (response) {
                listUI(response);
                console.log(response);
            }
        });
    });

    $("#jg").click(function () {
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/www.yaya.cn/server/sort.php",
            data: "type=jg",
            dataType: "json",
            success: function (response) {
                listUI(response);
                console.log(response);
            }
        });
    });

    $("#zx").click(function () {
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/www.yaya.cn/server/sort.php",
            data: "type=zx",
            dataType: "json",
            success: function (response) {
                listUI(response);
                console.log(response);
            }
        });
    });

    $("#qj").click(function () {
        let zx = $("#zxs").val();
        let zd = $("#zd").val();

        $.ajax({
            type: "post",
            url: "http://127.0.0.1/www.yaya.cn/server/sort.php",
            data: `type=qj&zx=${zx}&zd=${zd}`,
            dataType: "json",
            success: function (response) {
                listUI(response);
            }
        });
    });

    $("#list").on("click", "button", function () {
        let src = $(this).parents("li").children("a").eq(0).children("img").attr("src");
        let title = $(this).parents("li").children("a").eq(0).attr("title");
        let price = $(this).parents("b").prev().prev().text().substr(1);
        $.ajax({
            type: "post",
            url: "http://127.0.0.1/www.yaya.cn/server/shopcar.php",
            data: `type=btn&src=${src}&title=${title}&price=${price}&sumcont=1`,
            dataType: "json",
            success: function (response) {
                if (response.status == "success") alert(response.msg)
            }
        });
        // console.log(src, title, price);
    });
})