# Contribute!

This documentation hosted on Github, and pages are presented with Markdown using Gitbook. The process should be very easy/familiar for developers.

Even if you are not a developer and don't want to clone everything, you still can edit the files directly from Github (you need account to login in and edit the `.md` files).

As a final resort, you can leave your comments/suggestions/etc. at the bottom of the page via Disqus.

##### Visit [https://github.com/MatthijsKamstra/haxejs](https://github.com/MatthijsKamstra/haxejs) to fork the documentation, or just report issues.

Found any "bug" or have a great idea? Please create a [new issue](https://github.com/MatthijsKamstra/haxejs/issues/new).

## About open-sourcing documentation

Open-source documentation is quite fitting for an open-source programming language; writing documentation is an easy and simple way to contribute, even if you're intimidated by some project's complexity.

* [babylon js open sourcing the documentation](http://blogs.msdn.com/b/eternalcoding/archive/2015/08/11/babylon-js-open-sourcing-the-documentation.aspx)
* [building markdown based developer docs](https://medium.com/code-stories/building-markdown-based-developer-docs-87c0317c56f7)


### Resources about writing documentation (Markdown)

* [13-things-people-hate-about-your-open-source-docs/](http://blog.smartbear.com/careers/13-things-people-hate-about-your-open-source-docs/)
* <https://github.com/PharkMillups/beautiful-docs>
* <https://github.com/karthik/markdown_science/wiki/Tools-to-support-your-markdown-authoring>
* <https://todaymade.com/blog/markdown-documentation-generator/>


## Installation, HTML generation

```
npm install
npm run build
open docs/index.html
```


## Tutorial structure

Every new tutorial should have:

```
+ foldername (use common sense)
	+ code (folder with code examples)
	|	+ bin
	|	+ src
	|	|	- Main.hx
	|	- build.hxml
	- about.md (short description what it will do)
	- install.md (is there something you need to install)
	- example.md (javscript.hxml, Main.hx, how to build, etc)
```

---