window.cubcsacompatVersion = "3";
window.cubcsapacketVersion = "1";
window.cubcsauseCorsForInitialRequest = "1";
window.cubcsauseJsonFormatForInitialCorsRequest = "1";
window.CelebrusDataPrivacy = { MAY_CONTAIN_PERSONAL_DATA: 1, ANONYMOUS_DATA_ONLY: 2 };
window.cubcsaoptOut = function(a) { window.localStorage && window.localStorage.setItem("cubcsaP3P", "optedOut"); var b = new Date;
    b.setFullYear(b.getFullYear() + 20);
    window.cubcsaSC("cubcsaP3P=optedOut", b.toGMTString());
    a && window.cubcsaSC("cubcsaP3P=optedOut", b.toGMTString(), "", "", "", "", a, !1);
    window.cubcsastopEvents && window.cubcsastopEvents();
    window.cubcsadoReInit ? window.cubcsadoReInit() : window.cubcsaGo && !window.cubcsawid && cubcsaGo() };
window.cubcsaoptIn = function(a) { window.localStorage && window.localStorage.setItem("cubcsaP3P", "optedIn"); var b = new Date;
    b.setFullYear(b.getFullYear() + 20);
    window.cubcsaSC("cubcsaP3P=optedIn", b.toGMTString());
    a && window.cubcsaSC("cubcsaP3P=optedIn", b.toGMTString(), "", "", "", "", a, !1);
    window.cubcsadoReInit ? window.cubcsadoReInit() : window.cubcsaGo && !window.cubcsawid && cubcsaGo() };
window.cubcsaanonymous = function(a) { window.localStorage && window.localStorage.setItem("cubcsaP3P", "anonymous"); var b = new Date;
    b.setFullYear(b.getFullYear() + 20);
    window.cubcsaSC("cubcsaP3P=anonymous", b.toGMTString());
    a && window.cubcsaSC("cubcsaP3P=anonymous", b.toGMTString(), "", "", "", "", a, !1);
    window.cubcsadoReInit ? window.cubcsadoReInit() : window.cubcsaGo && !window.cubcsawid && cubcsaGo() };

function cubcsasessionShutdownPeriodExceeded() { var a = !1,
        a = document.cookie ? -1 < document.cookie.indexOf("cubcsaSF=") : null != window.sessionStorage.getItem("cubcsaSF"); if (!a) return !1;
    a = window.cubcsafindCookieVal("cubcsaSF");
    a = parseInt(a, 10); return -1 == a || isNaN(a) ? !1 : Math.abs((new Date).valueOf() - a) > 10800000 ? !0 : !1 }

function cubcsaperiodicAssessShutdownState() {
    window.cubcsafindCookieVal("cubcsaSF") && (window.cubcsasessionShutdownPeriodExceeded() ? (window.cubcsadoDeleteCookie && window.cubcsadoDeleteCookie("cubcsaSF"), window.cubcsalstActv = (new Date).valueOf(), window.cubcsaqNI = !0, window.cubcsafindCookieVal("cubcsaP3P", 1), window.cubcsaresetCSA && window.cubcsaresetCSA(), window.cubcsadoReInit && window.cubcsadoReInit()) : window.setTimeout(cubcsaperiodicAssessShutdownState,
        1E4))
}
var cubcsaGL = -1 == document.cookie.indexOf("cubcsaSF=") && -1 == document.cookie.indexOf("cubcsaStopFlag=y") && -2 != window.cubcsasn;
window.cubcsapendingManualEvents || (window.cubcsapendingManualEvents = []);
window.cubcsaqueuedYoutubeReferences || (window.cubcsaqueuedYoutubeReferences = []);
window.cubcsasn || (window.cubcsaevent = function(a) { window.cubcsapendingManualEvents.push({ eventTypeIdentifier: "basket", payload: a }) }, window.cubcsaclick = function(a) { a && window.cubcsapendingManualEvents.push({ eventTypeIdentifier: "click", payload: a }) }, window.cubcsatextchange = function(a) { a && window.cubcsapendingManualEvents.push({ eventTypeIdentifier: "textchange", payload: a }) }, window.cubcsaformsubmit = function(a) {
    window.cubcsapendingManualEvents.push({
        eventTypeIdentifier: "formsubmit",
        payload: a
    })
}, window.cubcsaSendJsonData = function(a, b) { window.cubcsapendingManualEvents.push({ eventTypeIdentifier: "jsondata", payload: a, dataPrivacyVal: b }) }, window.cubcsatrackYouTubeIframePlayer = function(a, b) { window.cubcsaqueuedYoutubeReferences.push({ playerRef: a, playerIdentifier: b }) });
window.cubcsainitialExecutionCanProceed = function() { return 1 == cubcsaGL ? window.cubcsawindowID ? !1 : !0 : !1 };
window.cubcsablockExecutionForInsertAlreadyPresent = function() { return window.cubcsagetSD ? !0 : !1 };
window.cubcsaSL = function() {
    function a() {
        h.cubcsawindowID = "_" + (new Date).getTime() + "0." + window.cubcsagenerateUUID() + "_";
        var l = window.cubcsafindCookieVal("cubcsasession"),
            g = window.cubcsafindCookieVal("cubcsapersisted"),
            a = window.cubcsafindCookieVal("usy46gabsosd"),
            c, f, b, d, k, m = !1,
            n = !1;
        a && (m = !0);
        l && (n = !0);
        var e = l ? l.split("_") : null;
        if (e && 5 == e.length) c = "x" + e[0] + "_" + e[3], f = e[1], b = e[2], d = e[3], k = e[4], z = d, B = c;
        else {
            for (c = "" + Math.floor(9999 * Math.random() + 1); 4 > c.length;) c = "0" + c;
            a &&
                (c = z, d = window.cubcsafindCookieVal("usy46gabsosd")) && (e = d.lastIndexOf("_"), -1 != e && (d = d.substring(e + 1), c = 4 == d.length && d.match(P) ? d : c));
            z = c;
            B = h.cubcsawindowID + z;
            try { h.top.name || (h.top.name = h.cubcsawindowID) } catch (q) {}
            c = B;
            d = z
        }
        return { sessionInfo: c, lastActivityTS: f, sessionStartTS: b, loadBalancerID: d, sessionKey: k, sessionCookieVal: l, persistedCookieVal: g, legacyCookieVal: a, foundLegacyCookie: m, foundSessionCookie: n }
    }

    function b() {
        var l = window.cubcsafindCookieVal("cubcsapersisted");
        if (l) {
            var g =
                l.split("_");
            return 7 != g.length ? null : { dbID: g[0], rtID: g[1], udID: g[2], acqTS: g[3], recSN: g[4], recTS: g[5], frq: g[6], cookieVal: l }
        }
        return null
    }

    function d() { if (H) { var l = "_";
            H.dbID && (l = H.dbID + l);
            H.rtID && (l += H.rtID); return l } return window.cubcsafindCookieVal("cubcsaDBID", 1) }

    function k() { return r && r.sessionKey ? r.sessionKey : window.cubcsafindCookieVal("cubcsakey") }

    function f(l) { return J ? (l = J(l), l = l.replace(/'/g, "%27"), l = l.replace(/~/g, "%7E")) : escape(l) }

    function n(l) {
        return "https:" == ("" + location.protocol).toLowerCase() ||
            1 == h.cubcsaForceSecure ? "cubcsassl" + l : "cubcsatcp" + l
    }

    function e(l) { l = n(l); try { if (h.sessionStorage) { var g = h.sessionStorage.getItem(l); if (g) return "" + g } } catch (a) {} return "" }

    function q(l, g) { var a = n(l); try { h.sessionStorage && h.sessionStorage.setItem(a, g) } catch (c) {} }

    function m() { try { var l = e("lastProcessPointer"),
                g = parseInt(l); return isNaN(g) ? 0 : g } catch (a) { return 0 } }

    function y() { try { var l = e("lastQueuePointer"),
                a = parseInt(l); return isNaN(a) ? 0 : a } catch (d) { return 0 } }

    function u() {
        var l = m(),
            a = y();
        if (l <
            a) try { var d = parseInt(e("lastProcessPointer"));
            isNaN(d) && (d = 0);
            d++;
            q("lastProcessPointer", "" + d) } catch (c) {}
    }

    function w() { var l = "" + m() % 50,
            a = ""; try { a = e(l) } catch (c) {} try { var d = n(l); try { h.sessionStorage && h.sessionStorage.removeItem(d) } catch (c) {} } catch (c) {} return a }

    function v(l) { l = l.replace(/&/g, "+");
        l = l.replace(/%/g, "q");
        l = l.replace(/(..)(..)/g, "$2$1");
        l = l.replace(/(........)(.....)/g, "$2$1"); var a = d(),
            b = k();
        b && (a += "_" + b); return l = "z=" + f(a) + "&y=" + l }

    function t(a, g) {
        return a ? -1 !== a.indexOf(g, a.length - g.length) :
            !1
    }

    function A(a) {
        function g() { u();
            c() }

        function d() { u();
            c() }

        function c() {
            var c = w();
            if (c) {
                window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logEventQueued(c);
                var b;
                var f = Q;
                try { var e = "https://adc.cathaybk.com.tw";
                    t(c, ":http") && (e = "http://adc.cathaybk.com.tw"); var e = e + "/" + z + "/",
                        c = v(c),
                        k = "ZDY21YGC90LI/uw2jde932.bmp?";
                    f && (k = "1" == cubcsauseJsonFormatForInitialCorsRequest ? "AEZ32ZHD01MJ/jsEvent.json?" : "AEZ32ZHD01MJ/jsEvent.js?");
                    b = e + k + c } catch (m) { b = null }
                if (b)
                    if (Q) R(b, g, d);
                    else {
                        null == h.cubcsasImgArr[0] && (h.cubcsasImgArr[0] = new Image,
                            c = h.cubcsasImgArr[0], c.attachEvent ? c.attachEvent("onload", g) : c.addEventListener && c.addEventListener("load", g, !1), c = h.cubcsasImgArr[0], f = d, c.attachEvent ? c.attachEvent("onerror", f) : c.addEventListener && c.addEventListener("error", f, !1));
                        try { h.cubcsasImgArr[0].src = b } catch (m) { d() }
                    }
                else d()
            } else a()
        }
        h.cubcsasImgArr = [];
        c()
    }

    function E(a, g, d, c) { return (g = window.cubcsafindCookieVal(a)) ? a + "=" + g : "" }

    function C(a, g) { "" != g && ("" != a && (a += "; "), a += g); return a }

    function R(a, g, d) {
        var c = a.indexOf("?"),
            b = "",
            f = ""; - 1 == c ? b = a : (b = a.substring(0, c), f = a.substring(c + 1));
        var e = new XMLHttpRequest;
        e.open("POST", b, !0);
        e.withCredentials = !0;
        e.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        g && (e.onload = function() { g(e) });
        d && (e.onerror = function() { d(e) });
        try { e.send(f) } catch (k) {}
    }
    if (!window.cubcsablockExecutionForInsertAlreadyPresent()) {
        var h = window,
            K = document,
            U = location,
            T = K.cookie,
            z = "",
            B = "",
            P = /^[a-z0-9]+$/i;
        h.cubcsaLF = !0;
        h.cubcsaTCP = "http://adc.cathaybk.com.tw";
        h.cubcsaSSL = "https://adc.cathaybk.com.tw";
        h.cubcsagPr = function(a) {
            var g =
                ("" + U.protocol).toLowerCase();
            if ("https:" == g) return "https://adc.cathaybk.com.tw";
            a || (a = g);
            1 == h.cubcsaForceSecure && (a = "https:");
            return "http:" == a || "http" == a ? "http://adc.cathaybk.com.tw" : "https://adc.cathaybk.com.tw"
        };
        window.cubcsaclearStoppedState = function() { window.cubcsadoDeleteCookie && window.cubcsadoDeleteCookie("cubcsaSF") };
        window.cubcsastop = function() {
            window.cubcsadeleteSessionCookie && window.cubcsadeleteSessionCookie();
            if (document.cookie) window.cubcsaSC && window.cubcsadoDeleteCookie("cubcsakey");
            else try {
                window.sessionStorage &&
                    window.sessionStorage.removeItem("cubcsakey")
            } catch (a) {}
            window.cubcsaoTP = !1;
            window.cubcsaSC && window.cubcsaSC("cubcsaSF=" + (new Date).valueOf())
        };
        var J = h.encodeURIComponent,
            r = "",
            H = "";
        window.cubcsacookieList = [];
        h.cubcsagC = function(a) {
            var g = "usy46gabsosd cubcsauvt cubcsaDBID cubcsakey cubcsasession cubcsapersisted cubcsaP3P".split(" "),
                d = "";
            if (true) {
                for (var c = document.cookie, b = 0; b < g.length; b++) {
                    var f =
                        E(g[b], a);
                    f && (d = C(d, f), c = -1 < c.indexOf(f + "; ") ? c.replace(f + "; ", "") : -1 < c.indexOf(f + ";") ? c.replace(f + ";", "") : c.replace(f, ""))
                }
                return { celebrusCookies: d, siteCookies: c }
            }
            g = "usy46gabsosd cubcsauvt cubcsaDBID cubcsakey cubcsasession cubcsapersisted cubcsaP3P".split(" ");
            for (b = 0; b < g.length; b++)(f = E(g[b], a)) && (d = C(d, f));
            g = "";
            if (0 < window.cubcsacookieList.length)
                for (c = 0, b = window.cubcsacookieList.length; c < b; c++)(f = E(window.cubcsacookieList[c], a)) && (g = C(g, f));
            return {
                celebrusCookies: d,
                siteCookies: g
            }
        };
        h.cubcsaae = function() { h.cubcsawid || ((new Date).valueOf() - h.cubcsaTm > 30000 ? 0 === h.frames.length && window.cubcsadoDeleteCookie && (window.cubcsadoDeleteCookie("usy46gabsosd"), window.cubcsadoDeleteCookie("cubcsasession"), h.cubcsaSC("cubcsaSF=" + (new Date).valueOf()), cubcsaperiodicAssessShutdownState()) : h.setTimeout(h.cubcsaae, 2E3)) };
        h.cubcsaclient_event = function(a, g) {
            if (!(-1 < document.cookie.indexOf("cubcsaSF="))) {
                var d = window;
                d.cubcsaqueueUserEvent ? d.cubcsaqueueUserEvent(a, g) : d.setTimeout("cubcsaclient_event('" + a + "','" + g + "');", 500)
            }
        };
        h.cubcsaGP = function(a) { return null };
        h.cubcsaGPWID = function(a) { return a.cubcsawindowID };
        h.cubcsaexecuteJsonResponse = function(a, d) {
            var b = a,
                c = window.cubcsawid;
            d || (b = JSON.parse(a));
            var f = b.windowVariables,
                e;
            for (e in f) 0 === e.indexOf("cubcsa") && (window[e] = "cubcsauSC" == e || "cubcsauseCors" == e || "cubcsadoCapture" == e || "cubcsalookups" == e || "cubcsauseJsonFormatRequest" ==
                e ? "true" == f[e] : "cubcsaidl" == e || "cubcsasST" == e || "cubcsamST" == e ? parseInt(f[e], 10) : f[e]);
            if (f = b.queueNavigatorInfo) window.cubcsaqNI = f;
            if (b.isExcludedFromSample && cubcsasetShutdown) cubcsasetShutdown();
            else {
                (f = b.isMinimalCookieFormat) ? (window.cubcsadeleteLegacyCookies && window.cubcsadeleteLegacyCookies(), cubcsasessionset(b.sessionCookieValue)) : (cubcsalegacyset(b.sn, b.lastActivityTs, b.sessionStartTs, b.lbId), cubcsakeyset(b.sessionKey));
                window.cubcsadoCelebrusInsertInvocation &&
                    window.cubcsadoCelebrusInsertInvocation(c);
                if (c = b.persistedCookieValues) f ? cubcsapersisted(c.dbID, c.rtId, c.acq, c.sn, c.cookieName, c.cookieExpiry, c.frq, c.acqTS, c.recTS, c.trackDevices) : (c.trackDevices ? cubcsauvt(c.acq, c.sn, c.cookieExpiry, c.acqTS, c.recTS) : cubcsadoDeleteCookie && cubcsadoDeleteCookie("cubcsauvt"), cubcsadoDeleteCookie && cubcsadoDeleteCookie("cubcsaDBID"), cubcsaDBIDset(c.dbID + "_" + c.rtId, c.cookieExpiry));
                if (b.contentResponse && window.cubcsaRTEHandler) {
                    c = [];
                    try { c = JSON.parse(b.contentResponse) } catch (k) {}
                    try { window.cubcsaRTEHandler.handleResponse(c) } catch (k) {}
                }
            }
        };
        h.cubcsadynamicCreateScript = function(a, b, d) { var c = document; if (c.getElementById) { var f = c.getElementsByTagName("head").item(0);
                f && (c = c.createElement("SCRIPT"), c.type = "text/javascript", c.id = a, b && (c.src = b), d && (c.text = d), f.appendChild(c)) } };
        h.cubcsaLC = function(a, b) {
            "cubcsacsaId" != b && window.cubcsaisCorsPermitted() ? R(a, function(a) {
                200 === a.status && (a = a.responseText, window.cubcsaisCorsPermitted() &&
                    "1" == window.cubcsauseJsonFormatForInitialCorsRequest ? a && window.cubcsaexecuteJsonResponse(a) : window.cubcsadynamicCreateScript(b, "", a))
            }, null) : window.cubcsadynamicCreateScript(b, a, "")
        };
        window.cubcsaisCorsPermitted = function() { if ("function" == typeof XMLHttpRequest || "object" == typeof XMLHttpRequest) { var a = new XMLHttpRequest; return "1" == window.cubcsauseCorsForInitialRequest && "withCredentials" in a } return !1 };
        var Q = window.sessionStorage && window.cubcsaisCorsPermitted();
        h.cubcsaGP =
            function(a) { try { return a === a.parent ? null : a.parent } catch (b) {} return null };
        h.cubcsaTWID = "AUTOSET";
        window.cubcsaresetCSA = function() { window.cubcsadoResetCSA && window.cubcsadoResetCSA() };
        window.cubcsadoReInit = function(a) {
            window.cubcsaclearStoppedState && window.cubcsaclearStoppedState();
            h.cubcsalstActv = (new Date).valueOf();
            window.cubcsafindCookieVal("cubcsaP3P", 1);
            window.cubcsaresetCSA && window.cubcsaresetCSA();
            if (a) {
                window.cubcsadeleteSessionCookie && window.cubcsadeleteSessionCookie();
                a = y();
                var b = "";
                try { b = e("" + a % 50) } catch (c) {}
                b && (a++, q("lastQueuePointer", "" + a))
            }
            if (window.cubcsaAppBridgeV2) { window.cubcsaawaitingAppResponse = !0; try { var d = window.cubcsafindCookieVal("cubcsapersisted");
                    window.cubcsaAppBridgeV2.requestSessionInformation(location.href, d, window.cubcsawindowId, !0) } catch (c) { window.cubcsaappSessionObject = "", window.cubcsaawaitingAppResponse = !1, window.cubcsagetSD && window.cubcsagetSD(document.body, window, document, navigator) } } else window.cubcsagetSD &&
                window.cubcsagetSD(document.body, window, document, navigator)
        };
        window.cubcsatmoPoll = function() { var a = h.cubcsalstActv,
                b = h.cubcsaidl,
                d = (new Date).valueOf(); - 1 != a && d - a > b && window.cubcsadoReInit && window.cubcsadoReInit();
            window.setTimeout(window.cubcsatmoPoll, 1E4) };
        0 === window.location.href.indexOf("file://") && window.cubcsatmoPoll();
        window.cubcsajsInsertAlreadyLoaded = !1;
        h.cubcsagetSD = function(e, g, m) {
            function c(a, G, c) {
                if (!G && 0 !== G && !1 !== G) return c;
                G = f(G);
                c.length + a.length +
                    G.length <= F && (c = c + a + G);
                return c
            }

            function h(a, c, b, d, f, e, g) { return a.length + b.length + d.length + f.length + c.length + e.length + g.length + 3 + 20 <= F ? !0 : !1 }

            function n(a, c) { try { a || (a = ""); var b = a.split("_"); if (5 > b.length) { var d = (new Date).valueOf(); return c.sessionNumber + "_" + d + "_" + d + "_" + c.loadBalancerId + "_" + c.sessionKey }
                    b[0] = c.sessionNumber;
                    b[3] = c.loadBalancerId;
                    b[4] = c.sessionKey; return b.join("_") } catch (f) { return a } }

            function q(a, c) { return c && c.uvt ? c.uvt : "" }

            function y(a) {
                var b = "",
                    b = window.cubcsaisCorsPermitted() &&
                    "1" == window.cubcsauseJsonFormatForInitialCorsRequest ? "" + a + "/" + z + "/handler9/session.json?" : "" + a + "/" + z + "/handler9/session.js?";
                a = k();
                window.cubcsaappSessionObject ? ((a = window.cubcsaappSessionObject) && r && (r.sessionInfo = "x" + a.sessionNumber + "_" + a.loadBalancerId, r.loadBalancerID = a.loadBalancerId, r.sessionKey = a.sessionKey, r.sessionCookieVal = n(r.sessionCookieVal, a), persistedValFromAppComponents = q(r.persistedCookieVal, a).split("="), 2 == persistedValFromAppComponents.length && (r.persistedCookieVal =
                    persistedValFromAppComponents[1]), z = r.loadBalancerID, B = r.sessionInfo), b = c("se=", r.sessionInfo, b), b = c("&wf=", r.sessionCookieVal, b), b = c("&wg=", r.persistedCookieVal, b), b = c("&tz=", r.sessionKey, b)) : (b = r && r.foundSessionCookie && !r.foundLegacyCookie ? c("se=", r.sessionInfo, b) : c("se=", B, b), b = c("&wf=", r.sessionCookieVal, b), b = c("&wg=", r.persistedCookieVal, b), b = c("&di=", d(), b), b = c("&tz=", a, b));
                var e = window.cubcsaconsent,
                    b = c("&us=", e, b),
                    b = c("&sj=", "cubcsa", b),
                    b = c("&aP=", g.cubcsawindowID, b),
                    b = c("&bd=",
                        navigator.cookieEnabled, b),
                    b = c("&si=", navigator.javaEnabled(), b),
                    b = c("&aM=", P(g), b);
                a = K(); - 2 < a && (b = c("&aO=", "" + a, b));
                b = c("&vb=", g.cubcsacompatVersion, b);
                b = c("&wa=", "8.19.19218", b);
                try { b = g.top.name ? c("&aW=", g.top.name, b) : c("&aW=", g.cubcsawindowID, b) } catch (l) {}
                a = "not_available";
                try { a = g == g.top } catch (l) {}
                b = c("&bu=", a, b);
                a = g.cubcsagC(T);
                if (window.cubcsaappSessionObject) {
                    for (var p = a.celebrusCookies.split("; "), x = !1, t = !1, w = !1, u = 0, V = p.length; u < V; u++) {
                        var v = p[u].split("=");
                        2 == v.length &&
                            ("cubcsasession" == v[0] || "usy46gabsosd" == v[0] ? (p[u] = "cubcsasession=" + n(v[1], window.cubcsaappSessionObject), x = !0) : "cubcsapersisted" == v[0] ? (p[u] = q(v[1], window.cubcsaappSessionObject), t = !0) : "cubcsaP3P" == v[0] && (p[u] = "cubcsaP3P=" + e, w = !0))
                    }
                    x || (p[p.length] = n("", window.cubcsaappSessionObject));
                    t || (p[p.length] = q("", window.cubcsaappSessionObject));
                    w || (p[p.length] = "cubcsaP3P=" + e);
                    e = p.join("; ");
                    a.celebrusCookies = e
                }
                x = a.siteCookies;
                e = f(a.celebrusCookies);
                if (b.length < F) {
                    p = [];
                    p[0] = m.title;
                    p[1] = x;
                    p[2] = m.referrer;
                    p[3] = location.href;
                    (p[4] = g.cubcsaPageID) || 0 === g.cubcsaPageID || (p[4] = "");
                    for (t = x = !1; !h(b, f(p[0]), f(p[1]), f(p[2]), f(p[3]), f(p[4]), e) && !x;) x = 0, f(p[1]).length > f(p[x]).length && (x = 1), f(p[2]).length > f(p[x]).length && (x = 2), f(p[3]).length > f(p[x]).length && (x = 3), f(p[4]).length > f(p[x]).length && (x = 4), p[x] = p[x].substring(0, Math.min(p[x].length / 2, F - b.length - 20)), t = !0, x = 0 === p[0].length && 0 === p[1].length && 0 === p[2].length && 0 === p[3].length && 0 === p[4].length;
                    b = c("&cf=", p[0], b);
                    b = c("&az=", a.celebrusCookies + "; " + p[1], b);
                    b = c("&ar=", p[2], b);
                    b = c("&au=", p[3], b);
                    b = c("&sg=", p[4], b);
                    t && (b = c("&ic=", "true", b))
                }
                return b
            }

            function C() {
                var a, b;
                if (b = w()) {
                    t(b, ":https") && !I && (I = !0, D = M);
                    u();
                    window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logEventQueued(strEvt);
                    for (a = ""; b;) {
                        a = "";
                        for (var c = v(b), d = 0; b && a.length + c.length < F && 50 > d;) a = a + c + "&a=2", b = w(), t(b, ":https") && !I && (I = !0, D = M), b && u(), c = v(b), d++;
                        b && (c = "https://adc.cathaybk.com.tw", I || (c = "http://adc.cathaybk.com.tw"), resourcePath = "1" == cubcsauseJsonFormatForInitialCorsRequest ?
                            "/AEZ32ZHD01MJ/jsEvent.json?" : "/AEZ32ZHD01MJ/jsEvent.js?", c = c + resourcePath + "z=" + a.substring(4), R(c))
                    }
                    window.cubcsaLC(D + "&ipe=" + a, "cubcsaloadPageId")
                } else window.cubcsaLC(D, "cubcsaloadPageId")
            }

            function E(a, b, c, d, f, e, k, l) {
                S = window.cubcsagPr();
                (a = m.cookie) || (a = "");
                if ("" == a && window.sessionStorage) {
                    try {
                        (a = window.sessionStorage.getItem("usy46gabsosd")) || (a = "");
                        c = b = "";
                        window.localStorage && (b = window.localStorage.getItem("cubcsaDBID"), c = window.localStorage.getItem("cubcsauvt"));
                        var h =
                            window.sessionStorage.getItem("cubcsakey");
                        a = a ? "usy46gabsosd=" + a : "";
                        b && (a += "; cubcsaDBID=" + b);
                        c && (a += "; cubcsauvt=" + c);
                        h && (a += "; cubcsakey=" + h)
                    } catch (n) {}
                    T = a
                }
                a.length > N && a.substring(0, N);
                if (r.foundLegacyCookie || r.foundSessionCookie) r.foundLegacyCookie && !r.sessionCookieVal && (b = a.indexOf("usy46gabsosd"), h = a.indexOf(";", b), -1 == h && (h = a.length), h = a.substring(b, h), c = "cubcsa__", d = h.indexOf(c), -1 < d ? (b = h.indexOf("::", d), 0 > b && (b = h.indexOf(";", d)), 0 > b && (b = h.length), B = "x" + h.substring(d + c.length,
                    b)) : (c = "cubcsa_", d = h.indexOf(c), -1 < d ? (d += c.length - 1, b = h.indexOf("::", d), 0 > b && (b = h.indexOf(";", d)), 0 > b && (b = h.length), B = h.substring(d, b)) : (h = a.indexOf("usy46gabsosd="), b = a.indexOf(";", h), 0 > b && (b = a.length), B = g.cubcsawindowID + z, g.cubcsaSC(a.substring(h, b) + "::cubcsa" + g.cubcsawindowID + z))));
                else { g.cubcsaSC("usy46gabsosd=cubcsa" + g.cubcsawindowID + z);
                    B = g.cubcsawindowID + z; try { g.top.name || (g.top.name = g.cubcsawindowID) } catch (n) {} }
                J = y("http://adc.cathaybk.com.tw");
                M = y("https://adc.cathaybk.com.tw");
                D = I ? M : J;
                !g.cubcsaSF &&
                    D.length <= F && (window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.logConfigurationSent(D), window.cubcsaisCorsPermitted() ? window.cubcsasendScriptRequests(D, S, C, window.cubcsaprocessAppResponse) : window.cubcsasendScriptRequests(D, S, "", window.cubcsaprocessAppResponse));
                g.cubcsaae()
            }

            function K(a, b, c) { if (O) { a = O(g); try { if (!a || !a.frames) return -1;
                        b = a.frames; for (c = 0; c < b.length; c++)
                            if (b[c] == g) return c } catch (d) {} } return -1 }
            r = a();
            H = b();
            var F = 1940,
                N = 1024,
                D = "",
                S = "",
                M = "",
                J = "";
            window.cubcsaisCorsPermitted() &&
                (F = 51200, N *= 4);
            e = window;
            var L;
            L = window.cubcsaappSessionObject && window.cubcsaappConsent ? window.cubcsaappConsent : window.cubcsafindCookieVal("cubcsaP3P", 1);
            e.cubcsaconsent = L;
            var I = "https://adc.cathaybk.com.tw" == window.cubcsagPr();
            window.cubcsaprocessAppResponse = function(a, b, c, d) {
                if (d != window.cubcsawindowId)
                    for (var f = window.frames, e = 0; e < f.length; e++) try { f[e].window.cubcsaprocessAppResponse && f[e].window.cubcsaprocessAppResponse(a, b, c, d) } catch (g) {} else window.cubcsaisCorsPermitted() &&
                        "1" == window.cubcsauseJsonFormatForInitialCorsRequest ? a && window.cubcsaexecuteJsonResponse(a, c) : window.cubcsadynamicCreateScript(b, "", a)
            };
            g.cubcsaGPWID = function(a, b) { if (!O) return "not_available";
                (b = O(a)) || (b = a); try { return b.cubcsawindowID } catch (c) { return "not_available" } };
            var O = g.cubcsaGP,
                P = g.cubcsaGPWID;
            g.cubcsaTm = (new Date).valueOf();
            Q ? E() : A(E)
        };
        var L = window.cubcsainitialExecutionCanProceed();
        !L && window.cubcsafindCookieVal("cubcsaSF") ? window.cubcsaperiodicAssessShutdownState() :
            (L || window.SpeedTrapComponent) && h.cubcsagetSD(K.body, h, K)
    }
};
window.cubcsasendScriptRequests = function(a, b, d, k) { window.CelebrusLoggingUtils && window.CelebrusLoggingUtils.isDryRun() ? window.CelebrusLoggingUtils.executeResponseForDryRun() : (window.sessionStorage && d ? d() : window.cubcsaLC(a, "cubcsaloadPageId"), window.cubcsajsInsertAlreadyLoaded || (window.cubcsaLC("" + b + "/JavascriptInsert.js", "cubcsacsaId"), window.cubcsajsInsertAlreadyLoaded = !0)) };
window.cubcsacookieAllowsScriptToProceed = function(a) { return -1 < a.indexOf("cubcsaSF=") ? !1 : !0 };

function cubcsaStart() {
    function a(a) { b && (window.cubcsaSL && window.cubcsaSL(), b = !1) } var b = !1; "prerender" == document.webkitVisibilityState || document.hidden ? (b = !0, document.addEventListener && (document.addEventListener("webkitvisibilitychange", a, !1), document.addEventListener("visibilitychange", a, !1))) : window.cubcsaSL && window.cubcsaSL() }
window.cubcsaonInitialSessionInformationResponse = function(a, b, d) {
    if (d != window.cubcsawindowId) { for (var k = window.frames, f = 0; f < k.length; f++) try { if (k[f].window.cubcsaonInitialSessionInformationResponse && k[f].window.cubcsaonInitialSessionInformationResponse(a, b, d)) return !0 } catch (n) {}
        return !1 }
    try {
        k = window.cubcsaawaitingAppResponse = !1;
        d = "";
        if (a) {
            try { d = JSON.parse(a) } catch (n) {}
            d && (window.cubcsaappSessionObject && (d.sessionNumber != window.cubcsaappSessionObject.sessionNumber || window.cubcsawid) &&
                (k = !0), window.cubcsaappSessionObject = d)
        }
        window.cubcsaappConsent = b
    } catch (n) { window.cubcsaappSessionObject = "" }
    k ? window.cubcsagetSD && window.cubcsagetSD(document.body, window, document, navigator) : cubcsaStart();
    return !0
};
window.cubcsaSC || (window.cubcsaSC = function(a, b, d, k, f, n, e, q) {
    var m = document,
        y = window;
    k = a + "; path=/;";
    var u = a.split("=");
    if (y.cubcsauSC) { if ("https:" != location.protocol) return;
        k += " secure;" }
    var w = k;
    b && (k = k + "expires=" + b);
    ";" == k.charAt(k.length - 1) && (k = k.substring(0, k.length - 1));
    y.cubcsaGD && (m.cookie = k + y.cubcsaGD());
    if (q || !(-1 < m.cookie.indexOf(a)) || b)
        if (d = location.hostname, f = d.split("."), e) m.cookie = k + ";domain=" + e;
        else {
            if (2 <= f.length) {
                n = f.length - 2;
                e = "." + f[n + 1];
                do
                    if (e = "." + f[n] + e, m.cookie =
                        k + "; domain=" + e, n--, q) try { if (-1 == document.cookie.indexOf(u[0] + "=")) return } catch (t) {}
                    while ((q && -1 < m.cookie.indexOf(u[0] + "=") || !q && -1 == m.cookie.indexOf(a)) && 0 <= n);
                if (!q && -1 == m.cookie.indexOf(a) && w)
                    for (n = f.length - 2, e = "." + f[n + 1]; - 1 == m.cookie.indexOf(a) && 0 <= n;) e = "." + f[n] + e, m.cookie = w + " domain=" + e, n--
            }
            0 !== location.href.indexOf("file://") && (q && -1 < m.cookie.indexOf(a) || !q && -1 == m.cookie.indexOf(a)) && (q ? (d = new Date, d.setFullYear(1970), m.cookie = w + " domain=" + location.hostname + "; expires=" + d.toGMTString()) : m.cookie =
                w + " domain=" + location.hostname);
            if (!q && -1 == m.cookie.indexOf(a) || q && -1 < m.cookie.indexOf(a) && !y.cubcsauSC) { a = a.split("="); try { var v = window.sessionStorage;
                    b && (v = window.localStorage);
                    v && (a[1] && -1 < a[1].indexOf(";") && (a[1] = a[1].substring(0, a[1].indexOf(";"))), q ? v.removeItem(a[0]) : v.setItem(a[0], a[1])); return } catch (t) {}
                y.cubcsaSF = 1 }
        }
});
window.cubcsafindCookieVal = function(a, b) { if (document.cookie)
        for (var d = document.cookie.split("; "), k = 0; k < d.length; k++) { var f = d[k].split("="); try { if (f[0] == a) return f[1] } catch (e) {} }
    d = ""; try { var n = window.sessionStorage; if (b || "cubcsauvt" == a || "cubcsaDBID" == a || "cubcsapersisted" == a) n = window.localStorage;
        n && (d = n.getItem(a)) } catch (e) {} return d };
window.cubcsadeleteLegacyCookies = function() {
    var a = !0,
        b = cubcsafindCookieVal("usy46gabsosd", !1);
    b && 1 < b.split("::").length && (a = !1);
    if (document.cookie) window.cubcsaSC && (a && window.cubcsadoDeleteCookie("usy46gabsosd"), window.cubcsadoDeleteCookie("cubcsauvt"), window.cubcsadoDeleteCookie("cubcsakey"), window.cubcsadoDeleteCookie("cubcsaDBID"));
    else try {
        window.sessionStorage && (a && window.sessionStorage.removeItem("usy46gabsosd"), window.sessionStorage.removeItem("cubcsakey")),
            window.localStorage && (window.localStorage.removeItem("cubcsauvt"), window.localStorage.removeItem("cubcsaDBID"))
    } catch (d) {}
};
window.cubcsadoDeleteCookie = function(a, b) { var d = new Date;
    d.setFullYear(1970);
    window.cubcsaSC && window.cubcsaSC(a + "=0", d.toGMTString(), "", "", "", "", b, !0) };

function cubcsasessionset(a) { cubcsaSC("cubcsasession=" + a) }

function cubcsapersisted(a, b, d, k, f, n, e, q, m, y) {
    var u = new Date,
        w, v = 0,
        t;
    a: { var A = document.cookie; "" == A && window.localStorage && (A = (A = window.localStorage.getItem("cubcsapersisted")) ? "cubcsapersisted=" + A : "");A = A.split("; ");t = 0; for (var E = A.length; t < E; t++) { var C = A[t].split("="); if (1 < C.length && f == C[0]) { t = unescape(C[1]); break a } }
        t = null }
    e && (v = e);
    A = !0;
    t && (t = t.split("_"), 7 <= t.length && (k == t[4] && (A = !1), t[2] && (w = t[2], q = t[3], v = t[6])));
    A && (e || v++);
    w || (w = d);
    u.setTime(u.getTime() + n);
    y ? cubcsaSC(f + "=" +
        a + "_" + b + "_" + w + "_" + q + "_" + k + "_" + m + "_" + v, u.toGMTString()) : cubcsaSC(f + "=" + a + "_" + b + "_____", u.toGMTString())
}

function cubcsalegacyset(a, b, d, k) {
    var f = window,
        n = document.cookie;
    f.cubcsaGD && f.cubcsaGD();
    var e = n.indexOf("usy46gabsosd"),
        q = "";
    if (-1 == e) window.cubcsaSC && window.cubcsaSC("usy46gabsosd=cubcsa__" + a + "_" + b + "_" + d + k);
    else {
        var q = n.indexOf(";", e),
            m = f = "";
        0 > q && (q = n.length);
        n = n.substring(e + 12 + 1, q);
        e = n.indexOf("cubcsa"); - 1 < e ? (f = n.substring(0, e), "" != f && (f = "::" + f), e = n.indexOf("::", e), -1 < e && (m = "" == f ? n.substring(e) : n.substring(e + 2))) : f = "::" + n;
        q = "usy46gabsosd=cubcsa__" + a + "_" + b + "_" + d +
            k;
        "" != f && (q += f);
        "" != m && (q += m);
        window.cubcsaSC && window.cubcsaSC(q)
    }
}

function cubcsakeyset(a, b) { cubcsaSC("cubcsakey=" + a) }

function cubcsaDBIDset(a, b) { var d = new Date;
    d.setTime(d.getTime() + b);
    cubcsaSC("cubcsaDBID=" + a, d.toGMTString()) }

function cubcsauvt(a, b, d, k, f) { var n = new Date,
        e, q = 0,
        m;
    a: { m = document.cookie; "" == m && window.localStorage && (m = (m = window.localStorage.getItem("cubcsauvt")) ? "cubcsauvt=" + m : "");m = m.split("; "); for (var y = 0, u = m.length; y < u; y++) { var w = m[y].split("="); if (1 < w.length && "cubcsauvt" == w[0]) { m = unescape(w[1]); break a } }
        m = null }
    if (m && (m = m.split("_"), 5 <= m.length)) { if (b == m[2]) return;
        e = m[0];
        k = m[1];
        q = m[4] }
    q++;
    e || (e = a);
    n.setTime(n.getTime() + d);
    cubcsaSC("cubcsauvt=" + e + "_" + k + "_" + b + "_" + f + "_" + q, n.toGMTString()) }

function cubcsasetShutdown() { window.cubcsadeleteSessionCookie && window.cubcsadeleteSessionCookie(); var a = (new Date).valueOf(); if (window.cubcsaGD) { var b = window.cubcsaGD();
        document.cookie = "cubcsaSF=" + a + ";path=/" + b } else window.cubcsaSC && window.cubcsaSC("cubcsaSF=" + a) }

function cubcsaGo() {
    try {
        var a = window.crypto || window.msCrypto;
        window.cubcsagenerateUUID = function() { return "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g, function(a) { return (16 * Math.random() | 0).toString(16) }) };
        "undefined" != typeof a && "undefined" != typeof a.getRandomValues && (window.cubcsagenerateUUID = function() {
            var b = new Uint16Array(8);
            a.getRandomValues(b);
            var k = function(a) { for (a = a.toString(16); 4 > a.length;) a = "0" + a; return a };
            return "" + k(b[0]) + k(b[1]) + k(b[2]) + k(b[3]) + k(b[4]) + k(b[5]) + k(b[6]) +
                k(b[7])
        });
        window.cubcsawindowId = "_" + (new Date).getTime() + "0." + window.cubcsagenerateUUID() + "_";
        if (window.cubcsaAppBridgeV2) { window.cubcsaawaitingAppResponse = !0; try { var b = window.cubcsafindCookieVal("cubcsapersisted", !0);
                window.cubcsaAppBridgeV2.requestSessionInformation(location.href, b, window.cubcsawindowId, !0) } catch (d) { window.cubcsaappSessionObject = "", window.cubcsaawaitingAppResponse = !1, cubcsaStart() } } else window.cubcsaawaitingAppResponse = !1, cubcsaStart()
    } catch (d) {}
}
cubcsaGo();
window.cubcsaRTEHandler = {
    maxWaitDurationMillis: 1E4,
    maxActionProcessDurationMillisToAllowRequeue: 50,
    targetMissingPollingDurationMillis: 250,
    domContentReadyPollingDurationMillis: 100,
    injectionCount: 0,
    staleCount: 0,
    rejectedCount: 0,
    errorCount: 0,
    nameVal: "RTEHandler",
    currentActionID: "",
    currentRuleID: "",
    currentContentID: "",
    currentCustomID: "",
    queue: [],
    isDomContentReady: function() {
        var a = document.getElementsByTagName("body");
        return a && 0 !== a.length ? "complete" == document.readyState || "loaded" == document.readyState ||
            "interactive" == document.readyState ? !0 : !1 : !1
    },
    reset: function() { this.queue = [];
        this.errorCount = this.rejectedCount = this.staleCount = this.injectionCount = 0 },
    getTimestampMillis: function() { return (new Date).getTime() },
    handleResponse: function(a, c) {
        if (!a || !a.length || !c && -1 < document.cookie.indexOf("cubcsaSF=y")) return 0;
        var b = this.getTimestampMillis(),
            d, e, f;
        d = 0;
        for (e = a.length; d < e; d++) {
            f = a[d];
            try {
                f.queueTimestampMillis = b;
                if (f.content && (f.content = this.doUnescape(f.content), f.parsedContent = this.parseContent(f.content), !f.parsedContent)) { this.rejectedCount++; continue }
                f.externalContentId && (f.externalContentId = this.doUnescape(f.externalContentId));
                f.replacementurl && (f.replacementurl = this.doUnescape(f.replacementurl));
                f.idValue && (f.idValue = this.doUnescape(f.idValue));
                this.validVariables(f.csaNumber, f.contentKey) ? f.csaCallbackTime ? this.doCallback(f) : this.queueAction(f) : this.distributeActionToChildCsas(f) || this.queueAction(f)
            } catch (g) { this.rejectedCount++, this.handleError(g) }
        }
        return this.processQueue()
    },
    doCallback: function(a) {
        window.cubcsadCB ?
            window.cubcsadCB(parseInt(a.csaCallbackTime), this.getTimestampMillis()) : (window.cubcsadCBValTS = this.getTimestampMillis(), window.cubcsadCBVal = parseInt(a.csaCallbackTime))
    },
    queueAction: function(a) { this.queue.unshift(a) },
    isOlderThan: function(a, c) { var b = this.getTimestampMillis(); return Math.abs(b - c) > a },
    isActionStale: function(a) { return this.isOlderThan(this.maxWaitDurationMillis, a.queueTimestampMillis) },
    processQueue: function() {
        if (0 === this.queue.length) return 0;
        if (!this.isDomContentReady()) {
            var a =
                this;
            window.setTimeout(function() { a.processQueue.call(a) }, this.domContentReadyPollingDurationMillis);
            return 0
        }
        var c = 0,
            b;
        for (b = this.queue.length - 1; 0 <= b; b--) {
            var d = this.queue[b];
            try { if (this.isActionStale(d)) this.staleCount++, this.queue.splice(b, 1);
                else { var e = this.getTimestampMillis();
                    this.processAction(d) ? (this.injectionCount++, this.queue.splice(b, 1), this.actionsExecutedCount++, c++) : this.isOlderThan(this.maxActionProcessDurationMillisToAllowRequeue, e) && (this.rejectedCount++, this.queue.splice(b, 1)) } } catch (f) {
                this.queue.splice(b,
                    1), this.handleError(f)
            }
        }
        0 < this.queue.length && (a = this, window.setTimeout(function() { a.processQueue.call(a) }, this.targetMissingPollingDurationMillis));
        return c
    },
    processAction: function(a) { return this.validVariables(a.csaNumber, a.contentKey) ? (this.currentActionID = a.actionID, this.currentRuleID = a.ruleID, this.currentContentID = a.contentID, this.currentCustomID = a.customID, a = this.updateContent(a), this.currentCustomID = this.currentContentID = this.currentRuleID = this.currentActionID = "", a) : this.distributeActionToChildCsas(a) },
    validVariables: function(a, c) { return window.cubcsawid != a || c && c != window.cubcsacontentKey ? !1 : !0 },
    isObjectInArray: function(a, c) { if (!c || !a) return !1; for (var b = 0, d = c.length; b < d; b++)
            if (c[b] === a) return !0;
        return !1 },
    recurseChildCsas: function(a, c, b) {
        var d = -1;
        try { d = a.cubcsawid } catch (f) { return !1 }
        if (d == c.csaNumber) { if (a.cubcsaRTEHandler) return c.csaCallbackTime && a.cubcsaRTEHandler.doCallback(c), a.cubcsaRTEHandler.queueAction(c), this.isObjectInArray(a, b) || b.push(a), !0 } else try {
            if (a.frames &&
                0 < a.frames.length)
                for (var d = 0, e = a.frames.length; d < e; d++)
                    if (this.recurseChildCsas(a.frames[d], c, b)) return !0
        } catch (f) {}
        return !1
    },
    distributeActionToChildCsas: function(a) { if (window.cubcsagHW) { var c = [];
            a = this.recurseChildCsas(window.cubcsagHW(), a, c); if (0 < c.length)
                for (var b = 0, d = c.length; b < d; b++) c[b].cubcsaRTEHandler.processQueue(); return a } return !1 },
    insertNodeAfter: function(a, c) { var b = c.parentNode;
        b.lastchild == c ? b.appendChild(a) : b.insertBefore(a, c.nextSibling) },
    getParentElement: function(a) {
        return a.parentElement ?
            a.parentElement : a.parentNode ? a.parentNode : ""
    },
    replaceImage: function(a, c, b) { if (b) { for (var d = !1, e = a; a && !d;) { if (a.href && ("a" == ("" + a.tagName).toLowerCase() || "area" == ("" + a.tagName).toLowerCase())) { a.href = b;
                    d = !0; break } var f = this.getParentElement(a); if (a === f) break;
                a = f } if (d) e.src = c;
            else if (a = document.createElement("SPAN"), d = document.createElement("A"), d.href = b, a.appendChild(d), b = this.getParentElement(e)) b.replaceChild(a, e), d.appendChild(e), e.src = c, e.setAttribute("style", "border-style: none") } else a.src = c },
    doUnescape: function(a) { window.decodeURIComponent || (a = a.replace(/%C2%A3/g, "%A3"));
        a = a.replace(/\\+/g, "%20"); return a = window.decodeURIComponent ? window.decodeURIComponent(a) : unescape(a) },
    pushContentAddedData: function(a) {
        this.currentActionID && (window.cubcsavariableStateChange ? window.cubcsareportContentAction(this.currentActionID, this.currentRuleID, this.currentContentID, this.currentCustomID) : (window.cubcsaContentIdArray || (window.cubcsaContentIdArray = []), window.cubcsaContentIdArray[window.cubcsaContentIdArray.length] = { actionId: this.currentActionID, ruleId: this.currentRuleID, contentId: this.currentContentID, customId: this.currentCustomID }))
    },
    getFormName: function(a) { if (!a) return ""; var c = a.getAttribute("name"); return c ? c : a.name && !a.name.type ? a.name : "" },
    getFormID: function(a) { if (!a) return ""; var c = a.getAttribute("id"); return c ? c : a.id && !a.id.type ? a.id : "" },
    getElementClass: function(a) { var c = a.getAttribute("class");
        c || (c = a.getAttribute("className")); return c },
    findMatchesByParentFormName: function(a, c, b) {
        var d = new RegExp(c);
        a || (a = document.getElementsByTagName("*"));
        for (var e = [], f = 0, g = a.length; f < g; f++)
            if (a[f].form) { var h = this.getFormName(a[f].form);
                b ? d.test(h) && (e[e.length] = a[f]) : c == h && (e[e.length] = a[f]) }
        return e
    },
    findMatchesByParentFormID: function(a, c, b) { var d = new RegExp(c);
        a || (a = document.getElementsByTagName("*")); for (var e = [], f = 0, g = a.length; f < g; f++)
            if (a[f].form) { var h = this.getFormID(a[f].form);
                b ? d.test(h) && (e[e.length] = a[f]) : c == h && (e[e.length] = a[f]) }
        return e },
    findMatchesByName: function(a, c, b) {
        a || (a = document.getElementsByTagName("*"));
        var d = [];
        if (b)
            for (c = new RegExp(c), b = 0; b < a.length; b++) c.test(a[b].name) && (d[d.length] = a[b]);
        else
            for (c = c ? c.toLowerCase() : c, b = 0; b < a.length; b++) { var e = ("" + a[b].name).toLowerCase();
                c == e && (d[d.length] = a[b]) }
        return d
    },
    findMatchesById: function(a, c, b) { a || (a = document.getElementsByTagName("*")); var d = []; if (b)
            for (c = new RegExp(c), b = 0; b < a.length; b++) c.test(a[b].id) && (d[d.length] = a[b]);
        else
            for (b = 0; b < a.length; b++) c == a[b].id && (d[d.length] = a[b]); return d },
    findMatchesByClass: function(a, c, b) {
        a || (a = document.getElementsByTagName("*"));
        var d = [];
        if (b)
            for (c = new RegExp(c), b = 0; b < a.length; b++) c.test(this.getElementClass(a[b])) && (d[d.length] = a[b]);
        else
            for (b = 0; b < a.length; b++) c == this.getElementClass(a[b]) && (d[d.length] = a[b]);
        return d
    },
    findMatchesByHref: function(a, c, b) { a || (a = document.getElementsByTagName("A")); var d = []; if (b)
            for (c = new RegExp(c), b = 0; b < a.length; b++) c.test(a[b].href) && (d[d.length] = a[b]);
        else
            for (c = c.toLowerCase(), b = 0; b < a.length; b++) { var e = ("" + a[b].href).toLowerCase();
                c == e && (d[d.length] = a[b]) }
        return d },
    findMatchesBySrc: function(a,
        c, b) { a || (a = document.getElementsByTagName("IMG")); var d = []; if (b)
            for (c = new RegExp(c), b = 0; b < a.length; b++) c.test(a[b].src) && (d[d.length] = a[b]);
        else
            for (c = c.toLowerCase(), b = 0; b < a.length; b++) { var e = ("" + a[b].src).toLowerCase();
                c == e && (d[d.length] = a[b]) }
        return d },
    findMatchesByTagName: function(a, c, b) {
        c = c.toUpperCase();
        a || (a = document.getElementsByTagName("*"));
        var d = [];
        if (b)
            for (c = new RegExp(c), b = 0; b < a.length; b++) c.test(("" + a[b].tagName).toUpperCase()) && (d[d.length] = a[b]);
        else
            for (b = 0; b < a.length; b++) {
                var e = ("" +
                    a[b].tagName).toUpperCase();
                c == e && (d[d.length] = a[b])
            }
        return d
    },
    findMatchesByType: function(a, c, b) { c = c.toLowerCase();
        a || (a = document.getElementsByTagName("*")); var d = []; if (b)
            for (c = new RegExp(c), b = 0; b < a.length; b++) c.test(("" + a[b].type).toLowerCase()) && (d[d.length] = a[b]);
        else
            for (b = 0; b < a.length; b++) { var e = ("" + a[b].type).toLowerCase();
                c == e && (d[d.length] = a[b]) }
        return d },
    updateContent: function(a) {
        "undefined" != typeof SpeedTrapComponent && SpeedTrapComponent.logMessage("Inserting " + a.parsedContent);
        if (3 == a.csaAction) return this.insertContentAtTopOfPage(a.parsedContent), !0;
        if (4 == a.csaAction) return this.insertContentAtEndOfPage(a.parsedContent), !0;
        if (!a.attributesArray) return !1;
        for (var c = !1, b = null, d = "", e = "", f = "", g = "", h = "", p = "", k = 0, q = a.attributesArray.length; k < q; k++) {
            var l = a.attributesArray[k].attributeType,
                m = a.attributesArray[k].attributeValue,
                n = a.attributesArray[k].attributeIsRegEx;
            "NAME" == l ? b = this.findMatchesByName(b, m, n) : "ID" == l ? b = this.findMatchesById(b, m, n) : "CLASS" == l ? b = this.findMatchesByClass(b, m, n) : "IMAGE" == l ? (d = { val: m, isRegex: n }, c = !0) : "ANCHOR" == l ? e = {
                val: m,
                isRegex: n
            } : "TAGNAME" == l ? f = { val: m, isRegex: n } : "FORM_NAME" == l ? g = { val: m, isRegex: n } : "FORM_ID" == l ? h = { val: m, isRegex: n } : "TYPE" == l && (p = { val: m, isRegex: n })
        }
        g && (b = this.findMatchesByParentFormName(b, g.val, g.isRegex));
        h && (b = this.findMatchesByParentFormID(b, h.val, h.isRegex));
        e && (b = this.findMatchesByHref(b, e.val, e.isRegex));
        d && (b = this.findMatchesBySrc(b, d.val, d.isRegex));
        f && (b = this.findMatchesByTagName(b, f.val, f.isRegex));
        p && (b = this.findMatchesByType(b, p.val, p.isRegex));
        if (null === b) return !1;
        e = !1;
        for (k = 0; k < b.length; k++) d =
            b[k], f = ("" + b[k].tagName).toUpperCase(), "HEAD" != f && "META" != f && (c && "IMAGE" == a.replacementContentType ? (0 == a.csaAction ? (this.replaceImage(d, a.parsedContent.childNodes[0].nodeValue, a.replacementurl), this.tagContent(d)) : 1 == a.csaAction ? (e = this.toInnerHtmlNode(a.parsedContent.childNodes[0]), (f = d.parentNode) && f.insertBefore(e, d)) : 2 == a.csaAction && (e = this.toInnerHtmlNode(a.parsedContent.childNodes[0]), this.insertNodeAfter(e, d)), e = !0) : (e = !0, this.modifyTarget(d, a)), this.pushContentAddedData());
        return e
    },
    insertContentAtTopOfPage: function(a) {
        var c =
            document.createElement("SPAN");
        this.tagContent(c);
        var b = document.getElementsByTagName("body")[0];
        b && (b.insertBefore(c, b.firstChild), this.appendToDoc(c, a), this.pushContentAddedData())
    },
    insertContentAtEndOfPage: function(a) { var c = document.createElement("SPAN");
        this.tagContent(c); var b = document.getElementsByTagName("body")[0];
        b && (b.appendChild(c), this.appendToDoc(c, a), this.pushContentAddedData()) },
    modifyTarget: function(a, c) {
        if (a) {
            var b = document.createElement("SPAN");
            this.tagContent(b);
            var d = a.parentNode;
            0 == c.csaAction ? d && d.replaceChild(b, a) : 1 == c.csaAction ? d && d.insertBefore(b, a) : 2 == c.csaAction && this.insertNodeAfter(b, a);
            this.appendToDoc(b, c.parsedContent)
        }
    },
    parseContent: function(a) { if (window.DOMParser) a = (new DOMParser).parseFromString(a, "text/xml");
        else { var c = new ActiveXObject("Microsoft.XMLDOM");
            c.async = "false";
            c.loadXML(a);
            a = c }
        a = a.getElementsByTagName("strtecontent"); return 1 == a.length ? a[0] : null },
    getHeadReference: function() { var a = document.getElementsByTagName("HEAD"); return 0 < a.length ? a[0] : null },
    appendToDoc: function(a, c) { var b = null,
            d = c.nodeName.toUpperCase(); if ("STRTECONTENT" == d) b = a;
        else if ("HEAD" == d) { var e = this.getHeadReference(); if (e) { for (d = 0; d < c.childNodes.length; d++) this.appendToDoc(e, c.childNodes[d]); return } } else if (b = this.createNewNode(c, a), null === b) return;
        e = 0 === d.indexOf("FB"); if ("SCRIPT" != d && "NOSCRIPT" != d && "STYLE" != d && "OBJECT" != d && "TABLE" != d && "H1" != d && "H2" != d && "H3" != d && "H4" != d && "H5" != d && "H6" != d && !e)
            for (d = 0; d < c.childNodes.length; d++) this.appendToDoc(b, c.childNodes[d]) },
    createNewNode: function(a,
        c) {
        var b;
        if (3 == a.nodeType) b = document.createTextNode(a.nodeValue), c.appendChild(b);
        else {
            if (1 == a.nodeType) {
                b = a.nodeName.toUpperCase();
                var d = 0 === b.indexOf("FB");
                "OBJECT" == b || "TABLE" == b || "H1" == b || "H2" == b || "H3" == b || "H4" == b || "H5" == b || "H6" == b || d ? (b = this.createObjectNode(a), c.appendChild(b)) : "SCRIPT" == b ? b = this.createScriptNode(a, c) : "NOSCRIPT" == b ? (b = this.createNoScriptNode(a), c.appendChild(b)) : "STYLE" == b ? b = this.createStyleNode(a, c) : (b = document.createElement(a.nodeName.toUpperCase()), this.copyAttributes(a,
                    b), c.appendChild(b));
                return b
            }
            return null
        }
    },
    createObjectNode: function(a) { return this.toInnerHtmlNode(a) },
    tagInjectedContent: function(a, c, b, d, e) { a && (c && (a.cubcsacontentActionIdentifier = c), b && (a.cubcsaruleIdentifier = b), d && (a.cubcsacontentIdentifier = d), e && (a.cubcsacustomIdentifier = e)) },
    tagContent: function(a) { this.tagInjectedContent(a, this.currentActionID, this.currentRuleID, this.currentContentID, this.currentCustomID) },
    toXML: function(a) {
        return "undefined" != typeof XMLSerializer ? (new XMLSerializer).serializeToString(a) :
            a.xml ? a.xml : ""
    },
    toInnerHtmlNode: function(a) { var c = document.createElement("SPAN");
        c.innerHTML = this.toXML(a);
        this.tagContent(c); return c },
    createScriptNode: function(a, c) { var b = document.createElement("SCRIPT");
        c.appendChild(b); var d = a.attributes.getNamedItem("type");
        d && (b.type = d.value); if (d = a.attributes.getNamedItem("src")) b.src = d.value;
        0 < a.childNodes.length && (b.text = a.childNodes[0].nodeValue); return b },
    createNoScriptNode: function(a) {
        for (var c = document.createElement("NOSCRIPT"), b = document.createElement("SPAN"),
                d = 0; d < a.childNodes.length; d++) this.appendToDoc(b, a.childNodes[d]);
        c.text = b.innerHTML;
        return c
    },
    createStyleNode: function(a, c) { var b = document.createElement("STYLE");
        c.appendChild(b); var d = a.attributes.getNamedItem("type");
        d && (b.type = d.value); if (d = a.attributes.getNamedItem("src")) b.src = d.value; if (d = a.attributes.getNamedItem("media")) b.media = d.value;
        0 < a.childNodes.length && (b.styleSheet ? b.styleSheet.cssText = a.childNodes[0].nodeValue : b.innerHTML = this.toXML(a.childNodes[0])); return b },
    copyAttributes: function(a,
        c) { for (var b = null, d = null, e = 0, f = a.attributes.length; e < f; e++) { var g = "" + a.attributes[e].name,
                h = a.attributes[e].value; if ("style" == g.toLowerCase()) c.style.cssText = h;
            else if ("class" == g.toLowerCase()) window.attachEvent ? c.className = h : c.setAttribute(g, h);
            else if ("type" == g) { b = h; continue } "value" == g ? d = h : c.setAttribute(g, h) }
        b && c.setAttribute("type", b);
        d && (c.setAttribute("value", d), c.value = d) },
    handleError: function(a) {
        this.errorCount++;
        if (window.SpeedTrapComponent) {
            var c;
            c = "There was an error.\n" + ("Error description: " +
                a.message + "\n");
            c += "Line no: " + a.lineNumber + "\n";
            a.stack && (c += "Stack: " + a.stack);
            window.SpeedTrapComponent.logMessage("Error " + c)
        }
    }
};;