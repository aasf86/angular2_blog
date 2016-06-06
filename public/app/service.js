System.register(['./service/headers', './service/login', './service/post', './service/user'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (headers_1_1) {
                exportStar_1(headers_1_1);
            },
            function (login_1_1) {
                exportStar_1(login_1_1);
            },
            function (post_1_1) {
                exportStar_1(post_1_1);
            },
            function (user_1_1) {
                exportStar_1(user_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=service.js.map