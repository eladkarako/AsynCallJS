# AsynCallJS
## A Smart JavaScript Library,
## That Adds Background Async-Execution Support, To All Of Your Existing Mehtods.
### It's Easy As <img src="http://i.imgur.com/nupHZdW.png" alt="pie"/>

    /* AsynCallJS 1.3.5 - Run Every Method Asynchronously, Change Nothing.
     * https://github.com/eladkarako/AsynCallJS/
     *
     * Copyright (c) 2015 Elad Karako (eladkarako.com)
     * Dual licensed under the MIT (MIT-LICENSE.txt)
     * and GPL (GPL-LICENSE.txt) licenses.
     */


###Example First
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

###Async on method? What is all about?
 - running methods that modify the presentation, is long descited would be best practice run-from a context-free timer,
 - although `setTimeout` does not implemented `Threading` it is not intended to (in my implementation, at least).
 - adding a simple-enough wrap for **each** function, providing a clear, promise-like code-writing,
 - you can find numerous reasons why you should use `AsynCall` logic,

<hr/>

###AsynCallJS Solves This Complex Usecase With Prototypes And Callbacks!
 - *first* is the simplicity
 - *second* is that all of your methods are now async-capable, out-of-the-box, and requires no modification.
 - *third* is the asynchronous "done callback", and the flat, easy to use design-patten.
 - *fourth*: AsynCallJS [avoids-the-callback-hell scenario](http://callbackhell.com/) <br/>
<img src="https://i.imgur.com/6HEwGff.gif" alt="no callback hell!" style="text-align:center;"/>

<hr/>

###How Can *I* Make AsynCallJS Better?
 - Share, Fork, Comment, EMail, Commit (not necessarily in that order..)
 - <a href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=7994YX29444PA&lc=IL&item_name=GitHub%20AsynCall%2eJS%20Donation&amount=5%2e00&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donate_SM%2egif%3aNonHosted"><img src="https://i.imgur.com/ilcj8Ij.png?1" alt="donate"/></a> - it will help you sleep better at night, seriously!

<hr/>

-  thanks for using for free/fork'ing/donating for the project.
-  live long and prosper.
