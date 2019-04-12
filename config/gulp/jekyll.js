/*jshint node:true, esversion: 6 */
"use strict";

const gulp = require("gulp");
const cp = require("child_process");
const dutil = require("./doc-util");
const log = require("fancy-log");
const runSequence = require("run-sequence");
const task = "jekyll";

const env = process.env.NODE_ENV || "prod";

// Build Jekyll site
gulp.task("jekyll", function(done) {
  log("Running jekyllBuild");

  if (env === "prod") {
    log("Building for production");
    return cp
      .spawn("bundle", ["exec", "jekyll", "build"], { stdio: "inherit" })
      .on("close", done);
  } else {
    log("Building for development");
    return cp
      .spawn(
        "bundle",
        ["exec", "jekyll", "build", "--config", "_config.yml,_config-dev.yml"],
        { stdio: "inherit" }
      )
      .on("close", done);
  }
});

// Rebuild Jekyll site
gulp.task("jekyll-rebuild", function(callback) {
  runSequence("jekyll", "browsersync:reload", callback);
});
