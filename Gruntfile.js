module.exports = function(grunt) {

  grunt.initConfig({

    // Sitespeed Task
    sitespeedio: {
      default: {
        options: {
          urls: ['http://cureswithinreach.github.io/CureAccelerator/'],
          browser: 'chrome',
          connection: 'cable',
          no: 11,
          resultBaseDir: 'site_speed'
        }
      }
    }

  });

  // Load Grunt Task
  grunt.loadNpmTasks('grunt-sitespeedio');

  // Register Grunt Task
  grunt.registerTask('default', ['sitespeedio']);

};