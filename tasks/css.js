
var gulp =require("gulp"),
autoprefixer=require('autoprefixer')
postcss=require('gulp-postcss')
cssnested=require('postcss-nested')
cssvars=require('postcss-simple-vars')
cssrename=require('postcss-class-rename')
cssImport = require('postcss-import')
;
// import gulp from 'gulp';
// import autoprefixer from 'autoprefixer';
// import postcss from 'gulp-postcss';
// import cssnested from 'postcss-nested';
// import cssvars from 'postcss-simple-vars';
// import cssrename from 'postcss-class-rename';
// import cssImport from 'postcss-import';
// import from '';
//  function css(){
   
//     return gulp.src('./asset/css/main.css')
//     .pipe(postcss([cssImport,cssvars,cssnested]))
//     .pipe(postcss([autoprefixer]))
//     .pipe(gulp.dest('./'));
// }


 function css (){
   
    return gulp.src('./asset/css/main.css')
    .pipe(postcss([cssImport,cssvars,cssnested]))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./'));
}

exports.css=css;
// module.exports = { css };