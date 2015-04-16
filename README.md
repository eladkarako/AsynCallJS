# AsynCallJS
Run Every Method Asynchronous, Change Nothing.

    /* AsynCall.JS 1.3.5 - Asynchronous Every Method. Modifying Nothing.
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

###What is all the noise about?
 - running methods that modify the presentation, is long descited would be best practice run-from a context-free timer,
 - although `setTimeout` does not implemented `Threading` it is not intended to (in my implementation, at least).
 - adding a simple-enough wrap for **each** function, providing a clear, promise-like code-writing,
 - you can find numerous reasons why you should use `AsynCall` logic,
 - - first is the simplicity
 - - second is that your methods are bi-runable (both async. and sync.) w/o you need to change anything.
 - - third is the asynchronous "done callback", and the flat, easy to use design-patten, that [avoids-the-callback-hell scenario](http://callbackhell.com/).
 - - [![Donate](https://i.imgur.com/ilcj8Ij.png?1)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=7994YX29444PA&lc=IL&item_name=GitHub%20AsynCall%2eJS%20Donation&currency_code=USD&bn=PP%2dDonationsBF%3ailcj8Ij%2epng%3f1%3aNonHosted) it will help you sleep better at night!
 - - thanks for using for free/fork'ing/donating for the project.
 - - live long and prosper.
