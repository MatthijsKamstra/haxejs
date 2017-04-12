function MyJSClass() {  
}  
MyJSClass.SOME_PROP = 42;  
MyJSClass.someFunc = function() {  
    return "hello";  
}  
MyJSClass.prototype.myProp = null;  
MyJSClass.prototype.myFunc = function(prop) {  
    this.myProp = prop;  
}  