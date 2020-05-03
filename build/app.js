(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!chibi 3.0.9, Copyright 2012-2017 Kyle Barrow, released under MIT license */
!function(){"use strict";function e(){var e;for(h=!0,e=0;e<d.length;e+=1)d[e]();d=[]}function t(){var t;for(y=!0,h||e(),t=0;t<p.length;t+=1)p[t]();p=[]}function n(e,t){var n;for(n=t.length-1;n>=0;n-=1)e(t[n])}function r(e){return e.replace(/-\w/g,function(e){return e.charAt(1).toUpperCase()})}function a(e,t){return e.currentStyle?e.currentStyle[r(t)]:v.getComputedStyle?v.getComputedStyle(e,null).getPropertyValue(t):null}function o(e,t){return encodeURIComponent(e).replace(/%20/g,"+")+"="+encodeURIComponent(t).replace(/%20/g,"+")}function c(e,t,n){try{e.style[r(t)]=n}catch(e){console.error('Could not set css style property "'+t+'".')}}function s(e){e.style.display="","none"===a(e,"display")&&(e.style.display="block")}function i(e){var t,r,a,c="";if(e.constructor===Object){for(t in e)if(e.hasOwnProperty(t))if(e[t].constructor===Array)for(r=0;r<e[t].length;r+=1)c+="&"+o(t,e[t][r]);else c+="&"+o(t,e[t])}else n(function(e){if("FORM"===e.nodeName)for(r=0;r<e.elements.length;r+=1)if(!(t=e.elements[r]).disabled)switch(t.type){case"button":case"image":case"file":case"submit":case"reset":break;case"select-one":t.length>0&&(c+="&"+o(t.name,t.value));break;case"select-multiple":for(a=0;a<t.length;a+=1)t[a].selected&&(c+="&"+o(t.name,t[a].value));break;case"checkbox":case"radio":t.checked&&(c+="&"+o(t.name,t.value));break;default:c+="&"+o(t.name,t.value)}},e);return c.length>0?c.substring(1):""}function u(e,t,r){var a,o,c,s,i=!1;return e&&(a=e.split(/\s+/),n(function(e){for(s=0;s<a.length;s+=1)if(o=new RegExp("\\b"+a[s]+"\\b","g"),c=new RegExp(" *"+a[s]+"\\b","g"),"remove"===t)e.className=e.className.replace(c,"");else if("toggle"===t)e.className=e.className.match(o)?e.className.replace(c,""):e.className+" "+a[s];else if("has"===t&&e.className.match(o)){i=!0;break}},r)),i}function l(e,t,r){var a,o;e&&n(function(n){for((a=g.createElement("div")).innerHTML=e;null!==(o=a.lastChild);)try{"before"===t?n.parentNode.insertBefore(o,n):"after"===t?n.parentNode.insertBefore(o,n.nextSibling):"append"===t?n.appendChild(o):"prepend"===t&&n.insertBefore(o,n.firstChild)}catch(e){break}},r)}function f(e){var t,o,E,T=[],b=!1;if(e)if(e.nodeType&&1===e.nodeType)T=[e];else if("object"==typeof e)b="number"!=typeof e.length,T=e;else if("string"==typeof e)for(g.querySelectorAll||(g.querySelectorAll=function(e){var t,n,r,o=g.getElementsByTagName("head")[0],c=[];if(t=g.createElement("STYLE"),t.type="text/css",t.styleSheet){for(t.styleSheet.cssText=e+" {a:b}",o.appendChild(t),n=g.getElementsByTagName("*"),r=0;r<n.length;r+=1)"b"===a(n[r],"a")&&c.push(n[r]);o.removeChild(t)}return c}),o=g.querySelectorAll(e),E=0;E<o.length;E+=1)T[E]=o[E];return t=b?{}:T,t.ready=function(e){if(e){if(h)return e(),t;d.push(e)}},t.loaded=function(e){if(e){if(y)return e(),t;p.push(e)}},t.each=function(e){return"function"==typeof e&&n(function(t){return e.apply(t,arguments)},T),t},t.first=function(){return f(T.shift())},t.last=function(){return f(T.pop())},t.odd=function(){var e,t=[];for(e=0;e<T.length;e+=2)t.push(T[e]);return f(t)},t.even=function(){var e,t=[];for(e=1;e<T.length;e+=2)t.push(T[e]);return f(t)},t.hide=function(){return n(function(e){e.style.display="none"},T),t},t.show=function(){return n(function(e){s(e)},T),t},t.toggle=function(){return n(function(e){"none"===a(e,"display")?s(e):e.style.display="none"},T),t},t.remove=function(){return n(function(e){try{e.parentNode.removeChild(e)}catch(e){}},T),f()},t.css=function(e,o){if(e){if(o||""===o)return n(function(t){c(t,e,o)},T),t;if(T[0]){if(T[0].style[r(e)])return T[0].style[r(e)];if(a(T[0],e))return a(T[0],e)}}},t.getClass=function(){if(T[0]&&T[0].className.length>0)return T[0].className.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"").replace(/\s+/," ")},t.setClass=function(e){return(e||""===e)&&n(function(t){t.className=e},T),t},t.addClass=function(e){return e&&n(function(t){t.className+=" "+e},T),t},t.removeClass=function(e){return u(e,"remove",T),t},t.toggleClass=function(e){return u(e,"toggle",T),t},t.hasClass=function(e){return u(e,"has",T)},t.html=function(e){return e||""===e?(n(function(t){t.innerHTML=e},T),t):T[0]?T[0].innerHTML:void 0},t.htmlBefore=function(e){return l(e,"before",T),t},t.htmlAfter=function(e){return l(e,"after",T),t},t.htmlAppend=function(e){return l(e,"append",T),t},t.htmlPrepend=function(e){return l(e,"prepend",T),t},t.attr=function(e,r){if(e){if(e=e.toLowerCase(),r||""===r)return n(function(t){"style"===e?t.style.cssText=r:"class"===e?t.className=r:t.setAttribute(e,r)},T),t;if(T[0])if("style"===e){if(T[0].style.cssText)return T[0].style.cssText}else if("class"===e){if(T[0].className)return T[0].className}else if(T[0].getAttribute(e))return T[0].getAttribute(e)}},t.data=function(e,n){if(e)return t.attr("data-"+e,n)},t.val=function(e){var r,a,o;if(e||""===e)return n(function(t){switch(t.nodeName){case"SELECT":for("string"!=typeof e&&"number"!=typeof e||(e=[e]),a=0;a<t.length;a+=1)for(o=0;o<e.length;o+=1)if(t[a].selected="",t[a].value===e[o]){t[a].selected="selected";break}break;case"INPUT":case"TEXTAREA":case"BUTTON":t.value=e}},T),t;if(T[0])switch(T[0].nodeName){case"SELECT":for(r=[],a=0;a<T[0].length;a+=1)T[0][a].selected&&r.push(T[0][a].value);return r.length>1?r:r[0];case"INPUT":case"TEXTAREA":case"BUTTON":return T[0].value}},t.checked=function(e){return"boolean"==typeof e?(n(function(t){"INPUT"!==t.nodeName||"checkbox"!==t.type&&"radio"!==t.type||(t.checked=e)},T),t):!T[0]||"INPUT"!==T[0].nodeName||"checkbox"!==T[0].type&&"radio"!==T[0].type?void 0:!!T[0].checked},t.on=function(r,a){return e!==v&&e!==g||(T=[e]),n(function(e){g.addEventListener?e.addEventListener(r,a,!1):g.attachEvent&&(e[r+a]=function(){return a.apply(e,arguments)},e.attachEvent("on"+r,e[r+a]))},T),t},t.off=function(r,a){return e!==v&&e!==g||(T=[e]),n(function(e){g.addEventListener?e.removeEventListener(r,a,!1):g.attachEvent&&(e.detachEvent("on"+r,e[r+a]),e[r+a]=null)},T),t},t.ajax=function(e,n,r,a,o){var c,s,u=i(T),l=n?n.toUpperCase():"GET",f=new RegExp("http[s]?://(.*?)/","gi").exec(e),d="_ts="+ +new Date,p=g.getElementsByTagName("head")[0],h="chibi"+ +new Date+(m+=1);return!u||"GET"!==l&&"DELETE"!==l||(e+=-1===e.indexOf("?")?"?"+u:"&"+u,u=null),"GET"===l&&!o&&f&&v.location.host!==f[1]?(a&&(e+=-1===e.indexOf("?")?"?"+d:"&"+d),e=e.replace("=%3F","=?"),r&&-1!==e.indexOf("=?")&&(e=e.replace("=?","="+h),v[h]=function(e){try{r(e,200)}catch(e){}v[h]=void 0}),(s=document.createElement("script")).async=!0,s.src=e,s.onload=function(){p.removeChild(s)},p.appendChild(s)):(v.XMLHttpRequest?c=new XMLHttpRequest:v.ActiveXObject&&(c=new ActiveXObject("Microsoft.XMLHTTP")),c&&(a&&(e+=-1===e.indexOf("?")?"?"+d:"&"+d),c.open(l,e,!0),c.onreadystatechange=function(){4===c.readyState&&r&&r(c.responseText,c.status)},c.setRequestHeader("X-Requested-With","XMLHttpRequest"),"POST"!==l&&"PUT"!==l||c.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),c.send(u))),t},t.get=function(e,n,r,a){return t.ajax(e,"get",n,r,a)},t.post=function(e,n,r){return t.ajax(e,"post",n,r)},t}var d=[],p=[],h=!1,y=!1,m=0,g=document,v=window;g.addEventListener?(g.addEventListener("DOMContentLoaded",e,!1),v.addEventListener("load",t,!1)):g.attachEvent?(g.attachEvent("onreadystatechange",e),v.attachEvent("onload",t)):v.onload=t,v.$=f}();
},{}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _handlebarsBase = require('./handlebars/base');

var base = _interopRequireWildcard(_handlebarsBase);

// Each of these augment the Handlebars object. No need to setup here.
// (This is done to easily share code between commonjs and browse envs)

var _handlebarsSafeString = require('./handlebars/safe-string');

var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

var _handlebarsException = require('./handlebars/exception');

var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

var _handlebarsUtils = require('./handlebars/utils');

var Utils = _interopRequireWildcard(_handlebarsUtils);

var _handlebarsRuntime = require('./handlebars/runtime');

var runtime = _interopRequireWildcard(_handlebarsRuntime);

var _handlebarsNoConflict = require('./handlebars/no-conflict');

var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

// For compatibility and usage outside of module systems, make the Handlebars object a namespace
function create() {
  var hb = new base.HandlebarsEnvironment();

  Utils.extend(hb, base);
  hb.SafeString = _handlebarsSafeString2['default'];
  hb.Exception = _handlebarsException2['default'];
  hb.Utils = Utils;
  hb.escapeExpression = Utils.escapeExpression;

  hb.VM = runtime;
  hb.template = function (spec) {
    return runtime.template(spec, hb);
  };

  return hb;
}

var inst = create();
inst.create = create;

_handlebarsNoConflict2['default'](inst);

inst['default'] = inst;

exports['default'] = inst;
module.exports = exports['default'];


},{"./handlebars/base":3,"./handlebars/exception":6,"./handlebars/no-conflict":19,"./handlebars/runtime":20,"./handlebars/safe-string":21,"./handlebars/utils":22}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.HandlebarsEnvironment = HandlebarsEnvironment;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('./utils');

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _helpers = require('./helpers');

var _decorators = require('./decorators');

var _logger = require('./logger');

var _logger2 = _interopRequireDefault(_logger);

var _internalProtoAccess = require('./internal/proto-access');

var VERSION = '4.7.6';
exports.VERSION = VERSION;
var COMPILER_REVISION = 8;
exports.COMPILER_REVISION = COMPILER_REVISION;
var LAST_COMPATIBLE_COMPILER_REVISION = 7;

exports.LAST_COMPATIBLE_COMPILER_REVISION = LAST_COMPATIBLE_COMPILER_REVISION;
var REVISION_CHANGES = {
  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
  2: '== 1.0.0-rc.3',
  3: '== 1.0.0-rc.4',
  4: '== 1.x.x',
  5: '== 2.0.0-alpha.x',
  6: '>= 2.0.0-beta.1',
  7: '>= 4.0.0 <4.3.0',
  8: '>= 4.3.0'
};

exports.REVISION_CHANGES = REVISION_CHANGES;
var objectType = '[object Object]';

function HandlebarsEnvironment(helpers, partials, decorators) {
  this.helpers = helpers || {};
  this.partials = partials || {};
  this.decorators = decorators || {};

  _helpers.registerDefaultHelpers(this);
  _decorators.registerDefaultDecorators(this);
}

HandlebarsEnvironment.prototype = {
  constructor: HandlebarsEnvironment,

  logger: _logger2['default'],
  log: _logger2['default'].log,

  registerHelper: function registerHelper(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple helpers');
      }
      _utils.extend(this.helpers, name);
    } else {
      this.helpers[name] = fn;
    }
  },
  unregisterHelper: function unregisterHelper(name) {
    delete this.helpers[name];
  },

  registerPartial: function registerPartial(name, partial) {
    if (_utils.toString.call(name) === objectType) {
      _utils.extend(this.partials, name);
    } else {
      if (typeof partial === 'undefined') {
        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
      }
      this.partials[name] = partial;
    }
  },
  unregisterPartial: function unregisterPartial(name) {
    delete this.partials[name];
  },

  registerDecorator: function registerDecorator(name, fn) {
    if (_utils.toString.call(name) === objectType) {
      if (fn) {
        throw new _exception2['default']('Arg not supported with multiple decorators');
      }
      _utils.extend(this.decorators, name);
    } else {
      this.decorators[name] = fn;
    }
  },
  unregisterDecorator: function unregisterDecorator(name) {
    delete this.decorators[name];
  },
  /**
   * Reset the memory of illegal property accesses that have already been logged.
   * @deprecated should only be used in handlebars test-cases
   */
  resetLoggedPropertyAccesses: function resetLoggedPropertyAccesses() {
    _internalProtoAccess.resetLoggedProperties();
  }
};

var log = _logger2['default'].log;

exports.log = log;
exports.createFrame = _utils.createFrame;
exports.logger = _logger2['default'];


},{"./decorators":4,"./exception":6,"./helpers":7,"./internal/proto-access":16,"./logger":18,"./utils":22}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultDecorators = registerDefaultDecorators;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _decoratorsInline = require('./decorators/inline');

var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

function registerDefaultDecorators(instance) {
  _decoratorsInline2['default'](instance);
}


},{"./decorators/inline":5}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerDecorator('inline', function (fn, props, container, options) {
    var ret = fn;
    if (!props.partials) {
      props.partials = {};
      ret = function (context, options) {
        // Create a new partials stack frame prior to exec.
        var original = container.partials;
        container.partials = _utils.extend({}, original, props.partials);
        var ret = fn(context, options);
        container.partials = original;
        return ret;
      };
    }

    props.partials[options.args[0]] = options.fn;

    return ret;
  });
};

module.exports = exports['default'];


},{"../utils":22}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var errorProps = ['description', 'fileName', 'lineNumber', 'endLineNumber', 'message', 'name', 'number', 'stack'];

function Exception(message, node) {
  var loc = node && node.loc,
      line = undefined,
      endLineNumber = undefined,
      column = undefined,
      endColumn = undefined;

  if (loc) {
    line = loc.start.line;
    endLineNumber = loc.end.line;
    column = loc.start.column;
    endColumn = loc.end.column;

    message += ' - ' + line + ':' + column;
  }

  var tmp = Error.prototype.constructor.call(this, message);

  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
  for (var idx = 0; idx < errorProps.length; idx++) {
    this[errorProps[idx]] = tmp[errorProps[idx]];
  }

  /* istanbul ignore else */
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Exception);
  }

  try {
    if (loc) {
      this.lineNumber = line;
      this.endLineNumber = endLineNumber;

      // Work around issue under safari where we can't directly set the column value
      /* istanbul ignore next */
      if (Object.defineProperty) {
        Object.defineProperty(this, 'column', {
          value: column,
          enumerable: true
        });
        Object.defineProperty(this, 'endColumn', {
          value: endColumn,
          enumerable: true
        });
      } else {
        this.column = column;
        this.endColumn = endColumn;
      }
    }
  } catch (nop) {
    /* Ignore if the browser is very particular */
  }
}

Exception.prototype = new Error();

exports['default'] = Exception;
module.exports = exports['default'];


},{}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.registerDefaultHelpers = registerDefaultHelpers;
exports.moveHelperToHooks = moveHelperToHooks;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _helpersBlockHelperMissing = require('./helpers/block-helper-missing');

var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

var _helpersEach = require('./helpers/each');

var _helpersEach2 = _interopRequireDefault(_helpersEach);

var _helpersHelperMissing = require('./helpers/helper-missing');

var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

var _helpersIf = require('./helpers/if');

var _helpersIf2 = _interopRequireDefault(_helpersIf);

var _helpersLog = require('./helpers/log');

var _helpersLog2 = _interopRequireDefault(_helpersLog);

var _helpersLookup = require('./helpers/lookup');

var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

var _helpersWith = require('./helpers/with');

var _helpersWith2 = _interopRequireDefault(_helpersWith);

function registerDefaultHelpers(instance) {
  _helpersBlockHelperMissing2['default'](instance);
  _helpersEach2['default'](instance);
  _helpersHelperMissing2['default'](instance);
  _helpersIf2['default'](instance);
  _helpersLog2['default'](instance);
  _helpersLookup2['default'](instance);
  _helpersWith2['default'](instance);
}

function moveHelperToHooks(instance, helperName, keepHelper) {
  if (instance.helpers[helperName]) {
    instance.hooks[helperName] = instance.helpers[helperName];
    if (!keepHelper) {
      delete instance.helpers[helperName];
    }
  }
}


},{"./helpers/block-helper-missing":8,"./helpers/each":9,"./helpers/helper-missing":10,"./helpers/if":11,"./helpers/log":12,"./helpers/lookup":13,"./helpers/with":14}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('../utils');

exports['default'] = function (instance) {
  instance.registerHelper('blockHelperMissing', function (context, options) {
    var inverse = options.inverse,
        fn = options.fn;

    if (context === true) {
      return fn(this);
    } else if (context === false || context == null) {
      return inverse(this);
    } else if (_utils.isArray(context)) {
      if (context.length > 0) {
        if (options.ids) {
          options.ids = [options.name];
        }

        return instance.helpers.each(context, options);
      } else {
        return inverse(this);
      }
    } else {
      if (options.data && options.ids) {
        var data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
        options = { data: data };
      }

      return fn(context, options);
    }
  });
};

module.exports = exports['default'];


},{"../utils":22}],9:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('each', function (context, options) {
    if (!options) {
      throw new _exception2['default']('Must pass iterator to #each');
    }

    var fn = options.fn,
        inverse = options.inverse,
        i = 0,
        ret = '',
        data = undefined,
        contextPath = undefined;

    if (options.data && options.ids) {
      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
    }

    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    if (options.data) {
      data = _utils.createFrame(options.data);
    }

    function execIteration(field, index, last) {
      if (data) {
        data.key = field;
        data.index = index;
        data.first = index === 0;
        data.last = !!last;

        if (contextPath) {
          data.contextPath = contextPath + field;
        }
      }

      ret = ret + fn(context[field], {
        data: data,
        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
      });
    }

    if (context && typeof context === 'object') {
      if (_utils.isArray(context)) {
        for (var j = context.length; i < j; i++) {
          if (i in context) {
            execIteration(i, i, i === context.length - 1);
          }
        }
      } else if (global.Symbol && context[global.Symbol.iterator]) {
        var newContext = [];
        var iterator = context[global.Symbol.iterator]();
        for (var it = iterator.next(); !it.done; it = iterator.next()) {
          newContext.push(it.value);
        }
        context = newContext;
        for (var j = context.length; i < j; i++) {
          execIteration(i, i, i === context.length - 1);
        }
      } else {
        (function () {
          var priorKey = undefined;

          Object.keys(context).forEach(function (key) {
            // We're running the iterations one step out of sync so we can detect
            // the last iteration without have to scan the object twice and create
            // an itermediate keys array.
            if (priorKey !== undefined) {
              execIteration(priorKey, i - 1);
            }
            priorKey = key;
            i++;
          });
          if (priorKey !== undefined) {
            execIteration(priorKey, i - 1, true);
          }
        })();
      }
    }

    if (i === 0) {
      ret = inverse(this);
    }

    return ret;
  });
};

module.exports = exports['default'];


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../exception":6,"../utils":22}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('helperMissing', function () /* [args, ]options */{
    if (arguments.length === 1) {
      // A missing field in a {{foo}} construct.
      return undefined;
    } else {
      // Someone is actually trying to call something, blow up.
      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    }
  });
};

module.exports = exports['default'];


},{"../exception":6}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('if', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#if requires exactly one argument');
    }
    if (_utils.isFunction(conditional)) {
      conditional = conditional.call(this);
    }

    // Default behavior is to render the positive path if the value is truthy and not empty.
    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
      return options.inverse(this);
    } else {
      return options.fn(this);
    }
  });

  instance.registerHelper('unless', function (conditional, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#unless requires exactly one argument');
    }
    return instance.helpers['if'].call(this, conditional, {
      fn: options.inverse,
      inverse: options.fn,
      hash: options.hash
    });
  });
};

module.exports = exports['default'];


},{"../exception":6,"../utils":22}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('log', function () /* message, options */{
    var args = [undefined],
        options = arguments[arguments.length - 1];
    for (var i = 0; i < arguments.length - 1; i++) {
      args.push(arguments[i]);
    }

    var level = 1;
    if (options.hash.level != null) {
      level = options.hash.level;
    } else if (options.data && options.data.level != null) {
      level = options.data.level;
    }
    args[0] = level;

    instance.log.apply(instance, args);
  });
};

module.exports = exports['default'];


},{}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;

exports['default'] = function (instance) {
  instance.registerHelper('lookup', function (obj, field, options) {
    if (!obj) {
      // Note for 5.0: Change to "obj == null" in 5.0
      return obj;
    }
    return options.lookupProperty(obj, field);
  });
};

module.exports = exports['default'];


},{}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utils = require('../utils');

var _exception = require('../exception');

var _exception2 = _interopRequireDefault(_exception);

exports['default'] = function (instance) {
  instance.registerHelper('with', function (context, options) {
    if (arguments.length != 2) {
      throw new _exception2['default']('#with requires exactly one argument');
    }
    if (_utils.isFunction(context)) {
      context = context.call(this);
    }

    var fn = options.fn;

    if (!_utils.isEmpty(context)) {
      var data = options.data;
      if (options.data && options.ids) {
        data = _utils.createFrame(options.data);
        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
      }

      return fn(context, {
        data: data,
        blockParams: _utils.blockParams([context], [data && data.contextPath])
      });
    } else {
      return options.inverse(this);
    }
  });
};

module.exports = exports['default'];


},{"../exception":6,"../utils":22}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.createNewLookupObject = createNewLookupObject;

var _utils = require('../utils');

/**
 * Create a new object with "null"-prototype to avoid truthy results on prototype properties.
 * The resulting object can be used with "object[property]" to check if a property exists
 * @param {...object} sources a varargs parameter of source objects that will be merged
 * @returns {object}
 */

function createNewLookupObject() {
  for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
    sources[_key] = arguments[_key];
  }

  return _utils.extend.apply(undefined, [Object.create(null)].concat(sources));
}


},{"../utils":22}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.createProtoAccessControl = createProtoAccessControl;
exports.resultIsAllowed = resultIsAllowed;
exports.resetLoggedProperties = resetLoggedProperties;
// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _createNewLookupObject = require('./create-new-lookup-object');

var _logger = require('../logger');

var logger = _interopRequireWildcard(_logger);

var loggedProperties = Object.create(null);

function createProtoAccessControl(runtimeOptions) {
  var defaultMethodWhiteList = Object.create(null);
  defaultMethodWhiteList['constructor'] = false;
  defaultMethodWhiteList['__defineGetter__'] = false;
  defaultMethodWhiteList['__defineSetter__'] = false;
  defaultMethodWhiteList['__lookupGetter__'] = false;

  var defaultPropertyWhiteList = Object.create(null);
  // eslint-disable-next-line no-proto
  defaultPropertyWhiteList['__proto__'] = false;

  return {
    properties: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultPropertyWhiteList, runtimeOptions.allowedProtoProperties),
      defaultValue: runtimeOptions.allowProtoPropertiesByDefault
    },
    methods: {
      whitelist: _createNewLookupObject.createNewLookupObject(defaultMethodWhiteList, runtimeOptions.allowedProtoMethods),
      defaultValue: runtimeOptions.allowProtoMethodsByDefault
    }
  };
}

function resultIsAllowed(result, protoAccessControl, propertyName) {
  if (typeof result === 'function') {
    return checkWhiteList(protoAccessControl.methods, propertyName);
  } else {
    return checkWhiteList(protoAccessControl.properties, propertyName);
  }
}

function checkWhiteList(protoAccessControlForType, propertyName) {
  if (protoAccessControlForType.whitelist[propertyName] !== undefined) {
    return protoAccessControlForType.whitelist[propertyName] === true;
  }
  if (protoAccessControlForType.defaultValue !== undefined) {
    return protoAccessControlForType.defaultValue;
  }
  logUnexpecedPropertyAccessOnce(propertyName);
  return false;
}

function logUnexpecedPropertyAccessOnce(propertyName) {
  if (loggedProperties[propertyName] !== true) {
    loggedProperties[propertyName] = true;
    logger.log('error', 'Handlebars: Access has been denied to resolve the property "' + propertyName + '" because it is not an "own property" of its parent.\n' + 'You can add a runtime option to disable the check or this warning:\n' + 'See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details');
  }
}

function resetLoggedProperties() {
  Object.keys(loggedProperties).forEach(function (propertyName) {
    delete loggedProperties[propertyName];
  });
}


},{"../logger":18,"./create-new-lookup-object":15}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.wrapHelper = wrapHelper;

function wrapHelper(helper, transformOptionsFn) {
  if (typeof helper !== 'function') {
    // This should not happen, but apparently it does in https://github.com/wycats/handlebars.js/issues/1639
    // We try to make the wrapper least-invasive by not wrapping it, if the helper is not a function.
    return helper;
  }
  var wrapper = function wrapper() /* dynamic arguments */{
    var options = arguments[arguments.length - 1];
    arguments[arguments.length - 1] = transformOptionsFn(options);
    return helper.apply(this, arguments);
  };
  return wrapper;
}


},{}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _utils = require('./utils');

var logger = {
  methodMap: ['debug', 'info', 'warn', 'error'],
  level: 'info',

  // Maps a given level value to the `methodMap` indexes above.
  lookupLevel: function lookupLevel(level) {
    if (typeof level === 'string') {
      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
      if (levelMap >= 0) {
        level = levelMap;
      } else {
        level = parseInt(level, 10);
      }
    }

    return level;
  },

  // Can be overridden in the host environment
  log: function log(level) {
    level = logger.lookupLevel(level);

    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
      var method = logger.methodMap[level];
      // eslint-disable-next-line no-console
      if (!console[method]) {
        method = 'log';
      }

      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        message[_key - 1] = arguments[_key];
      }

      console[method].apply(console, message); // eslint-disable-line no-console
    }
  }
};

exports['default'] = logger;
module.exports = exports['default'];


},{"./utils":22}],19:[function(require,module,exports){
(function (global){
'use strict';

exports.__esModule = true;

exports['default'] = function (Handlebars) {
  /* istanbul ignore next */
  var root = typeof global !== 'undefined' ? global : window,
      $Handlebars = root.Handlebars;
  /* istanbul ignore next */
  Handlebars.noConflict = function () {
    if (root.Handlebars === Handlebars) {
      root.Handlebars = $Handlebars;
    }
    return Handlebars;
  };
};

module.exports = exports['default'];


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.checkRevision = checkRevision;
exports.template = template;
exports.wrapProgram = wrapProgram;
exports.resolvePartial = resolvePartial;
exports.invokePartial = invokePartial;
exports.noop = noop;
// istanbul ignore next

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// istanbul ignore next

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _utils = require('./utils');

var Utils = _interopRequireWildcard(_utils);

var _exception = require('./exception');

var _exception2 = _interopRequireDefault(_exception);

var _base = require('./base');

var _helpers = require('./helpers');

var _internalWrapHelper = require('./internal/wrapHelper');

var _internalProtoAccess = require('./internal/proto-access');

function checkRevision(compilerInfo) {
  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
      currentRevision = _base.COMPILER_REVISION;

  if (compilerRevision >= _base.LAST_COMPATIBLE_COMPILER_REVISION && compilerRevision <= _base.COMPILER_REVISION) {
    return;
  }

  if (compilerRevision < _base.LAST_COMPATIBLE_COMPILER_REVISION) {
    var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
        compilerVersions = _base.REVISION_CHANGES[compilerRevision];
    throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
  } else {
    // Use the embedded version info since the runtime doesn't know about this revision yet
    throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
  }
}

function template(templateSpec, env) {
  /* istanbul ignore next */
  if (!env) {
    throw new _exception2['default']('No environment passed to template');
  }
  if (!templateSpec || !templateSpec.main) {
    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
  }

  templateSpec.main.decorator = templateSpec.main_d;

  // Note: Using env.VM references rather than local var references throughout this section to allow
  // for external users to override these as pseudo-supported APIs.
  env.VM.checkRevision(templateSpec.compiler);

  // backwards compatibility for precompiled templates with compiler-version 7 (<4.3.0)
  var templateWasPrecompiledWithCompilerV7 = templateSpec.compiler && templateSpec.compiler[0] === 7;

  function invokePartialWrapper(partial, context, options) {
    if (options.hash) {
      context = Utils.extend({}, context, options.hash);
      if (options.ids) {
        options.ids[0] = true;
      }
    }
    partial = env.VM.resolvePartial.call(this, partial, context, options);

    var extendedOptions = Utils.extend({}, options, {
      hooks: this.hooks,
      protoAccessControl: this.protoAccessControl
    });

    var result = env.VM.invokePartial.call(this, partial, context, extendedOptions);

    if (result == null && env.compile) {
      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
      result = options.partials[options.name](context, extendedOptions);
    }
    if (result != null) {
      if (options.indent) {
        var lines = result.split('\n');
        for (var i = 0, l = lines.length; i < l; i++) {
          if (!lines[i] && i + 1 === l) {
            break;
          }

          lines[i] = options.indent + lines[i];
        }
        result = lines.join('\n');
      }
      return result;
    } else {
      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
    }
  }

  // Just add water
  var container = {
    strict: function strict(obj, name, loc) {
      if (!obj || !(name in obj)) {
        throw new _exception2['default']('"' + name + '" not defined in ' + obj, {
          loc: loc
        });
      }
      return obj[name];
    },
    lookupProperty: function lookupProperty(parent, propertyName) {
      var result = parent[propertyName];
      if (result == null) {
        return result;
      }
      if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
        return result;
      }

      if (_internalProtoAccess.resultIsAllowed(result, container.protoAccessControl, propertyName)) {
        return result;
      }
      return undefined;
    },
    lookup: function lookup(depths, name) {
      var len = depths.length;
      for (var i = 0; i < len; i++) {
        var result = depths[i] && container.lookupProperty(depths[i], name);
        if (result != null) {
          return depths[i][name];
        }
      }
    },
    lambda: function lambda(current, context) {
      return typeof current === 'function' ? current.call(context) : current;
    },

    escapeExpression: Utils.escapeExpression,
    invokePartial: invokePartialWrapper,

    fn: function fn(i) {
      var ret = templateSpec[i];
      ret.decorator = templateSpec[i + '_d'];
      return ret;
    },

    programs: [],
    program: function program(i, data, declaredBlockParams, blockParams, depths) {
      var programWrapper = this.programs[i],
          fn = this.fn(i);
      if (data || depths || blockParams || declaredBlockParams) {
        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
      } else if (!programWrapper) {
        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
      }
      return programWrapper;
    },

    data: function data(value, depth) {
      while (value && depth--) {
        value = value._parent;
      }
      return value;
    },
    mergeIfNeeded: function mergeIfNeeded(param, common) {
      var obj = param || common;

      if (param && common && param !== common) {
        obj = Utils.extend({}, common, param);
      }

      return obj;
    },
    // An empty object to use as replacement for null-contexts
    nullContext: Object.seal({}),

    noop: env.VM.noop,
    compilerInfo: templateSpec.compiler
  };

  function ret(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var data = options.data;

    ret._setup(options);
    if (!options.partial && templateSpec.useData) {
      data = initData(context, data);
    }
    var depths = undefined,
        blockParams = templateSpec.useBlockParams ? [] : undefined;
    if (templateSpec.useDepths) {
      if (options.depths) {
        depths = context != options.depths[0] ? [context].concat(options.depths) : options.depths;
      } else {
        depths = [context];
      }
    }

    function main(context /*, options*/) {
      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
    }

    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
    return main(context, options);
  }

  ret.isTop = true;

  ret._setup = function (options) {
    if (!options.partial) {
      var mergedHelpers = Utils.extend({}, env.helpers, options.helpers);
      wrapHelpersToPassLookupProperty(mergedHelpers, container);
      container.helpers = mergedHelpers;

      if (templateSpec.usePartial) {
        // Use mergeIfNeeded here to prevent compiling global partials multiple times
        container.partials = container.mergeIfNeeded(options.partials, env.partials);
      }
      if (templateSpec.usePartial || templateSpec.useDecorators) {
        container.decorators = Utils.extend({}, env.decorators, options.decorators);
      }

      container.hooks = {};
      container.protoAccessControl = _internalProtoAccess.createProtoAccessControl(options);

      var keepHelperInHelpers = options.allowCallsToHelperMissing || templateWasPrecompiledWithCompilerV7;
      _helpers.moveHelperToHooks(container, 'helperMissing', keepHelperInHelpers);
      _helpers.moveHelperToHooks(container, 'blockHelperMissing', keepHelperInHelpers);
    } else {
      container.protoAccessControl = options.protoAccessControl; // internal option
      container.helpers = options.helpers;
      container.partials = options.partials;
      container.decorators = options.decorators;
      container.hooks = options.hooks;
    }
  };

  ret._child = function (i, data, blockParams, depths) {
    if (templateSpec.useBlockParams && !blockParams) {
      throw new _exception2['default']('must pass block params');
    }
    if (templateSpec.useDepths && !depths) {
      throw new _exception2['default']('must pass parent depths');
    }

    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
  };
  return ret;
}

function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
  function prog(context) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var currentDepths = depths;
    if (depths && context != depths[0] && !(context === container.nullContext && depths[0] === null)) {
      currentDepths = [context].concat(depths);
    }

    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
  }

  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

  prog.program = i;
  prog.depth = depths ? depths.length : 0;
  prog.blockParams = declaredBlockParams || 0;
  return prog;
}

/**
 * This is currently part of the official API, therefore implementation details should not be changed.
 */

function resolvePartial(partial, context, options) {
  if (!partial) {
    if (options.name === '@partial-block') {
      partial = options.data['partial-block'];
    } else {
      partial = options.partials[options.name];
    }
  } else if (!partial.call && !options.name) {
    // This is a dynamic partial that returned a string
    options.name = partial;
    partial = options.partials[partial];
  }
  return partial;
}

function invokePartial(partial, context, options) {
  // Use the current closure context to save the partial-block if this partial
  var currentPartialBlock = options.data && options.data['partial-block'];
  options.partial = true;
  if (options.ids) {
    options.data.contextPath = options.ids[0] || options.data.contextPath;
  }

  var partialBlock = undefined;
  if (options.fn && options.fn !== noop) {
    (function () {
      options.data = _base.createFrame(options.data);
      // Wrapper function to get access to currentPartialBlock from the closure
      var fn = options.fn;
      partialBlock = options.data['partial-block'] = function partialBlockWrapper(context) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        // Restore the partial-block from the closure for the execution of the block
        // i.e. the part inside the block of the partial call.
        options.data = _base.createFrame(options.data);
        options.data['partial-block'] = currentPartialBlock;
        return fn(context, options);
      };
      if (fn.partials) {
        options.partials = Utils.extend({}, options.partials, fn.partials);
      }
    })();
  }

  if (partial === undefined && partialBlock) {
    partial = partialBlock;
  }

  if (partial === undefined) {
    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
  } else if (partial instanceof Function) {
    return partial(context, options);
  }
}

function noop() {
  return '';
}

function initData(context, data) {
  if (!data || !('root' in data)) {
    data = data ? _base.createFrame(data) : {};
    data.root = context;
  }
  return data;
}

function executeDecorators(fn, prog, container, depths, data, blockParams) {
  if (fn.decorator) {
    var props = {};
    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
    Utils.extend(prog, props);
  }
  return prog;
}

function wrapHelpersToPassLookupProperty(mergedHelpers, container) {
  Object.keys(mergedHelpers).forEach(function (helperName) {
    var helper = mergedHelpers[helperName];
    mergedHelpers[helperName] = passLookupPropertyOption(helper, container);
  });
}

function passLookupPropertyOption(helper, container) {
  var lookupProperty = container.lookupProperty;
  return _internalWrapHelper.wrapHelper(helper, function (options) {
    return Utils.extend({ lookupProperty: lookupProperty }, options);
  });
}


},{"./base":3,"./exception":6,"./helpers":7,"./internal/proto-access":16,"./internal/wrapHelper":17,"./utils":22}],21:[function(require,module,exports){
// Build out our basic SafeString type
'use strict';

exports.__esModule = true;
function SafeString(string) {
  this.string = string;
}

SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
  return '' + this.string;
};

exports['default'] = SafeString;
module.exports = exports['default'];


},{}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.extend = extend;
exports.indexOf = indexOf;
exports.escapeExpression = escapeExpression;
exports.isEmpty = isEmpty;
exports.createFrame = createFrame;
exports.blockParams = blockParams;
exports.appendContextPath = appendContextPath;
var escape = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

var badChars = /[&<>"'`=]/g,
    possible = /[&<>"'`=]/;

function escapeChar(chr) {
  return escape[chr];
}

function extend(obj /* , ...source */) {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
        obj[key] = arguments[i][key];
      }
    }
  }

  return obj;
}

var toString = Object.prototype.toString;

exports.toString = toString;
// Sourced from lodash
// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
/* eslint-disable func-style */
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
// fallback for older versions of Chrome and Safari
/* istanbul ignore next */
if (isFunction(/x/)) {
  exports.isFunction = isFunction = function (value) {
    return typeof value === 'function' && toString.call(value) === '[object Function]';
  };
}
exports.isFunction = isFunction;

/* eslint-enable func-style */

/* istanbul ignore next */
var isArray = Array.isArray || function (value) {
  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
};

exports.isArray = isArray;
// Older IE versions do not directly support indexOf so we must implement our own, sadly.

function indexOf(array, value) {
  for (var i = 0, len = array.length; i < len; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

function escapeExpression(string) {
  if (typeof string !== 'string') {
    // don't escape SafeStrings, since they're already safe
    if (string && string.toHTML) {
      return string.toHTML();
    } else if (string == null) {
      return '';
    } else if (!string) {
      return string + '';
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = '' + string;
  }

  if (!possible.test(string)) {
    return string;
  }
  return string.replace(badChars, escapeChar);
}

function isEmpty(value) {
  if (!value && value !== 0) {
    return true;
  } else if (isArray(value) && value.length === 0) {
    return true;
  } else {
    return false;
  }
}

function createFrame(object) {
  var frame = extend({}, object);
  frame._parent = object;
  return frame;
}

function blockParams(params, ids) {
  params.path = ids;
  return params;
}

function appendContextPath(contextPath, id) {
  return (contextPath ? contextPath + '.' : '') + id;
}


},{}],23:[function(require,module,exports){
module.exports = require("handlebars/runtime")["default"];

},{"handlebars/runtime":2}],24:[function(require,module,exports){
module.exports={
  "name": "ejdicto_info",
  "version": "1.0.0",
  "description": "Site de présentation de l'application ejDicto",
  "main": "build/app.js",
  "directories": {
    "lib": "lib"
  },
  "scripts": {
    "help": "bash ./outils.sh help",
    "dev": "bash ./outils.sh dev",
    "vendors": "bash ./outils.sh vendors",
    "build": "bash ./outils.sh build",
    "test": "bash ./outils.sh test",
    "clean": "bash ./outils.sh clean",
    "deploy": "bash ./outils.sh deploy"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/pcardona34/ejdicto_info.git"
  },
  "keywords": [
    "dictée",
    "réécriture",
    "exerciseur"
  ],
  "author": "Patrick Cardona",
  "license": "GPL-3.0-or-later",
  "homepage": "https://github.com/pcardona34/ejdicto_info#readme",
  "dependencies": {
    "chibijs": "^3.0.9"
  },
  "devDependencies": {
    "clean-css": "^4.2.3",
    "handlebars": "^4.7.6",
    "hbsfy": "^2.8.1",
    "http-server": "^0.12.1",
    "jsmin": "^1.0.1"
  }
}

},{}],25:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"w3-display-container mySlides w3-center\">\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(data && lookupProperty(data,"last")),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data,"loc":{"start":{"line":14,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "")
    + "</div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return "  <div class=\"W3-display-middle demo\">\n  <h1 class=\"w3-text-teal w3-jumbo w3-center\">Allons-y !</h1>\n  <p><a class=\"w3-button w3-green w3-round w3-xxlarge w3-center\" \n  href=\"https://pcardona34.github.io/ejdicto\">ejDicto</a></p>\n </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  <img class=\"demo\" src=\"./static/images/ejdicto"
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"indice") : depth0), depth0))
    + ".jpg\" style=\"height: 50%\">\n    <div class=\"w3-display-middle w3-container w3-padding-16 analogue w3-yellow w3-round\" style=\"font-size: 2rem\">\n    "
    + alias2(alias1((depth0 != null ? lookupProperty(depth0,"legende") : depth0), depth0))
    + "\n    </div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- ==================================\n *     e j D i c t o    info            *\n * ==================================== *\n * (c)2012-2020 - Patrick Cardona       *\n * Licence GPL version 3 ou ultérieure  *\n * VOIR la licence complète à la racine *\n * ==================================== -->\n \n <!-- diaporamaTemplate.hbs -->\n\n<div class=\"w3-content w3-display-container\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":12,"column":0},"end":{"line":27,"column":9}}})) != null ? stack1 : "")
    + "<div class=\"w3-center w3-display-middle\" style=\"width:100%\">\n    <div class=\"w3-left chevron\" onclick=\"plusDivs(-1)\">&#10094;</div>\n    <div class=\"w3-right chevron\" onclick=\"plusDivs(1)\">&#10095;</div>\n  </div>\n</div>\n";
},"useData":true});

},{"hbsfy/runtime":23}],26:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- ==================================\n *      e j D i c t o  info             *\n * ==================================== *\n * (c)2012-2020 - Patrick Cardona       *\n * Licence GPL version 3 ou ultérieure  *\n * VOIR la licence complète à la racine *\n * ==================================== -->\n\n<!-- Template : pied de page\n  piedTemplate.hbs\n-->\n\n<!-- Pied de page -->\n\n    <footer class=\"w3-bottom w3-center fonce\">\n      Présentation de ejDicto "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"version") || (depth0 != null ? lookupProperty(depth0,"version") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"version","hash":{},"data":data,"loc":{"start":{"line":16,"column":30},"end":{"line":16,"column":41}}}) : helper)))
    + " &ndash; &copy; 2020 Patrick Cardona <span class=\"w3-hide-small\">|</span> \n      Hébergement&nbsp;: <a title=\"site hébergeur\" \n      href=\"https://github.com\" \n      target=\"_blank\" rel=\"noreferrer noopener\" style=\"text-decoration: none\">\n      GitHub\n      </a>\n    </footer>";
},"useData":true});

},{"hbsfy/runtime":23}],27:[function(require,module,exports){
/* ==================================== *
 *      e j D i c t o  info             *
 * ==================================== *
 * (c)2012-2020 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* Gestion du diaporama */
/* D'après W3.css : https://www.w3schools.com/w3css/w3css_slideshow.asp */

var slideIndex = 1;
exports.slideIndex;

exports.plusDivs = function (n) {
  showDivs(slideIndex += n);
};

exports.currentDiv = function (n) {
  showDivs(slideIndex = n);
};

exports.showDivs = function(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i = i + 1) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i = i + 1) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
};
},{}],28:[function(require,module,exports){
/* ==================================== *
 *      e j D i c t o      info         *
 * ==================================== *
 * (c)2012-2020 - Patrick Cardona       *
 * Licence GPL version 3 ou ultérieure  *
 * VOIR la licence complète à la racine *
 * ==================================== */

/* Script majeur en phase de développement : main.js
 * Compilé, il produit app.js dans le dossier 'build'
 *  --------------------------------
 * Appels des dépendances
 * Compilation des templates
 * --------------------------------
*/

"use strict";
/*jslint browser: true*/
/*global window*/

/* VERSION */
const versionApp = require('../package.json').version;

/* Messages de l'interface */
const MSG = require('../static/config/messages.json').msg;
/* Images et commentaires */
const IMG = require('../static/config/images.json').img;

/* Dépendances externes : frameworks & modules*/
/* Runtime de compilation des templates Handlebars avec le bundler Browserify */
const Handlebars = require('hbsfy/runtime');
const chibijs = require('chibijs');

window.slideIndex = require('./lib/scripts/diaporama.js').slideIndex;
window.plusDivs = require('./lib/scripts/diaporama.js').plusDivs;
window.currentDiv = require('./lib/scripts/diaporama.js').currentDiv;
window.showDivs = require('./lib/scripts/diaporama.js').showDivs;


/* ========================================
 *          H e l p e r s
 *           Génériques
 * ========================================
 */

/* Passer en capitale la première lettre de la chaine */
Handlebars.registerHelper("capitalisePremiereLettre", function (sChaine) {
  if(typeof sChaine === 'string') {
    return sChaine.charAt(0).toUpperCase() + sChaine.slice(1);
    }
    return null;
});

/* Helper : encode HTML (entitie, etc.) */
Handlebars.registerHelper('encodeChaine',function(chaine){
    return new Handlebars.SafeString(chaine);
});

/* Helper : augmente l'index de 1 */
Handlebars.registerHelper("indexPlusUn", function (index){
  let indice = 0;
  if (typeof index === 'integer'){
  indice = index + 1;
  }else{
  indice = parseInt(index, 10);
  indice = indice + 1;
  }
  return indice;
});


/* ========================================
 *          Templates des Pages
 * ========================================
 */

Handlebars.registerPartial("diaporama", require('./composants/diaporamaTemplate.hbs'));

/* Page d'accueil générale */
const accueilTemplate = require("./pages/accueilTemplate.hbs");
/* Pied de page */
const piedDePageTemplate = require("./composants/piedTemplate.hbs");

/* =========================================================
 *    On charge l'interface via un événement global load
 * =========================================================
 */

window.addEventListener('load', () => {
 /* Zones cibles */
const app = $('#app');
const piedDePage = piedDePageTemplate({'version': versionApp});


  /* =========================
   * === Chemin générique ===
   * =========================
   */
  let contenu = {};
  contenu.bienvenue = MSG.bienvenue;
  contenu.img = IMG;
  let html = accueilTemplate(contenu);
  console.log(html);
  app.html(html);
  showDivs(slideIndex);
  app.htmlAppend(piedDePage);


}); /* Fin de event load */


},{"../package.json":24,"../static/config/images.json":30,"../static/config/messages.json":31,"./composants/diaporamaTemplate.hbs":25,"./composants/piedTemplate.hbs":26,"./lib/scripts/diaporama.js":27,"./pages/accueilTemplate.hbs":29,"chibijs":1,"hbsfy/runtime":23}],29:[function(require,module,exports){
// hbsfy compiled Handlebars template
var HandlebarsCompiler = require('hbsfy/runtime');
module.exports = HandlebarsCompiler.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!-- ==================================\n *     e j D i c t o    info            *\n * ==================================== *\n * (c)2012-2020 - Patrick Cardona       *\n * Licence GPL version 3 ou ultérieure  *\n * VOIR la licence complète à la racine *\n * ==================================== -->\n \n <!-- accueilTemplate.hbs -->\n\n <div class=\"w3-container\" id=\"page_accueil\">\n   <h1 class=\"w3-wide w3-center texte-fonce\" >"
    + ((stack1 = (lookupProperty(helpers,"encodeChaine")||(depth0 && lookupProperty(depth0,"encodeChaine"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"bienvenue") : depth0),{"name":"encodeChaine","hash":{},"data":data,"loc":{"start":{"line":12,"column":46},"end":{"line":12,"column":75}}})) != null ? stack1 : "")
    + "</h1>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"diaporama"),(depth0 != null ? lookupProperty(depth0,"img") : depth0),{"name":"diaporama","data":data,"indent":"   ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + " </div> \n\n";
},"usePartial":true,"useData":true});

},{"hbsfy/runtime":23}],30:[function(require,module,exports){
module.exports=/* Images */


{
"img": [
 {"indice": 1, "legende": "Page d'accueil"},
 {"indice": 2, "legende": "Liste filtrée"},
 {"indice": 3, "legende": "Mode d'emploi"},
 {"indice": 4, "legende": "Écoute d'une dictée"},
 {"indice": 5, "legende": "Saisie d'une dictée"},
 {"indice": 6, "legende": "Bilan intermédiaire"},
 {"indice": 7, "legende": "Affichage de la correction"},
 {"indice": 8, "legende": "Gestion du profil"},
 {"indice": 9, "legende": "Liste des dictées aménagées"},
 {"indice": 10, "legende": "Assistant de la saisie"},
 {"indice": 11, "legende": "mentions légales"},
 {"indice": 12, "legende": "Liste des réécritures"},
 {"indice": 13, "legende": "Mode d'emploi d'une réécriture"},
 {"indice": 14, "legende": "Une réécriture : consigne et texte initial"},
 {"indice": 15, "legende": "Aide : conseils pour améliorer sa saisie"},
 {"indice": 16, "legende": "Interface mobile"},
 {"indice": 17, "legende": "Affichage du menu des actions"},
 {"indice": 18, "legende": "<a href='https://pcardona34.github.io/ejdicto' class='w3-button'>Allons-y !</a>"}
  ]
}
},{}],31:[function(require,module,exports){
module.exports=/* Messages de l'interface */


{
"msg": {
  "bienvenue": "<a href='https://pcardona34.github.io/ejdicto'>ejDicto</a>, espace d'entrainement en orthographe&nbsp;!",
  }
}
},{}]},{},[28]);
