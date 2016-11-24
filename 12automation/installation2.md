#Installation

Read the how to install **Node.js** and **Haxe** [here](../haxenode/download.md).  
Once you have installed **Haxe** you will automatically installed `haxelib`.  
The same goes for **Node.js**, you will have automatically installed `NPM`.


This example is not about Node.js per se, but we use an node example to explain the workings of automation.
And that's why we need to install js-kit.


##Install Node.js externs for Haxe

Install the [official Haxe node.js externs](https://github.com/HaxeFoundation/hxnodejs) lib via [haxelib](http://lib.haxe.org/p/hxnodejs/).
Haxelib is automaticly installed when installing Haxe and you can see it as a sort of NPM.

```
haxelib install hxnodejs
```

In this tutorial I use mostly js-kit externs, there are more ways to get externs but the js-kit has a lot so it's more a one stop shop thing!   

```
haxelib git js-kit https://github.com/clemos/haxe-js-kit.git haxelib

```