# Haxe and JavaScript

![Haxe logo](img/haxe_javascript_logos.png)

The Haxe language is a powerful strongly-typed and **cross-target** language.

It is a great language to write **JavaScript applications**, with a lightning fast compiler generating very optimised JavaScript code.

```haxe
import js.Browser.document;

class Hello {
  static function main() {
    document.body.innerHTML = '<h1>Hello world!</h1>';
    // document.body.innerHtml = 42; // compiler errors
  }
}
```

Being cross-target means that you have access to different target APIs and can thus create applications for JavaScript (node and browser), Flash, PHP, Lua, Python, C++, C#, Java... This is a lot of for a single language, and it can be intimidating for beginners.

## Goal

The goal of this documentation is to offer a JavaScript-centered documentation to get started with Haxe: how to install the tools, create your first project and write your first scripts.

It should be seen as an introduction before going further with more general (e.g. not JavaScript-centered) resources:

- [Haxe language manual](https://haxe.org/manual/introduction.html)
- [Haxe Cookbook](https://code.haxe.org/)

We hope this will help you; if you think so, feel free to [contribute](contribute.md) to this tutorial site.

## Who is this for?

For clever, cool and handsome developers. Duh! :D

* JavaScript developers looking to add type integrity, safe refactoring, in their project,
* JavaScript developers who write large-scale applications,
* JavaScript developers who may want to create native applications eventually,
* Flash/Flex developers looking for an AS3 cousin to move to JavaScript development,
* Flash/Flex developers looking to migrate large codebases to JavaScript,
* C#/Java developers looking to write JavaScript software with an easy to learn language.

---