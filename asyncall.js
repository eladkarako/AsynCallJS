/* AsynCallJS 1.3.5 - JavaScript's Easiest Async-RunSupport For Methods.
 * https://github.com/eladkarako/AsynCallJS/
 * 
 * Copyright (c) 2015 Elad Karako (eladkarako.com)
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 */

//override in YOUR function. callback will fire when running is done along with the result and array of parameters sent.
Function.prototype.asyncall_callback = function () {return true};

//
Function.prototype.asyncall = function () {
  var _this = this
    , _arguments = arguments
    , _result
    ;

  setTimeout(function () {
    _result = _this.apply(_this, _arguments);
    setTimeout(function () {
      _this.asyncall_callback(_result, _arguments)
    }, 10);
  }, 10);

  return _this;
};

/*
 1. create a function.
 2. set callback (optional), assigning new function to asyncall_callback.
 3. run your function with any amount of parameters as usual, using asyncall(param1, param2, ...)
 4. done.

 A.  The callback function:
 A1.   Fires (async) when your function will done running (async).
 A2.   callback may use following signature "function(result, parameters){}".
 B.  The asyncall(...) returns "this" (your function back) so you could (optionally) chain stuff, like "promise".

 */


/* test */
/*
 function sqr(n) {
   return Math.pow(n, 2);
 }

 sqr.asyncall_callback = function (result, args) {
   console.log("parameters used:", args);
   console.log("result:", result);
 };

 sqr.asyncall(5);
 */
