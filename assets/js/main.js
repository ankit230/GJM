function getIOSVersion(e) { return e = e || navigator.userAgent, parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(e) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || !1 }

function smoothScroll() { var e = $(window);
    e.on("mousewheel DOMMouseScroll", function(i) { i.preventDefault(); var o = i.originalEvent.wheelDelta / 120 || -i.originalEvent.detail / 3,
            a = e.scrollTop() - parseInt(350 * o);
        TweenMax.to(e, 1, { scrollTo: { y: a, autoKill: !0 }, ease: Expo.easeOut, autoKill: !0, overwrite: 5 }) }) }
$.holdReady(!0), $("body").imagesLoaded({ background: ".background-holder" }, function() { $("#preloader").removeClass("loading"), $.holdReady(!1), setTimeout(function() { $("#preloader").remove() }, 800) }), $(window).on("load", function() { $("*[data-inertia]").each(function() {}) });
var phone, touch, ltie9, dh, ar, fonts, ieMobile, ua = navigator.userAgent,
    winLoc = window.location.toString(),
    is_webkit = ua.match(/webkit/i),
    is_firefox = ua.match(/gecko/i),
    is_newer_ie = ua.match(/msie (9|([1-9][0-9]))/i),
    is_older_ie = ua.match(/msie/i) && !is_newer_ie,
    is_ancient_ie = ua.match(/msie 6/i),
    is_ie = is_ancient_ie || is_older_ie || is_newer_ie,
    is_mobile_ie = -1 !== navigator.userAgent.indexOf("IEMobile"),
    is_mobile = ua.match(/mobile/i),
    is_OSX = !!ua.match(/(iPad|iPhone|iPod|Macintosh)/g),
    iOS = getIOSVersion(ua),
    is_EDGE = /Edge\/12./i.test(navigator.userAgent);
$(document).ready(function() { var e = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
        i = "undefined" != typeof InstallTrigger,
        o = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window["safari"] || safari.pushNotification).toString(),
        a = !!document.documentMode,
        t = !a && !!window.StyleMedia,
        n = !!window.chrome && !!window.chrome.webstore,
        r = (n || e) && !!window.CSS;
    e && $("html").addClass("opera"), i && $("html").addClass("firefox"), o && $("html").addClass("safari"), a && $("html").addClass("ie"), t && $("html").addClass("edge"), n && $("html").addClass("chrome"), r && $("html").addClass("blink") }), $(document).ready(function() { is_EDGE || Modernizr.touchevents || is_mobile_ie || is_OSX || smoothScroll() });