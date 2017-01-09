;(function(window){
  var types = {};

  // detect1 在demo2中存在的问题 有许多类型会成为object, 通过object判断不够经济。
  types.detect1 = function(value) {
    var type = typeof value;
    if (type === "object") {
      // es6方法
      if (Array.isArray(value)) {
        return 'array';
      } else if (value === null) {
        return 'null';
      } else  {
        return 'object';
      }
    } else {
      return type;
    }
  };

  // detect2 优化
  types.detect2 = function(value) {
    var type = typeof value;
    type = Object.prototype.toString.call(value).slice(8, -1);
    return type;
  }

  window.types = types;
})(window)