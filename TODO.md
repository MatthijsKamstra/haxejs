#TODO

find all presentations ever given about haxe and javascript

- http://fboyle.com/presentations/haxejs/#7
- http://robertbak.com/wordpress/2012/05/getting-started-with-haxe-for-javascript/
- https://www.evernote.com/pub/crodude/haxe.language#b=e48713ca-25a4-41c7-b029-986ef7b82863&st=p&n=4d890ae8-b497-44e6-ad0c-ce4786568252
- https://github.com/Justinfront/divtastic3/tree/master/src
- http://www.sebaslab.com/haxehtml5/
- https://medium.com/prezi-engineering/how-and-why-prezi-turned-to-javascript-56e0ca57d135



## presentations
http://www.slideshare.net/NeilGreen1/type-script-vs-coffeescript-vs-es6



autoconvert
* http://lib.haxe.org/p/refactor

```
js_to_haxe.cmd <path_to_js_source_directory>

```

haxelib install refactor


```
cd /usr/lib/haxe/lib/refactor/2,5,4/scripts/

```

haxelib run refactor convert --exclude-string-literals --exclude-comments "%1" *.js "%2" /[.]js$/.hx/ js_to_haxe.rules



haxelib run refactor convert --exclude-string-literals --exclude-comments ~/Documents/workingdir/haxe/haxejs/05externs/code/bin *.js ~/Documents/workingdir/haxe/haxejs/05externs/code/bin/out /[.]js/.hx/ js_to_haxe.rules



## Franco
<http://io.pellucid.com/blog/the-benefits-of-transpiling-to-javascript.

## nice article about js and web
<https://www.patreon.com/posts/2740520>




# NPM

```
cd /path/to/folder
npm install
grunt watch
```

change files and everything will be build automatically 