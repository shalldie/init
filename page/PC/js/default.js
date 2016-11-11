// public
/*
*  格式化 
*/
String.prototype.format = function() {
    var args = arguments;
    return this.replace(/\{(\d+?)\}/g, function(g0, g1) {
        return args[+g1];
    });
};

/*
* Array.prototype.forEach
*/
Array.prototype.forEach = Array.prototype.forEach || function(callback) {
    callback = callback || function() { };
    for (var i = 0, len = this.length; i < len; i++) {
        callback.call(this[i], this[i], i);
    }
};

//public end

// module
$(function() {
    module.inits.forEach(function(item, index) {   //所有模块初始化
        $.type(item) == "function" && item();
    });
});

var module = (function(my) {  //template
    my.inits = my.inits || [];

    return my;
})(module || {});