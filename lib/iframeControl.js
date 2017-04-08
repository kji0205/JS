Function.prototype.bind = function (scope) {
    var _function = this;

    return function () {
        return _function.apply(scope, arguments);
    }
}
var parentInIframeCtl = function (_opt) {
    this.opt = {
        fixMenuClass: "",
        resizeEventClass: "",
        scrollEventClass: ""
    };
    $.extend(this.opt, _opt);

    this.isFrame = (window !== parent) ? true : false;
    this.$selfBodyNode = $("body");
    this.$parent = $(parent.window);
    this.parWidth = this.$parent.outerWidth();
    this.parFrameNode = window.frameElement;
    this.frameOffsetTop = $(this.parFrameNode).offset().top;
    this.parentWindowHeight = this.$parent.height();
    this.parentScrollTop;


    this.init();
};
parentInIframeCtl.prototype.init = function () {
    if (this.isFrame) {
        this._loadEventBind();
        this._fixMenuEventBind();
        this._resizeEventBind();
        this._scrollEventBind();
    };
};
parentInIframeCtl.prototype._loadEventBind = function () {
    // iframe-height process
    $(window).load(function () {
        setTimeout(function () {
            this.$selfBodyNode.find(".frame-loading").fadeOut(2500);
            this.$selfBodyNode.find(".local_wrap").animate({ opacity: 1 }, 2000);

            this.refresh();
        } .bind(this), 500);
    } .bind(this));
};
parentInIframeCtl.prototype._fixMenuEventBind = function () {
    // fix-menu process
    var fixObj = this.$selfBodyNode.find("." + this.opt.fixMenuClass);

    $(parent).unbind("scroll.iframe").bind("scroll.iframe", function () {
        this.parentScrollTop = $(parent).scrollTop();

        $(fixObj).trigger("customEvent.frameScroll");
    } .bind(this));


    fixObj.each(function (i, v) {
        return (function () {
            var 
                    $that = $(fixObj[i])
                    , thatHeight = $that.height()
                    , fixObjTop = $that.offset().top
                    , isMiddle = $that.hasClass("middle") ? true : false;

            $that.css("position", "fixed");

            if (isMiddle) {
                var 
                        _marginTop = (this.parentWindowHeight / 2) - (thatHeight / 2) - this.frameOffsetTop;

                $that.css({ "margin-top": _marginTop, "top": 0 });
            }

            return (function () {

                $that.unbind("customEvent.frameScroll").bind("customEvent.frameScroll", function () {
                    var 
                            val = this.parentScrollTop - (fixObjTop + this.frameOffsetTop);

                    if (isMiddle) {
                        if (this.parentScrollTop + _marginTop < 0) {
                            $that.stop().css({ "top": -(_marginTop) });
                        } else {
                            $that.stop().animate({ "top": this.parentScrollTop }, 500);
                        }
                    } else {
                        if ($that.is(':visible')) {
                            if (val > 0)
                                $that.stop().animate({ "top": fixObjTop + val }, 1000);
                            else
                                $that.stop().animate({ "top": fixObjTop }, 1000);
                        }
                    }
                } .bind(this));
            } .bind(this))();
        } .bind(this))();
    } .bind(this));
};
parentInIframeCtl.prototype._resizeEventBind = function () {
    $("." + this.opt.resizeEventClass).unbind("click.frameCtl").bind("click.frameCtl", function (e) {
        this.refresh();
    } .bind(this))
};
parentInIframeCtl.prototype._scrollEventBind = function () {
    location.replace(location.href + "#none");
    this.$selfBodyNode.find("." + this.opt.scrollEventClass).unbind("click.frameCtl").bind("click.frameCtl", function (e) {
        var 
                pos = $(e.currentTarget.hash).offset().top + this.frameOffsetTop;

        e.preventDefault();
        e.stopPropagation();
        location.replace(location.href + e.currentTarget.hash);
        parent.$("body, html").animate({ scrollTop: pos }, 1000);
    } .bind(this))
};
parentInIframeCtl.prototype.refresh = function () {
    var 
            _t = this.$parent.scrollTop();

    setTimeout(function () {
        $(this.parFrameNode).css("height", 0);
        $(this.parFrameNode).height(this.$selfBodyNode.prop("scrollHeight"));
        parent.window.scroll(parent.window, _t);
    } .bind(this), 0);
};

