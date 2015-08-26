module.exports = function(grunt) {

	// Project configuration.
  	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		exec: {
			cmd: 'gitbook build'
		},

		watch: {
			scripts: {
				files: ['**/*.md'],
				tasks: ['exec'],
				options: {
      				livereload: 12345,
    			},
			},
		}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['exec']);

};