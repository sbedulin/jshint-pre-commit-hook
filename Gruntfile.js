module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            "jshint-pre-commit-hook": {
                src: '.jshint-pre-commit-hook',
                dest: '.git/hooks/pre-commit'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('jshint-hook', ['copy:jshint-pre-commit-hook']);
};