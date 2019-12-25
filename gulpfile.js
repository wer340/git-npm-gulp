var gulp =require("gulp"),
watch=require('gulp-watch'),
autoprefixer=require('autoprefixer')
postcss=require('gulp-postcss')
cssnested=require('postcss-nested')
cssvars=require('postcss-simple-vars')
cssrename=require('postcss-class-rename')
;



function css(){
    return gulp.src('./asset/main.css')
    .pipe(postcss([cssvars,cssnested]))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./'));
}


gulp.task(css);

function watche(){
    watch(['./asset/main.css'],gulp.series(css))
}
gulp.task(watche);