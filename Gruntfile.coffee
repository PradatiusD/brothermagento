module.exports = (grunt) -> 
  grunt.initConfig(

    'ftp-deploy':
      build:
        auth:
          host: 'pradadesigners.com'
          port: 21
          authKey: 'key1'
        src: 'cdn/'
        dest: '/'
        # exclusions: ['cdn/*.js']

    watch:
      sidebar:
        files: 'cdn/*'
        tasks: 'ftp-deploy'

  )

  grunt.loadNpmTasks('grunt-ftp-deploy')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default', ['watch'])
