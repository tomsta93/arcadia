'use strict';

// Gulp plugins
import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import concat from 'gulp-concat';
import debug from 'gulp-debug';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import del from 'del';
import runSequence from 'run-sequence';
import changed from 'gulp-changed';
import plumber from 'gulp-plumber';

import JavaScriptTasks from './build-tasks/javascript';

let env = gutil.env.env;

gulp.task('clean', () => del(['dist/**/*']));

const defaultTasks = [];
const watchTasks = [];

const tools = {
  sourcemaps,
  concat,
  debug,
  gutil,
  uglify,
  changed,
  plumber
};

JavaScriptTasks(gulp, tools, defaultTasks, watchTasks, env);

gulp.task('default', done => runSequence('clean', defaultTasks, done));

gulp.task('watch', watchTasks);
