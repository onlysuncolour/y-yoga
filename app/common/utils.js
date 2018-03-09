module.exports = {
  isObject: function (input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  },
  isArray: function (input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  },
  isDate: function (input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  },
  isNumber: function (input) {
    return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
  },
  isString: function (input) {
    return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
  },
  isBoolean: function (input) {
    return typeof input == 'boolean';
  },
  isFunction: function (input) {
    return typeof input == 'function';
  },
  isNull: function (input) {
    return input === undefined || input === null;
  },
  isPlainObject: function (obj) {
    if (obj && Object.prototype.toString.call(obj) === "[object Object]" && obj.constructor === Object && !hasOwnProperty.call(obj, "constructor")) {
      var key;
      for (key in obj) {}
      return key === undefined || hasOwnProperty.call(obj, key);
    }
    return false;
  },
  extend: function () {
    var options, name, src, copy, copyIsArray, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;
    if (typeof target === "boolean") {
      deep = target;
      target = arguments[1] || {};
      i = 2;
    }
    if (typeof target !== "object" && !this.isFunction(target)) {
      target = {};
    }
    if (length === i) {
      target = this;
      --i;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (src === copy) {
            continue;
          }
          if (deep && copy && (this.isPlainObject(copy) || (copyIsArray = this.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && this.isArray(src) ? src : [];
            } else {
              clone = src && this.isPlainObject(src) ? src : {};
            }
            target[name] = this.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  },
  copy(data) {
    let copyOne = null;
    if (this.isObject(data)) {
      copyOne = {};
      for (const key in data) {
        copyOne[key] = this.copy(data[key]);
      }
    } else if (this.isArray(data)) {
      copyOne = [];
      for (const index of data) {
        copyOne.push(this.copy(index));
      }
    } else {
      copyOne = data;
    }
    return copyOne;
  },
  uuid() {
    const s4 = ()=>{
      return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },
  formatDate: function (input) {
    if (!input) {
      return null
    } else if (!isNaN(input)) {
      return Manba(+input).format('YYYY-MM-DD')
    } else {
      return Manba(input).format('YYYY-MM-DD')
    }
  },
}
