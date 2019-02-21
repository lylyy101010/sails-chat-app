/**
 * `tasks/config/copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/copy.js
 *
 */
module.exports = function(grunt) {

grunt.config.set('copy', {
  dev: {
    files: [{
      expand: true,
      cwd: './assets',
      src: ['**/*.!(coffee|less)'],
      dest: '.tmp/public'
    },
    //Copy JQuery
    {
      expand: true,
      cwd: './node_modules/jquery/dist/',
      src: ['jquery.min.js'],
      dest: './assets/vendor/jquery'
    },
    //Copy jsrender
    {
      expand: true,
      cwd: './node_modules/jsrender/',
      src: ['jsrender.js'],
      dest: './assets/vendor/jsrender'
    },
    // copy semantic-ui CSS and JS files
    {
      expand: true,
      cwd: './node_modules/semantic-ui-css/',
      src: ['semantic.css', 'semantic.js'],
      dest: './assets/vendor/semantic-ui'
    },
    //copy semantic-ui icon fonts
    {
      expand: true,
      cwd: './node_modules/semantic-ui-css/themes',
      src: ["*.*", "**/*.*"],
      dest: './assets/vendor/semantic-ui/themes'
    }]
  },
  build: {
    files: [{
      expand: true,
      cwd: '.tmp/public',
      src: ['**/*'],
      dest: 'www'
    }]
  }
});

grunt.loadNpmTasks('grunt-contrib-copy');
};
