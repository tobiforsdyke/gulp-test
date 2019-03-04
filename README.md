# Testing out Gulp

**SASS and CSS task:**
```
gulp run
```
This will run 2 tasts in order.
1. the SASS task (converts scss files to css, adds vendor prefixes, renames the file to style.readable.css and saves it in the css folder) and then,
2. the CSS task (minifies the readable css file, renames it style.min.css and saves it in the css folder).

**DEFAULT task:**
```
gulp
```
This will watch for any changes to any .scss files and then run the tasks above.


**To install:**

```
npm init
npm install gulp -D
touch gulpfile.js
npm install gulp-sass --save-dev
npm install gulp-uglifycss --save-dev
npm install gulp-autoprefixer --save-dev
npm install gulp-rename --save-dev
```
