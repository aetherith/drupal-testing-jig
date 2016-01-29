# Grunt Drupal Testing Jig
While building Drupal modules it's useful to have a series of tests and cleanup
tools at your disposal to prevent code smell. I'm sure there's an official
version out there somewhere but a few hours on Google didn't give me an easy
bake solution so I created my own.

## Dependencies
You'll need [Node.js][node] and [Grunt][grunt] along with [phpcs][drupal-phpcs]
configured to use the Drupal coding standards.

## Use
The modules are grouped roughly by language and the targets are defined in the
first plugin for the language. Running the test battery is as easy as running
`grunt verify` and running the autofix/beautifiers is `grunt clean`.

## References
* [Drupal PHPCS][drupal-phpcs]
* [Drupal ESLint Standard][drupal-eslint]
* [Drupal .eslintrc][drupal-eslint-repo]
* [Drupal CSSLint Standard][drupal-csslint]
* [Drupal .csslintrc][drupal-csslint-repo]
* [Drupal CSSComb Standard][drupal-csscomb]

[node]: https://nodejs.org/
[grunt]: http://gruntjs.com/
[drupal-phpcs]: https://www.drupal.org/node/1587138
[drupal-eslint]: https://www.drupal.org/node/1955232
[drupal-csscomb]: https://www.drupal.org/node/2399303
[drupal-csslint]: https://www.drupal.org/node/2222049
[drupal-csslint-repo]: http://cgit.drupalcode.org/drupal/tree/.csslintrc
[drupal-eslint-repo]: http://cgit.drupalcode.org/drupal/tree/.eslint
