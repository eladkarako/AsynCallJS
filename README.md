# AsynCallJS
## JavaScript's Easiest Async-Run Support For Methods.
#### It's Easy As <img src="https://i.imgur.com/nupHZdW.png" alt="pie"/>

    /* AsynCallJS 1.3.5 - JavaScript's Easiest Async-Run Support For Methods.
     * https://github.com/eladkarako/AsynCallJS/
     *
     * Copyright (c) 2015 Elad Karako (eladkarako.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     */

#####It Makes All Of Your Methods Magically Support Async-Execution <img src="https://i.imgur.com/ISy881a.png" alt=""/>, No Fuss.
###<img src="https://i.imgur.com/jCAWARC.png" alt=""/> Example First
    function sqr(n) {
      return Math.pow(n, 2);
    }

    sqr.asyncall_callback = function (result, args) {
      console.log("parameters used:", args);
      console.log("result:", result);
    };

    sqr.asyncall(5);
    
    //output #1:  "parameters used:" [5]
    //output #2:  "result:" 25
<hr/>

###<img src="https://i.imgur.com/aB2Ug86.png" alt=""/>Async Run? Why And How?
 - running methods that modify the presentation, is long descited would be best practice run-from a context-free timer,
 - although `setTimeout` does not implemented `Threading` it is not intended to (in my implementation, at least).
 - adding a simple-enough wrap for **each** function, providing a clear, promise-like code-writing,
 - you can find numerous reasons why you should use `AsynCall` logic,

<hr/>

###<img src="https://i.imgur.com/3Cgm5bd.png" alt="think!" title="think!"/>AsynCallJS Solves This Complex Usecase With Prototypes And Callbacks!
 - *first* is the simplicity
 - *second* is that all of your methods are now async-capable, out-of-the-box, and requires no modification.
 - *third* is the asynchronous "done callback", and the flat, easy to use design-patten.
 - *fourth*: AsynCallJS [avoids-the-callback-hell scenario](http://callbackhell.com/) <br/>
<img src="https://i.imgur.com/6HEwGff.gif" alt="no callback hell!" title="no callback hell!" style="text-align:center;"/>

<hr/>

###<img src="https://i.imgur.com/8J8aUkr.png" title="help! superman! oh wait nevermind I've got this baseball bat..##BOOM## owwwwwww :..(" alt="help! superman! oh wait nevermind I've got this baseball bat..##BOOM## owwwwwww :..("/>How Can *I* Make AsynCallJS Better?
 - Share, Fork <img src="https://i.imgur.com/Jwn2fGl.png" alt="mmmm... fork...no.. wait...!" title="mmmm... fork...no.. wait...!"/>, Comment, EMail, Commit (not necessarily in that order..)
 - <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=7994YX29444PA&lc=IL&item_name=GitHub%20AsynCall%2eJS%20Donation&amount=5%2e00&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://i.imgur.com/ilcj8Ij.png?1" alt="donate" /></a> - it will help you sleep better at night, seriously!

<hr/>

-  thanks for using for free/fork'ing/donating for the project.
-  live long and prosper.
<br/><img src="https://i.imgur.com/4KFKvH2.png" alt="Yeah!!!" title="Yeah!!!"/>



<br/>
<br/>
<hr/>
<br/>
<hr/>
<br/>
<br/>

###Workflow, Inside View.
####How Does It Work?
#####Have a look on a modified version of the code, using console.log("..where I am..") to emphasize how the code will execute.

    Function.prototype.asyncall = function () {
      console.log("asyncall enter");
      var _this = this
        , _arguments = arguments
        , _result
        ;

      setTimeout(function () {
        console.log("asyncall: before function body");
        _result = _this.apply(_this, _arguments);
        setTimeout(function () {
          console.log("asyncall: before callback");
          _this.asyncall_callback(_result, _arguments)
        }, 10);
      }, 10);

      console.log("asyncall exit");
      return _this;
    };

    function sqr(n) {
      console.log("function body");
      return Math.pow(n, 2);
    }


running `sqr.asyncall(10).asyncall_callback = function(){console.log("callback")}`

will output:
<ol>
<li>asyncall enter</li>
<li>
asyncall exit<br/>
( function `sqr.asyncall.asyncall_callback()` is defined )
</li>
<li>asyncall: before function body</li>
<li>function body</li>
<li>asyncall: before callback</li>
<li>callback</li>
</ol>



