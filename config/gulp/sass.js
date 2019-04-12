/*jshint node:true, esversion: 6 */
"use strict";

const autoprefixer = require("autoprefixer");
const autoprefixerOptions = require("./browsers");
const cssnano = require("cssnano");
const gulp = require("gulp");
const mqpacker = require("css-mqpacker");
const notify = require("gulp-notify");
const postcss = require("gulp-postcss");
const runSequence = require("run-sequence");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("sass", function(done) {
  var plugins = [
    // Autoprefix
    autoprefixer(autoprefixerOptions),
    // Pack media queries
    mqpacker({ sort: true }),
    // Minify
    cssnano({ autoprefixer: { browsers: autoprefixerOptions } })
  ];
  return gulp
    .src("_scss/**/*.scss")
    .pipe(sourcemaps.init({ largeFile: true }))
    .pipe(
      sass({
        includePaths: [
          "_scss",
          "node_modules/uswds/dist/scss",
          "node_modules/uswds/dist/scss/packages"
        ],
        outputStyle: "expanded"
      }).on("error", sass.logError)
    )
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/stylesheets"))
    .pipe(gulp.dest("_site/assets/stylesheets"))
    .pipe(
      notify({
        sound: "Pop" // case sensitive
      })
    );
});

gulp.task("sass-rebuild", function(callback) {
  runSequence("sass", "browsersync:reload", callback);
});
