#What is the Document Object Model (DOM)?

>The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents. The document can be further processed and the results of that processing can be incorporated back into the presented page.

*source <http://www.w3.org/DOM/>*


## Why is this important?

If you want to manipulate a html page you need to wait until the DOM is completely loaded , before you can change things.
Otherwise there is a chance that you will change something that isn't loaded yet.


## jQuery and VanillaJs

There are two flavors you can use to find out if the DOM is ready

- the popular jQuery 
- And the much discussed VanillaJs version



## Don't work with IE8

Just doesn't work!
<http://caniuse.com/#search=DOMContentLoaded>