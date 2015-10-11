#About generating externs

If you need to readup on this subject I would suggest you read [Your Favorites, Extended](../haxejs/externs.md).
It explains what externs are, how they work, etc.


## Warning

Although its possible to generate JavaScript externs I would advice to google first if someone did the heavy lifting already. Google **haxelib nameOfTheLib** or **haxe nameOfTheLib**

And as a last warning I quote Phillippe Elsass:

>But how do you write externs for complex libraries if they doesn’t exist already? Sadly the answer is: with great courage, patience and a lot of free time... Although it is possible to fully automate the process, it is more often entirely manual.
>I won’t recommend you to jump right away on creating externs for a big JS library out there, especially if you aren’t an experienced and motivated Haxe developer: creating and keeping up to date such definitions require dedication; there is nothing more frustrating that discovering out of date (or incorrect) ones.


## Automated proces

The awesome [Openfl](http://www.openfl.org/) developer [Joshua Granick](http://www.joshuagranick.com) is a true opensource developer. He created [buildhx](https://github.com/jgranick/buildhx) which helps to generate externs for native libraries.

I could explain it more, but I am not that motivated Haxe developer.

Read more about the subject and I wish you good luck:

* <https://github.com/jgranick/buildhx>
* <http://www.joshuagranick.com/2011/10/14/use-buildjs-to-make-externs-for-haxe-js-automatically/>


##Must read

Phillippe Elsass wrote an article about this subject which is very good and explains what you can do with Haxe and external js-libraries.
He describes 3 methodes and this document only describes number 3.

Check it out: <http://philippe.elsass.me/2014/11/haxe-working-with-javascript-libraries/>


## Resources

* <http://haxe.org/manual/target-javascript-external-libraries.html>
* <http://old.haxe.org/doc/js/extern_libraries>
