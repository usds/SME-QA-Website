// Paths
//
var build = "_site";

module.exports = {
  // BrowserSync
  browsersync: {
    development: {
      server: {
        baseDir: [build]
      },
      port: 4000,
      notify: false
    }
  },

  // Watch source files
  watch: {
    jekyll: [
      "_config.yml",
      "_data/*.yml",
      "_includes/*.html",
      "_hr-tasks/*.md",
      "_sme-tasks/*.md",
      "_rating-guide/*.md",
      "_meetings/*.md",
      "_layouts/*.html",
      "pages/**/*.{html,markdown,md,yml,json,txt,xml}"
    ],
    styles: ["_scss/*.scss", "_scss/components/*.scss", "_scss/layouts/*.scss"]
  },

  jekyll: {
    development: {
      config: "_config.yml,_config-dev.yml"
    }
  }
};
