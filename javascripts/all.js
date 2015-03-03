/*! AmazeUI - v1.0.0 | (c) 2014 AllMobilize, Inc. | @license MIT | 2014-09-05 16:09:09 */ /*! Sea.js 2.2.1 | seajs.org/LICENSE.md */

!function(a,b){function c(a){return function(b){return{}.toString.call(b)=="[object "+a+"]"}}function d(){return A++}function e(a){return a.match(D)[0]}function f(a){for(a=a.replace(E,"/");a.match(F);)a=a.replace(F,"/");return a=a.replace(G,"$1/")}function g(a){var b=a.length-1,c=a.charAt(b);return"#"===c?a.substring(0,b):".js"===a.substring(b-2)||a.indexOf("?")>0||".css"===a.substring(b-3)||"/"===c?a:a+".js"}function h(a){var b=v.alias;return b&&x(b[a])?b[a]:a}function i(a){var b=v.paths,c;return b&&(c=a.match(H))&&x(b[c[1]])&&(a=b[c[1]]+c[2]),a}function j(a){var b=v.vars;return b&&a.indexOf("{")>-1&&(a=a.replace(I,function(a,c){return x(b[c])?b[c]:a})),a}function k(a){var b=v.map,c=a;if(b)for(var d=0,e=b.length;e>d;d++){var f=b[d];if(c=z(f)?f(a)||a:a.replace(f[0],f[1]),c!==a)break}return c}function l(a,b){var c,d=a.charAt(0);if(J.test(a))c=a;else if("."===d)c=f((b?e(b):v.cwd)+a);else if("/"===d){var g=v.cwd.match(K);c=g?g[0]+a.substring(1):a}else c=v.base+a;return 0===c.indexOf("//")&&(c=location.protocol+c),c}function m(a,b){if(!a)return"";a=h(a),a=i(a),a=j(a),a=g(a);var c=l(a,b);return c=k(c)}function n(a){return a.hasAttribute?a.src:a.getAttribute("src",4)}function o(a,b,c){var d=S.test(a),e=L.createElement(d?"link":"script");if(c){var f=z(c)?c(a):c;f&&(e.charset=f)}p(e,b,d,a),d?(e.rel="stylesheet",e.href=a):(e.async=!0,e.src=a),T=e,R?Q.insertBefore(e,R):Q.appendChild(e),T=null}function p(a,c,d,e){function f(){a.onload=a.onerror=a.onreadystatechange=null,d||v.debug||Q.removeChild(a),a=null,c()}var g="onload"in a;return!d||!V&&g?(g?(a.onload=f,a.onerror=function(){C("error",{uri:e,node:a}),f()}):a.onreadystatechange=function(){/loaded|complete/.test(a.readyState)&&f()},b):(setTimeout(function(){q(a,c)},1),b)}function q(a,b){var c=a.sheet,d;if(V)c&&(d=!0);else if(c)try{c.cssRules&&(d=!0)}catch(e){"NS_ERROR_DOM_SECURITY_ERR"===e.name&&(d=!0)}setTimeout(function(){d?b():q(a,b)},20)}function r(){if(T)return T;if(U&&"interactive"===U.readyState)return U;for(var a=Q.getElementsByTagName("script"),b=a.length-1;b>=0;b--){var c=a[b];if("interactive"===c.readyState)return U=c}}function s(a){var b=[];return a.replace(X,"").replace(W,function(a,c,d){d&&b.push(d)}),b}function t(a,b){this.uri=a,this.dependencies=b||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!a.seajs){var u=a.seajs={version:"2.2.1"},v=u.data={},w=c("Object"),x=c("String"),y=Array.isArray||c("Array"),z=c("Function"),A=0,B=v.events={};u.on=function(a,b){var c=B[a]||(B[a]=[]);return c.push(b),u},u.off=function(a,b){if(!a&&!b)return B=v.events={},u;var c=B[a];if(c)if(b)for(var d=c.length-1;d>=0;d--)c[d]===b&&c.splice(d,1);else delete B[a];return u};var C=u.emit=function(a,b){var c=B[a],d;if(c)for(c=c.slice();d=c.shift();)d(b);return u},D=/[^?#]*\//,E=/\/\.\//g,F=/\/[^/]+\/\.\.\//,G=/([^:/])\/\//g,H=/^([^/:]+)(\/.+)$/,I=/{([^{]+)}/g,J=/^\/\/.|:\//,K=/^.*?\/\/.*?\//,L=document,M=e(L.URL),N=L.scripts,O=L.getElementById("seajsnode")||N[N.length-1],P=e(n(O)||M);u.resolve=m;var Q=L.head||L.getElementsByTagName("head")[0]||L.documentElement,R=Q.getElementsByTagName("base")[0],S=/\.css(?:\?|$)/i,T,U,V=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/,"$1")<536;u.request=o;var W=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,X=/\\\\/g,Y=u.cache={},Z,$={},_={},ab={},bb=t.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};t.prototype.resolve=function(){for(var a=this,b=a.dependencies,c=[],d=0,e=b.length;e>d;d++)c[d]=t.resolve(b[d],a.uri);return c},t.prototype.load=function(){var a=this;if(!(a.status>=bb.LOADING)){a.status=bb.LOADING;var c=a.resolve();C("load",c);for(var d=a._remain=c.length,e,f=0;d>f;f++)e=t.get(c[f]),e.status<bb.LOADED?e._waitings[a.uri]=(e._waitings[a.uri]||0)+1:a._remain--;if(0===a._remain)return a.onload(),b;var g={};for(f=0;d>f;f++)e=Y[c[f]],e.status<bb.FETCHING?e.fetch(g):e.status===bb.SAVED&&e.load();for(var h in g)g.hasOwnProperty(h)&&g[h]()}},t.prototype.onload=function(){var a=this;a.status=bb.LOADED,a.callback&&a.callback();var b=a._waitings,c,d;for(c in b)b.hasOwnProperty(c)&&(d=Y[c],d._remain-=b[c],0===d._remain&&d.onload());delete a._waitings,delete a._remain},t.prototype.fetch=function(a){function c(){u.request(g.requestUri,g.onRequest,g.charset)}function d(){delete $[h],_[h]=!0,Z&&(t.save(f,Z),Z=null);var a,b=ab[h];for(delete ab[h];a=b.shift();)a.load()}var e=this,f=e.uri;e.status=bb.FETCHING;var g={uri:f};C("fetch",g);var h=g.requestUri||f;return!h||_[h]?(e.load(),b):$[h]?(ab[h].push(e),b):($[h]=!0,ab[h]=[e],C("request",g={uri:f,requestUri:h,onRequest:d,charset:v.charset}),g.requested||(a?a[g.requestUri]=c:c()),b)},t.prototype.exec=function(){function a(b){return t.get(a.resolve(b)).exec()}var c=this;if(c.status>=bb.EXECUTING)return c.exports;c.status=bb.EXECUTING;var e=c.uri;a.resolve=function(a){return t.resolve(a,e)},a.async=function(b,c){return t.use(b,c,e+"_async_"+d()),a};var f=c.factory,g=z(f)?f(a,c.exports={},c):f;return g===b&&(g=c.exports),delete c.factory,c.exports=g,c.status=bb.EXECUTED,C("exec",c),g},t.resolve=function(a,b){var c={id:a,refUri:b};return C("resolve",c),c.uri||u.resolve(c.id,b)},t.define=function(a,c,d){var e=arguments.length;1===e?(d=a,a=b):2===e&&(d=c,y(a)?(c=a,a=b):c=b),!y(c)&&z(d)&&(c=s(""+d));var f={id:a,uri:t.resolve(a),deps:c,factory:d};if(!f.uri&&L.attachEvent){var g=r();g&&(f.uri=g.src)}C("define",f),f.uri?t.save(f.uri,f):Z=f},t.save=function(a,b){var c=t.get(a);c.status<bb.SAVED&&(c.id=b.id||a,c.dependencies=b.deps||[],c.factory=b.factory,c.status=bb.SAVED)},t.get=function(a,b){return Y[a]||(Y[a]=new t(a,b))},t.use=function(b,c,d){var e=t.get(d,y(b)?b:[b]);e.callback=function(){for(var b=[],d=e.resolve(),f=0,g=d.length;g>f;f++)b[f]=Y[d[f]].exec();c&&c.apply(a,b),delete e.callback},e.load()},t.preload=function(a){var b=v.preload,c=b.length;c?t.use(b,function(){b.splice(0,c),t.preload(a)},v.cwd+"_preload_"+d()):a()},u.use=function(a,b){return t.preload(function(){t.use(a,b,v.cwd+"_use_"+d())}),u},t.define.cmd={},a.define=t.define,u.Module=t,v.fetchedList=_,v.cid=d,u.require=function(a){var b=t.get(t.resolve(a));return b.status<bb.EXECUTING&&(b.onload(),b.exec()),b.exports};var cb=/^(.+?\/)(\?\?)?(seajs\/)+/;v.base=(P.match(cb)||["",P])[1],v.dir=P,v.cwd=M,v.charset="utf-8",v.preload=function(){var a=[],b=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return b+=" "+L.cookie,b.replace(/(seajs-\w+)=1/g,function(b,c){a.push(c)}),a}(),u.config=function(a){for(var b in a){var c=a[b],d=v[b];if(d&&w(d))for(var e in c)d[e]=c[e];else y(d)?c=d.concat(c):"base"===b&&("/"!==c.slice(-1)&&(c+="/"),c=l(c)),v[b]=c}return C("config",a),u}}}(this);

define("core", [ "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    // Zepto animate extend
    require("zepto.extend.fx");
    // Zepto data extend
    require("zepto.extend.data");
    // Zepto selector extend
    require("zepto.extend.selector");
    var $ = window.Zepto, UI = $.AMUI || {}, $win = $(window), doc = window.document, $html = $("html");
    if (UI.fn) {
        return UI;
    }
    UI.fn = function(command, options) {
        var args = arguments, cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), component = cmd[1], method = cmd[2];
        if (!UI[component]) {
            log.error('Amaze UI component [" + component + "] does not exist.');
            return this;
        }
        return this.each(function() {
            var $this = $(this), data = $this.data(component);
            if (!data) $this.data(component, data = UI[component](this, method ? undefined : options));
            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
        });
    };
    UI.support = {};
    UI.support.transition = function() {
        var transitionEnd = function() {
            var element = doc.body || doc.documentElement, transEndEventNames = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            }, name;
            for (name in transEndEventNames) {
                if (element.style[name] !== undefined) return transEndEventNames[name];
            }
        }();
        return transitionEnd && {
            end: transitionEnd
        };
    }();
    UI.support.animation = function() {
        var animationEnd = function() {
            var element = doc.body || doc.documentElement, animEndEventNames = {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd oanimationend",
                animation: "animationend"
            }, name;
            for (name in animEndEventNames) {
                if (element.style[name] !== undefined) return animEndEventNames[name];
            }
        }();
        return animationEnd && {
            end: animationEnd
        };
    }();
    UI.support.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1e3 / 60);
    };
    UI.support.touch = "ontouchstart" in window && navigator.userAgent.toLowerCase().match(/mobile|tablet/) || window.DocumentTouch && document instanceof window.DocumentTouch || window.navigator["msPointerEnabled"] && window.navigator["msMaxTouchPoints"] > 0 || //IE 10
    window.navigator["pointerEnabled"] && window.navigator["maxTouchPoints"] > 0 || //IE >=11
    false;
    // https://developer.mozilla.org/zh-CN/docs/DOM/MutationObserver
    UI.support.mutationobserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null;
    UI.utils = {};
    /**
     * Debounce function
     * @param {function} func  Function to be debounced
     * @param {number} wait Function execution threshold in milliseconds
     * @param {bool} immediate  Whether the function should be called at
     *                          the beginning of the delay instead of the
     *                          end. Default is false.
     * @desc Executes a function when it stops being invoked for n seconds
     * @via  _.debounce() http://underscorejs.org
     */
    UI.utils.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };
    UI.utils.isInView = function(element, options) {
        var $element = $(element);
        var visible = !!($element.width() || $element.height()) && $element.css("display") !== "none";
        if (!visible) {
            return false;
        }
        var window_left = $win.scrollLeft(), window_top = $win.scrollTop(), offset = $element.offset(), left = offset.left, top = offset.top;
        options = $.extend({
            topOffset: 0,
            leftOffset: 0
        }, options);
        return top + $element.height() >= window_top && top - options.topOffset <= window_top + $win.height() && left + $element.width() >= window_left && left - options.leftOffset <= window_left + $win.width();
    };
    UI.utils.parseOptions = UI.utils.options = function(string) {
        if ($.isPlainObject(string)) return string;
        var start = string ? string.indexOf("{") : -1, options = {};
        if (start != -1) {
            try {
                options = new Function("", "var json = " + string.substr(start) + "; return JSON.parse(JSON.stringify(json));")();
            } catch (e) {}
        }
        return options;
    };
    UI.utils.generateGUID = function(namespace) {
        var uid = namespace + "-" || "am-";
        do {
            uid += Math.random().toString(36).substring(2, 7);
        } while (document.getElementById(uid));
        return uid;
    };
    UI.utils.event = {};
    UI.utils.event.click = UI.support.touch ? "tap" : "click";
    $.AMUI = UI;
    $.fn.amui = UI.fn;
    $.AMUI.langdirection = $("html").attr("dir") == "rtl" ? "right" : "left";
    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false, $el = this;
        $(this).one(UI.support.transition.end, function() {
            called = true;
        });
        var callback = function() {
            if (!called) {
                $($el).trigger(UI.support.transition.end);
            }
        };
        setTimeout(callback, duration);
        return this;
    };
    $.fn.redraw = function() {
        $(this).each(function() {
            var redraw = this.offsetHeight;
        });
        return this;
    };
    $.fn.transitionEnd = function(callback) {
        var endEvent = UI.support.transition.end, dom = this;
        function fireCallBack(e) {
            callback.call(this, e);
            endEvent && dom.off(endEvent, fireCallBack);
        }
        if (callback && endEvent) {
            dom.on(endEvent, fireCallBack);
        }
        return this;
    };
    $.fn.removeClassRegEx = function() {
        return this.each(function(regex) {
            var classes = $(this).attr("class");
            if (!classes || !regex) return false;
            var classArray = [];
            classes = classes.split(" ");
            for (var i = 0, len = classes.length; i < len; i++) if (!classes[i].match(regex)) classArray.push(classes[i]);
            $(this).attr("class", classArray.join(" "));
        });
    };
    //
    $.fn.alterClass = function(removals, additions) {
        var self = this;
        if (removals.indexOf("*") === -1) {
            // Use native jQuery methods if there is no wildcard matching
            self.removeClass(removals);
            return !additions ? self : self.addClass(additions);
        }
        var classPattern = new RegExp("\\s" + removals.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g");
        self.each(function(i, it) {
            var cn = " " + it.className + " ";
            while (classPattern.test(cn)) {
                cn = cn.replace(classPattern, " ");
            }
            it.className = $.trim(cn);
        });
        return !additions ? self : self.addClass(additions);
    };
    $.fn.getHeight = function() {
        var $ele = $(this), height = "auto";
        if ($ele.is(":visible")) {
            height = $ele.height();
        } else {
            var tmp = {
                position: $ele.css("position"),
                visibility: $ele.css("visibility"),
                display: $ele.css("display")
            };
            height = $ele.css({
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }).height();
            $ele.css(tmp);
        }
        return height;
    };
    $.fn.getSize = function() {
        var $el = $(this);
        if ($el.css("display") !== "none") {
            return {
                width: $el.width(),
                height: $el.height()
            };
        }
        var old = {
            position: $el.css("position"),
            visibility: $el.css("visibility"),
            display: $el.css("display")
        }, tmpStyle = {
            display: "block",
            position: "absolute",
            visibility: "hidden"
        };
        $el.css(tmpStyle);
        var width = $el.width(), height = $el.height();
        $el.css(old);
        return {
            width: width,
            height: height
        };
    };
    // adding :visible and :hidden to zepto
    // https://github.com/jquery/jquery/blob/73e120116ce13b992d5229b3e10fcc19f9505a15/src/css/hiddenVisibleSelectors.js
    var _is = $.fn.is, _filter = $.fn.filter;
    function visible(elem) {
        elem = $(elem);
        return !!(elem.width() || elem.height()) && elem.css("display") !== "none";
    }
    $.fn.is = function(sel) {
        if (sel === ":visible") {
            return visible(this);
        }
        if (sel === ":hidden") {
            return !visible(this);
        }
        return _is.call(this, sel);
    };
    $.fn.filter = function(sel) {
        if (sel === ":visible") {
            return $([].filter.call(this, visible));
        }
        if (sel === ":hidden") {
            return $([].filter.call(this, function(elem) {
                return !visible(elem);
            }));
        }
        return _filter.call(this, sel);
    };
    // handle multiple browsers for requestAnimationFrame()
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    // https://github.com/gnarf/jquery-requestAnimationFrame
    UI.utils.rAF = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || //window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function(callback) {
            return window.setTimeout(callback, 1e3 / 60);
        };
    }();
    // handle multiple browsers for cancelAnimationFrame()
    UI.utils.cancelAF = function() {
        return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || //window.oCancelAnimationFrame ||
        function(id) {
            window.clearTimeout(id);
        };
    }();
    // Require fastclick.js on touch devices
    if (UI.support.touch) {
        require.async([ "util.fastclick" ], function(FastClick) {
            $(function() {
                FastClick && FastClick.attach(document.body);
                $html.addClass("am-touch");
            });
        });
    }
    $(function() {
        // trigger domready event
        $(document).trigger("domready:amui");
        $html.removeClass("no-js").addClass("js");
        UI.support.animation && $html.addClass("cssanimations");
        // Remove responsive classes in .am-layout
        var $layout = $(".am-layout");
        $layout.find('[class*="md-block-grid"]').alterClass("md-block-grid-*");
        $layout.find('[class*="lg-block-grid"]').alterClass("lg-block-grid");
        // widgets not in .am-layout
        $("[data-am-widget]").each(function() {
            var $widget = $(this);
            // console.log($widget.parents('.am-layout').length)
            if ($widget.parents(".am-layout").length === 0) {
                $widget.addClass("am-no-layout");
            }
        });
    });
    module.exports = UI;
});
define("accordion", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "ui.collapse" ], function(require, exports, module) {
    require("core");
    require("ui.collapse");
    var $ = window.Zepto, UI = $.AMUI, accordionInit = function() {
        var $accordion = $('[data-am-widget="accordion"]'), selector = {
            item: ".am-accordion-item",
            title: ".am-accordion-title",
            content: ".am-accordion-content"
        };
        $accordion.each(function(i, item) {
            var options = UI.utils.parseOptions($(item).attr("data-am-accordion")), $title = $accordion.find(selector.title);
            $title.on("click", function() {
                var $content = $(this).next(selector.content), $parent = $(this).parent(selector.item), data = $content.data("amui.collapse");
                $parent.toggleClass("am-active");
                if (!data) {
                    $content.collapse();
                } else {
                    $content.collapse("toggle");
                }
                !options.multiple && $(item).children(".am-active").not($parent).removeClass("am-active").find(".am-accordion-content.am-in").collapse("close");
            });
        });
    };
    // Init on DOM ready
    $(function() {
        accordionInit();
    });
    exports.init = accordionInit;
});
define("divider", [], function(require, exports, module) {});
define("duoshuo", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto;
    function duoshuoInit() {
        var $dsThread = $(".ds-thread"), dsShortName = $dsThread.parent('[data-am-widget="duoshuo"]').attr("data-ds-short-name"), dsSrc = (document.location.protocol == "https:" ? "https:" : "http:") + "//static.duoshuo.com/embed.js";
        if (!$dsThread.length || !dsShortName) return;
        window.duoshuoQuery = {
            short_name: dsShortName
        };
        // 已经有多说脚本
        if ($('script[src="' + dsSrc + '"]').length) return;
        var $dsJS = $("<script>", {
            async: true,
            type: "text/javascript",
            src: dsSrc,
            charset: "utf-8"
        });
        $("body").append($dsJS);
    }
    $(window).on("load", duoshuoInit);
    exports.init = duoshuoInit;
});
define("figure", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "zepto.pinchzoom" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto;
    // PinchZoom Plugin
    var PinchZoom = require("zepto.pinchzoom");
    /**
     * Is Images zoomable
     * @return {Boolean}
     */
    $.isImgZoomAble = function(imgElement) {
        var t = new Image();
        t.src = imgElement.src;
        var zoomAble = $(imgElement).width() < t.width;
        if (zoomAble) {
            $(imgElement).parent(".am-figure").addClass("am-figure-zoomable");
        }
        return zoomAble;
    };
    $.fn.imgZoomToggle = function() {
        return this.each(function() {
            var zoomAble = $.isImgZoomAble(this), $wrapDom = $('<div class="am-figure-wrap"><div class="pinch-zoom"></div></div>');
            $zoomWrap = $(".am-figure-wrap");
            if ($zoomWrap.length == 0) {
                $("body").append($wrapDom);
                $zoomWrap = $(".am-figure-wrap");
                $pinch = $zoomWrap.find(".pinch-zoom");
                $pinch.each(function() {
                    new PinchZoom($(this), {});
                });
            }
            if (zoomAble) {
                //$zoomWrap.empty().html(this.outerHTML);
                $pinch.empty().html(this.outerHTML);
                $zoomWrap.find("img").width($(window).width());
                $(this).parent(".am-figure").on("click", function() {
                    $zoomWrap.toggleClass("am-active");
                });
                $zoomWrap.on("click", function(e) {
                    e.preventDefault();
                    var target = e.target;
                    // Img is using pinch zoom
                    if (!$(target).is("img")) {
                        $(this).toggleClass("am-active");
                    }
                });
            }
        });
    };
    var figureInit = function() {
        $(".am-figure img").imgZoomToggle();
    };
    $(window).on("load", function() {
        figureInit();
    });
    exports.init = figureInit;
});
define("footer", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "ui.add2home", "util.cookie", "ui.modal", "ui.dimmer" ], function(require, exports, module) {
    require("core");
    // add2home
    require("ui.add2home");
    var cookie = require("util.cookie"), modal = require("ui.modal"), $ = window.Zepto, footerInit = function() {
        // modal mode
        $(".am-footer-ysp").on("click", function() {
            $("#am-footer-mode").modal();
        });
        // switch mode
        // switch to desktop
        $('[data-rel="desktop"]').on("click", function(e) {
            e.preventDefault();
            if (window.AMPlatform) {
                // front end
                AMPlatform.util.goDesktop();
            } else {
                // back end
                cookie.set("allmobilize", "desktop", "", "/");
                window.location = window.location;
            }
        });
    };
    $(window).on("load", function() {
        footerInit();
    });
    exports.init = footerInit;
});
define("gallery", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "zepto.touchgallery", "zepto.extend.touch", "zepto.pinchzoom" ], function(require, exports, module) {
    require("core");
    var touchGallery = require("zepto.touchgallery");
    var $ = window.Zepto, UI = $.AMUI;
    var galleryInit = function() {
        var $gallery = $('[data-am-widget="gallery"]'), $galleryOne = $gallery.filter(".am-gallery-one");
        $gallery.each(function() {
            var options = UI.utils.parseOptions($(this).attr("data-am-gallery"));
            options.lightbox && $(this).find("a").touchTouch();
        });
        $galleryOne.each(function() {
            galleryMore($(this));
        });
    };
    function galleryMore(object) {
        var moreData = $("<li class='am-gallery-more'><a href='javascript:;'>更多 &gt;&gt;</a></li>");
        if (object.children().length > 6) {
            object.children().each(function(index) {
                if (index > 5) {
                    $(this).hide();
                }
            });
            object.find(".am-gallery-more").remove();
            object.append(moreData);
        }
        object.find(".am-gallery-more").on("click", function() {
            object.children().show();
            $(this).hide();
        });
    }
    $(function() {
        galleryInit();
    });
    exports.init = galleryInit;
});
define("gotop", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "ui.smooth-scroll" ], function(require, exports, module) {
    require("core");
    require("ui.smooth-scroll");
    var $ = window.Zepto;
    var UI = $.AMUI;
    var goTopInit = function() {
        $(".am-gotop").find("a").on("click", function(e) {
            e.preventDefault();
            $("body").smoothScroll(0);
        });
    };
    $(function() {
        goTopInit();
    });
    exports.init = goTopInit;
});
define("header", [], function(require, exports, module) {
    var $ = window.Zepto;
});
define("intro", [], function(require, exports, module) {
    var $ = window.Zepto;
});
define("list_news", [], function(require, exports, module) {
    var $ = window.Zepto, listNewsInit = function() {
        $(".am-list-news-one").each(function() {
            amListNewsMore($(this));
        });
    };
    function amListNewsMore(object) {
        var $amList = object.find(".am-list");
        var $listMore = "<a class='am-list-news-more am-btn am-btn-default' href='###'>更多 &gt;&gt;</a>";
        if ($amList.children().length > 6) {
            $amList.children().each(function(index) {
                if (index > 5) {
                    $(this).hide();
                }
            });
            object.find(".am-list-news-more").remove();
            object.append($listMore);
        }
        object.find(".am-list-news-more").on("click", function() {
            $amList.children().show();
            $(this).hide();
        });
    }
    $(function() {
        listNewsInit();
    });
    exports.init = listNewsInit;
});
define("map", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto;
    function addMapApi(callback) {
        var $mapApi0 = $("<script/>", {
            src: "http://api.map.baidu.com/getscript?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002"
        });
        $("body").append($mapApi0);
        $mapApi0.on("load", function() {
            var $mapApi1 = $("<script/>", {
                src: "http://api.map.baidu.com/getscript?type=quick&file=feature&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002"
            });
            $("body").append($mapApi1);
            $mapApi1.on("load", function() {
                var script = document.createElement("script");
                script.textContent = "(" + callback.toString() + ")();";
                $("body")[0].appendChild(script);
            });
        });
    }
    function addBdMap() {
        // 如果使用 $ 选择符，minify 以后会报错: $ is undefined
        // 即使传入 $ 也无效，改为使用原生方法
        // 这个函数作为 callback 会插入到 body 以后才执行，应该是 $ 引用错误导致
        var content = document.querySelector(".am-map"), defaultLng = 116.331398, //经度默认值
        defaultLat = 39.897445, //纬度默认值
        name = content.getAttribute("data-name"), address = content.getAttribute("data-address"), lng = content.getAttribute("data-longitude") || defaultLng, lat = content.getAttribute("data-latitude") || defaultLat;
        var map = new BMap.Map("bd-map");
        //实例化一个地理坐标点
        var point = new BMap.Point(lng, lat);
        //设初始化地图, options: 3-18
        map.centerAndZoom(point, 18);
        //添加地图缩放控件
        map.addControl(new BMap.ZoomControl());
        var opts = {
            width: 200,
            // 信息窗口宽度
            //height: 'auto',     // 信息窗口高度
            title: name
        };
        // 创建信息窗口对象
        var infoWindow = new BMap.InfoWindow("地址：" + address, opts);
        // 创建地址解析器实例
        var myGeo = new BMap.Geocoder();
        //判断有没有使用经纬度
        if (lng == defaultLng && lat == defaultLat) {
            // 使用地址反解析来设置地图
            // 将地址解析结果显示在地图上,并调整地图视野
            myGeo.getPoint(address, function(point) {
                if (point) {
                    map.centerAndZoom(point, 17);
                    map.addOverlay(new BMap.Marker(point));
                    map.openInfoWindow(infoWindow, point);
                }
            }, "");
        } else {
            // 使用经纬度来设置地图
            myGeo.getLocation(point, function(result) {
                map.centerAndZoom(point, 17);
                map.addOverlay(new BMap.Marker(point));
                if (address) {
                    map.openInfoWindow(infoWindow, point);
                } else {
                    map.openInfoWindow(new BMap.InfoWindow(address, opts), point);
                }
            });
        }
    }
    var mapInit = function() {
        $(".am-map").length && addMapApi(addBdMap);
    };
    $(document).on("ready", mapInit);
    exports.init = mapInit;
});
define("mechat", [], function(require, exports, module) {
    var $ = window.Zepto;
    var mechatInit = function() {
        if (!$("#mechat").length) return;
        var $mechat = $('[data-am-widget="mechat"]'), unitid = $mechat.data("am-mechat-unitid"), $mechatData = $("<script>", {
            charset: "utf-8",
            src: "http://mechatim.com/js/unit/button.js?id=" + unitid
        });
        $("body").append($mechatData);
    };
    // Lazy load
    $(window).on("load", mechatInit);
    exports.init = mechatInit;
});
define("menu", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "ui.offcanvas", "zepto.outerdemension", "ui.collapse", "ui.iscroll-lite" ], function(require, exports, module) {
    require("core");
    require("ui.offcanvas");
    require("ui.collapse");
    var IScroll = require("ui.iscroll-lite");
    var $ = window.Zepto;
    var UI = $.AMUI;
    var menuInit = function() {
        var $menus = $('[data-am-widget="menu"]');
        $menus.find(".am-menu-nav .am-parent > a").on("click", function(e) {
            e.preventDefault();
            var $clicked = $(this), $parent = $clicked.parent(), $subMenu = $clicked.next(".am-menu-sub");
            $parent.toggleClass("am-open");
            $subMenu.collapse("toggle");
            $parent.siblings(".am-parent").removeClass("am-open").children(".am-menu-sub.am-in").collapse("close");
        });
        // Dropdown/slidedown menu
        $menus.filter("[data-am-menu-collapse]").find("> .am-menu-toggle").on("click", function(e) {
            e.preventDefault();
            var $this = $(this), $nav = $this.next(".am-menu-nav");
            $this.toggleClass("am-active");
            $nav.collapse("toggle");
        });
        // OffCanvas menu
        $menus.filter("[data-am-menu-offcanvas]").find("> .am-menu-toggle").on("click", function(e) {
            e.preventDefault();
            var $this = $(this), $nav = $this.next(".am-offcanvas");
            $this.toggleClass("am-active");
            $nav.offCanvas("open");
        });
        // Close offCanvas when link clicked
        var autoCloseOffCanvas = '.am-offcanvas[data-dismiss-on="click"]', $autoCloseOffCanvas = $(autoCloseOffCanvas);
        $autoCloseOffCanvas.find("a").not(".am-parent>a").on("click", function(e) {
            $(this).parents(autoCloseOffCanvas).offCanvas("close");
        });
        // one theme
        $menus.filter(".am-menu-one").each(function(index) {
            var $this = $(this), $wrap = $('<div class="am-menu-nav-sub-wrap"></div>'), allWidth = 0, prevIndex, $nav = $this.find(".am-menu-nav"), $navTopItem = $nav.children("li");
            $navTopItem.filter(".am-parent").each(function(index) {
                $(this).attr("data-rel", "#am-menu-sub-" + index);
                $(this).find(".am-menu-sub").attr("id", "am-menu-sub-" + index).appendTo($wrap);
            });
            $this.append($wrap);
            $nav.wrap('<div class="am-menu-nav-wrap" id="am-menu-' + index + '">');
            // $navTopItem.eq(0).addClass('am-active');
            // 计算出所有 li 宽度
            $navTopItem.each(function(i) {
                allWidth += parseInt($(this).width());
            });
            $nav.width(allWidth);
            var menuScroll = new IScroll("#am-menu-" + index, {
                eventPassthrough: true,
                scrollX: true,
                scrollY: false,
                preventDefault: false
            });
            $navTopItem.on("click", function() {
                var $clicked = $(this);
                $clicked.addClass("am-active").siblings().removeClass("am-active");
                $wrap.find(".am-menu-sub.am-in").collapse("close");
                if ($clicked.is(".am-parent")) {
                    !$clicked.hasClass(".am-open") && $wrap.find($clicked.attr("data-rel")).collapse("open");
                } else {
                    $clicked.siblings().removeClass("am-open");
                }
                // 第一次调用，没有prevIndex
                if (prevIndex === undefined) {
                    prevIndex = $(this).index() ? 0 : 1;
                }
                // 判断方向
                var dir = $(this).index() > prevIndex;
                var target = $(this)[dir ? "next" : "prev"]();
                // 点击的按钮，显示一半
                var offset = target.offset() || $(this).offset();
                var within = $this.offset();
                // 父类左边距
                var listOffset, parentLeft = parseInt($this.css("padding-left"));
                if (dir ? offset.left + offset.width > within.left + within.width : offset.left < within.left) {
                    listOffset = $nav.offset();
                    menuScroll.scrollTo(dir ? within.width - offset.left + listOffset.left - offset.width - parentLeft : listOffset.left - offset.left, 0, 400);
                }
                prevIndex = $(this).index();
            });
            $this.on("touchmove", function(event) {
                event.preventDefault();
            });
        });
    };
    $(function() {
        menuInit();
    });
    exports.init = menuInit;
});
define("navbar", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "util.qrcode", "ui.modal", "ui.dimmer", "ui.share" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto, UI = $.AMUI, QRCode = require("util.qrcode"), modal = require("ui.modal"), share = require("ui.share");
    var navbarInit = function() {
        var $navBar = $('[data-am-widget="navbar"]');
        if (!$navBar.length) return;
        var $win = $(window), $body = $("body"), $navBarNav = $navBar.find(".am-navbar-nav"), $navItems = $navBar.find("li"), navItemsCounter = $navItems.length;
        configItems = $navBarNav.attr("class") && parseInt($navBarNav.attr("class").match(/sm-block-grid-(\d)/)[1]) || 3, 
        navMinWidth = 60, //每个li最小宽度
        offsetWidth = 16, $share = $navItems.filter("[data-am-navbar-share]"), $qrcode = $navItems.filter("[data-am-navbar-qrcode]"), 
        activeStatus = "am-active", $moreActions = $('<ul class="am-navbar-actions"></ul>', {
            id: UI.utils.generateGUID("am-navbar-actions")
        }), $moreLink = $('<li class="am-navbar-labels am-navbar-more"><a href="javascript: void(0);"><span class="am-icon-angle-up"></span><span class="am-navbar-label">更多</span></a></li>');
        // 如果有 Fix 的工具栏则设置 body 的 padding-bottom
        if ($navBar.css("position") == "fixed") {
            $body.addClass("with-fixed-navbar");
        }
        if ($qrcode.length) {
            var qrId = "am-navbar-qrcode";
            $qrModal = $("#" + qrId);
            if (!$qrModal.length) {
                var qrImg = $qrcode.attr("data-am-navbar-qrcode"), $qrModal = $('<div class="am-modal am-modal-no-btn" id="">' + '<div class="am-modal-dialog"><div class="am-modal-bd"></div></div>' + "</div>", {
                    id: qrId
                }), $qrContainer = $qrModal.find(".am-modal-bd");
                // 判断上传自定义的二维码没有，否则生成二维码
                if (qrImg) {
                    $qrContainer.html('<img src="' + qrImg + '"/>');
                } else {
                    var qrnode = new QRCode({
                        render: "canvas",
                        correctLevel: 0,
                        text: window.location.href,
                        width: 200,
                        height: 200,
                        background: "#fff",
                        foreground: "#000"
                    });
                    $qrContainer.html(qrnode);
                }
                $body.append($qrModal);
            }
            $qrcode.on("click", function(e) {
                e.preventDefault();
                $qrModal.modal();
            });
        }
        if (navItemsCounter > configItems && navItemsCounter > calcSuiteItems()) {
            initActions();
        }
        function initActions() {
            $navBarNav.append($moreLink);
            $navBarNav.find("li").not(".am-navbar-more").slice(calcSuiteItems() - 1).appendTo($moreActions);
            // Append more actions
            $navBar.append($moreActions);
        }
        function checkNavBarItems() {
            // console.log('best: %d', calcSuiteItems());
            if (calcSuiteItems() >= navItemsCounter) {
                // 显示所有链接，隐藏 more
                $moreLink.hide();
                $moreActions.find("li").insertBefore($moreLink);
                return;
            }
            !$navBar.find(".am-navbar-actions").length && initActions();
            $moreLink.show();
            if ($navBarNav.find("li").length < calcSuiteItems()) {
                $moreActions.find("li").slice(0, calcSuiteItems() - $navBarNav.find("li").length).insertBefore($moreLink);
            } else if ($navBarNav.find("li").length > calcSuiteItems()) {
                if ($moreActions.find("li").length) {
                    $navBarNav.find("li").not($moreLink).slice(calcSuiteItems() - 1).insertBefore($moreActions.find("li").first());
                } else {
                    $navBarNav.find("li").not($moreLink).slice(calcSuiteItems() - 1).appendTo($moreActions);
                }
            }
        }
        /**
         * 计算最适合显示的条目个数
         * @returns {number}
         */
        function calcSuiteItems() {
            return Math.floor(($win.width() - offsetWidth) / navMinWidth);
        }
        $navBar.on("click.navbar.amui", ".am-navbar-more", function(e) {
            e.preventDefault();
            $moreLink[$moreActions.hasClass(activeStatus) ? "removeClass" : "addClass"](activeStatus);
            $moreActions.toggleClass(activeStatus);
        });
        if ($share.length) {
            $share.on("click.navbar.amui", function(e) {
                e.preventDefault();
                share.toggle();
            });
        }
        $win.on("resize.navbar.amui orientationchange.navbar.amui", UI.utils.debounce(checkNavBarItems, 150));
    };
    // DOMContent ready
    $(function() {
        navbarInit();
    });
    exports.init = navbarInit;
});
define("pagination", [], function(require, exports, module) {
    var $ = window.Zepto;
});
define("paragraph", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "zepto.pinchzoom" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    // PinchZoom Plugin
    var PinchZoom = require("zepto.pinchzoom");
    var paragraphInit;
    $.fn.paragraphZoomToggle = function() {
        var $warpHead, $pinch, $zoomWrap, onOff = true, // 防止重复创建
        $wrapDom = $("<div class='am-paragraph-wrap'><header></header><div class='pinch-zoom'></div></div>");
        $zoomWrap = $(".am-paragraph-wrap");
        $warpHead = $(".am-paragraph-wrap header");
        $pinch = $zoomWrap.find(".pinch-zoom");
        this.each(function() {
            $(this).on("click", function() {
                if (onOff && $(".am-paragraph").length) {
                    $("body").append($wrapDom);
                    $zoomWrap = $(".am-paragraph-wrap");
                    $pinch = $zoomWrap.find(".pinch-zoom");
                    $warpHead = $zoomWrap.find("header");
                    $pinch.each(function() {
                        new PinchZoom($(this), {});
                    });
                    onOff = false;
                }
                $pinch.html(this.outerHTML);
                if ($(this).attr("alt")) {
                    $warpHead.html($(this).attr("alt"));
                } else {
                    $warpHead.html("返回");
                }
                $zoomWrap.addClass("am-active").find("img").width($(window).width());
            });
        });
    };
    $.fn.paragraphTable = function(objWidth) {
        var This = $(this), distX = 0, disX = 0, disY = 0, downX, downY, $parent, scrollY;
        if (objWidth > $("body").width()) {
            This.wrap("<div class='am-paragraph-table-container'><div class='am-paragraph-table-scroller'></div></div>");
            $parent = This.parent();
            $parent.width(objWidth);
            $parent.height(This.height());
            $parent.parent().height(This.height() + 20);
            $parent.on("touchstart MSPointerDown pointerdown", function(ev) {
                var oTarget = ev.targetTouches[0];
                distX = oTarget.clientX - $(this).offset().left;
                downX = oTarget.clientX;
                downY = oTarget.clientY;
                scrollY = undefined;
                $(document).on("touchmove MSPointerMove pointermove", fnMove);
                $(document).on("touchend MSPointerUp pointerup", fnUp);
            });
        }
        function fnUp(ev) {
            ev.preventDefault();
            var oTarget = ev.changedTouches[0];
            var L = $parent.offset().left;
            // ->
            if (L > 10) {
                $parent.animate({
                    left: 10
                }, 500, "ease-out");
            }
            //<-
            if (L < -$parent.width() + $(window).width() - 10) {
                $parent.animate({
                    left: -$parent.width() + $(window).width() - 10
                }, 500, "ease-out");
            }
            $(document).off("touchend MSPointerUp pointerup", fnUp);
            $(document).off("touchmove MSPointerMove pointermove", fnMove);
        }
        function fnMove(ev) {
            var oTarget = ev.targetTouches[0];
            disX = oTarget.clientX - downX;
            disY = oTarget.clientY - downY;
            if (typeof scrollY == "undefined") {
                scrollY = !!(scrollY || Math.abs(disX) < Math.abs(disY));
            }
            if (!scrollY) {
                ev.preventDefault();
                This.parent().css("left", oTarget.clientX - distX);
            }
        }
    };
    paragraphInit = function() {
        var $body = $("body"), $paragraph = $('[data-am-widget="paragraph"]'), $tableWidth;
        $paragraph.each(function() {
            var $this = $(this), options = UI.utils.parseOptions($this.attr("data-am-paragraph"));
            if (options.imgLightbox) {
                $this.find("img").paragraphZoomToggle();
                $body.on("click", ".am-paragraph-wrap", function(e) {
                    e.preventDefault();
                    var target = e.target;
                    // Img is using pinch zoom
                    if (!$(target).is("img")) {
                        $(this).toggleClass("am-active");
                    }
                });
            }
            if (options.tableScrollable) {
                $this.find("table").each(function() {
                    $tableWidth = $(this).width();
                    $(this).paragraphTable($tableWidth);
                });
            }
        });
    };
    $(window).on("load", function() {
        paragraphInit();
    });
    exports.init = paragraphInit;
});
define("slider", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "zepto.flexslider" ], function(require, exports, module) {
    require("core");
    require("zepto.flexslider");
    var $ = window.Zepto, UI = $.AMUI;
    var sliderInit = function() {
        var $sliders = $('[data-am-widget="slider"]');
        $sliders.not(".am-slider-manual").each(function(i, item) {
            var options = UI.utils.parseOptions($(item).attr("data-am-slider"));
            $(item).flexslider(options);
        });
    };
    $(document).on("ready", sliderInit);
    exports.init = sliderInit;
});
define("sohucs", [], function(require, exports, module) {
    var $ = window.Zepto;
    var sohuCSInit = function() {
        if (!$("#SOHUCS").length) return;
        var $sohucs = $('[data-am-widget="sohucs"]'), appid = $sohucs.attr("data-am-sohucs-appid"), conf = $sohucs.attr("data-am-sohucs-conf"), $cy = $("<script></script>", {
            charset: "utf-8",
            id: "changyan_mobile_js",
            src: "http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id=" + appid + "&conf=" + conf
        });
        $("body").append($cy);
    };
    // Lazy load
    $(window).on("load", sohuCSInit);
    exports.init = sohuCSInit;
});
define("tabs", [ "zepto.extend.touch", "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "ui.tabs" ], function(require, exports, module) {
    require("zepto.extend.touch");
    require("core");
    require("ui.tabs");
    var $ = window.Zepto;
    var tabsInit = function() {
        $('[data-am-widget="tabs"]').tabs();
    };
    $(function() {
        tabsInit();
    });
    exports.init = tabsInit;
});
define("titlebar", [], function(require, exports, module) {
    var $ = window.Zepto;
});
define("ui.add2home", [], function(require, exports, module) {
    /*!
     * Add to Homescreen v2.0.11 ~ Copyright (c) 2013 Matteo Spinelli, http://cubiq.org
     * Released under MIT license, http://cubiq.org/license
     */
    var addToHome = function(w) {
        var nav = w.navigator, isIDevice = "platform" in nav && /iphone|ipod|ipad/gi.test(nav.platform), isIPad, isRetina, isSafari, isStandalone, OSVersion, startX = 0, startY = 0, lastVisit = 0, isExpired, isSessionActive, isReturningVisitor, balloon, overrideChecks, positionInterval, closeTimeout, options = {
            autostart: true,
            // Automatically open the balloon
            returningVisitor: false,
            // Show the balloon to returning visitors only (setting this to true is highly recommended)
            animationIn: "drop",
            // drop || bubble || fade
            animationOut: "fade",
            // drop || bubble || fade
            startDelay: 2e3,
            // 2 seconds from page load before the balloon appears
            lifespan: 15e3,
            // 15 seconds before it is automatically destroyed
            bottomOffset: 14,
            // Distance of the balloon from bottom
            expire: 0,
            // Minutes to wait before showing the popup again (0 = always displayed)
            message: "",
            // Customize your message or force a language ('' = automatic)
            touchIcon: false,
            // Display the touch icon
            arrow: true,
            // Display the balloon arrow
            hookOnLoad: true,
            // Should we hook to onload event? (really advanced usage)
            closeButton: true,
            // Let the user close the balloon
            iterations: 100
        }, intl = {
            en_us: "Install this web app on your %device: tap %icon and then <strong>Add to Home Screen</strong>.",
            zh_cn: "您可以将此应用安装到您的 %device 上。请按 %icon 然后选择<strong>添加至主屏幕</strong>。",
            zh_tw: "您可以將此應用程式安裝到您的 %device 上。請按 %icon 然後點選<strong>加入主畫面螢幕</strong>。"
        };
        function init() {
            // Preliminary check, all further checks are performed on iDevices only
            if (!isIDevice) return;
            var now = Date.now(), i;
            // Merge local with global options
            if (w.addToHomeConfig) {
                for (i in w.addToHomeConfig) {
                    options[i] = w.addToHomeConfig[i];
                }
            }
            if (!options.autostart) options.hookOnLoad = false;
            isIPad = /ipad/gi.test(nav.platform);
            isRetina = w.devicePixelRatio && w.devicePixelRatio > 1;
            isSafari = /Safari/i.test(nav.appVersion) && !/CriOS/i.test(nav.appVersion);
            isStandalone = nav.standalone;
            OSVersion = nav.appVersion.match(/OS (\d+_\d+)/i);
            OSVersion = OSVersion && OSVersion[1] ? +OSVersion[1].replace("_", ".") : 0;
            lastVisit = +w.localStorage.getItem("addToHome");
            isSessionActive = w.sessionStorage.getItem("addToHomeSession");
            isReturningVisitor = options.returningVisitor ? lastVisit && lastVisit + 28 * 24 * 60 * 60 * 1e3 > now : true;
            if (!lastVisit) lastVisit = now;
            // If it is expired we need to reissue a new balloon
            isExpired = isReturningVisitor && lastVisit <= now;
            if (options.hookOnLoad) w.addEventListener("load", loaded, false); else if (!options.hookOnLoad && options.autostart) loaded();
        }
        function loaded() {
            w.removeEventListener("load", loaded, false);
            if (!isReturningVisitor) w.localStorage.setItem("addToHome", Date.now()); else if (options.expire && isExpired) w.localStorage.setItem("addToHome", Date.now() + options.expire * 6e4);
            if (!overrideChecks && (!isSafari || !isExpired || isSessionActive || isStandalone || !isReturningVisitor)) return;
            var touchIcon = "", platform = nav.platform.split(" ")[0], language = nav.language.replace("-", "_");
            balloon = document.createElement("div");
            balloon.id = "addToHomeScreen";
            balloon.style.cssText += "left:-9999px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);position:" + (OSVersion < 5 ? "absolute" : "fixed");
            // Localize message
            if (options.message in intl) {
                // You may force a language despite the user's locale
                language = options.message;
                options.message = "";
            }
            if (options.message === "") {
                // We look for a suitable language (defaulted to en_us)
                options.message = language in intl ? intl[language] : intl["en_us"];
            }
            if (options.touchIcon) {
                touchIcon = isRetina ? document.querySelector('head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon]') : document.querySelector('head link[rel^=apple-touch-icon][sizes="57x57"],head link[rel^=apple-touch-icon]');
                if (touchIcon) {
                    touchIcon = '<span style="background-image:url(' + touchIcon.href + ')" class="addToHomeTouchIcon"></span>';
                }
            }
            balloon.className = (OSVersion >= 7 ? "addToHomeIOS7 " : "") + (isIPad ? "addToHomeIpad" : "addToHomeIphone") + (touchIcon ? " addToHomeWide" : "");
            balloon.innerHTML = touchIcon + options.message.replace("%device", platform).replace("%icon", OSVersion >= 4.2 ? '<span class="addToHomeShare"></span>' : '<span class="addToHomePlus">+</span>') + (options.arrow ? '<span class="addToHomeArrow"' + (OSVersion >= 7 && isIPad && touchIcon ? ' style="margin-left:-32px"' : "") + "></span>" : "") + (options.closeButton ? '<span class="addToHomeClose">×</span>' : "");
            document.body.appendChild(balloon);
            // Add the close action
            if (options.closeButton) balloon.addEventListener("click", clicked, false);
            if (!isIPad && OSVersion >= 6) window.addEventListener("orientationchange", orientationCheck, false);
            setTimeout(show, options.startDelay);
        }
        function show() {
            var duration, iPadXShift = 208;
            // Set the initial position
            if (isIPad) {
                if (OSVersion < 5) {
                    startY = w.scrollY;
                    startX = w.scrollX;
                } else if (OSVersion < 6) {
                    iPadXShift = 160;
                } else if (OSVersion >= 7) {
                    iPadXShift = 143;
                }
                balloon.style.top = startY + options.bottomOffset + "px";
                balloon.style.left = Math.max(startX + iPadXShift - Math.round(balloon.offsetWidth / 2), 9) + "px";
                switch (options.animationIn) {
                  case "drop":
                    duration = "0.6s";
                    balloon.style.webkitTransform = "translate3d(0," + -(w.scrollY + options.bottomOffset + balloon.offsetHeight) + "px,0)";
                    break;

                  case "bubble":
                    duration = "0.6s";
                    balloon.style.opacity = "0";
                    balloon.style.webkitTransform = "translate3d(0," + (startY + 50) + "px,0)";
                    break;

                  default:
                    duration = "1s";
                    balloon.style.opacity = "0";
                }
            } else {
                startY = w.innerHeight + w.scrollY;
                if (OSVersion < 5) {
                    startX = Math.round((w.innerWidth - balloon.offsetWidth) / 2) + w.scrollX;
                    balloon.style.left = startX + "px";
                    balloon.style.top = startY - balloon.offsetHeight - options.bottomOffset + "px";
                } else {
                    balloon.style.left = "50%";
                    balloon.style.marginLeft = -Math.round(balloon.offsetWidth / 2) - (w.orientation % 180 && OSVersion >= 6 && OSVersion < 7 ? 40 : 0) + "px";
                    balloon.style.bottom = options.bottomOffset + "px";
                }
                switch (options.animationIn) {
                  case "drop":
                    duration = "1s";
                    balloon.style.webkitTransform = "translate3d(0," + -(startY + options.bottomOffset) + "px,0)";
                    break;

                  case "bubble":
                    duration = "0.6s";
                    balloon.style.webkitTransform = "translate3d(0," + (balloon.offsetHeight + options.bottomOffset + 50) + "px,0)";
                    break;

                  default:
                    duration = "1s";
                    balloon.style.opacity = "0";
                }
            }
            balloon.offsetHeight;
            // repaint trick
            balloon.style.webkitTransitionDuration = duration;
            balloon.style.opacity = "1";
            balloon.style.webkitTransform = "translate3d(0,0,0)";
            balloon.addEventListener("webkitTransitionEnd", transitionEnd, false);
            closeTimeout = setTimeout(close, options.lifespan);
        }
        function manualShow(override) {
            if (!isIDevice || balloon) return;
            overrideChecks = override;
            loaded();
        }
        function close() {
            clearInterval(positionInterval);
            clearTimeout(closeTimeout);
            closeTimeout = null;
            // check if the popup is displayed and prevent errors
            if (!balloon) return;
            var posY = 0, posX = 0, opacity = "1", duration = "0";
            if (options.closeButton) balloon.removeEventListener("click", clicked, false);
            if (!isIPad && OSVersion >= 6) window.removeEventListener("orientationchange", orientationCheck, false);
            if (OSVersion < 5) {
                posY = isIPad ? w.scrollY - startY : w.scrollY + w.innerHeight - startY;
                posX = isIPad ? w.scrollX - startX : w.scrollX + Math.round((w.innerWidth - balloon.offsetWidth) / 2) - startX;
            }
            balloon.style.webkitTransitionProperty = "-webkit-transform,opacity";
            switch (options.animationOut) {
              case "drop":
                if (isIPad) {
                    duration = "0.4s";
                    opacity = "0";
                    posY += 50;
                } else {
                    duration = "0.6s";
                    posY += balloon.offsetHeight + options.bottomOffset + 50;
                }
                break;

              case "bubble":
                if (isIPad) {
                    duration = "0.8s";
                    posY -= balloon.offsetHeight + options.bottomOffset + 50;
                } else {
                    duration = "0.4s";
                    opacity = "0";
                    posY -= 50;
                }
                break;

              default:
                duration = "0.8s";
                opacity = "0";
            }
            balloon.addEventListener("webkitTransitionEnd", transitionEnd, false);
            balloon.style.opacity = opacity;
            balloon.style.webkitTransitionDuration = duration;
            balloon.style.webkitTransform = "translate3d(" + posX + "px," + posY + "px,0)";
        }
        function clicked() {
            w.sessionStorage.setItem("addToHomeSession", "1");
            isSessionActive = true;
            close();
        }
        function transitionEnd() {
            balloon.removeEventListener("webkitTransitionEnd", transitionEnd, false);
            balloon.style.webkitTransitionProperty = "-webkit-transform";
            balloon.style.webkitTransitionDuration = "0.2s";
            // We reached the end!
            if (!closeTimeout) {
                balloon.parentNode.removeChild(balloon);
                balloon = null;
                return;
            }
            // On iOS 4 we start checking the element position
            if (OSVersion < 5 && closeTimeout) positionInterval = setInterval(setPosition, options.iterations);
        }
        function setPosition() {
            var matrix = new WebKitCSSMatrix(w.getComputedStyle(balloon, null).webkitTransform), posY = isIPad ? w.scrollY - startY : w.scrollY + w.innerHeight - startY, posX = isIPad ? w.scrollX - startX : w.scrollX + Math.round((w.innerWidth - balloon.offsetWidth) / 2) - startX;
            // Screen didn't move
            if (posY == matrix.m42 && posX == matrix.m41) return;
            balloon.style.webkitTransform = "translate3d(" + posX + "px," + posY + "px,0)";
        }
        // Clear local and session storages (this is useful primarily in development)
        function reset() {
            w.localStorage.removeItem("addToHome");
            w.sessionStorage.removeItem("addToHomeSession");
        }
        function orientationCheck() {
            balloon.style.marginLeft = -Math.round(balloon.offsetWidth / 2) - (w.orientation % 180 && OSVersion >= 6 && OSVersion < 7 ? 40 : 0) + "px";
        }
        // Bootstrap!
        init();
        return {
            show: manualShow,
            close: close,
            reset: reset
        };
    }(window);
});
define("ui.alert", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/Minwe/bootstrap/blob/master/js/alert.js
     * @copyright Copyright 2013 Twitter, Inc.
     * @license Apache 2.0
     */
    // Alert Class
    // NOTE: removeElement option is unavailable now
    var Alert = function(element, options) {
        this.options = $.extend({}, Alert.DEFAULTS, options);
        this.$element = $(element);
        this.$element.addClass("am-fade am-in").on("click", ".am-close", $.proxy(this.close, this));
    };
    Alert.DEFAULTS = {
        removeElement: true
    };
    Alert.prototype.close = function() {
        var $this = $(this), $target = $this.hasClass("am-alert") ? $this : $this.parent(".am-alert");
        $target.trigger("close:alert:amui");
        $target.removeClass("am-in");
        function processAlert() {
            $target.off().trigger("closed:alert:amui").remove();
        }
        UI.support.transition && $target.hasClass("am-fade") ? $target.one(UI.support.transition.end, processAlert).emulateTransitionEnd(200) : processAlert();
    };
    UI.alert = Alert;
    // Alert Plugin
    $.fn.alert = function(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("amui.alert"), options = typeof option == "object" && option;
            if (!data) {
                $this.data("amui.alert", data = new Alert(this, options || {}));
            }
            if (typeof option == "string") {
                data[option].call($this);
            }
        });
    };
    // Init code
    $(document).on("click.alert.amui", "[data-am-alert]", function(e) {
        var $target = $(e.target);
        $(this).addClass("am-fade am-in");
        // $target.is('.am-close') && 
        $(this).alert("close");
    });
    module.exports = Alert;
});
define("ui.button", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/twbs/bootstrap/blob/master/js/button.js
     * @copyright Copyright 2013 Twitter, Inc.
     * @license Apache 2.0
     */
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
        this.hasSpinner = false;
    };
    Button.DEFAULTS = {
        loadingText: "loading...",
        loadingClass: "am-btn-loading",
        loadingWithSpinner: '<span class="am-icon-refresh am-icon-spin"></span> loading...'
    };
    Button.prototype.setState = function(state) {
        var d = "disabled", $el = this.$element, val = $el.is("input") ? "val" : "html", data = $el.data();
        state = state + "Text";
        if (data.resetText == null) {
            $el.data("resetText", $el[val]());
        }
        // add spinner for element with html()
        if (UI.support.animation && !this.hasSpinner && val === "html") {
            this.options.loadingText = this.options.loadingWithSpinner;
            this.hasSpinner = true;
        }
        $el[val](data[state] == null ? this.options[state] : data[state]);
        // push to event loop to allow forms to submit
        setTimeout($.proxy(function() {
            if (state == "loadingText") {
                this.isLoading = true;
                $el.addClass(d + " " + this.options.loadingClass).attr(d, d);
            } else if (this.isLoading) {
                this.isLoading = false;
                $el.removeClass(d + " " + this.options.loadingClass).removeAttr(d);
            }
        }, this), 0);
    };
    Button.prototype.toggle = function() {
        var changed = true, $parent = this.$element.parent(".am-btn-group");
        if ($parent.length) {
            var $input = this.$element.find("input");
            if ($input.prop("type") == "radio") {
                if ($input.prop("checked") && this.$element.hasClass("am-active")) {
                    changed = false;
                } else {
                    $parent.find(".am-active").removeClass("am-active");
                }
            }
            if (changed) {
                $input.prop("checked", !this.$element.hasClass("am-active")).trigger("change");
            }
        }
        if (changed) {
            this.$element.toggleClass("am-active");
        }
    };
    // Button plugin
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("amui.button");
            var options = typeof option == "object" && option;
            if (!data) {
                $this.data("amui.button", data = new Button(this, options));
            }
            if (option == "toggle") {
                data.toggle();
            } else if (option) {
                data.setState(option);
            }
        });
    }
    $.fn.button = Plugin;
    // Init code
    $(document).on("click.button.amui", "[data-am-button]", function(e) {
        var $btn = $(e.target);
        if (!$btn.hasClass("am-btn")) {
            $btn = $btn.closest(".am-btn");
        }
        Plugin.call($btn, "toggle");
        e.preventDefault();
    });
    module.exports = Button;
});
define("ui.collapse", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/twbs/bootstrap/blob/master/js/collapse.js
     * @copyright Copyright 2013 Twitter, Inc.
     * @license Apache 2.0
     */
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = $(this.options.parent);
        }
        if (this.options.toggle) {
            this.toggle();
        }
    };
    Collapse.DEFAULTS = {
        toggle: true
    };
    Collapse.prototype.open = function() {
        if (this.transitioning || this.$element.hasClass("am-in")) return;
        var startEvent = $.Event("open:collapse:amui");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var actives = this.$parent && this.$parent.find("> .am-panel > .am-in");
        if (actives && actives.length) {
            var hasData = actives.data("amui.collapse");
            if (hasData && hasData.transitioning) return;
            Plugin.call(actives, "close");
            hasData || actives.data("amui.collapse", null);
        }
        this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0);
        this.transitioning = 1;
        var complete = function() {
            this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height("");
            this.transitioning = 0;
            this.$element.trigger("opened:collapse:amui");
        };
        if (!UI.support.transition) {
            return complete.call(this);
        }
        this.$element.one(UI.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350).height(this.$element[0].scrollHeight);
    };
    Collapse.prototype.close = function() {
        if (this.transitioning || !this.$element.hasClass("am-in")) return;
        var startEvent = $.Event("close:collapse:amui");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        this.$element.height(this.$element.height());
        this.$element[0].offsetHeight;
        this.$element.addClass("am-collapsing").removeClass("am-collapse").removeClass("am-in");
        this.transitioning = 1;
        var complete = function() {
            this.transitioning = 0;
            this.$element.trigger("closed:collapse:amui").removeClass("am-collapsing").addClass("am-collapse");
        };
        if (!UI.support.transition) {
            return complete.call(this);
        }
        this.$element.height(0).one(UI.support.transition.end, $.proxy(complete, this)).emulateTransitionEnd(350);
    };
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("am-in") ? "close" : "open"]();
    };
    UI.collapse = Collapse;
    // Collapse Plugin
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("amui.collapse"), options = $.extend({}, Collapse.DEFAULTS, UI.utils.options($this.attr("data-am-collapse")), typeof option == "object" && option);
            if (!data && options.toggle && option == "open") {
                option = !option;
            }
            if (!data) {
                $this.data("amui.collapse", data = new Collapse(this, options));
            }
            if (typeof option == "string") {
                data[option]();
            }
        });
    }
    $.fn.collapse = Plugin;
    // Init code
    $(document).on("click.collapse.amui", "[data-am-collapse]", function(e) {
        var href, $this = $(this), options = UI.utils.options($this.attr("data-am-collapse")), target = options.target || e.preventDefault() || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        var $target = $(target);
        var data = $target.data("amui.collapse");
        var option = data ? "toggle" : options;
        var parent = options.parent;
        var $parent = parent && $(parent);
        if (!data || !data.transitioning) {
            if ($parent) {
                //'[data-am-collapse*="{parent: \'' + parent + '"]
                $parent.find("[data-am-collapse]").not($this).addClass("am-collapsed");
            }
            $this[$target.hasClass("am-in") ? "addClass" : "removeClass"]("am-collapsed");
        }
        Plugin.call($target, option);
    });
    module.exports = Collapse;
});
define("ui.dimmer", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    var $dimmer = $('<div class="am-dimmer" data-am-dimmer></div>'), $doc = $(document), $html = $("html");
    var Dimmer = function() {
        this.hasDimmer = $("[data-am-dimmer]").length ? true : false;
        this.$element = $dimmer;
        $(document).on("ready", $.proxy(this.init, this));
    };
    Dimmer.prototype.init = function() {
        if (!this.hasDimmer) {
            $dimmer.appendTo($("body"));
            this.events();
            this.hasDimmer = true;
        }
        $doc.trigger("init:dimmer:amui");
        return this;
    };
    Dimmer.prototype.open = function(relatedElement) {
        $html.addClass("am-dimmer-active");
        $dimmer.addClass("am-active");
        $(relatedElement).length && $(relatedElement).show();
        $doc.trigger("open:dimmer:amui");
        return this;
    };
    Dimmer.prototype.close = function(relatedElement) {
        $dimmer.removeClass("am-active");
        $html.removeClass("am-dimmer-active");
        $(relatedElement).length && $(relatedElement).hide();
        $doc.trigger("close:dimmer:amui");
        return this;
    };
    Dimmer.prototype.events = function() {
        var that = this;
        $dimmer.on("click.dimmer.amui", function() {});
    };
    var dimmer = new Dimmer();
    UI.dimmer = dimmer;
    module.exports = dimmer;
});
define("ui.dropdown", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/Minwe/bootstrap/blob/master/js/dropdown.js
     * @copyright Copyright 2013 Twitter, Inc.
     * @license Apache 2.0
     */
    var toggle = "[data-am-dropdown] > .am-dropdown-toggle";
    var Dropdown = function(element, options) {
        $(element).on("click.dropdown.amui", this.toggle);
    };
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if ($this.is(".am-disabled, :disabled")) {
            return;
        }
        var $parent = $this.parent(), isActive = $parent.hasClass("am-active");
        clearDropdowns();
        if (!isActive) {
            var relatedTarget = {
                relatedTarget: this
            };
            $parent.trigger(e = $.Event("open:dropdown:amui", relatedTarget));
            if (e.isDefaultPrevented()) {
                return;
            }
            $this.trigger("focus");
            $parent.toggleClass("am-active").trigger(e = $.Event("opened:dropdown:amui", relatedTarget));
        } else {
            $this.blur();
        }
        return false;
    };
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27)/.test(e.keyCode)) return;
        var $this = $(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is(".am-disabled, :disabled")) {
            return;
        }
        var $parent = $this.parent(), isActive = $parent.hasClass("am-active");
        if (!isActive || isActive && e.keyCode == 27) {
            if (e.which == 27) {
                $parent.find(toggle).trigger("focus");
            }
            return $this.trigger("click");
        }
    };
    function clearDropdowns(e) {
        if (e && e.which === 3) return;
        $(toggle).each(function() {
            var $parent = $(this).parent(), relatedTarget = {
                relatedTarget: this
            };
            if (!$parent.hasClass("am-active")) {
                return;
            }
            $parent.trigger(e = $.Event("close:dropdown:amui", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $parent.removeClass("am-active").trigger(e = $.Event("closed:dropdown:amui", relatedTarget));
        });
    }
    UI.dropdown = Dropdown;
    // Dropdown Plugin
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("amui.dropdown");
            if (!data) {
                $this.data("amui.dropdown", data = new Dropdown(this));
            }
            if (typeof option == "string") {
                data[option].call($this);
            }
        });
    }
    $.fn.dropdown = Plugin;
    // Init code
    $(document).on("click.dropdown.amui", ".am-dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.dropdown.amui", toggle, Dropdown.prototype.toggle).on("keydown.dropdown.amui", toggle, Dropdown.prototype.keydown);
});
define("ui.iscroll-lite", [], function(require, exports, module) {
    /*! iScroll v5.1.2 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
    (function(window, document, Math) {
        var rAF = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1e3 / 60);
        };
        var utils = function() {
            var me = {};
            var _elementStyle = document.createElement("div").style;
            var _vendor = function() {
                var vendors = [ "t", "webkitT", "MozT", "msT", "OT" ], transform, i = 0, l = vendors.length;
                for (;i < l; i++) {
                    transform = vendors[i] + "ransform";
                    if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
                }
                return false;
            }();
            function _prefixStyle(style) {
                if (_vendor === false) return false;
                if (_vendor === "") return style;
                return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
            }
            me.getTime = Date.now || function getTime() {
                return new Date().getTime();
            };
            me.extend = function(target, obj) {
                for (var i in obj) {
                    target[i] = obj[i];
                }
            };
            me.addEvent = function(el, type, fn, capture) {
                el.addEventListener(type, fn, !!capture);
            };
            me.removeEvent = function(el, type, fn, capture) {
                el.removeEventListener(type, fn, !!capture);
            };
            me.prefixPointerEvent = function(pointerEvent) {
                return window.MSPointerEvent ? "MSPointer" + pointerEvent.charAt(9).toUpperCase() + pointerEvent.substr(10) : pointerEvent;
            };
            me.momentum = function(current, start, time, lowerMargin, wrapperSize, deceleration) {
                var distance = current - start, speed = Math.abs(distance) / time, destination, duration;
                deceleration = deceleration === undefined ? 6e-4 : deceleration;
                destination = current + speed * speed / (2 * deceleration) * (distance < 0 ? -1 : 1);
                duration = speed / deceleration;
                if (destination < lowerMargin) {
                    destination = wrapperSize ? lowerMargin - wrapperSize / 2.5 * (speed / 8) : lowerMargin;
                    distance = Math.abs(destination - current);
                    duration = distance / speed;
                } else if (destination > 0) {
                    destination = wrapperSize ? wrapperSize / 2.5 * (speed / 8) : 0;
                    distance = Math.abs(current) + destination;
                    duration = distance / speed;
                }
                return {
                    destination: Math.round(destination),
                    duration: duration
                };
            };
            var _transform = _prefixStyle("transform");
            me.extend(me, {
                hasTransform: _transform !== false,
                hasPerspective: _prefixStyle("perspective") in _elementStyle,
                hasTouch: "ontouchstart" in window,
                hasPointer: window.PointerEvent || window.MSPointerEvent,
                // IE10 is prefixed
                hasTransition: _prefixStyle("transition") in _elementStyle
            });
            // This should find all Android browsers lower than build 535.19 (both stock browser and webview)
            me.isBadAndroid = /Android /.test(window.navigator.appVersion) && !/Chrome\/\d/.test(window.navigator.appVersion);
            me.extend(me.style = {}, {
                transform: _transform,
                transitionTimingFunction: _prefixStyle("transitionTimingFunction"),
                transitionDuration: _prefixStyle("transitionDuration"),
                transitionDelay: _prefixStyle("transitionDelay"),
                transformOrigin: _prefixStyle("transformOrigin")
            });
            me.hasClass = function(e, c) {
                var re = new RegExp("(^|\\s)" + c + "(\\s|$)");
                return re.test(e.className);
            };
            me.addClass = function(e, c) {
                if (me.hasClass(e, c)) {
                    return;
                }
                var newclass = e.className.split(" ");
                newclass.push(c);
                e.className = newclass.join(" ");
            };
            me.removeClass = function(e, c) {
                if (!me.hasClass(e, c)) {
                    return;
                }
                var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
                e.className = e.className.replace(re, " ");
            };
            me.offset = function(el) {
                var left = -el.offsetLeft, top = -el.offsetTop;
                // jshint -W084
                while (el = el.offsetParent) {
                    left -= el.offsetLeft;
                    top -= el.offsetTop;
                }
                // jshint +W084
                return {
                    left: left,
                    top: top
                };
            };
            me.preventDefaultException = function(el, exceptions) {
                for (var i in exceptions) {
                    if (exceptions[i].test(el[i])) {
                        return true;
                    }
                }
                return false;
            };
            me.extend(me.eventType = {}, {
                touchstart: 1,
                touchmove: 1,
                touchend: 1,
                mousedown: 2,
                mousemove: 2,
                mouseup: 2,
                pointerdown: 3,
                pointermove: 3,
                pointerup: 3,
                MSPointerDown: 3,
                MSPointerMove: 3,
                MSPointerUp: 3
            });
            me.extend(me.ease = {}, {
                quadratic: {
                    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    fn: function(k) {
                        return k * (2 - k);
                    }
                },
                circular: {
                    style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                    // Not properly "circular" but this looks better, it should be (0.075, 0.82, 0.165, 1)
                    fn: function(k) {
                        return Math.sqrt(1 - --k * k);
                    }
                },
                back: {
                    style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    fn: function(k) {
                        var b = 4;
                        return (k = k - 1) * k * ((b + 1) * k + b) + 1;
                    }
                },
                bounce: {
                    style: "",
                    fn: function(k) {
                        if ((k /= 1) < 1 / 2.75) {
                            return 7.5625 * k * k;
                        } else if (k < 2 / 2.75) {
                            return 7.5625 * (k -= 1.5 / 2.75) * k + .75;
                        } else if (k < 2.5 / 2.75) {
                            return 7.5625 * (k -= 2.25 / 2.75) * k + .9375;
                        } else {
                            return 7.5625 * (k -= 2.625 / 2.75) * k + .984375;
                        }
                    }
                },
                elastic: {
                    style: "",
                    fn: function(k) {
                        var f = .22, e = .4;
                        if (k === 0) {
                            return 0;
                        }
                        if (k == 1) {
                            return 1;
                        }
                        return e * Math.pow(2, -10 * k) * Math.sin((k - f / 4) * 2 * Math.PI / f) + 1;
                    }
                }
            });
            me.tap = function(e, eventName) {
                var ev = document.createEvent("Event");
                ev.initEvent(eventName, true, true);
                ev.pageX = e.pageX;
                ev.pageY = e.pageY;
                e.target.dispatchEvent(ev);
            };
            me.click = function(e) {
                var target = e.target, ev;
                if (!/(SELECT|INPUT|TEXTAREA)/i.test(target.tagName)) {
                    ev = document.createEvent("MouseEvents");
                    ev.initMouseEvent("click", true, true, e.view, 1, target.screenX, target.screenY, target.clientX, target.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
                    ev._constructed = true;
                    target.dispatchEvent(ev);
                }
            };
            return me;
        }();
        function IScroll(el, options) {
            this.wrapper = typeof el == "string" ? document.querySelector(el) : el;
            this.scroller = this.wrapper.children[0];
            this.scrollerStyle = this.scroller.style;
            // cache style for better performance
            this.options = {
                // INSERT POINT: OPTIONS
                startX: 0,
                startY: 0,
                scrollY: true,
                directionLockThreshold: 5,
                momentum: true,
                bounce: true,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: true,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: true,
                useTransition: true,
                useTransform: true
            };
            for (var i in options) {
                this.options[i] = options[i];
            }
            // Normalize options
            this.translateZ = this.options.HWCompositing && utils.hasPerspective ? " translateZ(0)" : "";
            this.options.useTransition = utils.hasTransition && this.options.useTransition;
            this.options.useTransform = utils.hasTransform && this.options.useTransform;
            this.options.eventPassthrough = this.options.eventPassthrough === true ? "vertical" : this.options.eventPassthrough;
            this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault;
            // If you want eventPassthrough I have to lock one of the axes
            this.options.scrollY = this.options.eventPassthrough == "vertical" ? false : this.options.scrollY;
            this.options.scrollX = this.options.eventPassthrough == "horizontal" ? false : this.options.scrollX;
            // With eventPassthrough we also need lockDirection mechanism
            this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough;
            this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold;
            this.options.bounceEasing = typeof this.options.bounceEasing == "string" ? utils.ease[this.options.bounceEasing] || utils.ease.circular : this.options.bounceEasing;
            this.options.resizePolling = this.options.resizePolling === undefined ? 60 : this.options.resizePolling;
            if (this.options.tap === true) {
                this.options.tap = "tap";
            }
            // INSERT POINT: NORMALIZATION
            // Some defaults
            this.x = 0;
            this.y = 0;
            this.directionX = 0;
            this.directionY = 0;
            this._events = {};
            // INSERT POINT: DEFAULTS
            this._init();
            this.refresh();
            this.scrollTo(this.options.startX, this.options.startY);
            this.enable();
        }
        IScroll.prototype = {
            version: "5.1.2",
            _init: function() {
                this._initEvents();
            },
            destroy: function() {
                this._initEvents(true);
                this._execEvent("destroy");
            },
            _transitionEnd: function(e) {
                if (e.target != this.scroller || !this.isInTransition) {
                    return;
                }
                this._transitionTime();
                if (!this.resetPosition(this.options.bounceTime)) {
                    this.isInTransition = false;
                    this._execEvent("scrollEnd");
                }
            },
            _start: function(e) {
                // React to left mouse button only
                if (utils.eventType[e.type] != 1) {
                    if (e.button !== 0) {
                        return;
                    }
                }
                if (!this.enabled || this.initiated && utils.eventType[e.type] !== this.initiated) {
                    return;
                }
                if (this.options.preventDefault && !utils.isBadAndroid && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                    e.preventDefault();
                }
                var point = e.touches ? e.touches[0] : e, pos;
                this.initiated = utils.eventType[e.type];
                this.moved = false;
                this.distX = 0;
                this.distY = 0;
                this.directionX = 0;
                this.directionY = 0;
                this.directionLocked = 0;
                this._transitionTime();
                this.startTime = utils.getTime();
                if (this.options.useTransition && this.isInTransition) {
                    this.isInTransition = false;
                    pos = this.getComputedPosition();
                    this._translate(Math.round(pos.x), Math.round(pos.y));
                    this._execEvent("scrollEnd");
                } else if (!this.options.useTransition && this.isAnimating) {
                    this.isAnimating = false;
                    this._execEvent("scrollEnd");
                }
                this.startX = this.x;
                this.startY = this.y;
                this.absStartX = this.x;
                this.absStartY = this.y;
                this.pointX = point.pageX;
                this.pointY = point.pageY;
                this._execEvent("beforeScrollStart");
            },
            _move: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }
                if (this.options.preventDefault) {
                    // increases performance on Android? TODO: check!
                    e.preventDefault();
                }
                var point = e.touches ? e.touches[0] : e, deltaX = point.pageX - this.pointX, deltaY = point.pageY - this.pointY, timestamp = utils.getTime(), newX, newY, absDistX, absDistY;
                this.pointX = point.pageX;
                this.pointY = point.pageY;
                this.distX += deltaX;
                this.distY += deltaY;
                absDistX = Math.abs(this.distX);
                absDistY = Math.abs(this.distY);
                // We need to move at least 10 pixels for the scrolling to initiate
                if (timestamp - this.endTime > 300 && absDistX < 10 && absDistY < 10) {
                    return;
                }
                // If you are scrolling in one direction lock the other
                if (!this.directionLocked && !this.options.freeScroll) {
                    if (absDistX > absDistY + this.options.directionLockThreshold) {
                        this.directionLocked = "h";
                    } else if (absDistY >= absDistX + this.options.directionLockThreshold) {
                        this.directionLocked = "v";
                    } else {
                        this.directionLocked = "n";
                    }
                }
                if (this.directionLocked == "h") {
                    if (this.options.eventPassthrough == "vertical") {
                        e.preventDefault();
                    } else if (this.options.eventPassthrough == "horizontal") {
                        this.initiated = false;
                        return;
                    }
                    deltaY = 0;
                } else if (this.directionLocked == "v") {
                    if (this.options.eventPassthrough == "horizontal") {
                        e.preventDefault();
                    } else if (this.options.eventPassthrough == "vertical") {
                        this.initiated = false;
                        return;
                    }
                    deltaX = 0;
                }
                deltaX = this.hasHorizontalScroll ? deltaX : 0;
                deltaY = this.hasVerticalScroll ? deltaY : 0;
                newX = this.x + deltaX;
                newY = this.y + deltaY;
                // Slow down if outside of the boundaries
                if (newX > 0 || newX < this.maxScrollX) {
                    newX = this.options.bounce ? this.x + deltaX / 3 : newX > 0 ? 0 : this.maxScrollX;
                }
                if (newY > 0 || newY < this.maxScrollY) {
                    newY = this.options.bounce ? this.y + deltaY / 3 : newY > 0 ? 0 : this.maxScrollY;
                }
                this.directionX = deltaX > 0 ? -1 : deltaX < 0 ? 1 : 0;
                this.directionY = deltaY > 0 ? -1 : deltaY < 0 ? 1 : 0;
                if (!this.moved) {
                    this._execEvent("scrollStart");
                }
                this.moved = true;
                this._translate(newX, newY);
                /* REPLACE START: _move */
                if (timestamp - this.startTime > 300) {
                    this.startTime = timestamp;
                    this.startX = this.x;
                    this.startY = this.y;
                }
            },
            _end: function(e) {
                if (!this.enabled || utils.eventType[e.type] !== this.initiated) {
                    return;
                }
                if (this.options.preventDefault && !utils.preventDefaultException(e.target, this.options.preventDefaultException)) {
                    e.preventDefault();
                }
                var point = e.changedTouches ? e.changedTouches[0] : e, momentumX, momentumY, duration = utils.getTime() - this.startTime, newX = Math.round(this.x), newY = Math.round(this.y), distanceX = Math.abs(newX - this.startX), distanceY = Math.abs(newY - this.startY), time = 0, easing = "";
                this.isInTransition = 0;
                this.initiated = 0;
                this.endTime = utils.getTime();
                // reset if we are outside of the boundaries
                if (this.resetPosition(this.options.bounceTime)) {
                    return;
                }
                this.scrollTo(newX, newY);
                // ensures that the last position is rounded
                // we scrolled less than 10 pixels
                if (!this.moved) {
                    if (this.options.tap) {
                        utils.tap(e, this.options.tap);
                    }
                    if (this.options.click) {
                        utils.click(e);
                    }
                    this._execEvent("scrollCancel");
                    return;
                }
                if (this._events.flick && duration < 200 && distanceX < 100 && distanceY < 100) {
                    this._execEvent("flick");
                    return;
                }
                // start momentum animation if needed
                if (this.options.momentum && duration < 300) {
                    momentumX = this.hasHorizontalScroll ? utils.momentum(this.x, this.startX, duration, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                        destination: newX,
                        duration: 0
                    };
                    momentumY = this.hasVerticalScroll ? utils.momentum(this.y, this.startY, duration, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                        destination: newY,
                        duration: 0
                    };
                    newX = momentumX.destination;
                    newY = momentumY.destination;
                    time = Math.max(momentumX.duration, momentumY.duration);
                    this.isInTransition = 1;
                }
                // INSERT POINT: _end
                if (newX != this.x || newY != this.y) {
                    // change easing function when scroller goes out of the boundaries
                    if (newX > 0 || newX < this.maxScrollX || newY > 0 || newY < this.maxScrollY) {
                        easing = utils.ease.quadratic;
                    }
                    this.scrollTo(newX, newY, time, easing);
                    return;
                }
                this._execEvent("scrollEnd");
            },
            _resize: function() {
                var that = this;
                clearTimeout(this.resizeTimeout);
                this.resizeTimeout = setTimeout(function() {
                    that.refresh();
                }, this.options.resizePolling);
            },
            resetPosition: function(time) {
                var x = this.x, y = this.y;
                time = time || 0;
                if (!this.hasHorizontalScroll || this.x > 0) {
                    x = 0;
                } else if (this.x < this.maxScrollX) {
                    x = this.maxScrollX;
                }
                if (!this.hasVerticalScroll || this.y > 0) {
                    y = 0;
                } else if (this.y < this.maxScrollY) {
                    y = this.maxScrollY;
                }
                if (x == this.x && y == this.y) {
                    return false;
                }
                this.scrollTo(x, y, time, this.options.bounceEasing);
                return true;
            },
            disable: function() {
                this.enabled = false;
            },
            enable: function() {
                this.enabled = true;
            },
            refresh: function() {
                var rf = this.wrapper.offsetHeight;
                // Force reflow
                this.wrapperWidth = this.wrapper.clientWidth;
                this.wrapperHeight = this.wrapper.clientHeight;
                /* REPLACE START: refresh */
                this.scrollerWidth = this.scroller.offsetWidth;
                this.scrollerHeight = this.scroller.offsetHeight;
                this.maxScrollX = this.wrapperWidth - this.scrollerWidth;
                this.maxScrollY = this.wrapperHeight - this.scrollerHeight;
                /* REPLACE END: refresh */
                this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0;
                this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0;
                if (!this.hasHorizontalScroll) {
                    this.maxScrollX = 0;
                    this.scrollerWidth = this.wrapperWidth;
                }
                if (!this.hasVerticalScroll) {
                    this.maxScrollY = 0;
                    this.scrollerHeight = this.wrapperHeight;
                }
                this.endTime = 0;
                this.directionX = 0;
                this.directionY = 0;
                this.wrapperOffset = utils.offset(this.wrapper);
                this._execEvent("refresh");
                this.resetPosition();
            },
            on: function(type, fn) {
                if (!this._events[type]) {
                    this._events[type] = [];
                }
                this._events[type].push(fn);
            },
            off: function(type, fn) {
                if (!this._events[type]) {
                    return;
                }
                var index = this._events[type].indexOf(fn);
                if (index > -1) {
                    this._events[type].splice(index, 1);
                }
            },
            _execEvent: function(type) {
                if (!this._events[type]) {
                    return;
                }
                var i = 0, l = this._events[type].length;
                if (!l) {
                    return;
                }
                for (;i < l; i++) {
                    this._events[type][i].apply(this, [].slice.call(arguments, 1));
                }
            },
            scrollBy: function(x, y, time, easing) {
                x = this.x + x;
                y = this.y + y;
                time = time || 0;
                this.scrollTo(x, y, time, easing);
            },
            scrollTo: function(x, y, time, easing) {
                easing = easing || utils.ease.circular;
                this.isInTransition = this.options.useTransition && time > 0;
                if (!time || this.options.useTransition && easing.style) {
                    this._transitionTimingFunction(easing.style);
                    this._transitionTime(time);
                    this._translate(x, y);
                } else {
                    this._animate(x, y, time, easing.fn);
                }
            },
            scrollToElement: function(el, time, offsetX, offsetY, easing) {
                el = el.nodeType ? el : this.scroller.querySelector(el);
                if (!el) {
                    return;
                }
                var pos = utils.offset(el);
                pos.left -= this.wrapperOffset.left;
                pos.top -= this.wrapperOffset.top;
                // if offsetX/Y are true we center the element to the screen
                if (offsetX === true) {
                    offsetX = Math.round(el.offsetWidth / 2 - this.wrapper.offsetWidth / 2);
                }
                if (offsetY === true) {
                    offsetY = Math.round(el.offsetHeight / 2 - this.wrapper.offsetHeight / 2);
                }
                pos.left -= offsetX || 0;
                pos.top -= offsetY || 0;
                pos.left = pos.left > 0 ? 0 : pos.left < this.maxScrollX ? this.maxScrollX : pos.left;
                pos.top = pos.top > 0 ? 0 : pos.top < this.maxScrollY ? this.maxScrollY : pos.top;
                time = time === undefined || time === null || time === "auto" ? Math.max(Math.abs(this.x - pos.left), Math.abs(this.y - pos.top)) : time;
                this.scrollTo(pos.left, pos.top, time, easing);
            },
            _transitionTime: function(time) {
                time = time || 0;
                this.scrollerStyle[utils.style.transitionDuration] = time + "ms";
                if (!time && utils.isBadAndroid) {
                    this.scrollerStyle[utils.style.transitionDuration] = "0.001s";
                }
            },
            _transitionTimingFunction: function(easing) {
                this.scrollerStyle[utils.style.transitionTimingFunction] = easing;
            },
            _translate: function(x, y) {
                if (this.options.useTransform) {
                    /* REPLACE START: _translate */
                    this.scrollerStyle[utils.style.transform] = "translate(" + x + "px," + y + "px)" + this.translateZ;
                } else {
                    x = Math.round(x);
                    y = Math.round(y);
                    this.scrollerStyle.left = x + "px";
                    this.scrollerStyle.top = y + "px";
                }
                this.x = x;
                this.y = y;
            },
            _initEvents: function(remove) {
                var eventType = remove ? utils.removeEvent : utils.addEvent, target = this.options.bindToWrapper ? this.wrapper : window;
                eventType(window, "orientationchange", this);
                eventType(window, "resize", this);
                if (this.options.click) {
                    eventType(this.wrapper, "click", this, true);
                }
                if (!this.options.disableMouse) {
                    eventType(this.wrapper, "mousedown", this);
                    eventType(target, "mousemove", this);
                    eventType(target, "mousecancel", this);
                    eventType(target, "mouseup", this);
                }
                if (utils.hasPointer && !this.options.disablePointer) {
                    eventType(this.wrapper, utils.prefixPointerEvent("pointerdown"), this);
                    eventType(target, utils.prefixPointerEvent("pointermove"), this);
                    eventType(target, utils.prefixPointerEvent("pointercancel"), this);
                    eventType(target, utils.prefixPointerEvent("pointerup"), this);
                }
                if (utils.hasTouch && !this.options.disableTouch) {
                    eventType(this.wrapper, "touchstart", this);
                    eventType(target, "touchmove", this);
                    eventType(target, "touchcancel", this);
                    eventType(target, "touchend", this);
                }
                eventType(this.scroller, "transitionend", this);
                eventType(this.scroller, "webkitTransitionEnd", this);
                eventType(this.scroller, "oTransitionEnd", this);
                eventType(this.scroller, "MSTransitionEnd", this);
            },
            getComputedPosition: function() {
                var matrix = window.getComputedStyle(this.scroller, null), x, y;
                if (this.options.useTransform) {
                    matrix = matrix[utils.style.transform].split(")")[0].split(", ");
                    x = +(matrix[12] || matrix[4]);
                    y = +(matrix[13] || matrix[5]);
                } else {
                    x = +matrix.left.replace(/[^-\d.]/g, "");
                    y = +matrix.top.replace(/[^-\d.]/g, "");
                }
                return {
                    x: x,
                    y: y
                };
            },
            _animate: function(destX, destY, duration, easingFn) {
                var that = this, startX = this.x, startY = this.y, startTime = utils.getTime(), destTime = startTime + duration;
                function step() {
                    var now = utils.getTime(), newX, newY, easing;
                    if (now >= destTime) {
                        that.isAnimating = false;
                        that._translate(destX, destY);
                        if (!that.resetPosition(that.options.bounceTime)) {
                            that._execEvent("scrollEnd");
                        }
                        return;
                    }
                    now = (now - startTime) / duration;
                    easing = easingFn(now);
                    newX = (destX - startX) * easing + startX;
                    newY = (destY - startY) * easing + startY;
                    that._translate(newX, newY);
                    if (that.isAnimating) {
                        rAF(step);
                    }
                }
                this.isAnimating = true;
                step();
            },
            handleEvent: function(e) {
                switch (e.type) {
                  case "touchstart":
                  case "pointerdown":
                  case "MSPointerDown":
                  case "mousedown":
                    this._start(e);
                    break;

                  case "touchmove":
                  case "pointermove":
                  case "MSPointerMove":
                  case "mousemove":
                    this._move(e);
                    break;

                  case "touchend":
                  case "pointerup":
                  case "MSPointerUp":
                  case "mouseup":
                  case "touchcancel":
                  case "pointercancel":
                  case "MSPointerCancel":
                  case "mousecancel":
                    this._end(e);
                    break;

                  case "orientationchange":
                  case "resize":
                    this._resize();
                    break;

                  case "transitionend":
                  case "webkitTransitionEnd":
                  case "oTransitionEnd":
                  case "MSTransitionEnd":
                    this._transitionEnd(e);
                    break;

                  case "wheel":
                  case "DOMMouseScroll":
                  case "mousewheel":
                    this._wheel(e);
                    break;

                  case "keydown":
                    this._key(e);
                    break;

                  case "click":
                    if (!e._constructed) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
            }
        };
        IScroll.utils = utils;
        if (typeof module != "undefined" && module.exports) {
            module.exports = IScroll;
        } else {
            window.IScroll = IScroll;
        }
    })(window, document, Math);
});
define("ui.modal", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "ui.dimmer" ], function(require, exports, module) {
    require("core");
    var dimmer = require("ui.dimmer");
    var $ = window.Zepto;
    var UI = $.AMUI;
    var $win = $(window), $doc = $(document), $body = $("body"), supportTransition = UI.support.transition;
    /**
     * @reference https://github.com/nolimits4web/Framework7/blob/master/src/js/modals.js
     * @license https://github.com/nolimits4web/Framework7/blob/master/LICENSE
     */
    var Modal = function(element, options) {
        this.options = $.extend({}, Modal.DEFAULTS, options || {});
        this.$element = $(element);
        this.isPopup = this.$element.hasClass("am-popup");
        this.active = this.transitioning = null;
        this.events();
    };
    // Set template tabindex to tigger onfocus on div
    Modal.DEFAULTS = {
        selector: {
            modal: ".am-modal",
            active: ".am-modal-active"
        },
        cancelable: true,
        onConfirm: function() {},
        onCancel: function() {}
    };
    Modal.prototype.toggle = function(relatedElement) {
        return this.active ? this.close() : this.open(relatedElement);
    };
    Modal.prototype.open = function(relatedElement) {
        var $element = this.$element, isPopup = this.isPopup;
        if (this.transitioning || this.active) return;
        if (!this.$element.length) return;
        isPopup && this.$element.show();
        this.active = true;
        $element.trigger($.Event("open:modal:amui", {
            relatedElement: relatedElement
        }));
        // trigger reflow;
        var clientLeft = $element[0].clientLeft;
        dimmer.open();
        $element.show();
        !isPopup && $element.redraw().css({
            marginTop: -$element.height() / 2 + "px"
        });
        $element.removeClass("am-modal-out").addClass("am-modal-active");
        this.transitioning = 1;
        var complete = function() {
            $element.trigger($.Event("opened:modal:amui", {
                relatedElement: relatedElement
            }));
            this.transitioning = 0;
        };
        if (!supportTransition) return complete.call(this);
        $element.one(supportTransition.end, $.proxy(complete, this));
    };
    Modal.prototype.close = function(relatedElement) {
        if (this.transitioning || !this.active) return;
        var $element = this.$element, isPopup = this.isPopup, that = this;
        this.$element.trigger($.Event("close:modal:amui", {
            relatedElement: relatedElement
        }));
        this.transitioning = 1;
        var complete = function() {
            $element.trigger("closed:amui:modal");
            isPopup && $element.removeClass("am-modal-out");
            $element.hide();
            this.transitioning = 0;
        };
        $element.removeClass("am-modal-active").addClass("am-modal-out");
        if (!supportTransition) return complete.call(this);
        $element.one(supportTransition.end, $.proxy(complete, this));
        // hide dimmer when all modal is closed
        if (!$body.find(Modal.DEFAULTS.selector.active).length) {
            dimmer.close();
        }
        this.active = false;
    };
    Modal.prototype.events = function() {
        var that = this, $element = this.$element, $ipt = $element.find(".am-modal-prompt-input");
        if (this.options.cancelable) {
            $element.on("keyup.modal.amui", $.proxy(function(e) {
                if (this.active && e.which === 27) {
                    this.options.onCancel();
                    this.close();
                }
            }, that));
            dimmer.$element.on("click", function(e) {
                that.close();
            });
        }
        // Close button
        $element.find("[data-am-modal-close]").on("click.modal.amui", function(e) {
            e.preventDefault();
            that.close();
        });
        $element.find(".am-modal-btn").on("click.modal.amui", function(e) {
            that.close();
        });
        $element.find("[data-am-modal-confirm]").on("click.modal.amui", function() {
            that.options.onConfirm($ipt.val());
        });
        $element.find("[data-am-modal-cancel]").on("click.modal.amui", function() {
            that.options.onCancel($ipt.val());
        });
    };
    function Plugin(option, relatedElement) {
        return this.each(function() {
            var $this = $(this), data = $this.data("am.modal"), options = $.extend({}, Modal.DEFAULTS, typeof option == "object" && option);
            if (!data) {
                $this.data("am.modal", data = new Modal(this, options));
            }
            if (typeof option == "string") {
                data[option](relatedElement);
            } else {
                data.toggle(option && option.relatedElement || undefined);
            }
        });
    }
    $.fn.modal = Plugin;
    $doc.on("click", "[data-am-modal]", function() {
        var $this = $(this), options = UI.utils.parseOptions($this.attr("data-am-modal")), $target = $(options.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, "")), option = $target.data("am.modal") ? "toggle" : options;
        Plugin.call($target, option, this);
    });
    module.exports = Modal;
});
define("ui.offcanvas", [ "zepto.outerdemension", "zepto.extend.data", "core", "zepto.extend.fx", "zepto.extend.selector" ], function(require, exports, module) {
    require("zepto.outerdemension");
    require("zepto.extend.data");
    require("core");
    var $ = window.Zepto, UI = $.AMUI, $win = $(window), $doc = $(document), scrollPos;
    /**
     * @via https://github.com/uikit/uikit/blob/master/src/js/offcanvas.js
     * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
     */
    var OffCanvas = function(element, options) {
        this.$element = $(element);
        this.options = options;
        this.events();
    };
    OffCanvas.DEFAULTS = {
        effect: "overlay"
    };
    OffCanvas.prototype.open = function(relatedElement) {
        var _self = this, $element = this.$element, openEvent = $.Event("open:offcanvas:amui");
        if (!$element.length || $element.hasClass("am-active")) return;
        var effect = this.options.effect, $html = $("html"), $bar = $element.find(".am-offcanvas-bar").first(), dir = $bar.hasClass("am-offcanvas-bar-flip") ? -1 : 1;
        $bar.addClass("am-offcanvas-bar-" + effect);
        scrollPos = {
            x: window.scrollX,
            y: window.scrollY
        };
        $element.addClass("am-active");
        $html.css({
            width: "100%",
            height: $win.height()
        }).addClass("am-offcanvas-page");
        if (!(effect === "overlay")) {
            $html.css({
                "margin-left": $bar.outerWidth() * dir
            }).width();
        }
        $html.css("margin-top", scrollPos.y * -1);
        UI.utils.debounce(function() {
            $bar.addClass("am-offcanvas-bar-active").width();
        }, 0)();
        $doc.trigger(openEvent);
        $element.off(".offcanvas.amui").on("click.offcanvas.amui swipeRight.offcanvas.amui swipeLeft.offcanvas.amui", function(e) {
            var $target = $(e.target);
            if (!e.type.match(/swipe/)) {
                if ($target.hasClass("am-offcanvas-bar")) return;
                if ($target.parents(".am-offcanvas-bar").first().length) return;
            }
            // https://developer.mozilla.org/zh-CN/docs/DOM/event.stopImmediatePropagation
            e.stopImmediatePropagation();
            _self.close();
        });
        $doc.on("keydown.offcanvas.amui", function(e) {
            if (e.keyCode === 27) {
                // ESC
                _self.close();
            }
        });
    };
    OffCanvas.prototype.close = function(relatedElement) {
        var $html = $("html"), $element = this.$element, $bar = $element.find(".am-offcanvas-bar").first();
        if (!$element.length || !$element.hasClass("am-active")) return;
        $element.trigger("close:offcanvas:amui");
        if (UI.support.transition) {
            $html.one(UI.support.transition.end, function() {
                $html.removeClass("am-offcanvas-page").css({
                    width: "",
                    height: "",
                    "margin-top": ""
                });
                $element.removeClass("am-active");
                window.scrollTo(scrollPos.x, scrollPos.y);
            }).css("margin-left", "");
            UI.utils.debounce(function() {
                $bar.removeClass("am-offcanvas-bar-active");
            }, 0)();
        } else {
            $html.removeClass("am-offcanvas-page").attr("style", "");
            $element.removeClass("am-active");
            $bar.removeClass("am-offcanvas-bar-active");
            window.scrollTo(scrollPos.x, scrollPos.y);
        }
        $element.off(".offcanvas.amui");
    };
    OffCanvas.prototype.events = function() {
        $doc.on("click.offcanvas.amui", '[data-am-dismiss="offcanvas"]', $.proxy(function(e) {
            e.preventDefault();
            this.close();
        }, this));
        return this;
    };
    UI.offcanvas = OffCanvas;
    function Plugin(option, relatedElement) {
        return this.each(function() {
            var $this = $(this), data = $this.data("am.offcanvas"), options = $.extend({}, OffCanvas.DEFAULTS, typeof option == "object" && option);
            if (!data) {
                $this.data("am.offcanvas", data = new OffCanvas(this, options));
                data.open(relatedElement);
            }
            if (typeof option == "string") {
                data[option] && data[option](relatedElement);
            }
        });
    }
    $.fn.offCanvas = Plugin;
    // Init code
    $doc.on("click.offcanvas.amui", "[data-am-offcanvas]", function(e) {
        e.preventDefault();
        var $this = $(this), options = UI.utils.parseOptions($this.attr("data-am-offcanvas")), $target = $(options.target || this.href && this.href.replace(/.*(?=#[^\s]+$)/, ""));
        option = $target.data("am.offcanvas") ? "open" : options;
        Plugin.call($target, option, this);
    });
    module.exports = OffCanvas;
});
define("ui.popover", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto, UI = $.AMUI, $w = $(window), $doc = $(document);
    /**
     * @reference https://github.com/nolimits4web/Framework7/blob/master/src/js/modals.js
     * @license https://github.com/nolimits4web/Framework7/blob/master/LICENSE
     */
    var Popover = function(element, options) {
        this.options = $.extend({}, Popover.DEFAULTS, options || {});
        this.$element = $(element);
        this.active = null;
        this.$popover = this.options.target && $(this.options.target) || null;
        this.init();
        this.events();
    };
    Popover.DEFAULTS = {
        trigger: "click",
        content: "",
        open: false,
        target: undefined,
        tpl: '<div class="am-popover"><div class="am-popover-inner"></div><div class="am-popover-caret"></div></div>'
    };
    Popover.prototype.init = function() {
        var $element = this.$element, $popover;
        if (!this.options.target) {
            this.$popover = this.getPopover();
            this.setContent();
        }
        $popover = this.$popover;
        $popover.appendTo($("body"));
        function sizePopover() {
            var popSize = $popover.getSize(), popWidth = $popover.width() || popSize.width, popHeight = $popover.height() || popSize.height, $popCaret = $popover.find(".am-popover-caret"), popCaretSize = $popCaret.width() / 2 || 10, popTotalHeight = popHeight + popCaretSize;
            var triggerWidth = $element.outerWidth(), triggerHeight = $element.outerHeight(), triggerOffset = $element.offset(), triggerRect = $element[0].getBoundingClientRect();
            var winHeight = $w.height(), winWidth = $w.width();
            var popTop = 0, popLeft = 0, diff = 0, spacing = 3, popPosition = "top";
            $popover.css({
                left: "",
                top: ""
            }).removeClass("am-popover-left am-popover-right am-popover-top am-popover-bottom");
            $popCaret.css({
                left: "",
                top: ""
            });
            if (popTotalHeight - spacing < triggerRect.top + spacing) {
                // on Top
                popTop = triggerOffset.top - popTotalHeight - spacing;
            } else if (popTotalHeight < winHeight - triggerRect.top - triggerRect.height) {
                // On bottom
                popPosition = "bottom";
                popTop = triggerOffset.top + triggerHeight + popCaretSize + spacing;
            } else {
                // On middle
                popPosition = "middle";
                popTop = triggerHeight / 2 + triggerOffset.top - popHeight / 2;
            }
            // Horizontal Position
            if (popPosition === "top" || popPosition === "bottom") {
                popLeft = triggerWidth / 2 + triggerOffset.left - popWidth / 2;
                diff = popLeft;
                if (popLeft < 5) popLeft = 5;
                if (popLeft + popWidth > winWidth) {
                    popLeft = winWidth - popWidth - 20;
                }
                if (popPosition === "top") $popover.addClass("am-popover-bottom");
                if (popPosition === "bottom") $popover.addClass("am-popover-top");
                diff = diff - popLeft;
                $popCaret.css({
                    left: popWidth / 2 - popCaretSize + diff + "px"
                });
            } else if (popPosition === "middle") {
                popLeft = triggerOffset.left - popWidth - popCaretSize;
                $popover.addClass("am-popover-left");
                if (popLeft < 5) {
                    popLeft = triggerOffset.left + triggerWidth + popCaretSize;
                    $popover.removeClass("am-popover-left").addClass("am-popover-right");
                }
                if (popLeft + popWidth > winWidth) {
                    popLeft = winWidth - popWidth - 5;
                    $popover.removeClass("am-popover-left").addClass("am-popover-right");
                }
                $popCaret.css({
                    top: popHeight / 2 - popCaretSize / 2 + "px"
                });
            }
            // Apply position style
            $popover.css({
                top: popTop + "px",
                left: popLeft + "px"
            });
        }
        sizePopover();
        $(window).on("resize", UI.utils.debounce(sizePopover, 50));
        $element.on("open:popover:amui", function() {
            $(window).on("resize", UI.utils.debounce(sizePopover, 50));
        });
        $element.on("close:popover:amui", function() {
            $(window).off("resize", sizePopover);
        });
        this.options.open && this.open();
    };
    Popover.prototype.toggle = function() {
        return this[this.active ? "close" : "open"]();
    };
    Popover.prototype.open = function() {
        var $popover = this.$popover;
        this.$element.trigger("open:popover:amui");
        $popover.show().addClass("am-active");
        this.active = true;
    };
    Popover.prototype.close = function() {
        var $popover = this.$popover;
        this.$element.trigger("close:popover:amui");
        $popover.removeClass("am-active").trigger("closed:popover:amui").hide();
        this.active = false;
    };
    Popover.prototype.getUID = function() {
        var ns = "am-popover-";
        do {
            ns += parseInt(Math.random() * 1e6);
        } while (document.getElementById(ns));
        return ns;
    };
    Popover.prototype.getPopover = function() {
        var uid = this.getUID();
        return $(this.options.tpl, {
            id: uid
        });
    };
    Popover.prototype.setContent = function() {
        this.$popover && this.$popover.find(".am-popover-inner").empty().html(this.options.content);
    };
    Popover.prototype.events = function() {
        var trigger = this.options.trigger, eventNS = "popover.amui";
        if (trigger === "click") {
            this.$element.on("click." + eventNS, $.proxy(this.toggle, this));
        } else if (trigger === "hover") {
            this.$element.on("mouseenter." + eventNS, $.proxy(this.open, this));
            this.$element.on("mouseleave." + eventNS, $.proxy(this.close, this));
        }
    };
    UI.popover = Popover;
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("am.popover"), options = $.extend({}, UI.utils.parseOptions($this.attr("data-am-popover")), typeof option == "object" && option);
            if (!data) {
                $this.data("am.popover", data = new Popover(this, options));
            }
            if (typeof option == "string") {
                data[option]();
            }
        });
    }
    $.fn.popover = Plugin;
    // Init code
    $(function() {
        $("[data-am-popover]").popover();
    });
    module.exports = Popover;
});
define("ui.progress", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    var Progress = function() {
        /**
         * NProgress (c) 2013, Rico Sta. Cruz
         * @via http://ricostacruz.com/nprogress
         */
        var NProgress = {}, $html = $("html");
        NProgress.version = "0.1.6";
        var Settings = NProgress.settings = {
            minimum: .08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: true,
            trickleRate: .02,
            trickleSpeed: 800,
            showSpinner: true,
            parent: "body",
            barSelector: '[role="nprogress-bar"]',
            spinnerSelector: '[role="nprogress-spinner"]',
            template: '<div class="nprogress-bar" role="nprogress-bar">' + '<div class="nprogress-peg"></div></div>' + '<div class="nprogress-spinner" role="nprogress-spinner">' + '<div class="nprogress-spinner-icon"></div></div>'
        };
        /**
         * Updates configuration.
         *
         *     NProgress.configure({
   *       minimum: 0.1
   *     });
         */
        NProgress.configure = function(options) {
            var key, value;
            for (key in options) {
                value = options[key];
                if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
            }
            return this;
        };
        /**
         * Last number.
         */
        NProgress.status = null;
        /**
         * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
         *
         *     NProgress.set(0.4);
         *     NProgress.set(1.0);
         */
        NProgress.set = function(n) {
            var started = NProgress.isStarted();
            n = clamp(n, Settings.minimum, 1);
            NProgress.status = n === 1 ? null : n;
            var progress = NProgress.render(!started), bar = progress.querySelector(Settings.barSelector), speed = Settings.speed, ease = Settings.easing;
            progress.offsetWidth;
            /* Repaint */
            queue(function(next) {
                // Set positionUsing if it hasn't already been set
                if (Settings.positionUsing === "") Settings.positionUsing = NProgress.getPositioningCSS();
                // Add transition
                css(bar, barPositionCSS(n, speed, ease));
                if (n === 1) {
                    // Fade out
                    css(progress, {
                        transition: "none",
                        opacity: 1
                    });
                    progress.offsetWidth;
                    /* Repaint */
                    setTimeout(function() {
                        css(progress, {
                            transition: "all " + speed + "ms linear",
                            opacity: 0
                        });
                        setTimeout(function() {
                            NProgress.remove();
                            next();
                        }, speed);
                    }, speed);
                } else {
                    setTimeout(next, speed);
                }
            });
            return this;
        };
        NProgress.isStarted = function() {
            return typeof NProgress.status === "number";
        };
        /**
         * Shows the progress bar.
         * This is the same as setting the status to 0%, except that it doesn't go backwards.
         *
         *     NProgress.start();
         *
         */
        NProgress.start = function() {
            if (!NProgress.status) NProgress.set(0);
            var work = function() {
                setTimeout(function() {
                    if (!NProgress.status) return;
                    NProgress.trickle();
                    work();
                }, Settings.trickleSpeed);
            };
            if (Settings.trickle) work();
            return this;
        };
        /**
         * Hides the progress bar.
         * This is the *sort of* the same as setting the status to 100%, with the
         * difference being `done()` makes some placebo effect of some realistic motion.
         *
         *     NProgress.done();
         *
         * If `true` is passed, it will show the progress bar even if its hidden.
         *
         *     NProgress.done(true);
         */
        NProgress.done = function(force) {
            if (!force && !NProgress.status) return this;
            return NProgress.inc(.3 + .5 * Math.random()).set(1);
        };
        /**
         * Increments by a random amount.
         */
        NProgress.inc = function(amount) {
            var n = NProgress.status;
            if (!n) {
                return NProgress.start();
            } else {
                if (typeof amount !== "number") {
                    amount = (1 - n) * clamp(Math.random() * n, .1, .95);
                }
                n = clamp(n + amount, 0, .994);
                return NProgress.set(n);
            }
        };
        NProgress.trickle = function() {
            return NProgress.inc(Math.random() * Settings.trickleRate);
        };
        /**
         * (Internal) renders the progress bar markup based on the `template`
         * setting.
         */
        NProgress.render = function(fromStart) {
            if (NProgress.isRendered()) return document.getElementById("nprogress");
            $html.addClass("nprogress-busy");
            var progress = document.createElement("div");
            progress.id = "nprogress";
            progress.innerHTML = Settings.template;
            var bar = progress.querySelector(Settings.barSelector), perc = fromStart ? "-100" : toBarPerc(NProgress.status || 0), parent = document.querySelector(Settings.parent), spinner;
            css(bar, {
                transition: "all 0 linear",
                transform: "translate3d(" + perc + "%,0,0)"
            });
            if (!Settings.showSpinner) {
                spinner = progress.querySelector(Settings.spinnerSelector);
                spinner && $(spinner).remove();
            }
            if (parent != document.body) {
                $(parent).addClass("nprogress-custom-parent");
            }
            parent.appendChild(progress);
            return progress;
        };
        /**
         * Removes the element. Opposite of render().
         */
        NProgress.remove = function() {
            $html.removeClass("nprogress-busy");
            $(Settings.parent).removeClass("nprogress-custom-parent");
            var progress = document.getElementById("nprogress");
            progress && $(progress).remove();
        };
        /**
         * Checks if the progress bar is rendered.
         */
        NProgress.isRendered = function() {
            return !!document.getElementById("nprogress");
        };
        /**
         * Determine which positioning CSS rule to use.
         */
        NProgress.getPositioningCSS = function() {
            // Sniff on document.body.style
            var bodyStyle = document.body.style;
            // Sniff prefixes
            var vendorPrefix = "WebkitTransform" in bodyStyle ? "Webkit" : "MozTransform" in bodyStyle ? "Moz" : "msTransform" in bodyStyle ? "ms" : "OTransform" in bodyStyle ? "O" : "";
            if (vendorPrefix + "Perspective" in bodyStyle) {
                // Modern browsers with 3D support, e.g. Webkit, IE10
                return "translate3d";
            } else if (vendorPrefix + "Transform" in bodyStyle) {
                // Browsers without 3D support, e.g. IE9
                return "translate";
            } else {
                // Browsers without translate() support, e.g. IE7-8
                return "margin";
            }
        };
        /**
         * Helpers
         */
        function clamp(n, min, max) {
            if (n < min) return min;
            if (n > max) return max;
            return n;
        }
        /**
         * (Internal) converts a percentage (`0..1`) to a bar translateX
         * percentage (`-100%..0%`).
         */
        function toBarPerc(n) {
            return (-1 + n) * 100;
        }
        /**
         * (Internal) returns the correct CSS for changing the bar's
         * position given an n percentage, and speed and ease from Settings
         */
        function barPositionCSS(n, speed, ease) {
            var barCSS;
            if (Settings.positionUsing === "translate3d") {
                barCSS = {
                    transform: "translate3d(" + toBarPerc(n) + "%,0,0)"
                };
            } else if (Settings.positionUsing === "translate") {
                barCSS = {
                    transform: "translate(" + toBarPerc(n) + "%,0)"
                };
            } else {
                barCSS = {
                    "margin-left": toBarPerc(n) + "%"
                };
            }
            barCSS.transition = "all " + speed + "ms " + ease;
            return barCSS;
        }
        /**
         * (Internal) Queues a function to be executed.
         */
        var queue = function() {
            var pending = [];
            function next() {
                var fn = pending.shift();
                if (fn) {
                    fn(next);
                }
            }
            return function(fn) {
                pending.push(fn);
                if (pending.length == 1) next();
            };
        }();
        /**
         * (Internal) Applies css properties to an element, similar to the jQuery
         * css method.
         *
         * While this helper does assist with vendor prefixed property names, it
         * does not perform any manipulation of values prior to setting styles.
         */
        var css = function() {
            var cssPrefixes = [ "Webkit", "O", "Moz", "ms" ], cssProps = {};
            function camelCase(string) {
                return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
                    return letter.toUpperCase();
                });
            }
            function getVendorProp(name) {
                var style = document.body.style;
                if (name in style) return name;
                var i = cssPrefixes.length, capName = name.charAt(0).toUpperCase() + name.slice(1), vendorName;
                while (i--) {
                    vendorName = cssPrefixes[i] + capName;
                    if (vendorName in style) return vendorName;
                }
                return name;
            }
            function getStyleProp(name) {
                name = camelCase(name);
                return cssProps[name] || (cssProps[name] = getVendorProp(name));
            }
            function applyCss(element, prop, value) {
                prop = getStyleProp(prop);
                element.style[prop] = value;
            }
            return function(element, properties) {
                var args = arguments, prop, value;
                if (args.length == 2) {
                    for (prop in properties) {
                        value = properties[prop];
                        if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
                    }
                } else {
                    applyCss(element, args[1], args[2]);
                }
            };
        }();
        return NProgress;
    }();
    UI.progress = Progress;
    module.exports = Progress;
});
define("ui.pureview", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "zepto.pinchzoom" ], function(require, exports, module) {
    require("core");
    var PinchZoom = require("zepto.pinchzoom"), $ = window.Zepto, UI = $.AMUI, animation = UI.support.animation, transition = UI.support.transition, $html = $("html");
    var PureView = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, PureView.DEFAULTS, options);
        this.$pureview = $(this.options.tpl, {
            id: UI.utils.generateGUID("am-pureview")
        });
        this.$slides = null;
        this.transitioning = null;
        this.init();
    };
    PureView.DEFAULTS = {
        tpl: '<div class="am-pureview">' + '<ul class="am-pureview-slider"></ul>' + '<ul class="am-pureview-direction"><li class="am-pureview-prev"><a href=""></a></li><li class="am-pureview-next"><a href=""></a></li></ul>' + '<div class="am-pureview-bar am-active"><span class="am-pureview-current"></span> / <span class="am-pureview-total"></span><span class="am-pureview-title"></span></div>' + '<div class="am-pureview-actions am-active"><a href="javascript: void(0)" class="am-icon-chevron-left" data-am-close="pureview"></a><a href="javascript: void(0)" class="am-icon-share-square-o" data-am-toggle="share"></a></div>' + "</div>",
        className: {
            prevSlide: "am-pureview-slide-prev",
            nextSlide: "am-pureview-slide-next",
            active: "am-active"
        },
        selector: {
            slider: ".am-pureview-slider",
            close: '[data-am-close="pureview"]',
            total: ".am-pureview-total",
            current: ".am-pureview-current",
            title: ".am-pureview-title",
            actions: ".am-pureview-actions",
            bar: ".am-pureview-bar",
            pinchZoom: ".am-pinch-zoom"
        }
    };
    PureView.prototype.init = function() {
        var me = this, options = me.options, $element = me.$element, $images = $element.find("img"), $pureview = me.$pureview, $slider = $pureview.find(options.selector.slider), slides = [], total = $images.length;
        if (!total) return;
        $images.each(function(i, img) {
            var alt = $(img).attr("alt") || "", slide = '<li><div class="am-pinch-zoom"><img src="' + img.src + '" alt="' + alt + '"/></div></li>';
            slides.push(slide);
        });
        $slider.html(slides.join("\n"));
        $("body").append($pureview);
        $pureview.find(options.selector.total).text(total);
        this.$title = $pureview.find(options.selector.title);
        this.$current = $pureview.find(options.selector.current);
        this.$bar = $pureview.find(options.selector.bar);
        this.$actions = $pureview.find(options.selector.actions);
        this.$slides = $slider.find("li");
        $slider.find(options.selector.pinchZoom).each(function() {
            $(this).data("amui.pinchzoom", new PinchZoom($(this), {}));
        });
        $images.on("click", function(e) {
            e.preventDefault();
            me.open($images.index(this));
        });
        $pureview.find(".am-pureview-direction a").on("click", function(e) {
            e.preventDefault();
            var $clicked = $(e.target).parent("li");
            if ($clicked.is(".am-pureview-prev")) {
                me.prevSlide();
            } else {
                me.nextSlide();
            }
        });
        // Close Icon
        $pureview.find(options.selector.close).on("click.pureview.amui", function(e) {
            e.preventDefault();
            me.close();
        });
        $slider.on("singleTap", function(e) {
            me.toggleToolBar();
        }).on("swipeLeft", function(e) {
            me.nextSlide();
        }).on("swipeRight", function(e) {
            me.prevSlide();
        });
        $(document).on("keydown.pureview.amui", $.proxy(function(e) {
            var keyCode = e.keyCode;
            if (keyCode == 37) {
                this.prevSlide();
            } else if (keyCode == 39) {
                this.nextSlide();
            } else if (keyCode == 27) {
                this.close();
            }
        }, this));
    };
    PureView.prototype.activate = function($slide) {
        var options = this.options, $slides = this.$slides, activeIndex = $slides.index($slide), alt = $slide.find("img").attr("alt"), active = options.className.active;
        if ($slides.find("." + active).is($slide)) return;
        if (this.transitioning) return;
        this.transitioning = 1;
        alt && this.$title.text(alt);
        this.$current.text(activeIndex + 1);
        $slides.removeAttr("class");
        $slide.addClass(active);
        $slides.eq(activeIndex - 1).addClass(options.className.prevSlide);
        $slides.eq(activeIndex + 1).addClass(options.className.nextSlide);
        if (transition) {
            $slide.one(transition.end, $.proxy(function() {
                this.transitioning = 0;
            }, this));
        } else {
            this.transitioning = 0;
        }
    };
    PureView.prototype.nextSlide = function() {
        var $slides = this.$slides, $active = $slides.filter(".am-active"), activeIndex = $slides.index($active), rightSpring = "am-animation-right-spring";
        if (activeIndex + 1 >= $slides.length) {
            // last one
            animation && $active.addClass(rightSpring).on(animation.end, function() {
                $active.removeClass(rightSpring);
            });
        } else {
            this.activate($slides.eq(activeIndex + 1));
        }
    };
    PureView.prototype.prevSlide = function() {
        var $slides = this.$slides, $active = $slides.filter(".am-active"), activeIndex = this.$slides.index($active), leftSpring = "am-animation-left-spring";
        if (activeIndex === 0) {
            // first one
            animation && $active.addClass(leftSpring).on(animation.end, function() {
                $active.removeClass(leftSpring);
            });
        } else {
            this.activate($slides.eq(activeIndex - 1));
        }
    };
    PureView.prototype.toggleToolBar = function() {
        var active = this.options.className.active;
        this.$bar.toggleClass(active);
        this.$actions.toggleClass(active);
    };
    PureView.prototype.open = function(index) {
        var active = index || 0;
        this.activate(this.$slides.eq(active));
        this.$pureview.addClass("am-active");
        $html.addClass("am-dimmer-active");
    };
    PureView.prototype.close = function() {
        this.$pureview.removeClass("am-active");
        $html.removeClass("am-dimmer-active");
    };
    UI.pureview = PureView;
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("am.pureview"), options = $.extend({}, UI.utils.parseOptions($this.attr("data-am-pureview")), typeof option == "object" && option);
            console.log(data);
            if (!data) {
                $this.data("am.pureview", data = new PureView(this, options));
            }
            if (typeof option == "string") {
                data[option]();
            }
        });
    }
    $.fn.pureview = Plugin;
    // Init code
    $(function() {
        $("[data-am-pureview]").pureview();
    });
    module.exports = PureView;
});
define("ui.scrollspy", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/uikit/uikit/blob/master/src/js/scrollspy.js
     * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
     */
    var ScrollSpy = function(element, options) {
        if (!UI.support.animation) return;
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.$element = $(element);
        var checkViewRAF = function() {
            UI.utils.rAF.call(window, $.proxy(this.checkView, this));
        }.bind(this);
        this.$window = $(window).on("scroll.scrollspy.amui", checkViewRAF).on("resize.scrollspy.amui orientationchange.scrollspy.amui", UI.utils.debounce(checkViewRAF, 50));
        this.timer = this.inViewState = this.initInView = null;
        checkViewRAF();
    };
    ScrollSpy.DEFAULTS = {
        animation: "fade",
        inViewCls: "am-scrollspy-inview",
        initCls: "am-scrollspy-init",
        repeat: true,
        delay: 0,
        topOffset: 0,
        leftOffset: 0
    };
    ScrollSpy.prototype.checkView = function() {
        var $element = this.$element, options = this.options, inView = UI.utils.isInView($element, options), animation = options.animation ? " am-animation-" + options.animation : "";
        if (inView && !this.inViewState) {
            if (this.timer) clearTimeout(this.timer);
            if (!this.initInView) {
                $element.addClass(options.initCls);
                this.offset = $element.offset();
                this.initInView = true;
                $element.trigger("init:scrollspy:amui");
            }
            this.timer = setTimeout(function() {
                if (inView) {
                    $element.addClass(options.inViewCls + animation).width();
                }
            }, options.delay);
            this.inViewState = true;
            $element.trigger("inview:scrollspy:amui");
        }
        if (!inView && this.inViewState && options.repeat) {
            $element.removeClass(options.inViewCls + animation);
            this.inViewState = false;
            $element.trigger("outview:scrollspy:amui");
        }
    };
    ScrollSpy.prototype.check = function() {
        UI.utils.rAF.call(window, $.proxy(this.checkView, this));
    };
    UI.scrollspy = ScrollSpy;
    // Sticky Plugin
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("am.scrollspy"), options = typeof option == "object" && option;
            if (!data) $this.data("am.scrollspy", data = new ScrollSpy(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    $.fn.scrollspy = Plugin;
    // Init code
    $(function() {
        $("[data-am-scrollspy]").each(function() {
            var $this = $(this), options = UI.utils.options($this.attr("data-am-scrollspy"));
            Plugin.call($this, options);
        });
    });
    module.exports = ScrollSpy;
});
define("ui.scrollspynav", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/uikit/uikit/
     * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
     */
    // ScrollSpyNav Class
    var ScrollSpyNav = function(element, options) {
        this.options = $.extend({}, ScrollSpyNav.DEFAULTS, options);
        this.$element = $(element);
        this.anchors = [];
        this.$links = this.$element.find('a[href^="#"]').each(function(i, link) {
            this.anchors.push($(link).attr("href"));
        }.bind(this));
        this.$targets = $(this.anchors.join(", "));
        var processRAF = function() {
            UI.utils.rAF.call(window, $.proxy(this.process, this));
        }.bind(this);
        this.$window = $(window).on("scroll.scrollspynav.amui", processRAF).on("resize.scrollspynav.amui orientationchange.scrollspynav.amui", UI.utils.debounce(processRAF, 50));
        processRAF();
        this.scrollProcess();
    };
    ScrollSpyNav.DEFAULTS = {
        cls: "am-active",
        topOffset: 0,
        leftOffset: 0,
        closest: false,
        smooth: true
    };
    ScrollSpyNav.prototype.process = function() {
        var scrollTop = this.$window.scrollTop(), options = this.options, inViews = [], $links = this.$links;
        var $targets = this.$targets;
        $targets.each(function(i, target) {
            if (UI.utils.isInView(target, options)) {
                inViews.push(target);
            }
        });
        //console.log(inViews.length);
        if (inViews.length) {
            var $target;
            $.each(inViews, function(i, item) {
                if ($(item).offset().top >= scrollTop) {
                    // console.log($(item));
                    $target = $(item);
                    return false;
                }
            });
            if (!$target) return;
            if (options.closest) {
                $links.closest(options.closest).removeClass(options.cls);
                $links.filter('a[href="#' + $target.attr("id") + '"]').closest(options.closest).addClass(options.cls);
            } else {
                $links.removeClass(options.cls).filter('a[href="#' + $target.attr("id") + '"]').addClass(options.cls);
            }
        }
    };
    ScrollSpyNav.prototype.scrollProcess = function() {
        var $links = this.$links;
        // smoothScroll
        if (this.options.smooth) {
            require.async([ "ui.smooth-scroll" ], function() {
                $links.on("click", function(e) {
                    e.preventDefault();
                    var $this = $(this), target = $this.attr("href"), position = $this.data("am.smoothScroll");
                    !position && $this.data("am.smoothScroll", position = $(target).offset().top);
                    $(window).smoothScroll(position);
                });
            });
        }
    };
    UI.scrollspynav = ScrollSpyNav;
    // ScrollSpyNav Plugin
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("am.scrollspynav"), options = typeof option == "object" && option;
            if (!data) $this.data("am.scrollspynav", data = new ScrollSpyNav(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    $.fn.scrollspynav = Plugin;
    // Init code
    $(function() {
        $("[data-am-scrollspy-nav]").each(function() {
            var $this = $(this), options = UI.utils.options($this.attr("data-am-scrollspy-nav"));
            Plugin.call($this, options);
        });
    });
    module.exports = ScrollSpyNav;
});
define("ui.share", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector", "ui.modal", "ui.dimmer", "util.qrcode" ], function(require, exports, module) {
    require("core");
    require("ui.modal");
    var QRCode = require("util.qrcode");
    var $ = window.Zepto, UI = $.AMUI, doc = document, $doc = $(doc), transition = UI.support.transition;
    /**
     * https://github.com/cho45/micro-template.js
     * (c) cho45 http://cho45.github.com/mit-license
     */
    function template(id, data) {
        var me = arguments.callee;
        if (!me.cache[id]) me.cache[id] = function() {
            var name = id, string = /^[\w\-]+$/.test(id) ? me.get(id) : (name = "template(string)", 
            id);
            // no warnings
            var line = 1, body = ("try { " + (me.variable ? "var " + me.variable + " = this.stash;" : "with (this.stash) { ") + "this.ret += '" + string.replace(/<%/g, "").replace(/%>/g, "").replace(/'(?![^\x11\x13]+?\x13)/g, "\\x27").replace(/^\s*|\s*$/g, "").replace(/\n/g, function() {
                return "';\nthis.line = " + ++line + "; this.ret += '\\n";
            }).replace(/\x11=raw(.+?)\x13/g, "' + ($1) + '").replace(/\x11=(.+?)\x13/g, "' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g, "'; $1; this.ret += '") + "'; " + (me.variable ? "" : "}") + "return this.ret;" + "} catch (e) { throw 'TemplateError: ' + e + ' (on " + name + "' + ' line ' + this.line + ')'; } " + "//@ sourceURL=" + name + "\n").replace(/this\.ret \+= '';/g, "");
            var func = new Function(body);
            var map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&#x22;",
                "'": "&#x27;"
            };
            var escapeHTML = function(string) {
                return ("" + string).replace(/[&<>\'\"]/g, function(_) {
                    return map[_];
                });
            };
            return function(stash) {
                return func.call(me.context = {
                    escapeHTML: escapeHTML,
                    line: 1,
                    ret: "",
                    stash: stash
                });
            };
        }();
        return data ? me.cache[id](data) : me.cache[id];
    }
    template.cache = {};
    template.get = function(id) {
        return Share.DEFAULTS.tpl;
    };
    var Share = function(options) {
        this.options = $.extend({}, Share.DEFAULTS, options || {});
        this.$element = null;
        this.$wechatQr = null;
        this.pics = null;
        this.init();
    };
    Share.DEFAULTS = {
        sns: [ "weibo", "qq", "qzone", "tqq", "wechat", "renren" ],
        title: "分享到",
        cancel: "取消",
        closeOnShare: true,
        id: UI.utils.generateGUID("am-share"),
        desc: "Hi，孤夜观天象，发现一个不错的西西，分享一下下 ;-)",
        via: "Amaze UI",
        tpl: '<div class="am-share am-modal-actions" id="<%= id %>">' + '<h3 class="am-share-title"><%= title %></h3>' + '<ul class="am-share-sns sm-block-grid-3"><% for(var i = 0; i < sns.length; i++) {%>' + '<li><a href="<%= sns[i].shareUrl %>" data-am-share-to="<%= sns[i].id %>" ><i class="am-icon-<%= sns[i].icon %>"></i><span><%= sns[i].title %></span></a></li>' + "<% } %></ul>" + '<div class="am-share-footer"><button class="am-btn am-btn-default am-btn-block" data-am-share-close><%= cancel %></button></div>' + "</div>"
    };
    Share.SNS = {
        weibo: {
            title: "新浪微博",
            url: "http://service.weibo.com/share/share.php",
            width: 620,
            height: 450,
            icon: "weibo"
        },
        // url          链接地址
        // title:”,     分享的文字内容(可选，默认为所在页面的title)
        // appkey:”,    您申请的应用appkey,显示分享来源(可选)
        // pic:”,       分享图片的路径(可选)
        // ralateUid:”, 关联用户的UID，分享微博会@该用户(可选)
        // NOTE: 会自动抓取图片，不用指定 pic
        qq: {
            title: "QQ 好友",
            url: "http://connect.qq.com/widget/shareqq/index.html",
            icon: "qq"
        },
        // url:,
        // title:'',    分享标题(可选)
        // pics:'',     分享图片的路径(可选)
        // summary:'',  分享摘要(可选)
        // site:'',     分享来源 如：腾讯网(可选)
        // desc: ''     发送给用户的消息
        // NOTE: 经过测试，最终发给用户的只有 url 和 desc
        qzone: {
            title: "QQ 空间",
            url: "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",
            icon: "star"
        },
        // http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=xxx&title=xxx&desc=&summary=&site=
        // url:,
        // title:'',    分享标题(可选)
        // desc:'',     默认分享理由(可选)
        // summary:'',  分享摘要(可选)
        // site:'',     分享来源 如：腾讯网(可选)
        // pics:'',     分享图片的路径(可选)，不会自动抓取，多个图片用|分隔
        tqq: {
            title: "腾讯微博",
            url: "http://v.t.qq.com/share/share.php",
            icon: "tencent-weibo"
        },
        // url=xx&title=&appkey=801cf76d3cfc44ada52ec13114e84a96
        // url
        // title
        // pic 多个图片用 | 分隔
        // appkey
        // NOTE: 不会自动抓取图片
        wechat: {
            title: "微信",
            url: "[qrcode]",
            icon: "wechat"
        },
        // 生成一个二维码 供用户扫描
        // 相关接口 https://github.com/zxlie/WeixinApi
        renren: {
            title: "人人网",
            url: "http://widget.renren.com/dialog/share",
            icon: "renren"
        },
        // http://widget.renren.com/dialog/share?resourceUrl=www&srcUrl=www&title=ww&description=xxx
        // 550 * 400
        // resourceUrl : '', // 分享的资源Url
        // srcUrl : '',	     // 分享的资源来源Url,默认为header中的Referer,如果分享失败可以调整此值为resourceUrl试试
        // pic : '',		 // 分享的主题图片，会自动抓取
        // title : '',		 // 分享的标题
        // description : ''	 // 分享的详细描述
        // NOTE: 经过测试，直接使用 url 参数即可
        douban: {
            title: "豆瓣",
            url: "http://www.douban.com/recommend/",
            icon: "share-alt"
        },
        // http://www.douban.com/service/sharebutton
        // 450 * 330
        // http://www.douban.com/share/service?bm=1&image=&href=xxx&updated=&name=
        // href 链接
        // name 标题
        /* void (function() {
         var d = document, e = encodeURIComponent, s1 = window.getSelection, s2 = d.getSelection, s3 = d.selection, s = s1 ? s1()
         : s2 ? s2() : s3 ? s3.createRange().text : '', r = 'http://www.douban.com/recommend/?url=&title=&sel=&v=1&r=1'
         })();
         */
        // tsohu: '',
        // http://t.sohu.com/third/post.jsp?url=&title=&content=utf-8&pic=
        //print: '',
        mail: {
            title: "邮件分享",
            url: "mailto:",
            icon: "envelope-o"
        },
        sms: {
            title: "短信分享",
            url: "sms:",
            icon: "comment"
        }
    };
    Share.prototype.render = function() {
        var options = this.options, snsData = [], title = encodeURIComponent(doc.title), link = encodeURIComponent(doc.location), msgBody = "?body=" + title + link;
        options.sns.forEach(function(item, i) {
            if (Share.SNS[item]) {
                var tmp = Share.SNS[item], shareUrl;
                tmp.id = item;
                if (item === "mail") {
                    shareUrl = msgBody + "&subject=" + options.desc;
                } else if (item === "sms") {
                    shareUrl = msgBody;
                } else {
                    shareUrl = "?url=" + link + "&title=" + title;
                }
                tmp.shareUrl = tmp.url + shareUrl;
                snsData.push(tmp);
            }
        });
        return template("share", $.extend({}, options, {
            sns: snsData
        }));
    };
    Share.prototype.init = function() {
        var me = this, shareItem = "[data-am-share-to]";
        $doc.ready($.proxy(function() {
            $("body").append(this.render());
            // append share DOM to body
            this.$element = $("#" + this.options.id);
            this.$element.find("[data-am-share-close]").on("click.share.amui", function() {
                me.close();
            });
        }, this));
        $doc.on("click.share.amui", shareItem, $.proxy(function(e) {
            var $clicked = $(e.target), $target = $clicked.is(shareItem) && $clicked || $clicked.parent(shareItem), sns = $target.attr("data-am-share-to");
            if (!(sns === "mail" || sns === "sms")) {
                e.preventDefault();
                this.shareTo(sns, this.setData(sns));
            }
            this.close();
        }, this));
    };
    Share.prototype.open = function() {
        this.$element && this.$element.modal("open");
        this.$element.trigger("open:share:amui");
    };
    Share.prototype.close = function() {
        this.$element && this.$element.modal("close");
        this.$element.trigger("close:share:amui");
    };
    Share.prototype.toggle = function() {
        this.$element.is(".am-modal-active") ? this.close() : this.open();
    };
    Share.prototype.setData = function(sns) {
        if (!sns) return;
        var shareData = {
            url: doc.location,
            title: doc.title
        }, desc = this.options.desc, imgSrc = this.pics || [], qqReg = /^(qzone|qq|tqq)$/;
        if (qqReg.test(sns) && !imgSrc.length) {
            var allImages = doc.images;
            for (var i = 0; i < allImages.length && i < 10; i++) {
                !!allImages[i].src && imgSrc.push(encodeURIComponent(allImages[i].src));
            }
            this.pics = imgSrc;
        }
        switch (sns) {
          case "qzone":
            shareData.desc = desc;
            shareData.site = this.options.via;
            shareData.pics = imgSrc.join("|");
            // TODO: 抓取图片多张
            break;

          case "qq":
            shareData.desc = desc;
            shareData.site = this.options.via;
            shareData.pics = imgSrc[0];
            // 抓取一张图片
            break;

          case "tqq":
            // 抓取图片多张
            shareData.pic = imgSrc.join("|");
            break;
        }
        return shareData;
    };
    Share.prototype.shareTo = function(sns, data) {
        var snsInfo = Share.SNS[sns];
        if (!snsInfo) return;
        if (sns === "wechat" || sns === "weixin") return this.wechatQr();
        var query = [];
        for (var key in data) {
            if (data[key]) {
                // 避免 encode 图片分隔符 |
                query.push(key.toString() + "=" + (key === "pic" || key === "pics" ? data[key] : encodeURIComponent(data[key])));
            }
        }
        window.open(snsInfo.url + "?" + query.join("&"));
    };
    Share.prototype.wechatQr = function() {
        if (!this.$wechatQr) {
            var qrId = UI.utils.generateGUID("am-share-wechat"), $qr = $('<div class="am-modal am-modal-no-btn am-share-wechat-qr"><div class="am-modal-dialog"><div class="am-modal-hd">分享到微信 <a href="" class="am-close am-close-spin" data-am-modal-close>&times;</a> </div><div class="am-modal-bd"><div class="am-share-wx-qr"></div><div class="am-share-wechat-tip">打开微信，点击底部的<em>发现</em>，<br/> 使用<em>扫一扫</em>将网页分享至朋友圈</div></div></div></div>', {
                id: qrId
            });
            var qrNode = new QRCode({
                render: "canvas",
                correctLevel: 0,
                text: doc.location.href,
                width: 180,
                height: 180,
                background: "#fff",
                foreground: "#000"
            });
            $qr.find(".am-share-wx-qr").html(qrNode);
            $qr.appendTo($("body"));
            this.$wechatQr = $("#" + qrId);
        }
        this.$wechatQr.modal("open");
    };
    var share = new Share();
    UI.share = share;
    $doc.on("click.share.amui", '[data-am-toggle="share"]', function(e) {
        e.preventDefault();
        share.toggle();
    });
    module.exports = share;
});
define("ui.smooth-scroll", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    var UI = require("core"), rAF = UI.utils.rAF;
    var $ = window.Zepto;
    /**
     * Smooth Scroll
     * @param position
     * @via http://mir.aculo.us/2014/01/19/scrolling-dom-elements-to-the-top-a-zepto-plugin/
     */
    // Usage: $(element).smoothScroll([position])
    // only allow one scroll to top operation to be in progress at a time,
    // which is probably what you want
    var smoothScrollInProgress = false;
    $.fn.smoothScroll = function(position) {
        var $this = this, targetY = position || 0, initialY = $this.scrollTop(), lastY = initialY, delta = targetY - initialY, // duration in ms, make it a bit shorter for short distances
        // this is not scientific and you might want to adjust this for
        // your preferences
        speed = Math.min(750, Math.min(1500, Math.abs(initialY - targetY))), // temp variables (t will be a position between 0 and 1, y is the calculated scrollTop)
        start, t, y, cancelScroll = function() {
            abort();
        };
        // abort if already in progress or nothing to scroll
        if (smoothScrollInProgress) return;
        if (delta == 0) return;
        // quint ease-in-out smoothing, from
        // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
        function smooth(pos) {
            if ((pos /= .5) < 1) return .5 * Math.pow(pos, 5);
            return .5 * (Math.pow(pos - 2, 5) + 2);
        }
        function abort() {
            $this.off("touchstart", cancelScroll);
            smoothScrollInProgress = false;
        }
        // when there's a touch detected while scrolling is in progress, abort
        // the scrolling (emulates native scrolling behavior)
        $this.on("touchstart", cancelScroll);
        smoothScrollInProgress = true;
        // start rendering away! note the function given to frame
        // is named "render" so we can reference it again further down
        rAF(function render(now) {
            if (!smoothScrollInProgress) return;
            if (!start) start = now;
            // calculate t, position of animation in [0..1]
            t = Math.min(1, Math.max((now - start) / speed, 0));
            // calculate the new scrollTop position (don't forget to smooth)
            y = Math.round(initialY + delta * smooth(t));
            // bracket scrollTop so we're never over-scrolling
            if (delta > 0 && y > targetY) y = targetY;
            if (delta < 0 && y < targetY) y = targetY;
            // only actually set scrollTop if there was a change fromt he last frame
            if (lastY != y) $this.scrollTop(y);
            lastY = y;
            // if we're not done yet, queue up an other frame to render,
            // or clean up
            if (y !== targetY) {
                rAF(render);
            } else {
                abort();
            }
        });
    };
    // Init code
    $(document).on("click.smoothScroll.amui", "[data-am-smooth-scroll]", function(e) {
        e.preventDefault();
        var $this = $(this), ssTo = Number($this.attr("data-am-smooth-scroll"));
        $(window).smoothScroll(isNaN(ssTo) ? 0 : ssTo);
    });
});
define("ui.sticky", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/uikit/uikit/blob/master/src/js/addons/sticky.js
     * @license https://github.com/uikit/uikit/blob/master/LICENSE.md
     */
    // Sticky Class
    var Sticky = function(element, options) {
        this.options = $.extend({}, Sticky.DEFAULTS, options);
        this.$element = $(element);
        this.$window = $(window).on("scroll.sticky.amui", UI.utils.debounce($.proxy(this.checkPosition, this), 50)).on("click.sticky.amui", UI.utils.debounce($.proxy(this.checkPosition, this), 1));
        this.original = {
            offsetTop: this.$element.offset().top,
            width: this.$element.width()
        };
        this.sticked = null;
        this.checkPosition();
    };
    Sticky.DEFAULTS = {
        top: 0,
        cls: "am-sticky"
    };
    Sticky.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var scrollHeight = $(document).height(), scrollTop = this.$window.scrollTop(), options = this.options, offsetTop = options.top, $element = this.$element, animation = options.animation ? " am-animation-" + options.animation : "";
        this.sticked = scrollTop > this.original.offsetTop ? "sticky" : false;
        if (this.sticked) {
            $element.addClass(options.cls + animation).css({
                top: offsetTop
            });
        } else {
            $element.removeClass(options.cls + animation).css({
                top: ""
            });
        }
    };
    UI.sticky = Sticky;
    // Sticky Plugin
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), data = $this.data("am.sticky"), options = typeof option == "object" && option;
            if (!data) $this.data("am.sticky", data = new Sticky(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    $.fn.sticky = Plugin;
    // Init code
    $(window).on("load", function() {
        $("[data-am-sticky]").each(function() {
            var $this = $(this), options = UI.utils.options($this.attr("data-am-sticky"));
            Plugin.call($this, options);
        });
    });
    module.exports = Sticky;
});
define("ui.tabs", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI, supportTransition = UI.support.transition, animation = UI.support.animation;
    /**
     * @via https://github.com/twbs/bootstrap/blob/master/js/tab.js
     * @copyright 2011-2014 Twitter, Inc.
     * @license MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
     */
    var Tabs = function(element) {
        this.$element = $(element);
        this.$tabNav = this.$element.find(Tabs.DEFAULTS.selector.nav);
        this.$navs = this.$tabNav.find("a");
        this.$content = this.$element.find(Tabs.DEFAULTS.selector.content);
        this.$tabPanels = this.$content.find(Tabs.DEFAULTS.selector.panel);
        this.transitioning = null;
        this.init();
    };
    Tabs.DEFAULTS = {
        selector: {
            nav: ".am-tabs-nav",
            content: ".am-tabs-bd",
            panel: ".am-tab-panel"
        },
        status: {
            active: "am-active"
        }
    };
    Tabs.prototype.init = function() {
        this.$navs.on("click.tabs.amui", $.proxy(function(e) {
            e.preventDefault();
            this.open($(e.target));
        }, this));
        this.$content.on("swipeLeft.tabs.amui", $.proxy(function(e) {
            var $nav = this.getNextNav($(e.target));
            $nav && this.open($nav);
        }, this));
        this.$content.on("swipeRight.tabs.amui", $.proxy(function(e) {
            var $nav = this.getPrevNav($(e.target));
            $nav && this.open($nav);
        }, this));
    };
    Tabs.prototype.open = function($nav) {
        if (!$nav || this.transitioning || $nav.parent("li").hasClass("am-active")) return;
        var $tabNav = this.$tabNav, $navs = this.$navs, $tabContent = this.$content, href = $nav.attr("href"), regexHash = /^#.+$/, $target = regexHash.test(href) && this.$content.find(href) || this.$tabPanels.eq($navs.index($nav));
        var previous = $tabNav.find(".am-active a")[0], e = $.Event("open:tabs:amui", {
            relatedTarget: previous
        });
        $nav.trigger(e);
        if (e.isDefaultPrevented()) return;
        // activate Tab nav
        this.activate($nav.closest("li"), $tabNav);
        // activate Tab content
        this.activate($target, $tabContent, function() {
            $nav.trigger({
                type: "opened:tabs:amui",
                relatedTarget: previous
            });
        });
    };
    Tabs.prototype.activate = function($element, $container, callback) {
        this.transitioning = true;
        var $active = $container.find("> .am-active"), transition = callback && supportTransition && !!$active.length;
        $active.removeClass("am-active am-in").blur();
        $element.addClass("am-active");
        if (transition) {
            $element.redraw();
            // reflow for transition
            $element.addClass("am-in");
        } else {
            $element.removeClass("am-fade");
        }
        function complete() {
            callback();
            this.transitioning = false;
        }
        transition ? $active.one(supportTransition.end, $.proxy(complete, this)) : $.proxy(complete, this);
    };
    Tabs.prototype.getNextNav = function($panel) {
        var navIndex = this.$tabPanels.index($panel), rightSpring = "am-animation-right-spring";
        if (navIndex + 1 >= this.$navs.length) {
            // last one
            animation && $panel.addClass(rightSpring).on(animation.end, function() {
                $panel.removeClass(rightSpring);
            });
            return null;
        } else {
            return this.$navs.eq(navIndex + 1);
        }
    };
    Tabs.prototype.getPrevNav = function($panel) {
        var navIndex = this.$tabPanels.index($panel), leftSpring = "am-animation-left-spring";
        if (navIndex === 0) {
            // first one
            animation && $panel.addClass(leftSpring).on(animation.end, function() {
                $panel.removeClass(leftSpring);
            });
            return null;
        } else {
            return this.$navs.eq(navIndex - 1);
        }
    };
    // Plugin
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this), $tabs = $this.is(".am-tabs") && $this || $this.closest(".am-tabs"), data = $tabs.data("amui.tabs");
            if (!data) $tabs.data("amui.tabs", data = new Tabs($tabs[0]));
            if (typeof option == "string" && $this.is(".am-tabs-nav a")) data[option]($this);
        });
    }
    $.fn.tabs = Plugin;
    // Init code
    $(document).on("ready", function(e) {
        $("[data-am-tabs]").tabs();
    });
    module.exports = Tabs;
});
define("util.cookie", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    "use strict";
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    var cookie = {
        get: function(name) {
            var cookieName = encodeURIComponent(name) + "=", cookieStart = document.cookie.indexOf(cookieName), cookieValue = null, cookieEnd;
            if (cookieStart > -1) {
                cookieEnd = document.cookie.indexOf(";", cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        },
        set: function(name, value, expires, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
            if (expires instanceof Date) {
                cookieText += "; expires=" + expires.toGMTString();
            }
            if (path) {
                cookieText += "; path=" + path;
            }
            if (domain) {
                cookieText += "; domain=" + domain;
            }
            if (secure) {
                cookieText += "; secure";
            }
            document.cookie = cookieText;
        },
        unset: function(name, path, domain, secure) {
            this.set(name, "", new Date(0), path, domain, secure);
        }
    };
    UI.utils.cookie = cookie;
    module.exports = cookie;
});
define("util.fastclick", [], function(require, exports, module) {
    var $ = window.Zepto;
    /**
     * FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @version 1.0.2
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */
    /*jslint browser:true, node:true*/
    /*global define, Event, Node*/
    /**
     * Instantiate fast-clicking listeners on the specified layer.
     *
     * @constructor
     * @param {Element} layer The layer to listen on
     * @param {Object} options The options to override the defaults
     */
    function FastClick(layer, options) {
        "use strict";
        var oldOnClick;
        options = options || {};
        /**
         * Whether a click is currently being tracked.
         *
         * @type boolean
         */
        this.trackingClick = false;
        /**
         * Timestamp for when click tracking started.
         *
         * @type number
         */
        this.trackingClickStart = 0;
        /**
         * The element being tracked for a click.
         *
         * @type EventTarget
         */
        this.targetElement = null;
        /**
         * X-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartX = 0;
        /**
         * Y-coordinate of touch start event.
         *
         * @type number
         */
        this.touchStartY = 0;
        /**
         * ID of the last touch, retrieved from Touch.identifier.
         *
         * @type number
         */
        this.lastTouchIdentifier = 0;
        /**
         * Touchmove boundary, beyond which a click will be cancelled.
         *
         * @type number
         */
        this.touchBoundary = options.touchBoundary || 10;
        /**
         * The FastClick layer.
         *
         * @type Element
         */
        this.layer = layer;
        /**
         * The minimum time between tap(touchstart and touchend) events
         *
         * @type number
         */
        this.tapDelay = options.tapDelay || 200;
        if (FastClick.notNeeded(layer)) {
            return;
        }
        // Some old versions of Android don't have Function.prototype.bind
        function bind(method, context) {
            return function() {
                return method.apply(context, arguments);
            };
        }
        var methods = [ "onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel" ];
        var context = this;
        for (var i = 0, l = methods.length; i < l; i++) {
            context[methods[i]] = bind(context[methods[i]], context);
        }
        // Set up event handlers as required
        if (deviceIsAndroid) {
            layer.addEventListener("mouseover", this.onMouse, true);
            layer.addEventListener("mousedown", this.onMouse, true);
            layer.addEventListener("mouseup", this.onMouse, true);
        }
        layer.addEventListener("click", this.onClick, true);
        layer.addEventListener("touchstart", this.onTouchStart, false);
        layer.addEventListener("touchmove", this.onTouchMove, false);
        layer.addEventListener("touchend", this.onTouchEnd, false);
        layer.addEventListener("touchcancel", this.onTouchCancel, false);
        // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
        // layer when they are cancelled.
        if (!Event.prototype.stopImmediatePropagation) {
            layer.removeEventListener = function(type, callback, capture) {
                var rmv = Node.prototype.removeEventListener;
                if (type === "click") {
                    rmv.call(layer, type, callback.hijacked || callback, capture);
                } else {
                    rmv.call(layer, type, callback, capture);
                }
            };
            layer.addEventListener = function(type, callback, capture) {
                var adv = Node.prototype.addEventListener;
                if (type === "click") {
                    adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
                        if (!event.propagationStopped) {
                            callback(event);
                        }
                    }), capture);
                } else {
                    adv.call(layer, type, callback, capture);
                }
            };
        }
        // If a handler is already declared in the element's onclick attribute, it will be fired before
        // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
        // adding it as listener.
        if (typeof layer.onclick === "function") {
            // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
            // - the old one won't work if passed to addEventListener directly.
            oldOnClick = layer.onclick;
            layer.addEventListener("click", function(event) {
                oldOnClick(event);
            }, false);
            layer.onclick = null;
        }
    }
    /**
     * Android requires exceptions.
     *
     * @type boolean
     */
    var deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;
    /**
     * iOS requires exceptions.
     *
     * @type boolean
     */
    var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);
    /**
     * iOS 4 requires an exception for select elements.
     *
     * @type boolean
     */
    var deviceIsIOS4 = deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);
    /**
     * iOS 6.0(+?) requires the target element to be manually derived
     *
     * @type boolean
     */
    var deviceIsIOSWithBadTarget = deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);
    /**
     * Determine whether a given element requires a native click.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element needs a native click
     */
    FastClick.prototype.needsClick = function(target) {
        "use strict";
        switch (target.nodeName.toLowerCase()) {
          // Don't send a synthetic click to disabled inputs (issue #62)
            case "button":
          case "select":
          case "textarea":
            if (target.disabled) {
                return true;
            }
            break;

          case "input":
            // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
            if (deviceIsIOS && target.type === "file" || target.disabled) {
                return true;
            }
            break;

          case "label":
          case "video":
            return true;
        }
        return /\bneedsclick\b/.test(target.className);
    };
    /**
     * Determine whether a given element requires a call to focus to simulate click into element.
     *
     * @param {EventTarget|Element} target Target DOM element
     * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
     */
    FastClick.prototype.needsFocus = function(target) {
        "use strict";
        switch (target.nodeName.toLowerCase()) {
          case "textarea":
            return true;

          case "select":
            return !deviceIsAndroid;

          case "input":
            switch (target.type) {
              case "button":
              case "checkbox":
              case "file":
              case "image":
              case "radio":
              case "submit":
                return false;
            }
            // No point in attempting to focus disabled inputs
            return !target.disabled && !target.readOnly;

          default:
            return /\bneedsfocus\b/.test(target.className);
        }
    };
    /**
     * Send a click event to the specified element.
     *
     * @param {EventTarget|Element} targetElement
     * @param {Event} event
     */
    FastClick.prototype.sendClick = function(targetElement, event) {
        "use strict";
        var clickEvent, touch;
        // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
        if (document.activeElement && document.activeElement !== targetElement) {
            document.activeElement.blur();
        }
        touch = event.changedTouches[0];
        // Synthesise a click event, with an extra attribute so it can be tracked
        clickEvent = document.createEvent("MouseEvents");
        clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
        clickEvent.forwardedTouchEvent = true;
        targetElement.dispatchEvent(clickEvent);
    };
    FastClick.prototype.determineEventType = function(targetElement) {
        "use strict";
        //Issue #159: Android Chrome Select Box does not open with a synthetic click event
        if (deviceIsAndroid && targetElement.tagName.toLowerCase() === "select") {
            return "mousedown";
        }
        return "click";
    };
    /**
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.focus = function(targetElement) {
        "use strict";
        var length;
        // Issue #160: on iOS 7, some input elements (e.g. date datetime) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
        if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf("date") !== 0 && targetElement.type !== "time") {
            length = targetElement.value.length;
            targetElement.setSelectionRange(length, length);
        } else {
            targetElement.focus();
        }
    };
    /**
     * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
     *
     * @param {EventTarget|Element} targetElement
     */
    FastClick.prototype.updateScrollParent = function(targetElement) {
        "use strict";
        var scrollParent, parentElement;
        scrollParent = targetElement.fastClickScrollParent;
        // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
        // target element was moved to another parent.
        if (!scrollParent || !scrollParent.contains(targetElement)) {
            parentElement = targetElement;
            do {
                if (parentElement.scrollHeight > parentElement.offsetHeight) {
                    scrollParent = parentElement;
                    targetElement.fastClickScrollParent = parentElement;
                    break;
                }
                parentElement = parentElement.parentElement;
            } while (parentElement);
        }
        // Always update the scroll top tracker if possible.
        if (scrollParent) {
            scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
        }
    };
    /**
     * @param {EventTarget} targetElement
     * @returns {Element|EventTarget}
     */
    FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {
        "use strict";
        // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
        if (eventTarget.nodeType === Node.TEXT_NODE) {
            return eventTarget.parentNode;
        }
        return eventTarget;
    };
    /**
     * On touch start, record the position and scroll offset.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchStart = function(event) {
        "use strict";
        var targetElement, touch, selection;
        // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
        if (event.targetTouches.length > 1) {
            return true;
        }
        targetElement = this.getTargetElementFromEventTarget(event.target);
        touch = event.targetTouches[0];
        if (deviceIsIOS) {
            // Only trusted events will deselect text on iOS (issue #49)
            selection = window.getSelection();
            if (selection.rangeCount && !selection.isCollapsed) {
                return true;
            }
            if (!deviceIsIOS4) {
                // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
                // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
                // with the same identifier as the touch event that previously triggered the click that triggered the alert.
                // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
                // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
                if (touch.identifier === this.lastTouchIdentifier) {
                    event.preventDefault();
                    return false;
                }
                this.lastTouchIdentifier = touch.identifier;
                // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
                // 1) the user does a fling scroll on the scrollable layer
                // 2) the user stops the fling scroll with another tap
                // then the event.target of the last 'touchend' event will be the element that was under the user's finger
                // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
                // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
                this.updateScrollParent(targetElement);
            }
        }
        this.trackingClick = true;
        this.trackingClickStart = event.timeStamp;
        this.targetElement = targetElement;
        this.touchStartX = touch.pageX;
        this.touchStartY = touch.pageY;
        // Prevent phantom clicks on fast double-tap (issue #36)
        if (event.timeStamp - this.lastClickTime < this.tapDelay) {
            event.preventDefault();
        }
        return true;
    };
    /**
     * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.touchHasMoved = function(event) {
        "use strict";
        var touch = event.changedTouches[0], boundary = this.touchBoundary;
        if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
            return true;
        }
        return false;
    };
    /**
     * Update the last position.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchMove = function(event) {
        "use strict";
        if (!this.trackingClick) {
            return true;
        }
        // If the touch has moved, cancel the click tracking
        if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
            this.trackingClick = false;
            this.targetElement = null;
        }
        return true;
    };
    /**
     * Attempt to find the labelled control for the given label element.
     *
     * @param {EventTarget|HTMLLabelElement} labelElement
     * @returns {Element|null}
     */
    FastClick.prototype.findControl = function(labelElement) {
        "use strict";
        // Fast path for newer browsers supporting the HTML5 control attribute
        if (labelElement.control !== undefined) {
            return labelElement.control;
        }
        // All browsers under test that support touch events also support the HTML5 htmlFor attribute
        if (labelElement.htmlFor) {
            return document.getElementById(labelElement.htmlFor);
        }
        // If no for attribute exists, attempt to retrieve the first labellable descendant element
        // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
        return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
    };
    /**
     * On touch end, determine whether to send a click event at once.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onTouchEnd = function(event) {
        "use strict";
        var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;
        if (!this.trackingClick) {
            return true;
        }
        // Prevent phantom clicks on fast double-tap (issue #36)
        if (event.timeStamp - this.lastClickTime < this.tapDelay) {
            this.cancelNextClick = true;
            return true;
        }
        // Reset to prevent wrong click cancel on input (issue #156).
        this.cancelNextClick = false;
        this.lastClickTime = event.timeStamp;
        trackingClickStart = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;
        // On some iOS devices, the targetElement supplied with the event is invalid if the layer
        // is performing a transition or scroll, and has to be re-detected manually. Note that
        // for this to function correctly, it must be called *after* the event target is checked!
        // See issue #57; also filed as rdar://13048589 .
        if (deviceIsIOSWithBadTarget) {
            touch = event.changedTouches[0];
            // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
            targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
            targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
        }
        targetTagName = targetElement.tagName.toLowerCase();
        if (targetTagName === "label") {
            forElement = this.findControl(targetElement);
            if (forElement) {
                this.focus(targetElement);
                if (deviceIsAndroid) {
                    return false;
                }
                targetElement = forElement;
            }
        } else if (this.needsFocus(targetElement)) {
            // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
            // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
            if (event.timeStamp - trackingClickStart > 100 || deviceIsIOS && window.top !== window && targetTagName === "input") {
                this.targetElement = null;
                return false;
            }
            this.focus(targetElement);
            this.sendClick(targetElement, event);
            // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
            // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
            if (!deviceIsIOS || targetTagName !== "select") {
                this.targetElement = null;
                event.preventDefault();
            }
            return false;
        }
        if (deviceIsIOS && !deviceIsIOS4) {
            // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
            // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
            scrollParent = targetElement.fastClickScrollParent;
            if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                return true;
            }
        }
        // Prevent the actual click from going though - unless the target node is marked as requiring
        // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
        if (!this.needsClick(targetElement)) {
            event.preventDefault();
            this.sendClick(targetElement, event);
        }
        return false;
    };
    /**
     * On touch cancel, stop tracking the click.
     *
     * @returns {void}
     */
    FastClick.prototype.onTouchCancel = function() {
        "use strict";
        this.trackingClick = false;
        this.targetElement = null;
    };
    /**
     * Determine mouse events which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onMouse = function(event) {
        "use strict";
        // If a target element was never set (because a touch event was never fired) allow the event
        if (!this.targetElement) {
            return true;
        }
        if (event.forwardedTouchEvent) {
            return true;
        }
        // Programmatically generated events targeting a specific element should be permitted
        if (!event.cancelable) {
            return true;
        }
        // Derive and check the target element to see whether the mouse event needs to be permitted;
        // unless explicitly enabled, prevent non-touch click events from triggering actions,
        // to prevent ghost/doubleclicks.
        if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
            // Prevent any user-added listeners declared on FastClick element from being fired.
            if (event.stopImmediatePropagation) {
                event.stopImmediatePropagation();
            } else {
                // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
                event.propagationStopped = true;
            }
            // Cancel the event
            event.stopPropagation();
            event.preventDefault();
            return false;
        }
        // If the mouse event is permitted, return true for the action to go through.
        return true;
    };
    /**
     * On actual clicks, determine whether this is a touch-generated click, a click action occurring
     * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
     * an actual click which should be permitted.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    FastClick.prototype.onClick = function(event) {
        "use strict";
        var permitted;
        // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true;
        }
        // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
        if (event.target.type === "submit" && event.detail === 0) {
            return true;
        }
        permitted = this.onMouse(event);
        // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
        if (!permitted) {
            this.targetElement = null;
        }
        // If clicks are permitted, return true for the action to go through.
        return permitted;
    };
    /**
     * Remove all FastClick's event listeners.
     *
     * @returns {void}
     */
    FastClick.prototype.destroy = function() {
        "use strict";
        var layer = this.layer;
        if (deviceIsAndroid) {
            layer.removeEventListener("mouseover", this.onMouse, true);
            layer.removeEventListener("mousedown", this.onMouse, true);
            layer.removeEventListener("mouseup", this.onMouse, true);
        }
        layer.removeEventListener("click", this.onClick, true);
        layer.removeEventListener("touchstart", this.onTouchStart, false);
        layer.removeEventListener("touchmove", this.onTouchMove, false);
        layer.removeEventListener("touchend", this.onTouchEnd, false);
        layer.removeEventListener("touchcancel", this.onTouchCancel, false);
    };
    /**
     * Check whether FastClick is needed.
     *
     * @param {Element} layer The layer to listen on
     */
    FastClick.notNeeded = function(layer) {
        "use strict";
        var metaViewport;
        var chromeVersion;
        // Devices that don't support touch don't need FastClick
        if (typeof window.ontouchstart === "undefined") {
            return true;
        }
        // Chrome version - zero for other browsers
        chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [ , 0 ])[1];
        if (chromeVersion) {
            if (deviceIsAndroid) {
                metaViewport = document.querySelector("meta[name=viewport]");
                if (metaViewport) {
                    // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
                    if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
                        return true;
                    }
                    // Chrome 32 and above with width=device-width or less don't need FastClick
                    if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true;
                    }
                }
            } else {
                return true;
            }
        }
        // IE10 with -ms-touch-action: none, which disables double-tap-to-zoom (issue #97)
        if (layer.style.msTouchAction === "none") {
            return true;
        }
        return false;
    };
    /**
     * Factory method for creating a FastClick object
     *
     * @param {Element} layer The layer to listen on
     * @param {Object} options The options to override the defaults
     */
    FastClick.attach = function(layer, options) {
        "use strict";
        return new FastClick(layer, options);
    };
    module.exports = FastClick;
});
define("util.fullscreen", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    require("core");
    var $ = window.Zepto, UI = $.AMUI;
    /**
     * @via https://github.com/sindresorhus/screenfull.js
     * @license MIT © Sindre Sorhus
     * @version 1.2.1
     */
    "use strict";
    var keyboardAllowed = typeof Element !== "undefined" && "ALLOW_KEYBOARD_INPUT" in Element;
    var fn = function() {
        var val;
        var valLength;
        var fnMap = [ [ "requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror" ], // new WebKit
        [ "webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror" ], // old WebKit (Safari 5.1)
        [ "webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror" ], [ "mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror" ], [ "msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError" ] ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for (;i < l; i++) {
            val = fnMap[i];
            if (val && val[1] in document) {
                for (i = 0, valLength = val.length; i < valLength; i++) {
                    ret[fnMap[0][i]] = val[i];
                }
                return ret;
            }
        }
        return false;
    }();
    var fullscreen = {
        request: function(elem) {
            var request = fn.requestFullscreen;
            elem = elem || document.documentElement;
            // Work around Safari 5.1 bug: reports support for
            // keyboard in fullscreen even though it doesn't.
            // Browser sniffing, since the alternative with
            // setTimeout is even worse.
            if (/5\.1[\.\d]* Safari/.test(navigator.userAgent)) {
                elem[request]();
            } else {
                elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
            }
        },
        exit: function() {
            document[fn.exitFullscreen]();
        },
        toggle: function(elem) {
            if (this.isFullscreen) {
                this.exit();
            } else {
                this.request(elem);
            }
        },
        onchange: function() {},
        onerror: function() {},
        raw: fn
    };
    if (!fn) {
        module.exports = false;
        return;
    }
    Object.defineProperties(fullscreen, {
        isFullscreen: {
            get: function() {
                return !!document[fn.fullscreenElement];
            }
        },
        element: {
            enumerable: true,
            get: function() {
                return document[fn.fullscreenElement];
            }
        },
        enabled: {
            enumerable: true,
            get: function() {
                // Coerce to boolean in case of old WebKit
                return !!document[fn.fullscreenEnabled];
            }
        }
    });
    document.addEventListener(fn.fullscreenchange, function(e) {
        fullscreen.onchange.call(fullscreen, e);
    });
    document.addEventListener(fn.fullscreenerror, function(e) {
        fullscreen.onerror.call(fullscreen, e);
    });
    //!window.fullscreen && (window.fullscreen = fullscreen);
    UI.fullscreen = fullscreen;
    module.exports = fullscreen;
});
define("util.qrcode", [], function(require, exports, module) {
    var $ = Zepto;
    /**
     * @ver 1.1.0
     * @via https://github.com/aralejs/qrcode/blob/master/src/qrcode.js
     * @license http://aralejs.org/
     */
    var qrcodeAlgObjCache = [];
    /**
     * 二维码构造函数，主要用于绘制
     * @param  {参数列表} opt 传递参数
     * @return {}
     */
    var qrcode = function(opt) {
        if (typeof opt === "string") {
            // 只编码ASCII字符串
            opt = {
                text: opt
            };
        }
        //设置默认参数
        this.options = $.extend({}, {
            text: "",
            render: "",
            width: 256,
            height: 256,
            correctLevel: 3,
            background: "#ffffff",
            foreground: "#000000"
        }, opt);
        //使用QRCodeAlg创建二维码结构
        var qrCodeAlg = null;
        for (var i = 0, l = qrcodeAlgObjCache.length; i < l; i++) {
            if (qrcodeAlgObjCache[i].text == this.options.text && qrcodeAlgObjCache[i].text.correctLevel == this.options.correctLevel) {
                qrCodeAlg = qrcodeAlgObjCache[i].obj;
                break;
            }
        }
        if (i == l) {
            qrCodeAlg = new QRCodeAlg(this.options.text, this.options.correctLevel);
            qrcodeAlgObjCache.push({
                text: this.options.text,
                correctLevel: this.options.correctLevel,
                obj: qrCodeAlg
            });
        }
        if (this.options.render) {
            switch (this.options.render) {
              case "canvas":
                return this.createCanvas(qrCodeAlg);

              case "table":
                return this.createTable(qrCodeAlg);

              case "svg":
                return this.createSVG(qrCodeAlg);

              default:
                return this.createDefault(qrCodeAlg);
            }
        }
        return this.createDefault(qrCodeAlg);
    };
    /**
     * 使用Canvas来画二维码
     * @return {}
     */
    qrcode.prototype.createDefault = function(qrCodeAlg) {
        var canvas = document.createElement("canvas");
        if (canvas.getContext) return this.createCanvas(qrCodeAlg);
        SVG_NS = "http://www.w3.org/2000/svg";
        if (!!document.createElementNS && !!document.createElementNS(SVG_NS, "svg").createSVGRect) return this.createSVG(qrCodeAlg);
        return this.createTable(qrCodeAlg);
    };
    qrcode.prototype.createCanvas = function(qrCodeAlg) {
        //创建canvas节点
        var canvas = document.createElement("canvas");
        canvas.width = this.options.width;
        canvas.height = this.options.height;
        var ctx = canvas.getContext("2d");
        //计算每个点的长宽
        var tileW = (this.options.width / qrCodeAlg.getModuleCount()).toPrecision(4);
        var tileH = this.options.height / qrCodeAlg.getModuleCount().toPrecision(4);
        //绘制
        for (var row = 0; row < qrCodeAlg.getModuleCount(); row++) {
            for (var col = 0; col < qrCodeAlg.getModuleCount(); col++) {
                ctx.fillStyle = qrCodeAlg.modules[row][col] ? this.options.foreground : this.options.background;
                var w = Math.ceil((col + 1) * tileW) - Math.floor(col * tileW);
                var h = Math.ceil((row + 1) * tileW) - Math.floor(row * tileW);
                ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
            }
        }
        //返回绘制的节点
        return canvas;
    };
    /**
     * 使用table来绘制二维码
     * @return {}
     */
    qrcode.prototype.createTable = function(qrCodeAlg) {
        //创建table节点
        var s = [];
        s.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: ' + this.options.background + ';">');
        // 计算每个节点的长宽；取整，防止点之间出现分离
        var tileW = -1, tileH = -1, caculateW = -1, caculateH = -1;
        tileW = caculateW = Math.floor(this.options.width / qrCodeAlg.getModuleCount());
        tileH = caculateH = Math.floor(this.options.height / qrCodeAlg.getModuleCount());
        if (caculateW <= 0) {
            if (qrCodeAlg.getModuleCount() < 80) {
                tileW = 2;
            } else {
                tileW = 1;
            }
        }
        if (caculateH <= 0) {
            if (qrCodeAlg.getModuleCount() < 80) {
                tileH = 2;
            } else {
                tileH = 1;
            }
        }
        // 绘制二维码
        foreTd = '<td style="border:0px; margin:0px; padding:0px; width:' + tileW + "px; background-color: " + this.options.foreground + '"></td>', 
        backTd = '<td style="border:0px; margin:0px; padding:0px; width:' + tileW + "px; background-color: " + this.options.background + '"></td>', 
        l = qrCodeAlg.getModuleCount();
        for (var row = 0; row < l; row++) {
            s.push('<tr style="border:0px; margin:0px; padding:0px; height: ' + tileH + 'px">');
            for (var col = 0; col < l; col++) {
                s.push(qrCodeAlg.modules[row][col] ? foreTd : backTd);
            }
            s.push("</tr>");
        }
        s.push("</table>");
        var span = document.createElement("span");
        span.innerHTML = s.join("");
        return span.firstChild;
    };
    /**
     * 使用SVG开绘制二维码
     * @return {}
     */
    qrcode.prototype.createSVG = function(qrCodeAlg) {
        var x, dx, y, dy, moduleCount = qrCodeAlg.getModuleCount(), scale = this.options.height / this.options.width, svg = '<svg xmlns="http://www.w3.org/2000/svg" ' + 'width="' + this.options.width + 'px" height="' + this.options.height + 'px" ' + 'viewbox="0 0 ' + moduleCount * 10 + " " + moduleCount * 10 * scale + '">', rectHead = "<path ", foreRect = ' style="stroke-width:0.5;stroke:' + this.options.foreground + ";fill:" + this.options.foreground + ';"></path>', backRect = ' style="stroke-width:0.5;stroke:' + this.options.background + ";fill:" + this.options.background + ';"></path>';
        // draw in the svg
        for (var row = 0; row < moduleCount; row++) {
            for (var col = 0; col < moduleCount; col++) {
                x = col * 10;
                y = row * 10 * scale;
                dx = (col + 1) * 10;
                dy = (row + 1) * 10 * scale;
                svg += rectHead + 'd="M ' + x + "," + y + " L " + dx + "," + y + " L " + dx + "," + dy + " L " + x + "," + dy + ' Z"';
                svg += qrCodeAlg.modules[row][col] ? foreRect : backRect;
            }
        }
        svg += "</svg>";
        // return just built svg
        return $(svg)[0];
    };
    module.exports = qrcode;
    /**
     * 获取单个字符的utf8编码
     * unicode BMP平面约65535个字符
     * @param {num} code
     * return {array}
     */
    function unicodeFormat8(code) {
        // 1 byte
        if (code < 128) {
            return [ code ];
        } else if (code < 2048) {
            c0 = 192 + (code >> 6);
            c1 = 128 + (code & 63);
            return [ c0, c1 ];
        } else {
            c0 = 224 + (code >> 12);
            c1 = 128 + (code >> 6 & 63);
            c2 = 128 + (code & 63);
            return [ c0, c1, c2 ];
        }
    }
    /**
     * 获取字符串的utf8编码字节串
     * @param {string} string
     * @return {array}
     */
    function getUTF8Bytes(string) {
        var utf8codes = [];
        for (var i = 0; i < string.length; i++) {
            var code = string.charCodeAt(i);
            var utf8 = unicodeFormat8(code);
            for (var j = 0; j < utf8.length; j++) {
                utf8codes.push(utf8[j]);
            }
        }
        return utf8codes;
    }
    /**
     * 二维码算法实现
     * @param {string} data              要编码的信息字符串
     * @param {num} errorCorrectLevel 纠错等级
     */
    function QRCodeAlg(data, errorCorrectLevel) {
        this.typeNumber = -1;
        //版本
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        //二维矩阵，存放最终结果
        this.moduleCount = 0;
        //矩阵大小
        this.dataCache = null;
        //数据缓存
        this.rsBlocks = null;
        //版本数据信息
        this.totalDataCount = -1;
        //可使用的数据量
        this.data = data;
        this.utf8bytes = getUTF8Bytes(data);
        this.make();
    }
    QRCodeAlg.prototype = {
        constructor: QRCodeAlg,
        /**
         * 获取二维码矩阵大小
         * @return {num} 矩阵大小
         */
        getModuleCount: function() {
            return this.moduleCount;
        },
        /**
         * 编码
         */
        make: function() {
            this.getRightType();
            this.dataCache = this.createData();
            this.createQrcode();
        },
        /**
         * 设置二位矩阵功能图形
         * @param  {bool} test 表示是否在寻找最好掩膜阶段
         * @param  {num} maskPattern 掩膜的版本
         */
        makeImpl: function(maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17;
            this.modules = new Array(this.moduleCount);
            for (var row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);
            }
            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(true, maskPattern);
            if (this.typeNumber >= 7) {
                this.setupTypeNumber(true);
            }
            this.mapData(this.dataCache, maskPattern);
        },
        /**
         * 设置二维码的位置探测图形
         * @param  {num} row 探测图形的中心横坐标
         * @param  {num} col 探测图形的中心纵坐标
         */
        setupPositionProbePattern: function(row, col) {
            for (var r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r) continue;
                for (var c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c) continue;
                    if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
                        this.modules[row + r][col + c] = true;
                    } else {
                        this.modules[row + r][col + c] = false;
                    }
                }
            }
        },
        /**
         * 创建二维码
         * @return {[type]} [description]
         */
        createQrcode: function() {
            var minLostPoint = 0;
            var pattern = 0;
            var bestModules = null;
            for (var i = 0; i < 8; i++) {
                this.makeImpl(i);
                var lostPoint = QRUtil.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                    bestModules = this.modules;
                }
            }
            this.modules = bestModules;
            this.setupTypeInfo(false, pattern);
            if (this.typeNumber >= 7) {
                this.setupTypeNumber(false);
            }
        },
        /**
         * 设置定位图形
         * @return {[type]} [description]
         */
        setupTimingPattern: function() {
            for (var r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null) {
                    continue;
                }
                this.modules[r][6] = r % 2 == 0;
                if (this.modules[6][r] != null) {
                    continue;
                }
                this.modules[6][r] = r % 2 == 0;
            }
        },
        /**
         * 设置矫正图形
         * @return {[type]} [description]
         */
        setupPositionAdjustPattern: function() {
            var pos = QRUtil.getPatternPosition(this.typeNumber);
            for (var i = 0; i < pos.length; i++) {
                for (var j = 0; j < pos.length; j++) {
                    var row = pos[i];
                    var col = pos[j];
                    if (this.modules[row][col] != null) {
                        continue;
                    }
                    for (var r = -2; r <= 2; r++) {
                        for (var c = -2; c <= 2; c++) {
                            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                                this.modules[row + r][col + c] = true;
                            } else {
                                this.modules[row + r][col + c] = false;
                            }
                        }
                    }
                }
            }
        },
        /**
         * 设置版本信息（7以上版本才有）
         * @param  {bool} test 是否处于判断最佳掩膜阶段
         * @return {[type]}      [description]
         */
        setupTypeNumber: function(test) {
            var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        },
        /**
         * 设置格式信息（纠错等级和掩膜版本）
         * @param  {bool} test
         * @param  {num} maskPattern 掩膜版本
         * @return {}
         */
        setupTypeInfo: function(test, maskPattern) {
            var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
            var bits = QRUtil.getBCHTypeInfo(data);
            // vertical
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 6) {
                    this.modules[i][8] = mod;
                } else if (i < 8) {
                    this.modules[i + 1][8] = mod;
                } else {
                    this.modules[this.moduleCount - 15 + i][8] = mod;
                }
                // horizontal
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 8) {
                    this.modules[8][this.moduleCount - i - 1] = mod;
                } else if (i < 9) {
                    this.modules[8][15 - i - 1 + 1] = mod;
                } else {
                    this.modules[8][15 - i - 1] = mod;
                }
            }
            // fixed module
            this.modules[this.moduleCount - 8][8] = !test;
        },
        /**
         * 数据编码
         * @return {[type]} [description]
         */
        createData: function() {
            var buffer = new QRBitBuffer();
            var lengthBits = this.typeNumber > 9 ? 16 : 8;
            buffer.put(4, 4);
            //添加模式
            buffer.put(this.utf8bytes.length, lengthBits);
            for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
                buffer.put(this.utf8bytes[i], 8);
            }
            if (buffer.length + 4 <= this.totalDataCount * 8) {
                buffer.put(0, 4);
            }
            // padding
            while (buffer.length % 8 != 0) {
                buffer.putBit(false);
            }
            // padding
            while (true) {
                if (buffer.length >= this.totalDataCount * 8) {
                    break;
                }
                buffer.put(QRCodeAlg.PAD0, 8);
                if (buffer.length >= this.totalDataCount * 8) {
                    break;
                }
                buffer.put(QRCodeAlg.PAD1, 8);
            }
            return this.createBytes(buffer);
        },
        /**
         * 纠错码编码
         * @param  {buffer} buffer 数据编码
         * @return {[type]}
         */
        createBytes: function(buffer) {
            var offset = 0;
            var maxDcCount = 0;
            var maxEcCount = 0;
            var length = this.rsBlock.length / 3;
            var rsBlocks = new Array();
            for (var i = 0; i < length; i++) {
                var count = this.rsBlock[i * 3 + 0];
                var totalCount = this.rsBlock[i * 3 + 1];
                var dataCount = this.rsBlock[i * 3 + 2];
                for (var j = 0; j < count; j++) {
                    rsBlocks.push([ dataCount, totalCount ]);
                }
            }
            var dcdata = new Array(rsBlocks.length);
            var ecdata = new Array(rsBlocks.length);
            for (var r = 0; r < rsBlocks.length; r++) {
                var dcCount = rsBlocks[r][0];
                var ecCount = rsBlocks[r][1] - dcCount;
                maxDcCount = Math.max(maxDcCount, dcCount);
                maxEcCount = Math.max(maxEcCount, ecCount);
                dcdata[r] = new Array(dcCount);
                for (var i = 0; i < dcdata[r].length; i++) {
                    dcdata[r][i] = 255 & buffer.buffer[i + offset];
                }
                offset += dcCount;
                var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
                var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
                var modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i++) {
                    var modIndex = i + modPoly.getLength() - ecdata[r].length;
                    ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
                }
            }
            var data = new Array(this.totalDataCount);
            var index = 0;
            for (var i = 0; i < maxDcCount; i++) {
                for (var r = 0; r < rsBlocks.length; r++) {
                    if (i < dcdata[r].length) {
                        data[index++] = dcdata[r][i];
                    }
                }
            }
            for (var i = 0; i < maxEcCount; i++) {
                for (var r = 0; r < rsBlocks.length; r++) {
                    if (i < ecdata[r].length) {
                        data[index++] = ecdata[r][i];
                    }
                }
            }
            return data;
        },
        /**
         * 布置模块，构建最终信息
         * @param  {} data
         * @param  {} maskPattern
         * @return {}
         */
        mapData: function(data, maskPattern) {
            var inc = -1;
            var row = this.moduleCount - 1;
            var bitIndex = 7;
            var byteIndex = 0;
            for (var col = this.moduleCount - 1; col > 0; col -= 2) {
                if (col == 6) col--;
                while (true) {
                    for (var c = 0; c < 2; c++) {
                        if (this.modules[row][col - c] == null) {
                            var dark = false;
                            if (byteIndex < data.length) {
                                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                            }
                            var mask = QRUtil.getMask(maskPattern, row, col - c);
                            if (mask) {
                                dark = !dark;
                            }
                            this.modules[row][col - c] = dark;
                            bitIndex--;
                            if (bitIndex == -1) {
                                byteIndex++;
                                bitIndex = 7;
                            }
                        }
                    }
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        }
    };
    /**
     * 填充字段
     */
    QRCodeAlg.PAD0 = 236;
    QRCodeAlg.PAD1 = 17;
    //---------------------------------------------------------------------
    // 纠错等级对应的编码
    //---------------------------------------------------------------------
    var QRErrorCorrectLevel = [ 1, 0, 3, 2 ];
    //---------------------------------------------------------------------
    // 掩膜版本
    //---------------------------------------------------------------------
    var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    //---------------------------------------------------------------------
    // 工具类
    //---------------------------------------------------------------------
    var QRUtil = {
        /*
         每个版本矫正图形的位置
         */
        PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
        G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
        G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
        /*
         BCH编码格式信息
         */
        getBCHTypeInfo: function(data) {
            var d = data << 10;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
                d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
            }
            return (data << 10 | d) ^ QRUtil.G15_MASK;
        },
        /*
         BCH编码版本信息
         */
        getBCHTypeNumber: function(data) {
            var d = data << 12;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
                d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
            }
            return data << 12 | d;
        },
        /*
         获取BCH位信息
         */
        getBCHDigit: function(data) {
            var digit = 0;
            while (data != 0) {
                digit++;
                data >>>= 1;
            }
            return digit;
        },
        /*
         获取版本对应的矫正图形位置
         */
        getPatternPosition: function(typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },
        /*
         掩膜算法
         */
        getMask: function(maskPattern, i, j) {
            switch (maskPattern) {
              case QRMaskPattern.PATTERN000:
                return (i + j) % 2 == 0;

              case QRMaskPattern.PATTERN001:
                return i % 2 == 0;

              case QRMaskPattern.PATTERN010:
                return j % 3 == 0;

              case QRMaskPattern.PATTERN011:
                return (i + j) % 3 == 0;

              case QRMaskPattern.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

              case QRMaskPattern.PATTERN101:
                return i * j % 2 + i * j % 3 == 0;

              case QRMaskPattern.PATTERN110:
                return (i * j % 2 + i * j % 3) % 2 == 0;

              case QRMaskPattern.PATTERN111:
                return (i * j % 3 + (i + j) % 2) % 2 == 0;

              default:
                throw new Error("bad maskPattern:" + maskPattern);
            }
        },
        /*
         获取RS的纠错多项式
         */
        getErrorCorrectPolynomial: function(errorCorrectLength) {
            var a = new QRPolynomial([ 1 ], 0);
            for (var i = 0; i < errorCorrectLength; i++) {
                a = a.multiply(new QRPolynomial([ 1, QRMath.gexp(i) ], 0));
            }
            return a;
        },
        /*
         获取评价
         */
        getLostPoint: function(qrCode) {
            var moduleCount = qrCode.getModuleCount(), lostPoint = 0, darkCount = 0;
            for (var row = 0; row < moduleCount; row++) {
                var sameCount = 0;
                var head = qrCode.modules[row][0];
                for (var col = 0; col < moduleCount; col++) {
                    var current = qrCode.modules[row][col];
                    //level 3 评价
                    if (col < moduleCount - 6) {
                        if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
                            if (col < moduleCount - 10) {
                                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                                    lostPoint += 40;
                                }
                            } else if (col > 3) {
                                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                                    lostPoint += 40;
                                }
                            }
                        }
                    }
                    //level 2 评价
                    if (row < moduleCount - 1 && col < moduleCount - 1) {
                        var count = 0;
                        if (current) count++;
                        if (qrCode.modules[row + 1][col]) count++;
                        if (qrCode.modules[row][col + 1]) count++;
                        if (qrCode.modules[row + 1][col + 1]) count++;
                        if (count == 0 || count == 4) {
                            lostPoint += 3;
                        }
                    }
                    //level 1 评价
                    if (head ^ current) {
                        sameCount++;
                    } else {
                        head = current;
                        if (sameCount >= 5) {
                            lostPoint += 3 + sameCount - 5;
                        }
                        sameCount = 1;
                    }
                    //level 4 评价
                    if (current) {
                        darkCount++;
                    }
                }
            }
            for (var col = 0; col < moduleCount; col++) {
                var sameCount = 0;
                var head = qrCode.modules[0][col];
                for (var row = 0; row < moduleCount; row++) {
                    var current = qrCode.modules[row][col];
                    //level 3 评价
                    if (row < moduleCount - 6) {
                        if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
                            if (row < moduleCount - 10) {
                                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                                    lostPoint += 40;
                                }
                            } else if (row > 3) {
                                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                                    lostPoint += 40;
                                }
                            }
                        }
                    }
                    //level 1 评价
                    if (head ^ current) {
                        sameCount++;
                    } else {
                        head = current;
                        if (sameCount >= 5) {
                            lostPoint += 3 + sameCount - 5;
                        }
                        sameCount = 1;
                    }
                }
            }
            // LEVEL4
            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;
            return lostPoint;
        }
    };
    //---------------------------------------------------------------------
    // QRMath使用的数学工具
    //---------------------------------------------------------------------
    var QRMath = {
        /*
         将n转化为a^m
         */
        glog: function(n) {
            if (n < 1) {
                throw new Error("glog(" + n + ")");
            }
            return QRMath.LOG_TABLE[n];
        },
        /*
         将a^m转化为n
         */
        gexp: function(n) {
            while (n < 0) {
                n += 255;
            }
            while (n >= 256) {
                n -= 255;
            }
            return QRMath.EXP_TABLE[n];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
    for (var i = 0; i < 8; i++) {
        QRMath.EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i++) {
        QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i++) {
        QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
    }
    //---------------------------------------------------------------------
    // QRPolynomial 多项式
    //---------------------------------------------------------------------
    /**
     * 多项式类
     * @param {Array} num   系数
     * @param {num} shift a^shift
     */
    function QRPolynomial(num, shift) {
        if (num.length == undefined) {
            throw new Error(num.length + "/" + shift);
        }
        var offset = 0;
        while (offset < num.length && num[offset] == 0) {
            offset++;
        }
        this.num = new Array(num.length - offset + shift);
        for (var i = 0; i < num.length - offset; i++) {
            this.num[i] = num[i + offset];
        }
    }
    QRPolynomial.prototype = {
        get: function(index) {
            return this.num[index];
        },
        getLength: function() {
            return this.num.length;
        },
        /**
         * 多项式乘法
         * @param  {QRPolynomial} e 被乘多项式
         * @return {[type]}   [description]
         */
        multiply: function(e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for (var i = 0; i < this.getLength(); i++) {
                for (var j = 0; j < e.getLength(); j++) {
                    num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
                }
            }
            return new QRPolynomial(num, 0);
        },
        /**
         * 多项式模运算
         * @param  {QRPolynomial} e 模多项式
         * @return {}
         */
        mod: function(e) {
            var tl = this.getLength(), el = e.getLength();
            if (tl - el < 0) {
                return this;
            }
            var num = new Array(tl);
            for (var i = 0; i < tl; i++) {
                num[i] = this.get(i);
            }
            while (num.length >= el) {
                var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));
                for (var i = 0; i < e.getLength(); i++) {
                    num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
                }
                while (num[0] == 0) {
                    num.shift();
                }
            }
            return new QRPolynomial(num, 0);
        }
    };
    //---------------------------------------------------------------------
    // RS_BLOCK_TABLE
    //---------------------------------------------------------------------
    /*
     二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
     */
    RS_BLOCK_TABLE = [ // L
    // M
    // Q
    // H
    // 1
    [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], // 2
    [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], // 3
    [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], // 4
    [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], // 5
    [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], // 6
    [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], // 7
    [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], // 8
    [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], // 9
    [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], // 10
    [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], // 11
    [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], // 12
    [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], // 13
    [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], // 14
    [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], // 15
    [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], // 16
    [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], // 17
    [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], // 18
    [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], // 19
    [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], // 20
    [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], // 21
    [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], // 22
    [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], // 23
    [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], // 24
    [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], // 25
    [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], // 26
    [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], // 27
    [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], // 28
    [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], // 29
    [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], // 30
    [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], // 31
    [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], // 32
    [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], // 33
    [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], // 34
    [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], // 35
    [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], // 36
    [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], // 37
    [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], // 38
    [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], // 39
    [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], // 40
    [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ];
    /**
     * 根据数据获取对应版本
     * @return {[type]} [description]
     */
    QRCodeAlg.prototype.getRightType = function() {
        for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
            var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
            if (rsBlock == undefined) {
                throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
            }
            var length = rsBlock.length / 3;
            var totalDataCount = 0;
            for (var i = 0; i < length; i++) {
                var count = rsBlock[i * 3 + 0];
                var dataCount = rsBlock[i * 3 + 2];
                totalDataCount += dataCount * count;
            }
            var lengthBytes = typeNumber > 9 ? 2 : 1;
            if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
                this.typeNumber = typeNumber;
                this.rsBlock = rsBlock;
                this.totalDataCount = totalDataCount;
                break;
            }
        }
    };
    //---------------------------------------------------------------------
    // QRBitBuffer
    //---------------------------------------------------------------------
    function QRBitBuffer() {
        this.buffer = new Array();
        this.length = 0;
    }
    QRBitBuffer.prototype = {
        get: function(index) {
            var bufIndex = Math.floor(index / 8);
            return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
        },
        put: function(num, length) {
            for (var i = 0; i < length; i++) {
                this.putBit(num >>> length - i - 1 & 1);
            }
        },
        putBit: function(bit) {
            var bufIndex = Math.floor(this.length / 8);
            if (this.buffer.length <= bufIndex) {
                this.buffer.push(0);
            }
            if (bit) {
                this.buffer[bufIndex] |= 128 >>> this.length % 8;
            }
            this.length++;
        }
    };
    /**
     * 获取单个字符的utf8编码
     * unicode BMP平面约65535个字符
     * @param {num} code
     * return {array}
     */
    function unicodeFormat8(code) {
        // 1 byte
        if (code < 128) {
            return [ code ];
        } else if (code < 2048) {
            c0 = 192 + (code >> 6);
            c1 = 128 + (code & 63);
            return [ c0, c1 ];
        } else {
            c0 = 224 + (code >> 12);
            c1 = 128 + (code >> 6 & 63);
            c2 = 128 + (code & 63);
            return [ c0, c1, c2 ];
        }
    }
    /**
     * 获取字符串的utf8编码字节串
     * @param {string} string
     * @return {array}
     */
    function getUTF8Bytes(string) {
        var utf8codes = [];
        for (var i = 0; i < string.length; i++) {
            var code = string.charCodeAt(i);
            var utf8 = unicodeFormat8(code);
            for (var j = 0; j < utf8.length; j++) {
                utf8codes.push(utf8[j]);
            }
        }
        return utf8codes;
    }
    /**
     * 二维码算法实现
     * @param {string} data              要编码的信息字符串
     * @param {num} errorCorrectLevel 纠错等级
     */
    function QRCodeAlg(data, errorCorrectLevel) {
        this.typeNumber = -1;
        //版本
        this.errorCorrectLevel = errorCorrectLevel;
        this.modules = null;
        //二维矩阵，存放最终结果
        this.moduleCount = 0;
        //矩阵大小
        this.dataCache = null;
        //数据缓存
        this.rsBlocks = null;
        //版本数据信息
        this.totalDataCount = -1;
        //可使用的数据量
        this.data = data;
        this.utf8bytes = getUTF8Bytes(data);
        this.make();
    }
    QRCodeAlg.prototype = {
        constructor: QRCodeAlg,
        /**
         * 获取二维码矩阵大小
         * @return {num} 矩阵大小
         */
        getModuleCount: function() {
            return this.moduleCount;
        },
        /**
         * 编码
         */
        make: function() {
            this.getRightType();
            this.dataCache = this.createData();
            this.createQrcode();
        },
        /**
         * 设置二位矩阵功能图形
         * @param  {bool} test 表示是否在寻找最好掩膜阶段
         * @param  {num} maskPattern 掩膜的版本
         */
        makeImpl: function(maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17;
            this.modules = new Array(this.moduleCount);
            for (var row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);
            }
            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(true, maskPattern);
            if (this.typeNumber >= 7) {
                this.setupTypeNumber(true);
            }
            this.mapData(this.dataCache, maskPattern);
        },
        /**
         * 设置二维码的位置探测图形
         * @param  {num} row 探测图形的中心横坐标
         * @param  {num} col 探测图形的中心纵坐标
         */
        setupPositionProbePattern: function(row, col) {
            for (var r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r) continue;
                for (var c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c) continue;
                    if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
                        this.modules[row + r][col + c] = true;
                    } else {
                        this.modules[row + r][col + c] = false;
                    }
                }
            }
        },
        /**
         * 创建二维码
         * @return {[type]} [description]
         */
        createQrcode: function() {
            var minLostPoint = 0;
            var pattern = 0;
            var bestModules = null;
            for (var i = 0; i < 8; i++) {
                this.makeImpl(i);
                var lostPoint = QRUtil.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                    bestModules = this.modules;
                }
            }
            this.modules = bestModules;
            this.setupTypeInfo(false, pattern);
            if (this.typeNumber >= 7) {
                this.setupTypeNumber(false);
            }
        },
        /**
         * 设置定位图形
         * @return {[type]} [description]
         */
        setupTimingPattern: function() {
            for (var r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null) {
                    continue;
                }
                this.modules[r][6] = r % 2 == 0;
                if (this.modules[6][r] != null) {
                    continue;
                }
                this.modules[6][r] = r % 2 == 0;
            }
        },
        /**
         * 设置矫正图形
         * @return {[type]} [description]
         */
        setupPositionAdjustPattern: function() {
            var pos = QRUtil.getPatternPosition(this.typeNumber);
            for (var i = 0; i < pos.length; i++) {
                for (var j = 0; j < pos.length; j++) {
                    var row = pos[i];
                    var col = pos[j];
                    if (this.modules[row][col] != null) {
                        continue;
                    }
                    for (var r = -2; r <= 2; r++) {
                        for (var c = -2; c <= 2; c++) {
                            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                                this.modules[row + r][col + c] = true;
                            } else {
                                this.modules[row + r][col + c] = false;
                            }
                        }
                    }
                }
            }
        },
        /**
         * 设置版本信息（7以上版本才有）
         * @param  {bool} test 是否处于判断最佳掩膜阶段
         * @return {[type]}      [description]
         */
        setupTypeNumber: function(test) {
            var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
            for (var i = 0; i < 18; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        },
        /**
         * 设置格式信息（纠错等级和掩膜版本）
         * @param  {bool} test
         * @param  {num} maskPattern 掩膜版本
         * @return {}
         */
        setupTypeInfo: function(test, maskPattern) {
            var data = QRErrorCorrectLevel[this.errorCorrectLevel] << 3 | maskPattern;
            var bits = QRUtil.getBCHTypeInfo(data);
            // vertical
            for (var i = 0; i < 15; i++) {
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 6) {
                    this.modules[i][8] = mod;
                } else if (i < 8) {
                    this.modules[i + 1][8] = mod;
                } else {
                    this.modules[this.moduleCount - 15 + i][8] = mod;
                }
                // horizontal
                var mod = !test && (bits >> i & 1) == 1;
                if (i < 8) {
                    this.modules[8][this.moduleCount - i - 1] = mod;
                } else if (i < 9) {
                    this.modules[8][15 - i - 1 + 1] = mod;
                } else {
                    this.modules[8][15 - i - 1] = mod;
                }
            }
            // fixed module
            this.modules[this.moduleCount - 8][8] = !test;
        },
        /**
         * 数据编码
         * @return {[type]} [description]
         */
        createData: function() {
            var buffer = new QRBitBuffer();
            var lengthBits = this.typeNumber > 9 ? 16 : 8;
            buffer.put(4, 4);
            //添加模式
            buffer.put(this.utf8bytes.length, lengthBits);
            for (var i = 0, l = this.utf8bytes.length; i < l; i++) {
                buffer.put(this.utf8bytes[i], 8);
            }
            if (buffer.length + 4 <= this.totalDataCount * 8) {
                buffer.put(0, 4);
            }
            // padding
            while (buffer.length % 8 != 0) {
                buffer.putBit(false);
            }
            // padding
            while (true) {
                if (buffer.length >= this.totalDataCount * 8) {
                    break;
                }
                buffer.put(QRCodeAlg.PAD0, 8);
                if (buffer.length >= this.totalDataCount * 8) {
                    break;
                }
                buffer.put(QRCodeAlg.PAD1, 8);
            }
            return this.createBytes(buffer);
        },
        /**
         * 纠错码编码
         * @param  {buffer} buffer 数据编码
         * @return {[type]}
         */
        createBytes: function(buffer) {
            var offset = 0;
            var maxDcCount = 0;
            var maxEcCount = 0;
            var length = this.rsBlock.length / 3;
            var rsBlocks = new Array();
            for (var i = 0; i < length; i++) {
                var count = this.rsBlock[i * 3 + 0];
                var totalCount = this.rsBlock[i * 3 + 1];
                var dataCount = this.rsBlock[i * 3 + 2];
                for (var j = 0; j < count; j++) {
                    rsBlocks.push([ dataCount, totalCount ]);
                }
            }
            var dcdata = new Array(rsBlocks.length);
            var ecdata = new Array(rsBlocks.length);
            for (var r = 0; r < rsBlocks.length; r++) {
                var dcCount = rsBlocks[r][0];
                var ecCount = rsBlocks[r][1] - dcCount;
                maxDcCount = Math.max(maxDcCount, dcCount);
                maxEcCount = Math.max(maxEcCount, ecCount);
                dcdata[r] = new Array(dcCount);
                for (var i = 0; i < dcdata[r].length; i++) {
                    dcdata[r][i] = 255 & buffer.buffer[i + offset];
                }
                offset += dcCount;
                var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
                var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
                var modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (var i = 0; i < ecdata[r].length; i++) {
                    var modIndex = i + modPoly.getLength() - ecdata[r].length;
                    ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
                }
            }
            var data = new Array(this.totalDataCount);
            var index = 0;
            for (var i = 0; i < maxDcCount; i++) {
                for (var r = 0; r < rsBlocks.length; r++) {
                    if (i < dcdata[r].length) {
                        data[index++] = dcdata[r][i];
                    }
                }
            }
            for (var i = 0; i < maxEcCount; i++) {
                for (var r = 0; r < rsBlocks.length; r++) {
                    if (i < ecdata[r].length) {
                        data[index++] = ecdata[r][i];
                    }
                }
            }
            return data;
        },
        /**
         * 布置模块，构建最终信息
         * @param  {} data
         * @param  {} maskPattern
         * @return {}
         */
        mapData: function(data, maskPattern) {
            var inc = -1;
            var row = this.moduleCount - 1;
            var bitIndex = 7;
            var byteIndex = 0;
            for (var col = this.moduleCount - 1; col > 0; col -= 2) {
                if (col == 6) col--;
                while (true) {
                    for (var c = 0; c < 2; c++) {
                        if (this.modules[row][col - c] == null) {
                            var dark = false;
                            if (byteIndex < data.length) {
                                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                            }
                            var mask = QRUtil.getMask(maskPattern, row, col - c);
                            if (mask) {
                                dark = !dark;
                            }
                            this.modules[row][col - c] = dark;
                            bitIndex--;
                            if (bitIndex == -1) {
                                byteIndex++;
                                bitIndex = 7;
                            }
                        }
                    }
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        }
    };
    /**
     * 填充字段
     */
    QRCodeAlg.PAD0 = 236;
    QRCodeAlg.PAD1 = 17;
    //---------------------------------------------------------------------
    // 纠错等级对应的编码
    //---------------------------------------------------------------------
    var QRErrorCorrectLevel = [ 1, 0, 3, 2 ];
    //---------------------------------------------------------------------
    // 掩膜版本
    //---------------------------------------------------------------------
    var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    //---------------------------------------------------------------------
    // 工具类
    //---------------------------------------------------------------------
    var QRUtil = {
        /*
         每个版本矫正图形的位置
         */
        PATTERN_POSITION_TABLE: [ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
        G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
        G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
        /*
         BCH编码格式信息
         */
        getBCHTypeInfo: function(data) {
            var d = data << 10;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
                d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
            }
            return (data << 10 | d) ^ QRUtil.G15_MASK;
        },
        /*
         BCH编码版本信息
         */
        getBCHTypeNumber: function(data) {
            var d = data << 12;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
                d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
            }
            return data << 12 | d;
        },
        /*
         获取BCH位信息
         */
        getBCHDigit: function(data) {
            var digit = 0;
            while (data != 0) {
                digit++;
                data >>>= 1;
            }
            return digit;
        },
        /*
         获取版本对应的矫正图形位置
         */
        getPatternPosition: function(typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },
        /*
         掩膜算法
         */
        getMask: function(maskPattern, i, j) {
            switch (maskPattern) {
              case QRMaskPattern.PATTERN000:
                return (i + j) % 2 == 0;

              case QRMaskPattern.PATTERN001:
                return i % 2 == 0;

              case QRMaskPattern.PATTERN010:
                return j % 3 == 0;

              case QRMaskPattern.PATTERN011:
                return (i + j) % 3 == 0;

              case QRMaskPattern.PATTERN100:
                return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;

              case QRMaskPattern.PATTERN101:
                return i * j % 2 + i * j % 3 == 0;

              case QRMaskPattern.PATTERN110:
                return (i * j % 2 + i * j % 3) % 2 == 0;

              case QRMaskPattern.PATTERN111:
                return (i * j % 3 + (i + j) % 2) % 2 == 0;

              default:
                throw new Error("bad maskPattern:" + maskPattern);
            }
        },
        /*
         获取RS的纠错多项式
         */
        getErrorCorrectPolynomial: function(errorCorrectLength) {
            var a = new QRPolynomial([ 1 ], 0);
            for (var i = 0; i < errorCorrectLength; i++) {
                a = a.multiply(new QRPolynomial([ 1, QRMath.gexp(i) ], 0));
            }
            return a;
        },
        /*
         获取评价
         */
        getLostPoint: function(qrCode) {
            var moduleCount = qrCode.getModuleCount(), lostPoint = 0, darkCount = 0;
            for (var row = 0; row < moduleCount; row++) {
                var sameCount = 0;
                var head = qrCode.modules[row][0];
                for (var col = 0; col < moduleCount; col++) {
                    var current = qrCode.modules[row][col];
                    //level 3 评价
                    if (col < moduleCount - 6) {
                        if (current && !qrCode.modules[row][col + 1] && qrCode.modules[row][col + 2] && qrCode.modules[row][col + 3] && qrCode.modules[row][col + 4] && !qrCode.modules[row][col + 5] && qrCode.modules[row][col + 6]) {
                            if (col < moduleCount - 10) {
                                if (qrCode.modules[row][col + 7] && qrCode.modules[row][col + 8] && qrCode.modules[row][col + 9] && qrCode.modules[row][col + 10]) {
                                    lostPoint += 40;
                                }
                            } else if (col > 3) {
                                if (qrCode.modules[row][col - 1] && qrCode.modules[row][col - 2] && qrCode.modules[row][col - 3] && qrCode.modules[row][col - 4]) {
                                    lostPoint += 40;
                                }
                            }
                        }
                    }
                    //level 2 评价
                    if (row < moduleCount - 1 && col < moduleCount - 1) {
                        var count = 0;
                        if (current) count++;
                        if (qrCode.modules[row + 1][col]) count++;
                        if (qrCode.modules[row][col + 1]) count++;
                        if (qrCode.modules[row + 1][col + 1]) count++;
                        if (count == 0 || count == 4) {
                            lostPoint += 3;
                        }
                    }
                    //level 1 评价
                    if (head ^ current) {
                        sameCount++;
                    } else {
                        head = current;
                        if (sameCount >= 5) {
                            lostPoint += 3 + sameCount - 5;
                        }
                        sameCount = 1;
                    }
                    //level 4 评价
                    if (current) {
                        darkCount++;
                    }
                }
            }
            for (var col = 0; col < moduleCount; col++) {
                var sameCount = 0;
                var head = qrCode.modules[0][col];
                for (var row = 0; row < moduleCount; row++) {
                    var current = qrCode.modules[row][col];
                    //level 3 评价
                    if (row < moduleCount - 6) {
                        if (current && !qrCode.modules[row + 1][col] && qrCode.modules[row + 2][col] && qrCode.modules[row + 3][col] && qrCode.modules[row + 4][col] && !qrCode.modules[row + 5][col] && qrCode.modules[row + 6][col]) {
                            if (row < moduleCount - 10) {
                                if (qrCode.modules[row + 7][col] && qrCode.modules[row + 8][col] && qrCode.modules[row + 9][col] && qrCode.modules[row + 10][col]) {
                                    lostPoint += 40;
                                }
                            } else if (row > 3) {
                                if (qrCode.modules[row - 1][col] && qrCode.modules[row - 2][col] && qrCode.modules[row - 3][col] && qrCode.modules[row - 4][col]) {
                                    lostPoint += 40;
                                }
                            }
                        }
                    }
                    //level 1 评价
                    if (head ^ current) {
                        sameCount++;
                    } else {
                        head = current;
                        if (sameCount >= 5) {
                            lostPoint += 3 + sameCount - 5;
                        }
                        sameCount = 1;
                    }
                }
            }
            // LEVEL4
            var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;
            return lostPoint;
        }
    };
    //---------------------------------------------------------------------
    // QRMath使用的数学工具
    //---------------------------------------------------------------------
    var QRMath = {
        /*
         将n转化为a^m
         */
        glog: function(n) {
            if (n < 1) {
                throw new Error("glog(" + n + ")");
            }
            return QRMath.LOG_TABLE[n];
        },
        /*
         将a^m转化为n
         */
        gexp: function(n) {
            while (n < 0) {
                n += 255;
            }
            while (n >= 256) {
                n -= 255;
            }
            return QRMath.EXP_TABLE[n];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
    for (var i = 0; i < 8; i++) {
        QRMath.EXP_TABLE[i] = 1 << i;
    }
    for (var i = 8; i < 256; i++) {
        QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
    }
    for (var i = 0; i < 255; i++) {
        QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
    }
    //---------------------------------------------------------------------
    // QRPolynomial 多项式
    //---------------------------------------------------------------------
    /**
     * 多项式类
     * @param {Array} num   系数
     * @param {num} shift a^shift
     */
    function QRPolynomial(num, shift) {
        if (num.length == undefined) {
            throw new Error(num.length + "/" + shift);
        }
        var offset = 0;
        while (offset < num.length && num[offset] == 0) {
            offset++;
        }
        this.num = new Array(num.length - offset + shift);
        for (var i = 0; i < num.length - offset; i++) {
            this.num[i] = num[i + offset];
        }
    }
    QRPolynomial.prototype = {
        get: function(index) {
            return this.num[index];
        },
        getLength: function() {
            return this.num.length;
        },
        /**
         * 多项式乘法
         * @param  {QRPolynomial} e 被乘多项式
         * @return {[type]}   [description]
         */
        multiply: function(e) {
            var num = new Array(this.getLength() + e.getLength() - 1);
            for (var i = 0; i < this.getLength(); i++) {
                for (var j = 0; j < e.getLength(); j++) {
                    num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
                }
            }
            return new QRPolynomial(num, 0);
        },
        /**
         * 多项式模运算
         * @param  {QRPolynomial} e 模多项式
         * @return {}
         */
        mod: function(e) {
            var tl = this.getLength(), el = e.getLength();
            if (tl - el < 0) {
                return this;
            }
            var num = new Array(tl);
            for (var i = 0; i < tl; i++) {
                num[i] = this.get(i);
            }
            while (num.length >= el) {
                var ratio = QRMath.glog(num[0]) - QRMath.glog(e.get(0));
                for (var i = 0; i < e.getLength(); i++) {
                    num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
                }
                while (num[0] == 0) {
                    num.shift();
                }
            }
            return new QRPolynomial(num, 0);
        }
    };
    //---------------------------------------------------------------------
    // RS_BLOCK_TABLE
    //---------------------------------------------------------------------
    /*
     二维码各个版本信息[块数, 每块中的数据块数, 每块中的信息块数]
     */
    RS_BLOCK_TABLE = [ // L
    // M
    // Q
    // H
    // 1
    [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], // 2
    [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], // 3
    [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], // 4
    [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], // 5
    [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], // 6
    [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], // 7
    [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], // 8
    [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], // 9
    [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], // 10
    [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], // 11
    [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], // 12
    [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], // 13
    [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], // 14
    [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], // 15
    [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], // 16
    [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], // 17
    [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], // 18
    [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], // 19
    [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], // 20
    [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], // 21
    [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], // 22
    [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], // 23
    [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], // 24
    [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], // 25
    [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], // 26
    [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], // 27
    [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], // 28
    [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], // 29
    [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], // 30
    [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], // 31
    [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], // 32
    [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], // 33
    [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], // 34
    [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], // 35
    [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], // 36
    [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], // 37
    [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], // 38
    [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], // 39
    [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], // 40
    [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ];
    /**
     * 根据数据获取对应版本
     * @return {[type]} [description]
     */
    QRCodeAlg.prototype.getRightType = function() {
        for (var typeNumber = 1; typeNumber < 41; typeNumber++) {
            var rsBlock = RS_BLOCK_TABLE[(typeNumber - 1) * 4 + this.errorCorrectLevel];
            if (rsBlock == undefined) {
                throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + this.errorCorrectLevel);
            }
            var length = rsBlock.length / 3;
            var totalDataCount = 0;
            for (var i = 0; i < length; i++) {
                var count = rsBlock[i * 3 + 0];
                var dataCount = rsBlock[i * 3 + 2];
                totalDataCount += dataCount * count;
            }
            var lengthBytes = typeNumber > 9 ? 2 : 1;
            if (this.utf8bytes.length + lengthBytes < totalDataCount || typeNumber == 40) {
                this.typeNumber = typeNumber;
                this.rsBlock = rsBlock;
                this.totalDataCount = totalDataCount;
                break;
            }
        }
    };
    //---------------------------------------------------------------------
    // QRBitBuffer
    //---------------------------------------------------------------------
    function QRBitBuffer() {
        this.buffer = new Array();
        this.length = 0;
    }
    QRBitBuffer.prototype = {
        get: function(index) {
            var bufIndex = Math.floor(index / 8);
            return this.buffer[bufIndex] >>> 7 - index % 8 & 1;
        },
        put: function(num, length) {
            for (var i = 0; i < length; i++) {
                this.putBit(num >>> length - i - 1 & 1);
            }
        },
        putBit: function(bit) {
            var bufIndex = Math.floor(this.length / 8);
            if (this.buffer.length <= bufIndex) {
                this.buffer.push(0);
            }
            if (bit) {
                this.buffer[bufIndex] |= 128 >>> this.length % 8;
            }
            this.length++;
        }
    };
});
define("zepto.extend.data", [], function(require, exports, module) {
    var $ = window.Zepto;
    //     Zepto.js
    //     (c) 2010-2014 Thomas Fuchs
    //     Zepto.js may be freely distributed under the MIT license.
    // The following code is heavily inspired by jQuery's $.fn.data()
    var data = {}, dataAttr = $.fn.data, camelize = $.camelCase, exp = $.expando = "Zepto" + +new Date(), emptyArray = [];
    // Get value from node:
    // 1. first try key as given,
    // 2. then try camelized key,
    // 3. fall back to reading "data-*" attribute.
    function getData(node, name) {
        var id = node[exp], store = id && data[id];
        if (name === undefined) return store || setData(node); else {
            if (store) {
                if (name in store) return store[name];
                var camelName = camelize(name);
                if (camelName in store) return store[camelName];
            }
            return dataAttr.call($(node), name);
        }
    }
    // Store value under camelized key on node
    function setData(node, name, value) {
        var id = node[exp] || (node[exp] = ++$.uuid), store = data[id] || (data[id] = attributeData(node));
        if (name !== undefined) store[camelize(name)] = value;
        return store;
    }
    // Read all "data-*" attributes from a node
    function attributeData(node) {
        var store = {};
        $.each(node.attributes || emptyArray, function(i, attr) {
            if (attr.name.indexOf("data-") == 0) store[camelize(attr.name.replace("data-", ""))] = $.zepto.deserializeValue(attr.value);
        });
        return store;
    }
    $.fn.data = function(name, value) {
        return value === undefined ? // set multiple values via object
        $.isPlainObject(name) ? this.each(function(i, node) {
            $.each(name, function(key, value) {
                setData(node, key, value);
            });
        }) : // get value from first element
        0 in this ? getData(this[0], name) : undefined : // set value on all elements
        this.each(function() {
            setData(this, name, value);
        });
    };
    $.fn.removeData = function(names) {
        if (typeof names == "string") names = names.split(/\s+/);
        return this.each(function() {
            var id = this[exp], store = id && data[id];
            if (store) $.each(names || store, function(key) {
                delete store[names ? camelize(this) : key];
            });
        });
    };
    [ "remove", "empty" ].forEach(function(methodName) {
        var origFn = $.fn[methodName];
        $.fn[methodName] = function() {
            var elements = this.find("*");
            if (methodName === "remove") elements = elements.add(this);
            elements.removeData();
            return origFn.call(this);
        };
    });
});
define("zepto.extend.fx", [], function(require, exports, module) {
    var $ = window.Zepto;
    // Zepto.js
    // (c) 2010-2014 Thomas Fuchs
    // Zepto.js may be freely distributed under the MIT license.
    var prefix = "", eventPrefix, endEventName, endAnimationName, vendors = {
        Webkit: "webkit",
        Moz: "",
        O: "o"
    }, document = window.document, testEl = document.createElement("div"), supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, transform, transitionProperty, transitionDuration, transitionTiming, transitionDelay, animationName, animationDuration, animationTiming, animationDelay, cssReset = {};
    function dasherize(str) {
        return str.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase();
    }
    function normalizeEvent(name) {
        return eventPrefix ? eventPrefix + name : name.toLowerCase();
    }
    $.each(vendors, function(vendor, event) {
        if (testEl.style[vendor + "TransitionProperty"] !== undefined) {
            prefix = "-" + vendor.toLowerCase() + "-";
            eventPrefix = event;
            return false;
        }
    });
    transform = prefix + "transform";
    cssReset[transitionProperty = prefix + "transition-property"] = cssReset[transitionDuration = prefix + "transition-duration"] = cssReset[transitionDelay = prefix + "transition-delay"] = cssReset[transitionTiming = prefix + "transition-timing-function"] = cssReset[animationName = prefix + "animation-name"] = cssReset[animationDuration = prefix + "animation-duration"] = cssReset[animationDelay = prefix + "animation-delay"] = cssReset[animationTiming = prefix + "animation-timing-function"] = "";
    $.fx = {
        off: eventPrefix === undefined && testEl.style.transitionProperty === undefined,
        speeds: {
            _default: 400,
            fast: 200,
            slow: 600
        },
        cssPrefix: prefix,
        transitionEnd: normalizeEvent("TransitionEnd"),
        animationEnd: normalizeEvent("AnimationEnd")
    };
    $.fn.animate = function(properties, duration, ease, callback, delay) {
        if ($.isFunction(duration)) callback = duration, ease = undefined, duration = undefined;
        if ($.isFunction(ease)) callback = ease, ease = undefined;
        if ($.isPlainObject(duration)) ease = duration.easing, callback = duration.complete, 
        delay = duration.delay, duration = duration.duration;
        if (duration) duration = (typeof duration == "number" ? duration : $.fx.speeds[duration] || $.fx.speeds._default) / 1e3;
        if (delay) delay = parseFloat(delay) / 1e3;
        return this.anim(properties, duration, ease, callback, delay);
    };
    $.fn.anim = function(properties, duration, ease, callback, delay) {
        var key, cssValues = {}, cssProperties, transforms = "", that = this, wrappedCallback, endEvent = $.fx.transitionEnd, fired = false;
        if (duration === undefined) duration = $.fx.speeds._default / 1e3;
        if (delay === undefined) delay = 0;
        if ($.fx.off) duration = 0;
        if (typeof properties == "string") {
            // keyframe animation
            cssValues[animationName] = properties;
            cssValues[animationDuration] = duration + "s";
            cssValues[animationDelay] = delay + "s";
            cssValues[animationTiming] = ease || "linear";
            endEvent = $.fx.animationEnd;
        } else {
            cssProperties = [];
            // CSS transitions
            for (key in properties) if (supportedTransforms.test(key)) transforms += key + "(" + properties[key] + ") "; else cssValues[key] = properties[key], 
            cssProperties.push(dasherize(key));
            if (transforms) cssValues[transform] = transforms, cssProperties.push(transform);
            if (duration > 0 && typeof properties === "object") {
                cssValues[transitionProperty] = cssProperties.join(", ");
                cssValues[transitionDuration] = duration + "s";
                cssValues[transitionDelay] = delay + "s";
                cssValues[transitionTiming] = ease || "linear";
            }
        }
        wrappedCallback = function(event) {
            if (typeof event !== "undefined") {
                if (event.target !== event.currentTarget) return;
                // makes sure the event didn't bubble from "below"
                $(event.target).unbind(endEvent, wrappedCallback);
            } else $(this).unbind(endEvent, wrappedCallback);
            // triggered by setTimeout
            fired = true;
            $(this).css(cssReset);
            callback && callback.call(this);
        };
        if (duration > 0) {
            this.bind(endEvent, wrappedCallback);
            // transitionEnd is not always firing on older Android phones
            // so make sure it gets fired
            setTimeout(function() {
                if (fired) return;
                wrappedCallback.call(that);
            }, duration * 1e3 + 25);
        }
        // trigger page reflow so new elements can animate
        this.size() && this.get(0).clientLeft;
        this.css(cssValues);
        if (duration <= 0) setTimeout(function() {
            that.each(function() {
                wrappedCallback.call(this);
            });
        }, 0);
        return this;
    };
    testEl = null;
});
define("zepto.extend.selector", [], function(require, exports, module) {
    var $ = window.Zepto;
    // Zepto.js
    // (c) 2010-2014 Thomas Fuchs
    // Zepto.js may be freely distributed under the MIT license.
    var zepto = $.zepto, oldQsa = zepto.qsa, oldMatches = zepto.matches;
    function visible(elem) {
        elem = $(elem);
        return !!(elem.width() || elem.height()) && elem.css("display") !== "none";
    }
    // Implements a subset from:
    // http://api.jquery.com/category/selectors/jquery-selector-extensions/
    //
    // Each filter function receives the current index, all nodes in the
    // considered set, and a value if there were parentheses. The value
    // of `this` is the node currently being considered. The function returns the
    // resulting node(s), null, or undefined.
    //
    // Complex selectors are not supported:
    // li:has(label:contains("foo")) + li:has(label:contains("bar"))
    // ul.inner:first > li
    var filters = $.expr[":"] = {
        visible: function() {
            if (visible(this)) return this;
        },
        hidden: function() {
            if (!visible(this)) return this;
        },
        selected: function() {
            if (this.selected) return this;
        },
        checked: function() {
            if (this.checked) return this;
        },
        parent: function() {
            return this.parentNode;
        },
        first: function(idx) {
            if (idx === 0) return this;
        },
        last: function(idx, nodes) {
            if (idx === nodes.length - 1) return this;
        },
        eq: function(idx, _, value) {
            if (idx === value) return this;
        },
        contains: function(idx, _, text) {
            if ($(this).text().indexOf(text) > -1) return this;
        },
        has: function(idx, _, sel) {
            if (zepto.qsa(this, sel).length) return this;
        }
    };
    var filterRe = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), childRe = /^\s*>/, classTag = "Zepto" + +new Date();
    function process(sel, fn) {
        // quote the hash in `a[href^=#]` expression
        sel = sel.replace(/=#\]/g, '="#"]');
        var filter, arg, match = filterRe.exec(sel);
        if (match && match[2] in filters) {
            filter = filters[match[2]], arg = match[3];
            sel = match[1];
            if (arg) {
                var num = Number(arg);
                if (isNaN(num)) arg = arg.replace(/^["']|["']$/g, ""); else arg = num;
            }
        }
        return fn(sel, filter, arg);
    }
    zepto.qsa = function(node, selector) {
        return process(selector, function(sel, filter, arg) {
            try {
                var taggedParent;
                if (!sel && filter) sel = "*"; else if (childRe.test(sel)) // support "> *" child queries by tagging the parent node with a
                // unique class and prepending that classname onto the selector
                taggedParent = $(node).addClass(classTag), sel = "." + classTag + " " + sel;
                var nodes = oldQsa(node, sel);
            } catch (e) {
                console.error("error performing selector: %o", selector);
                throw e;
            } finally {
                if (taggedParent) taggedParent.removeClass(classTag);
            }
            return !filter ? nodes : zepto.uniq($.map(nodes, function(n, i) {
                return filter.call(n, i, nodes, arg);
            }));
        });
    };
    zepto.matches = function(node, selector) {
        return process(selector, function(sel, filter, arg) {
            return (!sel || oldMatches(node, sel)) && (!filter || filter.call(node, null, arg) === node);
        });
    };
});
define("zepto.extend.touch", [], function(require, exports, module) {
    // 2014.01.22  Support IE11 touch events.
    var $ = window.Zepto;
    // Zepto.js
    // (c) 2010-2014 Thomas Fuchs
    // Zepto.js may be freely distributed under the MIT license.
    var touch = {}, touchTimeout, tapTimeout, swipeTimeout, longTapTimeout, longTapDelay = 750, gesture;
    function swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? "Left" : "Right" : y1 - y2 > 0 ? "Up" : "Down";
    }
    function longTap() {
        longTapTimeout = null;
        if (touch.last) {
            touch.el.trigger("longTap");
            touch = {};
        }
    }
    function cancelLongTap() {
        if (longTapTimeout) clearTimeout(longTapTimeout);
        longTapTimeout = null;
    }
    function cancelAll() {
        if (touchTimeout) clearTimeout(touchTimeout);
        if (tapTimeout) clearTimeout(tapTimeout);
        if (swipeTimeout) clearTimeout(swipeTimeout);
        if (longTapTimeout) clearTimeout(longTapTimeout);
        touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
        touch = {};
    }
    function isPrimaryTouch(event) {
        return (event.pointerType == "touch" || event.pointerType == event.MSPOINTER_TYPE_TOUCH) && event.isPrimary;
    }
    function isPointerEventType(e, type) {
        return e.type == "pointer" + type || e.type.toLowerCase() == "mspointer" + type;
    }
    $(document).ready(function() {
        var now, delta, deltaX = 0, deltaY = 0, firstTouch, _isPointerType;
        if ("MSGesture" in window) {
            gesture = new MSGesture();
            gesture.target = document.body;
        }
        $(document).bind("MSGestureEnd", function(e) {
            var swipeDirectionFromVelocity = e.velocityX > 1 ? "Right" : e.velocityX < -1 ? "Left" : e.velocityY > 1 ? "Down" : e.velocityY < -1 ? "Up" : null;
            if (swipeDirectionFromVelocity) {
                touch.el.trigger("swipe");
                touch.el.trigger("swipe" + swipeDirectionFromVelocity);
            }
        }).on("touchstart MSPointerDown pointerdown", function(e) {
            if ((_isPointerType = isPointerEventType(e, "down")) && !isPrimaryTouch(e)) return;
            firstTouch = _isPointerType ? e : e.touches[0];
            if (e.touches && e.touches.length === 1 && touch.x2) {
                // Clear out touch movement data if we have it sticking around
                // This can occur if touchcancel doesn't fire due to preventDefault, etc.
                touch.x2 = undefined;
                touch.y2 = undefined;
            }
            now = Date.now();
            delta = now - (touch.last || now);
            touch.el = $("tagName" in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);
            touchTimeout && clearTimeout(touchTimeout);
            touch.x1 = firstTouch.pageX;
            touch.y1 = firstTouch.pageY;
            if (delta > 0 && delta <= 250) touch.isDoubleTap = true;
            touch.last = now;
            longTapTimeout = setTimeout(longTap, longTapDelay);
            // adds the current touch contact for IE gesture recognition
            if (gesture && _isPointerType) gesture.addPointer(e.pointerId);
        }).on("touchmove MSPointerMove pointermove", function(e) {
            if ((_isPointerType = isPointerEventType(e, "move")) && !isPrimaryTouch(e)) return;
            firstTouch = _isPointerType ? e : e.touches[0];
            cancelLongTap();
            touch.x2 = firstTouch.pageX;
            touch.y2 = firstTouch.pageY;
            deltaX += Math.abs(touch.x1 - touch.x2);
            deltaY += Math.abs(touch.y1 - touch.y2);
        }).on("touchend MSPointerUp pointerup", function(e) {
            if ((_isPointerType = isPointerEventType(e, "up")) && !isPrimaryTouch(e)) return;
            cancelLongTap();
            // swipe
            if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) swipeTimeout = setTimeout(function() {
                touch.el.trigger("swipe");
                touch.el.trigger("swipe" + swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2));
                touch = {};
            }, 0); else if ("last" in touch) // don't fire tap when delta position changed by more than 30 pixels,
            // for instance when moving to a point and back to origin
            if (deltaX < 30 && deltaY < 30) {
                // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
                // ('tap' fires before 'scroll')
                tapTimeout = setTimeout(function() {
                    // trigger universal 'tap' with the option to cancelTouch()
                    // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
                    var event = $.Event("tap");
                    event.cancelTouch = cancelAll;
                    touch.el.trigger(event);
                    // trigger double tap immediately
                    if (touch.isDoubleTap) {
                        if (touch.el) touch.el.trigger("doubleTap");
                        touch = {};
                    } else {
                        touchTimeout = setTimeout(function() {
                            touchTimeout = null;
                            if (touch.el) touch.el.trigger("singleTap");
                            touch = {};
                        }, 250);
                    }
                }, 0);
            } else {
                touch = {};
            }
            deltaX = deltaY = 0;
        }).on("touchcancel MSPointerCancel pointercancel", cancelAll);
        // scrolling the window indicates intention of the user
        // to scroll, not tap or swipe, so cancel all ongoing events
        $(window).on("scroll", cancelAll);
    });
    [ "swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap" ].forEach(function(eventName) {
        $.fn[eventName] = function(callback) {
            return this.on(eventName, callback);
        };
    });
});
define("zepto.flexslider", [ "core", "zepto.extend.fx", "zepto.extend.data", "zepto.extend.selector" ], function(require, exports, module) {
    var $ = window.Zepto;
    require("core");
    require("zepto.extend.data");
    // Zepto $.data patch
    $.data = function(elem, key, value) {
        return $(elem).data(key, value);
    };
    //scrollLeft
    [ "Left", "Top" ].forEach(function(name, i) {
        var method = "scroll" + name;
        function isWindow(obj) {
            return obj && typeof obj === "object" && "setInterval" in obj;
        }
        function getWindow(elem) {
            return isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
        }
        $.fn[method] = function(val) {
            var elem, win;
            if (val === undefined) {
                elem = this[0];
                if (!elem) {
                    return null;
                }
                win = getWindow(elem);
                // Return the scroll offset
                return win ? "pageXOffset" in win ? win[i ? "pageYOffset" : "pageXOffset"] : win.document.documentElement[method] || win.document.body[method] : elem[method];
            }
            // Set the scroll offset
            this.each(function() {
                win = getWindow(this);
                if (win) {
                    var xCoord = !i ? val : $(win).scrollLeft();
                    var yCoord = i ? val : $(win).scrollTop();
                    win.scrollTo(xCoord, yCoord);
                } else {
                    this[method] = val;
                }
            });
        };
    });
    // Create outerHeight and outerWidth methods
    [ "width", "height" ].forEach(function(dimension) {
        var offset, Dimension = dimension.replace(/./, function(m) {
            return m[0].toUpperCase();
        });
        $.fn["outer" + Dimension] = function(margin) {
            var elem = this;
            if (elem) {
                var size = elem[dimension]();
                var sides = {
                    width: [ "left", "right" ],
                    height: [ "top", "bottom" ]
                };
                sides[dimension].forEach(function(side) {
                    if (margin) size += parseInt(elem.css("margin-" + side), 10);
                });
                return size;
            } else {
                return null;
            }
        };
    });
    /*
     * Zepto FlexSlider v2.3
     * @desc Porting from jQuery FlexSlider v2.3, Contributing Author: Tyler Smith
     * @license Copyright 2012 WooThemes GPLv2
     */
    //FlexSlider: Object Instance
    $.flexslider = function(el, options) {
        var slider = $(el);
        // making variables public
        slider.vars = $.extend({}, $.flexslider.defaults, options);
        var namespace = slider.vars.namespace, msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture, touch = ("ontouchstart" in window || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch, // depricating this idea, as devices are being released with both of these events
        //eventType = (touch) ? "touchend" : "click",
        eventType = "click touchend MSPointerUp keyup", watchedEvent = "", watchedEventClearTimer, vertical = slider.vars.direction === "vertical", reverse = slider.vars.reverse, carousel = slider.vars.itemWidth > 0, fade = slider.vars.animation === "fade", asNav = slider.vars.asNavFor !== "", methods = {}, focused = true;
        // Store a reference to the slider object
        $.data(el, "flexslider", slider);
        // Private slider methods
        methods = {
            init: function() {
                slider.animating = false;
                // Get current slide and make sure it is a number
                slider.currentSlide = parseInt(slider.vars.startAt ? slider.vars.startAt : 0, 10);
                if (isNaN(slider.currentSlide)) slider.currentSlide = 0;
                slider.animatingTo = slider.currentSlide;
                slider.atEnd = slider.currentSlide === 0 || slider.currentSlide === slider.last;
                slider.containerSelector = slider.vars.selector.substr(0, slider.vars.selector.search(" "));
                slider.slides = $(slider.vars.selector, slider);
                slider.container = $(slider.containerSelector, slider);
                slider.count = slider.slides.length;
                // SYNC:
                slider.syncExists = $(slider.vars.sync).length > 0;
                // SLIDE:
                if (slider.vars.animation === "slide") slider.vars.animation = "swing";
                slider.prop = vertical ? "top" : "marginLeft";
                slider.args = {};
                // SLIDESHOW:
                slider.manualPause = false;
                slider.stopped = false;
                //PAUSE WHEN INVISIBLE
                slider.started = false;
                slider.startTimeout = null;
                // TOUCH/USECSS:
                slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && function() {
                    var obj = document.createElement("div"), props = [ "perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective" ];
                    for (var i in props) {
                        if (obj.style[props[i]] !== undefined) {
                            slider.pfx = props[i].replace("Perspective", "").toLowerCase();
                            slider.prop = "-" + slider.pfx + "-transform";
                            return true;
                        }
                    }
                    return false;
                }();
                slider.ensureAnimationEnd = "";
                // CONTROLSCONTAINER:
                if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);
                // MANUAL:
                if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);
                // RANDOMIZE:
                if (slider.vars.randomize) {
                    slider.slides.sort(function() {
                        return Math.round(Math.random()) - .5;
                    });
                    slider.container.empty().append(slider.slides);
                }
                slider.doMath();
                // INIT
                slider.setup("init");
                // CONTROLNAV:
                if (slider.vars.controlNav) methods.controlNav.setup();
                // DIRECTIONNAV:
                if (slider.vars.directionNav) methods.directionNav.setup();
                // KEYBOARD:
                if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
                    $(document).bind("keyup", function(event) {
                        var keycode = event.keyCode;
                        if (!slider.animating && (keycode === 39 || keycode === 37)) {
                            var target = keycode === 39 ? slider.getTarget("next") : keycode === 37 ? slider.getTarget("prev") : false;
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                    });
                }
                // MOUSEWHEEL:
                if (slider.vars.mousewheel) {
                    slider.bind("mousewheel", function(event, delta, deltaX, deltaY) {
                        event.preventDefault();
                        var target = delta < 0 ? slider.getTarget("next") : slider.getTarget("prev");
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    });
                }
                // PAUSEPLAY
                if (slider.vars.pausePlay) methods.pausePlay.setup();
                //PAUSE WHEN INVISIBLE
                if (slider.vars.slideshow && slider.vars.pauseInvisible) methods.pauseInvisible.init();
                // SLIDSESHOW
                if (slider.vars.slideshow) {
                    if (slider.vars.pauseOnHover) {
                        /*slider.hover(function() {
                            if (!slider.manualPlay && !slider.manualPause) slider.pause();
                        }, function() {
                            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
                        });*/
                        slider.on("mouseover", function() {
                            if (!slider.manualPlay && !slider.manualPause) slider.pause();
                        });
                        slider.on("mouseout", function() {
                            if (!slider.manualPause && !slider.manualPlay && !slider.stopped) slider.play();
                        });
                    }
                    // initialize animation
                    //If we're visible, or we don't use PageVisibility API
                    if (!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
                        slider.vars.initDelay > 0 ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                    }
                }
                // ASNAV:
                if (asNav) methods.asNav.setup();
                // TOUCH
                if (touch && slider.vars.touch) methods.touch();
                // FADE&&SMOOTHHEIGHT || SLIDE:
                if (!fade || fade && slider.vars.smoothHeight) $(window).bind("resize orientationchange focus", methods.resize);
                slider.find("img").attr("draggable", "false");
                // API: start() Callback
                setTimeout(function() {
                    slider.vars.start(slider);
                }, 200);
            },
            asNav: {
                setup: function() {
                    slider.asNav = true;
                    slider.animatingTo = Math.floor(slider.currentSlide / slider.move);
                    slider.currentItem = slider.currentSlide;
                    slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
                    if (!msGesture) {
                        slider.slides.on(eventType, function(e) {
                            e.preventDefault();
                            var $slide = $(this), target = $slide.index();
                            var posFromLeft = $slide.offset().left - $(slider).scrollLeft();
                            // Find position of slide relative to left of slider container
                            if (posFromLeft <= 0 && $slide.hasClass(namespace + "active-slide")) {
                                slider.flexAnimate(slider.getTarget("prev"), true);
                            } else if (!$(slider.vars.asNavFor).data("flexslider").animating && !$slide.hasClass(namespace + "active-slide")) {
                                slider.direction = slider.currentItem < target ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                            }
                        });
                    } else {
                        el._slider = slider;
                        slider.slides.each(function() {
                            var that = this;
                            that._gesture = new MSGesture();
                            that._gesture.target = that;
                            that.addEventListener("MSPointerDown", function(e) {
                                e.preventDefault();
                                if (e.currentTarget._gesture) e.currentTarget._gesture.addPointer(e.pointerId);
                            }, false);
                            that.addEventListener("MSGestureTap", function(e) {
                                e.preventDefault();
                                var $slide = $(this), target = $slide.index();
                                if (!$(slider.vars.asNavFor).data("flexslider").animating && !$slide.hasClass("active")) {
                                    slider.direction = slider.currentItem < target ? "next" : "prev";
                                    slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                                }
                            });
                        });
                    }
                }
            },
            controlNav: {
                setup: function() {
                    if (!slider.manualControls) {
                        methods.controlNav.setupPaging();
                    } else {
                        // MANUALCONTROLS:
                        methods.controlNav.setupManual();
                    }
                },
                setupPaging: function() {
                    var type = slider.vars.controlNav === "thumbnails" ? "control-thumbs" : "control-paging", j = 1, item, slide;
                    slider.controlNavScaffold = $('<ol class="' + namespace + "control-nav " + namespace + type + '"></ol>');
                    if (slider.pagingCount > 1) {
                        for (var i = 0; i < slider.pagingCount; i++) {
                            slide = slider.slides.eq(i);
                            item = slider.vars.controlNav === "thumbnails" ? '<img src="' + slide.attr("data-thumb") + '"/>' : "<a>" + j + "</a>";
                            if ("thumbnails" === slider.vars.controlNav && true === slider.vars.thumbCaptions) {
                                var captn = slide.attr("data-thumbcaption");
                                if ("" != captn && undefined != captn) item += '<span class="' + namespace + 'caption">' + captn + "</span>";
                            }
                            //slider.controlNavScaffold.append('<li>' + item + '</li>');
                            slider.controlNavScaffold.append("<li>" + item + "<i></i></li>");
                            j++;
                        }
                    }
                    // CONTROLSCONTAINER:
                    slider.controlsContainer ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
                    methods.controlNav.set();
                    methods.controlNav.active();
                    slider.controlNavScaffold.delegate("a, img", eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this), target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + "active")) {
                                slider.direction = target > slider.currentSlide ? "next" : "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                setupManual: function() {
                    slider.controlNav = slider.manualControls;
                    methods.controlNav.active();
                    slider.controlNav.bind(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            var $this = $(this), target = slider.controlNav.index($this);
                            if (!$this.hasClass(namespace + "active")) {
                                target > slider.currentSlide ? slider.direction = "next" : slider.direction = "prev";
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            }
                        }
                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                set: function() {
                    var selector = slider.vars.controlNav === "thumbnails" ? "img" : "a";
                    slider.controlNav = $("." + namespace + "control-nav li " + selector, slider.controlsContainer ? slider.controlsContainer : slider);
                },
                active: function() {
                    slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
                },
                update: function(action, pos) {
                    if (slider.pagingCount > 1 && action === "add") {
                        slider.controlNavScaffold.append($("<li><a>" + slider.count + "</a></li>"));
                    } else if (slider.pagingCount === 1) {
                        slider.controlNavScaffold.find("li").remove();
                    } else {
                        slider.controlNav.eq(pos).closest("li").remove();
                    }
                    methods.controlNav.set();
                    slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length ? slider.update(pos, action) : methods.controlNav.active();
                }
            },
            directionNav: {
                setup: function() {
                    var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + "</a></li></ul>");
                    // CONTROLSCONTAINER:
                    if (slider.controlsContainer) {
                        $(slider.controlsContainer).append(directionNavScaffold);
                        slider.directionNav = $("." + namespace + "direction-nav li a", slider.controlsContainer);
                    } else {
                        slider.append(directionNavScaffold);
                        slider.directionNav = $("." + namespace + "direction-nav li a", slider);
                    }
                    methods.directionNav.update();
                    slider.directionNav.bind(eventType, function(event) {
                        event.preventDefault();
                        var target;
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            target = $(this).hasClass(namespace + "next") ? slider.getTarget("next") : slider.getTarget("prev");
                            slider.flexAnimate(target, slider.vars.pauseOnAction);
                        }
                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function() {
                    var disabledClass = namespace + "disabled";
                    if (slider.pagingCount === 1) {
                        slider.directionNav.addClass(disabledClass).attr("tabindex", "-1");
                    } else if (!slider.vars.animationLoop) {
                        if (slider.animatingTo === 0) {
                            slider.directionNav.removeClass(disabledClass).filter("." + namespace + "prev").addClass(disabledClass).attr("tabindex", "-1");
                        } else if (slider.animatingTo === slider.last) {
                            slider.directionNav.removeClass(disabledClass).filter("." + namespace + "next").addClass(disabledClass).attr("tabindex", "-1");
                        } else {
                            slider.directionNav.removeClass(disabledClass).removeAttr("tabindex");
                        }
                    } else {
                        slider.directionNav.removeClass(disabledClass).removeAttr("tabindex");
                    }
                }
            },
            pausePlay: {
                setup: function() {
                    var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');
                    // CONTROLSCONTAINER:
                    if (slider.controlsContainer) {
                        slider.controlsContainer.append(pausePlayScaffold);
                        slider.pausePlay = $("." + namespace + "pauseplay a", slider.controlsContainer);
                    } else {
                        slider.append(pausePlayScaffold);
                        slider.pausePlay = $("." + namespace + "pauseplay a", slider);
                    }
                    methods.pausePlay.update(slider.vars.slideshow ? namespace + "pause" : namespace + "play");
                    slider.pausePlay.bind(eventType, function(event) {
                        event.preventDefault();
                        if (watchedEvent === "" || watchedEvent === event.type) {
                            if ($(this).hasClass(namespace + "pause")) {
                                slider.manualPause = true;
                                slider.manualPlay = false;
                                slider.pause();
                            } else {
                                slider.manualPause = false;
                                slider.manualPlay = true;
                                slider.play();
                            }
                        }
                        // setup flags to prevent event duplication
                        if (watchedEvent === "") {
                            watchedEvent = event.type;
                        }
                        methods.setToClearWatchedEvent();
                    });
                },
                update: function(state) {
                    state === "play" ? slider.pausePlay.removeClass(namespace + "pause").addClass(namespace + "play").html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + "play").addClass(namespace + "pause").html(slider.vars.pauseText);
                }
            },
            touch: function() {
                var startX, startY, offset, cwidth, dx, startT, scrolling = false, localX = 0, localY = 0, accDx = 0;
                if (!msGesture) {
                    el.addEventListener("touchstart", onTouchStart, false);
                    function onTouchStart(e) {
                        if (slider.animating) {
                            e.preventDefault();
                        } else if (window.navigator.msPointerEnabled || e.touches.length === 1) {
                            slider.pause();
                            // CAROUSEL:
                            cwidth = vertical ? slider.h : slider.w;
                            startT = Number(new Date());
                            // CAROUSEL:
                            // Local vars for X and Y points.
                            localX = e.touches[0].pageX;
                            localY = e.touches[0].pageY;
                            offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                            startX = vertical ? localY : localX;
                            startY = vertical ? localX : localY;
                            el.addEventListener("touchmove", onTouchMove, false);
                            el.addEventListener("touchend", onTouchEnd, false);
                        }
                    }
                    function onTouchMove(e) {
                        // Local vars for X and Y points.
                        localX = e.touches[0].pageX;
                        localY = e.touches[0].pageY;
                        dx = vertical ? startX - localY : startX - localX;
                        scrolling = vertical ? Math.abs(dx) < Math.abs(localX - startY) : Math.abs(dx) < Math.abs(localY - startY);
                        var fxms = 500;
                        if (!scrolling || Number(new Date()) - startT > fxms) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = dx / (slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0 ? Math.abs(dx) / cwidth + 2 : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    }
                    function onTouchEnd(e) {
                        // finish the touch by undoing the touch session
                        el.removeEventListener("touchmove", onTouchMove, false);
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = reverse ? -dx : dx, target = updateDx > 0 ? slider.getTarget("next") : slider.getTarget("prev");
                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                        }
                        el.removeEventListener("touchend", onTouchEnd, false);
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                    }
                } else {
                    el.style.msTouchAction = "none";
                    el._gesture = new MSGesture();
                    el._gesture.target = el;
                    el.addEventListener("MSPointerDown", onMSPointerDown, false);
                    el._slider = slider;
                    el.addEventListener("MSGestureChange", onMSGestureChange, false);
                    el.addEventListener("MSGestureEnd", onMSGestureEnd, false);
                    function onMSPointerDown(e) {
                        e.stopPropagation();
                        if (slider.animating) {
                            e.preventDefault();
                        } else {
                            slider.pause();
                            el._gesture.addPointer(e.pointerId);
                            accDx = 0;
                            cwidth = vertical ? slider.h : slider.w;
                            startT = Number(new Date());
                            // CAROUSEL:
                            offset = carousel && reverse && slider.animatingTo === slider.last ? 0 : carousel && reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : carousel && slider.currentSlide === slider.last ? slider.limit : carousel ? (slider.itemW + slider.vars.itemMargin) * slider.move * slider.currentSlide : reverse ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                        }
                    }
                    function onMSGestureChange(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        var transX = -e.translationX, transY = -e.translationY;
                        //Accumulate translations.
                        accDx = accDx + (vertical ? transY : transX);
                        dx = accDx;
                        scrolling = vertical ? Math.abs(accDx) < Math.abs(-transX) : Math.abs(accDx) < Math.abs(-transY);
                        if (e.detail === e.MSGESTURE_FLAG_INERTIA) {
                            setImmediate(function() {
                                el._gesture.stop();
                            });
                            return;
                        }
                        if (!scrolling || Number(new Date()) - startT > 500) {
                            e.preventDefault();
                            if (!fade && slider.transitions) {
                                if (!slider.vars.animationLoop) {
                                    dx = accDx / (slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0 ? Math.abs(accDx) / cwidth + 2 : 1);
                                }
                                slider.setProps(offset + dx, "setTouch");
                            }
                        }
                    }
                    function onMSGestureEnd(e) {
                        e.stopPropagation();
                        var slider = e.target._slider;
                        if (!slider) {
                            return;
                        }
                        if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                            var updateDx = reverse ? -dx : dx, target = updateDx > 0 ? slider.getTarget("next") : slider.getTarget("prev");
                            if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth / 2)) {
                                slider.flexAnimate(target, slider.vars.pauseOnAction);
                            } else {
                                if (!fade) slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true);
                            }
                        }
                        startX = null;
                        startY = null;
                        dx = null;
                        offset = null;
                        accDx = 0;
                    }
                }
            },
            resize: function() {
                if (!slider.animating && slider.is(":visible")) {
                    if (!carousel) slider.doMath();
                    if (fade) {
                        // SMOOTH HEIGHT:
                        methods.smoothHeight();
                    } else if (carousel) {
                        //CAROUSEL:
                        slider.slides.width(slider.computedW);
                        slider.update(slider.pagingCount);
                        slider.setProps();
                    } else if (vertical) {
                        //VERTICAL:
                        slider.viewport.height(slider.h);
                        slider.setProps(slider.h, "setTotal");
                    } else {
                        // SMOOTH HEIGHT:
                        if (slider.vars.smoothHeight) methods.smoothHeight();
                        slider.newSlides.width(slider.computedW);
                        slider.setProps(slider.computedW, "setTotal");
                    }
                }
            },
            smoothHeight: function(dur) {
                if (!vertical || fade) {
                    var $obj = fade ? slider : slider.viewport;
                    dur ? $obj.animate({
                        height: slider.slides.eq(slider.animatingTo).height()
                    }, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
                }
            },
            sync: function(action) {
                var $obj = $(slider.vars.sync).data("flexslider"), target = slider.animatingTo;
                switch (action) {
                  case "animate":
                    $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true);
                    break;

                  case "play":
                    if (!$obj.playing && !$obj.asNav) {
                        $obj.play();
                    }
                    break;

                  case "pause":
                    $obj.pause();
                    break;
                }
            },
            uniqueID: function($clone) {
                // Append _clone to current level and children elements with id attributes
                $clone.filter("[id]").add($clone.find("[id]")).each(function() {
                    var $this = $(this);
                    $this.attr("id", $this.attr("id") + "_clone");
                });
                return $clone;
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var prefixes = [ "webkit", "moz", "ms", "o" ];
                    if ("hidden" in document) return "hidden";
                    for (var i = 0; i < prefixes.length; i++) {
                        if (prefixes[i] + "Hidden" in document) methods.pauseInvisible.visProp = prefixes[i] + "Hidden";
                    }
                    if (methods.pauseInvisible.visProp) {
                        var evtname = methods.pauseInvisible.visProp.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(evtname, function() {
                            if (methods.pauseInvisible.isHidden()) {
                                if (slider.startTimeout) clearTimeout(slider.startTimeout); else slider.pause();
                            } else {
                                if (slider.started) slider.play(); else slider.vars.initDelay > 0 ? setTimeout(slider.play, slider.vars.initDelay) : slider.play();
                            }
                        });
                    }
                },
                isHidden: function() {
                    return document[methods.pauseInvisible.visProp] || false;
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(watchedEventClearTimer);
                watchedEventClearTimer = setTimeout(function() {
                    watchedEvent = "";
                }, 3e3);
            }
        };
        // public methods
        slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
            if (!slider.vars.animationLoop && target !== slider.currentSlide) {
                slider.direction = target > slider.currentSlide ? "next" : "prev";
            }
            if (asNav && slider.pagingCount === 1) slider.direction = slider.currentItem < target ? "next" : "prev";
            if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
                if (asNav && withSync) {
                    var master = $(slider.vars.asNavFor).data("flexslider");
                    slider.atEnd = target === 0 || target === slider.count - 1;
                    master.flexAnimate(target, true, false, true, fromNav);
                    slider.direction = slider.currentItem < target ? "next" : "prev";
                    master.direction = slider.direction;
                    if (Math.ceil((target + 1) / slider.visible) - 1 !== slider.currentSlide && target !== 0) {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        target = Math.floor(target / slider.visible);
                    } else {
                        slider.currentItem = target;
                        slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                        return false;
                    }
                }
                slider.animating = true;
                slider.animatingTo = target;
                // SLIDESHOW:
                if (pause) slider.pause();
                // API: before() animation Callback
                slider.vars.before(slider);
                // SYNC:
                if (slider.syncExists && !fromNav) methods.sync("animate");
                // CONTROLNAV
                if (slider.vars.controlNav) methods.controlNav.active();
                // !CAROUSEL:
                // CANDIDATE: slide active class (for add/remove slide)
                if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
                // INFINITE LOOP:
                // CANDIDATE: atEnd
                slider.atEnd = target === 0 || target === slider.last;
                // DIRECTIONNAV:
                if (slider.vars.directionNav) methods.directionNav.update();
                if (target === slider.last) {
                    // API: end() of cycle Callback
                    slider.vars.end(slider);
                    // SLIDESHOW && !INFINITE LOOP:
                    if (!slider.vars.animationLoop) slider.pause();
                }
                // SLIDE:
                if (!fade) {
                    var dimension = vertical ? slider.slides.filter(":first").height() : slider.computedW, margin, slideString, calcNext;
                    // INFINITE LOOP / REVERSE:
                    if (carousel) {
                        //margin = (slider.vars.itemWidth > slider.w) ? slider.vars.itemMargin * 2 : slider.vars.itemMargin;
                        margin = slider.vars.itemMargin;
                        calcNext = (slider.itemW + margin) * slider.move * slider.animatingTo;
                        slideString = calcNext > slider.limit && slider.visible !== 1 ? slider.limit : calcNext;
                    } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
                        slideString = reverse ? (slider.count + slider.cloneOffset) * dimension : 0;
                    } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
                        slideString = reverse ? 0 : (slider.count + 1) * dimension;
                    } else {
                        slideString = reverse ? (slider.count - 1 - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
                    }
                    slider.setProps(slideString, "", slider.vars.animationSpeed);
                    if (slider.transitions) {
                        if (!slider.vars.animationLoop || !slider.atEnd) {
                            slider.animating = false;
                            slider.currentSlide = slider.animatingTo;
                        }
                        // Unbind previous transitionEnd events and re-bind new transitionEnd event
                        slider.container.unbind("webkitTransitionEnd transitionend");
                        slider.container.bind("webkitTransitionEnd transitionend", function() {
                            clearTimeout(slider.ensureAnimationEnd);
                            slider.wrapup(dimension);
                        });
                        // Insurance for the ever-so-fickle transitionEnd event
                        clearTimeout(slider.ensureAnimationEnd);
                        slider.ensureAnimationEnd = setTimeout(function() {
                            slider.wrapup(dimension);
                        }, slider.vars.animationSpeed + 100);
                    } else {
                        slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function() {
                            slider.wrapup(dimension);
                        });
                    }
                } else {
                    // FADE:
                    if (!touch) {
                        //slider.slides.eq(slider.currentSlide).fadeOut(slider.vars.animationSpeed, slider.vars.easing);
                        //slider.slides.eq(target).fadeIn(slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                        slider.slides.eq(slider.currentSlide).css({
                            zIndex: 1
                        }).animate({
                            opacity: 0
                        }, slider.vars.animationSpeed, slider.vars.easing);
                        slider.slides.eq(target).css({
                            zIndex: 2
                        }).animate({
                            opacity: 1
                        }, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);
                    } else {
                        slider.slides.eq(slider.currentSlide).css({
                            opacity: 0,
                            zIndex: 1
                        });
                        slider.slides.eq(target).css({
                            opacity: 1,
                            zIndex: 2
                        });
                        slider.wrapup(dimension);
                    }
                }
                // SMOOTH HEIGHT:
                if (slider.vars.smoothHeight) methods.smoothHeight(slider.vars.animationSpeed);
            }
        };
        slider.wrapup = function(dimension) {
            // SLIDE:
            if (!fade && !carousel) {
                if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpEnd");
                } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
                    slider.setProps(dimension, "jumpStart");
                }
            }
            slider.animating = false;
            slider.currentSlide = slider.animatingTo;
            // API: after() animation Callback
            slider.vars.after(slider);
        };
        // SLIDESHOW:
        slider.animateSlides = function() {
            if (!slider.animating && focused) slider.flexAnimate(slider.getTarget("next"));
        };
        // SLIDESHOW:
        slider.pause = function() {
            clearInterval(slider.animatedSlides);
            slider.animatedSlides = null;
            slider.playing = false;
            // PAUSEPLAY:
            if (slider.vars.pausePlay) methods.pausePlay.update("play");
            // SYNC:
            if (slider.syncExists) methods.sync("pause");
        };
        // SLIDESHOW:
        slider.play = function() {
            if (slider.playing) clearInterval(slider.animatedSlides);
            slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
            slider.started = slider.playing = true;
            // PAUSEPLAY:
            if (slider.vars.pausePlay) methods.pausePlay.update("pause");
            // SYNC:
            if (slider.syncExists) methods.sync("play");
        };
        // STOP:
        slider.stop = function() {
            slider.pause();
            slider.stopped = true;
        };
        slider.canAdvance = function(target, fromNav) {
            // ASNAV:
            var last = asNav ? slider.pagingCount - 1 : slider.last;
            return fromNav ? true : asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev" ? true : asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next" ? false : target === slider.currentSlide && !asNav ? false : slider.vars.animationLoop ? true : slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next" ? false : slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next" ? false : true;
        };
        slider.getTarget = function(dir) {
            slider.direction = dir;
            if (dir === "next") {
                return slider.currentSlide === slider.last ? 0 : slider.currentSlide + 1;
            } else {
                return slider.currentSlide === 0 ? slider.last : slider.currentSlide - 1;
            }
        };
        // SLIDE:
        slider.setProps = function(pos, special, dur) {
            var target = function() {
                var posCheck = pos ? pos : (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo, posCalc = function() {
                    if (carousel) {
                        return special === "setTouch" ? pos : reverse && slider.animatingTo === slider.last ? 0 : reverse ? slider.limit - (slider.itemW + slider.vars.itemMargin) * slider.move * slider.animatingTo : slider.animatingTo === slider.last ? slider.limit : posCheck;
                    } else {
                        switch (special) {
                          case "setTotal":
                            return reverse ? (slider.count - 1 - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;

                          case "setTouch":
                            return reverse ? pos : pos;

                          case "jumpEnd":
                            return reverse ? pos : slider.count * pos;

                          case "jumpStart":
                            return reverse ? slider.count * pos : pos;

                          default:
                            return pos;
                        }
                    }
                }();
                return posCalc * -1 + "px";
            }();
            if (slider.transitions) {
                target = vertical ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
                dur = dur !== undefined ? dur / 1e3 + "s" : "0s";
                slider.container.css("-" + slider.pfx + "-transition-duration", dur);
                slider.container.css("transition-duration", dur);
            }
            slider.args[slider.prop] = target;
            if (slider.transitions || dur === undefined) slider.container.css(slider.args);
            slider.container.css("transform", target);
        };
        slider.setup = function(type) {
            // SLIDE:
            if (!fade) {
                var sliderOffset, arr;
                if (type === "init") {
                    slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({
                        overflow: "hidden",
                        position: "relative"
                    }).appendTo(slider).append(slider.container);
                    // INFINITE LOOP:
                    slider.cloneCount = 0;
                    slider.cloneOffset = 0;
                    // REVERSE:
                    if (reverse) {
                        arr = $.makeArray(slider.slides).reverse();
                        slider.slides = $(arr);
                        slider.container.empty().append(slider.slides);
                    }
                }
                // INFINITE LOOP && !CAROUSEL:
                if (slider.vars.animationLoop && !carousel) {
                    slider.cloneCount = 2;
                    slider.cloneOffset = 1;
                    // clear out old clones
                    if (type !== "init") slider.container.find(".clone").remove();
                    slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(methods.uniqueID(slider.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"));
                }
                slider.newSlides = $(slider.vars.selector, slider);
                sliderOffset = reverse ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
                // VERTICAL:
                if (vertical && !carousel) {
                    slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
                    setTimeout(function() {
                        slider.newSlides.css({
                            display: "block"
                        });
                        slider.doMath();
                        slider.viewport.height(slider.h);
                        slider.setProps(sliderOffset * slider.h, "init");
                    }, type === "init" ? 100 : 0);
                } else {
                    slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
                    slider.setProps(sliderOffset * slider.computedW, "init");
                    setTimeout(function() {
                        slider.doMath();
                        slider.newSlides.css({
                            width: slider.computedW,
                            "float": "left",
                            display: "block"
                        });
                        // SMOOTH HEIGHT:
                        if (slider.vars.smoothHeight) methods.smoothHeight();
                    }, type === "init" ? 100 : 0);
                }
            } else {
                // FADE:
                slider.slides.css({
                    width: "100%",
                    "float": "left",
                    marginRight: "-100%",
                    position: "relative"
                });
                if (type === "init") {
                    if (!touch) {
                        //slider.slides.eq(slider.currentSlide).fadeIn(slider.vars.animationSpeed, slider.vars.easing);
                        if (slider.vars.fadeFirstSlide == false) {
                            slider.slides.css({
                                opacity: 0,
                                display: "block",
                                zIndex: 1
                            }).eq(slider.currentSlide).css({
                                zIndex: 2
                            }).css({
                                opacity: 1
                            });
                        } else {
                            slider.slides.css({
                                opacity: 0,
                                display: "block",
                                zIndex: 1
                            }).eq(slider.currentSlide).css({
                                zIndex: 2
                            }).animate({
                                opacity: 1
                            }, slider.vars.animationSpeed, slider.vars.easing);
                        }
                    } else {
                        slider.slides.css({
                            opacity: 0,
                            display: "block",
                            webkitTransition: "opacity " + slider.vars.animationSpeed / 1e3 + "s ease",
                            zIndex: 1
                        }).eq(slider.currentSlide).css({
                            opacity: 1,
                            zIndex: 2
                        });
                    }
                }
                // SMOOTH HEIGHT:
                if (slider.vars.smoothHeight) methods.smoothHeight();
            }
            // !CAROUSEL:
            // CANDIDATE: active slide
            if (!carousel) slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide");
            //FlexSlider: init() Callback
            slider.vars.init(slider);
        };
        slider.doMath = function() {
            var slide = slider.slides.first(), slideMargin = slider.vars.itemMargin, minItems = slider.vars.minItems, maxItems = slider.vars.maxItems;
            slider.w = slider.viewport === undefined ? slider.width() : slider.viewport.width();
            slider.h = slide.height();
            slider.boxPadding = slide.outerWidth() - slide.width();
            // CAROUSEL:
            if (carousel) {
                slider.itemT = slider.vars.itemWidth + slideMargin;
                slider.minW = minItems ? minItems * slider.itemT : slider.w;
                slider.maxW = maxItems ? maxItems * slider.itemT - slideMargin : slider.w;
                slider.itemW = slider.minW > slider.w ? (slider.w - slideMargin * (minItems - 1)) / minItems : slider.maxW < slider.w ? (slider.w - slideMargin * (maxItems - 1)) / maxItems : slider.vars.itemWidth > slider.w ? slider.w : slider.vars.itemWidth;
                slider.visible = Math.floor(slider.w / slider.itemW);
                slider.move = slider.vars.move > 0 && slider.vars.move < slider.visible ? slider.vars.move : slider.visible;
                slider.pagingCount = Math.ceil((slider.count - slider.visible) / slider.move + 1);
                slider.last = slider.pagingCount - 1;
                slider.limit = slider.pagingCount === 1 ? 0 : slider.vars.itemWidth > slider.w ? slider.itemW * (slider.count - 1) + slideMargin * (slider.count - 1) : (slider.itemW + slideMargin) * slider.count - slider.w - slideMargin;
            } else {
                slider.itemW = slider.w;
                slider.pagingCount = slider.count;
                slider.last = slider.count - 1;
            }
            slider.computedW = slider.itemW - slider.boxPadding;
        };
        slider.update = function(pos, action) {
            slider.doMath();
            // update currentSlide and slider.animatingTo if necessary
            if (!carousel) {
                if (pos < slider.currentSlide) {
                    slider.currentSlide += 1;
                } else if (pos <= slider.currentSlide && pos !== 0) {
                    slider.currentSlide -= 1;
                }
                slider.animatingTo = slider.currentSlide;
            }
            // update controlNav
            if (slider.vars.controlNav && !slider.manualControls) {
                if (action === "add" && !carousel || slider.pagingCount > slider.controlNav.length) {
                    methods.controlNav.update("add");
                } else if (action === "remove" && !carousel || slider.pagingCount < slider.controlNav.length) {
                    if (carousel && slider.currentSlide > slider.last) {
                        slider.currentSlide -= 1;
                        slider.animatingTo -= 1;
                    }
                    methods.controlNav.update("remove", slider.last);
                }
            }
            // update directionNav
            if (slider.vars.directionNav) methods.directionNav.update();
        };
        slider.addSlide = function(obj, pos) {
            var $obj = $(obj);
            slider.count += 1;
            slider.last = slider.count - 1;
            // append new slide
            if (vertical && reverse) {
                pos !== undefined ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
            } else {
                pos !== undefined ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
            }
            // update currentSlide, animatingTo, controlNav, and directionNav
            slider.update(pos, "add");
            // update slider.slides
            slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
            // re-setup the slider to accomdate new slide
            slider.setup();
            //FlexSlider: added() Callback
            slider.vars.added(slider);
        };
        slider.removeSlide = function(obj) {
            var pos = isNaN(obj) ? slider.slides.index($(obj)) : obj;
            // update count
            slider.count -= 1;
            slider.last = slider.count - 1;
            // remove slide
            if (isNaN(obj)) {
                $(obj, slider.slides).remove();
            } else {
                vertical && reverse ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
            }
            // update currentSlide, animatingTo, controlNav, and directionNav
            slider.doMath();
            slider.update(pos, "remove");
            // update slider.slides
            slider.slides = $(slider.vars.selector + ":not(.clone)", slider);
            // re-setup the slider to accomdate new slide
            slider.setup();
            // FlexSlider: removed() Callback
            slider.vars.removed(slider);
        };
        //FlexSlider: Initialize
        methods.init();
    };
    // Ensure the slider isn't focussed if the window loses focus.
    $(window).blur(function(e) {
        focused = false;
    }).focus(function(e) {
        focused = true;
    });
    //FlexSlider: Default Settings
    $.flexslider.defaults = {
        namespace: "am-",
        //{NEW} String: Prefix string attached to the class of every element generated by the plugin
        selector: ".am-slides > li",
        //{NEW} Selector: Must match a simple pattern. '{container} > {slide}' -- Ignore pattern at your own peril
        animation: "slide",
        //String: Select your animation type, "fade" or "slide"
        easing: "swing",
        //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
        direction: "horizontal",
        //String: Select the sliding direction, "horizontal" or "vertical"
        reverse: false,
        //{NEW} Boolean: Reverse the animation direction
        animationLoop: true,
        //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
        smoothHeight: false,
        //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
        startAt: 0,
        //Integer: The slide that the slider should start on. Array notation (0 = first slide)
        slideshow: true,
        //Boolean: Animate slider automatically
        slideshowSpeed: 5e3,
        //Integer: Set the speed of the slideshow cycling, in milliseconds
        animationSpeed: 600,
        //Integer: Set the speed of animations, in milliseconds
        initDelay: 0,
        //{NEW} Integer: Set an initialization delay, in milliseconds
        randomize: false,
        //Boolean: Randomize slide order
        thumbCaptions: false,
        //Boolean: Whether or not to put captions on thumbnails when using the "thumbnails" controlNav.
        // Usability features
        pauseOnAction: true,
        //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
        pauseOnHover: false,
        //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
        pauseInvisible: true,
        //{NEW} Boolean: Pause the slideshow when tab is invisible, resume when visible. Provides better UX, lower CPU usage.
        useCSS: true,
        //{NEW} Boolean: Slider will use CSS3 transitions if available
        touch: true,
        //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
        video: false,
        //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
        // Primary Controls
        controlNav: true,
        //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
        directionNav: true,
        //Boolean: Create navigation for previous/next navigation? (true/false)
        prevText: "Previous",
        //String: Set the text for the "previous" directionNav item
        nextText: "Next",
        //String: Set the text for the "next" directionNav item
        // Secondary Navigation
        keyboard: true,
        //Boolean: Allow slider navigating via keyboard left/right keys
        multipleKeyboard: false,
        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
        mousewheel: false,
        //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
        pausePlay: false,
        //Boolean: Create pause/play dynamic element
        pauseText: "Pause",
        //String: Set the text for the "pause" pausePlay item
        playText: "Play",
        //String: Set the text for the "play" pausePlay item
        // Special properties
        controlsContainer: "",
        //{UPDATED} jQuery Object/Selector: Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be $(".flexslider-container"). Property is ignored if given element is not found.
        manualControls: "",
        //{UPDATED} jQuery Object/Selector: Declare custom control navigation. Examples would be $(".flex-control-nav li") or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
        sync: "",
        //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
        asNavFor: "",
        //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
        // Carousel Options
        itemWidth: 0,
        //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
        itemMargin: 0,
        //{NEW} Integer: Margin between carousel items.
        minItems: 1,
        //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
        maxItems: 0,
        //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
        move: 0,
        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
        allowOneSlide: true,
        //{NEW} Boolean: Whether or not to allow a slider comprised of a single slide
        // Callback API
        start: function() {},
        //Callback: function(slider) - Fires when the slider loads the first slide
        before: function() {},
        //Callback: function(slider) - Fires asynchronously with each slider animation
        after: function() {},
        //Callback: function(slider) - Fires after each slider animation completes
        end: function() {},
        //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
        added: function() {},
        //{NEW} Callback: function(slider) - Fires after a slide is added
        removed: function() {},
        //{NEW} Callback: function(slider) - Fires after a slide is removed
        init: function() {}
    };
    //FlexSlider: Plugin Function
    $.fn.flexslider = function(options) {
        if (options === undefined) options = {};
        if (typeof options === "object") {
            return this.each(function() {
                var $this = $(this), selector = options.selector ? options.selector : ".am-slides > li", $slides = $this.find(selector);
                if ($slides.length === 1 && options.allowOneSlide === true || $slides.length === 0) {
                    $slides.animate({
                        opacity: 1
                    }, 400);
                    if (options.start) options.start($this);
                } else if ($this.data("flexslider") === undefined) {
                    new $.flexslider(this, options);
                }
            });
        } else {
            // Helper strings to quickly perform functions on the slider
            var $slider = $(this).data("flexslider");
            switch (options) {
              case "play":
                $slider.play();
                break;

              case "pause":
                $slider.pause();
                break;

              case "stop":
                $slider.stop();
                break;

              case "next":
                $slider.flexAnimate($slider.getTarget("next"), true);
                break;

              case "prev":
              case "previous":
                $slider.flexAnimate($slider.getTarget("prev"), true);
                break;

              default:
                if (typeof options === "number") $slider.flexAnimate(options, true);
            }
        }
    };
});
define("zepto.outerdemension", [], function(require, exports, module) {
    var $ = window.Zepto;
    // Create outerHeight and outerWidth methods
    [ "width", "height" ].forEach(function(dimension) {
        var offset, Dimension = dimension.replace(/./, function(m) {
            return m[0].toUpperCase();
        });
        $.fn["outer" + Dimension] = function(margin) {
            var elem = this;
            if (elem) {
                var size = elem[dimension]();
                var sides = {
                    width: [ "left", "right" ],
                    height: [ "top", "bottom" ]
                };
                sides[dimension].forEach(function(side) {
                    if (margin) size += parseInt(elem.css("margin-" + side), 10);
                });
                return size;
            } else {
                return null;
            }
        };
    });
});
define("zepto.pinchzoom", [], function(require, exports, module) {
    /**
     * @via https://github.com/manuelstofer/pinchzoom/blob/master/src/pinchzoom.js
     * @license the MIT License.
     */
    var definePinchZoom = function($) {
        /**
         * Pinch zoom using jQuery
         * @version 0.0.2
         * @author Manuel Stofer <mst@rtp.ch>
         * @param el
         * @param options
         * @constructor
         */
        var PinchZoom = function(el, options) {
            this.el = $(el);
            this.zoomFactor = 1;
            this.lastScale = 1;
            this.offset = {
                x: 0,
                y: 0
            };
            this.options = $.extend({}, this.defaults, options);
            this.setupMarkup();
            this.bindEvents();
            this.update();
            // default enable.
            this.enable();
        }, sum = function(a, b) {
            return a + b;
        }, isCloseTo = function(value, expected) {
            return value > expected - .01 && value < expected + .01;
        };
        PinchZoom.prototype = {
            defaults: {
                tapZoomFactor: 2,
                zoomOutFactor: 1.3,
                animationDuration: 300,
                animationInterval: 5,
                maxZoom: 4,
                minZoom: .5,
                lockDragAxis: false,
                use2d: false,
                zoomStartEventName: "pz_zoomstart",
                zoomEndEventName: "pz_zoomend",
                dragStartEventName: "pz_dragstart",
                dragEndEventName: "pz_dragend",
                doubleTapEventName: "pz_doubletap"
            },
            /**
             * Event handler for 'dragstart'
             * @param event
             */
            handleDragStart: function(event) {
                this.el.trigger(this.options.dragStartEventName);
                this.stopAnimation();
                this.lastDragPosition = false;
                this.hasInteraction = true;
                this.handleDrag(event);
            },
            /**
             * Event handler for 'drag'
             * @param event
             */
            handleDrag: function(event) {
                if (this.zoomFactor > 1) {
                    var touch = this.getTouches(event)[0];
                    this.drag(touch, this.lastDragPosition);
                    this.offset = this.sanitizeOffset(this.offset);
                    this.lastDragPosition = touch;
                }
            },
            handleDragEnd: function() {
                this.el.trigger(this.options.dragEndEventName);
                this.end();
            },
            /**
             * Event handler for 'zoomstart'
             * @param event
             */
            handleZoomStart: function(event) {
                this.el.trigger(this.options.zoomStartEventName);
                this.stopAnimation();
                this.lastScale = 1;
                this.nthZoom = 0;
                this.lastZoomCenter = false;
                this.hasInteraction = true;
            },
            /**
             * Event handler for 'zoom'
             * @param event
             */
            handleZoom: function(event, newScale) {
                // a relative scale factor is used
                var touchCenter = this.getTouchCenter(this.getTouches(event)), scale = newScale / this.lastScale;
                this.lastScale = newScale;
                // the first touch events are thrown away since they are not precise
                this.nthZoom += 1;
                if (this.nthZoom > 3) {
                    this.scale(scale, touchCenter);
                    this.drag(touchCenter, this.lastZoomCenter);
                }
                this.lastZoomCenter = touchCenter;
            },
            handleZoomEnd: function() {
                this.el.trigger(this.options.zoomEndEventName);
                this.end();
            },
            /**
             * Event handler for 'doubletap'
             * @param event
             */
            handleDoubleTap: function(event) {
                var center = this.getTouches(event)[0], zoomFactor = this.zoomFactor > 1 ? 1 : this.options.tapZoomFactor, startZoomFactor = this.zoomFactor, updateProgress = function(progress) {
                    this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                }.bind(this);
                if (this.hasInteraction) {
                    return;
                }
                if (startZoomFactor > zoomFactor) {
                    center = this.getCurrentZoomCenter();
                }
                this.animate(this.options.animationDuration, this.options.animationInterval, updateProgress, this.swing);
                this.el.trigger(this.options.doubleTapEventName);
            },
            /**
             * Max / min values for the offset
             * @param offset
             * @return {Object} the sanitized offset
             */
            sanitizeOffset: function(offset) {
                var maxX = (this.zoomFactor - 1) * this.getContainerX(), maxY = (this.zoomFactor - 1) * this.getContainerY(), maxOffsetX = Math.max(maxX, 0), maxOffsetY = Math.max(maxY, 0), minOffsetX = Math.min(maxX, 0), minOffsetY = Math.min(maxY, 0);
                return {
                    x: Math.min(Math.max(offset.x, minOffsetX), maxOffsetX),
                    y: Math.min(Math.max(offset.y, minOffsetY), maxOffsetY)
                };
            },
            /**
             * Scale to a specific zoom factor (not relative)
             * @param zoomFactor
             * @param center
             */
            scaleTo: function(zoomFactor, center) {
                this.scale(zoomFactor / this.zoomFactor, center);
            },
            /**
             * Scales the element from specified center
             * @param scale
             * @param center
             */
            scale: function(scale, center) {
                scale = this.scaleZoomFactor(scale);
                this.addOffset({
                    x: (scale - 1) * (center.x + this.offset.x),
                    y: (scale - 1) * (center.y + this.offset.y)
                });
            },
            /**
             * Scales the zoom factor relative to current state
             * @param scale
             * @return the actual scale (can differ because of max min zoom factor)
             */
            scaleZoomFactor: function(scale) {
                var originalZoomFactor = this.zoomFactor;
                this.zoomFactor *= scale;
                this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom));
                return this.zoomFactor / originalZoomFactor;
            },
            /**
             * Drags the element
             * @param center
             * @param lastCenter
             */
            drag: function(center, lastCenter) {
                if (lastCenter) {
                    if (this.options.lockDragAxis) {
                        // lock scroll to position that was changed the most
                        if (Math.abs(center.x - lastCenter.x) > Math.abs(center.y - lastCenter.y)) {
                            this.addOffset({
                                x: -(center.x - lastCenter.x),
                                y: 0
                            });
                        } else {
                            this.addOffset({
                                y: -(center.y - lastCenter.y),
                                x: 0
                            });
                        }
                    } else {
                        this.addOffset({
                            y: -(center.y - lastCenter.y),
                            x: -(center.x - lastCenter.x)
                        });
                    }
                }
            },
            /**
             * Calculates the touch center of multiple touches
             * @param touches
             * @return {Object}
             */
            getTouchCenter: function(touches) {
                return this.getVectorAvg(touches);
            },
            /**
             * Calculates the average of multiple vectors (x, y values)
             */
            getVectorAvg: function(vectors) {
                return {
                    x: vectors.map(function(v) {
                        return v.x;
                    }).reduce(sum) / vectors.length,
                    y: vectors.map(function(v) {
                        return v.y;
                    }).reduce(sum) / vectors.length
                };
            },
            /**
             * Adds an offset
             * @param offset the offset to add
             * @return return true when the offset change was accepted
             */
            addOffset: function(offset) {
                this.offset = {
                    x: this.offset.x + offset.x,
                    y: this.offset.y + offset.y
                };
            },
            sanitize: function() {
                if (this.zoomFactor < this.options.zoomOutFactor) {
                    this.zoomOutAnimation();
                } else if (this.isInsaneOffset(this.offset)) {
                    this.sanitizeOffsetAnimation();
                }
            },
            /**
             * Checks if the offset is ok with the current zoom factor
             * @param offset
             * @return {Boolean}
             */
            isInsaneOffset: function(offset) {
                var sanitizedOffset = this.sanitizeOffset(offset);
                return sanitizedOffset.x !== offset.x || sanitizedOffset.y !== offset.y;
            },
            /**
             * Creates an animation moving to a sane offset
             */
            sanitizeOffsetAnimation: function() {
                var targetOffset = this.sanitizeOffset(this.offset), startOffset = {
                    x: this.offset.x,
                    y: this.offset.y
                }, updateProgress = function(progress) {
                    this.offset.x = startOffset.x + progress * (targetOffset.x - startOffset.x);
                    this.offset.y = startOffset.y + progress * (targetOffset.y - startOffset.y);
                    this.update();
                }.bind(this);
                this.animate(this.options.animationDuration, this.options.animationInterval, updateProgress, this.swing);
            },
            /**
             * Zooms back to the original position,
             * (no offset and zoom factor 1)
             */
            zoomOutAnimation: function() {
                var startZoomFactor = this.zoomFactor, zoomFactor = 1, center = this.getCurrentZoomCenter(), updateProgress = function(progress) {
                    this.scaleTo(startZoomFactor + progress * (zoomFactor - startZoomFactor), center);
                }.bind(this);
                this.animate(this.options.animationDuration, this.options.animationInterval, updateProgress, this.swing);
            },
            /**
             * Updates the aspect ratio
             */
            updateAspectRatio: function() {
                // this.setContainerY(this.getContainerX() / this.getAspectRatio());
                // @modified
                this.setContainerY();
            },
            /**
             * Calculates the initial zoom factor (for the element to fit into the container)
             * @return the initial zoom factor
             */
            getInitialZoomFactor: function() {
                // use .offsetWidth instead of width()
                // because jQuery-width() return the original width but Zepto-width() will calculate width with transform.
                // the same as .height()
                return this.container[0].offsetWidth / this.el[0].offsetWidth;
            },
            /**
             * Calculates the aspect ratio of the element
             * @return the aspect ratio
             */
            getAspectRatio: function() {
                return this.el[0].offsetWidth / this.el[0].offsetHeight;
            },
            /**
             * Calculates the virtual zoom center for the current offset and zoom factor
             * (used for reverse zoom)
             * @return {Object} the current zoom center
             */
            getCurrentZoomCenter: function() {
                // uses following formula to calculate the zoom center x value
                // offset_left / offset_right = zoomcenter_x / (container_x - zoomcenter_x)
                var length = this.container[0].offsetWidth * this.zoomFactor, offsetLeft = this.offset.x, offsetRight = length - offsetLeft - this.container[0].offsetWidth, widthOffsetRatio = offsetLeft / offsetRight, centerX = widthOffsetRatio * this.container[0].offsetWidth / (widthOffsetRatio + 1), // the same for the zoomcenter y
                height = this.container[0].offsetHeight * this.zoomFactor, offsetTop = this.offset.y, offsetBottom = height - offsetTop - this.container[0].offsetHeight, heightOffsetRatio = offsetTop / offsetBottom, centerY = heightOffsetRatio * this.container[0].offsetHeight / (heightOffsetRatio + 1);
                // prevents division by zero
                if (offsetRight === 0) {
                    centerX = this.container[0].offsetWidth;
                }
                if (offsetBottom === 0) {
                    centerY = this.container[0].offsetHeight;
                }
                return {
                    x: centerX,
                    y: centerY
                };
            },
            canDrag: function() {
                return !isCloseTo(this.zoomFactor, 1);
            },
            /**
             * Returns the touches of an event relative to the container offset
             * @param event
             * @return array touches
             */
            getTouches: function(event) {
                var position = this.container.offset();
                return Array.prototype.slice.call(event.touches).map(function(touch) {
                    return {
                        x: touch.pageX - position.left,
                        y: touch.pageY - position.top
                    };
                });
            },
            /**
             * Animation loop
             * does not support simultaneous animations
             * @param duration
             * @param interval
             * @param framefn
             * @param timefn
             * @param callback
             */
            animate: function(duration, interval, framefn, timefn, callback) {
                var startTime = new Date().getTime(), renderFrame = function() {
                    if (!this.inAnimation) {
                        return;
                    }
                    var frameTime = new Date().getTime() - startTime, progress = frameTime / duration;
                    if (frameTime >= duration) {
                        framefn(1);
                        if (callback) {
                            callback();
                        }
                        this.update();
                        this.stopAnimation();
                        this.update();
                    } else {
                        if (timefn) {
                            progress = timefn(progress);
                        }
                        framefn(progress);
                        this.update();
                        setTimeout(renderFrame, interval);
                    }
                }.bind(this);
                this.inAnimation = true;
                renderFrame();
            },
            /**
             * Stops the animation
             */
            stopAnimation: function() {
                this.inAnimation = false;
            },
            /**
             * Swing timing function for animations
             * @param p
             * @return {Number}
             */
            swing: function(p) {
                return -Math.cos(p * Math.PI) / 2 + .5;
            },
            getContainerX: function() {
                // return this.container[0].offsetWidth;
                // @modified
                return window.innerWidth;
            },
            getContainerY: function() {
                // return this.container[0].offsetHeight;
                // @modified
                return window.innerHeight;
            },
            setContainerY: function(y) {
                // return this.container.height(y);
                // @modified
                var t = window.innerHeight;
                return this.el.css({
                    height: t
                }), this.container.height(t);
            },
            /**
             * Creates the expected html structure
             */
            setupMarkup: function() {
                this.container = $('<div class="pinch-zoom-container"></div>');
                this.el.before(this.container);
                this.container.append(this.el);
                this.container.css({
                    overflow: "hidden",
                    position: "relative"
                });
                // Zepto doesn't recognize `webkitTransform..` style
                this.el.css({
                    "-webkit-transform-origin": "0% 0%",
                    "-moz-transform-origin": "0% 0%",
                    "-ms-transform-origin": "0% 0%",
                    "-o-transform-origin": "0% 0%",
                    "transform-origin": "0% 0%",
                    position: "absolute"
                });
            },
            end: function() {
                this.hasInteraction = false;
                this.sanitize();
                this.update();
            },
            /**
             * Binds all required event listeners
             */
            bindEvents: function() {
                detectGestures(this.container.get(0), this);
                // Zepto and jQuery both know about `on`
                $(window).on("resize", this.update.bind(this));
                $(this.el).find("img").on("load", this.update.bind(this));
            },
            /**
             * Updates the css values according to the current zoom factor and offset
             */
            update: function() {
                if (this.updatePlaned) {
                    return;
                }
                this.updatePlaned = true;
                setTimeout(function() {
                    this.updatePlaned = false;
                    this.updateAspectRatio();
                    var zoomFactor = this.getInitialZoomFactor() * this.zoomFactor, offsetX = -this.offset.x / zoomFactor, offsetY = -this.offset.y / zoomFactor, transform3d = "scale3d(" + zoomFactor + ", " + zoomFactor + ",1) " + "translate3d(" + offsetX + "px," + offsetY + "px,0px)", transform2d = "scale(" + zoomFactor + ", " + zoomFactor + ") " + "translate(" + offsetX + "px," + offsetY + "px)", removeClone = function() {
                        if (this.clone) {
                            this.clone.remove();
                            delete this.clone;
                        }
                    }.bind(this);
                    // Scale 3d and translate3d are faster (at least on ios)
                    // but they also reduce the quality.
                    // PinchZoom uses the 3d transformations during interactions
                    // after interactions it falls back to 2d transformations
                    if (!this.options.use2d || this.hasInteraction || this.inAnimation) {
                        this.is3d = true;
                        removeClone();
                        this.el.css({
                            "-webkit-transform": transform3d,
                            "-o-transform": transform2d,
                            "-ms-transform": transform2d,
                            "-moz-transform": transform2d,
                            transform: transform3d
                        });
                    } else {
                        // When changing from 3d to 2d transform webkit has some glitches.
                        // To avoid this, a copy of the 3d transformed element is displayed in the
                        // foreground while the element is converted from 3d to 2d transform
                        if (this.is3d) {
                            this.clone = this.el.clone();
                            this.clone.css("pointer-events", "none");
                            this.clone.appendTo(this.container);
                            setTimeout(removeClone, 200);
                        }
                        this.el.css({
                            "-webkit-transform": transform2d,
                            "-o-transform": transform2d,
                            "-ms-transform": transform2d,
                            "-moz-transform": transform2d,
                            transform: transform2d
                        });
                        this.is3d = false;
                    }
                }.bind(this), 0);
            },
            /**
             * Enables event handling for gestures
             */
            enable: function() {
                this.enabled = true;
            },
            /**
             * Disables event handling for gestures
             */
            disable: function() {
                this.enabled = false;
            }
        };
        var detectGestures = function(el, target) {
            var interaction = null, fingers = 0, lastTouchStart = null, startTouches = null, setInteraction = function(newInteraction, event) {
                if (interaction !== newInteraction) {
                    if (interaction && !newInteraction) {
                        switch (interaction) {
                          case "zoom":
                            target.handleZoomEnd(event);
                            break;

                          case "drag":
                            target.handleDragEnd(event);
                            break;
                        }
                    }
                    switch (newInteraction) {
                      case "zoom":
                        target.handleZoomStart(event);
                        break;

                      case "drag":
                        target.handleDragStart(event);
                        break;
                    }
                }
                interaction = newInteraction;
            }, updateInteraction = function(event) {
                if (fingers === 2) {
                    setInteraction("zoom");
                } else if (fingers === 1 && target.canDrag()) {
                    setInteraction("drag", event);
                } else {
                    setInteraction(null, event);
                }
            }, targetTouches = function(touches) {
                return Array.prototype.slice.call(touches).map(function(touch) {
                    return {
                        x: touch.pageX,
                        y: touch.pageY
                    };
                });
            }, getDistance = function(a, b) {
                var x, y;
                x = a.x - b.x;
                y = a.y - b.y;
                return Math.sqrt(x * x + y * y);
            }, calculateScale = function(startTouches, endTouches) {
                var startDistance = getDistance(startTouches[0], startTouches[1]), endDistance = getDistance(endTouches[0], endTouches[1]);
                return endDistance / startDistance;
            }, cancelEvent = function(event) {
                event.stopPropagation();
                event.preventDefault();
            }, detectDoubleTap = function(event) {
                var time = new Date().getTime();
                if (fingers > 1) {
                    lastTouchStart = null;
                }
                if (time - lastTouchStart < 300) {
                    cancelEvent(event);
                    target.handleDoubleTap(event);
                    switch (interaction) {
                      case "zoom":
                        target.handleZoomEnd(event);
                        break;

                      case "drag":
                        target.handleDragEnd(event);
                        break;
                    }
                }
                if (fingers === 1) {
                    lastTouchStart = time;
                }
            }, firstMove = true;
            el.addEventListener("touchstart", function(event) {
                if (target.enabled) {
                    firstMove = true;
                    fingers = event.touches.length;
                    detectDoubleTap(event);
                }
            });
            el.addEventListener("touchmove", function(event) {
                if (target.enabled) {
                    if (firstMove) {
                        updateInteraction(event);
                        if (interaction) {
                            cancelEvent(event);
                        }
                        startTouches = targetTouches(event.touches);
                    } else {
                        switch (interaction) {
                          case "zoom":
                            target.handleZoom(event, calculateScale(startTouches, targetTouches(event.touches)));
                            break;

                          case "drag":
                            target.handleDrag(event);
                            break;
                        }
                        if (interaction) {
                            cancelEvent(event);
                            target.update();
                        }
                    }
                    firstMove = false;
                }
            });
            el.addEventListener("touchend", function(event) {
                if (target.enabled) {
                    fingers = event.touches.length;
                    updateInteraction(event);
                }
            });
        };
        return PinchZoom;
    };
    module.exports = definePinchZoom(window.Zepto);
});
define("zepto.touchgallery", [ "./zepto.extend.touch", "zepto.pinchzoom" ], function(require, exports, module) {
    require("./zepto.extend.touch");
    // PinchZoom Plugin
    var PinchZoom = require("zepto.pinchzoom");
    var $ = window.Zepto;
    /**
     * @name        jQuery touchTouch plugin
     * @author        Martin Angelov
     * @version    1.0
     * @url            http://tutorialzine.com/2012/04/mobile-touch-gallery/
     * @license        MIT License
     */
    /* Private variables */
    var overlay = $('<div id="galleryOverlay">'), slider = $('<div id="gallerySlider">'), prevArrow = $('<a id="prevArrow"></a>'), nextArrow = $('<a id="nextArrow"></a>'), navControl = $('<ol class="nav-control"></ol>'), overlayVisible = false, msie = navigator.userAgent.indexOf("MSIE") > -1;
    /* Creating the plugin */
    $.fn.touchTouch = function() {
        var placeholders = $([]), index = 0, allitems = this, items = allitems, navControlItems = $([]);
        // Appending the markup to the page
        if ($("[data-am-gallery]").length) {
            overlay.hide().appendTo("body");
            slider.appendTo(overlay);
        }
        // Creating a placeholder for each image
        items.each(function(i) {
            placeholders = placeholders.add($('<div class="placeholder">'));
            navControlItems = navControlItems.add($("<li>" + (i + 1) + "</li>"));
        });
        navControl.append(navControlItems);
        overlay.append(navControl);
        // Hide the gallery if the background is touched / clicked
        slider.append(placeholders).on("click", function(e) {
            if (!$(e.target).is("img")) {
                hideOverlay();
            }
        });
        // Listen for touch events on the body and check if they
        // originated in #gallerySlider img - the images in the slider.
        $("body").on("touchstart", "#gallerySlider img", function(e) {
            var touch = e.originalEvent ? e.originalEvent : e, startX = touch.changedTouches[0].pageX;
            slider.on("touchmove", function(e) {
                e.preventDefault();
                touch = e.touches[0] || e.changedTouches[0];
                if (touch.pageX - startX > 10) {
                    slider.off("touchmove");
                    showPrevious();
                } else if (touch.pageX - startX < -10) {
                    slider.off("touchmove");
                    showNext();
                }
            });
            // Return false to prevent image
            // highlighting on Android
            return false;
        }).on("touchend", function() {
            slider.off("touchmove");
        });
        // for IE 10+
        if (window.PointerEvent || window.MSPointerEvent) {
            $("body").on("swipe", "#gallerySlider img", function(e) {
                e.preventDefault();
            }).on("swipeRight", "#gallerySlider img", function(e) {
                showPrevious();
            }).on("swipeLeft", "#gallerySlider img", function(e) {
                showNext();
            });
        }
        // Listening for clicks on the thumbnails
        items.on("click", function(e) {
            e.preventDefault();
            var $this = $(this), galleryName, selectorType, $closestGallery = $this.parent().closest("[data-gallery]");
            // Find gallery name and change items object to only have
            // that gallery
            //If gallery name given to each item
            if ($this.attr("data-gallery")) {
                galleryName = $this.attr("data-gallery");
                selectorType = "item";
            } else if ($closestGallery.length) {
                galleryName = $closestGallery.attr("data-gallery");
                selectorType = "ancestor";
            }
            //These statements kept seperate in case elements have data-gallery on both
            //items and ancestor. Ancestor will always win because of above statments.
            if (galleryName && selectorType == "item") {
                items = $("[data-gallery=" + galleryName + "]");
            } else if (galleryName && selectorType == "ancestor") {
                //Filter to check if item has an ancestory with data-gallery attribute
                items = items.filter(function() {
                    return $(this).parent().closest("[data-gallery]").length;
                });
            }
            // Find the position of this image
            // in the collection
            index = items.index(this);
            showOverlay(index);
            showImage(index);
            activeNavControl(index);
            // Preload the next image
            preload(index + 1);
            // Preload the previous
            preload(index - 1);
        });
        // If the browser does not have support
        // for touch, display the arrows
        if (!("ontouchstart" in window)) {
            overlay.append(prevArrow).append(nextArrow);
            prevArrow.click(function(e) {
                e.preventDefault();
                showPrevious();
            });
            nextArrow.click(function(e) {
                e.preventDefault();
                showNext();
            });
        }
        // Listen for arrow keys
        $(window).on("keydown", function(e) {
            var keyCode = e.keyCode;
            if (keyCode == 37) {
                showPrevious();
            } else if (keyCode == 39) {
                showNext();
            } else if (keyCode == 27) {
                hideOverlay();
            }
        });
        /* Private functions */
        function showOverlay(index) {
            // If the overlay is already shown, exit
            if (overlayVisible) {
                return false;
            }
            // Show the overlay
            overlay.show();
            setTimeout(function() {
                // Trigger the opacity CSS transition
                overlay.addClass("visible");
            }, 100);
            // Move the slider to the correct image
            offsetSlider(index);
            // Raise the visible flag
            overlayVisible = true;
        }
        function hideOverlay() {
            // If the overlay is not shown, exit
            if (!overlayVisible) {
                return false;
            }
            // Hide the overlay
            overlay.animate({
                opacity: 0,
                display: "none"
            }, 300).removeClass("visible");
            overlayVisible = false;
            //Clear preloaded items
            $(".placeholder").empty();
            //Reset possibly filtered items
            items = allitems;
        }
        function offsetSlider(index) {
            if (msie) {
                // windows phone 8 IE 显示有问题，单独处理
                slider.find(".placeholder").css({
                    display: "none"
                }).eq(index).css({
                    display: "inline-block"
                });
            } else {
                // This will trigger a smooth css transition
                slider.css("left", -index * 100 + "%");
            }
        }
        // Preload an image by its index in the items array
        function preload(index) {
            setTimeout(function() {
                showImage(index);
            }, 1e3);
        }
        // active nav control
        function activeNavControl(index) {
            var navItems = navControl.children("li");
            navItems.removeClass().eq(index).addClass("nav-active");
        }
        // Show image in the slider
        function showImage(index) {
            // If the index is outside the bonds of the array
            if (index < 0 || index >= items.length) {
                return false;
            }
            // Call the load function with the href attribute of the item
            loadImage(items.eq(index).attr("href"), function() {
                placeholders.eq(index).html(this).wrapInner('<div class="pinch-zoom"></div>');
                new PinchZoom(placeholders.eq(index).find(".pinch-zoom"), {});
            });
        }
        // Load the image and execute a callback function.
        // Returns a jQuery object
        function loadImage(src, callback) {
            var img = $("<img>").on("load", function() {
                callback.call(img);
            });
            img.attr("src", src);
        }
        function showNext() {
            // If this is not the last image
            if (index + 1 < items.length) {
                index++;
                offsetSlider(index);
                preload(index + 1);
                activeNavControl(index);
            } else {
                // Trigger the spring animation
                slider.addClass("rightSpring");
                setTimeout(function() {
                    slider.removeClass("rightSpring");
                }, 500);
            }
        }
        function showPrevious() {
            // If this is not the first image
            if (index > 0) {
                index--;
                offsetSlider(index);
                preload(index - 1);
                activeNavControl(index);
            } else {
                // Trigger the spring animation
                slider.addClass("leftSpring");
                setTimeout(function() {
                    slider.removeClass("leftSpring");
                }, 500);
            }
        }
    };
});
seajs.use(["accordion","core","divider","duoshuo","figure","footer","gallery","gotop","header","intro","list_news","map","mechat","menu","navbar","pagination","paragraph","slider","sohucs","tabs","titlebar","ui.add2home","ui.alert","ui.button","ui.collapse","ui.dimmer","ui.dropdown","ui.iscroll-lite","ui.modal","ui.offcanvas","ui.popover","ui.progress","ui.pureview","ui.scrollspy","ui.scrollspynav","ui.share","ui.smooth-scroll","ui.sticky","ui.tabs","util.cookie","util.fastclick","util.fullscreen","util.qrcode","zepto.extend.data","zepto.extend.fx","zepto.extend.selector","zepto.extend.touch","zepto.flexslider","zepto.outerdemension","zepto.pinchzoom","zepto.touchgallery"]);
/*! AmazeUI - v1.0.0 | (c) 2014 AllMobilize, Inc. | @license MIT | 2014-09-05 16:09:09 */
/*! Sea.js 2.2.1 | seajs.org/LICENSE.md */

!function(t,e){function n(t){return function(e){return{}.toString.call(e)=="[object "+t+"]"}}function i(){return k++}function o(t){return t.match(z)[0]}function a(t){for(t=t.replace(M,"/");t.match(D);)t=t.replace(D,"/");return t=t.replace(L,"$1/")}function s(t){var e=t.length-1,n=t.charAt(e);return"#"===n?t.substring(0,e):".js"===t.substring(e-2)||t.indexOf("?")>0||".css"===t.substring(e-3)||"/"===n?t:t+".js"}function r(t){var e=x.alias;return e&&C(e[t])?e[t]:t}function l(t){var e,n=x.paths;return n&&(e=t.match(N))&&C(n[e[1]])&&(t=n[e[1]]+e[2]),t}function c(t){var e=x.vars;return e&&t.indexOf("{")>-1&&(t=t.replace(I,function(t,n){return C(e[n])?e[n]:t})),t}function u(t){var e=x.map,n=t;if(e)for(var i=0,o=e.length;o>i;i++){var a=e[i];if(n=S(a)?a(t)||t:t.replace(a[0],a[1]),n!==t)break}return n}function d(t,e){var n,i=t.charAt(0);if($.test(t))n=t;else if("."===i)n=a((e?o(e):x.cwd)+t);else if("/"===i){var s=x.cwd.match(_);n=s?s[0]+t.substring(1):t}else n=x.base+t;return 0===n.indexOf("//")&&(n=location.protocol+n),n}function h(t,e){if(!t)return"";t=r(t),t=l(t),t=c(t),t=s(t);var n=d(t,e);return n=u(n)}function p(t){return t.hasAttribute?t.src:t.getAttribute("src",4)}function f(t,e,n){var i=Z.test(t),o=O.createElement(i?"link":"script");if(n){var a=S(n)?n(t):n;a&&(o.charset=a)}m(o,e,i,t),i?(o.rel="stylesheet",o.href=t):(o.async=!0,o.src=t),U=o,X?W.insertBefore(o,X):W.appendChild(o),U=null}function m(t,n,i,o){function a(){t.onload=t.onerror=t.onreadystatechange=null,i||x.debug||W.removeChild(t),t=null,n()}var s="onload"in t;return!i||!Y&&s?(s?(t.onload=a,t.onerror=function(){P("error",{uri:o,node:t}),a()}):t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&a()},e):(setTimeout(function(){v(t,n)},1),e)}function v(t,e){var n,i=t.sheet;if(Y)i&&(n=!0);else if(i)try{i.cssRules&&(n=!0)}catch(o){"NS_ERROR_DOM_SECURITY_ERR"===o.name&&(n=!0)}setTimeout(function(){n?e():v(t,e)},20)}function g(){if(U)return U;if(R&&"interactive"===R.readyState)return R;for(var t=W.getElementsByTagName("script"),e=t.length-1;e>=0;e--){var n=t[e];if("interactive"===n.readyState)return R=n}}function w(t){var e=[];return t.replace(V,"").replace(G,function(t,n,i){i&&e.push(i)}),e}function y(t,e){this.uri=t,this.dependencies=e||[],this.exports=null,this.status=0,this._waitings={},this._remain=0}if(!t.seajs){var b=t.seajs={version:"2.2.1"},x=b.data={},T=n("Object"),C=n("String"),E=Array.isArray||n("Array"),S=n("Function"),k=0,A=x.events={};b.on=function(t,e){var n=A[t]||(A[t]=[]);return n.push(e),b},b.off=function(t,e){if(!t&&!e)return A=x.events={},b;var n=A[t];if(n)if(e)for(var i=n.length-1;i>=0;i--)n[i]===e&&n.splice(i,1);else delete A[t];return b};var P=b.emit=function(t,e){var n,i=A[t];if(i)for(i=i.slice();n=i.shift();)n(e);return b},z=/[^?#]*\//,M=/\/\.\//g,D=/\/[^/]+\/\.\.\//,L=/([^:/])\/\//g,N=/^([^/:]+)(\/.+)$/,I=/{([^{]+)}/g,$=/^\/\/.|:\//,_=/^.*?\/\/.*?\//,O=document,q=o(O.URL),F=O.scripts,H=O.getElementById("seajsnode")||F[F.length-1],B=o(p(H)||q);b.resolve=h;var U,R,W=O.head||O.getElementsByTagName("head")[0]||O.documentElement,X=W.getElementsByTagName("base")[0],Z=/\.css(?:\?|$)/i,Y=+navigator.userAgent.replace(/.*(?:AppleWebKit|AndroidWebKit)\/(\d+).*/,"$1")<536;b.request=f;var j,G=/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|\/\*[\S\s]*?\*\/|\/(?:\\\/|[^\/\r\n])+\/(?=[^\/])|\/\/.*|\.\s*require|(?:^|[^$])\brequire\s*\(\s*(["'])(.+?)\1\s*\)/g,V=/\\\\/g,K=b.cache={},Q={},J={},te={},ee=y.STATUS={FETCHING:1,SAVED:2,LOADING:3,LOADED:4,EXECUTING:5,EXECUTED:6};y.prototype.resolve=function(){for(var t=this,e=t.dependencies,n=[],i=0,o=e.length;o>i;i++)n[i]=y.resolve(e[i],t.uri);return n},y.prototype.load=function(){var t=this;if(!(t.status>=ee.LOADING)){t.status=ee.LOADING;var n=t.resolve();P("load",n);for(var i,o=t._remain=n.length,a=0;o>a;a++)i=y.get(n[a]),i.status<ee.LOADED?i._waitings[t.uri]=(i._waitings[t.uri]||0)+1:t._remain--;if(0===t._remain)return t.onload(),e;var s={};for(a=0;o>a;a++)i=K[n[a]],i.status<ee.FETCHING?i.fetch(s):i.status===ee.SAVED&&i.load();for(var r in s)s.hasOwnProperty(r)&&s[r]()}},y.prototype.onload=function(){var t=this;t.status=ee.LOADED,t.callback&&t.callback();var e,n,i=t._waitings;for(e in i)i.hasOwnProperty(e)&&(n=K[e],n._remain-=i[e],0===n._remain&&n.onload());delete t._waitings,delete t._remain},y.prototype.fetch=function(t){function n(){b.request(s.requestUri,s.onRequest,s.charset)}function i(){delete Q[r],J[r]=!0,j&&(y.save(a,j),j=null);var t,e=te[r];for(delete te[r];t=e.shift();)t.load()}var o=this,a=o.uri;o.status=ee.FETCHING;var s={uri:a};P("fetch",s);var r=s.requestUri||a;return!r||J[r]?(o.load(),e):Q[r]?(te[r].push(o),e):(Q[r]=!0,te[r]=[o],P("request",s={uri:a,requestUri:r,onRequest:i,charset:x.charset}),s.requested||(t?t[s.requestUri]=n:n()),e)},y.prototype.exec=function(){function t(e){return y.get(t.resolve(e)).exec()}var n=this;if(n.status>=ee.EXECUTING)return n.exports;n.status=ee.EXECUTING;var o=n.uri;t.resolve=function(t){return y.resolve(t,o)},t.async=function(e,n){return y.use(e,n,o+"_async_"+i()),t};var a=n.factory,s=S(a)?a(t,n.exports={},n):a;return s===e&&(s=n.exports),delete n.factory,n.exports=s,n.status=ee.EXECUTED,P("exec",n),s},y.resolve=function(t,e){var n={id:t,refUri:e};return P("resolve",n),n.uri||b.resolve(n.id,e)},y.define=function(t,n,i){var o=arguments.length;1===o?(i=t,t=e):2===o&&(i=n,E(t)?(n=t,t=e):n=e),!E(n)&&S(i)&&(n=w(""+i));var a={id:t,uri:y.resolve(t),deps:n,factory:i};if(!a.uri&&O.attachEvent){var s=g();s&&(a.uri=s.src)}P("define",a),a.uri?y.save(a.uri,a):j=a},y.save=function(t,e){var n=y.get(t);n.status<ee.SAVED&&(n.id=e.id||t,n.dependencies=e.deps||[],n.factory=e.factory,n.status=ee.SAVED)},y.get=function(t,e){return K[t]||(K[t]=new y(t,e))},y.use=function(e,n,i){var o=y.get(i,E(e)?e:[e]);o.callback=function(){for(var e=[],i=o.resolve(),a=0,s=i.length;s>a;a++)e[a]=K[i[a]].exec();n&&n.apply(t,e),delete o.callback},o.load()},y.preload=function(t){var e=x.preload,n=e.length;n?y.use(e,function(){e.splice(0,n),y.preload(t)},x.cwd+"_preload_"+i()):t()},b.use=function(t,e){return y.preload(function(){y.use(t,e,x.cwd+"_use_"+i())}),b},y.define.cmd={},t.define=y.define,b.Module=y,x.fetchedList=J,x.cid=i,b.require=function(t){var e=y.get(y.resolve(t));return e.status<ee.EXECUTING&&(e.onload(),e.exec()),e.exports};var ne=/^(.+?\/)(\?\?)?(seajs\/)+/;x.base=(B.match(ne)||["",B])[1],x.dir=B,x.cwd=q,x.charset="utf-8",x.preload=function(){var t=[],e=location.search.replace(/(seajs-\w+)(&|$)/g,"$1=1$2");return e+=" "+O.cookie,e.replace(/(seajs-\w+)=1/g,function(e,n){t.push(n)}),t}(),b.config=function(t){for(var e in t){var n=t[e],i=x[e];if(i&&T(i))for(var o in n)i[o]=n[o];else E(i)?n=i.concat(n):"base"===e&&("/"!==n.slice(-1)&&(n+="/"),n=d(n)),x[e]=n}return P("config",t),b}}}(this),define("core",["zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){function n(t){return t=i(t),!(!t.width()&&!t.height())&&"none"!==t.css("display")}require("zepto.extend.fx"),require("zepto.extend.data"),require("zepto.extend.selector");var i=window.Zepto,o=i.AMUI||{},a=i(window),s=window.document,r=i("html");if(o.fn)return o;o.fn=function(t,e){var n=arguments,a=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),s=a[1],r=a[2];return o[s]?this.each(function(){var t=i(this),a=t.data(s);a||t.data(s,a=o[s](this,r?void 0:e)),r&&a[r].apply(a,Array.prototype.slice.call(n,1))}):(log.error('Amaze UI component [" + component + "] does not exist.'),this)},o.support={},o.support.transition=function(){var t=function(){var t,e=s.body||s.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}(),o.support.animation=function(){var t=function(){var t,e=s.body||s.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}(),o.support.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)},o.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||window.DocumentTouch&&document instanceof window.DocumentTouch||window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>0||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>0||!1,o.support.mutationobserver=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver||null,o.utils={},o.utils.debounce=function(t,e,n){var i;return function(){var o=this,a=arguments,s=function(){i=null,n||t.apply(o,a)},r=n&&!i;clearTimeout(i),i=setTimeout(s,e),r&&t.apply(o,a)}},o.utils.isInView=function(t,e){var n=i(t),o=!(!n.width()&&!n.height())&&"none"!==n.css("display");if(!o)return!1;var s=a.scrollLeft(),r=a.scrollTop(),l=n.offset(),c=l.left,u=l.top;return e=i.extend({topOffset:0,leftOffset:0},e),u+n.height()>=r&&u-e.topOffset<=r+a.height()&&c+n.width()>=s&&c-e.leftOffset<=s+a.width()},o.utils.parseOptions=o.utils.options=function(t){if(i.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,n={};if(-1!=e)try{n=new Function("","var json = "+t.substr(e)+"; return JSON.parse(JSON.stringify(json));")()}catch(o){}return n},o.utils.generateGUID=function(t){var e=t+"-"||"am-";do e+=Math.random().toString(36).substring(2,7);while(document.getElementById(e));return e},o.utils.event={},o.utils.event.click=o.support.touch?"tap":"click",i.AMUI=o,i.fn.amui=o.fn,i.AMUI.langdirection="rtl"==i("html").attr("dir")?"right":"left",i.fn.emulateTransitionEnd=function(t){var e=!1,n=this;i(this).one(o.support.transition.end,function(){e=!0});var a=function(){e||i(n).trigger(o.support.transition.end)};return setTimeout(a,t),this},i.fn.redraw=function(){return i(this).each(function(){this.offsetHeight}),this},i.fn.transitionEnd=function(t){function e(o){t.call(this,o),n&&i.off(n,e)}var n=o.support.transition.end,i=this;return t&&n&&i.on(n,e),this},i.fn.removeClassRegEx=function(){return this.each(function(t){var e=i(this).attr("class");if(!e||!t)return!1;var n=[];e=e.split(" ");for(var o=0,a=e.length;a>o;o++)e[o].match(t)||n.push(e[o]);i(this).attr("class",n.join(" "))})},i.fn.alterClass=function(t,e){var n=this;if(-1===t.indexOf("*"))return n.removeClass(t),e?n.addClass(e):n;var o=new RegExp("\\s"+t.replace(/\*/g,"[A-Za-z0-9-_]+").split(" ").join("\\s|\\s")+"\\s","g");return n.each(function(t,e){for(var n=" "+e.className+" ";o.test(n);)n=n.replace(o," ");e.className=i.trim(n)}),e?n.addClass(e):n},i.fn.getHeight=function(){var t=i(this),e="auto";if(t.is(":visible"))e=t.height();else{var n={position:t.css("position"),visibility:t.css("visibility"),display:t.css("display")};e=t.css({position:"absolute",visibility:"hidden",display:"block"}).height(),t.css(n)}return e},i.fn.getSize=function(){var t=i(this);if("none"!==t.css("display"))return{width:t.width(),height:t.height()};var e={position:t.css("position"),visibility:t.css("visibility"),display:t.css("display")},n={display:"block",position:"absolute",visibility:"hidden"};t.css(n);var o=t.width(),a=t.height();return t.css(e),{width:o,height:a}};var l=i.fn.is,c=i.fn.filter;i.fn.is=function(t){return":visible"===t?n(this):":hidden"===t?!n(this):l.call(this,t)},i.fn.filter=function(t){return":visible"===t?i([].filter.call(this,n)):":hidden"===t?i([].filter.call(this,function(t){return!n(t)})):c.call(this,t)},o.utils.rAF=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)}}(),o.utils.cancelAF=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){window.clearTimeout(t)}}(),o.support.touch&&require.async(["util.fastclick"],function(t){i(function(){t&&t.attach(document.body),r.addClass("am-touch")})}),i(function(){i(document).trigger("domready:amui"),r.removeClass("no-js").addClass("js"),o.support.animation&&r.addClass("cssanimations");var t=i(".am-layout");t.find('[class*="md-block-grid"]').alterClass("md-block-grid-*"),t.find('[class*="lg-block-grid"]').alterClass("lg-block-grid"),i("[data-am-widget]").each(function(){var t=i(this);0===t.parents(".am-layout").length&&t.addClass("am-no-layout")})}),e.exports=o}),define("accordion",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","ui.collapse"],function(require,t){require("core"),require("ui.collapse");var e=window.Zepto,n=e.AMUI,i=function(){var t=e('[data-am-widget="accordion"]'),i={item:".am-accordion-item",title:".am-accordion-title",content:".am-accordion-content"};t.each(function(o,a){var s=n.utils.parseOptions(e(a).attr("data-am-accordion")),r=t.find(i.title);r.on("click",function(){var t=e(this).next(i.content),n=e(this).parent(i.item),o=t.data("amui.collapse");n.toggleClass("am-active"),o?t.collapse("toggle"):t.collapse(),!s.multiple&&e(a).children(".am-active").not(n).removeClass("am-active").find(".am-accordion-content.am-in").collapse("close")})})};e(function(){i()}),t.init=i}),define("divider",[],function(){}),define("duoshuo",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t){function e(){var t=n(".ds-thread"),e=t.parent('[data-am-widget="duoshuo"]').attr("data-ds-short-name"),i=("https:"==document.location.protocol?"https:":"http:")+"//static.duoshuo.com/embed.js";if(t.length&&e&&(window.duoshuoQuery={short_name:e},!n('script[src="'+i+'"]').length)){var o=n("<script>",{async:!0,type:"text/javascript",src:i,charset:"utf-8"});n("body").append(o)}}require("core");var n=window.Zepto;n(window).on("load",e),t.init=e}),define("figure",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","zepto.pinchzoom"],function(require,t){require("core");var e=window.Zepto,n=require("zepto.pinchzoom");e.isImgZoomAble=function(t){var n=new Image;n.src=t.src;var i=e(t).width()<n.width;return i&&e(t).parent(".am-figure").addClass("am-figure-zoomable"),i},e.fn.imgZoomToggle=function(){return this.each(function(){var t=e.isImgZoomAble(this),i=e('<div class="am-figure-wrap"><div class="pinch-zoom"></div></div>');$zoomWrap=e(".am-figure-wrap"),0==$zoomWrap.length&&(e("body").append(i),$zoomWrap=e(".am-figure-wrap"),$pinch=$zoomWrap.find(".pinch-zoom"),$pinch.each(function(){new n(e(this),{})})),t&&($pinch.empty().html(this.outerHTML),$zoomWrap.find("img").width(e(window).width()),e(this).parent(".am-figure").on("click",function(){$zoomWrap.toggleClass("am-active")}),$zoomWrap.on("click",function(t){t.preventDefault();var n=t.target;e(n).is("img")||e(this).toggleClass("am-active")}))})};var i=function(){e(".am-figure img").imgZoomToggle()};e(window).on("load",function(){i()}),t.init=i}),define("footer",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","ui.add2home","util.cookie","ui.modal","ui.dimmer"],function(require,t){require("core"),require("ui.add2home");var e=require("util.cookie"),n=(require("ui.modal"),window.Zepto),i=function(){n(".am-footer-ysp").on("click",function(){n("#am-footer-mode").modal()}),n('[data-rel="desktop"]').on("click",function(t){t.preventDefault(),window.AMPlatform?AMPlatform.util.goDesktop():(e.set("allmobilize","desktop","","/"),window.location=window.location)})};n(window).on("load",function(){i()}),t.init=i}),define("gallery",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","zepto.touchgallery","zepto.extend.touch","zepto.pinchzoom"],function(require,t){function e(t){var e=n("<li class='am-gallery-more'><a href='javascript:;'>更多 &gt;&gt;</a></li>");t.children().length>6&&(t.children().each(function(t){t>5&&n(this).hide()}),t.find(".am-gallery-more").remove(),t.append(e)),t.find(".am-gallery-more").on("click",function(){t.children().show(),n(this).hide()})}require("core");var n=(require("zepto.touchgallery"),window.Zepto),i=n.AMUI,o=function(){var t=n('[data-am-widget="gallery"]'),o=t.filter(".am-gallery-one");t.each(function(){var t=i.utils.parseOptions(n(this).attr("data-am-gallery"));t.lightbox&&n(this).find("a").touchTouch()}),o.each(function(){e(n(this))})};n(function(){o()}),t.init=o}),define("gotop",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","ui.smooth-scroll"],function(require,t){require("core"),require("ui.smooth-scroll");var e=window.Zepto,n=(e.AMUI,function(){e(".am-gotop").find("a").on("click",function(t){t.preventDefault(),e("body").smoothScroll(0)})});e(function(){n()}),t.init=n}),define("header",[],function(){window.Zepto}),define("intro",[],function(){window.Zepto}),define("list_news",[],function(require,t){function e(t){var e=t.find(".am-list"),i="<a class='am-list-news-more am-btn am-btn-default' href='###'>更多 &gt;&gt;</a>";e.children().length>6&&(e.children().each(function(t){t>5&&n(this).hide()}),t.find(".am-list-news-more").remove(),t.append(i)),t.find(".am-list-news-more").on("click",function(){e.children().show(),n(this).hide()})}var n=window.Zepto,i=function(){n(".am-list-news-one").each(function(){e(n(this))})};n(function(){i()}),t.init=i}),define("map",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t){function e(t){var e=i("<script/>",{src:"http://api.map.baidu.com/getscript?type=quick&file=api&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002"});i("body").append(e),e.on("load",function(){var e=i("<script/>",{src:"http://api.map.baidu.com/getscript?type=quick&file=feature&ak=WVAXZ05oyNRXS5egLImmentg&t=20140109092002"});i("body").append(e),e.on("load",function(){var e=document.createElement("script");e.textContent="("+t.toString()+")();",i("body")[0].appendChild(e)})})}function n(){var t=document.querySelector(".am-map"),e=116.331398,n=39.897445,i=t.getAttribute("data-name"),o=t.getAttribute("data-address"),a=t.getAttribute("data-longitude")||e,s=t.getAttribute("data-latitude")||n,r=new BMap.Map("bd-map"),l=new BMap.Point(a,s);r.centerAndZoom(l,18),r.addControl(new BMap.ZoomControl);var c={width:200,title:i},u=new BMap.InfoWindow("地址："+o,c),d=new BMap.Geocoder;a==e&&s==n?d.getPoint(o,function(t){t&&(r.centerAndZoom(t,17),r.addOverlay(new BMap.Marker(t)),r.openInfoWindow(u,t))},""):d.getLocation(l,function(){r.centerAndZoom(l,17),r.addOverlay(new BMap.Marker(l)),o?r.openInfoWindow(u,l):r.openInfoWindow(new BMap.InfoWindow(o,c),l)})}require("core");var i=window.Zepto,o=function(){i(".am-map").length&&e(n)};i(document).on("ready",o),t.init=o}),define("mechat",[],function(require,t){var e=window.Zepto,n=function(){if(e("#mechat").length){var t=e('[data-am-widget="mechat"]'),n=t.data("am-mechat-unitid"),i=e("<script>",{charset:"utf-8",src:"http://mechatim.com/js/unit/button.js?id="+n});e("body").append(i)}};e(window).on("load",n),t.init=n}),define("menu",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","ui.offcanvas","zepto.outerdemension","ui.collapse","ui.iscroll-lite"],function(require,t){require("core"),require("ui.offcanvas"),require("ui.collapse");var e=require("ui.iscroll-lite"),n=window.Zepto,i=(n.AMUI,function(){var t=n('[data-am-widget="menu"]');t.find(".am-menu-nav .am-parent > a").on("click",function(t){t.preventDefault();var e=n(this),i=e.parent(),o=e.next(".am-menu-sub");i.toggleClass("am-open"),o.collapse("toggle"),i.siblings(".am-parent").removeClass("am-open").children(".am-menu-sub.am-in").collapse("close")}),t.filter("[data-am-menu-collapse]").find("> .am-menu-toggle").on("click",function(t){t.preventDefault();var e=n(this),i=e.next(".am-menu-nav");e.toggleClass("am-active"),i.collapse("toggle")}),t.filter("[data-am-menu-offcanvas]").find("> .am-menu-toggle").on("click",function(t){t.preventDefault();var e=n(this),i=e.next(".am-offcanvas");e.toggleClass("am-active"),i.offCanvas("open")});var i='.am-offcanvas[data-dismiss-on="click"]',o=n(i);o.find("a").not(".am-parent>a").on("click",function(){n(this).parents(i).offCanvas("close")}),t.filter(".am-menu-one").each(function(t){var i,o=n(this),a=n('<div class="am-menu-nav-sub-wrap"></div>'),s=0,r=o.find(".am-menu-nav"),l=r.children("li");l.filter(".am-parent").each(function(t){n(this).attr("data-rel","#am-menu-sub-"+t),n(this).find(".am-menu-sub").attr("id","am-menu-sub-"+t).appendTo(a)}),o.append(a),r.wrap('<div class="am-menu-nav-wrap" id="am-menu-'+t+'">'),l.each(function(){s+=parseInt(n(this).width())}),r.width(s);var c=new e("#am-menu-"+t,{eventPassthrough:!0,scrollX:!0,scrollY:!1,preventDefault:!1});l.on("click",function(){var t=n(this);t.addClass("am-active").siblings().removeClass("am-active"),a.find(".am-menu-sub.am-in").collapse("close"),t.is(".am-parent")?!t.hasClass(".am-open")&&a.find(t.attr("data-rel")).collapse("open"):t.siblings().removeClass("am-open"),void 0===i&&(i=n(this).index()?0:1);var e,s=n(this).index()>i,l=n(this)[s?"next":"prev"](),u=l.offset()||n(this).offset(),d=o.offset(),h=parseInt(o.css("padding-left"));(s?u.left+u.width>d.left+d.width:u.left<d.left)&&(e=r.offset(),c.scrollTo(s?d.width-u.left+e.left-u.width-h:e.left-u.left,0,400)),i=n(this).index()}),o.on("touchmove",function(t){t.preventDefault()})})});n(function(){i()}),t.init=i}),define("navbar",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","util.qrcode","ui.modal","ui.dimmer","ui.share"],function(require,t){require("core");var e=window.Zepto,n=e.AMUI,i=require("util.qrcode"),o=(require("ui.modal"),require("ui.share")),a=function(){function t(){u.append($moreLink),u.find("li").not(".am-navbar-more").slice(s()-1).appendTo($moreActions),r.append($moreActions)}function a(){return s()>=h?($moreLink.hide(),void $moreActions.find("li").insertBefore($moreLink)):(!r.find(".am-navbar-actions").length&&t(),$moreLink.show(),void(u.find("li").length<s()?$moreActions.find("li").slice(0,s()-u.find("li").length).insertBefore($moreLink):u.find("li").length>s()&&($moreActions.find("li").length?u.find("li").not($moreLink).slice(s()-1).insertBefore($moreActions.find("li").first()):u.find("li").not($moreLink).slice(s()-1).appendTo($moreActions))))}function s(){return Math.floor((l.width()-offsetWidth)/navMinWidth)}var r=e('[data-am-widget="navbar"]');if(r.length){var l=e(window),c=e("body"),u=r.find(".am-navbar-nav"),d=r.find("li"),h=d.length;if(configItems=u.attr("class")&&parseInt(u.attr("class").match(/sm-block-grid-(\d)/)[1])||3,navMinWidth=60,offsetWidth=16,$share=d.filter("[data-am-navbar-share]"),$qrcode=d.filter("[data-am-navbar-qrcode]"),activeStatus="am-active",$moreActions=e('<ul class="am-navbar-actions"></ul>',{id:n.utils.generateGUID("am-navbar-actions")}),$moreLink=e('<li class="am-navbar-labels am-navbar-more"><a href="javascript: void(0);"><span class="am-icon-angle-up"></span><span class="am-navbar-label">更多</span></a></li>'),"fixed"==r.css("position")&&c.addClass("with-fixed-navbar"),$qrcode.length){var p="am-navbar-qrcode";if(m=e("#"+p),!m.length){var f=$qrcode.attr("data-am-navbar-qrcode"),m=e('<div class="am-modal am-modal-no-btn" id=""><div class="am-modal-dialog"><div class="am-modal-bd"></div></div></div>',{id:p}),v=m.find(".am-modal-bd");if(f)v.html('<img src="'+f+'"/>');else{var g=new i({render:"canvas",correctLevel:0,text:window.location.href,width:200,height:200,background:"#fff",foreground:"#000"});v.html(g)}c.append(m)}$qrcode.on("click",function(t){t.preventDefault(),m.modal()})}h>configItems&&h>s()&&t(),r.on("click.navbar.amui",".am-navbar-more",function(t){t.preventDefault(),$moreLink[$moreActions.hasClass(activeStatus)?"removeClass":"addClass"](activeStatus),$moreActions.toggleClass(activeStatus)}),$share.length&&$share.on("click.navbar.amui",function(t){t.preventDefault(),o.toggle()}),l.on("resize.navbar.amui orientationchange.navbar.amui",n.utils.debounce(a,150))}};e(function(){a()}),t.init=a}),define("pagination",[],function(){window.Zepto}),define("paragraph",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","zepto.pinchzoom"],function(require,t){require("core");var e,n=window.Zepto,i=n.AMUI,o=require("zepto.pinchzoom");n.fn.paragraphZoomToggle=function(){var t,e,i,a=!0,s=n("<div class='am-paragraph-wrap'><header></header><div class='pinch-zoom'></div></div>");i=n(".am-paragraph-wrap"),t=n(".am-paragraph-wrap header"),e=i.find(".pinch-zoom"),this.each(function(){n(this).on("click",function(){a&&n(".am-paragraph").length&&(n("body").append(s),i=n(".am-paragraph-wrap"),e=i.find(".pinch-zoom"),t=i.find("header"),e.each(function(){new o(n(this),{})}),a=!1),e.html(this.outerHTML),t.html(n(this).attr("alt")?n(this).attr("alt"):"返回"),i.addClass("am-active").find("img").width(n(window).width())})})},n.fn.paragraphTable=function(t){function e(t){t.preventDefault();var o=(t.changedTouches[0],s.offset().left);o>10&&s.animate({left:10},500,"ease-out"),o<-s.width()+n(window).width()-10&&s.animate({left:-s.width()+n(window).width()-10},500,"ease-out"),n(document).off("touchend MSPointerUp pointerup",e),n(document).off("touchmove MSPointerMove pointermove",i)}function i(t){var e=t.targetTouches[0];u=e.clientX-o,d=e.clientY-a,"undefined"==typeof r&&(r=!!(r||Math.abs(u)<Math.abs(d))),r||(t.preventDefault(),l.parent().css("left",e.clientX-c))}var o,a,s,r,l=n(this),c=0,u=0,d=0;t>n("body").width()&&(l.wrap("<div class='am-paragraph-table-container'><div class='am-paragraph-table-scroller'></div></div>"),s=l.parent(),s.width(t),s.height(l.height()),s.parent().height(l.height()+20),s.on("touchstart MSPointerDown pointerdown",function(t){var s=t.targetTouches[0];c=s.clientX-n(this).offset().left,o=s.clientX,a=s.clientY,r=void 0,n(document).on("touchmove MSPointerMove pointermove",i),n(document).on("touchend MSPointerUp pointerup",e)}))},e=function(){var t,e=n("body"),o=n('[data-am-widget="paragraph"]');o.each(function(){var o=n(this),a=i.utils.parseOptions(o.attr("data-am-paragraph"));a.imgLightbox&&(o.find("img").paragraphZoomToggle(),e.on("click",".am-paragraph-wrap",function(t){t.preventDefault();var e=t.target;n(e).is("img")||n(this).toggleClass("am-active")})),a.tableScrollable&&o.find("table").each(function(){t=n(this).width(),n(this).paragraphTable(t)})})},n(window).on("load",function(){e()}),t.init=e}),define("slider",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","zepto.flexslider"],function(require,t){require("core"),require("zepto.flexslider");var e=window.Zepto,n=e.AMUI,i=function(){var t=e('[data-am-widget="slider"]');t.not(".am-slider-manual").each(function(t,i){var o=n.utils.parseOptions(e(i).attr("data-am-slider"));e(i).flexslider(o)})};e(document).on("ready",i),t.init=i}),define("sohucs",[],function(require,t){var e=window.Zepto,n=function(){if(e("#SOHUCS").length){var t=e('[data-am-widget="sohucs"]'),n=t.attr("data-am-sohucs-appid"),i=t.attr("data-am-sohucs-conf"),o=e("<script></script>",{charset:"utf-8",id:"changyan_mobile_js",src:"http://changyan.sohu.com/upload/mobile/wap-js/changyan_mobile.js?client_id="+n+"&conf="+i});e("body").append(o)}};e(window).on("load",n),t.init=n}),define("tabs",["zepto.extend.touch","core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","ui.tabs"],function(require,t){require("zepto.extend.touch"),require("core"),require("ui.tabs");var e=window.Zepto,n=function(){e('[data-am-widget="tabs"]').tabs()};e(function(){n()}),t.init=n}),define("titlebar",[],function(){window.Zepto}),define("ui.add2home",[],function(){/*!
     * Add to Homescreen v2.0.11 ~ Copyright (c) 2013 Matteo Spinelli, http://cubiq.org
     * Released under MIT license, http://cubiq.org/license
     */
!function(t){function e(){if(E){var e,i=Date.now();if(t.addToHomeConfig)for(e in t.addToHomeConfig)P[e]=t.addToHomeConfig[e];P.autostart||(P.hookOnLoad=!1),d=/ipad/gi.test(C.platform),h=t.devicePixelRatio&&t.devicePixelRatio>1,p=/Safari/i.test(C.appVersion)&&!/CriOS/i.test(C.appVersion),f=C.standalone,m=C.appVersion.match(/OS (\d+_\d+)/i),m=m&&m[1]?+m[1].replace("_","."):0,A=+t.localStorage.getItem("addToHome"),g=t.sessionStorage.getItem("addToHomeSession"),w=P.returningVisitor?A&&A+24192e5>i:!0,A||(A=i),v=w&&i>=A,P.hookOnLoad?t.addEventListener("load",n,!1):!P.hookOnLoad&&P.autostart&&n()}}function n(){if(t.removeEventListener("load",n,!1),w?P.expire&&v&&t.localStorage.setItem("addToHome",Date.now()+6e4*P.expire):t.localStorage.setItem("addToHome",Date.now()),b||p&&v&&!g&&!f&&w){var e="",o=C.platform.split(" ")[0],a=C.language.replace("-","_");y=document.createElement("div"),y.id="addToHomeScreen",y.style.cssText+="left:-9999px;-webkit-transition-property:-webkit-transform,opacity;-webkit-transition-duration:0;-webkit-transform:translate3d(0,0,0);position:"+(5>m?"absolute":"fixed"),P.message in z&&(a=P.message,P.message=""),""===P.message&&(P.message=a in z?z[a]:z.en_us),P.touchIcon&&(e=document.querySelector(h?'head link[rel^=apple-touch-icon][sizes="114x114"],head link[rel^=apple-touch-icon][sizes="144x144"],head link[rel^=apple-touch-icon]':'head link[rel^=apple-touch-icon][sizes="57x57"],head link[rel^=apple-touch-icon]'),e&&(e='<span style="background-image:url('+e.href+')" class="addToHomeTouchIcon"></span>')),y.className=(m>=7?"addToHomeIOS7 ":"")+(d?"addToHomeIpad":"addToHomeIphone")+(e?" addToHomeWide":""),y.innerHTML=e+P.message.replace("%device",o).replace("%icon",m>=4.2?'<span class="addToHomeShare"></span>':'<span class="addToHomePlus">+</span>')+(P.arrow?'<span class="addToHomeArrow"'+(m>=7&&d&&e?' style="margin-left:-32px"':"")+"></span>":"")+(P.closeButton?'<span class="addToHomeClose">×</span>':""),document.body.appendChild(y),P.closeButton&&y.addEventListener("click",s,!1),!d&&m>=6&&window.addEventListener("orientationchange",u,!1),setTimeout(i,P.startDelay)}}function i(){var e,n=208;if(d)switch(5>m?(k=t.scrollY,S=t.scrollX):6>m?n=160:m>=7&&(n=143),y.style.top=k+P.bottomOffset+"px",y.style.left=Math.max(S+n-Math.round(y.offsetWidth/2),9)+"px",P.animationIn){case"drop":e="0.6s",y.style.webkitTransform="translate3d(0,"+-(t.scrollY+P.bottomOffset+y.offsetHeight)+"px,0)";break;case"bubble":e="0.6s",y.style.opacity="0",y.style.webkitTransform="translate3d(0,"+(k+50)+"px,0)";break;default:e="1s",y.style.opacity="0"}else switch(k=t.innerHeight+t.scrollY,5>m?(S=Math.round((t.innerWidth-y.offsetWidth)/2)+t.scrollX,y.style.left=S+"px",y.style.top=k-y.offsetHeight-P.bottomOffset+"px"):(y.style.left="50%",y.style.marginLeft=-Math.round(y.offsetWidth/2)-(t.orientation%180&&m>=6&&7>m?40:0)+"px",y.style.bottom=P.bottomOffset+"px"),P.animationIn){case"drop":e="1s",y.style.webkitTransform="translate3d(0,"+-(k+P.bottomOffset)+"px,0)";break;case"bubble":e="0.6s",y.style.webkitTransform="translate3d(0,"+(y.offsetHeight+P.bottomOffset+50)+"px,0)";break;default:e="1s",y.style.opacity="0"}y.offsetHeight,y.style.webkitTransitionDuration=e,y.style.opacity="1",y.style.webkitTransform="translate3d(0,0,0)",y.addEventListener("webkitTransitionEnd",r,!1),T=setTimeout(a,P.lifespan)}function o(t){E&&!y&&(b=t,n())}function a(){if(clearInterval(x),clearTimeout(T),T=null,y){var e=0,n=0,i="1",o="0";switch(P.closeButton&&y.removeEventListener("click",s,!1),!d&&m>=6&&window.removeEventListener("orientationchange",u,!1),5>m&&(e=d?t.scrollY-k:t.scrollY+t.innerHeight-k,n=d?t.scrollX-S:t.scrollX+Math.round((t.innerWidth-y.offsetWidth)/2)-S),y.style.webkitTransitionProperty="-webkit-transform,opacity",P.animationOut){case"drop":d?(o="0.4s",i="0",e+=50):(o="0.6s",e+=y.offsetHeight+P.bottomOffset+50);break;case"bubble":d?(o="0.8s",e-=y.offsetHeight+P.bottomOffset+50):(o="0.4s",i="0",e-=50);break;default:o="0.8s",i="0"}y.addEventListener("webkitTransitionEnd",r,!1),y.style.opacity=i,y.style.webkitTransitionDuration=o,y.style.webkitTransform="translate3d("+n+"px,"+e+"px,0)"}}function s(){t.sessionStorage.setItem("addToHomeSession","1"),g=!0,a()}function r(){return y.removeEventListener("webkitTransitionEnd",r,!1),y.style.webkitTransitionProperty="-webkit-transform",y.style.webkitTransitionDuration="0.2s",T?void(5>m&&T&&(x=setInterval(l,P.iterations))):(y.parentNode.removeChild(y),void(y=null))}function l(){var e=new WebKitCSSMatrix(t.getComputedStyle(y,null).webkitTransform),n=d?t.scrollY-k:t.scrollY+t.innerHeight-k,i=d?t.scrollX-S:t.scrollX+Math.round((t.innerWidth-y.offsetWidth)/2)-S;(n!=e.m42||i!=e.m41)&&(y.style.webkitTransform="translate3d("+i+"px,"+n+"px,0)")}function c(){t.localStorage.removeItem("addToHome"),t.sessionStorage.removeItem("addToHomeSession")}function u(){y.style.marginLeft=-Math.round(y.offsetWidth/2)-(t.orientation%180&&m>=6&&7>m?40:0)+"px"}var d,h,p,f,m,v,g,w,y,b,x,T,C=t.navigator,E="platform"in C&&/iphone|ipod|ipad/gi.test(C.platform),S=0,k=0,A=0,P={autostart:!0,returningVisitor:!1,animationIn:"drop",animationOut:"fade",startDelay:2e3,lifespan:15e3,bottomOffset:14,expire:0,message:"",touchIcon:!1,arrow:!0,hookOnLoad:!0,closeButton:!0,iterations:100},z={en_us:"Install this web app on your %device: tap %icon and then <strong>Add to Home Screen</strong>.",zh_cn:"您可以将此应用安装到您的 %device 上。请按 %icon 然后选择<strong>添加至主屏幕</strong>。",zh_tw:"您可以將此應用程式安裝到您的 %device 上。請按 %icon 然後點選<strong>加入主畫面螢幕</strong>。"};return e(),{show:o,close:a,reset:c}}(window)}),define("ui.alert",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";require("core");var n=window.Zepto,i=n.AMUI,o=function(t,e){this.options=n.extend({},o.DEFAULTS,e),this.$element=n(t),this.$element.addClass("am-fade am-in").on("click",".am-close",n.proxy(this.close,this))};o.DEFAULTS={removeElement:!0},o.prototype.close=function(){function t(){o.off().trigger("closed:alert:amui").remove()}var e=n(this),o=e.hasClass("am-alert")?e:e.parent(".am-alert");o.trigger("close:alert:amui"),o.removeClass("am-in"),i.support.transition&&o.hasClass("am-fade")?o.one(i.support.transition.end,t).emulateTransitionEnd(200):t()},i.alert=o,n.fn.alert=function(t){return this.each(function(){var e=n(this),i=e.data("amui.alert"),a="object"==typeof t&&t;i||e.data("amui.alert",i=new o(this,a||{})),"string"==typeof t&&i[t].call(e)})},n(document).on("click.alert.amui","[data-am-alert]",function(t){n(t.target);n(this).addClass("am-fade am-in"),n(this).alert("close")}),e.exports=o}),define("ui.button",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";function n(t){return this.each(function(){var e=i(this),n=e.data("amui.button"),o="object"==typeof t&&t;n||e.data("amui.button",n=new a(this,o)),"toggle"==t?n.toggle():t&&n.setState(t)})}require("core");var i=window.Zepto,o=i.AMUI,a=function(t,e){this.$element=i(t),this.options=i.extend({},a.DEFAULTS,e),this.isLoading=!1,this.hasSpinner=!1};a.DEFAULTS={loadingText:"loading...",loadingClass:"am-btn-loading",loadingWithSpinner:'<span class="am-icon-refresh am-icon-spin"></span> loading...'},a.prototype.setState=function(t){var e="disabled",n=this.$element,a=n.is("input")?"val":"html",s=n.data();t+="Text",null==s.resetText&&n.data("resetText",n[a]()),o.support.animation&&!this.hasSpinner&&"html"===a&&(this.options.loadingText=this.options.loadingWithSpinner,this.hasSpinner=!0),n[a](null==s[t]?this.options[t]:s[t]),setTimeout(i.proxy(function(){"loadingText"==t?(this.isLoading=!0,n.addClass(e+" "+this.options.loadingClass).attr(e,e)):this.isLoading&&(this.isLoading=!1,n.removeClass(e+" "+this.options.loadingClass).removeAttr(e))},this),0)},a.prototype.toggle=function(){var t=!0,e=this.$element.parent(".am-btn-group");if(e.length){var n=this.$element.find("input");"radio"==n.prop("type")&&(n.prop("checked")&&this.$element.hasClass("am-active")?t=!1:e.find(".am-active").removeClass("am-active")),t&&n.prop("checked",!this.$element.hasClass("am-active")).trigger("change")}t&&this.$element.toggleClass("am-active")},i.fn.button=n,i(document).on("click.button.amui","[data-am-button]",function(t){var e=i(t.target);e.hasClass("am-btn")||(e=e.closest(".am-btn")),n.call(e,"toggle"),t.preventDefault()}),e.exports=a}),define("ui.collapse",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";function n(t){return this.each(function(){var e=i(this),n=e.data("amui.collapse"),s=i.extend({},a.DEFAULTS,o.utils.options(e.attr("data-am-collapse")),"object"==typeof t&&t);!n&&s.toggle&&"open"==t&&(t=!t),n||e.data("amui.collapse",n=new a(this,s)),"string"==typeof t&&n[t]()})}require("core");var i=window.Zepto,o=i.AMUI,a=function(t,e){this.$element=i(t),this.options=i.extend({},a.DEFAULTS,e),this.transitioning=null,this.options.parent&&(this.$parent=i(this.options.parent)),this.options.toggle&&this.toggle()};a.DEFAULTS={toggle:!0},a.prototype.open=function(){if(!this.transitioning&&!this.$element.hasClass("am-in")){var t=i.Event("open:collapse:amui");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.$parent&&this.$parent.find("> .am-panel > .am-in");if(e&&e.length){var a=e.data("amui.collapse");if(a&&a.transitioning)return;n.call(e,"close"),a||e.data("amui.collapse",null)}this.$element.removeClass("am-collapse").addClass("am-collapsing").height(0),this.transitioning=1;var s=function(){this.$element.removeClass("am-collapsing").addClass("am-collapse am-in").height(""),this.transitioning=0,this.$element.trigger("opened:collapse:amui")};return o.support.transition?void this.$element.one(o.support.transition.end,i.proxy(s,this)).emulateTransitionEnd(350).height(this.$element[0].scrollHeight):s.call(this)}}},a.prototype.close=function(){if(!this.transitioning&&this.$element.hasClass("am-in")){var t=i.Event("close:collapse:amui");if(this.$element.trigger(t),!t.isDefaultPrevented()){this.$element.height(this.$element.height()),this.$element[0].offsetHeight,this.$element.addClass("am-collapsing").removeClass("am-collapse").removeClass("am-in"),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.trigger("closed:collapse:amui").removeClass("am-collapsing").addClass("am-collapse")};return o.support.transition?void this.$element.height(0).one(o.support.transition.end,i.proxy(e,this)).emulateTransitionEnd(350):e.call(this)}}},a.prototype.toggle=function(){this[this.$element.hasClass("am-in")?"close":"open"]()},o.collapse=a,i.fn.collapse=n,i(document).on("click.collapse.amui","[data-am-collapse]",function(t){var e,a=i(this),s=o.utils.options(a.attr("data-am-collapse")),r=s.target||t.preventDefault()||(e=a.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,""),l=i(r),c=l.data("amui.collapse"),u=c?"toggle":s,d=s.parent,h=d&&i(d);c&&c.transitioning||(h&&h.find("[data-am-collapse]").not(a).addClass("am-collapsed"),a[l.hasClass("am-in")?"addClass":"removeClass"]("am-collapsed")),n.call(l,u)}),e.exports=a}),define("ui.dimmer",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){require("core");var n=window.Zepto,i=n.AMUI,o=n('<div class="am-dimmer" data-am-dimmer></div>'),a=n(document),s=n("html"),r=function(){this.hasDimmer=n("[data-am-dimmer]").length?!0:!1,this.$element=o,n(document).on("ready",n.proxy(this.init,this))};r.prototype.init=function(){return this.hasDimmer||(o.appendTo(n("body")),this.events(),this.hasDimmer=!0),a.trigger("init:dimmer:amui"),this},r.prototype.open=function(t){return s.addClass("am-dimmer-active"),o.addClass("am-active"),n(t).length&&n(t).show(),a.trigger("open:dimmer:amui"),this},r.prototype.close=function(t){return o.removeClass("am-active"),s.removeClass("am-dimmer-active"),n(t).length&&n(t).hide(),a.trigger("close:dimmer:amui"),this},r.prototype.events=function(){o.on("click.dimmer.amui",function(){})};var l=new r;i.dimmer=l,e.exports=l}),define("ui.dropdown",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require){"use strict";function t(t){t&&3===t.which||n(o).each(function(){var e=n(this).parent(),i={relatedTarget:this};e.hasClass("am-active")&&(e.trigger(t=n.Event("close:dropdown:amui",i)),t.isDefaultPrevented()||e.removeClass("am-active").trigger(t=n.Event("closed:dropdown:amui",i)))})}function e(t){return this.each(function(){var e=n(this),i=e.data("amui.dropdown");i||e.data("amui.dropdown",i=new a(this)),"string"==typeof t&&i[t].call(e)})}require("core");var n=window.Zepto,i=n.AMUI,o="[data-am-dropdown] > .am-dropdown-toggle",a=function(t){n(t).on("click.dropdown.amui",this.toggle)};a.prototype.toggle=function(e){var i=n(this);if(!i.is(".am-disabled, :disabled")){var o=i.parent(),a=o.hasClass("am-active");if(t(),a)i.blur();else{var s={relatedTarget:this};if(o.trigger(e=n.Event("open:dropdown:amui",s)),e.isDefaultPrevented())return;i.trigger("focus"),o.toggleClass("am-active").trigger(e=n.Event("opened:dropdown:amui",s))}return!1}},a.prototype.keydown=function(t){if(/(38|40|27)/.test(t.keyCode)){var e=n(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".am-disabled, :disabled")){var i=e.parent(),a=i.hasClass("am-active");return!a||a&&27==t.keyCode?(27==t.which&&i.find(o).trigger("focus"),e.trigger("click")):void 0}}},i.dropdown=a,n.fn.dropdown=e,n(document).on("click.dropdown.amui",".am-dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.amui",o,a.prototype.toggle).on("keydown.dropdown.amui",o,a.prototype.keydown)}),define("ui.iscroll-lite",[],function(require,t,e){/*! iScroll v5.1.2 ~ (c) 2008-2014 Matteo Spinelli ~ http://cubiq.org/license */
!function(t,n,i){function o(t,e){this.wrapper="string"==typeof t?n.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT)$/},HWCompositing:!0,useTransition:!0,useTransform:!0};for(var i in e)this.options[i]=e[i];this.translateZ=this.options.HWCompositing&&s.hasPerspective?" translateZ(0)":"",this.options.useTransition=s.hasTransition&&this.options.useTransition,this.options.useTransform=s.hasTransform&&this.options.useTransform,this.options.eventPassthrough=this.options.eventPassthrough===!0?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"==this.options.eventPassthrough?!1:this.options.scrollY,this.options.scrollX="horizontal"==this.options.eventPassthrough?!1:this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?s.ease[this.options.bounceEasing]||s.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,this.options.tap===!0&&(this.options.tap="tap"),this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}var a=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},s=function(){function e(t){return s===!1?!1:""===s?t:s+t.charAt(0).toUpperCase()+t.substr(1)}var o={},a=n.createElement("div").style,s=function(){for(var t,e=["t","webkitT","MozT","msT","OT"],n=0,i=e.length;i>n;n++)if(t=e[n]+"ransform",t in a)return e[n].substr(0,e[n].length-1);return!1}();o.getTime=Date.now||function(){return(new Date).getTime()},o.extend=function(t,e){for(var n in e)t[n]=e[n]},o.addEvent=function(t,e,n,i){t.addEventListener(e,n,!!i)},o.removeEvent=function(t,e,n,i){t.removeEventListener(e,n,!!i)},o.prefixPointerEvent=function(e){return t.MSPointerEvent?"MSPointer"+e.charAt(9).toUpperCase()+e.substr(10):e},o.momentum=function(t,e,n,o,a,s){var r,l,c=t-e,u=i.abs(c)/n;return s=void 0===s?6e-4:s,r=t+u*u/(2*s)*(0>c?-1:1),l=u/s,o>r?(r=a?o-a/2.5*(u/8):o,c=i.abs(r-t),l=c/u):r>0&&(r=a?a/2.5*(u/8):0,c=i.abs(t)+r,l=c/u),{destination:i.round(r),duration:l}};var r=e("transform");return o.extend(o,{hasTransform:r!==!1,hasPerspective:e("perspective")in a,hasTouch:"ontouchstart"in t,hasPointer:t.PointerEvent||t.MSPointerEvent,hasTransition:e("transition")in a}),o.isBadAndroid=/Android /.test(t.navigator.appVersion)&&!/Chrome\/\d/.test(t.navigator.appVersion),o.extend(o.style={},{transform:r,transitionTimingFunction:e("transitionTimingFunction"),transitionDuration:e("transitionDuration"),transitionDelay:e("transitionDelay"),transformOrigin:e("transformOrigin")}),o.hasClass=function(t,e){var n=new RegExp("(^|\\s)"+e+"(\\s|$)");return n.test(t.className)},o.addClass=function(t,e){if(!o.hasClass(t,e)){var n=t.className.split(" ");n.push(e),t.className=n.join(" ")}},o.removeClass=function(t,e){if(o.hasClass(t,e)){var n=new RegExp("(^|\\s)"+e+"(\\s|$)","g");t.className=t.className.replace(n," ")}},o.offset=function(t){for(var e=-t.offsetLeft,n=-t.offsetTop;t=t.offsetParent;)e-=t.offsetLeft,n-=t.offsetTop;return{left:e,top:n}},o.preventDefaultException=function(t,e){for(var n in e)if(e[n].test(t[n]))return!0;return!1},o.extend(o.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),o.extend(o.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return i.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){var e=4;return(t-=1)*t*((e+1)*t+e)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){var e=.22,n=.4;return 0===t?0:1==t?1:n*i.pow(2,-10*t)*i.sin(2*(t-e/4)*i.PI/e)+1}}}),o.tap=function(t,e){var i=n.createEvent("Event");i.initEvent(e,!0,!0),i.pageX=t.pageX,i.pageY=t.pageY,t.target.dispatchEvent(i)},o.click=function(t){var e,i=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(i.tagName)||(e=n.createEvent("MouseEvents"),e.initMouseEvent("click",!0,!0,t.view,1,i.screenX,i.screenY,i.clientX,i.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,0,null),e._constructed=!0,i.dispatchEvent(e))},o}();o.prototype={version:"5.1.2",_init:function(){this._initEvents()},destroy:function(){this._initEvents(!0),this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(!(1!=s.eventType[t.type]&&0!==t.button||!this.enabled||this.initiated&&s.eventType[t.type]!==this.initiated)){!this.options.preventDefault||s.isBadAndroid||s.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var e,n=t.touches?t.touches[0]:t;this.initiated=s.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this._transitionTime(),this.startTime=s.getTime(),this.options.useTransition&&this.isInTransition?(this.isInTransition=!1,e=this.getComputedPosition(),this._translate(i.round(e.x),i.round(e.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=n.pageX,this.pointY=n.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&s.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var e,n,o,a,r=t.touches?t.touches[0]:t,l=r.pageX-this.pointX,c=r.pageY-this.pointY,u=s.getTime();if(this.pointX=r.pageX,this.pointY=r.pageY,this.distX+=l,this.distY+=c,o=i.abs(this.distX),a=i.abs(this.distY),!(u-this.endTime>300&&10>o&&10>a)){if(this.directionLocked||this.options.freeScroll||(this.directionLocked=o>a+this.options.directionLockThreshold?"h":a>=o+this.options.directionLockThreshold?"v":"n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);c=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);l=0}l=this.hasHorizontalScroll?l:0,c=this.hasVerticalScroll?c:0,e=this.x+l,n=this.y+c,(e>0||e<this.maxScrollX)&&(e=this.options.bounce?this.x+l/3:e>0?0:this.maxScrollX),(n>0||n<this.maxScrollY)&&(n=this.options.bounce?this.y+c/3:n>0?0:this.maxScrollY),this.directionX=l>0?-1:0>l?1:0,this.directionY=c>0?-1:0>c?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(e,n),u-this.startTime>300&&(this.startTime=u,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&s.eventType[t.type]===this.initiated){this.options.preventDefault&&!s.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();var e,n,o=(t.changedTouches?t.changedTouches[0]:t,s.getTime()-this.startTime),a=i.round(this.x),r=i.round(this.y),l=i.abs(a-this.startX),c=i.abs(r-this.startY),u=0,d="";if(this.isInTransition=0,this.initiated=0,this.endTime=s.getTime(),!this.resetPosition(this.options.bounceTime))return this.scrollTo(a,r),this.moved?this._events.flick&&200>o&&100>l&&100>c?void this._execEvent("flick"):(this.options.momentum&&300>o&&(e=this.hasHorizontalScroll?s.momentum(this.x,this.startX,o,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:a,duration:0},n=this.hasVerticalScroll?s.momentum(this.y,this.startY,o,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:r,duration:0},a=e.destination,r=n.destination,u=i.max(e.duration,n.duration),this.isInTransition=1),a!=this.x||r!=this.y?((a>0||a<this.maxScrollX||r>0||r<this.maxScrollY)&&(d=s.ease.quadratic),void this.scrollTo(a,r,u,d)):void this._execEvent("scrollEnd")):(this.options.tap&&s.tap(t,this.options.tap),this.options.click&&s.click(t),void this._execEvent("scrollCancel"))}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var e=this.x,n=this.y;return t=t||0,!this.hasHorizontalScroll||this.x>0?e=0:this.x<this.maxScrollX&&(e=this.maxScrollX),!this.hasVerticalScroll||this.y>0?n=0:this.y<this.maxScrollY&&(n=this.maxScrollY),e==this.x&&n==this.y?!1:(this.scrollTo(e,n,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=s.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,e){this._events[t]||(this._events[t]=[]),this._events[t].push(e)},off:function(t,e){if(this._events[t]){var n=this._events[t].indexOf(e);n>-1&&this._events[t].splice(n,1)}},_execEvent:function(t){if(this._events[t]){var e=0,n=this._events[t].length;if(n)for(;n>e;e++)this._events[t][e].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,e,n,i){t=this.x+t,e=this.y+e,n=n||0,this.scrollTo(t,e,n,i)},scrollTo:function(t,e,n,i){i=i||s.ease.circular,this.isInTransition=this.options.useTransition&&n>0,!n||this.options.useTransition&&i.style?(this._transitionTimingFunction(i.style),this._transitionTime(n),this._translate(t,e)):this._animate(t,e,n,i.fn)},scrollToElement:function(t,e,n,o,a){if(t=t.nodeType?t:this.scroller.querySelector(t)){var r=s.offset(t);r.left-=this.wrapperOffset.left,r.top-=this.wrapperOffset.top,n===!0&&(n=i.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),o===!0&&(o=i.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),r.left-=n||0,r.top-=o||0,r.left=r.left>0?0:r.left<this.maxScrollX?this.maxScrollX:r.left,r.top=r.top>0?0:r.top<this.maxScrollY?this.maxScrollY:r.top,e=void 0===e||null===e||"auto"===e?i.max(i.abs(this.x-r.left),i.abs(this.y-r.top)):e,this.scrollTo(r.left,r.top,e,a)}},_transitionTime:function(t){t=t||0,this.scrollerStyle[s.style.transitionDuration]=t+"ms",!t&&s.isBadAndroid&&(this.scrollerStyle[s.style.transitionDuration]="0.001s")},_transitionTimingFunction:function(t){this.scrollerStyle[s.style.transitionTimingFunction]=t},_translate:function(t,e){this.options.useTransform?this.scrollerStyle[s.style.transform]="translate("+t+"px,"+e+"px)"+this.translateZ:(t=i.round(t),e=i.round(e),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=e+"px"),this.x=t,this.y=e},_initEvents:function(e){var n=e?s.removeEvent:s.addEvent,i=this.options.bindToWrapper?this.wrapper:t;n(t,"orientationchange",this),n(t,"resize",this),this.options.click&&n(this.wrapper,"click",this,!0),this.options.disableMouse||(n(this.wrapper,"mousedown",this),n(i,"mousemove",this),n(i,"mousecancel",this),n(i,"mouseup",this)),s.hasPointer&&!this.options.disablePointer&&(n(this.wrapper,s.prefixPointerEvent("pointerdown"),this),n(i,s.prefixPointerEvent("pointermove"),this),n(i,s.prefixPointerEvent("pointercancel"),this),n(i,s.prefixPointerEvent("pointerup"),this)),s.hasTouch&&!this.options.disableTouch&&(n(this.wrapper,"touchstart",this),n(i,"touchmove",this),n(i,"touchcancel",this),n(i,"touchend",this)),n(this.scroller,"transitionend",this),n(this.scroller,"webkitTransitionEnd",this),n(this.scroller,"oTransitionEnd",this),n(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var e,n,i=t.getComputedStyle(this.scroller,null);return this.options.useTransform?(i=i[s.style.transform].split(")")[0].split(", "),e=+(i[12]||i[4]),n=+(i[13]||i[5])):(e=+i.left.replace(/[^-\d.]/g,""),n=+i.top.replace(/[^-\d.]/g,"")),{x:e,y:n}},_animate:function(t,e,n,i){function o(){var h,p,f,m=s.getTime();return m>=d?(r.isAnimating=!1,r._translate(t,e),void(r.resetPosition(r.options.bounceTime)||r._execEvent("scrollEnd"))):(m=(m-u)/n,f=i(m),h=(t-l)*f+l,p=(e-c)*f+c,r._translate(h,p),void(r.isAnimating&&a(o)))}var r=this,l=this.x,c=this.y,u=s.getTime(),d=u+n;this.isAnimating=!0,o()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":t._constructed||(t.preventDefault(),t.stopPropagation())}}},o.utils=s,"undefined"!=typeof e&&e.exports?e.exports=o:t.IScroll=o}(window,document,Math)}),define("ui.modal",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","ui.dimmer"],function(require,t,e){function n(t,e){return this.each(function(){var n=o(this),i=n.data("am.modal"),a=o.extend({},c.DEFAULTS,"object"==typeof t&&t);i||n.data("am.modal",i=new c(this,a)),"string"==typeof t?i[t](e):i.toggle(t&&t.relatedElement||void 0)})}require("core");var i=require("ui.dimmer"),o=window.Zepto,a=o.AMUI,s=(o(window),o(document)),r=o("body"),l=a.support.transition,c=function(t,e){this.options=o.extend({},c.DEFAULTS,e||{}),this.$element=o(t),this.isPopup=this.$element.hasClass("am-popup"),this.active=this.transitioning=null,this.events()};c.DEFAULTS={selector:{modal:".am-modal",active:".am-modal-active"},cancelable:!0,onConfirm:function(){},onCancel:function(){}},c.prototype.toggle=function(t){return this.active?this.close():this.open(t)},c.prototype.open=function(t){var e=this.$element,n=this.isPopup;if(!this.transitioning&&!this.active&&this.$element.length){n&&this.$element.show(),this.active=!0,e.trigger(o.Event("open:modal:amui",{relatedElement:t}));{e[0].clientLeft}i.open(),e.show(),!n&&e.redraw().css({marginTop:-e.height()/2+"px"}),e.removeClass("am-modal-out").addClass("am-modal-active"),this.transitioning=1;var a=function(){e.trigger(o.Event("opened:modal:amui",{relatedElement:t})),this.transitioning=0};return l?void e.one(l.end,o.proxy(a,this)):a.call(this)}},c.prototype.close=function(t){if(!this.transitioning&&this.active){var e=this.$element,n=this.isPopup;this.$element.trigger(o.Event("close:modal:amui",{relatedElement:t})),this.transitioning=1;var a=function(){e.trigger("closed:amui:modal"),n&&e.removeClass("am-modal-out"),e.hide(),this.transitioning=0};if(e.removeClass("am-modal-active").addClass("am-modal-out"),!l)return a.call(this);e.one(l.end,o.proxy(a,this)),r.find(c.DEFAULTS.selector.active).length||i.close(),this.active=!1}},c.prototype.events=function(){var t=this,e=this.$element,n=e.find(".am-modal-prompt-input");this.options.cancelable&&(e.on("keyup.modal.amui",o.proxy(function(t){this.active&&27===t.which&&(this.options.onCancel(),this.close())},t)),i.$element.on("click",function(){t.close()})),e.find("[data-am-modal-close]").on("click.modal.amui",function(e){e.preventDefault(),t.close()}),e.find(".am-modal-btn").on("click.modal.amui",function(){t.close()}),e.find("[data-am-modal-confirm]").on("click.modal.amui",function(){t.options.onConfirm(n.val())}),e.find("[data-am-modal-cancel]").on("click.modal.amui",function(){t.options.onCancel(n.val())})},o.fn.modal=n,s.on("click","[data-am-modal]",function(){var t=o(this),e=a.utils.parseOptions(t.attr("data-am-modal")),i=o(e.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("am.modal")?"toggle":e;n.call(i,s,this)}),e.exports=c}),define("ui.offcanvas",["zepto.outerdemension","zepto.extend.data","core","zepto.extend.fx","zepto.extend.selector"],function(require,t,e){function n(t,e){return this.each(function(){var n=o(this),i=n.data("am.offcanvas"),a=o.extend({},l.DEFAULTS,"object"==typeof t&&t);i||(n.data("am.offcanvas",i=new l(this,a)),i.open(e)),"string"==typeof t&&i[t]&&i[t](e)})}require("zepto.outerdemension"),require("zepto.extend.data"),require("core");var i,o=window.Zepto,a=o.AMUI,s=o(window),r=o(document),l=function(t,e){this.$element=o(t),this.options=e,this.events()};l.DEFAULTS={effect:"overlay"},l.prototype.open=function(){var t=this,e=this.$element,n=o.Event("open:offcanvas:amui");if(e.length&&!e.hasClass("am-active")){var l=this.options.effect,c=o("html"),u=e.find(".am-offcanvas-bar").first(),d=u.hasClass("am-offcanvas-bar-flip")?-1:1;u.addClass("am-offcanvas-bar-"+l),i={x:window.scrollX,y:window.scrollY},e.addClass("am-active"),c.css({width:"100%",height:s.height()}).addClass("am-offcanvas-page"),"overlay"!==l&&c.css({"margin-left":u.outerWidth()*d}).width(),c.css("margin-top",-1*i.y),a.utils.debounce(function(){u.addClass("am-offcanvas-bar-active").width()},0)(),r.trigger(n),e.off(".offcanvas.amui").on("click.offcanvas.amui swipeRight.offcanvas.amui swipeLeft.offcanvas.amui",function(e){var n=o(e.target);if(!e.type.match(/swipe/)){if(n.hasClass("am-offcanvas-bar"))return;if(n.parents(".am-offcanvas-bar").first().length)return}e.stopImmediatePropagation(),t.close()}),r.on("keydown.offcanvas.amui",function(e){27===e.keyCode&&t.close()})}},l.prototype.close=function(){var t=o("html"),e=this.$element,n=e.find(".am-offcanvas-bar").first();e.length&&e.hasClass("am-active")&&(e.trigger("close:offcanvas:amui"),a.support.transition?(t.one(a.support.transition.end,function(){t.removeClass("am-offcanvas-page").css({width:"",height:"","margin-top":""}),e.removeClass("am-active"),window.scrollTo(i.x,i.y)}).css("margin-left",""),a.utils.debounce(function(){n.removeClass("am-offcanvas-bar-active")},0)()):(t.removeClass("am-offcanvas-page").attr("style",""),e.removeClass("am-active"),n.removeClass("am-offcanvas-bar-active"),window.scrollTo(i.x,i.y)),e.off(".offcanvas.amui"))},l.prototype.events=function(){return r.on("click.offcanvas.amui",'[data-am-dismiss="offcanvas"]',o.proxy(function(t){t.preventDefault(),this.close()},this)),this},a.offcanvas=l,o.fn.offCanvas=n,r.on("click.offcanvas.amui","[data-am-offcanvas]",function(t){t.preventDefault();var e=o(this),i=a.utils.parseOptions(e.attr("data-am-offcanvas")),s=o(i.target||this.href&&this.href.replace(/.*(?=#[^\s]+$)/,""));option=s.data("am.offcanvas")?"open":i,n.call(s,option,this)}),e.exports=l}),define("ui.popover",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){function n(t){return this.each(function(){var e=i(this),n=e.data("am.popover"),a=i.extend({},o.utils.parseOptions(e.attr("data-am-popover")),"object"==typeof t&&t);n||e.data("am.popover",n=new s(this,a)),"string"==typeof t&&n[t]()})}require("core");var i=window.Zepto,o=i.AMUI,a=i(window),s=(i(document),function(t,e){this.options=i.extend({},s.DEFAULTS,e||{}),this.$element=i(t),this.active=null,this.$popover=this.options.target&&i(this.options.target)||null,this.init(),this.events()});s.DEFAULTS={trigger:"click",content:"",open:!1,target:void 0,tpl:'<div class="am-popover"><div class="am-popover-inner"></div><div class="am-popover-caret"></div></div>'},s.prototype.init=function(){function t(){var t=e.getSize(),i=e.width()||t.width,o=e.height()||t.height,s=e.find(".am-popover-caret"),r=s.width()/2||10,l=o+r,c=n.outerWidth(),u=n.outerHeight(),d=n.offset(),h=n[0].getBoundingClientRect(),p=a.height(),f=a.width(),m=0,v=0,g=0,w=3,y="top";e.css({left:"",top:""}).removeClass("am-popover-left am-popover-right am-popover-top am-popover-bottom"),s.css({left:"",top:""}),l-w<h.top+w?m=d.top-l-w:l<p-h.top-h.height?(y="bottom",m=d.top+u+r+w):(y="middle",m=u/2+d.top-o/2),"top"===y||"bottom"===y?(v=c/2+d.left-i/2,g=v,5>v&&(v=5),v+i>f&&(v=f-i-20),"top"===y&&e.addClass("am-popover-bottom"),"bottom"===y&&e.addClass("am-popover-top"),g-=v,s.css({left:i/2-r+g+"px"})):"middle"===y&&(v=d.left-i-r,e.addClass("am-popover-left"),5>v&&(v=d.left+c+r,e.removeClass("am-popover-left").addClass("am-popover-right")),v+i>f&&(v=f-i-5,e.removeClass("am-popover-left").addClass("am-popover-right")),s.css({top:o/2-r/2+"px"})),e.css({top:m+"px",left:v+"px"})}var e,n=this.$element;this.options.target||(this.$popover=this.getPopover(),this.setContent()),e=this.$popover,e.appendTo(i("body")),t(),i(window).on("resize",o.utils.debounce(t,50)),n.on("open:popover:amui",function(){i(window).on("resize",o.utils.debounce(t,50))}),n.on("close:popover:amui",function(){i(window).off("resize",t)}),this.options.open&&this.open()},s.prototype.toggle=function(){return this[this.active?"close":"open"]()},s.prototype.open=function(){var t=this.$popover;this.$element.trigger("open:popover:amui"),t.show().addClass("am-active"),this.active=!0},s.prototype.close=function(){var t=this.$popover;this.$element.trigger("close:popover:amui"),t.removeClass("am-active").trigger("closed:popover:amui").hide(),this.active=!1},s.prototype.getUID=function(){var t="am-popover-";do t+=parseInt(1e6*Math.random());while(document.getElementById(t));return t},s.prototype.getPopover=function(){var t=this.getUID();return i(this.options.tpl,{id:t})},s.prototype.setContent=function(){this.$popover&&this.$popover.find(".am-popover-inner").empty().html(this.options.content)},s.prototype.events=function(){var t=this.options.trigger,e="popover.amui";"click"===t?this.$element.on("click."+e,i.proxy(this.toggle,this)):"hover"===t&&(this.$element.on("mouseenter."+e,i.proxy(this.open,this)),this.$element.on("mouseleave."+e,i.proxy(this.close,this)))},o.popover=s,i.fn.popover=n,i(function(){i("[data-am-popover]").popover()}),e.exports=s}),define("ui.progress",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){require("core");var n=window.Zepto,i=n.AMUI,o=function(){function t(t,e,n){return e>t?e:t>n?n:t}function e(t){return 100*(-1+t)}function i(t,n,i){var o;return o="translate3d"===s.positionUsing?{transform:"translate3d("+e(t)+"%,0,0)"}:"translate"===s.positionUsing?{transform:"translate("+e(t)+"%,0)"}:{"margin-left":e(t)+"%"},o.transition="all "+n+"ms "+i,o}var o={},a=n("html");o.version="0.1.6";var s=o.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,parent:"body",barSelector:'[role="nprogress-bar"]',spinnerSelector:'[role="nprogress-spinner"]',template:'<div class="nprogress-bar" role="nprogress-bar"><div class="nprogress-peg"></div></div><div class="nprogress-spinner" role="nprogress-spinner"><div class="nprogress-spinner-icon"></div></div>'};o.configure=function(t){var e,n;for(e in t)n=t[e],void 0!==n&&t.hasOwnProperty(e)&&(s[e]=n);return this},o.status=null,o.set=function(e){var n=o.isStarted();e=t(e,s.minimum,1),o.status=1===e?null:e;var a=o.render(!n),c=a.querySelector(s.barSelector),u=s.speed,d=s.easing;return a.offsetWidth,r(function(t){""===s.positionUsing&&(s.positionUsing=o.getPositioningCSS()),l(c,i(e,u,d)),1===e?(l(a,{transition:"none",opacity:1}),a.offsetWidth,setTimeout(function(){l(a,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){o.remove(),t()},u)},u)):setTimeout(t,u)}),this},o.isStarted=function(){return"number"==typeof o.status},o.start=function(){o.status||o.set(0);var t=function(){setTimeout(function(){o.status&&(o.trickle(),t())},s.trickleSpeed)};return s.trickle&&t(),this},o.done=function(t){return t||o.status?o.inc(.3+.5*Math.random()).set(1):this},o.inc=function(e){var n=o.status;return n?("number"!=typeof e&&(e=(1-n)*t(Math.random()*n,.1,.95)),n=t(n+e,0,.994),o.set(n)):o.start()},o.trickle=function(){return o.inc(Math.random()*s.trickleRate)},o.render=function(t){if(o.isRendered())return document.getElementById("nprogress");a.addClass("nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=s.template;var r,c=i.querySelector(s.barSelector),u=t?"-100":e(o.status||0),d=document.querySelector(s.parent);return l(c,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),s.showSpinner||(r=i.querySelector(s.spinnerSelector),r&&n(r).remove()),d!=document.body&&n(d).addClass("nprogress-custom-parent"),d.appendChild(i),i},o.remove=function(){a.removeClass("nprogress-busy"),n(s.parent).removeClass("nprogress-custom-parent");var t=document.getElementById("nprogress");t&&n(t).remove()},o.isRendered=function(){return!!document.getElementById("nprogress")},o.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var r=function(){function t(){var n=e.shift();n&&n(t)}var e=[];return function(n){e.push(n),1==e.length&&t()}}(),l=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var n,i=o.length,a=t.charAt(0).toUpperCase()+t.slice(1);i--;)if(n=o[i]+a,n in e)return n;return t}function n(n){return n=t(n),a[n]||(a[n]=e(n))}function i(t,e,i){e=n(e),t.style[e]=i}var o=["Webkit","O","Moz","ms"],a={};return function(t,e){var n,o,a=arguments;if(2==a.length)for(n in e)o=e[n],void 0!==o&&e.hasOwnProperty(n)&&i(t,n,o);else i(t,a[1],a[2])}}();return o}();i.progress=o,e.exports=o}),define("ui.pureview",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","zepto.pinchzoom"],function(require,t,e){function n(t){return this.each(function(){var e=o(this),n=e.data("am.pureview"),i=o.extend({},a.utils.parseOptions(e.attr("data-am-pureview")),"object"==typeof t&&t);console.log(n),n||e.data("am.pureview",n=new c(this,i)),"string"==typeof t&&n[t]()})}require("core");var i=require("zepto.pinchzoom"),o=window.Zepto,a=o.AMUI,s=a.support.animation,r=a.support.transition,l=o("html"),c=function(t,e){this.$element=o(t),this.options=o.extend({},c.DEFAULTS,e),this.$pureview=o(this.options.tpl,{id:a.utils.generateGUID("am-pureview")}),this.$slides=null,this.transitioning=null,this.init()};c.DEFAULTS={tpl:'<div class="am-pureview"><ul class="am-pureview-slider"></ul><ul class="am-pureview-direction"><li class="am-pureview-prev"><a href=""></a></li><li class="am-pureview-next"><a href=""></a></li></ul><div class="am-pureview-bar am-active"><span class="am-pureview-current"></span> / <span class="am-pureview-total"></span><span class="am-pureview-title"></span></div><div class="am-pureview-actions am-active"><a href="javascript: void(0)" class="am-icon-chevron-left" data-am-close="pureview"></a><a href="javascript: void(0)" class="am-icon-share-square-o" data-am-toggle="share"></a></div></div>',className:{prevSlide:"am-pureview-slide-prev",nextSlide:"am-pureview-slide-next",active:"am-active"},selector:{slider:".am-pureview-slider",close:'[data-am-close="pureview"]',total:".am-pureview-total",current:".am-pureview-current",title:".am-pureview-title",actions:".am-pureview-actions",bar:".am-pureview-bar",pinchZoom:".am-pinch-zoom"}},c.prototype.init=function(){var t=this,e=t.options,n=t.$element,a=n.find("img"),s=t.$pureview,r=s.find(e.selector.slider),l=[],c=a.length;c&&(a.each(function(t,e){var n=o(e).attr("alt")||"",i='<li><div class="am-pinch-zoom"><img src="'+e.src+'" alt="'+n+'"/></div></li>';l.push(i)}),r.html(l.join("\n")),o("body").append(s),s.find(e.selector.total).text(c),this.$title=s.find(e.selector.title),this.$current=s.find(e.selector.current),this.$bar=s.find(e.selector.bar),this.$actions=s.find(e.selector.actions),this.$slides=r.find("li"),r.find(e.selector.pinchZoom).each(function(){o(this).data("amui.pinchzoom",new i(o(this),{}))}),a.on("click",function(e){e.preventDefault(),t.open(a.index(this))}),s.find(".am-pureview-direction a").on("click",function(e){e.preventDefault();var n=o(e.target).parent("li");n.is(".am-pureview-prev")?t.prevSlide():t.nextSlide()}),s.find(e.selector.close).on("click.pureview.amui",function(e){e.preventDefault(),t.close()}),r.on("singleTap",function(){t.toggleToolBar()}).on("swipeLeft",function(){t.nextSlide()}).on("swipeRight",function(){t.prevSlide()}),o(document).on("keydown.pureview.amui",o.proxy(function(t){var e=t.keyCode;37==e?this.prevSlide():39==e?this.nextSlide():27==e&&this.close()},this)))},c.prototype.activate=function(t){var e=this.options,n=this.$slides,i=n.index(t),a=t.find("img").attr("alt"),s=e.className.active;n.find("."+s).is(t)||this.transitioning||(this.transitioning=1,a&&this.$title.text(a),this.$current.text(i+1),n.removeAttr("class"),t.addClass(s),n.eq(i-1).addClass(e.className.prevSlide),n.eq(i+1).addClass(e.className.nextSlide),r?t.one(r.end,o.proxy(function(){this.transitioning=0},this)):this.transitioning=0)},c.prototype.nextSlide=function(){var t=this.$slides,e=t.filter(".am-active"),n=t.index(e),i="am-animation-right-spring";n+1>=t.length?s&&e.addClass(i).on(s.end,function(){e.removeClass(i)}):this.activate(t.eq(n+1))},c.prototype.prevSlide=function(){var t=this.$slides,e=t.filter(".am-active"),n=this.$slides.index(e),i="am-animation-left-spring";0===n?s&&e.addClass(i).on(s.end,function(){e.removeClass(i)}):this.activate(t.eq(n-1))},c.prototype.toggleToolBar=function(){var t=this.options.className.active;this.$bar.toggleClass(t),this.$actions.toggleClass(t)},c.prototype.open=function(t){var e=t||0;this.activate(this.$slides.eq(e)),this.$pureview.addClass("am-active"),l.addClass("am-dimmer-active")},c.prototype.close=function(){this.$pureview.removeClass("am-active"),l.removeClass("am-dimmer-active")},a.pureview=c,o.fn.pureview=n,o(function(){o("[data-am-pureview]").pureview()}),e.exports=c}),define("ui.scrollspy",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";function n(t){return this.each(function(){var e=i(this),n=e.data("am.scrollspy"),o="object"==typeof t&&t;n||e.data("am.scrollspy",n=new a(this,o)),"string"==typeof t&&n[t]()})}require("core");var i=window.Zepto,o=i.AMUI,a=function(t,e){if(o.support.animation){this.options=i.extend({},a.DEFAULTS,e),this.$element=i(t);var n=function(){o.utils.rAF.call(window,i.proxy(this.checkView,this))}.bind(this);this.$window=i(window).on("scroll.scrollspy.amui",n).on("resize.scrollspy.amui orientationchange.scrollspy.amui",o.utils.debounce(n,50)),this.timer=this.inViewState=this.initInView=null,n()}};a.DEFAULTS={animation:"fade",inViewCls:"am-scrollspy-inview",initCls:"am-scrollspy-init",repeat:!0,delay:0,topOffset:0,leftOffset:0},a.prototype.checkView=function(){var t=this.$element,e=this.options,n=o.utils.isInView(t,e),i=e.animation?" am-animation-"+e.animation:"";n&&!this.inViewState&&(this.timer&&clearTimeout(this.timer),this.initInView||(t.addClass(e.initCls),this.offset=t.offset(),this.initInView=!0,t.trigger("init:scrollspy:amui")),this.timer=setTimeout(function(){n&&t.addClass(e.inViewCls+i).width()
},e.delay),this.inViewState=!0,t.trigger("inview:scrollspy:amui")),!n&&this.inViewState&&e.repeat&&(t.removeClass(e.inViewCls+i),this.inViewState=!1,t.trigger("outview:scrollspy:amui"))},a.prototype.check=function(){o.utils.rAF.call(window,i.proxy(this.checkView,this))},o.scrollspy=a,i.fn.scrollspy=n,i(function(){i("[data-am-scrollspy]").each(function(){var t=i(this),e=o.utils.options(t.attr("data-am-scrollspy"));n.call(t,e)})}),e.exports=a}),define("ui.scrollspynav",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";function n(t){return this.each(function(){var e=i(this),n=e.data("am.scrollspynav"),o="object"==typeof t&&t;n||e.data("am.scrollspynav",n=new a(this,o)),"string"==typeof t&&n[t]()})}require("core");var i=window.Zepto,o=i.AMUI,a=function(t,e){this.options=i.extend({},a.DEFAULTS,e),this.$element=i(t),this.anchors=[],this.$links=this.$element.find('a[href^="#"]').each(function(t,e){this.anchors.push(i(e).attr("href"))}.bind(this)),this.$targets=i(this.anchors.join(", "));var n=function(){o.utils.rAF.call(window,i.proxy(this.process,this))}.bind(this);this.$window=i(window).on("scroll.scrollspynav.amui",n).on("resize.scrollspynav.amui orientationchange.scrollspynav.amui",o.utils.debounce(n,50)),n(),this.scrollProcess()};a.DEFAULTS={cls:"am-active",topOffset:0,leftOffset:0,closest:!1,smooth:!0},a.prototype.process=function(){var t=this.$window.scrollTop(),e=this.options,n=[],a=this.$links,s=this.$targets;if(s.each(function(t,i){o.utils.isInView(i,e)&&n.push(i)}),n.length){var r;if(i.each(n,function(e,n){return i(n).offset().top>=t?(r=i(n),!1):void 0}),!r)return;e.closest?(a.closest(e.closest).removeClass(e.cls),a.filter('a[href="#'+r.attr("id")+'"]').closest(e.closest).addClass(e.cls)):a.removeClass(e.cls).filter('a[href="#'+r.attr("id")+'"]').addClass(e.cls)}},a.prototype.scrollProcess=function(){var t=this.$links;this.options.smooth&&require.async(["ui.smooth-scroll"],function(){t.on("click",function(t){t.preventDefault();var e=i(this),n=e.attr("href"),o=e.data("am.smoothScroll");!o&&e.data("am.smoothScroll",o=i(n).offset().top),i(window).smoothScroll(o)})})},o.scrollspynav=a,i.fn.scrollspynav=n,i(function(){i("[data-am-scrollspy-nav]").each(function(){var t=i(this),e=o.utils.options(t.attr("data-am-scrollspy-nav"));n.call(t,e)})}),e.exports=a}),define("ui.share",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector","ui.modal","ui.dimmer","util.qrcode"],function(require,t,e){function n(t,e){var n=arguments.callee;return n.cache[t]||(n.cache[t]=function(){var e=t,i=/^[\w\-]+$/.test(t)?n.get(t):(e="template(string)",t),o=1,a=("try { "+(n.variable?"var "+n.variable+" = this.stash;":"with (this.stash) { ")+"this.ret += '"+i.replace(/<%/g,"").replace(/%>/g,"").replace(/'(?![^\x11\x13]+?\x13)/g,"\\x27").replace(/^\s*|\s*$/g,"").replace(/\n/g,function(){return"';\nthis.line = "+ ++o+"; this.ret += '\\n"}).replace(/\x11=raw(.+?)\x13/g,"' + ($1) + '").replace(/\x11=(.+?)\x13/g,"' + this.escapeHTML($1) + '").replace(/\x11(.+?)\x13/g,"'; $1; this.ret += '")+"'; "+(n.variable?"":"}")+"return this.ret;} catch (e) { throw 'TemplateError: ' + e + ' (on "+e+"' + ' line ' + this.line + ')'; } //@ sourceURL="+e+"\n").replace(/this\.ret \+= '';/g,""),s=new Function(a),r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#x22;","'":"&#x27;"},l=function(t){return(""+t).replace(/[&<>\'\"]/g,function(t){return r[t]})};return function(t){return s.call(n.context={escapeHTML:l,line:1,ret:"",stash:t})}}()),e?n.cache[t](e):n.cache[t]}require("core"),require("ui.modal");{var i=require("util.qrcode"),o=window.Zepto,a=o.AMUI,s=document,r=o(s);a.support.transition}n.cache={},n.get=function(){return l.DEFAULTS.tpl};var l=function(t){this.options=o.extend({},l.DEFAULTS,t||{}),this.$element=null,this.$wechatQr=null,this.pics=null,this.init()};l.DEFAULTS={sns:["weibo","qq","qzone","tqq","wechat","renren"],title:"分享到",cancel:"取消",closeOnShare:!0,id:a.utils.generateGUID("am-share"),desc:"Hi，孤夜观天象，发现一个不错的西西，分享一下下 ;-)",via:"Amaze UI",tpl:'<div class="am-share am-modal-actions" id="<%= id %>"><h3 class="am-share-title"><%= title %></h3><ul class="am-share-sns sm-block-grid-3"><% for(var i = 0; i < sns.length; i++) {%><li><a href="<%= sns[i].shareUrl %>" data-am-share-to="<%= sns[i].id %>" ><i class="am-icon-<%= sns[i].icon %>"></i><span><%= sns[i].title %></span></a></li><% } %></ul><div class="am-share-footer"><button class="am-btn am-btn-default am-btn-block" data-am-share-close><%= cancel %></button></div></div>'},l.SNS={weibo:{title:"新浪微博",url:"http://service.weibo.com/share/share.php",width:620,height:450,icon:"weibo"},qq:{title:"QQ 好友",url:"http://connect.qq.com/widget/shareqq/index.html",icon:"qq"},qzone:{title:"QQ 空间",url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey",icon:"star"},tqq:{title:"腾讯微博",url:"http://v.t.qq.com/share/share.php",icon:"tencent-weibo"},wechat:{title:"微信",url:"[qrcode]",icon:"wechat"},renren:{title:"人人网",url:"http://widget.renren.com/dialog/share",icon:"renren"},douban:{title:"豆瓣",url:"http://www.douban.com/recommend/",icon:"share-alt"},mail:{title:"邮件分享",url:"mailto:",icon:"envelope-o"},sms:{title:"短信分享",url:"sms:",icon:"comment"}},l.prototype.render=function(){var t=this.options,e=[],i=encodeURIComponent(s.title),a=encodeURIComponent(s.location),r="?body="+i+a;return t.sns.forEach(function(n){if(l.SNS[n]){var o,s=l.SNS[n];s.id=n,o="mail"===n?r+"&subject="+t.desc:"sms"===n?r:"?url="+a+"&title="+i,s.shareUrl=s.url+o,e.push(s)}}),n("share",o.extend({},t,{sns:e}))},l.prototype.init=function(){var t=this,e="[data-am-share-to]";r.ready(o.proxy(function(){o("body").append(this.render()),this.$element=o("#"+this.options.id),this.$element.find("[data-am-share-close]").on("click.share.amui",function(){t.close()})},this)),r.on("click.share.amui",e,o.proxy(function(t){var n=o(t.target),i=n.is(e)&&n||n.parent(e),a=i.attr("data-am-share-to");"mail"!==a&&"sms"!==a&&(t.preventDefault(),this.shareTo(a,this.setData(a))),this.close()},this))},l.prototype.open=function(){this.$element&&this.$element.modal("open"),this.$element.trigger("open:share:amui")},l.prototype.close=function(){this.$element&&this.$element.modal("close"),this.$element.trigger("close:share:amui")},l.prototype.toggle=function(){this.$element.is(".am-modal-active")?this.close():this.open()},l.prototype.setData=function(t){if(t){var e={url:s.location,title:s.title},n=this.options.desc,i=this.pics||[],o=/^(qzone|qq|tqq)$/;if(o.test(t)&&!i.length){for(var a=s.images,r=0;r<a.length&&10>r;r++)!!a[r].src&&i.push(encodeURIComponent(a[r].src));this.pics=i}switch(t){case"qzone":e.desc=n,e.site=this.options.via,e.pics=i.join("|");break;case"qq":e.desc=n,e.site=this.options.via,e.pics=i[0];break;case"tqq":e.pic=i.join("|")}return e}},l.prototype.shareTo=function(t,e){var n=l.SNS[t];if(n){if("wechat"===t||"weixin"===t)return this.wechatQr();var i=[];for(var o in e)e[o]&&i.push(o.toString()+"="+("pic"===o||"pics"===o?e[o]:encodeURIComponent(e[o])));window.open(n.url+"?"+i.join("&"))}},l.prototype.wechatQr=function(){if(!this.$wechatQr){var t=a.utils.generateGUID("am-share-wechat"),e=o('<div class="am-modal am-modal-no-btn am-share-wechat-qr"><div class="am-modal-dialog"><div class="am-modal-hd">分享到微信 <a href="" class="am-close am-close-spin" data-am-modal-close>&times;</a> </div><div class="am-modal-bd"><div class="am-share-wx-qr"></div><div class="am-share-wechat-tip">打开微信，点击底部的<em>发现</em>，<br/> 使用<em>扫一扫</em>将网页分享至朋友圈</div></div></div></div>',{id:t}),n=new i({render:"canvas",correctLevel:0,text:s.location.href,width:180,height:180,background:"#fff",foreground:"#000"});e.find(".am-share-wx-qr").html(n),e.appendTo(o("body")),this.$wechatQr=o("#"+t)}this.$wechatQr.modal("open")};var c=new l;a.share=c,r.on("click.share.amui",'[data-am-toggle="share"]',function(t){t.preventDefault(),c.toggle()}),e.exports=c}),define("ui.smooth-scroll",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require){var t=require("core"),e=t.utils.rAF,n=window.Zepto,i=!1;n.fn.smoothScroll=function(t){function n(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}function o(){l.off("touchstart",f),i=!1}var a,s,r,l=this,c=t||0,u=l.scrollTop(),d=u,h=c-u,p=Math.min(750,Math.min(1500,Math.abs(u-c))),f=function(){o()};i||0!=h&&(l.on("touchstart",f),i=!0,e(function m(t){i&&(a||(a=t),s=Math.min(1,Math.max((t-a)/p,0)),r=Math.round(u+h*n(s)),h>0&&r>c&&(r=c),0>h&&c>r&&(r=c),d!=r&&l.scrollTop(r),d=r,r!==c?e(m):o())}))},n(document).on("click.smoothScroll.amui","[data-am-smooth-scroll]",function(t){t.preventDefault();var e=n(this),i=Number(e.attr("data-am-smooth-scroll"));n(window).smoothScroll(isNaN(i)?0:i)})}),define("ui.sticky",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";function n(t){return this.each(function(){var e=i(this),n=e.data("am.sticky"),o="object"==typeof t&&t;n||e.data("am.sticky",n=new a(this,o)),"string"==typeof t&&n[t]()})}require("core");var i=window.Zepto,o=i.AMUI,a=function(t,e){this.options=i.extend({},a.DEFAULTS,e),this.$element=i(t),this.$window=i(window).on("scroll.sticky.amui",o.utils.debounce(i.proxy(this.checkPosition,this),50)).on("click.sticky.amui",o.utils.debounce(i.proxy(this.checkPosition,this),1)),this.original={offsetTop:this.$element.offset().top,width:this.$element.width()},this.sticked=null,this.checkPosition()};a.DEFAULTS={top:0,cls:"am-sticky"},a.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=(i(document).height(),this.$window.scrollTop()),e=this.options,n=e.top,o=this.$element,a=e.animation?" am-animation-"+e.animation:"";this.sticked=t>this.original.offsetTop?"sticky":!1,this.sticked?o.addClass(e.cls+a).css({top:n}):o.removeClass(e.cls+a).css({top:""})}},o.sticky=a,i.fn.sticky=n,i(window).on("load",function(){i("[data-am-sticky]").each(function(){var t=i(this),e=o.utils.options(t.attr("data-am-sticky"));n.call(t,e)})}),e.exports=a}),define("ui.tabs",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";function n(t){return this.each(function(){var e=i(this),n=e.is(".am-tabs")&&e||e.closest(".am-tabs"),o=n.data("amui.tabs");o||n.data("amui.tabs",o=new r(n[0])),"string"==typeof t&&e.is(".am-tabs-nav a")&&o[t](e)})}require("core");var i=window.Zepto,o=i.AMUI,a=o.support.transition,s=o.support.animation,r=function(t){this.$element=i(t),this.$tabNav=this.$element.find(r.DEFAULTS.selector.nav),this.$navs=this.$tabNav.find("a"),this.$content=this.$element.find(r.DEFAULTS.selector.content),this.$tabPanels=this.$content.find(r.DEFAULTS.selector.panel),this.transitioning=null,this.init()};r.DEFAULTS={selector:{nav:".am-tabs-nav",content:".am-tabs-bd",panel:".am-tab-panel"},status:{active:"am-active"}},r.prototype.init=function(){this.$navs.on("click.tabs.amui",i.proxy(function(t){t.preventDefault(),this.open(i(t.target))},this)),this.$content.on("swipeLeft.tabs.amui",i.proxy(function(t){var e=this.getNextNav(i(t.target));e&&this.open(e)},this)),this.$content.on("swipeRight.tabs.amui",i.proxy(function(t){var e=this.getPrevNav(i(t.target));e&&this.open(e)},this))},r.prototype.open=function(t){if(t&&!this.transitioning&&!t.parent("li").hasClass("am-active")){var e=this.$tabNav,n=this.$navs,o=this.$content,a=t.attr("href"),s=/^#.+$/,r=s.test(a)&&this.$content.find(a)||this.$tabPanels.eq(n.index(t)),l=e.find(".am-active a")[0],c=i.Event("open:tabs:amui",{relatedTarget:l});t.trigger(c),c.isDefaultPrevented()||(this.activate(t.closest("li"),e),this.activate(r,o,function(){t.trigger({type:"opened:tabs:amui",relatedTarget:l})}))}},r.prototype.activate=function(t,e,n){function o(){n(),this.transitioning=!1}this.transitioning=!0;var s=e.find("> .am-active"),r=n&&a&&!!s.length;s.removeClass("am-active am-in").blur(),t.addClass("am-active"),r?(t.redraw(),t.addClass("am-in")):t.removeClass("am-fade"),r?s.one(a.end,i.proxy(o,this)):i.proxy(o,this)},r.prototype.getNextNav=function(t){var e=this.$tabPanels.index(t),n="am-animation-right-spring";return e+1>=this.$navs.length?(s&&t.addClass(n).on(s.end,function(){t.removeClass(n)}),null):this.$navs.eq(e+1)},r.prototype.getPrevNav=function(t){var e=this.$tabPanels.index(t),n="am-animation-left-spring";return 0===e?(s&&t.addClass(n).on(s.end,function(){t.removeClass(n)}),null):this.$navs.eq(e-1)},i.fn.tabs=n,i(document).on("ready",function(){i("[data-am-tabs]").tabs()}),e.exports=r}),define("util.cookie",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){"use strict";require("core");var n=window.Zepto,i=n.AMUI,o={get:function(t){var e,n=encodeURIComponent(t)+"=",i=document.cookie.indexOf(n),o=null;return i>-1&&(e=document.cookie.indexOf(";",i),-1==e&&(e=document.cookie.length),o=decodeURIComponent(document.cookie.substring(i+n.length,e))),o},set:function(t,e,n,i,o,a){var s=encodeURIComponent(t)+"="+encodeURIComponent(e);n instanceof Date&&(s+="; expires="+n.toGMTString()),i&&(s+="; path="+i),o&&(s+="; domain="+o),a&&(s+="; secure"),document.cookie=s},unset:function(t,e,n,i){this.set(t,"",new Date(0),e,n,i)}};i.utils.cookie=o,e.exports=o}),define("util.fastclick",[],function(require,t,e){/**
     * FastClick: polyfill to remove click delays on browsers with touch UIs.
     *
     * @version 1.0.2
     * @codingstandard ftlabs-jsv2
     * @copyright The Financial Times Limited [All Rights Reserved]
     * @license MIT License (see LICENSE.txt)
     */
function n(t,e){"use strict";function o(t,e){return function(){return t.apply(e,arguments)}}var a;if(e=e||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=e.touchBoundary||10,this.layer=t,this.tapDelay=e.tapDelay||200,!n.notNeeded(t)){for(var s=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],r=this,l=0,c=s.length;c>l;l++)r[s[l]]=o(r[s[l]],r);i&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(a=t.onclick,t.addEventListener("click",function(t){a(t)},!1),t.onclick=null)}}var i=(window.Zepto,navigator.userAgent.indexOf("Android")>0),o=/iP(ad|hone|od)/.test(navigator.userAgent),a=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),s=o&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);n.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},n.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!i;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},n.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},n.prototype.determineEventType=function(t){"use strict";return i&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},n.prototype.focus=function(t){"use strict";var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},n.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},n.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},n.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!a){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},n.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},n.prototype.onTouchMove=function(t){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},n.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},n.prototype.onTouchEnd=function(t){"use strict";var e,n,r,l,c,u=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,s&&(c=t.changedTouches[0],u=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),r=u.tagName.toLowerCase(),"label"===r){if(e=this.findControl(u)){if(this.focus(u),i)return!1;u=e}}else if(this.needsFocus(u))return t.timeStamp-n>100||o&&window.top!==window&&"input"===r?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,t),o&&"select"===r||(this.targetElement=null,t.preventDefault()),!1);return o&&!a&&(l=u.fastClickScrollParent,l&&l.fastClickLastScrollTop!==l.scrollTop)?!0:(this.needsClick(u)||(t.preventDefault(),this.sendClick(u,t)),!1)},n.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},n.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},n.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},n.prototype.destroy=function(){"use strict";var t=this.layer;i&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},n.notNeeded=function(t){"use strict";var e,n;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!i)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}return"none"===t.style.msTouchAction?!0:!1},n.attach=function(t,e){"use strict";return new n(t,e)},e.exports=n}),define("util.fullscreen",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require,t,e){require("core");var n=window.Zepto,i=n.AMUI,o="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,a=function(){for(var t,e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,o=n.length,a={};o>i;i++)if(t=n[i],t&&t[1]in document){for(i=0,e=t.length;e>i;i++)a[n[0][i]]=t[i];return a}return!1}(),s={request:function(t){var e=a.requestFullscreen;t=t||document.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?t[e]():t[e](o&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){document[a.exitFullscreen]()},toggle:function(t){this.isFullscreen?this.exit():this.request(t)},onchange:function(){},onerror:function(){},raw:a};//!window.fullscreen && (window.fullscreen = fullscreen);
return a?(Object.defineProperties(s,{isFullscreen:{get:function(){return!!document[a.fullscreenElement]}},element:{enumerable:!0,get:function(){return document[a.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!document[a.fullscreenEnabled]}}}),document.addEventListener(a.fullscreenchange,function(t){s.onchange.call(s,t)}),document.addEventListener(a.fullscreenerror,function(t){s.onerror.call(s,t)}),i.fullscreen=s,void(e.exports=s)):void(e.exports=!1)}),define("util.qrcode",[],function(require,t,e){function n(t){return 128>t?[t]:2048>t?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function i(t){for(var e=[],i=0;i<t.length;i++)for(var o=t.charCodeAt(i),a=n(o),s=0;s<a.length;s++)e.push(a[s]);return e}function o(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=i(t),this.make()}function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var i=0;i<t.length-n;i++)this.num[i]=t[i+n]}function s(){this.buffer=new Array,this.length=0}function n(t){return 128>t?[t]:2048>t?(c0=192+(t>>6),c1=128+(63&t),[c0,c1]):(c0=224+(t>>12),c1=128+(t>>6&63),c2=128+(63&t),[c0,c1,c2])}function i(t){for(var e=[],i=0;i<t.length;i++)for(var o=t.charCodeAt(i),a=n(o),s=0;s<a.length;s++)e.push(a[s]);return e}function o(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=i(t),this.make()}function a(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var i=0;i<t.length-n;i++)this.num[i]=t[i+n]}function s(){this.buffer=new Array,this.length=0}var r=Zepto,c=[],u=function(t){"string"==typeof t&&(t={text:t}),this.options=r.extend({},{text:"",render:"",width:256,height:256,correctLevel:3,background:"#ffffff",foreground:"#000000"},t);for(var e=null,n=0,i=c.length;i>n;n++)if(c[n].text==this.options.text&&c[n].text.correctLevel==this.options.correctLevel){e=c[n].obj;break}if(n==i&&(e=new o(this.options.text,this.options.correctLevel),c.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:e})),this.options.render)switch(this.options.render){case"canvas":return this.createCanvas(e);case"table":return this.createTable(e);case"svg":return this.createSVG(e);default:return this.createDefault(e)}return this.createDefault(e)};u.prototype.createDefault=function(t){var e=document.createElement("canvas");return e.getContext?this.createCanvas(t):(SVG_NS="http://www.w3.org/2000/svg",document.createElementNS&&document.createElementNS(SVG_NS,"svg").createSVGRect?this.createSVG(t):this.createTable(t))},u.prototype.createCanvas=function(t){var e=document.createElement("canvas");e.width=this.options.width,e.height=this.options.height;for(var n=e.getContext("2d"),i=(this.options.width/t.getModuleCount()).toPrecision(4),o=this.options.height/t.getModuleCount().toPrecision(4),a=0;a<t.getModuleCount();a++)for(var s=0;s<t.getModuleCount();s++){n.fillStyle=t.modules[a][s]?this.options.foreground:this.options.background;var r=Math.ceil((s+1)*i)-Math.floor(s*i),l=Math.ceil((a+1)*i)-Math.floor(a*i);n.fillRect(Math.round(s*i),Math.round(a*o),r,l)}return e},u.prototype.createTable=function(t){var e=[];e.push('<table style="border:0px; margin:0px; padding:0px; border-collapse:collapse; background-color: '+this.options.background+';">');var n=-1,i=-1,o=-1,a=-1;n=o=Math.floor(this.options.width/t.getModuleCount()),i=a=Math.floor(this.options.height/t.getModuleCount()),0>=o&&(n=t.getModuleCount()<80?2:1),0>=a&&(i=t.getModuleCount()<80?2:1),foreTd='<td style="border:0px; margin:0px; padding:0px; width:'+n+"px; background-color: "+this.options.foreground+'"></td>',backTd='<td style="border:0px; margin:0px; padding:0px; width:'+n+"px; background-color: "+this.options.background+'"></td>',l=t.getModuleCount();for(var s=0;l>s;s++){e.push('<tr style="border:0px; margin:0px; padding:0px; height: '+i+'px">');for(var r=0;l>r;r++)e.push(t.modules[s][r]?foreTd:backTd);e.push("</tr>")}e.push("</table>");var c=document.createElement("span");return c.innerHTML=e.join(""),c.firstChild},u.prototype.createSVG=function(t){for(var e,n,i,o,a=t.getModuleCount(),s=this.options.height/this.options.width,l='<svg xmlns="http://www.w3.org/2000/svg" width="'+this.options.width+'px" height="'+this.options.height+'px" viewbox="0 0 '+10*a+" "+10*a*s+'">',c="<path ",u=' style="stroke-width:0.5;stroke:'+this.options.foreground+";fill:"+this.options.foreground+';"></path>',d=' style="stroke-width:0.5;stroke:'+this.options.background+";fill:"+this.options.background+';"></path>',h=0;a>h;h++)for(var p=0;a>p;p++)e=10*p,i=10*h*s,n=10*(p+1),o=10*(h+1)*s,l+=c+'d="M '+e+","+i+" L "+n+","+i+" L "+n+","+o+" L "+e+","+o+' Z"',l+=t.modules[h][p]?u:d;return l+="</svg>",r(l)[0]},e.exports=u,o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;7>=n;n++)if(!(-1>=t+n||this.moduleCount<=t+n))for(var i=-1;7>=i;i++)-1>=e+i||this.moduleCount<=e+i||(this.modules[t+n][e+i]=n>=0&&6>=n&&(0==i||6==i)||i>=0&&6>=i&&(0==n||6==n)||n>=2&&4>=n&&i>=2&&4>=i?!0:!1)},createQrcode:function(){for(var t=0,e=0,n=null,i=0;8>i;i++){this.makeImpl(i);var o=p.getLostPoint(this);(0==i||t>o)&&(t=o,e=i,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=p.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var i=t[e],o=t[n];if(null==this.modules[i][o])for(var a=-2;2>=a;a++)for(var s=-2;2>=s;s++)this.modules[i+a][o+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s?!0:!1}},setupTypeNumber:function(t){for(var e=p.getBCHTypeNumber(this.typeNumber),n=0;18>n;n++){var i=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=i,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=i}},setupTypeInfo:function(t,e){for(var n=d[this.errorCorrectLevel]<<3|e,i=p.getBCHTypeInfo(n),o=0;15>o;o++){var a=!t&&1==(i>>o&1);6>o?this.modules[o][8]=a:8>o?this.modules[o+1][8]=a:this.modules[this.moduleCount-15+o][8]=a;var a=!t&&1==(i>>o&1);8>o?this.modules[8][this.moduleCount-o-1]=a:9>o?this.modules[8][15-o-1+1]=a:this.modules[8][15-o-1]=a}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new s,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,i=this.utf8bytes.length;i>n;n++)t.put(this.utf8bytes[n],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,i=0,o=this.rsBlock.length/3,s=new Array,r=0;o>r;r++)for(var l=this.rsBlock[3*r+0],c=this.rsBlock[3*r+1],u=this.rsBlock[3*r+2],d=0;l>d;d++)s.push([u,c]);for(var h=new Array(s.length),f=new Array(s.length),m=0;m<s.length;m++){var v=s[m][0],g=s[m][1]-v;n=Math.max(n,v),i=Math.max(i,g),h[m]=new Array(v);for(var r=0;r<h[m].length;r++)h[m][r]=255&t.buffer[r+e];e+=v;var w=p.getErrorCorrectPolynomial(g),y=new a(h[m],w.getLength()-1),b=y.mod(w);f[m]=new Array(w.getLength()-1);for(var r=0;r<f[m].length;r++){var x=r+b.getLength()-f[m].length;f[m][r]=x>=0?b.get(x):0}}for(var T=new Array(this.totalDataCount),C=0,r=0;n>r;r++)for(var m=0;m<s.length;m++)r<h[m].length&&(T[C++]=h[m][r]);for(var r=0;i>r;r++)for(var m=0;m<s.length;m++)r<f[m].length&&(T[C++]=f[m][r]);return T},mapData:function(t,e){for(var n=-1,i=this.moduleCount-1,o=7,a=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var r=0;2>r;r++)if(null==this.modules[i][s-r]){var l=!1;a<t.length&&(l=1==(t[a]>>>o&1));var c=p.getMask(e,i,s-r);c&&(l=!l),this.modules[i][s-r]=l,o--,-1==o&&(a++,o=7)}if(i+=n,0>i||this.moduleCount<=i){i-=n,n=-n;break}}}},o.PAD0=236,o.PAD1=17;for(var d=[1,0,3,2],h={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},p={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;p.getBCHDigit(e)-p.getBCHDigit(p.G15)>=0;)e^=p.G15<<p.getBCHDigit(e)-p.getBCHDigit(p.G15);return(t<<10|e)^p.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;p.getBCHDigit(e)-p.getBCHDigit(p.G18)>=0;)e^=p.G18<<p.getBCHDigit(e)-p.getBCHDigit(p.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return p.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case h.PATTERN000:return(e+n)%2==0;case h.PATTERN001:return e%2==0;case h.PATTERN010:return n%3==0;case h.PATTERN011:return(e+n)%3==0;case h.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case h.PATTERN101:return e*n%2+e*n%3==0;case h.PATTERN110:return(e*n%2+e*n%3)%2==0;case h.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),n=0;t>n;n++)e=e.multiply(new a([1,f.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,i=0,o=0;e>o;o++)for(var a=0,s=t.modules[o][0],r=0;e>r;r++){var l=t.modules[o][r];if(e-6>r&&l&&!t.modules[o][r+1]&&t.modules[o][r+2]&&t.modules[o][r+3]&&t.modules[o][r+4]&&!t.modules[o][r+5]&&t.modules[o][r+6]&&(e-10>r?t.modules[o][r+7]&&t.modules[o][r+8]&&t.modules[o][r+9]&&t.modules[o][r+10]&&(n+=40):r>3&&t.modules[o][r-1]&&t.modules[o][r-2]&&t.modules[o][r-3]&&t.modules[o][r-4]&&(n+=40)),e-1>o&&e-1>r){var c=0;l&&c++,t.modules[o+1][r]&&c++,t.modules[o][r+1]&&c++,t.modules[o+1][r+1]&&c++,(0==c||4==c)&&(n+=3)}s^l?a++:(s=l,a>=5&&(n+=3+a-5),a=1),l&&i++}for(var r=0;e>r;r++)for(var a=0,s=t.modules[0][r],o=0;e>o;o++){var l=t.modules[o][r];e-6>o&&l&&!t.modules[o+1][r]&&t.modules[o+2][r]&&t.modules[o+3][r]&&t.modules[o+4][r]&&!t.modules[o+5][r]&&t.modules[o+6][r]&&(e-10>o?t.modules[o+7][r]&&t.modules[o+8][r]&&t.modules[o+9][r]&&t.modules[o+10][r]&&(n+=40):o>3&&t.modules[o-1][r]&&t.modules[o-2][r]&&t.modules[o-3][r]&&t.modules[o-4][r]&&(n+=40)),s^l?a++:(s=l,a>=5&&(n+=3+a-5),a=1)}var u=Math.abs(100*i/e/e-50)/5;return n+=10*u}},f={glog:function(t){if(1>t)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},m=0;8>m;m++)f.EXP_TABLE[m]=1<<m;for(var m=8;256>m;m++)f.EXP_TABLE[m]=f.EXP_TABLE[m-4]^f.EXP_TABLE[m-5]^f.EXP_TABLE[m-6]^f.EXP_TABLE[m-8];for(var m=0;255>m;m++)f.LOG_TABLE[f.EXP_TABLE[m]]=m;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)e[n+i]^=f.gexp(f.glog(this.get(n))+f.glog(t.get(i)));return new a(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(0>e-n)return this;for(var i=new Array(e),o=0;e>o;o++)i[o]=this.get(o);for(;i.length>=n;){for(var s=f.glog(i[0])-f.glog(t.get(0)),o=0;o<t.getLength();o++)i[o]^=f.gexp(f.glog(t.get(o))+s);for(;0==i[0];)i.shift()}return new a(i,0)}},RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.prototype.getRightType=function(){for(var t=1;41>t;t++){var e=RS_BLOCK_TABLE[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,i=0,o=0;n>o;o++){var a=e[3*o+0],s=e[3*o+2];i+=s*a}var r=t>9?2:1;if(this.utf8bytes.length+r<i||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=i;break}}},s.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;e>n;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}},o.prototype={constructor:o,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;7>=n;n++)if(!(-1>=t+n||this.moduleCount<=t+n))for(var i=-1;7>=i;i++)-1>=e+i||this.moduleCount<=e+i||(this.modules[t+n][e+i]=n>=0&&6>=n&&(0==i||6==i)||i>=0&&6>=i&&(0==n||6==n)||n>=2&&4>=n&&i>=2&&4>=i?!0:!1)},createQrcode:function(){for(var t=0,e=0,n=null,i=0;8>i;i++){this.makeImpl(i);var o=p.getLostPoint(this);(0==i||t>o)&&(t=o,e=i,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=p.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var i=t[e],o=t[n];if(null==this.modules[i][o])for(var a=-2;2>=a;a++)for(var s=-2;2>=s;s++)this.modules[i+a][o+s]=-2==a||2==a||-2==s||2==s||0==a&&0==s?!0:!1}},setupTypeNumber:function(t){for(var e=p.getBCHTypeNumber(this.typeNumber),n=0;18>n;n++){var i=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=i,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=i}},setupTypeInfo:function(t,e){for(var n=d[this.errorCorrectLevel]<<3|e,i=p.getBCHTypeInfo(n),o=0;15>o;o++){var a=!t&&1==(i>>o&1);6>o?this.modules[o][8]=a:8>o?this.modules[o+1][8]=a:this.modules[this.moduleCount-15+o][8]=a;var a=!t&&1==(i>>o&1);8>o?this.modules[8][this.moduleCount-o-1]=a:9>o?this.modules[8][15-o-1+1]=a:this.modules[8][15-o-1]=a}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new s,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,i=this.utf8bytes.length;i>n;n++)t.put(this.utf8bytes[n],8);for(t.length+4<=8*this.totalDataCount&&t.put(0,4);t.length%8!=0;)t.putBit(!1);for(;;){if(t.length>=8*this.totalDataCount)break;if(t.put(o.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(o.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,i=0,o=this.rsBlock.length/3,s=new Array,r=0;o>r;r++)for(var l=this.rsBlock[3*r+0],c=this.rsBlock[3*r+1],u=this.rsBlock[3*r+2],d=0;l>d;d++)s.push([u,c]);for(var h=new Array(s.length),f=new Array(s.length),m=0;m<s.length;m++){var v=s[m][0],g=s[m][1]-v;n=Math.max(n,v),i=Math.max(i,g),h[m]=new Array(v);for(var r=0;r<h[m].length;r++)h[m][r]=255&t.buffer[r+e];e+=v;var w=p.getErrorCorrectPolynomial(g),y=new a(h[m],w.getLength()-1),b=y.mod(w);f[m]=new Array(w.getLength()-1);for(var r=0;r<f[m].length;r++){var x=r+b.getLength()-f[m].length;f[m][r]=x>=0?b.get(x):0}}for(var T=new Array(this.totalDataCount),C=0,r=0;n>r;r++)for(var m=0;m<s.length;m++)r<h[m].length&&(T[C++]=h[m][r]);for(var r=0;i>r;r++)for(var m=0;m<s.length;m++)r<f[m].length&&(T[C++]=f[m][r]);return T},mapData:function(t,e){for(var n=-1,i=this.moduleCount-1,o=7,a=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var r=0;2>r;r++)if(null==this.modules[i][s-r]){var l=!1;a<t.length&&(l=1==(t[a]>>>o&1));var c=p.getMask(e,i,s-r);c&&(l=!l),this.modules[i][s-r]=l,o--,-1==o&&(a++,o=7)}if(i+=n,0>i||this.moduleCount<=i){i-=n,n=-n;break}}}},o.PAD0=236,o.PAD1=17;for(var d=[1,0,3,2],h={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},p={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;p.getBCHDigit(e)-p.getBCHDigit(p.G15)>=0;)e^=p.G15<<p.getBCHDigit(e)-p.getBCHDigit(p.G15);return(t<<10|e)^p.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;p.getBCHDigit(e)-p.getBCHDigit(p.G18)>=0;)e^=p.G18<<p.getBCHDigit(e)-p.getBCHDigit(p.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return p.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case h.PATTERN000:return(e+n)%2==0;case h.PATTERN001:return e%2==0;case h.PATTERN010:return n%3==0;case h.PATTERN011:return(e+n)%3==0;case h.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case h.PATTERN101:return e*n%2+e*n%3==0;case h.PATTERN110:return(e*n%2+e*n%3)%2==0;case h.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new a([1],0),n=0;t>n;n++)e=e.multiply(new a([1,f.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,i=0,o=0;e>o;o++)for(var a=0,s=t.modules[o][0],r=0;e>r;r++){var l=t.modules[o][r];if(e-6>r&&l&&!t.modules[o][r+1]&&t.modules[o][r+2]&&t.modules[o][r+3]&&t.modules[o][r+4]&&!t.modules[o][r+5]&&t.modules[o][r+6]&&(e-10>r?t.modules[o][r+7]&&t.modules[o][r+8]&&t.modules[o][r+9]&&t.modules[o][r+10]&&(n+=40):r>3&&t.modules[o][r-1]&&t.modules[o][r-2]&&t.modules[o][r-3]&&t.modules[o][r-4]&&(n+=40)),e-1>o&&e-1>r){var c=0;l&&c++,t.modules[o+1][r]&&c++,t.modules[o][r+1]&&c++,t.modules[o+1][r+1]&&c++,(0==c||4==c)&&(n+=3)}s^l?a++:(s=l,a>=5&&(n+=3+a-5),a=1),l&&i++}for(var r=0;e>r;r++)for(var a=0,s=t.modules[0][r],o=0;e>o;o++){var l=t.modules[o][r];e-6>o&&l&&!t.modules[o+1][r]&&t.modules[o+2][r]&&t.modules[o+3][r]&&t.modules[o+4][r]&&!t.modules[o+5][r]&&t.modules[o+6][r]&&(e-10>o?t.modules[o+7][r]&&t.modules[o+8][r]&&t.modules[o+9][r]&&t.modules[o+10][r]&&(n+=40):o>3&&t.modules[o-1][r]&&t.modules[o-2][r]&&t.modules[o-3][r]&&t.modules[o-4][r]&&(n+=40)),s^l?a++:(s=l,a>=5&&(n+=3+a-5),a=1)}var u=Math.abs(100*i/e/e-50)/5;return n+=10*u}},f={glog:function(t){if(1>t)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},m=0;8>m;m++)f.EXP_TABLE[m]=1<<m;for(var m=8;256>m;m++)f.EXP_TABLE[m]=f.EXP_TABLE[m-4]^f.EXP_TABLE[m-5]^f.EXP_TABLE[m-6]^f.EXP_TABLE[m-8];for(var m=0;255>m;m++)f.LOG_TABLE[f.EXP_TABLE[m]]=m;a.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)e[n+i]^=f.gexp(f.glog(this.get(n))+f.glog(t.get(i)));return new a(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(0>e-n)return this;for(var i=new Array(e),o=0;e>o;o++)i[o]=this.get(o);for(;i.length>=n;){for(var s=f.glog(i[0])-f.glog(t.get(0)),o=0;o<t.getLength();o++)i[o]^=f.gexp(f.glog(t.get(o))+s);for(;0==i[0];)i.shift()}return new a(i,0)}},RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.prototype.getRightType=function(){for(var t=1;41>t;t++){var e=RS_BLOCK_TABLE[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,i=0,o=0;n>o;o++){var a=e[3*o+0],s=e[3*o+2];i+=s*a}var r=t>9?2:1;if(this.utf8bytes.length+r<i||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=i;break}}},s.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;e>n;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}}}),define("zepto.extend.data",[],function(){function t(t,n){var l=t[r],c=l&&o[l];if(void 0===n)return c||e(t);if(c){if(n in c)return c[n];var u=s(n);if(u in c)return c[u]}return a.call(i(t),n)}function e(t,e,a){var l=t[r]||(t[r]=++i.uuid),c=o[l]||(o[l]=n(t));return void 0!==e&&(c[s(e)]=a),c}function n(t){var e={};return i.each(t.attributes||l,function(t,n){0==n.name.indexOf("data-")&&(e[s(n.name.replace("data-",""))]=i.zepto.deserializeValue(n.value))}),e}var i=window.Zepto,o={},a=i.fn.data,s=i.camelCase,r=i.expando="Zepto"+ +new Date,l=[];i.fn.data=function(n,o){return void 0===o?i.isPlainObject(n)?this.each(function(t,o){i.each(n,function(t,n){e(o,t,n)})}):0 in this?t(this[0],n):void 0:this.each(function(){e(this,n,o)})},i.fn.removeData=function(t){return"string"==typeof t&&(t=t.split(/\s+/)),this.each(function(){var e=this[r],n=e&&o[e];n&&i.each(t||n,function(e){delete n[t?s(this):e]})})},["remove","empty"].forEach(function(t){var e=i.fn[t];i.fn[t]=function(){var n=this.find("*");return"remove"===t&&(n=n.add(this)),n.removeData(),e.call(this)}})}),define("zepto.extend.fx",[],function(){function t(t){return t.replace(/([a-z])([A-Z])/,"$1-$2").toLowerCase()}function e(t){return n?n+t:t.toLowerCase()}var n,i,o,a,s,r,l,c,u,d,h=window.Zepto,p="",f={Webkit:"webkit",Moz:"",O:"o"},m=window.document,v=m.createElement("div"),g=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,w={};h.each(f,function(t,e){return void 0!==v.style[t+"TransitionProperty"]?(p="-"+t.toLowerCase()+"-",n=e,!1):void 0}),i=p+"transform",w[o=p+"transition-property"]=w[a=p+"transition-duration"]=w[r=p+"transition-delay"]=w[s=p+"transition-timing-function"]=w[l=p+"animation-name"]=w[c=p+"animation-duration"]=w[d=p+"animation-delay"]=w[u=p+"animation-timing-function"]="",h.fx={off:void 0===n&&void 0===v.style.transitionProperty,speeds:{_default:400,fast:200,slow:600},cssPrefix:p,transitionEnd:e("TransitionEnd"),animationEnd:e("AnimationEnd")},h.fn.animate=function(t,e,n,i,o){return h.isFunction(e)&&(i=e,n=void 0,e=void 0),h.isFunction(n)&&(i=n,n=void 0),h.isPlainObject(e)&&(n=e.easing,i=e.complete,o=e.delay,e=e.duration),e&&(e=("number"==typeof e?e:h.fx.speeds[e]||h.fx.speeds._default)/1e3),o&&(o=parseFloat(o)/1e3),this.anim(t,e,n,i,o)},h.fn.anim=function(e,n,p,f,m){var v,y,b,x={},T="",C=this,E=h.fx.transitionEnd,S=!1;if(void 0===n&&(n=h.fx.speeds._default/1e3),void 0===m&&(m=0),h.fx.off&&(n=0),"string"==typeof e)x[l]=e,x[c]=n+"s",x[d]=m+"s",x[u]=p||"linear",E=h.fx.animationEnd;else{y=[];for(v in e)g.test(v)?T+=v+"("+e[v]+") ":(x[v]=e[v],y.push(t(v)));T&&(x[i]=T,y.push(i)),n>0&&"object"==typeof e&&(x[o]=y.join(", "),x[a]=n+"s",x[r]=m+"s",x[s]=p||"linear")}return b=function(t){if("undefined"!=typeof t){if(t.target!==t.currentTarget)return;h(t.target).unbind(E,b)}else h(this).unbind(E,b);S=!0,h(this).css(w),f&&f.call(this)},n>0&&(this.bind(E,b),setTimeout(function(){S||b.call(C)},1e3*n+25)),this.size()&&this.get(0).clientLeft,this.css(x),0>=n&&setTimeout(function(){C.each(function(){b.call(this)})},0),this},v=null}),define("zepto.extend.selector",[],function(){function t(t){return t=n(t),!(!t.width()&&!t.height())&&"none"!==t.css("display")}function e(t,e){t=t.replace(/=#\]/g,'="#"]');var n,i,o=r.exec(t);if(o&&o[2]in s&&(n=s[o[2]],i=o[3],t=o[1],i)){var a=Number(i);i=isNaN(a)?i.replace(/^["']|["']$/g,""):a}return e(t,n,i)}var n=window.Zepto,i=n.zepto,o=i.qsa,a=i.matches,s=n.expr[":"]={visible:function(){return t(this)?this:void 0},hidden:function(){return t(this)?void 0:this},selected:function(){return this.selected?this:void 0},checked:function(){return this.checked?this:void 0},parent:function(){return this.parentNode},first:function(t){return 0===t?this:void 0},last:function(t,e){return t===e.length-1?this:void 0},eq:function(t,e,n){return t===n?this:void 0},contains:function(t,e,i){return n(this).text().indexOf(i)>-1?this:void 0},has:function(t,e,n){return i.qsa(this,n).length?this:void 0}},r=new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),l=/^\s*>/,c="Zepto"+ +new Date;i.qsa=function(t,a){return e(a,function(e,s,r){try{var u;!e&&s?e="*":l.test(e)&&(u=n(t).addClass(c),e="."+c+" "+e);var d=o(t,e)}catch(h){throw console.error("error performing selector: %o",a),h}finally{u&&u.removeClass(c)}return s?i.uniq(n.map(d,function(t,e){return s.call(t,e,d,r)})):d})},i.matches=function(t,n){return e(n,function(e,n,i){return!(e&&!a(t,e)||n&&n.call(t,null,i)!==t)})}}),define("zepto.extend.touch",[],function(){function t(t,e,n,i){return Math.abs(t-e)>=Math.abs(n-i)?t-e>0?"Left":"Right":n-i>0?"Up":"Down"
}function e(){c=null,h.last&&(h.el.trigger("longTap"),h={})}function n(){c&&clearTimeout(c),c=null}function i(){s&&clearTimeout(s),r&&clearTimeout(r),l&&clearTimeout(l),c&&clearTimeout(c),s=r=l=c=null,h={}}function o(t){return("touch"==t.pointerType||t.pointerType==t.MSPOINTER_TYPE_TOUCH)&&t.isPrimary}function a(t,e){return t.type=="pointer"+e||t.type.toLowerCase()=="mspointer"+e}var s,r,l,c,u,d=window.Zepto,h={},p=750;d(document).ready(function(){var f,m,v,g,w=0,y=0;"MSGesture"in window&&(u=new MSGesture,u.target=document.body),d(document).bind("MSGestureEnd",function(t){var e=t.velocityX>1?"Right":t.velocityX<-1?"Left":t.velocityY>1?"Down":t.velocityY<-1?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown pointerdown",function(t){(!(g=a(t,"down"))||o(t))&&(v=g?t:t.touches[0],t.touches&&1===t.touches.length&&h.x2&&(h.x2=void 0,h.y2=void 0),f=Date.now(),m=f-(h.last||f),h.el=d("tagName"in v.target?v.target:v.target.parentNode),s&&clearTimeout(s),h.x1=v.pageX,h.y1=v.pageY,m>0&&250>=m&&(h.isDoubleTap=!0),h.last=f,c=setTimeout(e,p),u&&g&&u.addPointer(t.pointerId))}).on("touchmove MSPointerMove pointermove",function(t){(!(g=a(t,"move"))||o(t))&&(v=g?t:t.touches[0],n(),h.x2=v.pageX,h.y2=v.pageY,w+=Math.abs(h.x1-h.x2),y+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp pointerup",function(e){(!(g=a(e,"up"))||o(e))&&(n(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?l=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+t(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(30>w&&30>y?r=setTimeout(function(){var t=d.Event("tap");t.cancelTouch=i,h.el.trigger(t),h.isDoubleTap?(h.el&&h.el.trigger("doubleTap"),h={}):s=setTimeout(function(){s=null,h.el&&h.el.trigger("singleTap"),h={}},250)},0):h={}),w=y=0)}).on("touchcancel MSPointerCancel pointercancel",i),d(window).on("scroll",i)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){d.fn[t]=function(e){return this.on(t,e)}})}),define("zepto.flexslider",["core","zepto.extend.fx","zepto.extend.data","zepto.extend.selector"],function(require){var t=window.Zepto;require("core"),require("zepto.extend.data"),t.data=function(e,n,i){return t(e).data(n,i)},["Left","Top"].forEach(function(e,n){function i(t){return t&&"object"==typeof t&&"setInterval"in t}function o(t){return i(t)?t:9===t.nodeType?t.defaultView||t.parentWindow:!1}var a="scroll"+e;t.fn[a]=function(e){var i,s;return void 0===e?(i=this[0])?(s=o(i),s?"pageXOffset"in s?s[n?"pageYOffset":"pageXOffset"]:s.document.documentElement[a]||s.document.body[a]:i[a]):null:void this.each(function(){if(s=o(this)){var i=n?t(s).scrollLeft():e,r=n?e:t(s).scrollTop();s.scrollTo(i,r)}else this[a]=e})}}),["width","height"].forEach(function(e){var n=e.replace(/./,function(t){return t[0].toUpperCase()});t.fn["outer"+n]=function(t){var n=this;if(n){var i=n[e](),o={width:["left","right"],height:["top","bottom"]};return o[e].forEach(function(e){t&&(i+=parseInt(n.css("margin-"+e),10))}),i}return null}}),/*
     * Zepto FlexSlider v2.3
     * @desc Porting from jQuery FlexSlider v2.3, Contributing Author: Tyler Smith
     * @license Copyright 2012 WooThemes GPLv2
     */
t.flexslider=function(e,n){var i=t(e);i.vars=t.extend({},t.flexslider.defaults,n);var o,a=i.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&i.vars.touch,l="click touchend MSPointerUp keyup",c="",u="vertical"===i.vars.direction,d=i.vars.reverse,h=i.vars.itemWidth>0,p="fade"===i.vars.animation,f=""!==i.vars.asNavFor,m={},v=!0;t.data(e,"flexslider",i),m={init:function(){i.animating=!1,i.currentSlide=parseInt(i.vars.startAt?i.vars.startAt:0,10),isNaN(i.currentSlide)&&(i.currentSlide=0),i.animatingTo=i.currentSlide,i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=i.vars.selector.substr(0,i.vars.selector.search(" ")),i.slides=t(i.vars.selector,i),i.container=t(i.containerSelector,i),i.count=i.slides.length,i.syncExists=t(i.vars.sync).length>0,"slide"===i.vars.animation&&(i.vars.animation="swing"),i.prop=u?"top":"marginLeft",i.args={},i.manualPause=!1,i.stopped=!1,i.started=!1,i.startTimeout=null,i.transitions=!i.vars.video&&!p&&i.vars.useCSS&&function(){var t=document.createElement("div"),e=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in e)if(void 0!==t.style[e[n]])return i.pfx=e[n].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",!0;return!1}(),i.ensureAnimationEnd="",""!==i.vars.controlsContainer&&(i.controlsContainer=t(i.vars.controlsContainer).length>0&&t(i.vars.controlsContainer)),""!==i.vars.manualControls&&(i.manualControls=t(i.vars.manualControls).length>0&&t(i.vars.manualControls)),i.vars.randomize&&(i.slides.sort(function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),i.setup("init"),i.vars.controlNav&&m.controlNav.setup(),i.vars.directionNav&&m.directionNav.setup(),i.vars.keyboard&&(1===t(i.containerSelector).length||i.vars.multipleKeyboard)&&t(document).bind("keyup",function(t){var e=t.keyCode;if(!i.animating&&(39===e||37===e)){var n=39===e?i.getTarget("next"):37===e?i.getTarget("prev"):!1;i.flexAnimate(n,i.vars.pauseOnAction)}}),i.vars.mousewheel&&i.bind("mousewheel",function(t,e){t.preventDefault();var n=i.getTarget(0>e?"next":"prev");i.flexAnimate(n,i.vars.pauseOnAction)}),i.vars.pausePlay&&m.pausePlay.setup(),i.vars.slideshow&&i.vars.pauseInvisible&&m.pauseInvisible.init(),i.vars.slideshow&&(i.vars.pauseOnHover&&(i.on("mouseover",function(){i.manualPlay||i.manualPause||i.pause()}),i.on("mouseout",function(){i.manualPause||i.manualPlay||i.stopped||i.play()})),i.vars.pauseInvisible&&m.pauseInvisible.isHidden()||(i.vars.initDelay>0?i.startTimeout=setTimeout(i.play,i.vars.initDelay):i.play())),f&&m.asNav.setup(),r&&i.vars.touch&&m.touch(),(!p||p&&i.vars.smoothHeight)&&t(window).bind("resize orientationchange focus",m.resize),i.find("img").attr("draggable","false"),setTimeout(function(){i.vars.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(a+"active-slide").eq(i.currentItem).addClass(a+"active-slide"),s?(e._slider=i,i.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(t){t.preventDefault(),t.currentTarget._gesture&&t.currentTarget._gesture.addPointer(t.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var n=t(this),o=n.index();t(i.vars.asNavFor).data("flexslider").animating||n.hasClass("active")||(i.direction=i.currentItem<o?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction,!1,!0,!0))})})):i.slides.on(l,function(e){e.preventDefault();var n=t(this),o=n.index(),s=n.offset().left-t(i).scrollLeft();0>=s&&n.hasClass(a+"active-slide")?i.flexAnimate(i.getTarget("prev"),!0):t(i.vars.asNavFor).data("flexslider").animating||n.hasClass(a+"active-slide")||(i.direction=i.currentItem<o?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){i.manualControls?m.controlNav.setupManual():m.controlNav.setupPaging()},setupPaging:function(){var e,n,o="thumbnails"===i.vars.controlNav?"control-thumbs":"control-paging",s=1;if(i.controlNavScaffold=t('<ol class="'+a+"control-nav "+a+o+'"></ol>'),i.pagingCount>1)for(var r=0;r<i.pagingCount;r++){if(n=i.slides.eq(r),e="thumbnails"===i.vars.controlNav?'<img src="'+n.attr("data-thumb")+'"/>':"<a>"+s+"</a>","thumbnails"===i.vars.controlNav&&!0===i.vars.thumbCaptions){var u=n.attr("data-thumbcaption");""!=u&&void 0!=u&&(e+='<span class="'+a+'caption">'+u+"</span>")}i.controlNavScaffold.append("<li>"+e+"<i></i></li>"),s++}i.controlsContainer?t(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),m.controlNav.set(),m.controlNav.active(),i.controlNavScaffold.delegate("a, img",l,function(e){if(e.preventDefault(),""===c||c===e.type){var n=t(this),o=i.controlNav.index(n);n.hasClass(a+"active")||(i.direction=o>i.currentSlide?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction))}""===c&&(c=e.type),m.setToClearWatchedEvent()})},setupManual:function(){i.controlNav=i.manualControls,m.controlNav.active(),i.controlNav.bind(l,function(e){if(e.preventDefault(),""===c||c===e.type){var n=t(this),o=i.controlNav.index(n);n.hasClass(a+"active")||(i.direction=o>i.currentSlide?"next":"prev",i.flexAnimate(o,i.vars.pauseOnAction))}""===c&&(c=e.type),m.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===i.vars.controlNav?"img":"a";i.controlNav=t("."+a+"control-nav li "+e,i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(a+"active").eq(i.animatingTo).addClass(a+"active")},update:function(e,n){i.pagingCount>1&&"add"===e?i.controlNavScaffold.append(t("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(n).closest("li").remove(),m.controlNav.set(),i.pagingCount>1&&i.pagingCount!==i.controlNav.length?i.update(n,e):m.controlNav.active()}},directionNav:{setup:function(){var e=t('<ul class="'+a+'direction-nav"><li><a class="'+a+'prev" href="#">'+i.vars.prevText+'</a></li><li><a class="'+a+'next" href="#">'+i.vars.nextText+"</a></li></ul>");i.controlsContainer?(t(i.controlsContainer).append(e),i.directionNav=t("."+a+"direction-nav li a",i.controlsContainer)):(i.append(e),i.directionNav=t("."+a+"direction-nav li a",i)),m.directionNav.update(),i.directionNav.bind(l,function(e){e.preventDefault();var n;(""===c||c===e.type)&&(n=i.getTarget(t(this).hasClass(a+"next")?"next":"prev"),i.flexAnimate(n,i.vars.pauseOnAction)),""===c&&(c=e.type),m.setToClearWatchedEvent()})},update:function(){var t=a+"disabled";1===i.pagingCount?i.directionNav.addClass(t).attr("tabindex","-1"):i.vars.animationLoop?i.directionNav.removeClass(t).removeAttr("tabindex"):0===i.animatingTo?i.directionNav.removeClass(t).filter("."+a+"prev").addClass(t).attr("tabindex","-1"):i.animatingTo===i.last?i.directionNav.removeClass(t).filter("."+a+"next").addClass(t).attr("tabindex","-1"):i.directionNav.removeClass(t).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=t('<div class="'+a+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(e),i.pausePlay=t("."+a+"pauseplay a",i.controlsContainer)):(i.append(e),i.pausePlay=t("."+a+"pauseplay a",i)),m.pausePlay.update(i.vars.slideshow?a+"pause":a+"play"),i.pausePlay.bind(l,function(e){e.preventDefault(),(""===c||c===e.type)&&(t(this).hasClass(a+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())),""===c&&(c=e.type),m.setToClearWatchedEvent()})},update:function(t){"play"===t?i.pausePlay.removeClass(a+"pause").addClass(a+"play").html(i.vars.playText):i.pausePlay.removeClass(a+"play").addClass(a+"pause").html(i.vars.pauseText)}},touch:function(){function t(t){i.animating?t.preventDefault():(window.navigator.msPointerEnabled||1===t.touches.length)&&(i.pause(),v=u?i.h:i.w,w=Number(new Date),b=t.touches[0].pageX,x=t.touches[0].pageY,m=h&&d&&i.animatingTo===i.last?0:h&&d?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:h&&i.currentSlide===i.last?i.limit:h?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:d?(i.last-i.currentSlide+i.cloneOffset)*v:(i.currentSlide+i.cloneOffset)*v,c=u?x:b,f=u?b:x,e.addEventListener("touchmove",n,!1),e.addEventListener("touchend",o,!1))}function n(t){b=t.touches[0].pageX,x=t.touches[0].pageY,g=u?c-x:c-b,y=u?Math.abs(g)<Math.abs(b-f):Math.abs(g)<Math.abs(x-f);var e=500;(!y||Number(new Date)-w>e)&&(t.preventDefault(),!p&&i.transitions&&(i.vars.animationLoop||(g/=0===i.currentSlide&&0>g||i.currentSlide===i.last&&g>0?Math.abs(g)/v+2:1),i.setProps(m+g,"setTouch")))}function o(){if(e.removeEventListener("touchmove",n,!1),i.animatingTo===i.currentSlide&&!y&&null!==g){var t=d?-g:g,a=i.getTarget(t>0?"next":"prev");i.canAdvance(a)&&(Number(new Date)-w<550&&Math.abs(t)>50||Math.abs(t)>v/2)?i.flexAnimate(a,i.vars.pauseOnAction):p||i.flexAnimate(i.currentSlide,i.vars.pauseOnAction,!0)}e.removeEventListener("touchend",o,!1),c=null,f=null,g=null,m=null}function a(t){t.stopPropagation(),i.animating?t.preventDefault():(i.pause(),e._gesture.addPointer(t.pointerId),T=0,v=u?i.h:i.w,w=Number(new Date),m=h&&d&&i.animatingTo===i.last?0:h&&d?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:h&&i.currentSlide===i.last?i.limit:h?(i.itemW+i.vars.itemMargin)*i.move*i.currentSlide:d?(i.last-i.currentSlide+i.cloneOffset)*v:(i.currentSlide+i.cloneOffset)*v)}function r(t){t.stopPropagation();var n=t.target._slider;if(n){var i=-t.translationX,o=-t.translationY;return T+=u?o:i,g=T,y=u?Math.abs(T)<Math.abs(-i):Math.abs(T)<Math.abs(-o),t.detail===t.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){e._gesture.stop()}):void((!y||Number(new Date)-w>500)&&(t.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(g=T/(0===n.currentSlide&&0>T||n.currentSlide===n.last&&T>0?Math.abs(T)/v+2:1)),n.setProps(m+g,"setTouch"))))}}function l(t){t.stopPropagation();var e=t.target._slider;if(e){if(e.animatingTo===e.currentSlide&&!y&&null!==g){var n=d?-g:g,i=e.getTarget(n>0?"next":"prev");e.canAdvance(i)&&(Number(new Date)-w<550&&Math.abs(n)>50||Math.abs(n)>v/2)?e.flexAnimate(i,e.vars.pauseOnAction):p||e.flexAnimate(e.currentSlide,e.vars.pauseOnAction,!0)}c=null,f=null,g=null,m=null,T=0}}var c,f,m,v,g,w,y=!1,b=0,x=0,T=0;s?(e.style.msTouchAction="none",e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",a,!1),e._slider=i,e.addEventListener("MSGestureChange",r,!1),e.addEventListener("MSGestureEnd",l,!1)):e.addEventListener("touchstart",t,!1)},resize:function(){!i.animating&&i.is(":visible")&&(h||i.doMath(),p?m.smoothHeight():h?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(i.vars.smoothHeight&&m.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(t){if(!u||p){var e=p?i:i.viewport;t?e.animate({height:i.slides.eq(i.animatingTo).height()},t):e.height(i.slides.eq(i.animatingTo).height())}},sync:function(e){var n=t(i.vars.sync).data("flexslider"),o=i.animatingTo;switch(e){case"animate":n.flexAnimate(o,i.vars.pauseOnAction,!1,!0);break;case"play":n.playing||n.asNav||n.play();break;case"pause":n.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=t(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var t=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var e=0;e<t.length;e++)t[e]+"Hidden"in document&&(m.pauseInvisible.visProp=t[e]+"Hidden");if(m.pauseInvisible.visProp){var n=m.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){m.pauseInvisible.isHidden()?i.startTimeout?clearTimeout(i.startTimeout):i.pause():i.started?i.play():i.vars.initDelay>0?setTimeout(i.play,i.vars.initDelay):i.play()})}},isHidden:function(){return document[m.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(o),o=setTimeout(function(){c=""},3e3)}},i.flexAnimate=function(e,n,o,s,l){if(i.vars.animationLoop||e===i.currentSlide||(i.direction=e>i.currentSlide?"next":"prev"),f&&1===i.pagingCount&&(i.direction=i.currentItem<e?"next":"prev"),!i.animating&&(i.canAdvance(e,l)||o)&&i.is(":visible")){if(f&&s){var c=t(i.vars.asNavFor).data("flexslider");if(i.atEnd=0===e||e===i.count-1,c.flexAnimate(e,!0,!1,!0,l),i.direction=i.currentItem<e?"next":"prev",c.direction=i.direction,Math.ceil((e+1)/i.visible)-1===i.currentSlide||0===e)return i.currentItem=e,i.slides.removeClass(a+"active-slide").eq(e).addClass(a+"active-slide"),!1;i.currentItem=e,i.slides.removeClass(a+"active-slide").eq(e).addClass(a+"active-slide"),e=Math.floor(e/i.visible)}if(i.animating=!0,i.animatingTo=e,n&&i.pause(),i.vars.before(i),i.syncExists&&!l&&m.sync("animate"),i.vars.controlNav&&m.controlNav.active(),h||i.slides.removeClass(a+"active-slide").eq(e).addClass(a+"active-slide"),i.atEnd=0===e||e===i.last,i.vars.directionNav&&m.directionNav.update(),e===i.last&&(i.vars.end(i),i.vars.animationLoop||i.pause()),p)r?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(e).css({opacity:1,zIndex:2}),i.wrapup(y)):(i.slides.eq(i.currentSlide).css({zIndex:1}).animate({opacity:0},i.vars.animationSpeed,i.vars.easing),i.slides.eq(e).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing,i.wrapup));else{var v,g,w,y=u?i.slides.filter(":first").height():i.computedW;h?(v=i.vars.itemMargin,w=(i.itemW+v)*i.move*i.animatingTo,g=w>i.limit&&1!==i.visible?i.limit:w):g=0===i.currentSlide&&e===i.count-1&&i.vars.animationLoop&&"next"!==i.direction?d?(i.count+i.cloneOffset)*y:0:i.currentSlide===i.last&&0===e&&i.vars.animationLoop&&"prev"!==i.direction?d?0:(i.count+1)*y:d?(i.count-1-e+i.cloneOffset)*y:(e+i.cloneOffset)*y,i.setProps(g,"",i.vars.animationSpeed),i.transitions?(i.vars.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(i.ensureAnimationEnd),i.wrapup(y)}),clearTimeout(i.ensureAnimationEnd),i.ensureAnimationEnd=setTimeout(function(){i.wrapup(y)},i.vars.animationSpeed+100)):i.container.animate(i.args,i.vars.animationSpeed,i.vars.easing,function(){i.wrapup(y)})}i.vars.smoothHeight&&m.smoothHeight(i.vars.animationSpeed)}},i.wrapup=function(t){p||h||(0===i.currentSlide&&i.animatingTo===i.last&&i.vars.animationLoop?i.setProps(t,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&i.vars.animationLoop&&i.setProps(t,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,i.vars.after(i)},i.animateSlides=function(){!i.animating&&v&&i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.animatedSlides=null,i.playing=!1,i.vars.pausePlay&&m.pausePlay.update("play"),i.syncExists&&m.sync("pause")},i.play=function(){i.playing&&clearInterval(i.animatedSlides),i.animatedSlides=i.animatedSlides||setInterval(i.animateSlides,i.vars.slideshowSpeed),i.started=i.playing=!0,i.vars.pausePlay&&m.pausePlay.update("pause"),i.syncExists&&m.sync("play")},i.stop=function(){i.pause(),i.stopped=!0},i.canAdvance=function(t,e){var n=f?i.pagingCount-1:i.last;return e?!0:f&&i.currentItem===i.count-1&&0===t&&"prev"===i.direction?!0:f&&0===i.currentItem&&t===i.pagingCount-1&&"next"!==i.direction?!1:t!==i.currentSlide||f?i.vars.animationLoop?!0:i.atEnd&&0===i.currentSlide&&t===n&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===n&&0===t&&"next"===i.direction?!1:!0:!1},i.getTarget=function(t){return i.direction=t,"next"===t?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(t,e,n){var o=function(){var n=t?t:(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo,o=function(){if(h)return"setTouch"===e?t:d&&i.animatingTo===i.last?0:d?i.limit-(i.itemW+i.vars.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:n;switch(e){case"setTotal":return d?(i.count-1-i.currentSlide+i.cloneOffset)*t:(i.currentSlide+i.cloneOffset)*t;case"setTouch":return d?t:t;case"jumpEnd":return d?t:i.count*t;case"jumpStart":return d?i.count*t:t;default:return t}}();return-1*o+"px"}();i.transitions&&(o=u?"translate3d(0,"+o+",0)":"translate3d("+o+",0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n),i.container.css("transition-duration",n)),i.args[i.prop]=o,(i.transitions||void 0===n)&&i.container.css(i.args),i.container.css("transform",o)},i.setup=function(e){if(p)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+i.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):0==i.vars.fadeFirstSlide?i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).css({opacity:1}):i.slides.css({opacity:0,display:"block",zIndex:1}).eq(i.currentSlide).css({zIndex:2}).animate({opacity:1},i.vars.animationSpeed,i.vars.easing)),i.vars.smoothHeight&&m.smoothHeight();else{var n,o;"init"===e&&(i.viewport=t('<div class="'+a+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,d&&(o=t.makeArray(i.slides).reverse(),i.slides=t(o),i.container.empty().append(i.slides))),i.vars.animationLoop&&!h&&(i.cloneCount=2,i.cloneOffset=1,"init"!==e&&i.container.find(".clone").remove(),i.container.append(m.uniqueID(i.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(m.uniqueID(i.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),i.newSlides=t(i.vars.selector,i),n=d?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!h?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(n*i.h,"init")},"init"===e?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(n*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"left",display:"block"}),i.vars.smoothHeight&&m.smoothHeight()},"init"===e?100:0))}h||i.slides.removeClass(a+"active-slide").eq(i.currentSlide).addClass(a+"active-slide"),i.vars.init(i)},i.doMath=function(){var t=i.slides.first(),e=i.vars.itemMargin,n=i.vars.minItems,o=i.vars.maxItems;i.w=void 0===i.viewport?i.width():i.viewport.width(),i.h=t.height(),i.boxPadding=t.outerWidth()-t.width(),h?(i.itemT=i.vars.itemWidth+e,i.minW=n?n*i.itemT:i.w,i.maxW=o?o*i.itemT-e:i.w,i.itemW=i.minW>i.w?(i.w-e*(n-1))/n:i.maxW<i.w?(i.w-e*(o-1))/o:i.vars.itemWidth>i.w?i.w:i.vars.itemWidth,i.visible=Math.floor(i.w/i.itemW),i.move=i.vars.move>0&&i.vars.move<i.visible?i.vars.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:i.vars.itemWidth>i.w?i.itemW*(i.count-1)+e*(i.count-1):(i.itemW+e)*i.count-i.w-e):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(t,e){i.doMath(),h||(t<i.currentSlide?i.currentSlide+=1:t<=i.currentSlide&&0!==t&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),i.vars.controlNav&&!i.manualControls&&("add"===e&&!h||i.pagingCount>i.controlNav.length?m.controlNav.update("add"):("remove"===e&&!h||i.pagingCount<i.controlNav.length)&&(h&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),m.controlNav.update("remove",i.last))),i.vars.directionNav&&m.directionNav.update()},i.addSlide=function(e,n){var o=t(e);i.count+=1,i.last=i.count-1,u&&d?void 0!==n?i.slides.eq(i.count-n).after(o):i.container.prepend(o):void 0!==n?i.slides.eq(n).before(o):i.container.append(o),i.update(n,"add"),i.slides=t(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.added(i)},i.removeSlide=function(e){var n=isNaN(e)?i.slides.index(t(e)):e;i.count-=1,i.last=i.count-1,isNaN(e)?t(e,i.slides).remove():u&&d?i.slides.eq(i.last).remove():i.slides.eq(e).remove(),i.doMath(),i.update(n,"remove"),i.slides=t(i.vars.selector+":not(.clone)",i),i.setup(),i.vars.removed(i)},m.init()},t(window).blur(function(){focused=!1}).focus(function(){focused=!0}),t.flexslider.defaults={namespace:"am-",selector:".am-slides > li",animation:"slide",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:5e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},t.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var n=t(this),i=e.selector?e.selector:".am-slides > li",o=n.find(i);1===o.length&&e.allowOneSlide===!0||0===o.length?(o.animate({opacity:1},400),e.start&&e.start(n)):void 0===n.data("flexslider")&&new t.flexslider(this,e)});var n=t(this).data("flexslider");switch(e){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof e&&n.flexAnimate(e,!0)}}}),define("zepto.outerdemension",[],function(){var t=window.Zepto;["width","height"].forEach(function(e){var n=e.replace(/./,function(t){return t[0].toUpperCase()});t.fn["outer"+n]=function(t){var n=this;if(n){var i=n[e](),o={width:["left","right"],height:["top","bottom"]};return o[e].forEach(function(e){t&&(i+=parseInt(n.css("margin-"+e),10))}),i}return null}})}),define("zepto.pinchzoom",[],function(require,t,e){/**
     * @via https://github.com/manuelstofer/pinchzoom/blob/master/src/pinchzoom.js
     * @license the MIT License.
     */
var n=function(t){var e=function(e,n){this.el=t(e),this.zoomFactor=1,this.lastScale=1,this.offset={x:0,y:0},this.options=t.extend({},this.defaults,n),this.setupMarkup(),this.bindEvents(),this.update(),this.enable()},n=function(t,e){return t+e},i=function(t,e){return t>e-.01&&e+.01>t};e.prototype={defaults:{tapZoomFactor:2,zoomOutFactor:1.3,animationDuration:300,animationInterval:5,maxZoom:4,minZoom:.5,lockDragAxis:!1,use2d:!1,zoomStartEventName:"pz_zoomstart",zoomEndEventName:"pz_zoomend",dragStartEventName:"pz_dragstart",dragEndEventName:"pz_dragend",doubleTapEventName:"pz_doubletap"},handleDragStart:function(t){this.el.trigger(this.options.dragStartEventName),this.stopAnimation(),this.lastDragPosition=!1,this.hasInteraction=!0,this.handleDrag(t)},handleDrag:function(t){if(this.zoomFactor>1){var e=this.getTouches(t)[0];this.drag(e,this.lastDragPosition),this.offset=this.sanitizeOffset(this.offset),this.lastDragPosition=e}},handleDragEnd:function(){this.el.trigger(this.options.dragEndEventName),this.end()},handleZoomStart:function(){this.el.trigger(this.options.zoomStartEventName),this.stopAnimation(),this.lastScale=1,this.nthZoom=0,this.lastZoomCenter=!1,this.hasInteraction=!0},handleZoom:function(t,e){var n=this.getTouchCenter(this.getTouches(t)),i=e/this.lastScale;this.lastScale=e,this.nthZoom+=1,this.nthZoom>3&&(this.scale(i,n),this.drag(n,this.lastZoomCenter)),this.lastZoomCenter=n},handleZoomEnd:function(){this.el.trigger(this.options.zoomEndEventName),this.end()},handleDoubleTap:function(t){var e=this.getTouches(t)[0],n=this.zoomFactor>1?1:this.options.tapZoomFactor,i=this.zoomFactor,o=function(t){this.scaleTo(i+t*(n-i),e)}.bind(this);this.hasInteraction||(i>n&&(e=this.getCurrentZoomCenter()),this.animate(this.options.animationDuration,this.options.animationInterval,o,this.swing),this.el.trigger(this.options.doubleTapEventName))},sanitizeOffset:function(t){var e=(this.zoomFactor-1)*this.getContainerX(),n=(this.zoomFactor-1)*this.getContainerY(),i=Math.max(e,0),o=Math.max(n,0),a=Math.min(e,0),s=Math.min(n,0);return{x:Math.min(Math.max(t.x,a),i),y:Math.min(Math.max(t.y,s),o)}},scaleTo:function(t,e){this.scale(t/this.zoomFactor,e)},scale:function(t,e){t=this.scaleZoomFactor(t),this.addOffset({x:(t-1)*(e.x+this.offset.x),y:(t-1)*(e.y+this.offset.y)})},scaleZoomFactor:function(t){var e=this.zoomFactor;return this.zoomFactor*=t,this.zoomFactor=Math.min(this.options.maxZoom,Math.max(this.zoomFactor,this.options.minZoom)),this.zoomFactor/e},drag:function(t,e){e&&this.addOffset(this.options.lockDragAxis?Math.abs(t.x-e.x)>Math.abs(t.y-e.y)?{x:-(t.x-e.x),y:0}:{y:-(t.y-e.y),x:0}:{y:-(t.y-e.y),x:-(t.x-e.x)})},getTouchCenter:function(t){return this.getVectorAvg(t)},getVectorAvg:function(t){return{x:t.map(function(t){return t.x}).reduce(n)/t.length,y:t.map(function(t){return t.y}).reduce(n)/t.length}},addOffset:function(t){this.offset={x:this.offset.x+t.x,y:this.offset.y+t.y}},sanitize:function(){this.zoomFactor<this.options.zoomOutFactor?this.zoomOutAnimation():this.isInsaneOffset(this.offset)&&this.sanitizeOffsetAnimation()},isInsaneOffset:function(t){var e=this.sanitizeOffset(t);return e.x!==t.x||e.y!==t.y},sanitizeOffsetAnimation:function(){var t=this.sanitizeOffset(this.offset),e={x:this.offset.x,y:this.offset.y},n=function(n){this.offset.x=e.x+n*(t.x-e.x),this.offset.y=e.y+n*(t.y-e.y),this.update()}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,n,this.swing)},zoomOutAnimation:function(){var t=this.zoomFactor,e=1,n=this.getCurrentZoomCenter(),i=function(i){this.scaleTo(t+i*(e-t),n)}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,i,this.swing)},updateAspectRatio:function(){this.setContainerY()},getInitialZoomFactor:function(){return this.container[0].offsetWidth/this.el[0].offsetWidth},getAspectRatio:function(){return this.el[0].offsetWidth/this.el[0].offsetHeight},getCurrentZoomCenter:function(){var t=this.container[0].offsetWidth*this.zoomFactor,e=this.offset.x,n=t-e-this.container[0].offsetWidth,i=e/n,o=i*this.container[0].offsetWidth/(i+1),a=this.container[0].offsetHeight*this.zoomFactor,s=this.offset.y,r=a-s-this.container[0].offsetHeight,l=s/r,c=l*this.container[0].offsetHeight/(l+1);return 0===n&&(o=this.container[0].offsetWidth),0===r&&(c=this.container[0].offsetHeight),{x:o,y:c}},canDrag:function(){return!i(this.zoomFactor,1)},getTouches:function(t){var e=this.container.offset();return Array.prototype.slice.call(t.touches).map(function(t){return{x:t.pageX-e.left,y:t.pageY-e.top}})},animate:function(t,e,n,i,o){var a=(new Date).getTime(),s=function(){if(this.inAnimation){var r=(new Date).getTime()-a,l=r/t;r>=t?(n(1),o&&o(),this.update(),this.stopAnimation(),this.update()):(i&&(l=i(l)),n(l),this.update(),setTimeout(s,e))}}.bind(this);this.inAnimation=!0,s()},stopAnimation:function(){this.inAnimation=!1},swing:function(t){return-Math.cos(t*Math.PI)/2+.5},getContainerX:function(){return window.innerWidth},getContainerY:function(){return window.innerHeight},setContainerY:function(){var t=window.innerHeight;return this.el.css({height:t}),this.container.height(t)},setupMarkup:function(){this.container=t('<div class="pinch-zoom-container"></div>'),this.el.before(this.container),this.container.append(this.el),this.container.css({overflow:"hidden",position:"relative"}),this.el.css({"-webkit-transform-origin":"0% 0%","-moz-transform-origin":"0% 0%","-ms-transform-origin":"0% 0%","-o-transform-origin":"0% 0%","transform-origin":"0% 0%",position:"absolute"})},end:function(){this.hasInteraction=!1,this.sanitize(),this.update()},bindEvents:function(){o(this.container.get(0),this),t(window).on("resize",this.update.bind(this)),t(this.el).find("img").on("load",this.update.bind(this))},update:function(){this.updatePlaned||(this.updatePlaned=!0,setTimeout(function(){this.updatePlaned=!1,this.updateAspectRatio();var t=this.getInitialZoomFactor()*this.zoomFactor,e=-this.offset.x/t,n=-this.offset.y/t,i="scale3d("+t+", "+t+",1) translate3d("+e+"px,"+n+"px,0px)",o="scale("+t+", "+t+") translate("+e+"px,"+n+"px)",a=function(){this.clone&&(this.clone.remove(),delete this.clone)}.bind(this);!this.options.use2d||this.hasInteraction||this.inAnimation?(this.is3d=!0,a(),this.el.css({"-webkit-transform":i,"-o-transform":o,"-ms-transform":o,"-moz-transform":o,transform:i})):(this.is3d&&(this.clone=this.el.clone(),this.clone.css("pointer-events","none"),this.clone.appendTo(this.container),setTimeout(a,200)),this.el.css({"-webkit-transform":o,"-o-transform":o,"-ms-transform":o,"-moz-transform":o,transform:o}),this.is3d=!1)}.bind(this),0))},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1}};var o=function(t,e){var n=null,i=0,o=null,a=null,s=function(t,i){if(n!==t){if(n&&!t)switch(n){case"zoom":e.handleZoomEnd(i);break;case"drag":e.handleDragEnd(i)}switch(t){case"zoom":e.handleZoomStart(i);break;case"drag":e.handleDragStart(i)}}n=t},r=function(t){2===i?s("zoom"):1===i&&e.canDrag()?s("drag",t):s(null,t)},l=function(t){return Array.prototype.slice.call(t).map(function(t){return{x:t.pageX,y:t.pageY}})},c=function(t,e){var n,i;return n=t.x-e.x,i=t.y-e.y,Math.sqrt(n*n+i*i)},u=function(t,e){var n=c(t[0],t[1]),i=c(e[0],e[1]);return i/n},d=function(t){t.stopPropagation(),t.preventDefault()},h=function(t){var a=(new Date).getTime();if(i>1&&(o=null),300>a-o)switch(d(t),e.handleDoubleTap(t),n){case"zoom":e.handleZoomEnd(t);break;case"drag":e.handleDragEnd(t)}1===i&&(o=a)},p=!0;t.addEventListener("touchstart",function(t){e.enabled&&(p=!0,i=t.touches.length,h(t))}),t.addEventListener("touchmove",function(t){if(e.enabled){if(p)r(t),n&&d(t),a=l(t.touches);else{switch(n){case"zoom":e.handleZoom(t,u(a,l(t.touches)));break;case"drag":e.handleDrag(t)}n&&(d(t),e.update())}p=!1}}),t.addEventListener("touchend",function(t){e.enabled&&(i=t.touches.length,r(t))})};return e};e.exports=n(window.Zepto)}),define("zepto.touchgallery",["./zepto.extend.touch","zepto.pinchzoom"],function(require){require("./zepto.extend.touch");var t=require("zepto.pinchzoom"),e=window.Zepto,n=e('<div id="galleryOverlay">'),i=e('<div id="gallerySlider">'),o=e('<a id="prevArrow"></a>'),a=e('<a id="nextArrow"></a>'),s=e('<ol class="nav-control"></ol>'),r=!1,l=navigator.userAgent.indexOf("MSIE")>-1;e.fn.touchTouch=function(){function c(t){return r?!1:(n.show(),setTimeout(function(){n.addClass("visible")},100),d(t),void(r=!0))}function u(){return r?(n.animate({opacity:0,display:"none"},300).removeClass("visible"),r=!1,e(".placeholder").empty(),void(x=b)):!1}function d(t){l?i.find(".placeholder").css({display:"none"}).eq(t).css({display:"inline-block"}):i.css("left",100*-t+"%")}function h(t){setTimeout(function(){f(t)},1e3)}function p(t){var e=s.children("li");e.removeClass().eq(t).addClass("nav-active")}function f(e){return 0>e||e>=x.length?!1:void m(x.eq(e).attr("href"),function(){w.eq(e).html(this).wrapInner('<div class="pinch-zoom"></div>'),new t(w.eq(e).find(".pinch-zoom"),{})})}function m(t,n){var i=e("<img>").on("load",function(){n.call(i)});i.attr("src",t)}function v(){y+1<x.length?(y++,d(y),h(y+1),p(y)):(i.addClass("rightSpring"),setTimeout(function(){i.removeClass("rightSpring")},500))}function g(){y>0?(y--,d(y),h(y-1),p(y)):(i.addClass("leftSpring"),setTimeout(function(){i.removeClass("leftSpring")},500))}var w=e([]),y=0,b=this,x=b,T=e([]);e("[data-am-gallery]").length&&(n.hide().appendTo("body"),i.appendTo(n)),x.each(function(t){w=w.add(e('<div class="placeholder">')),T=T.add(e("<li>"+(t+1)+"</li>"))}),s.append(T),n.append(s),i.append(w).on("click",function(t){e(t.target).is("img")||u()}),e("body").on("touchstart","#gallerySlider img",function(t){var e=t.originalEvent?t.originalEvent:t,n=e.changedTouches[0].pageX;return i.on("touchmove",function(t){t.preventDefault(),e=t.touches[0]||t.changedTouches[0],e.pageX-n>10?(i.off("touchmove"),g()):e.pageX-n<-10&&(i.off("touchmove"),v())}),!1}).on("touchend",function(){i.off("touchmove")}),(window.PointerEvent||window.MSPointerEvent)&&e("body").on("swipe","#gallerySlider img",function(t){t.preventDefault()}).on("swipeRight","#gallerySlider img",function(){g()}).on("swipeLeft","#gallerySlider img",function(){v()}),x.on("click",function(t){t.preventDefault();var n,i,o=e(this),a=o.parent().closest("[data-gallery]");o.attr("data-gallery")?(n=o.attr("data-gallery"),i="item"):a.length&&(n=a.attr("data-gallery"),i="ancestor"),n&&"item"==i?x=e("[data-gallery="+n+"]"):n&&"ancestor"==i&&(x=x.filter(function(){return e(this).parent().closest("[data-gallery]").length})),y=x.index(this),c(y),f(y),p(y),h(y+1),h(y-1)}),"ontouchstart"in window||(n.append(o).append(a),o.click(function(t){t.preventDefault(),g()}),a.click(function(t){t.preventDefault(),v()})),e(window).on("keydown",function(t){var e=t.keyCode;37==e?g():39==e?v():27==e&&u()})}}),seajs.use(["accordion","core","divider","duoshuo","figure","footer","gallery","gotop","header","intro","list_news","map","mechat","menu","navbar","pagination","paragraph","slider","sohucs","tabs","titlebar","ui.add2home","ui.alert","ui.button","ui.collapse","ui.dimmer","ui.dropdown","ui.iscroll-lite","ui.modal","ui.offcanvas","ui.popover","ui.progress","ui.pureview","ui.scrollspy","ui.scrollspynav","ui.share","ui.smooth-scroll","ui.sticky","ui.tabs","util.cookie","util.fastclick","util.fullscreen","util.qrcode","zepto.extend.data","zepto.extend.fx","zepto.extend.selector","zepto.extend.touch","zepto.flexslider","zepto.outerdemension","zepto.pinchzoom","zepto.touchgallery"]);
(function(undefined) {
    var registerIfCondHelper = function(hbs) {
        hbs.registerHelper('ifCond', function(v1, operator, v2, options) {
            switch (operator) {
                case '==':
                    return (v1 == v2) ? options.fn(this) : options.inverse(this);
                    break;
                case '===':
                    return (v1 === v2) ? options.fn(this) : options.inverse(this);
                    break;
                case '<':
                    return (v1 < v2) ? options.fn(this) : options.inverse(this);
                    break;
                case '<=':
                    return (v1 <= v2) ? options.fn(this) : options.inverse(this);
                    break;
                case '>':
                    return (v1 > v2) ? options.fn(this) : options.inverse(this);
                    break;
                case '>=':
                    return (v1 >= v2) ? options.fn(this) : options.inverse(this);
                    break;
                default:
                    return options.inverse(this)
                    break;
            }
            return options.inverse(this);
        });
    };

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = registerIfCondHelper;
    }

    this.Handlebars && registerIfCondHelper(Handlebars);

}).call(this);


(function(undefined){
  var registerAMUIPartials = function(hbs) {
    hbs.registerPartial("accordion", "{{#this}}\n  <section data-am-widget=\"accordion\" class=\"am-accordion {{#if theme}}am-accordion-{{theme}}{{else}}am-accordion-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} data-am-accordion='{ {{#if options.multiple}}\"multiple\": true{{/if}} }'>\n    {{#each content}}\n      <dl class=\"am-accordion-item{{#if active}} am-active{{/if}}\">\n        <dt class=\"am-accordion-title\">\n          {{{title}}}\n        </dt>\n        <dd class=\"am-accordion-content am-collapse {{#if active}}am-in{{/if}}\">\n          {{{content}}}\n        </dd>\n      </dl>\n    {{/each}}\n  </section>\n{{/this}}"); 

    hbs.registerPartial("divider", "{{#this}}\n  <hr data-am-widget=\"divider\" style=\"{{#if options.width}}width:{{{options.width}}};{{/if}}{{#if options.height}}height:{{{options.height}}};{{/if}}\" class=\"am-divider {{#if theme}}am-divider-{{theme}}{{else}}am-divider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} />\n{{/this}}\n"); 

    hbs.registerPartial("duoshuo", "{{#this}}\n  <div data-am-widget=\"duoshuo\" class=\"am-duoshuo{{#if theme}} am-duoshuo-{{theme}}{{else}} am-duoshuo-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} {{#if options.shortName}}data-ds-short-name=\"{{options.shortName}}\"{{/if}}>\n    <div class=\"ds-thread\" {{#if content}}{{#each content}}{{#ifCond @key '==' 'threadKey'}}  data-thread-key=\"{{this}}\"{{else}} data-{{@key}}=\"{{this}}\"{{/ifCond}}{{/each}}{{/if}}>\n    </div>\n  </div>\n{{/this}}"); 

    hbs.registerPartial("figure", "{{#this}}\n  <figure data-am-widget=\"figure\" class=\"am am-figure {{#if theme}}am-figure-{{theme}}{{else}}am-figure-default{{/if}}{{#if options.zoomble}} am-figure-zoomable{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}}\n      id=\"{{id}}\"{{/if}}>\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition '==' 'top'}}\n        {{#if content.figcaption}}\n          <figcaption class=\"am-figure-capition-top\">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{/if}}\n\n    {{#if content.img}}\n      <img src=\"{{content.img}}\" alt=\"{{#if content.imgAlt}}{{content.imgAlt}}{{else}}{{content.figcaption}}{{/if}}\"/>\n    {{/if}}\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition '==' 'bottom'}}\n        {{#if content.figcaption}}\n          <figcaption class=\"am-figure-capition-btm\">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{else}}\n      {{#if content.figcaption}}\n        <figcaption class=\"am-figure-capition-btm\">\n          {{content.figcaption}}\n        </figcaption>\n      {{/if}}\n    {{/if}}\n  </figure>\n{{/this}}"); 

    hbs.registerPartial("footer", "{{#this}}\n  <footer data-am-widget=\"footer\"\n          class=\"am-footer {{#if theme}}am-footer-{{theme}}{{else}}am-footer-default {{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n          {{#if id}}id=\"{{id}}\"{{/if}}>\n    <div class=\"am-footer-switch\">\n    <span class=\"{{#if options.modal}}am-footer-ysp{{/if}}\" data-rel=\"mobile\"\n          data-am-modal=\"{target: '#am-switch-mode'}\">\n      {{#unless content.switchName}}\n        {{#ifCond content.lang '==' 'en'}}\n          Mobile\n        {{else}}\n          云适配版\n        {{/ifCond}}\n      {{else}}\n        {{content.switchName}}\n      {{/unless}}\n    </span>\n      <span class=\"am-footer-divider\"> | </span>\n      <a id=\"godesktop\" data-rel=\"desktop\" class=\"am-footer-desktop\" href=\"#\">\n        {{#ifCond content.lang '==' 'en'}}\n          Desktop\n        {{else}}\n          电脑版\n        {{/ifCond}}\n      </a>\n    </div>\n    <div class=\"am-footer-miscs {{#if options.textPosition}}am-text-left{{/if}}\">\n\n      {{#if options.techSupportCo}}\n        {{#ifCond content.lang '==' 'en'}}\n          <p>Supported by {{#if options.techSupportSite}}<a href=\"{{options.techSupportSite}}\"\n                                                            title=\"{{options.techSupportCo}}\"\n                                                            target=\"_blank\">{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}\n            .</p>\n        {{else}}\n          <p>由 {{#if options.techSupportSite}}<a href=\"{{options.techSupportSite}}\" title=\"{{options.techSupportCo}}\"\n                                                target=\"_blank\">{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}\n            提供技术支持</p>\n        {{/ifCond}}\n\n      {{/if}}\n\n      {{#if content.poweredBy }}\n        {{ content.poweredBy }}\n      {{else}}\n        {{#ifCond content.lang '==' 'en'}}\n          <p>Powered by AllMobilize.</p>\n        {{else}}\n          <p>云适配驱动</p>\n        {{/ifCond}}\n      {{/if}}\n      {{#each content.companyInfo}}\n        <p>{{{detail}}}</p>\n      {{/each}}\n    </div>\n  </footer>\n\n  <div id=\"am-footer-mode\"\n       class=\"am-modal am-modal-no-btn am-switch-mode-m {{#if theme}}am-switch-mode-m-{{theme}}{{/if}}\">\n    <div class=\"am-modal-dialog\">\n      <div class=\"am-modal-hd am-modal-footer-hd\">\n        <a href=\"javascript:void(0)\" data-dismiss=\"modal\" class=\"am-close am-close-spin\" data-am-modal-close>&times;</a>\n      </div>\n      <div class=\"am-modal-bd\">\n        {{#ifCond content.lang '==' 'en'}}\n          You are visiting\n        {{else}}\n          您正在浏览的是\n        {{/ifCond}}\n\n        <span class=\"am-switch-mode-owner\">\n          {{#if content.owner}}\n            {{content.owner}}\n          {{else}}\n            云适配\n          {{/if}}\n        </span>\n\n        <span class=\"am-switch-mode-slogan\">\n          {{#if content.slogan}}\n            {{{content.slogan}}}\n          {{else}}\n            {{#ifCond content.lang '==' 'en'}}\n              mobilized version for your device.\n            {{else}}\n              为您当前手机订制的移动网站。\n            {{/ifCond}}\n          {{/if}}\n        </span>\n      </div>\n    </div>\n  </div>\n{{/this}}\n"); 

    hbs.registerPartial("gallery", "{{#this}}\n  <ul data-am-widget=\"gallery\" class=\"am-gallery{{#if options.cols}} sm-block-grid-{{options.cols}}{{else}} sm-block-grid-2{{/if}}\n  md-block-grid-3 lg-block-grid-4 {{#if\n  theme}}am-gallery-{{theme}}{{else}}am-gallery-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" data-am-gallery=\"{ {{#if options.gallery}}lightbox: true{{/if}} }\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#each content}}\n      <li>\n        <div class=\"am-gallery-item\">\n          {{#if link}}\n            <a href=\"{{link}}\">\n              {{#if img}}<img src=\"{{img}}\" alt=\"{{title}}\"/>{{/if}}\n              {{#if title}}\n                <h3 class=\"am-gallery-title\">{{{title}}}</h3>\n              {{/if}}\n              {{#if desc}}\n                <div class=\"am-gallery-desc\">{{{desc}}}</div>\n              {{/if}}\n            </a>\n          {{else}}\n            {{#if img}}<img src=\"{{img}}\" alt=\"{{title}}\"/>{{/if}}\n            {{#if title}}\n              <h3 class=\"am-gallery-title\">{{{title}}}</h3>\n            {{/if}}\n            {{#if desc}}\n              <div class=\"am-gallery-desc\">{{{desc}}}</div>\n            {{/if}}\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n  </ul>\n{{/this}}\n"); 

    hbs.registerPartial("gotop", "{{#this}}\n  <div data-am-widget=\"gotop\" class=\"am-gotop {{#if theme}}am-gotop-{{theme}}{{else}}am-gotop-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n    <a href=\"#top\" title=\"{{content.title}}\">\n      {{#if content.title}}\n        <span class=\"am-gotop-title\">{{content.title}}</span>\n      {{/if}}\n      {{#if content.customIcon}}\n        <img class=\"am-gotop-icon-custom\" src=\"{{content.customIcon}}\" />\n      {{else}}\n        {{#if content.icon}}\n          <i class=\"am-gotop-icon am-icon-{{content.icon}}\"></i>\n        {{else}}\n          <i class=\"am-gotop-icon am-icon-chevron-up\"></i>\n        {{/if}}\n      {{/if}}\n    </a>\n  </div>\n{{/this}}"); 

    hbs.registerPartial("header", "{{#this}}\n  <header data-am-widget=\"header\"\n          class=\"am-header{{#if theme}} am-header-{{theme}}{{else}} am-header-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}}\n          id=\"{{id}}\"{{/if}}>\n    {{#if content.left}}\n      <div class=\"am-header-left am-header-nav\">\n        {{#each content.left}}\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            {{#if title}}\n              <span class=\"am-header-nav-title\">\n                {{title}}\n              </span>\n            {{/if}}\n\n            {{# if customIcon}}\n              <img class=\"am-header-icon-custom\" src=\"{{customIcon}}\" alt=\"\"/>\n            {{else}}\n              {{#if icon}}\n                <i class=\"am-header-icon am-icon-{{icon}}\"></i>\n              {{/if}}\n            {{/if}}\n          </a>\n        {{/each}}\n      </div>\n    {{/if}}\n\n    {{#if content.title}}\n      <h1 class=\"am-header-title\">\n        {{#if content.link}}\n          <a href=\"{{content.link}}\">\n            {{{content.title}}}\n          </a>\n        {{else}}\n          {{{content.title}}}\n        {{/if}}\n      </h1>\n    {{/if}}\n\n    {{#if content.right}}\n      <div class=\"am-header-right am-header-nav\">\n        {{#each content.right}}\n          <a href=\"{{link}}\" class=\"{{className}}\">\n            {{#if title}}\n              <span class=\"am-header-nav-title\">\n                {{title}}\n              </span>\n            {{/if}}\n\n            {{# if customIcon}}\n              <img class=\"am-header-icon-custom\" src=\"{{customIcon}}\" alt=\"\"/>\n            {{else}}\n              {{#if icon}}\n                <i class=\"am-header-icon am-icon-{{icon}}\"></i>\n              {{/if}}\n            {{/if}}\n          </a>\n        {{/each}}\n      </div>\n    {{/if}}\n  </header>\n{{/this}}"); 

    hbs.registerPartial("intro", "{{#this }}\n  <div data-am-widget=\"intro\"\n       class=\"am-intro am-cf {{#if theme}}am-intro-{{theme}}{{else}}am-intro-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n       {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#if content.title}}\n      <div class=\"am-intro-hd\">\n        <h2 class=\"am-intro-title\">{{{content.title}}}</h2>\n        {{#if content.more.link}}\n          {{#ifCond options.position '==' 'top'}}\n            <a class=\"am-intro-more am-intro-more-top\" href=\"{{content.more.link}}\">{{content.more.title}}</a>\n          {{/ifCond}}\n        {{/if}}\n      </div>\n    {{/if}}\n\n    <div class=\"am-g am-intro-bd\">\n      {{#if content.left}}\n        <div\n            class=\"am-intro-left am-col {{#if options.leftCols}}col-sm-{{options.leftCols}}{{/if}}\">{{{content.left}}}</div>\n      {{/if}}\n      {{#if content.right}}\n        <div\n            class=\"am-intro-right am-col {{#if options.rightCols}}col-sm-{{options.rightCols}}{{/if}}\">{{{content.right}}}</div>\n      {{/if}}\n    </div>\n    {{#ifCond options.position '==' 'bottom'}}\n      <div class=\"am-intro-more-bottom\">\n        <a class=\"am-btn am-btn-default\"\n           href=\"{{content.more.link}}\">{{content.more.title}}</a>\n      </div>\n    {{/ifCond}}\n  </div>\n{{/this}}"); 

    hbs.registerPartial("list_news", "{{#this}}\n  <div data-am-widget=\"list_news\" class=\"am-list-news{{#if theme}} am-list-news-{{theme}}{{else}} am-list-news-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n  <!--列表标题-->\n  {{#if content.header.title}}\n    <div class=\"am-list-news-hd am-cf\">\n      {{#if content.header.link}} <!--带更多链接-->\n        <a href=\"{{content.header.link}}\">\n          <h2>{{{content.header.title}}}</h2>\n          {{#ifCond content.header.morePosition '==' 'top'}}\n            <span class=\"am-list-news-more am-fr\">{{{content.header.moreText}}}</span>\n          {{/ifCond}}\n        </a>\n      {{else}} <!--不带更多链接-->\n        <h2>{{{content.header.title}}}</h2>\n      {{/if}}\n    </div>\n  {{/if}}\n\n  <div class=\"am-list-news-bd\">\n  <ul class=\"am-list\">\n  {{#ifCond options.type '==' 'thumb'}}\n    {{#ifCond options.thumbPosition '==' 'top'}} <!--缩略图在标题上方-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-top{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class=\"am-list-thumb am-col col-sm-12\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}}{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'bottom-left'}} <!--缩略图在标题下方居左-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-left{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n        {{/if}}\n        {{#if img}}\n        <div class=\"am-col col-sm-4 am-list-thumb\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'bottom-right'}} <!--缩略图在标题下方居右-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-right{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n        <div class=\"am-list-thumb am-col col-sm-4\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'left'}} <!--缩略图在标题左边-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-left{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class=\"am-col col-sm-4 am-list-thumb\">\n          <a href=\"{{link}}\">\n            <img src=\"{{img}}\" alt=\"{{title}}\"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n          {{/if}}\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition '==' 'right'}} <!--缩略图在标题右边-->\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-right{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        <div class=\"am-col{{#if img}} col-sm-8{{/if}} am-list-main\">\n          {{#if title}}\n            <h3 class=\"am-list-item-hd\"><a href=\"{{link}}\">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class=\"am-list-date\">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class=\"am-list-item-text\">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n          <div class=\"am-col col-sm-4 am-list-thumb\">\n            <a href=\"{{link}}\">\n              <img src=\"{{img}}\" alt=\"{{title}}\"/>\n            </a>\n            {{#if thumbAddition}}\n              <div class=\"am-list-thumb-addon\">{{{thumbAddition}}}</div>\n            {{/if}}\n          </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n  {{else}}{{!--不带缩略图--}}\n    {{#each content.main}}\n      <li class=\"am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed{{/if}}\">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <a href=\"{{link}}\" class=\"am-list-item-hd\">{{{title}}}</a>\n        {{/if}}\n\n        {{#if date}}\n          <span class=\"am-list-date\">{{date}}</span>\n        {{/if}}\n\n        {{#if desc}}\n          <div class=\"am-list-item-text\">{{{desc}}}</div>\n        {{/if}}\n\n        {{#if mainAddition}}\n          <div class=\"am-list-news-addon\">{{{mainAddition}}}</div>\n        {{/if}}\n      </li>\n    {{/each}}\n  {{/ifCond}}\n  </ul>\n  </div>\n\n  {{#ifCond content.header.morePosition '==' 'bottom'}}<!--更多在底部-->\n    {{#if content.header.link}}\n      <div class=\"am-list-news-ft\">\n        <a class=\"am-list-news-more am-btn am-btn-default\" href=\"{{content.header.link}}\">{{{content.header.moreText}}}</a>\n      </div>\n    {{/if}}\n  {{/ifCond}}\n  </div>\n{{/this}}"); 

    hbs.registerPartial("map", "{{#this}}\n  <div data-am-widget=\"map\" class=\"am-map {{#if theme}}am-map-{{theme}}{{else}}am-map-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      data-name=\"{{options.name}}\" data-address=\"{{options.address}}\" data-longitude=\"{{options.longitude}}\" data-latitude=\"{{options.latitude}}\">\n    <div id=\"bd-map\"></div>\n  </div>\n{{/this}}"); 

    hbs.registerPartial("mechat", "{{#this}}\n  <section data-am-widget=\"mechat\" class=\"am-mechat{{#if theme}} am-mechat-{{theme}}{{else}} am-mechat-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}} id=\"{{id}}\" {{/if}} {{#if options.unitid}}data-am-mechat-unitid=\"{{options.unitid}}\"{{/if}}>\n    <div id=\"mechat\"></div>\n  </section>\n{{/this}}"); 

    hbs.registerPartial("menu", "{{#this}}\n  <nav data-am-widget=\"menu\" class=\"am-menu {{#if theme}} am-menu-{{theme}}{{else}} am-menu-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{options.dataset}} {{#if id}}id=\"{{id}}\"{{/if}}\n    {{#ifCond theme '==' 'dropdown1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'dropdown2'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'slide1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas1'}} data-am-menu-offcanvas{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}} data-am-menu-offcanvas{{/ifCond}}> {{!-- 与模板深耦合，与 JS 浅耦合 --}}\n    <a href=\"javascript: void(0)\" class=\"am-menu-toggle\">\n      {{#if options.toggleTitle}}\n        <span class=\"am-menu-toggle-title\">{{options.toggleTitle}}</span>\n      {{/if}}\n      {{#if options.toggleCustomIcon}}\n        <img src=\"{{options.toggleCustomIcon}}\" alt=\"Menu Toggle\"/>\n      {{else}}\n        {{#if options.toggleIcon}}\n          <i class=\"am-menu-toggle-icon am-icon-{{options.toggleIcon}}\"></i>\n          {{else}}\n          <i class=\"am-menu-toggle-icon am-icon-bars\"></i>\n        {{/if}}\n      {{/if}}\n    </a>\n\n    {{!-- offCanvas menu Wrap --}}\n    {{!-- 问题：方便用户，但是与主题名称（类名）耦合过深 --}}\n    {{#ifCond theme '==' 'offcanvas1'}}\n    <div class=\"am-offcanvas\" {{#if options.closeOffCanvasOnclick}}data-dismiss-on=\"click\"{{/if}}>\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n    <div class=\"am-offcanvas\">\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n\n    {{#if content}}\n      <ul class=\"am-menu-nav {{#if options.cols}}sm-block-grid-{{options\n      .cols}}{{else}}sm-block-grid-1{{/if}}{{#ifCond theme '==' 'dropdown1'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'dropdown2'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'slide1'}} am-collapse{{/ifCond}}\">\n        {{#each content}}\n          <li class=\"{{#if subMenu}}am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n            <a href=\"{{link}}\">{{{title}}}</a>\n            {{#if subMenu}}\n              <ul class=\"am-menu-sub am-collapse {{#if subCols}} sm-block-grid-{{subCols}}{{else}}\n              sm-block-grid-1{{/if}} {{subMenuClassName}}\">\n                {{#each subMenu}}\n                  <li class=\"{{#if subMenu}} am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n                    <a href=\"{{link}}\">{{{title}}}</a>\n                  </li>\n                {{/each}}\n                {{!-- 显示进入栏目链接 --}}\n                {{#if channelLink}}\n                  <li class=\"am-menu-nav-channel\"><a href=\"{{link}}\" title=\"{{title}}\">{{{channelLink}}}</a></li>\n                {{/if}}\n              </ul>\n            {{/if}}\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n\n    {{#ifCond theme '==' 'offcanvas1'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{!-- 不要问我为什么这样写，我也不想这样 --}}\n  </nav>\n{{/this}}\n"); 

    hbs.registerPartial("navbar", "{{#this}}\n  <div data-am-widget=\"navbar\" class=\"am-navbar am-cf {{#if theme}}am-navbar-{{theme}}{{else}}am-navbar-default{{/if}} {{#if options.iconPosition}}am-navbar-label{{options.iconPosition}}{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      id=\"{{id}}\">\n    {{#if content}}\n      <ul class=\"am-navbar-nav am-cf {{#if options.cols}}sm-block-grid-{{options.cols}}{{/if}}\">\n        {{#each content}}\n          <li {{#if dataApi}}{{dataApi}}{{/if}}>\n            <a href=\"{{link}}\">\n              {{#if customIcon}}\n                <img src=\"{{customIcon}}\" alt=\"{{title}}\"/>\n              {{else}}\n                {{#if icon}}\n                  <span class=\"am-icon-{{icon}}\"></span>\n                {{/if}}\n              {{/if}}\n              {{#if title}}\n                <span class=\"am-navbar-label\">{{title}}</span>\n              {{/if}}\n            </a>\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n  </div>\n{{/this}}\n"); 

    hbs.registerPartial("pagination", "{{#this}}\n  <ul data-am-widget=\"pagination\"\n      class=\"am-pagination {{#if theme}}am-pagination-{{theme}}{{else}}am-pagination-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n      {{#if id}}id=\"{{id}}\"{{/if}}>\n\n    {{#if content.firstTitle}}\n      <li class=\"am-pagination-first {{content.firstClassName}}\">\n        <a href=\"{{content.firstLink}}\">{{{content.firstTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{#if content.prevTitle}}\n      <li class=\"am-pagination-prev {{content.prevClassName}}\">\n        <a href=\"{{content.prevLink}}\">{{{content.prevTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{! 移除 options.select，根据主题来判断结构，无奈 handlebars 逻辑处理...}}\n\n    {{#if content.page}}\n\n      {{#ifCond theme '==' 'select'}}\n        <li class=\"am-pagination-select\">\n          <select>\n            {{#each content.page}}\n              <option value=\"{{link}}\" class=\"{{className}}\">{{title}}{{#if ../content.total}}\n                / {{../../content.total}}{{/if}}\n              </option>\n            {{/each}}\n          </select>\n        </li>\n      {{else}}\n        {{#ifCond theme '==' 'one'}}\n          <li class=\"am-pagination-select\">\n            <select>\n              {{#each content.page}}\n                {{content.total}}\n                <option value=\"{{link}}\" class=\"{{className}}\">{{title}}{{#if ../content.total}}\n                  / {{../../content.total}}{{/if}}\n                </option>\n              {{/each}}\n            </select>\n          </li>\n        {{else}}\n          {{#each content.page}}\n            <li class=\"{{className}}\">\n              <a href=\"{{link}}\">{{{title}}}</a>\n            </li>\n          {{/each}}\n        {{/ifCond}}\n      {{/ifCond}}\n\n    {{/if}}\n\n    {{#if content.nextTitle}}\n      <li class=\"am-pagination-next {{content.nextClassName}}\">\n        <a href=\"{{content.nextLink}}\">{{{content.nextTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{#if content.lastTitle}}\n      <li class=\"am-pagination-last {{content.lastClassName}}\">\n        <a href=\"{{content.lastLink}}\">{{{content.lastTitle}}}</a>\n      </li>\n    {{/if}}\n  </ul>\n{{/this}}"); 

    hbs.registerPartial("paragraph", "{{#this}}\n  <article data-am-widget=\"paragraph\"\n           class=\"am-paragraph {{#if theme}}am-paragraph-{{theme}}{{else}}am-paragraph-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n           {{#if id}}id=\"{{id}}\"{{/if}}\n           data-am-paragraph=\"{ {{#if options.tableScrollable}}tableScrollable: true,{{/if}} {{#if options.imgLightbox}}imgLightbox: true{{/if}} }\">\n\n    {{#if content}}\n      {{{ content.content }}}\n    {{/if}}\n  </article>\n{{/this}}\n"); 

    hbs.registerPartial("slider", "{{#this}}\n  <div data-am-widget=\"slider\" class=\"am-slider {{#if theme}}am-slider-{{theme}}{{else}}am-slider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" data-am-slider='{{sliderConfig}}' {{#if id}}id=\"{{id}}\"{{/if}}>\n  <ul class=\"am-slides\">\n    {{#each content}}\n      <li{{#if thumb}} data-thumb=\"{{thumb}}\"{{/if}}>\n        {{#if link}}\n          <a href=\"{{link}}\">\n        {{/if}}\n        {{#if img}}\n        \t<img src=\"{{img}}\">\n        {{/if}}\n        {{#if desc}}\n          <div class=\"am-slider-desc\">{{{desc}}}</div>\n        {{/if}}\n        {{#if link}}</a>{{/if}} {{!--/end link--}}\n      </li>\n    {{/each}}\n  </ul>\n</div>\n{{/this}}"); 

    hbs.registerPartial("sohucs", "{{#this}}\n  <section data-am-widget=\"sohucs\" class=\"am-sohucs{{#if theme}} am-sohucs-{{theme}}{{else}} am-sohucs-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"{{#if id}} id=\"{{id}}\"{{/if}} data-am-sohucs-appid=\"{{options.appid}}\" data-am-sohucs-conf=\"{{options.conf}}\">\n    <div id=\"SOHUCS\"></div>\n  </section>\n{{/this}}"); 

    hbs.registerPartial("tabs", "{{#this }}\n  <div data-am-widget=\"tabs\"\n       class=\"am-tabs{{#if theme}} am-tabs-{{theme}}{{else}} am-tabs-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\"\n       {{#if id}}id=\"{{id}}\"{{/if}}>\n    {{#if content}}\n      <ul class=\"am-tabs-nav am-cf\">\n        {{#each content}}\n          <li class=\"{{#if active}}am-active{{/if}}\"><a href=\"[data-tab-panel-{{@index}}]\">{{{title}}}</a></li>\n        {{/each}}\n      </ul>\n      <div class=\"am-tabs-bd\">\n        {{#each content}}\n          <div data-tab-panel-{{@index}} class=\"am-tab-panel {{#if active}}am-active{{/if}}\">\n            {{{content}}}\n          </div>\n        {{/each}}\n      </div>\n    {{/if}}\n  </div>\n{{/this }}"); 

    hbs.registerPartial("titlebar", "{{#this}}\n<div data-am-widget=\"titlebar\" class=\"am-titlebar {{#if theme}}am-titlebar-{{theme}}{{else}}am-titlebar-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{#if id}}id=\"{{id}}\"{{/if}}>\n  {{#if content.title}}\n    <h2 class=\"am-titlebar-title\">\n      {{#if content.link}}\n        <a href=\"{{content.link}}\">{{{content.title}}}</a>\n      {{else}}\n        {{{content.title}}}\n      {{/if}}\n    </h2>\n  {{/if}}\n\n  {{#if content.nav}}\n    <nav class=\"am-titlebar-nav\">\n      {{#each content.nav}}\n        <a href=\"{{link}}\" class=\"{{className}}\">{{{title}}}</a>\n      {{/each}}\n    </nav>\n  {{/if}}\n</div>\n{{/this}}"); 

  }; 

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = registerAMUIPartials;
  }

  this.Handlebars && registerAMUIPartials(Handlebars);
}).call(this);
(function(){var i=function(i){i.registerHelper("ifCond",function(i,n,t,a){switch(n){case"==":return i==t?a.fn(this):a.inverse(this);case"===":return i===t?a.fn(this):a.inverse(this);case"<":return t>i?a.fn(this):a.inverse(this);case"<=":return t>=i?a.fn(this):a.inverse(this);case">":return i>t?a.fn(this):a.inverse(this);case">=":return i>=t?a.fn(this):a.inverse(this);default:return a.inverse(this)}return a.inverse(this)})};"undefined"!=typeof module&&module.exports&&(module.exports=i),this.Handlebars&&i(Handlebars)}).call(this),function(){var i=function(i){i.registerPartial("accordion",'{{#this}}\n  <section data-am-widget="accordion" class="am-accordion {{#if theme}}am-accordion-{{theme}}{{else}}am-accordion-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"{{#if id}} id="{{id}}"{{/if}} data-am-accordion=\'{ {{#if options.multiple}}"multiple": true{{/if}} }\'>\n    {{#each content}}\n      <dl class="am-accordion-item{{#if active}} am-active{{/if}}">\n        <dt class="am-accordion-title">\n          {{{title}}}\n        </dt>\n        <dd class="am-accordion-content am-collapse {{#if active}}am-in{{/if}}">\n          {{{content}}}\n        </dd>\n      </dl>\n    {{/each}}\n  </section>\n{{/this}}'),i.registerPartial("divider",'{{#this}}\n  <hr data-am-widget="divider" style="{{#if options.width}}width:{{{options.width}}};{{/if}}{{#if options.height}}height:{{{options.height}}};{{/if}}" class="am-divider {{#if theme}}am-divider-{{theme}}{{else}}am-divider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"{{#if id}} id="{{id}}"{{/if}} />\n{{/this}}\n'),i.registerPartial("duoshuo",'{{#this}}\n  <div data-am-widget="duoshuo" class="am-duoshuo{{#if theme}} am-duoshuo-{{theme}}{{else}} am-duoshuo-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"{{#if id}} id="{{id}}"{{/if}} {{#if options.shortName}}data-ds-short-name="{{options.shortName}}"{{/if}}>\n    <div class="ds-thread" {{#if content}}{{#each content}}{{#ifCond @key \'==\' \'threadKey\'}}  data-thread-key="{{this}}"{{else}} data-{{@key}}="{{this}}"{{/ifCond}}{{/each}}{{/if}}>\n    </div>\n  </div>\n{{/this}}'),i.registerPartial("figure",'{{#this}}\n  <figure data-am-widget="figure" class="am am-figure {{#if theme}}am-figure-{{theme}}{{else}}am-figure-default{{/if}}{{#if options.zoomble}} am-figure-zoomable{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"{{#if id}}\n      id="{{id}}"{{/if}}>\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition \'==\' \'top\'}}\n        {{#if content.figcaption}}\n          <figcaption class="am-figure-capition-top">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{/if}}\n\n    {{#if content.img}}\n      <img src="{{content.img}}" alt="{{#if content.imgAlt}}{{content.imgAlt}}{{else}}{{content.figcaption}}{{/if}}"/>\n    {{/if}}\n    {{#if options.figcaptionPosition}}\n      {{#ifCond options.figcaptionPosition \'==\' \'bottom\'}}\n        {{#if content.figcaption}}\n          <figcaption class="am-figure-capition-btm">\n            {{content.figcaption}}\n          </figcaption>\n        {{/if}}\n      {{/ifCond}}\n    {{else}}\n      {{#if content.figcaption}}\n        <figcaption class="am-figure-capition-btm">\n          {{content.figcaption}}\n        </figcaption>\n      {{/if}}\n    {{/if}}\n  </figure>\n{{/this}}'),i.registerPartial("footer",'{{#this}}\n  <footer data-am-widget="footer"\n          class="am-footer {{#if theme}}am-footer-{{theme}}{{else}}am-footer-default {{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"\n          {{#if id}}id="{{id}}"{{/if}}>\n    <div class="am-footer-switch">\n    <span class="{{#if options.modal}}am-footer-ysp{{/if}}" data-rel="mobile"\n          data-am-modal="{target: \'#am-switch-mode\'}">\n      {{#unless content.switchName}}\n        {{#ifCond content.lang \'==\' \'en\'}}\n          Mobile\n        {{else}}\n          云适配版\n        {{/ifCond}}\n      {{else}}\n        {{content.switchName}}\n      {{/unless}}\n    </span>\n      <span class="am-footer-divider"> | </span>\n      <a id="godesktop" data-rel="desktop" class="am-footer-desktop" href="#">\n        {{#ifCond content.lang \'==\' \'en\'}}\n          Desktop\n        {{else}}\n          电脑版\n        {{/ifCond}}\n      </a>\n    </div>\n    <div class="am-footer-miscs {{#if options.textPosition}}am-text-left{{/if}}">\n\n      {{#if options.techSupportCo}}\n        {{#ifCond content.lang \'==\' \'en\'}}\n          <p>Supported by {{#if options.techSupportSite}}<a href="{{options.techSupportSite}}"\n                                                            title="{{options.techSupportCo}}"\n                                                            target="_blank">{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}\n            .</p>\n        {{else}}\n          <p>由 {{#if options.techSupportSite}}<a href="{{options.techSupportSite}}" title="{{options.techSupportCo}}"\n                                                target="_blank">{{{options.techSupportCo}}}</a>{{else}}{{{options.techSupportCo}}}{{/if}}\n            提供技术支持</p>\n        {{/ifCond}}\n\n      {{/if}}\n\n      {{#if content.poweredBy }}\n        {{ content.poweredBy }}\n      {{else}}\n        {{#ifCond content.lang \'==\' \'en\'}}\n          <p>Powered by AllMobilize.</p>\n        {{else}}\n          <p>云适配驱动</p>\n        {{/ifCond}}\n      {{/if}}\n      {{#each content.companyInfo}}\n        <p>{{{detail}}}</p>\n      {{/each}}\n    </div>\n  </footer>\n\n  <div id="am-footer-mode"\n       class="am-modal am-modal-no-btn am-switch-mode-m {{#if theme}}am-switch-mode-m-{{theme}}{{/if}}">\n    <div class="am-modal-dialog">\n      <div class="am-modal-hd am-modal-footer-hd">\n        <a href="javascript:void(0)" data-dismiss="modal" class="am-close am-close-spin" data-am-modal-close>&times;</a>\n      </div>\n      <div class="am-modal-bd">\n        {{#ifCond content.lang \'==\' \'en\'}}\n          You are visiting\n        {{else}}\n          您正在浏览的是\n        {{/ifCond}}\n\n        <span class="am-switch-mode-owner">\n          {{#if content.owner}}\n            {{content.owner}}\n          {{else}}\n            云适配\n          {{/if}}\n        </span>\n\n        <span class="am-switch-mode-slogan">\n          {{#if content.slogan}}\n            {{{content.slogan}}}\n          {{else}}\n            {{#ifCond content.lang \'==\' \'en\'}}\n              mobilized version for your device.\n            {{else}}\n              为您当前手机订制的移动网站。\n            {{/ifCond}}\n          {{/if}}\n        </span>\n      </div>\n    </div>\n  </div>\n{{/this}}\n'),i.registerPartial("gallery",'{{#this}}\n  <ul data-am-widget="gallery" class="am-gallery{{#if options.cols}} sm-block-grid-{{options.cols}}{{else}} sm-block-grid-2{{/if}}\n  md-block-grid-3 lg-block-grid-4 {{#if\n  theme}}am-gallery-{{theme}}{{else}}am-gallery-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}" data-am-gallery="{ {{#if options.gallery}}lightbox: true{{/if}} }" {{#if id}}id="{{id}}"{{/if}}>\n    {{#each content}}\n      <li>\n        <div class="am-gallery-item">\n          {{#if link}}\n            <a href="{{link}}">\n              {{#if img}}<img src="{{img}}" alt="{{title}}"/>{{/if}}\n              {{#if title}}\n                <h3 class="am-gallery-title">{{{title}}}</h3>\n              {{/if}}\n              {{#if desc}}\n                <div class="am-gallery-desc">{{{desc}}}</div>\n              {{/if}}\n            </a>\n          {{else}}\n            {{#if img}}<img src="{{img}}" alt="{{title}}"/>{{/if}}\n            {{#if title}}\n              <h3 class="am-gallery-title">{{{title}}}</h3>\n            {{/if}}\n            {{#if desc}}\n              <div class="am-gallery-desc">{{{desc}}}</div>\n            {{/if}}\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n  </ul>\n{{/this}}\n'),i.registerPartial("gotop",'{{#this}}\n  <div data-am-widget="gotop" class="am-gotop {{#if theme}}am-gotop-{{theme}}{{else}}am-gotop-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}" {{#if id}}id="{{id}}"{{/if}}>\n    <a href="#top" title="{{content.title}}">\n      {{#if content.title}}\n        <span class="am-gotop-title">{{content.title}}</span>\n      {{/if}}\n      {{#if content.customIcon}}\n        <img class="am-gotop-icon-custom" src="{{content.customIcon}}" />\n      {{else}}\n        {{#if content.icon}}\n          <i class="am-gotop-icon am-icon-{{content.icon}}"></i>\n        {{else}}\n          <i class="am-gotop-icon am-icon-chevron-up"></i>\n        {{/if}}\n      {{/if}}\n    </a>\n  </div>\n{{/this}}'),i.registerPartial("header",'{{#this}}\n  <header data-am-widget="header"\n          class="am-header{{#if theme}} am-header-{{theme}}{{else}} am-header-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"{{#if id}}\n          id="{{id}}"{{/if}}>\n    {{#if content.left}}\n      <div class="am-header-left am-header-nav">\n        {{#each content.left}}\n          <a href="{{link}}" class="{{className}}">\n            {{#if title}}\n              <span class="am-header-nav-title">\n                {{title}}\n              </span>\n            {{/if}}\n\n            {{# if customIcon}}\n              <img class="am-header-icon-custom" src="{{customIcon}}" alt=""/>\n            {{else}}\n              {{#if icon}}\n                <i class="am-header-icon am-icon-{{icon}}"></i>\n              {{/if}}\n            {{/if}}\n          </a>\n        {{/each}}\n      </div>\n    {{/if}}\n\n    {{#if content.title}}\n      <h1 class="am-header-title">\n        {{#if content.link}}\n          <a href="{{content.link}}">\n            {{{content.title}}}\n          </a>\n        {{else}}\n          {{{content.title}}}\n        {{/if}}\n      </h1>\n    {{/if}}\n\n    {{#if content.right}}\n      <div class="am-header-right am-header-nav">\n        {{#each content.right}}\n          <a href="{{link}}" class="{{className}}">\n            {{#if title}}\n              <span class="am-header-nav-title">\n                {{title}}\n              </span>\n            {{/if}}\n\n            {{# if customIcon}}\n              <img class="am-header-icon-custom" src="{{customIcon}}" alt=""/>\n            {{else}}\n              {{#if icon}}\n                <i class="am-header-icon am-icon-{{icon}}"></i>\n              {{/if}}\n            {{/if}}\n          </a>\n        {{/each}}\n      </div>\n    {{/if}}\n  </header>\n{{/this}}'),i.registerPartial("intro",'{{#this }}\n  <div data-am-widget="intro"\n       class="am-intro am-cf {{#if theme}}am-intro-{{theme}}{{else}}am-intro-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"\n       {{#if id}}id="{{id}}"{{/if}}>\n    {{#if content.title}}\n      <div class="am-intro-hd">\n        <h2 class="am-intro-title">{{{content.title}}}</h2>\n        {{#if content.more.link}}\n          {{#ifCond options.position \'==\' \'top\'}}\n            <a class="am-intro-more am-intro-more-top" href="{{content.more.link}}">{{content.more.title}}</a>\n          {{/ifCond}}\n        {{/if}}\n      </div>\n    {{/if}}\n\n    <div class="am-g am-intro-bd">\n      {{#if content.left}}\n        <div\n            class="am-intro-left am-col {{#if options.leftCols}}col-sm-{{options.leftCols}}{{/if}}">{{{content.left}}}</div>\n      {{/if}}\n      {{#if content.right}}\n        <div\n            class="am-intro-right am-col {{#if options.rightCols}}col-sm-{{options.rightCols}}{{/if}}">{{{content.right}}}</div>\n      {{/if}}\n    </div>\n    {{#ifCond options.position \'==\' \'bottom\'}}\n      <div class="am-intro-more-bottom">\n        <a class="am-btn am-btn-default"\n           href="{{content.more.link}}">{{content.more.title}}</a>\n      </div>\n    {{/ifCond}}\n  </div>\n{{/this}}'),i.registerPartial("list_news",'{{#this}}\n  <div data-am-widget="list_news" class="am-list-news{{#if theme}} am-list-news-{{theme}}{{else}} am-list-news-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}" {{#if id}}id="{{id}}"{{/if}}>\n  <!--列表标题-->\n  {{#if content.header.title}}\n    <div class="am-list-news-hd am-cf">\n      {{#if content.header.link}} <!--带更多链接-->\n        <a href="{{content.header.link}}">\n          <h2>{{{content.header.title}}}</h2>\n          {{#ifCond content.header.morePosition \'==\' \'top\'}}\n            <span class="am-list-news-more am-fr">{{{content.header.moreText}}}</span>\n          {{/ifCond}}\n        </a>\n      {{else}} <!--不带更多链接-->\n        <h2>{{{content.header.title}}}</h2>\n      {{/if}}\n    </div>\n  {{/if}}\n\n  <div class="am-list-news-bd">\n  <ul class="am-list">\n  {{#ifCond options.type \'==\' \'thumb\'}}\n    {{#ifCond options.thumbPosition \'==\' \'top\'}} <!--缩略图在标题上方-->\n    {{#each content.main}}\n      <li class="am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-top{{/if}}">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class="am-list-thumb am-col col-sm-12">\n          <a href="{{link}}">\n            <img src="{{img}}" alt="{{title}}"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class="am-list-thumb-addon">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class="am-col{{#if img}}{{/if}} am-list-main">\n          {{#if title}}\n            <h3 class="am-list-item-hd"><a href="{{link}}">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class="am-list-date">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class="am-list-item-text">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class="am-list-news-addon">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition \'==\' \'bottom-left\'}} <!--缩略图在标题下方居左-->\n    {{#each content.main}}\n      <li class="am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-left{{/if}}">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class="am-list-item-hd"><a href="{{link}}">{{{title}}}</a></h3>\n        {{/if}}\n        {{#if img}}\n        <div class="am-col col-sm-4 am-list-thumb">\n          <a href="{{link}}">\n            <img src="{{img}}" alt="{{title}}"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class="am-list-thumb-addon">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class="am-col{{#if img}} col-sm-8{{/if}} am-list-main">\n          {{#if date}}\n            <span class="am-list-date">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class="am-list-item-text">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class="am-list-news-addon">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition \'==\' \'bottom-right\'}} <!--缩略图在标题下方居右-->\n    {{#each content.main}}\n      <li class="am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-bottom-right{{/if}}">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <h3 class="am-list-item-hd"><a href="{{link}}">{{{title}}}</a></h3>\n        {{/if}}\n\n        <div class="am-col{{#if img}} col-sm-8{{/if}} am-list-main">\n          {{#if date}}\n            <span class="am-list-date">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class="am-list-item-text">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class="am-list-news-addon">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n        <div class="am-list-thumb am-col col-sm-4">\n          <a href="{{link}}">\n            <img src="{{img}}" alt="{{title}}"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class="am-list-thumb-addon">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition \'==\' \'left\'}} <!--缩略图在标题左边-->\n    {{#each content.main}}\n      <li class="am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-left{{/if}}">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if img}}\n        <div class="am-col col-sm-4 am-list-thumb">\n          <a href="{{link}}">\n            <img src="{{img}}" alt="{{title}}"/>\n          </a>\n          {{#if thumbAddition}}\n            <div class="am-list-thumb-addon">{{{thumbAddition}}}</div>\n          {{/if}}\n        </div>\n        {{/if}}\n\n        <div class="am-col{{#if img}} col-sm-8{{/if}} am-list-main">\n          {{#if title}}\n            <h3 class="am-list-item-hd"><a href="{{link}}">{{{title}}}</a></h3>\n          {{/if}}\n          {{#if date}}\n            <span class="am-list-date">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class="am-list-item-text">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class="am-list-news-addon">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n    {{#ifCond options.thumbPosition \'==\' \'right\'}} <!--缩略图在标题右边-->\n    {{#each content.main}}\n      <li class="am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed am-list-item-thumb-right{{/if}}">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        <div class="am-col{{#if img}} col-sm-8{{/if}} am-list-main">\n          {{#if title}}\n            <h3 class="am-list-item-hd"><a href="{{link}}">{{{title}}}</a></h3>\n          {{/if}}\n\n          {{#if date}}\n            <span class="am-list-date">{{date}}</span>\n          {{/if}}\n\n          {{#if desc}}\n            <div class="am-list-item-text">{{{desc}}}</div>\n          {{/if}}\n\n          {{#if mainAddition}}\n            <div class="am-list-news-addon">{{{mainAddition}}}</div>\n          {{/if}}\n        </div>\n        {{#if img}}\n          <div class="am-col col-sm-4 am-list-thumb">\n            <a href="{{link}}">\n              <img src="{{img}}" alt="{{title}}"/>\n            </a>\n            {{#if thumbAddition}}\n              <div class="am-list-thumb-addon">{{{thumbAddition}}}</div>\n            {{/if}}\n          </div>\n        {{/if}}\n      </li>\n    {{/each}}\n    {{/ifCond}}\n\n  {{else}}{{!--不带缩略图--}}\n    {{#each content.main}}\n      <li class="am-g{{#if date}} am-list-item-dated{{/if}}{{#if desc}} am-list-item-desced{{/if}}{{#if img}} am-list-item-thumbed{{/if}}">\n        {{!--\n          am-list-item-dated - 带日期\n          am-list-item-desced - 带描述\n          am-list-item-thumbed - 带缩略图的\n        --}}\n        {{#if title}}\n          <a href="{{link}}" class="am-list-item-hd">{{{title}}}</a>\n        {{/if}}\n\n        {{#if date}}\n          <span class="am-list-date">{{date}}</span>\n        {{/if}}\n\n        {{#if desc}}\n          <div class="am-list-item-text">{{{desc}}}</div>\n        {{/if}}\n\n        {{#if mainAddition}}\n          <div class="am-list-news-addon">{{{mainAddition}}}</div>\n        {{/if}}\n      </li>\n    {{/each}}\n  {{/ifCond}}\n  </ul>\n  </div>\n\n  {{#ifCond content.header.morePosition \'==\' \'bottom\'}}<!--更多在底部-->\n    {{#if content.header.link}}\n      <div class="am-list-news-ft">\n        <a class="am-list-news-more am-btn am-btn-default" href="{{content.header.link}}">{{{content.header.moreText}}}</a>\n      </div>\n    {{/if}}\n  {{/ifCond}}\n  </div>\n{{/this}}'),i.registerPartial("map",'{{#this}}\n  <div data-am-widget="map" class="am-map {{#if theme}}am-map-{{theme}}{{else}}am-map-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"\n      data-name="{{options.name}}" data-address="{{options.address}}" data-longitude="{{options.longitude}}" data-latitude="{{options.latitude}}">\n    <div id="bd-map"></div>\n  </div>\n{{/this}}'),i.registerPartial("mechat",'{{#this}}\n  <section data-am-widget="mechat" class="am-mechat{{#if theme}} am-mechat-{{theme}}{{else}} am-mechat-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}" {{#if id}} id="{{id}}" {{/if}} {{#if options.unitid}}data-am-mechat-unitid="{{options.unitid}}"{{/if}}>\n    <div id="mechat"></div>\n  </section>\n{{/this}}'),i.registerPartial("menu","{{#this}}\n  <nav data-am-widget=\"menu\" class=\"am-menu {{#if theme}} am-menu-{{theme}}{{else}} am-menu-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}\" {{options.dataset}} {{#if id}}id=\"{{id}}\"{{/if}}\n    {{#ifCond theme '==' 'dropdown1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'dropdown2'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'slide1'}} data-am-menu-collapse{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas1'}} data-am-menu-offcanvas{{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}} data-am-menu-offcanvas{{/ifCond}}> {{!-- 与模板深耦合，与 JS 浅耦合 --}}\n    <a href=\"javascript: void(0)\" class=\"am-menu-toggle\">\n      {{#if options.toggleTitle}}\n        <span class=\"am-menu-toggle-title\">{{options.toggleTitle}}</span>\n      {{/if}}\n      {{#if options.toggleCustomIcon}}\n        <img src=\"{{options.toggleCustomIcon}}\" alt=\"Menu Toggle\"/>\n      {{else}}\n        {{#if options.toggleIcon}}\n          <i class=\"am-menu-toggle-icon am-icon-{{options.toggleIcon}}\"></i>\n          {{else}}\n          <i class=\"am-menu-toggle-icon am-icon-bars\"></i>\n        {{/if}}\n      {{/if}}\n    </a>\n\n    {{!-- offCanvas menu Wrap --}}\n    {{!-- 问题：方便用户，但是与主题名称（类名）耦合过深 --}}\n    {{#ifCond theme '==' 'offcanvas1'}}\n    <div class=\"am-offcanvas\" {{#if options.closeOffCanvasOnclick}}data-dismiss-on=\"click\"{{/if}}>\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n    <div class=\"am-offcanvas\">\n      <div class=\"am-offcanvas-bar{{#if options.offCanvasFlip}} am-offcanvas-bar-flip{{/if}}\">\n    {{/ifCond}}\n\n    {{#if content}}\n      <ul class=\"am-menu-nav {{#if options.cols}}sm-block-grid-{{options\n      .cols}}{{else}}sm-block-grid-1{{/if}}{{#ifCond theme '==' 'dropdown1'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'dropdown2'}} am-collapse{{/ifCond}}{{#ifCond theme\n      '==' 'slide1'}} am-collapse{{/ifCond}}\">\n        {{#each content}}\n          <li class=\"{{#if subMenu}}am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n            <a href=\"{{link}}\">{{{title}}}</a>\n            {{#if subMenu}}\n              <ul class=\"am-menu-sub am-collapse {{#if subCols}} sm-block-grid-{{subCols}}{{else}}\n              sm-block-grid-1{{/if}} {{subMenuClassName}}\">\n                {{#each subMenu}}\n                  <li class=\"{{#if subMenu}} am-parent{{/if}}{{#if className}} {{className}}{{/if}}\">\n                    <a href=\"{{link}}\">{{{title}}}</a>\n                  </li>\n                {{/each}}\n                {{!-- 显示进入栏目链接 --}}\n                {{#if channelLink}}\n                  <li class=\"am-menu-nav-channel\"><a href=\"{{link}}\" title=\"{{title}}\">{{{channelLink}}}</a></li>\n                {{/if}}\n              </ul>\n            {{/if}}\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n\n    {{#ifCond theme '==' 'offcanvas1'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{#ifCond theme '==' 'offcanvas2'}}\n      </div>\n    </div>\n    {{/ifCond}}\n    {{!-- 不要问我为什么这样写，我也不想这样 --}}\n  </nav>\n{{/this}}\n"),i.registerPartial("navbar",'{{#this}}\n  <div data-am-widget="navbar" class="am-navbar am-cf {{#if theme}}am-navbar-{{theme}}{{else}}am-navbar-default{{/if}} {{#if options.iconPosition}}am-navbar-label{{options.iconPosition}}{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"\n      id="{{id}}">\n    {{#if content}}\n      <ul class="am-navbar-nav am-cf {{#if options.cols}}sm-block-grid-{{options.cols}}{{/if}}">\n        {{#each content}}\n          <li {{#if dataApi}}{{dataApi}}{{/if}}>\n            <a href="{{link}}">\n              {{#if customIcon}}\n                <img src="{{customIcon}}" alt="{{title}}"/>\n              {{else}}\n                {{#if icon}}\n                  <span class="am-icon-{{icon}}"></span>\n                {{/if}}\n              {{/if}}\n              {{#if title}}\n                <span class="am-navbar-label">{{title}}</span>\n              {{/if}}\n            </a>\n          </li>\n        {{/each}}\n      </ul>\n    {{/if}}\n  </div>\n{{/this}}\n'),i.registerPartial("pagination",'{{#this}}\n  <ul data-am-widget="pagination"\n      class="am-pagination {{#if theme}}am-pagination-{{theme}}{{else}}am-pagination-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"\n      {{#if id}}id="{{id}}"{{/if}}>\n\n    {{#if content.firstTitle}}\n      <li class="am-pagination-first {{content.firstClassName}}">\n        <a href="{{content.firstLink}}">{{{content.firstTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{#if content.prevTitle}}\n      <li class="am-pagination-prev {{content.prevClassName}}">\n        <a href="{{content.prevLink}}">{{{content.prevTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{! 移除 options.select，根据主题来判断结构，无奈 handlebars 逻辑处理...}}\n\n    {{#if content.page}}\n\n      {{#ifCond theme \'==\' \'select\'}}\n        <li class="am-pagination-select">\n          <select>\n            {{#each content.page}}\n              <option value="{{link}}" class="{{className}}">{{title}}{{#if ../content.total}}\n                / {{../../content.total}}{{/if}}\n              </option>\n            {{/each}}\n          </select>\n        </li>\n      {{else}}\n        {{#ifCond theme \'==\' \'one\'}}\n          <li class="am-pagination-select">\n            <select>\n              {{#each content.page}}\n                {{content.total}}\n                <option value="{{link}}" class="{{className}}">{{title}}{{#if ../content.total}}\n                  / {{../../content.total}}{{/if}}\n                </option>\n              {{/each}}\n            </select>\n          </li>\n        {{else}}\n          {{#each content.page}}\n            <li class="{{className}}">\n              <a href="{{link}}">{{{title}}}</a>\n            </li>\n          {{/each}}\n        {{/ifCond}}\n      {{/ifCond}}\n\n    {{/if}}\n\n    {{#if content.nextTitle}}\n      <li class="am-pagination-next {{content.nextClassName}}">\n        <a href="{{content.nextLink}}">{{{content.nextTitle}}}</a>\n      </li>\n    {{/if}}\n\n    {{#if content.lastTitle}}\n      <li class="am-pagination-last {{content.lastClassName}}">\n        <a href="{{content.lastLink}}">{{{content.lastTitle}}}</a>\n      </li>\n    {{/if}}\n  </ul>\n{{/this}}'),i.registerPartial("paragraph",'{{#this}}\n  <article data-am-widget="paragraph"\n           class="am-paragraph {{#if theme}}am-paragraph-{{theme}}{{else}}am-paragraph-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"\n           {{#if id}}id="{{id}}"{{/if}}\n           data-am-paragraph="{ {{#if options.tableScrollable}}tableScrollable: true,{{/if}} {{#if options.imgLightbox}}imgLightbox: true{{/if}} }">\n\n    {{#if content}}\n      {{{ content.content }}}\n    {{/if}}\n  </article>\n{{/this}}\n'),i.registerPartial("slider",'{{#this}}\n  <div data-am-widget="slider" class="am-slider {{#if theme}}am-slider-{{theme}}{{else}}am-slider-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}" data-am-slider=\'{{sliderConfig}}\' {{#if id}}id="{{id}}"{{/if}}>\n  <ul class="am-slides">\n    {{#each content}}\n      <li{{#if thumb}} data-thumb="{{thumb}}"{{/if}}>\n        {{#if link}}\n          <a href="{{link}}">\n        {{/if}}\n        {{#if img}}\n        	<img src="{{img}}">\n        {{/if}}\n        {{#if desc}}\n          <div class="am-slider-desc">{{{desc}}}</div>\n        {{/if}}\n        {{#if link}}</a>{{/if}} {{!--/end link--}}\n      </li>\n    {{/each}}\n  </ul>\n</div>\n{{/this}}'),i.registerPartial("sohucs",'{{#this}}\n  <section data-am-widget="sohucs" class="am-sohucs{{#if theme}} am-sohucs-{{theme}}{{else}} am-sohucs-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"{{#if id}} id="{{id}}"{{/if}} data-am-sohucs-appid="{{options.appid}}" data-am-sohucs-conf="{{options.conf}}">\n    <div id="SOHUCS"></div>\n  </section>\n{{/this}}'),i.registerPartial("tabs",'{{#this }}\n  <div data-am-widget="tabs"\n       class="am-tabs{{#if theme}} am-tabs-{{theme}}{{else}} am-tabs-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}"\n       {{#if id}}id="{{id}}"{{/if}}>\n    {{#if content}}\n      <ul class="am-tabs-nav am-cf">\n        {{#each content}}\n          <li class="{{#if active}}am-active{{/if}}"><a href="[data-tab-panel-{{@index}}]">{{{title}}}</a></li>\n        {{/each}}\n      </ul>\n      <div class="am-tabs-bd">\n        {{#each content}}\n          <div data-tab-panel-{{@index}} class="am-tab-panel {{#if active}}am-active{{/if}}">\n            {{{content}}}\n          </div>\n        {{/each}}\n      </div>\n    {{/if}}\n  </div>\n{{/this }}'),i.registerPartial("titlebar",'{{#this}}\n<div data-am-widget="titlebar" class="am-titlebar {{#if theme}}am-titlebar-{{theme}}{{else}}am-titlebar-default{{/if}}{{#if widgetId}} {{widgetId}}{{/if}}{{#if className}} {{className}}{{/if}}" {{#if id}}id="{{id}}"{{/if}}>\n  {{#if content.title}}\n    <h2 class="am-titlebar-title">\n      {{#if content.link}}\n        <a href="{{content.link}}">{{{content.title}}}</a>\n      {{else}}\n        {{{content.title}}}\n      {{/if}}\n    </h2>\n  {{/if}}\n\n  {{#if content.nav}}\n    <nav class="am-titlebar-nav">\n      {{#each content.nav}}\n        <a href="{{link}}" class="{{className}}">{{{title}}}</a>\n      {{/each}}\n    </nav>\n  {{/if}}\n</div>\n{{/this}}')};"undefined"!=typeof module&&module.exports&&(module.exports=i),this.Handlebars&&i(Handlebars)}.call(this);
function SoWave(opt){
  this.opt = opt || {};

  this.K = 2;
  this.F = 6;
  this.speed = this.opt.speed || 0.1;
  this.noise = this.opt.noise || 0;
  this.phase = this.opt.phase || 0;

  if (!devicePixelRatio) devicePixelRatio = 1;
  this.width = devicePixelRatio * (this.opt.width || 320);
  this.height = devicePixelRatio * (this.opt.height || 100);
  this.MAX = (this.height/2)-4;

  this.canvas = document.getElementById('sowave');
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.canvas.style.width = (this.width/devicePixelRatio)+'px';
  this.canvas.style.height = (this.height/devicePixelRatio)+'px';
  //(this.opt.container || document.body).appendChild(this.canvas);
  this.ctx = this.canvas.getContext('2d');

  this.run = false;
}

SoWave.prototype = {

  _globalAttenuationFn: function(x){
    return Math.pow(this.K*4/(this.K*4+Math.pow(x,4)),this.K*2);
  },

  _drawLine: function(attenuation, color, width){
    this.ctx.moveTo(0,0);
    this.ctx.beginPath();
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = width || 1;
    var x, y;
    for (var i=-this.K; i<=this.K; i+=0.01) {
      x = this.width*((i+this.K)/(this.K*2));
      y = this.height/2 + this.noise * this._globalAttenuationFn(i) * (1/attenuation) * Math.sin(this.F*i-this.phase);
      this.ctx.lineTo(x, y);
    }
    this.ctx.stroke();
  },

  _clear: function(){
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.globalCompositeOperation = 'source-over';
  },

  _draw: function(){
    if (!this.run) return;

    this.phase = (this.phase+this.speed)%(Math.PI*64);
    this._clear();
    this._drawLine(-2, 'rgba(255,255,255,0.05)');
    this._drawLine(-6, 'rgba(255,255,255,0.1)');
    this._drawLine(4, 'rgba(255,255,255,0.2');
    this._drawLine(2, 'rgba(255,255,255,0.3)');
    this._drawLine(1, 'rgba(255,255,255,0.5)', 1.5);

    requestAnimationFrame(this._draw.bind(this), 1000);
  },

  start: function(){
    this.phase = 0;
    this.run = true;
    this._draw();
  },

  stop: function(){
    this.run = false;
    this._clear();
  },

  setNoise: function(v){
    this.noise = Math.min(v, 1)*this.MAX;
  },

  setSpeed: function(v){
    this.speed = v;
  },

  set: function(noise, speed) {
    this.setNoise(noise);
    this.setSpeed(speed);
  }

};
(function() {
    // Write your code below.
  var SW = new SoWave({
    width: document.body.clientWidth,
    height: 200
  });
  SW.setSpeed(0.15);
  SW.start();

  var range = document.getElementById('range');
  setInterval(function(){
    SW.setNoise(0.6);
  }, 0);
})(window.Zepto);

$(document).ready(function(){

});
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/

var Handlebars=function(){var a=function(){"use strict";function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){"use strict";function b(a){return h[a]||"&amp;"}function c(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])}function d(a){return a instanceof g?a.toString():a||0===a?(a=""+a,j.test(a)?a.replace(i,b):a):""}function e(a){return a||0===a?m(a)&&0===a.length?!0:!1:!0}var f={},g=a,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,j=/[&<>"'`]/;f.extend=c;var k=Object.prototype.toString;f.toString=k;var l=function(a){return"function"==typeof a};l(/x/)&&(l=function(a){return"function"==typeof a&&"[object Function]"===k.call(a)});var l;f.isFunction=l;var m=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===k.call(a):!1};return f.isArray=m,f.escapeExpression=d,f.isEmpty=e,f}(a),c=function(){"use strict";function a(a,b){var d;b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){"use strict";function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new h("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return m(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):l(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d=b.fn,e=b.inverse,f=0,g="";if(m(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(l(a))for(var h=a.length;h>f;f++)c&&(c.index=f,c.first=0===f,c.last=f===a.length-1),g+=d(a[f],{data:c});else for(var i in a)a.hasOwnProperty(i)&&(c&&(c.key=i,c.index=f,c.first=0===f),g+=d(a[i],{data:c}),f++);return 0===f&&(g=e(this)),g}),a.registerHelper("if",function(a,b){return m(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||g.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return m(a)&&(a=a.call(this)),g.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){p.log(a,b)}var f={},g=a,h=b,i="1.3.0";f.VERSION=i;var j=4;f.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};f.REVISION_CHANGES=k;var l=g.isArray,m=g.isFunction,n=g.toString,o="[object Object]";f.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:p,log:e,registerHelper:function(a,b,c){if(n.call(a)===o){if(c||b)throw new h("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){n.call(a)===o?g.extend(this.partials,a):this.partials[a]=b}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(p.level<=a){var c=p.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};f.logger=p,f.log=e;var q=function(a){var b={};return g.extend(b,a),b};return f.createFrame=q,f}(b,c),e=function(a,b,c){"use strict";function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");var c=function(a,c,d,e,f,g){var h=b.VM.invokePartial.apply(this,arguments);if(null!=h)return h;if(b.compile){var i={helpers:e,partials:f,data:g};return f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,i)}throw new l("The partial "+c+" could not be compiled when running in runtime-only mode")},d={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:b.VM.programWithDepth,noop:b.VM.noop,compilerInfo:null};return function(c,e){e=e||{};var f,g,h=e.partial?e:b;e.partial||(f=e.helpers,g=e.partials);var i=a.call(d,h,c,f,g,e.data);return e.partial||b.VM.checkRevision(d.compilerInfo),i}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.checkRevision=d,j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e),g=function(a){"use strict";function b(a){a=a||{},this.firstLine=a.first_line,this.firstColumn=a.first_column,this.lastColumn=a.last_column,this.lastLine=a.last_line}var c,d=a,e={ProgramNode:function(a,c,d,f){var g,h;3===arguments.length?(f=d,d=null):2===arguments.length&&(f=c,c=null),b.call(this,f),this.type="program",this.statements=a,this.strip={},d?(h=d[0],h?(g={first_line:h.firstLine,last_line:h.lastLine,last_column:h.lastColumn,first_column:h.firstColumn},this.inverse=new e.ProgramNode(d,c,g)):this.inverse=new e.ProgramNode(d,c),this.strip.right=c.left):c&&(this.strip.left=c.right)},MustacheNode:function(a,c,d,f,g){if(b.call(this,g),this.type="mustache",this.strip=f,null!=d&&d.charAt){var h=d.charAt(3)||d.charAt(2);this.escaped="{"!==h&&"&"!==h}else this.escaped=!!d;this.sexpr=a instanceof e.SexprNode?a:new e.SexprNode(a,c),this.sexpr.isRoot=!0,this.id=this.sexpr.id,this.params=this.sexpr.params,this.hash=this.sexpr.hash,this.eligibleHelper=this.sexpr.eligibleHelper,this.isHelper=this.sexpr.isHelper},SexprNode:function(a,c,d){b.call(this,d),this.type="sexpr",this.hash=c;var e=this.id=a[0],f=this.params=a.slice(1),g=this.eligibleHelper=e.isSimple;this.isHelper=g&&(f.length||c)},PartialNode:function(a,c,d,e){b.call(this,e),this.type="partial",this.partialName=a,this.context=c,this.strip=d},BlockNode:function(a,c,e,f,g){if(b.call(this,g),a.sexpr.id.original!==f.path.original)throw new d(a.sexpr.id.original+" doesn't match "+f.path.original,this);this.type="block",this.mustache=a,this.program=c,this.inverse=e,this.strip={left:a.strip.left,right:f.strip.right},(c||e).strip.left=a.strip.right,(e||c).strip.right=f.strip.left,e&&!c&&(this.isInverse=!0)},ContentNode:function(a,c){b.call(this,c),this.type="content",this.string=a},HashNode:function(a,c){b.call(this,c),this.type="hash",this.pairs=a},IdNode:function(a,c){b.call(this,c),this.type="ID";for(var e="",f=[],g=0,h=0,i=a.length;i>h;h++){var j=a[h].part;if(e+=(a[h].separator||"")+j,".."===j||"."===j||"this"===j){if(f.length>0)throw new d("Invalid path: "+e,this);".."===j?g++:this.isScoped=!0}else f.push(j)}this.original=e,this.parts=f,this.string=f.join("."),this.depth=g,this.isSimple=1===a.length&&!this.isScoped&&0===g,this.stringModeValue=this.string},PartialNameNode:function(a,c){b.call(this,c),this.type="PARTIAL_NAME",this.name=a.original},DataNode:function(a,c){b.call(this,c),this.type="DATA",this.id=a},StringNode:function(a,c){b.call(this,c),this.type="STRING",this.original=this.string=this.stringModeValue=a},IntegerNode:function(a,c){b.call(this,c),this.type="INTEGER",this.original=this.integer=a,this.stringModeValue=Number(a)},BooleanNode:function(a,c){b.call(this,c),this.type="BOOLEAN",this.bool=a,this.stringModeValue="true"===a},CommentNode:function(a,c){b.call(this,c),this.type="comment",this.comment=a}};return c=e}(c),h=function(){"use strict";var a,b=function(){function a(a,b){return{left:"~"===a.charAt(2),right:"~"===b.charAt(0)||"~"===b.charAt(1)}}function b(){this.yy={}}var c={trace:function(){},yy:{},symbols_:{error:2,root:3,statements:4,EOF:5,program:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,sexpr:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,CLOSE_UNESCAPED:24,OPEN_PARTIAL:25,partialName:26,partial_option0:27,sexpr_repetition0:28,sexpr_option0:29,dataName:30,param:31,STRING:32,INTEGER:33,BOOLEAN:34,OPEN_SEXPR:35,CLOSE_SEXPR:36,hash:37,hash_repetition_plus0:38,hashSegment:39,ID:40,EQUALS:41,DATA:42,pathSegments:43,SEP:44,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},productions_:[0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],performAction:function(b,c,d,e,f,g){var h=g.length-1;switch(f){case 1:return new e.ProgramNode(g[h-1],this._$);case 2:return new e.ProgramNode([],this._$);case 3:this.$=new e.ProgramNode([],g[h-1],g[h],this._$);break;case 4:this.$=new e.ProgramNode(g[h-2],g[h-1],g[h],this._$);break;case 5:this.$=new e.ProgramNode(g[h-1],g[h],[],this._$);break;case 6:this.$=new e.ProgramNode(g[h],this._$);break;case 7:this.$=new e.ProgramNode([],this._$);break;case 8:this.$=new e.ProgramNode([],this._$);break;case 9:this.$=[g[h]];break;case 10:g[h-1].push(g[h]),this.$=g[h-1];break;case 11:this.$=new e.BlockNode(g[h-2],g[h-1].inverse,g[h-1],g[h],this._$);break;case 12:this.$=new e.BlockNode(g[h-2],g[h-1],g[h-1].inverse,g[h],this._$);break;case 13:this.$=g[h];break;case 14:this.$=g[h];break;case 15:this.$=new e.ContentNode(g[h],this._$);break;case 16:this.$=new e.CommentNode(g[h],this._$);break;case 17:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 18:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 19:this.$={path:g[h-1],strip:a(g[h-2],g[h])};break;case 20:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 21:this.$=new e.MustacheNode(g[h-1],null,g[h-2],a(g[h-2],g[h]),this._$);break;case 22:this.$=new e.PartialNode(g[h-2],g[h-1],a(g[h-3],g[h]),this._$);break;case 23:this.$=a(g[h-1],g[h]);break;case 24:this.$=new e.SexprNode([g[h-2]].concat(g[h-1]),g[h],this._$);break;case 25:this.$=new e.SexprNode([g[h]],null,this._$);break;case 26:this.$=g[h];break;case 27:this.$=new e.StringNode(g[h],this._$);break;case 28:this.$=new e.IntegerNode(g[h],this._$);break;case 29:this.$=new e.BooleanNode(g[h],this._$);break;case 30:this.$=g[h];break;case 31:g[h-1].isHelper=!0,this.$=g[h-1];break;case 32:this.$=new e.HashNode(g[h],this._$);break;case 33:this.$=[g[h-2],g[h]];break;case 34:this.$=new e.PartialNameNode(g[h],this._$);break;case 35:this.$=new e.PartialNameNode(new e.StringNode(g[h],this._$),this._$);break;case 36:this.$=new e.PartialNameNode(new e.IntegerNode(g[h],this._$));break;case 37:this.$=new e.DataNode(g[h],this._$);break;case 38:this.$=new e.IdNode(g[h],this._$);break;case 39:g[h-2].push({part:g[h],separator:g[h-1]}),this.$=g[h-2];break;case 40:this.$=[{part:g[h]}];break;case 43:this.$=[];break;case 44:g[h-1].push(g[h]);break;case 47:this.$=[g[h]];break;case 48:g[h-1].push(g[h])}},table:[{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],defaultActions:{3:[2,2],16:[2,1],50:[2,42]},parseError:function(a){throw new Error(a)},parse:function(a){function b(){var a;return a=c.lexer.lex()||1,"number"!=typeof a&&(a=c.symbols_[a]||a),a}var c=this,d=[0],e=[null],f=[],g=this.table,h="",i=0,j=0,k=0;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var l=this.lexer.yylloc;f.push(l);var m=this.lexer.options&&this.lexer.options.ranges;"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);for(var n,o,p,q,r,s,t,u,v,w={};;){if(p=d[d.length-1],this.defaultActions[p]?q=this.defaultActions[p]:((null===n||"undefined"==typeof n)&&(n=b()),q=g[p]&&g[p][n]),"undefined"==typeof q||!q.length||!q[0]){var x="";if(!k){v=[];for(s in g[p])this.terminals_[s]&&s>2&&v.push("'"+this.terminals_[s]+"'");x=this.lexer.showPosition?"Parse error on line "+(i+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[n]||n)+"'":"Parse error on line "+(i+1)+": Unexpected "+(1==n?"end of input":"'"+(this.terminals_[n]||n)+"'"),this.parseError(x,{text:this.lexer.match,token:this.terminals_[n]||n,line:this.lexer.yylineno,loc:l,expected:v})}}if(q[0]instanceof Array&&q.length>1)throw new Error("Parse Error: multiple actions possible at state: "+p+", token: "+n);switch(q[0]){case 1:d.push(n),e.push(this.lexer.yytext),f.push(this.lexer.yylloc),d.push(q[1]),n=null,o?(n=o,o=null):(j=this.lexer.yyleng,h=this.lexer.yytext,i=this.lexer.yylineno,l=this.lexer.yylloc,k>0&&k--);break;case 2:if(t=this.productions_[q[1]][1],w.$=e[e.length-t],w._$={first_line:f[f.length-(t||1)].first_line,last_line:f[f.length-1].last_line,first_column:f[f.length-(t||1)].first_column,last_column:f[f.length-1].last_column},m&&(w._$.range=[f[f.length-(t||1)].range[0],f[f.length-1].range[1]]),r=this.performAction.call(w,h,j,i,this.yy,q[1],e,f),"undefined"!=typeof r)return r;t&&(d=d.slice(0,-1*t*2),e=e.slice(0,-1*t),f=f.slice(0,-1*t)),d.push(this.productions_[q[1]][0]),e.push(w.$),f.push(w._$),u=g[d[d.length-2]][d[d.length-1]],d.push(u);break;case 3:return!0}}return!0}},d=function(){var a={EOF:1,parseError:function(a,b){if(!this.yy.parser)throw new Error(a);this.yy.parser.parseError(a,b)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var b=a.match(/(?:\r\n?|\n).*/g);return b?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var b=a.length,c=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-b-1),this.offset-=b;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var e=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===d.length?this.yylloc.first_column:0)+d[d.length-c.length].length-c[0].length:this.yylloc.first_column-b},this.options.ranges&&(this.yylloc.range=[e[0],e[0]+this.yyleng-b]),this},more:function(){return this._more=!0,this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=new Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d,e;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),g=0;g<f.length&&(c=this._input.match(this.rules[f[g]]),!c||b&&!(c[0].length>b[0].length)||(b=c,d=g,this.options.flex));g++);return b?(e=b[0].match(/(?:\r\n?|\n).*/g),e&&(this.yylineno+=e.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:e?e[e.length-1].length-e[e.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,f[d],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a?a:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!=typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)}};return a.options={},a.performAction=function(a,b,c,d){function e(a,c){return b.yytext=b.yytext.substr(a,b.yyleng-c)}switch(c){case 0:if("\\\\"===b.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===b.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu"),b.yytext)return 14;break;case 1:return 14;case 2:return this.popState(),14;case 3:return e(0,4),this.popState(),15;case 4:return 35;case 5:return 36;case 6:return 25;case 7:return 16;case 8:return 20;case 9:return 19;case 10:return 19;case 11:return 23;case 12:return 22;case 13:this.popState(),this.begin("com");break;case 14:return e(3,5),this.popState(),15;case 15:return 22;case 16:return 41;case 17:return 40;case 18:return 40;case 19:return 44;case 20:break;case 21:return this.popState(),24;case 22:return this.popState(),18;case 23:return b.yytext=e(1,2).replace(/\\"/g,'"'),32;case 24:return b.yytext=e(1,2).replace(/\\'/g,"'"),32;case 25:return 42;case 26:return 34;case 27:return 34;case 28:return 33;case 29:return 40;case 30:return b.yytext=e(1,2),40;case 31:return"INVALID";case 32:return 5}},a.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],a.conditions={mu:{rules:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[3],inclusive:!1},INITIAL:{rules:[0,1,32],inclusive:!0}},a}();return c.lexer=d,b.prototype=c,c.Parser=b,new b}();return a=b}(),i=function(a,b){"use strict";function c(a){return a.constructor===f.ProgramNode?a:(e.yy=f,e.parse(a))}var d={},e=a,f=b;return d.parser=e,d.parse=c,d}(h,g),j=function(a){"use strict";function b(){}function c(a,b,c){if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new f("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{},"data"in b||(b.data=!0);var d=c.parse(a),e=(new c.Compiler).compile(d,b);return(new c.JavaScriptCompiler).compile(e,b)}function d(a,b,c){function d(){var d=c.parse(a),e=(new c.Compiler).compile(d,b),f=(new c.JavaScriptCompiler).compile(e,b,void 0,!0);return c.template(f)}if(null==a||"string"!=typeof a&&a.constructor!==c.AST.ProgramNode)throw new f("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{},"data"in b||(b.data=!0);var e;return function(a,b){return e||(e=d()),e.call(this,a,b)}}var e={},f=a;return e.Compiler=b,b.prototype={compiler:b,disassemble:function(){for(var a,b,c,d=this.opcodes,e=[],f=0,g=d.length;g>f;f++)if(a=d[f],"DECLARE"===a.opcode)e.push("DECLARE "+a.name+"="+a.value);else{b=[];for(var h=0;h<a.args.length;h++)c=a.args[h],"string"==typeof c&&(c='"'+c.replace("\n","\\n")+'"'),b.push(c);e.push(a.opcode+" "+b.join(" "))}return e.join("\n")},equals:function(a){var b=this.opcodes.length;if(a.opcodes.length!==b)return!1;for(var c=0;b>c;c++){var d=this.opcodes[c],e=a.opcodes[c];if(d.opcode!==e.opcode||d.args.length!==e.args.length)return!1;for(var f=0;f<d.args.length;f++)if(d.args[f]!==e.args[f])return!1}if(b=this.children.length,a.children.length!==b)return!1;for(c=0;b>c;c++)if(!this.children[c].equals(a.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.opcodes=[],this.children=[],this.depths={list:[]},this.options=b;var c=this.options.knownHelpers;if(this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0},c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.accept(a)},accept:function(a){var b,c=a.strip||{};return c.left&&this.opcode("strip"),b=this[a.type](a),c.right&&this.opcode("strip"),b},program:function(a){for(var b=a.statements,c=0,d=b.length;d>c;c++)this.accept(b[c]);return this.isSimple=1===d,this.depths.list=this.depths.list.sort(function(a,b){return a-b}),this},compileProgram:function(a){var b,c=(new this.compiler).compile(a,this.options),d=this.guid++;this.usePartial=this.usePartial||c.usePartial,this.children[d]=c;for(var e=0,f=c.depths.list.length;f>e;e++)b=c.depths.list[e],2>b||this.addDepth(b-1);return d},block:function(a){var b=a.mustache,c=a.program,d=a.inverse;c&&(c=this.compileProgram(c)),d&&(d=this.compileProgram(d));var e=b.sexpr,f=this.classifySexpr(e);"helper"===f?this.helperSexpr(e,c,d):"simple"===f?(this.simpleSexpr(e),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("blockValue")):(this.ambiguousSexpr(e,c,d),this.opcode("pushProgram",c),this.opcode("pushProgram",d),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")},hash:function(a){var b,c,d=a.pairs;this.opcode("pushHash");for(var e=0,f=d.length;f>e;e++)b=d[e],c=b[1],this.options.stringParams?(c.depth&&this.addDepth(c.depth),this.opcode("getContext",c.depth||0),this.opcode("pushStringParam",c.stringModeValue,c.type),"sexpr"===c.type&&this.sexpr(c)):this.accept(c),this.opcode("assignToHash",b[0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0,a.context?this.ID(a.context):this.opcode("push","depth0"),this.opcode("invokePartial",b.name),this.opcode("append")},content:function(a){this.opcode("appendContent",a.string)},mustache:function(a){this.sexpr(a.sexpr),a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(a,b,c){var d=a.id,e=d.parts[0],f=null!=b||null!=c;this.opcode("getContext",d.depth),this.opcode("pushProgram",b),this.opcode("pushProgram",c),this.opcode("invokeAmbiguous",e,f)},simpleSexpr:function(a){var b=a.id;"DATA"===b.type?this.DATA(b):b.parts.length?this.ID(b):(this.addDepth(b.depth),this.opcode("getContext",b.depth),this.opcode("pushContext")),this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){var d=this.setupFullMustacheParams(a,b,c),e=a.id.parts[0];if(this.options.knownHelpers[e])this.opcode("invokeKnownHelper",d.length,e);else{if(this.options.knownHelpersOnly)throw new f("You specified knownHelpersOnly, but used the unknown helper "+e,a);this.opcode("invokeHelper",d.length,e,a.isRoot)}},sexpr:function(a){var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ID:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth);var b=a.parts[0];b?this.opcode("lookupOnContext",a.parts[0]):this.opcode("pushContext");for(var c=1,d=a.parts.length;d>c;c++)this.opcode("lookup",a.parts[c])},DATA:function(a){if(this.options.data=!0,a.id.isScoped||a.id.depth)throw new f("Scoped data references are not supported: "+a.original,a);this.opcode("lookupData");for(var b=a.id.parts,c=0,d=b.length;d>c;c++)this.opcode("lookup",b[c])},STRING:function(a){this.opcode("pushString",a.string)},INTEGER:function(a){this.opcode("pushLiteral",a.integer)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:[].slice.call(arguments,1)})},declare:function(a,b){this.opcodes.push({opcode:"DECLARE",name:a,value:b})},addDepth:function(a){0!==a&&(this.depths[a]||(this.depths[a]=!0,this.depths.list.push(a)))},classifySexpr:function(a){var b=a.isHelper,c=a.eligibleHelper,d=this.options;if(c&&!b){var e=a.id.parts[0];d.knownHelpers[e]?b=!0:d.knownHelpersOnly&&(c=!1)}return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b,c=a.length;c--;)b=a[c],this.options.stringParams?(b.depth&&this.addDepth(b.depth),this.opcode("getContext",b.depth||0),this.opcode("pushStringParam",b.stringModeValue,b.type),"sexpr"===b.type&&this.sexpr(b)):this[b.type](b)},setupFullMustacheParams:function(a,b,c){var d=a.params;return this.pushParams(d),this.opcode("pushProgram",b),this.opcode("pushProgram",c),a.hash?this.hash(a.hash):this.opcode("emptyHash"),d}},e.precompile=c,e.compile=d,e}(c),k=function(a,b){"use strict";function c(a){this.value=a}function d(){}var e,f=a.COMPILER_REVISION,g=a.REVISION_CHANGES,h=a.log,i=b;d.prototype={nameLookup:function(a,b){var c,e;return 0===a.indexOf("depth")&&(c=!0),e=/^[0-9]+$/.test(b)?a+"["+b+"]":d.isValidJavaScriptVariableName(b)?a+"."+b:a+"['"+b+"']",c?"("+a+" && "+e+")":e},compilerInfo:function(){var a=f,b=g[a];return"this.compilerInfo = ["+a+",'"+b+"'];\n"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=a,this.options=b||{},h("debug",this.environment.disassemble()+"\n\n"),this.name=this.environment.name,this.isChild=!!c,this.context=c||{programs:[],environments:[],aliases:{}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.compileChildren(a,b);
var e,f=a.opcodes;this.i=0;for(var g=f.length;this.i<g;this.i++)e=f[this.i],"DECLARE"===e.opcode?this[e.name]=e.value:this[e.opcode].apply(this,e.args),e.opcode!==this.stripNext&&(this.stripNext=!1);if(this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new i("Compile completed with content left on stack");return this.createFunctionContext(d)},preamble:function(){var a=[];if(this.isChild)a.push("");else{var b=this.namespace,c="helpers = this.merge(helpers, "+b+".helpers);";this.environment.usePartial&&(c=c+" partials = this.merge(partials, "+b+".partials);"),this.options.data&&(c+=" data = data || {};"),a.push(c)}this.environment.isSimple?a.push(""):a.push(", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=a},createFunctionContext:function(a){var b=this.stackVars.concat(this.registers.list);if(b.length>0&&(this.source[1]=this.source[1]+", "+b.join(", ")),!this.isChild)for(var c in this.context.aliases)this.context.aliases.hasOwnProperty(c)&&(this.source[1]=this.source[1]+", "+c+"="+this.context.aliases[c]);this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.pushSource("return buffer;");for(var d=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"],e=0,f=this.environment.depths.list.length;f>e;e++)d.push("depth"+this.environment.depths.list[e]);var g=this.mergeSource();if(this.isChild||(g=this.compilerInfo()+g),a)return d.push(g),Function.apply(this,d);var i="function "+(this.name||"")+"("+d.join(",")+") {\n  "+g+"}";return h("debug",i+"\n\n"),i},mergeSource:function(){for(var a,b="",c=0,d=this.source.length;d>c;c++){var e=this.source[c];e.appendToBuffer?a=a?a+"\n    + "+e.content:e.content:(a&&(b+="buffer += "+a+";\n  ",a=void 0),b+=e+"\n  ")}return b},blockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a),this.replaceStack(function(b){return a.splice(1,0,b),"blockHelperMissing.call("+a.join(", ")+")"})},ambiguousBlockValue:function(){this.context.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=["depth0"];this.setupParams(0,a);var b=this.topStack();a.splice(1,0,b),this.pushSource("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+a.join(", ")+"); }")},appendContent:function(a){this.pendingContent&&(a=this.pendingContent+a),this.stripNext&&(a=a.replace(/^\s+/,"")),this.pendingContent=a},strip:function(){this.pendingContent&&(this.pendingContent=this.pendingContent.replace(/\s+$/,"")),this.stripNext="strip"},append:function(){this.flushInline();var a=this.popStack();this.pushSource("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }"),this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.context.aliases.escapeExpression="this.escapeExpression",this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext!==a&&(this.lastContext=a)},lookupOnContext:function(a){this.push(this.nameLookup("depth"+this.lastContext,a,"context"))},pushContext:function(){this.pushStackLiteral("depth"+this.lastContext)},resolvePossibleLambda:function(){this.context.aliases.functionType='"function"',this.replaceStack(function(a){return"typeof "+a+" === functionType ? "+a+".apply(depth0) : "+a})},lookup:function(a){this.replaceStack(function(b){return b+" == null || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")})},lookupData:function(){this.pushStackLiteral("data")},pushStringParam:function(a,b){this.pushStackLiteral("depth"+this.lastContext),this.pushString(b),"sexpr"!==b&&("string"==typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(){this.pushStackLiteral("{}"),this.options.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop(),this.options.stringParams&&(this.push("{"+a.contexts.join(",")+"}"),this.push("{"+a.types.join(",")+"}")),this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){return this.inlineStack.push(a),a},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b,c){this.context.aliases.helperMissing="helpers.helperMissing",this.useRegister("helper");var d=this.lastHelper=this.setupHelper(a,b,!0),e=this.nameLookup("depth"+this.lastContext,b,"context"),f="helper = "+d.name+" || "+e;d.paramsInit&&(f+=","+d.paramsInit),this.push("("+f+",helper ? helper.call("+d.callParams+") : helperMissing.call("+d.helperMissingParams+"))"),c||this.flushInline()},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a,b){this.context.aliases.functionType='"function"',this.useRegister("helper"),this.emptyHash();var c=this.setupHelper(0,a,b),d=this.lastHelper=this.nameLookup("helpers",a,"helper"),e=this.nameLookup("depth"+this.lastContext,a,"context"),f=this.nextStack();c.paramsInit&&this.pushSource(c.paramsInit),this.pushSource("if (helper = "+d+") { "+f+" = helper.call("+c.callParams+"); }"),this.pushSource("else { helper = "+e+"; "+f+" = typeof helper === functionType ? helper.call("+c.callParams+") : helper; }")},invokePartial:function(a){var b=[this.nameLookup("partials",a,"partial"),"'"+a+"'",this.popStack(),"helpers","partials"];this.options.data&&b.push("data"),this.context.aliases.self="this",this.push("self.invokePartial("+b.join(", ")+")")},assignToHash:function(a){var b,c,d=this.popStack();this.options.stringParams&&(c=this.popStack(),b=this.popStack());var e=this.hash;b&&e.contexts.push("'"+a+"': "+b),c&&e.types.push("'"+a+"': "+c),e.values.push("'"+a+"': ("+d+")")},compiler:d,compileChildren:function(a,b){for(var c,d,e=a.children,f=0,g=e.length;g>f;f++){c=e[f],d=new this.compiler;var h=this.matchExistingProgram(c);null==h?(this.context.programs.push(""),h=this.context.programs.length,c.index=h,c.name="program"+h,this.context.programs[h]=d.compile(c,b,this.context),this.context.environments[h]=c):(c.index=h,c.name="program"+h)}},matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;c>b;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){if(this.context.aliases.self="this",null==a)return"self.noop";for(var b,c=this.environment.children[a],d=c.depths.list,e=[c.index,c.name,"data"],f=0,g=d.length;g>f;f++)b=d[f],1===b?e.push("depth0"):e.push("depth"+(b-1));return(0===d.length?"self.program(":"self.programWithDepth(")+e.join(", ")+")"},register:function(a,b){this.useRegister(a),this.pushSource(a+" = "+b+";")},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new c(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),this.pendingContent=void 0),a&&this.source.push(a)},pushStack:function(a){this.flushInline();var b=this.incrStack();return a&&this.pushSource(b+" = "+a+";"),this.compileStack.push(b),b},replaceStack:function(a){var b,d,e,f="",g=this.isInline();if(g){var h=this.popStack(!0);if(h instanceof c)b=h.value,e=!0;else{d=!this.stackSlot;var i=d?this.incrStack():this.topStackName();f="("+this.push(i)+" = "+h+"),",b=this.topStack()}}else b=this.topStack();var j=a.call(this,b);return g?(e||this.popStack(),d&&this.stackSlot--,this.push("("+f+j+")")):(/^stack/.test(b)||(b=this.nextStack()),this.pushSource(b+" = ("+f+j+");")),b},nextStack:function(){return this.pushStack()},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;if(a.length){this.inlineStack=[];for(var b=0,d=a.length;d>b;b++){var e=a[b];e instanceof c?this.compileStack.push(e):this.pushStack(e)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=this.isInline(),d=(b?this.inlineStack:this.compileStack).pop();if(!a&&d instanceof c)return d.value;if(!b){if(!this.stackSlot)throw new i("Invalid stack pop");this.stackSlot--}return d},topStack:function(a){var b=this.isInline()?this.inlineStack:this.compileStack,d=b[b.length-1];return!a&&d instanceof c?d.value:d},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},setupHelper:function(a,b,c){var d=[],e=this.setupParams(a,d,c),f=this.nameLookup("helpers",b,"helper");return{params:d,paramsInit:e,name:f,callParams:["depth0"].concat(d).join(", "),helperMissingParams:c&&["depth0",this.quotedString(b)].concat(d).join(", ")}},setupOptions:function(a,b){var c,d,e,f=[],g=[],h=[];f.push("hash:"+this.popStack()),this.options.stringParams&&(f.push("hashTypes:"+this.popStack()),f.push("hashContexts:"+this.popStack())),d=this.popStack(),e=this.popStack(),(e||d)&&(e||(this.context.aliases.self="this",e="self.noop"),d||(this.context.aliases.self="this",d="self.noop"),f.push("inverse:"+d),f.push("fn:"+e));for(var i=0;a>i;i++)c=this.popStack(),b.push(c),this.options.stringParams&&(h.push(this.popStack()),g.push(this.popStack()));return this.options.stringParams&&(f.push("contexts:["+g.join(",")+"]"),f.push("types:["+h.join(",")+"]")),this.options.data&&f.push("data:data"),f},setupParams:function(a,b,c){var d="{"+this.setupOptions(a,b).join(",")+"}";return c?(this.useRegister("options"),b.push("options"),"options="+d):(b.push(d),"")}};for(var j="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),k=d.RESERVED_WORDS={},l=0,m=j.length;m>l;l++)k[j[l]]=!0;return d.isValidJavaScriptVariableName=function(a){return!d.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a)?!0:!1},e=d}(d,c),l=function(a,b,c,d,e){"use strict";var f,g=a,h=b,i=c.parser,j=c.parse,k=d.Compiler,l=d.compile,m=d.precompile,n=e,o=g.create,p=function(){var a=o();return a.compile=function(b,c){return l(b,c,a)},a.precompile=function(b,c){return m(b,c,a)},a.AST=h,a.Compiler=k,a.JavaScriptCompiler=n,a.Parser=i,a.parse=j,a};return g=p(),g.create=p,f=g}(f,g,i,j,k);return l}();
/* Zepto v1.1.4 - zepto event ajax form ie - zeptojs.com/license */

var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||"object"}function Z(t){return"function"==L(t)}function $(t){return null!=t&&t==t.window}function _(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function D(t){return"object"==L(t)}function R(t){return D(t)&&!$(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length>0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function H(t,e){return"number"!=typeof e||c[F(t)]?e:e+"px"}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&&(R(i[e])||A(i[e]))?(R(i[e])&&!R(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i>n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),R(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return _(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=$,n.isArray=A,n.isPlainObject=R,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return z(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?"object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):[]},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:T.matches(i,t));)i=i!==e&&!_(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!_(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck("parentNode")),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return"string"!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&&1===this[0].nodeType?!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&&X(this,t)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&&this[0][t]},data:function(e,n){var i="data-"+e.replace(m,"-$1").toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==L(t))i||0===i?a=F(t)+":"+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+":"+H(e,t[e])+";":this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&W(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?W(this,""):(i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t)," ")}),void W(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?$(s)?s["inner"+i]:_(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),"object"==t||"array"==t||null==e?e:T.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&&G(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&&i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function T(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?T(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n);var s=n.dataType,a=/\?.+=\?/.test(n.url);if(a&&(s="jsonp"),n.cache!==!1&&(e&&e.cache===!0||"script"!=s&&"jsonp"!=s)||(n.url=w(n.url,"_="+Date.now())),"jsonp"==s)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var S="async"in n?n.async:!0;d.open(n.type,n.url,S,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var S=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(S(t)+"="+S(e))},T(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){t.fn.serializeArray=function(){var n,e=[];return t([].slice.call(this.get(0).elements)).each(function(){n=t(this);var i=n.attr("type");"fieldset"!=this.nodeName.toLowerCase()&&!this.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&("radio"!=i&&"checkbox"!=i||this.checked)&&e.push({name:n.attr("name"),value:n.val()})}),e},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(e)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){"__proto__"in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||"",e.__Z=!0,e},isZ:function(e){return"array"===t.type(e)&&"__Z"in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);
