# About minifiers

Once your project is done, you can use a minifier. A minifier makes the output `.js` files smaller. It does it by removing returns extra white spaces, comments and changes big vars names... essentially creating an "ugly" file.

You can minify the source with these handy Haxelibs:

### Closure compiler

Link: https://lib.haxe.org/p/closure/

The Google Closure Compiler requires Java Runtime Environment version 7+ to be installed.

### UglifyJS

Link: https://lib.haxe.org/p/uglifyjs/

UglifyJS requires Node.js to be installed.

---

Most of the time I don't read what Haxe transpiles to and when its on the website it is best practise to serve small files. If you uglify the file, everything still works, but loads faster.
