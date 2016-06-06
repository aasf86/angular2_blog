System.register(['./components/home', './components/login', './components/addPost'], function(exports_1, context_1) {
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
            function (home_1_1) {
                exportStar_1(home_1_1);
            },
            function (login_1_1) {
                exportStar_1(login_1_1);
            },
            function (addPost_1_1) {
                exportStar_1(addPost_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=component.js.map