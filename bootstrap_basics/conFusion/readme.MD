# NPM commands (dependencies)
* npm install bootstrap@4.6.0 --save
* npm install jquery --save
* npm install @popperjs/core --save
* npm install @fortawesome/fontawesome-free --save
* npm install bootstrap-social@5.1.1 --save
* npm install less@2.7.2 --save-dev
* npm install node-sass --save-dev
* npm install onchange@3.3.0 --save-dev
* npm install parallelshell@3.0.2 --save-dev
* npm install rimraf@2.6.2 --save-dev
* npm install copyfiles@2.0.0 --save-dev
* npm install imagemin-cli@3.0.0 --save-dev
* npm install usemin-cli@0.5.1 --save-dev
* npm install cssmin@0.4.3 --save-dev
* npm install  uglifyjs@2.4.11 --save-dev
* npm install htmlmin@0.0.7 --save-dev
* npm install -g grunt-cli
* npm install grunt --save-dev

# Grunt plugins
* npm install grunt-sass --save-dev
* npm install node-sass --save-dev
* npm install time-grunt --save-dev
* npm install jit-grunt --save-dev
* npm install grunt-contrib-watch --save-dev
* npm install grunt-browser-sync --save-dev

# Less compiler commands
* /path/to/compiler/lessc [file_name].less [file_name].css

# Scripts explanation
* onchange 'css/*.scss' -- npm run scss
    * Keep watch on all the .scss files that are in the css folder. If any of them change, then it's going to trigger the particular script after the two "--" .
* parallelshell 'npm run watch:scss' 'npm run lite'
    * Allows to execute multiple scripts simultaneously.
* rimraf dist
    * Cleans the specified folder.
* copyfiles -f node_modules/font-awesome/fonts/* dist/fonts
    * Copy files from specified directory to another specified directory.
* imagemin img/* -o dist/img
    * Takes a set of image files and then comparess them down.

# Bugs fixed
* parallelshell bug -> [ERR_INVALID_ARG_TYPE]: The "options.cwd" property must be of type string. Received function wrappedCwd.
    * Webpage where the solution is: https://github.com/darkguy2008/parallelshell/issues/69
    * Solution: Copy this https://raw.githubusercontent.com/darkguy2008/parallelshell/master/index.js and And put in your /project/node_modules/parallelshell/index.js

# Notes
* uglifyjs 2.4.11 module does not compile labmbda functions in the form "() => {}"
* grunt-sass 3 and higher, it ios neccesary to choose between node-sass or dart-sass compiler, for nodejs, install node-sass.
