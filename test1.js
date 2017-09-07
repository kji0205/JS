;(function () {
    var
        $productInfo = $(".detail_info"),
        $productNm = $("<div class='del-productnm'>" + $productInfo.find(".line2").text() + "</div>"),
        fnUpDown = "",
        btn = "",
        li = "",
        $formUpDown = $("<div class='top-down-area'><a href='#none' class='top'><img src='http://cdn.halfclub.com/Images_Web/2016/personalization/icon_top_scroll.gif' alt='상단이동'></a><a href='#none' class='down'><img src='http://cdn.halfclub.com/Images_Web/2016/personalization/icon_down_scroll.gif' alt='하단이동'></a></div>");


    $(window).unbind("scroll");
    $("#content").addClass("del-product").prepend($formUpDown);

    /*
        Top,Down 이동
    */
    fnUpDown = function () {
        var
            $el = $(".top-down-area"),
            scope = "topdown",
            scrollT = window.scrollY || window.pageYOffset || document.documentElement.scrollTop,
            prodTop = $(".del-product").offset().top + 35,
            top = window.innerHeight - prodTop;


        $el.css("top", top + scrollT + "px");

        $(window).unbind("scroll." + scope).bind("scroll.topdown", function () {
            var
                _scrollT = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

            $el.css("top", top + _scrollT);
        });

        $el.find("a").unbind("click.topdown").bind("click.topdown", function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(e.currentTarget).hasClass("top")) {
                window.scroll(window, 0);
            } else {
                window.scroll(window, $("#footer").offset().top);
            }
        });
    };
    fnUpDown();

    li = "<div class='del-product-list' > \
        <ul class='row'> \
        <li class='sold-out normal' > \
            <a href='javascript:;'  > \
                <img src='./img/product_tmp3.jpg' class='img' alt='' style='width:270px;height:270px' /> \
            </a> \
            <div class='info deal'> \
                <div class='label' > \
                    <span class='btn size-s color-r'>선택 2</span> \
                    <span class='btn size-s color-r-reverse'>즉시할인</span> \
                    <span class='btn size-s color-r-reverse'>중복쿠폰</span> \
                </div> \
                <a href='javascript:;' > \
                    <span class='title'>[아놀드파마] 스키즈 남녀 커플 래쉬가드스키즈 남녀 커플 래쉬가드스키즈 남녀 커플 래쉬가드스키즈 남녀 커플 래쉬가드스키즈 남녀 커플 래쉬가드</span> \
                </a> \
                <div class='grade level2'> \
                </div> \
                <div class='price'> \
                    <span class='rprice underline'>29,9000<span class='unit'>원</span></span> \
                    16,800<span class='unit'>원</span> \
                    <span class='rate'><span class='dt'>혜택가</span> <span class='dd'>60<i>%</i></span></span> \
                </div> \
                <div class='product-code'>abcd1234567890</div> \
                <div class='wish'> \
                    <img src='http://cdn.halfclub.com/Images_Web/halfclub_imgs/deal/icon_wish.gif' alt='' /><span>130</span> \
                </div> \
                <div class='talk'> \
                    <img src='http://cdn.halfclub.com/Images_Web/halfclub_imgs/deal/icon_talk.gif' alt='' /><span>7</span> \
                </div> \
            </div> \
            <div class='layer' > \
                <div> \
                    <a href='javascript:;'><img src='http://cdn.halfclub.com/Images_Web/halfclub_imgs/deal/del_view.png' alt='뷰' class='link' /></a> \
                    <a href='javascript:;'><img src='http://cdn.halfclub.com/Images_Web/halfclub_imgs/deal/del_wish.png' alt='위시' class='link' /></a> \
                </div> \
            </div> \
        </li> \
        </ul> \
        </div>";
    //$(".detail_tab_conts:eq(0)").empty().append(li);

    /* 상세설명 bg color */
    $("#wrap").css("background-color", "#e1e1e1");
    $("#content").css("background-color", "#fff");

    /* 카테고리 뜨는 상품 */
    $recobellView = $("#togather_prd");
    $recobellLi = $recobellView.find("li").clone();
    $recobellLi.find(".btns").remove();
    $productListEvent = $("<div class='del-category-product'></div>");
    $productListTit = $("<p><span>카테고리</span> 뜨는 상품</p>");
    $productListUl = $("<ul>");
    $productListUl.append($recobellLi);
    $productListEvent.append($productListTit);
    $productListEvent.append($productListUl);
    $(".detail_btm").prepend($productListEvent);

    /* 배너 추가 */
    //$(".detail_btm").prepend("<div class='banner'></div>");

    /* 탭형태 type02 ==> type03 */
    (function () {
        var
            $el = $(".detail_btm"),
            pos = 0,
            heightTop;

        $el.find(".anchor").remove();
        $el.find(".info_tab").each(function (i, v) {

            heightTop = $("#header").height();

            (i == 1) && $(v).remove();

            $(v).find(".detail_tab ul").addClass("tabMenu type03").end()
                .find(".detail_tab li").eq(pos).addClass("active").end()
                .eq(1).remove();

            pos++;

            $(v).attr("id", "priceDetailContent0" + pos);
            $(v).find(".detail_tab li a").unbind("click").bind("click", function (e) {
                e.preventDefault();
                window.scroll(window, $($(e.currentTarget).attr("href")).offset().top - heightTop - 5);
            });
        });
    })();

    /* 레이어 팝업(자세히보기) */
    (function () {
        var
            $layerDetail = $(".buy_opt.fixed"),
            clientWidth = window.innerWidth,
            clientHeight = window.innerHeight,

            layerWidth = 1098,
            layerHeight = 652,

            scrollOffsetTop = $(".info_tab").eq(0).offset().top,

            $closeBtn = $("<a href='#none' class='close' ><img src='http://cdn.halfclub.com/Images_Web/halfclub_imgs/deal/icon_close.gif' alt='닫기' /></a>"),
            $layerInfo = $("<div class='info deal'></div>"),
            $layerBg = $(".fullscreen_cover"),

            disableScroll = function () {
                $("body").css("overflow", "hidden");
            },
            enableScroll = function () {
                $("body").css("overflow", "auto");
            };

        $layerDetail.css("display", "none");

        /* 레이어 초기 설정*/
        $layerDetail.wrapInner("<div class='opt'></div>");              // 옵션 영역 wrap 생성
        $layerDetail.append($closeBtn);                                 // 닫기버튼 생성
        $layerDetail.prepend($layerInfo);                               // 딜상품 정보 받아오는 영역 생성
        $layerDetail.find(".buy_opt_in .box > strong").text("옵션선택");
        $layerDetail.find(".buy_opt_in .box > strong").append($(".i-tem.optQuantity a").text("사이즈").addClass("btn size-ss color-g"));  // 수정
        $layerDetail.prepend("<div class='header'>자세히 보기</div>");   // 레이어 팝업 타이틀 영역 생성
        $layerDetail.find(".top_go").remove().end()
                    .find(".sprite_detail.close").remove().end()
                    .find("#btnOptToggle").remove().end()
                    .find("#divOptBoxLayer").css("display", "none").end()
                    .find(".sprite_detail.close").remove();


        /* 이벤트 바인딩 */
        $closeBtn.unbind("click.layerdetail").bind("click.layerdetail", function (e) {
            $layerDetail.css("display", "none");
            $layerBg.css("display", "none");
            enableScroll();
        });


        $(".del-product-list ul").unbind("click.layerdetail").bind("click.layerdetail", function (e) {
            var
                $btnPrev = $("<img src='http://cdn.halfclub.com/Images_Web/halfclub_imgs/deal/icon_prev.gif' alt='' class='btn prev' />"),
                $btnNext = $("<img src='http://cdn.halfclub.com/Images_Web/halfclub_imgs/deal/icon_next.gif' alt='' class='btn next' />");

            /* 레이어 상세정보 이미지 사용 변수정의*/
            var prstcd = $(e.target).closest("li").attr("data-prstcd");         //상품코드
            var colorcd = $(e.target).closest("li").attr("data-colorcd");       //컬러코드  
            var prdnm = $(e.target).closest("li").attr("data-prdnm");           //상품명
            var $delList = $(".del-product-list li");
            var index = parseInt($(e.target).closest("li").attr("data-index")); //상품 인덱스
            var select = index + 1;
            var listcnt = parseInt($(e.currentTarget).find("li").length) - 1;
            var couponDownLoad;
            prdnm = "[선택" + select + "] " + prdnm.substring(0, 14) + "...";

            var dbcpseq = $(e.target).closest("li").attr("data-dbcpseq");       // 중복쿠폰 쿠폰번호
            
            if (window.scrollY < scrollOffsetTop) {
                $("body").scrollTop(scrollOffsetTop);
            }

            console.log(prstcd);
            console.log(colorcd);

            

            if (e.target.className == "link") { // 처리
                var
                    _top = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

                $layerBg.css("display", "block");

                $layerInfo.empty().append($(e.target).closest("li").find(".info >").filter(":not(.wish,.talk)").clone());
                //$layerInfo.append("<div class='benefit'></div>");             // 배송정보 및 카드혜택 정보 영역 생성  // 수정
                //$layerInfo.find(".benefit").append($(".bp-point").clone());  // 수정
                //$layerInfo.find(".benefit").append($(".bp-delivery").clone());  // 수정

                //$layerInfo.append("<div class='info-detail' style='height:auto'></div>");
                $layerInfo.append($btnPrev);
                $layerInfo.append($btnNext);

                $layerDetail.css({ "display": "block", "opacity": 1 });  // 수정
                $layerDetail.css({ "top": (clientHeight / 2) - (layerHeight / 2), "left": (clientWidth / 2) - (layerWidth / 2) });

                /* 스크롤 방지 */
                disableScroll();

                // 상세정보 이미지 불러오기
                $.ajax({
                    type: "POST",
                    url: '/Detail/PrdInfoLayer',
                    dataType: "html",
                    data: ({
                        PrstCd: prstcd,
                        ColorCd: colorcd
                    }),
                    beforeSend: function (jqXHR, opts) {
                        //전송중일때
                        //if (IsData) {
                        //    jqXHR.abort();
                        //    alert("처리중입니다.");
                        //}
                        //else { //전송중이 아닐때
                        //    IsData = true;
                        //}
                    },
                    success: function (results) {
                        $layerInfo.append(results);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        alert("서버와 통신중 에러가 발생했습니다. " + errorThrown);
                    }
                });

                // 상품명 적용
                $("#customSelector1 > div.customSelectorSelectedTxt").text(prdnm);

                $layerInfo.append($btnPrev);
                $layerInfo.append($btnNext);

                $layerDetail.css("display", "block");
                $layerDetail.css({ "top": (clientHeight / 2) - (layerHeight / 2), "left": (clientWidth / 2) - (layerWidth / 2) });

                /* 스크롤 방지 */
                disableScroll();

                /* 이전버튼 이벤트 */
                $btnPrev.unbind("click.layerdetail").bind("click.layerdetail", function (e) {
                    if (index == 0) return;
                    console.log(e.currentTarget.className);
                    $("#p_ProdOptional_float1 .info.deal").scrollTop(0);

                    var $delListClone;

                    $("#DetailContent").remove();
                    $(".priceInfo").remove();
                    $(".coupon-down").remove();
                    prstcd = $(".del-product-list > ul > li").eq(index - 1).attr("data-prstcd");          //상품코드
                    colorcd = $(".del-product-list > ul > li").eq(index - 1).attr("data-colorcd");        //컬러코드  
                    prdnm = $(".del-product-list > ul > li").eq(index - 1).attr("data-prdnm");            //상품명

                    prdnm = "[선택" + index + "] " + prdnm.substring(0, 14) + "...";

                    dbcpseq = $(".del-product-list > ul > li").eq(index - 1).attr("data-dbcpseq");
                    $delListClone = $delList.eq(index - 1).find(".info.deal").clone();
                    $layerDetail.find(".info.deal").find(".label, > a, .price, .product-code").remove().end()
                                                                   .prepend(couponDownLoad)
                                                                   .prepend($delListClone.find(".product-code"))
                                                                   .prepend($delListClone.find(".price"))
                                                                   .prepend($delListClone.find("> a"))
                                                                   .prepend($delListClone.find(".label"));

                    $.ajax({
                        type: "POST",
                        url: '/Detail/PrdInfoLayer',
                        dataType: "html",
                        data: ({
                            PrstCd: prstcd,
                            ColorCd: colorcd
                        }),
                        beforeSend: function (jqXHR, opts) {
                            //전송중일때
                            //if (IsData) {
                            //    jqXHR.abort();
                            //    alert("처리중입니다.");
                            //}
                            //else { //전송중이 아닐때
                            //    IsData = true;
                            //}
                        },
                        success: function (results) {
                            $layerInfo.append(results);
                            if (index != 0) {
                                index = index - 1;
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert("서버와 통신중 에러가 발생했습니다. " + errorThrown);
                        }
                    });
                    $("#customSelector1 > div.customSelectorSelectedTxt").text(prdnm);
                });
                /* 다음버튼 이벤트 */
                $btnNext.unbind("click.layerdetail").bind("click.layerdetail", function (e) {
                    if (listcnt <= index) return;
                    console.log(e.currentTarget.className);

                    $("#p_ProdOptional_float1 .info.deal").scrollTop(0);
                    var $delListClone;

                    $("#DetailContent").remove();
                    $(".priceInfo").remove();
                    $(".coupon-down").remove();

                    prstcd = $(".del-product-list > ul > li").eq(index + 1).attr("data-prstcd");                  //상품코드
                    colorcd = $(".del-product-list > ul > li").eq(index + 1).attr("data-colorcd");                //컬러코드  
                    prdnm = $(".del-product-list > ul > li").eq(index + 1).attr("data-prdnm");                    //상품명

                    select = parseInt(index) + 2;

                    prdnm = "[선택" + select + "] " + prdnm.substring(0, 14) + "...";

                    dbcpseq = $(".del-product-list > ul > li").eq(index + 1).attr("data-dbcpseq");                // 중복쿠폰 쿠폰번호
                    //dbcpseq = 2062429
                    $delListClone = $delList.eq(index + 1).find(".info.deal").clone();

                    $layerDetail.find(".info.deal").find(".label, > a, .price, .product-code").remove().end()
                                                                   .prepend(couponDownLoad)
                                                                   .prepend($delListClone.find(".product-code"))
                                                                   .prepend($delListClone.find(".price"))
                                                                   .prepend($delListClone.find("> a"))
                                                                   .prepend($delListClone.find(".label"));

                    $.ajax({
                        type: "POST",
                        url: '/Detail/PrdInfoLayer',
                        dataType: "html",
                        data: ({
                            PrstCd: prstcd,
                            ColorCd: colorcd
                        }),
                        beforeSend: function (jqXHR, opts) {
                            //전송중일때
                            //if (IsData) {
                            //    jqXHR.abort();
                            //    alert("처리중입니다.");
                            //}
                            //else { //전송중이 아닐때
                            //    IsData = true;
                            //}
                        },
                        success: function (results) {
                            $layerInfo.append(results);
                            if (listcnt > index) {
                                index = index + 1;
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert("서버와 통신중 에러가 발생했습니다. " + errorThrown);
                        }
                    });
                    $("#customSelector1 > div.customSelectorSelectedTxt").text(prdnm);

                });
                /* bg 이벤트 */
                $layerBg.unbind("click.layerdetail").bind("click.layerdetail", function () {
                    $closeBtn.trigger("click");
                });
                /* 레이어팝업(자세히보기) 안의 상세정보보기 스크롤 이벤트 */
                $layerDetail.find(".info.deal").unbind("scroll.layerdetail").bind("scroll.layerdetail", function (e) {
                    var
                        top = e.currentTarget.scrollTop;

                    $btnPrev.css("bottom", 200 - top);
                    $btnNext.css("bottom", 200 - top);
                });
            }

            // resize
            $(window).unbind("resize.layerdetail").bind("resize.layerdetail", function (e) {
                clientWidth = window.innerWidth;
                clientHeight = window.innerHeight;
                if ($layerDetail.filter(":visible")) {
                    $layerDetail.css({ "top": (clientHeight / 2) - (layerHeight / 2), "left": (clientWidth / 2) - (layerWidth / 2) });
                }
            });

            
        });

    })();
})();

// 딜 상품일 경우 - 상품 선택시 하위 옵션 가져오기
function dealOptionAjax(idx, type) {

    if (type == "" || typeof (type) == "undefined") {
        type = "t";
    }

    // 상세 상단
    var optcountSelector = "optcountSelector";
    var hdSelTitle = "hdSelTitle";
    var lblOptcountSelector = "lblOptcountSelector";

    // 상세 레이어
    if (type == "l") {
        optcountSelector = "optcountSelectorLayer";
        hdSelTitle = "hdSelTitleLayer";
        lblOptcountSelector = "lblOptcountSelectorLayer";
    }

    var iOptID = $("#" + optcountSelector + idx).val();
    var nextIdx = String(Number(idx) + 1);
    var selTitle = $("#" + hdSelTitle + nextIdx).val();

    //alert(iOptID + " : " + idx + " : " + nextIdx + " : " + selTitle);
    fnOrderSelectInit();

    //Ajax 호출전에 옵션 초기화
    $("#" + optcountSelector + nextIdx).empty();
    $("#" + optcountSelector + nextIdx).append("<option value=\"\">" + selTitle + "</option>");
    $("#" + lblOptcountSelector + nextIdx).html(selTitle);

    var selectedOption = $("#" + optcountSelector + idx).val();
    var selectedOptionSplit = selectedOption.split('!~!');
    var sPrstCd = '';
    var sColorCd = '';
    if (selectedOptionSplit.length == 2) {
        sPrstCd = selectedOptionSplit[0];
        sColorCd = selectedOptionSplit[1];
    } else {
        return;
    }
    
    jQuery.ajax({
        type: "GET",
        url: "/Detail/DealPrdOption?PrstCd=" + sPrstCd + "&ColorCd=" + sColorCd + "&IOptID=" + iOptID + "&Idx=" + idx,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data != null && data.length > 0) {
                $.each(data, function (index, item) {
                    if (item.OptCd == 0) {
                        $("#" + optcountSelector + nextIdx).append("<option value=\"" + item.OptID + "\">" + item.Name + "</option>");
                    } else {
                        if (item.OptNm != null && item.OptNm != "") {
                            $("#" + optcountSelector + nextIdx).append("<option value=\"" + item.OptionValue + "\">" + item.Add_OptionNm + "</option>");
                        }
                    }
                });

                // 이벤트 초기화
                $("#" + optcountSelector + nextIdx).unbind("change");
                if (data[0].OptCd == 0) {
                    $("#" + optcountSelector + nextIdx).change(function () { dealOptionAjax(nextIdx); });
                } else {
                    $("#" + optcountSelector + nextIdx).change(function () { dealPridSizeChange(nextIdx); });
                }
            } else {
                $("#" + optcountSelector + nextIdx).append("<option value=\"\">품절되었습니다.</option>");
            }

            //셀렉트박스 UI
            var optionSelect = $(".select_wrap select");
            optionSelect.change(function () {
                var optionSelectName = $(this).children("option:selected").text();
                $(this).siblings("label").html(optionSelectName);
            });
        },
        error: function (request, status, error) {
            //오류
        }
    });
}

// 딜상품 - 옵션 선택
function dealPridSizeChange(idx, type) {

    if (window.event) {
        window.event.stopImmediatePropagation();
    }
    if (type == "" || typeof (type) == "undefined") {
        type = "t";
    }

    // 상세 상단
    var option = $("#optcountSelector" + idx).val();

    // 상세 레이어
    if (type == "l") {
        option = $("#optcountSelectorLayer" + idx).val();
    }

    optionsplit = option.split("!~!");

    //잘못된 옵션필터
    if (optionsplit.length != 8) return;

    // 선택한 옵션 추가
    var optionAmount = parseInt(optionsplit[4]); //옵션가
    var tempprice = parseInt(optionsplit[5]); //종택일 옵션가 적용가
    var products = {
        name: optionsplit[3],
        price: tempprice,
        optsize: optionsplit[0],
        optcd: optionsplit[1],
        invQty: optionsplit[2],
        OptAmount: optionAmount,
        optionCd: optionsplit[1],
        prstcd: optionsplit[6],
        colorcd: optionsplit[7]
    };

    //중복선택 필터
    if (fn_Duplicate(products)) {
        alert('이미 선택하신 옵션/사이즈 입니다');
        return;
    }

    //주문 Dom jQuery
    $orderList = $("#productTemplate").tmpl(products);
    //주문 동작 PlugIn 기능추가 및, 콜백함수 위임
    $orderList.DetailOrder({ callback: fn_PriceCalc, dealYn: true });
    $("#ulOptions").append($orderList);

    ////하단 주문 레이어 Dom jQuery
    //$orderListLayer = $("#productTemplate").tmpl(products);
    ////주문 동작 PlugIn 기능추가 및, 콜백함수 위임
    //$orderListLayer.DetailOrder({ callback: fn_PriceCalc });
    //$("#ulOptionsLayer").append($orderListLayer);

    // 가격계산
    fn_PriceCalc();
}

// 딜 상품 - 주문선택 초기화
function fnOrderSelectInit() {
    var price = 0;
    jQuery("#TotalPrice").text("0");
    $("#ulOptions").empty();
    $("#divOptBox").hide();
    $("#divOptBoxLayer").hide();

    jQuery("#TotalPrice").text(fn_AddThousandSeparatorCommas(price));
}