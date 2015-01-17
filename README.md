JSHint pre-commit hook
==================
Way of validating commited JavaScript files with JSHint.

Note that JSHint will validate files **within the current commit only** - this is made on purpose and this is the only reason why the repo was created.

Shell script is a modification of [this SH from StackOverflow](http://stackoverflow.com/a/15757989/3819736) with better formatted output.

### To play around with the hook:

1.  Make sure you have [Git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/) installed
2.  `$ git clone git@github.com:sbedulin/jshint-pre-commit-hook.git`
3.  `$ cd jshint-pre-commit-hook`
4.  `$ npm install`
5.  `$ grunt jshint-hook` - this task will copy `.jshint-pre-commit-hook` file to `.git\hooks` folder
6.  Create some valid/invalid JavaScript files and try to commit them


* JSHint rules are listed in `.jshintrc`
* JSHint ignores are listed in `.jshintignore`

This is how sample validation output looks in the console:

![Console](http://i.imgur.com/M8Cazvz.png)

WebStorm

![WebStorm](http://i.imgur.com/sJPBIFZ.png)

and TurtoiseGit

![TurtoiseGit](http://i.imgur.com/snEaHzn.png)