const path = require('path');
const gulp = require('gulp');
const customPlumber = require('./custom-plumber');
const $ = require('./gulp-load-plugins');

// PostCSS plugins
const autoprefixer = require('autoprefixer');
const postcssNormalize = require('postcss-normalize');
const postcssPresetEnv = require('postcss-preset-env');
const postcssObjectFitImages = require('postcss-object-fit-images');

/**
 * @param {string} src: input concat path string
 * @param {string} dest: output path
 * @param {string} taskName: name of the task
 * @param {string} newerDest: target file for newer to compared against
 */
function sassCompileMainNewer (src, dest, taskName, newerDest) {
  $.fancyLog('----> //** Compiling main.css');
  return $.pump([
    gulp.src(src),
    customPlumber(`Error Running ${taskName}`),
    $.newer({dest: newerDest}),
    $.sassGlob(),
    $.sourcemaps.init({loadMaps:true}),
    $.sass({
      precision: 2,
      includePaths: [path.dirname(require.resolve('modularscale-sass'))]
    })
    .on('error', $.sass.logError),
    $.postcss(
      [
        autoprefixer,
        postcssNormalize({forceImport:true}),
        postcssPresetEnv(),
        postcssObjectFitImages()
      ]
    ),
    $.sourcemaps.write('./'),
    gulp.dest(dest)
  ]);
}

function sassCompileMain (src, dest, taskName) {
  $.fancyLog('----> //** Compiling main.css');
  return $.pump([
    gulp.src(src),
    customPlumber(`Error Running ${taskName}`),
    $.sassGlob(),
    $.sourcemaps.init({loadMaps:true}),
    $.sass({
      precision: 2,
      includePaths: [path.dirname(require.resolve('modularscale-sass'))]
    })
    .on('error', $.sass.logError),
    $.postcss(
      [
        autoprefixer,
        postcssNormalize({forceImport:true}),
        postcssPresetEnv(),
        postcssObjectFitImages()
      ]
    ),
    $.sourcemaps.write('./'),
    gulp.dest(dest)
  ]);
}

function sassCompileBase (src, dest, taskName) {
  $.fancyLog('----> //** Compiling main.css');
  return $.pump([
    gulp.src(src),
    customPlumber(`Error Running ${taskName}`),
    $.sassGlob(),
    $.sourcemaps.init({loadMaps:true}),
    $.sass({
      precision: 2,
      includePaths: [path.dirname(require.resolve('modularscale-sass'))]
    })
    .on('error', $.sass.logError),
    $.postcss(
      [
        autoprefixer,
        postcssPresetEnv(),
        postcssObjectFitImages()
      ]
    ),
    $.sourcemaps.write('./'),
    gulp.dest(dest)
  ]);
}

let sassCompileObj = {
  base: sassCompileBase,
  main: sassCompileMain,
  mainNewer: sassCompileMainNewer
};

module.exports = sassCompileObj;
