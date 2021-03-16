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

# Less compiler commands
* /path/to/compiler/lessc [file_name].less [file_name].css

# Scripts explanation
* onchange 'css/*.scss' -- npm run scss
    * Keep watch on all the .scss files that are in the css folder. If any of them change, then it's going to trigger the particular script after the two "--" .
* parallelshell 'npm run watch:scss' 'npm run lite'
    * Allows to execute multiple scripts simultaneously.

# Bugs fixed
* parallelshell bug -> [ERR_INVALID_ARG_TYPE]: The "options.cwd" property must be of type string. Received function wrappedCwd.
    * Webpage where the solution is: https://github.com/darkguy2008/parallelshell/issues/69
    * Solution: Copy this https://raw.githubusercontent.com/darkguy2008/parallelshell/master/index.js and And put in your /project/node_modules/parallelshell/index.js
