# About minifiers

Usually you focus on "making it work". And that is what the focus of this documentation is about.

But when that is done, you are going to focus on other thing as well.

I am not going to get into everything, but want to mention minifing you `.js` files.

And in this tutorial we will minify our Haxe generated files with [UglifyJS2](https://github.com/mishoo/UglifyJS2).

So what does it mean? Minify?
And why does it feel weird for Haxe Javascript developers.

Minifier makes the `.js` files smaller. It does it by removing returns extra white spaces, comments and changes big vars names... essentially creating an "ugly" file.

Javascript (without the us of Haxe) normally work in the `.js` files. It's essentially their source file. So eventually they will copy this file and reduce the size. This file will end up on the website.

Most of the time I don't read what Haxe transpiles to, and so I don't really care about if it's readable or not.
So if you uglify the file, won't change a thing for you.