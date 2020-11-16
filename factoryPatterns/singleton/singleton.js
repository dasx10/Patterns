var Singleton = /** @class */ (function () {
    function Singleton(params) {
        this.params = params;
    }
    Singleton.getInstance = function (params) {
        var _a;
        return (_a = Singleton.instance) !== null && _a !== void 0 ? _a : (Singleton.instance = new Singleton(params));
    };
    Singleton.prototype.log = function () {
        console.log(this.params);
    };
    return Singleton;
}());
function clientCode() {
    var s1 = Singleton.getInstance('hi');
    var s2 = Singleton.getInstance('mahai');
    console.log(s1 == s2);
    s2.log();
}
clientCode();
