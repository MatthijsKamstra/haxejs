module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		exec: {
			haxe: 'haxe javascript.hxml'
		},

		watch: {
			scripts: {
				files: ['**/*.md','**/*.hx'],
				tasks: ['exec'], 
				options: {
					livereload: true
				},
			},
		}
		// ,nodemon: {
		// 	dev: {
		// 		script: 'bin/example.js'
		// 	}
		// }

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');
	// grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('default', ['exec']);

};