var config = require("./config").watch;

var gulp = require("gulp");

// Start BrowserSync task,
// watch files for changes,
// and run defined task(s) on file change.
gulp.task("watch", ["browsersync"], function() {
  gulp.watch(config.jekyll, ["jekyll-rebuild"]);
  gulp.watch(config.styles, ["sass-rebuild"]);
});
