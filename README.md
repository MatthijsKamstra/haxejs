# Haxe and JavaScript

There used to be a website (an old one, from when Haxe spelled "haXe") that got you started.

But that is no more. I decided to get some of that back.
Based upon the information from the old site and my own need to document this.

#### Visit [http://matthijskamstra.github.io/haxejs/](http://matthijskamstra.github.io/haxejs/)


## How to contribute?

Read more about that [here](contribute.md).  
But it boils down to: **JUST DO IT!**

#### Visit [https://github.com/MatthijsKamstra/haxejs](https://github.com/MatthijsKamstra/haxejs) to modify the "source" aka markdown files.

Found any "bug" or have a great idea? Please create a [new issue](https://github.com/MatthijsKamstra/haxejs/issues/new).


## How to build?

I will be using [Gitbook](https://github.com/GitbookIO/gitbook#how-to-use-it) to export to static `html`.
You need to install Node.js and then you automatically have NPM:

Install gitbook

```
npm install gitbook-cli -g
```

I wanted to make the editing of these file as-easy-as-possible.  
This gitbook plugin helps with that: [gitbook plugin edit link](https://www.npmjs.com/package/gitbook-plugin-edit-link).  
And if all fails, I used [Disqus comments on your books](https://github.com/GitbookIO/plugin-disqus) to add comments at the bottom of each page.

Activate the plugins with:

```
gitbook install
```

Export everything to `html`

```
gitbook build
```

----

### What is Gitbook?

![Gitbook logo](https://avatars0.githubusercontent.com/u/7111340?v=3&s=200)

I will be using [gitbook](https://github.com/GitbookIO/gitbook) to generate the website.

Primarily reason for this: I have never used it, it uses markdown as input files and it also generates a static `html` site.


### What is Markdown

![Markdown logo](img/markdown-logo-200.png)  
A familiar way to write documentation for developers.  
This should make it easier to **contribute**!

**Markdown** is a plain text formatting syntax created by John Gruber, aiming to provide a easy-to-read and feasible markup. You can find the original Markdown syntax specification [here](http://daringfireball.net/projects/markdown/syntax).


![MacDown logo](img/macdown-logo-200.png)  
**MacDown** is a simple-to-use editor for Markdown documents. It renders your Markdown contents real-time into HTML, and display them in a preview panel. You can download it [here](http://macdown.uranusjr.com/).



### Original haxejs.org

You can find the original data with [WayBack Machine](https://web.archive.org/web/20130917142452/http://www.haxejs.org/externs) 