module.exports = function(grunt) {

	// Project configuration.
  	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		exec: {
			haxe: 'haxe build.hxml',
			gitbook: 'gitbook build'
		},

		watch: {
			scripts: {
				files: ['**/*.md','**/*.hx'],
				tasks: ['exec'],
				options: {
      				// livereload: 12345,
      				// files: ['_book/index.html'],
    			},
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec']);

};