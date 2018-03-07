var express = require('express');
var router = express.Router();

router.post('/sign', function (req, res, next) {
    console.log("body", req.body.key);
    var signres = sign(req.body.key);
    console.log(signres);
    res.send(signres);
});

// router.get('/sign', function(req, res, next) {
//     console.log(req.key);
//     var signres= sign(req.key);
//     console.log(signres);
//     res.send(signres);
// });


function sign(e) {
    function t(e, t) {
        return e << t | e >>> 32 - t
    }

    function n(e, t) {
        var n, o, r, i, s;
        return r = 2147483648 & e,
            i = 2147483648 & t,
            n = 1073741824 & e,
            o = 1073741824 & t,
            s = (1073741823 & e) + (1073741823 & t),
            n & o ? 2147483648 ^ s ^ r ^ i : n | o ? 1073741824 & s ? 3221225472 ^ s ^ r ^ i : 1073741824 ^ s ^ r ^ i : s ^ r ^ i
    }

    function o(e, t, n) {
        return e & t | ~e & n
    }

    function r(e, t, n) {
        return e & n | t & ~n
    }

    function i(e, t, n) {
        return e ^ t ^ n
    }

    function s(e, t, n) {
        return t ^ (e | ~n)
    }

    function a(e, r, i, s, a, p, u) {
        return e = n(e, n(n(o(r, i, s), a), u)),
            n(t(e, p), r)
    }

    function p(e, o, i, s, a, p, u) {
        return e = n(e, n(n(r(o, i, s), a), u)),
            n(t(e, p), o)
    }

    function u(e, o, r, s, a, p, u) {
        return e = n(e, n(n(i(o, r, s), a), u)),
            n(t(e, p), o)
    }

    function c(e, o, r, i, a, p, u) {
        return e = n(e, n(n(s(o, r, i), a), u)),
            n(t(e, p), o)
    }

    function d(e) {
        for (var t, n = e.length, o = n + 8, r = (o - o % 64) / 64, i = 16 * (r + 1), s = new Array(i - 1), a = 0, p = 0; n > p;) {
            t = (p - p % 4) / 4,
                a = p % 4 * 8,
                s[t] = s[t] | e.charCodeAt(p) << a,
                p++
        }
        return t = (p - p % 4) / 4,
            a = p % 4 * 8,
            s[t] = s[t] | 128 << a,
            s[i - 2] = n << 3,
            s[i - 1] = n >>> 29,
            s
    }

    function l(e) {
        var t, n, o = "", r = "";
        for (n = 0; 3 >= n; n++) {
            t = e >>> 8 * n & 255,
                r = "0" + t.toString(16),
                o += r.substr(r.length - 2, 2)
        }
        return o
    }

    function f(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var o = e.charCodeAt(n);
            128 > o ? t += String.fromCharCode(o) : o > 127 && 2048 > o ? (t += String.fromCharCode(o >> 6 | 192),
                t += String.fromCharCode(63 & o | 128)) : (t += String.fromCharCode(o >> 12 | 224),
                t += String.fromCharCode(o >> 6 & 63 | 128),
                t += String.fromCharCode(63 & o | 128))
        }
        return t
    }

    var m, h, _, v, w, E, R, y, g, S = [], O = 7, T = 12, b = 17, q = 22, A = 5, C = 9, N = 14, x = 20, k = 4, L = 11, I = 16, J = 23, P = 6, U = 10, F = 15, H = 21;
    for (e = f(e),
             S = d(e),
             E = 1732584193,
             R = 4023233417,
             y = 2562383102,
             g = 271733878,
             m = 0; m < S.length; m += 16) {
        h = E,
            _ = R,
            v = y,
            w = g,
            E = a(E, R, y, g, S[m + 0], O, 3614090360),
            g = a(g, E, R, y, S[m + 1], T, 3905402710),
            y = a(y, g, E, R, S[m + 2], b, 606105819),
            R = a(R, y, g, E, S[m + 3], q, 3250441966),
            E = a(E, R, y, g, S[m + 4], O, 4118548399),
            g = a(g, E, R, y, S[m + 5], T, 1200080426),
            y = a(y, g, E, R, S[m + 6], b, 2821735955),
            R = a(R, y, g, E, S[m + 7], q, 4249261313),
            E = a(E, R, y, g, S[m + 8], O, 1770035416),
            g = a(g, E, R, y, S[m + 9], T, 2336552879),
            y = a(y, g, E, R, S[m + 10], b, 4294925233),
            R = a(R, y, g, E, S[m + 11], q, 2304563134),
            E = a(E, R, y, g, S[m + 12], O, 1804603682),
            g = a(g, E, R, y, S[m + 13], T, 4254626195),
            y = a(y, g, E, R, S[m + 14], b, 2792965006),
            R = a(R, y, g, E, S[m + 15], q, 1236535329),
            E = p(E, R, y, g, S[m + 1], A, 4129170786),
            g = p(g, E, R, y, S[m + 6], C, 3225465664),
            y = p(y, g, E, R, S[m + 11], N, 643717713),
            R = p(R, y, g, E, S[m + 0], x, 3921069994),
            E = p(E, R, y, g, S[m + 5], A, 3593408605),
            g = p(g, E, R, y, S[m + 10], C, 38016083),
            y = p(y, g, E, R, S[m + 15], N, 3634488961),
            R = p(R, y, g, E, S[m + 4], x, 3889429448),
            E = p(E, R, y, g, S[m + 9], A, 568446438),
            g = p(g, E, R, y, S[m + 14], C, 3275163606),
            y = p(y, g, E, R, S[m + 3], N, 4107603335),
            R = p(R, y, g, E, S[m + 8], x, 1163531501),
            E = p(E, R, y, g, S[m + 13], A, 2850285829),
            g = p(g, E, R, y, S[m + 2], C, 4243563512),
            y = p(y, g, E, R, S[m + 7], N, 1735328473),
            R = p(R, y, g, E, S[m + 12], x, 2368359562),
            E = u(E, R, y, g, S[m + 5], k, 4294588738),
            g = u(g, E, R, y, S[m + 8], L, 2272392833),
            y = u(y, g, E, R, S[m + 11], I, 1839030562),
            R = u(R, y, g, E, S[m + 14], J, 4259657740),
            E = u(E, R, y, g, S[m + 1], k, 2763975236),
            g = u(g, E, R, y, S[m + 4], L, 1272893353),
            y = u(y, g, E, R, S[m + 7], I, 4139469664),
            R = u(R, y, g, E, S[m + 10], J, 3200236656),
            E = u(E, R, y, g, S[m + 13], k, 681279174),
            g = u(g, E, R, y, S[m + 0], L, 3936430074),
            y = u(y, g, E, R, S[m + 3], I, 3572445317),
            R = u(R, y, g, E, S[m + 6], J, 76029189),
            E = u(E, R, y, g, S[m + 9], k, 3654602809),
            g = u(g, E, R, y, S[m + 12], L, 3873151461),
            y = u(y, g, E, R, S[m + 15], I, 530742520),
            R = u(R, y, g, E, S[m + 2], J, 3299628645),
            E = c(E, R, y, g, S[m + 0], P, 4096336452),
            g = c(g, E, R, y, S[m + 7], U, 1126891415),
            y = c(y, g, E, R, S[m + 14], F, 2878612391),
            R = c(R, y, g, E, S[m + 5], H, 4237533241),
            E = c(E, R, y, g, S[m + 12], P, 1700485571),
            g = c(g, E, R, y, S[m + 3], U, 2399980690),
            y = c(y, g, E, R, S[m + 10], F, 4293915773),
            R = c(R, y, g, E, S[m + 1], H, 2240044497),
            E = c(E, R, y, g, S[m + 8], P, 1873313359),
            g = c(g, E, R, y, S[m + 15], U, 4264355552),
            y = c(y, g, E, R, S[m + 6], F, 2734768916),
            R = c(R, y, g, E, S[m + 13], H, 1309151649),
            E = c(E, R, y, g, S[m + 4], P, 4149444226),
            g = c(g, E, R, y, S[m + 11], U, 3174756917),
            y = c(y, g, E, R, S[m + 2], F, 718787259),
            R = c(R, y, g, E, S[m + 9], H, 3951481745),
            E = n(E, h),
            R = n(R, _),
            y = n(y, v),
            g = n(g, w)
    }
    var j = l(E) + l(R) + l(y) + l(g);
    return j.toLowerCase()
}


function test() {
    // s = a(n.token + "&" + i + "&" + r + "&" + t.data)
    var token = "36cf6e2437097843b0c2671005d480aa"
    var i = '1478745430781'
    var r = '12574478'
    var data = '{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"timeStamp":1477488912630,"id":"200216664"}'
    var s = sign(token + "&" + i + "&" + r + "&" + data)
// s=50985d6f8f00c9cbb2fb7c5a98f3008a
    var tt = 'e7648eaf00c07e744ffe27e1ae37db5f_1478764995915&1478763990723&12574478&{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"direction":0,"timeStamp":1477485240775,"id":199720496,"count":20,"includeCommentCount":true}'
    var aa = '7e666c912e7a55abe5010f804722d5a5&1478748652065&12574478&{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"timeStamp":1477484451253,"id":"199686181"}'
    var ss = sign(aa)
    console.log(ss)
// 22ed6f6eaa5334f70b3a9ac66e1b33f6
    '7e666c912e7a55abe5010f804722d5a5&1478756923699&12574478&{"app":"tlive","sourceId":"900acac6-0d83-4b8a-9d26-dca8e9336ca9","type":1,"timeStamp":1477485727641,"id":"199770637"}'
}

module.exports = router;
