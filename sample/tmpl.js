(function () {

    // 변경부분
    var moduleNm = "tmpl"; // 모듈명선언부(유니크한 아이디값)

    define([], function () {
        // var _scriptNode = document.createElement("script");
        // _scriptNode.setAttribute("type", "text/x-dot-template");
        // _scriptNode.setAttribute("data-template-dummy", moduleNm);
        // _scriptNode.setAttribute("id", moduleNm);
        // 변경부분
        var _scriptText = '' +
        '<section class="section container-fluid" data-template="' + moduleNm + '">\n' +
            '<div class="slide--template-banner">\n' +
                '{{~ it.resData.aData.BannerList :p:i }}' +
                //'{{? this.seqLimit(i, it.resData.aData.BannerList.length) }}' +
                '<div class="thumbnail-vertical thumbnail-group bg-clean">\n' +
                    '<a href="{{=p.Redi_URL}}" class="session-event">\n' +
                        '<div class="thumbnail clear-margin">\n' +
                            '<img _src="{{=p.ImageUrl1}}" class="img-responsive lazy-img">\n' +
                        '</div>\n' +
                        '<div class="caption padding-default text-center">\n' +
                            '<div><strong class="text-large">{{=p.Title}}</strong></div>\n' +
                            '<span class="text-muted text-small">{{=p.TitleSub}}</span>\n' +
                        '</div>\n' +
                    '</a>\n' +
                    '<hr class="clear-margin">\n' +
                '</div>\n' +
                //'{{? }}'
                '{{~ }}'
            '</div>\n' +
        '</section>\n';
        var _scriptNodeText = document.createTextNode(_scriptText);
        // _scriptNode.appendChild(_scriptNodeText);
        // document.body.appendChild(_scriptNode);
        document.body.appendChild(_scriptNodeText);

        //return _scriptNode;
    })

})();
