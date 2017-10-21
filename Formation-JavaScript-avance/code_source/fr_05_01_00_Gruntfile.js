module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          'dest/output.min.js': ['src/input.js']
        }
      }
    }
  });

  grunt.registerTask('default', ['uglify']);

  grunt.loadNpmTasks('grunt-contrib-uglify');

};
