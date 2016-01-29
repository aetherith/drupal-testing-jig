module.exports = function (grunt) {
    'use strict';
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * PHP
         */
        // Linting - Standards and Best Practices
        phpcs: {
            standard: {
                src: [
                    '**/*.php',
                    '**/*.module',
                    '**/*.inc',
                    '**/*.install',
                    '**/*.test',
                    '**/*.profile',
                    '**/*.theme',
                    '**/*.js',
                    '**/*.css',
                    '**/*.info',
                    '**/*.txt',
                    '**/*.md'
                ],
                options: {
                    standard: 'Drupal'
                }
            },
            practice: {
                src: ['<%= phpcs.standard.src %>'],
                options: {
                    standard: 'DrupalPractice'
                }
            }
        },

        // Beautifying
        phpcbf: {
            standard: {
                src: ['<= phpcs.standard.src %>'],
                options: {
                    standard: 'Drupal'
                }
            }
        },

        /**
         * JavaScript
         */
        // Linting
        eslint: {
            target: ['**/*.js'],
            options: {
                configFile: '.eslintrc'
            }
        },

        //Beautifying
        jsbeautifier: {
            modify: {
                src: ['<%= eslint.target %>'],
                options: {
                    config: '.jsbeautifyrc'
                }
            },
            verify: {
                src: ['<%= eslint.target %>'],
                options: {
                    config: '.jsbeautifyrc',
                    mode: 'VERIFY_ONLY'
                }
            }
        },

        /**
         * CSS
         */
        // Linting
        csslint: {
            src: ['**/*.css'],
            options: {
                csslintrc: '.csslintrc'
            }
        },

        // Beautifying
        // This version is not suitable for situations where individual CSS
        // files must be kept separate from each other. You should adapt
        // the 'files' targets to generate the correct files for your situation.
        csscomb: {
            options: {
                config: '.csscombrc'
            },
            application: {
                files: {
                    'css/main.css': ['<%= csslint.src %>']
                }
            }
        },

        /**
         * Parallel Task Groups
         */
        concurrent: {
            phpVerify: [
                'phpcs:standard',
                'phpcs:practice'
            ],
            jsVerify: [
               'eslint',
               'jsbeautifier:verify'
            ],
            'cssVerify': [
                'csslint'
            ],
        },
    });
    /**
     * Execution Tasks
     */
    grunt.registerTask('verify', [
        'concurrent:phpVerify',
        'concurrent:jsVerify',
        'concurrent:cssVerify'
    ]);

    grunt.registerTask('clean', [
        'phpcbf:standard',
        'jsbeautifier:modify',
        'csscomb'
    ]);
}
