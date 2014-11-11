frontend-gulp
=============

A gulp setup to streamline frontend workflow. It's currently configured to watch and compile scss files, apply autoprefixer, minify images, create a fallback png for svg images, check javascripts with jshint, and live refresh the browser using browser sync.
Future functionality might include minification of css and js (commented out for now), sass ordering using csscomb, icon font creation from svg, web font creation from an original font etc.
Hopefully it's not too buggy, and helps speed up your front end dev workflow.

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
Clone the repository into a current theme/website directory.
```
git init .
git remote add -t \* -f origin https://github.com/simonburger/frontend-gulp.git
git checkout master

```

If you haven't installed gulp already globally, now is probably a good time.
```
npm install gulp -g
```

Fetch NPM dependencies etc.
```
npm install
```

You can then perus the gulpfile.js file and change example.com to be your dev domain/url, and change any other settings as you see fit.

##Usage
From the command line, in your theme directory, run:
```
gulp
```


##Drupal Mothership integration
If you want to use this with Drupal Mothership, which is what I'm currently doing, before you do all the above, create a new mothership subtheme with the following:
```
drush cc drush
drush mothership "Name of sub theme"

```
