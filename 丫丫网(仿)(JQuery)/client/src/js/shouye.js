$(() => {
    class TowerOne {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        init() {
            this.renderUI();
            // this.clickHandler();
        }
        renderUI() {

            let html = this.data.map(function (ele) {
                let tpl = ele.msrcarr.map(function (e) {
                    return `
                    <a href="./client/src/html/details.html?title=${e.title}&price=${e.price}&src=${e.src}&msrc=${e.src}" class="swiper-slide swiper-slide-active" data-v-27f2b81a="" style="width: 111px;">
                    <img src=${e.src} class="lazy-img" style="" data-v-7c26cbf0="" data-v-27f2b81a="" loaded="true"> 
                    <div class="ellipsis" data-v-27f2b81a="">${e.title}</div> 
                    <div class="ellipsis red" data-v-27f2b81a="">${e.price}</div></a>`
                }).join("");
                return `
            <div style="width:393.3333333333333px;" data-v-27f2b81a="" data-v-74e86843="" class="">
            <div class="floorStyle" data-v-27f2b81a="">
            <a href="https://www.yaya.cn/product/85293.html?from=sjmc" class="title flex flex-align-center flex-justify-between" data-v-27f2b81a="">
            <div class="flex flex-align-end margin-right" data-v-27f2b81a="">
            <b class="font-16" data-v-27f2b81a="">${ele.title1}</b> 
            <span class="grey-9 font-14" data-v-27f2b81a="">${ele.title2}</span></div> 
            
            <svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false" class="grey-9 fa-icon" data-v-27f2b81a="">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9l22.5-22.8c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6 0.1 34z"></path></svg></a> 
            
            <a href="https://www.yaya.cn/product/85293.html?from=sjmc" class="ad-img overflow-hide" data-v-27f2b81a="">
            <img src=${ele.bsrc} class="lazy-img" style="" data-v-7c26cbf0="" data-v-27f2b81a="" loaded="true"></a>
             
            <div id="swiper" class="product-list" data-v-27f2b81a="">
            <div instancename="1209024085525700609" data-v-27f2b81a="" class="swiper-container swiper-container-initialized swiper-container-horizontal">
            <div class="swiper-wrapper flex flex-justify-between" data-v-27f2b81a="" style="transform: translate3d(0px, 0px, 0px);">${tpl}
            </div>
            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div> 

            <div class="padding-top flex flex-center swiper-pagination-1209024085525700609 swiper-pagination-clickable swiper-pagination-bullets" data-v-27f2b81a=""><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span></div> <div class="swiper-button-prev no-bg-image flex flex-center swiper-button-prev-1209024085525700609 swiper-button-disabled" data-v-27f2b81a="" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="true"><svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false" class="font-12 fa-icon" data-v-27f2b81a=""><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-96.3 96.5 96.4 96.4c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.7c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-0.1-34z"></path></svg></div> <div class="swiper-button-next no-bg-image flex flex-center swiper-button-next-1209024085525700609" data-v-27f2b81a="" tabindex="0" role="button" aria-label="Next slide" aria-disabled="false"><svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false" class="font-12 fa-icon" data-v-27f2b81a=""><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9l22.5-22.8c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6 0.1 34z"></path></svg></div></div></div></div>`
            }).join("");

            this.root = $(html);
            $("#lou1").append(this.root);
        }
        clickHandler() {

        }
    }

    class Towertwo {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        init() {
            this.renderUI();
        }
        renderUI() {
            let tpl = this.data.map(function (ele) {
                return `
                <a href="./client/src/html/details.html?title=${ele.title}&price=${ele.price}&src=${ele.src}&msrc=${ele.src}">
            <img src=${ele.src} class="lazy-img" style="" data-v-7c26cbf0="" data-v-48ec0293="" loaded="true"> 
            <div title="Apple iPhone 11 全网通" class="ellipsis" style="padding: 0 10px" data-v-48ec0293="">${ele.title}</div> 
            <div class="red" data-v-48ec0293="">${ele.price}</div></a>`
            }).join("");

            let html = `
            <div class="flex white-bg" style="padding:20px;width:100%;box-sizing:border-box;" data-v-48ec0293="" data-v-74e86843="">
            <div class="left-ad flex-child-noshrink" data-v-48ec0293="">
            <a href="https://www.yaya.cn/ranks.html?from=mtjx" class="ad-img" data-v-48ec0293="">
            <img src="https://img2.yaya.cn/newstatic/1381/0150aab6318fb6af.jpg.webp" class="lazy-img" style="" data-v-7c26cbf0="" data-v-48ec0293="" loaded="true"></a></div> 
            <div class="product-list flex flex-child-grow" data-v-48ec0293="">
            ${tpl}
            </div>
            </div>
            `
            this.root = $(html)
            $("#lou2").append(this.root);
        }

    }

    class Towerthree {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        init() {
            this.renderUI();
        }
        renderUI() {
            let html = this.data.map(function (ele) {
                let tpl = ele.msrcarr.map(function (e) {
                    return `<a href="./client/src/html/details.html?title=${e.title}&price=${e.price}&src=${e.src}&msrc=${e.src}" class="swiper-slide" data-v-27f2b81a="" style="width: 178.333px;">
                    <img src=${e.src} class="lazy-img" style="" data-v-7c26cbf0="" data-v-27f2b81a="" loaded="true"> 
                    <div class="ellipsis" data-v-27f2b81a="">${e.title}</div> 
                    <div class="ellipsis red" data-v-27f2b81a="">${e.price}</div></a>`
                }).join("");
                return `
                <div style="width:595px;" data-v-27f2b81a="" data-v-74e86843="" class="">
                <div class="floorStyle" data-v-27f2b81a="">
                <a href="https://m.yaya.cn/product/82208.html" class="title flex flex-align-center flex-justify-between" data-v-27f2b81a="">
                <div class="flex flex-align-end margin-right" data-v-27f2b81a="">
                <b class="font-16" data-v-27f2b81a="">${ele.title1}</b> 
                <span class="grey-9 font-14" data-v-27f2b81a="">${ele.title2}</span></div> 
                <svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false" class="grey-9 fa-icon" data-v-27f2b81a="">
                <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9l22.5-22.8c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6 0.1 34z"></path></svg></a> 
                
                <a href="https://m.yaya.cn/product/82208.html" class="ad-img overflow-hide" data-v-27f2b81a="">
                <img src=${ele.bsrc} class="lazy-img" style="" data-v-7c26cbf0="" data-v-27f2b81a="" loaded="true"></a> 
                
                <div id="swiper" class="product-list" data-v-27f2b81a="">
                <div instancename="1209033735151284226" data-v-27f2b81a="" class="swiper-container swiper-container-initialized swiper-container-horizontal">
                <div class="swiper-wrapper flex flex-justify-between" data-v-27f2b81a="" style="transform: translate3d(-713.333px, 0px, 0px); transition-duration: 0ms;">
              ${tpl}
                </div>
                <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>

                <div class="padding-top flex flex-center swiper-pagination-1209033735151284226 swiper-pagination-clickable swiper-pagination-bullets" data-v-27f2b81a="">
                <span class="swiper-pagination-bullet " tabindex="0" role="button" aria-label="Go to slide 1"></span>
                <span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span>
                <span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 3"></span></div> 
                <div class="swiper-button-prev no-bg-image flex flex-center swiper-button-prev-1209033735151284226" data-v-27f2b81a="" tabindex="0" role="button" aria-label="Previous slide" aria-disabled="false"><svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false" class="font-12 fa-icon" data-v-27f2b81a=""><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-96.3 96.5 96.4 96.4c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.7c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-0.1-34z"></path></svg></div> <div class="swiper-button-next no-bg-image flex flex-center swiper-button-next-1209033735151284226 swiper-button-disabled" data-v-27f2b81a="" tabindex="0" role="button" aria-label="Next slide" aria-disabled="true"><svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false" class="font-12 fa-icon" data-v-27f2b81a=""><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9l22.5-22.8c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6 0.1 34z"></path></svg></div></div></div></div>`
            }).join("");

            this.root = $(html);
            $("#lou3").append(this.root);
        }
    }

    class Towerfour {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        init() {
            this.renderUI();
        }
        renderUI() {

            let html = this.data.map(function (ele) {
                let tpl = ele.marr.map(function (e) {
                    return `<a href="./client/src/html/details.html?title=${e.title}&price=${e.price}&src=${e.msrc}&msrc=${e.msrc}" class="flex-child-noshrink" data-v-2189703b="">
                    <img src=${e.msrc} class="lazy-img" style="" data-v-7c26cbf0="" data-v-2189703b="" loaded="true"> 
                    <div class="ellipsis margin-top" data-v-2189703b="">${e.title}</div> 
                    <div class="red" data-v-2189703b="">${e.price}</div></a>`
                }).join("");
                return `
                <div class="floor" data-v-74e86843=""> 
                <div class="floor-item flex flex-wrap flex-justify-between" data-v-74e86843="">
                <div class="flex" data-v-2189703b="" data-v-74e86843="">
                <div class="left-ad flex-child-noshrink" data-v-2189703b="">
                <a href="https://www.yaya.cn/product/81727.html?from=sjjx" class="title flex flex-align-center flex-justify-between block" data-v-2189703b="">
                <div class="flex flex-align-end margin-right" data-v-2189703b="">
                <b class="font-16" data-v-2189703b="">${ele.b}</b> 
                <span class="grey-9 font-14" data-v-2189703b="">${ele.span}</span></div></a> 
                
                <a href="https://www.yaya.cn/product/81727.html?from=sjjx" title="大牌不一定贵" class="ad-img" data-v-2189703b="">
                <img src=${ele.bsrc} class="lazy-img" style="" data-v-7c26cbf0="" data-v-2189703b="" loaded="true"></a></div> 
                
                <div class="product-list flex flex-wrap flex-child-grow" data-v-2189703b="">
                ${tpl}
                </div></div></div> </div>`
            }).join("");

            this.root = $(html);
            $("#louceng").append(this.root);
        }


    }

    class Banner {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        init() {
            this.renderUI();
            this.carousel();
        }

        renderUI() {
            let html = this.data.map(function (ele) {
                return `<img src=${ele.src}>`
            }).join("");
            this.root = $(html);
            $("#banner").append(this.root)
        }
        carousel() {
            $("#banner>img").eq(0).css("opacity", "1");
            $("#list>li").eq(0).css("background", "red");
            let index = 0;

            setInterval(function () {
                index++;
                if (index == $("#banner>img").length) {
                    index = 0;
                }
                $("#banner>img").eq(index).css("opacity", "1").siblings().css("opacity", "0")
                $("#list>li").eq(index).css("background", "red").siblings().css("background", "blue")
            }, 3000);

            $("#piece").click(function () {
                index--;
                if (index == -1) {
                    index = $("#banner>img").length - 1;
                }
                $("#banner>img").eq(index).css("opacity", "1").siblings().css("opacity", "0");
                $("#list>li").eq(index).css("background", "red").siblings().css("background", "blue");
                console.log(2222);
            });
            $("#next").click(function () {
                index++;
                if (index == $("#banner>img").length) {
                    index = 0;
                }
                $("#banner>img").eq(index).css("opacity", "1").siblings().css("opacity", "0");
                $("#list>li").eq(index).css("background", "red").siblings().css("background", "blue");
                console.log(2222);

            });
        }
    }

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
        url: "http://127.0.0.1/www.yaya.cn/server/yilou.php",
        dataType: "json",
        success: function (response) {
            let slider = new TowerOne(response);
            slider.init();
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1/www.yaya.cn/server/erlou.php",
        dataType: "json",
        success: function (response) {
            let slider = new Towertwo(response);
            slider.init();
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1/www.yaya.cn/server/sanlou.php",
        dataType: "json",
        success: function (response) {
            let slider = new Towerthree(response);
            slider.init();
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1/www.yaya.cn/server/siwuliulou.php",
        dataType: "json",
        success: function (response) {
            let slider = new Towerfour(response);
            slider.init();
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1/www.yaya.cn/server/banner.php",
        dataType: "json",
        success: function (response) {
            let slider = new Banner(response);
            slider.init();
        }
    });

    $.ajax({
        type: "get",
        url: "http://127.0.0.1/www.yaya.cn/server/nav.php",
        dataType: "json",
        success: function (response) {
            let slider = new NavUI(response);
            slider.renderUI();
        }
    });
})