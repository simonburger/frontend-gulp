frontend-gulp
=============

A gulp setup to streamline frontend workflow. It's currently configured to watch and compile scss files, apply autoprefixer, minify images, check javascripts with jshint, and live refresh the browser using browser sync.
Future functionality might include minification of css and js, sass ordering using csscomb, icon font creation from svg etc.

##Structure
It is presumed that the file structure is:
```
-css
-js
-images
-src
--css
--js
--images
```
with all the original or source files under the src directory and all of the generated files in the root directories.

##Installation
Copy all the files except the readme into your theme directory.
```
npm install
```

##Usage
From the command line, in your theme directory, run:
```
gulp
```
