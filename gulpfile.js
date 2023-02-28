const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("utilities/**/index.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["utilities/**index.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
