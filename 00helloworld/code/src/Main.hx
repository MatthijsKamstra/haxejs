/*
	Extra comment from http://learnxinyminutes.com/docs/haxe/
*/
/*
   This is your first actual haxe code coming up, it's declaring an empty
   package.  A package isn't necessary, but it's useful if you want to create a
   namespace for your code (e.g. org.yourapp.ClassName).

   Omitting package declaration is the same as declaring an empty package.
 */
package ; // empty package, no namespace.

/*
   Here's the class definition.  It's the main class for the file, since it has
   the same name (Main).
 */
class Main
{
	 // a public constructor
	function new()
	{
		/*
           Trace is the default method of printing haxe expressions to the
           screen.  Different targets will have different methods of
           accomplishing this.  E.g., java, c++, c#, etc. will print to std
           out.  Javascript will print to console.log, and flash will print to
           an embedded TextField.  All traces come with a default newline.
           Finally, It's possible to prevent traces from showing by using the
           "--no-traces" argument on the compiler.
         */
		trace("Example");
	}

	/*
       If you want certain code to run automatically, you need to put it in
       a static main function, and specify the class in the compiler arguments.
       In this case, we've specified the "LearnHaxe3" class in the compiler
       arguments above.
     */
    static public function main()
    {
        var main = new Main();
	}
}