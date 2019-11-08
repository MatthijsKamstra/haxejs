package hxjsondef.macro;

#if macro

import haxe.macro.Context;
import haxe.macro.Expr;
import haxe.io.Path;
import sys.FileSystem;
import sys.io.File;
import sys.io.FileOutput;


using StringTools;

class AutomaticJsonDef {

	/**
	 * generate jsons automaticly
	 *
	 * @param  source 	file or folder of the json file(s)
	 * @param  bin   	the folder the .hx file should be generated
	 * @return
	 */
	public static function build(source:String, bin:String){

		var cwd:String = Sys.getCwd();
		var templateSrcFolder = Path.join([cwd, source]);
		var templateDstFolder = Path.join([cwd, bin]);

		if(FileSystem.exists(templateSrcFolder)){
			// [mck] just generate that folder... I don't care!
			if(!FileSystem.exists(templateDstFolder)) FileSystem.createDirectory(templateDstFolder);
			generateFromFolder(templateSrcFolder,templateDstFolder);
		} else {
			Context.warning('You might be using a different folder structure: this will not work!', Context.currentPos());
		}
	}

	public static function generateFromFolder(folder:String,binFolder:String):Void
	{
		var fileNames = FileSystem.readDirectory(folder);
		for (fileName in fileNames)
		{
			if (!FileSystem.isDirectory(folder + '/' + fileName))
			{
				// ignore invisible (OSX) files like ".DS_Store"
				if (fileName.startsWith(".")) continue;

				// we need json, ignore the rest
				if (!fileName.endsWith(".json")) continue;

				var cleanFileName = fileName.toLowerCase().split('.')[0];
				var tempTemplateFile = binFolder + '/AST' + capString(cleanFileName) + '.hx';

				var json;
				var content = File.getContent(folder + '/' + fileName);

				try{
					// [mck] just checking if it is correct json
					json = haxe.Json.parse(content);
				} catch (e:Dynamic) {
					Sys.println('JSON :: this is not a valid json');
					return ;
				}

				var hxjsondef = new Hxjsondef();
				hxjsondef.fileName = cleanFileName;
				var str = hxjsondef.convert('${capString(fileName)}Obj', content);

				File.saveContent(tempTemplateFile, str);
			} else {
				// [mck] untested folder stucture copy from sourcefolder
				FileSystem.createDirectory(binFolder + '/' + fileName + '/');
				generateFromFolder(folder + '/' + fileName, binFolder);
			}
		}
	}

	private static function capString(str:String):String
	{
		var tempstr = '';
		tempstr = str.substring(0,1).toUpperCase() + str.substring(1,str.length);
		return tempstr;
	}

}

#end