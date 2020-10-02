'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		inline: {
			dist: {
				src: ['test/dist/*.html'],
				dest: 'tmp/'
			}
		},

		clean: {
			tests: ['tmp/']
		},

		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'tmp/test/dist/css.min.html': 'tmp/test/dist/css.html',
					'tmp/test/dist/img.min.html': 'tmp/test/dist/img.html',
					'tmp/test/dist/html.min.html': 'tmp/test/dist/html.html',
					'tmp/test/dist/script.min.html': 'tmp/test/dist/script.html',
					'tmp/test/dist/css_greedy.min.html': 'tmp/test/dist/css_greedy.html',
					'tmp/test/dist/img_greedy.min.html': 'tmp/test/dist/img_greedy.html',
					'tmp/test/dist/html_greedy.min.html': 'tmp/test/dist/html_greedy.html',
					'tmp/test/dist/script_greedy.min.html': 'tmp/test/dist/script_greedy.html',
					'tmp/test/dist/img_srcset.min.html': 'tmp/test/dist/img_srcset.html'
				}
			}
		},

		// Unit tests
		nodeunit: {
			tests: ['test/*_test.js']
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('test', ['clean', 'inline', 'htmlmin', 'nodeunit']);
	// By default, run all tests
	grunt.registerTask('default', ['test']);
};