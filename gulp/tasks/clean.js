'use strict';

var gulp = require( 'gulp' );
var del = require( 'del' );
var configClean = require( '../config' ).clean;

gulp.task( 'clean', function() {
  del( configClean.dest );
} );

gulp.task( 'clean:releaseFiles', function() {
  del( configClean.releaseDest );
} );
