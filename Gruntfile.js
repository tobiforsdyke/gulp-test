module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // SASS - converts the .scss file into both a readable version (minified) and a compressed version
    sass: {
      dev: {
        options: {
          style: 'minified',
        },
        files: {
          'css/gruntstyle.readable.css': 'scss/style.scss'
        }
      },
      dist: {
        options: {
          style: 'compressed',
        },
        files: {
          'css/gruntstyle.min.css': 'scss/style.scss'
        }
      }
    },

    // AUTOPREFIXER
    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')({
            browsers: ['last 2 versions']
          })
        ]
      },
      dist: {
        src: ['css/gruntstyle.readable.css', 'gruntstyle.min.css']
      }
    },

    // WATCH
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['css']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // REGISTRATION OF TASKS
  // Typing 'grunt sass' starts the task below which just runs once the [sass] and [postcss] tasks and then stops
  grunt.registerTask('css', ['sass', 'postcss']);
  // DEFAULT TASK - typing 'grunt' will start the [css] task above (which runs both [sass] and [postcss] tasks) and then [watch] for changes
  grunt.registerTask('default',['css', 'watch']);

}
