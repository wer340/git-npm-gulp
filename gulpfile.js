var gulp =require("gulp"),
watch=require('gulp-watch'),
autoprefixer=require('autoprefixer')
postcss=require('gulp-postcss')
cssnested=require('postcss-nested')
cssvars=require('postcss-simple-vars')
cssrename=require('postcss-class-rename')
cssImport = require('postcss-import');




function css(){
    return gulp.src('./asset/css/main.css')
    .pipe(postcss([cssImport,cssvars,cssnested]))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./'));
}


gulp.task(css);

function watche(){
    watch(['./asset/css/main.css','./asset/css/**/*.css'],gulp.series(css))
}
gulp.task(watche);