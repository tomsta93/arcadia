"use strict";

// Gulp plugins
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const del = require('del');
const runSequence = require('run-sequence');
const changed = require('gulp-changed');
const plumber = require('gulp-plumber');

let env = gutil.env.env;

gulp.task('clean', () => {
  return del(['dist/**/*', 'examples/commonjs/index.js']);
});

let defaultTasks = [];

const tools = {
  sourcemaps: sourcemaps,
  concat: concat,
  debug: debug,
  gutil: gutil,
  uglify: uglify,
  source: source,
  runSequence: runSequence,
  changed: changed,
  plumber: plumber
};

require('./build-tasks/javascript')(gulp, tools, defaultTasks, env);

gulp.task('default', done => {
  runSequence('clean', defaultTasks, done);
});