var gulp =require("gulp"),
watch=require('gulp-watch'),
autoprefixer=require('autoprefixer')
postcss=require('gulp-postcss')
cssnested=require('postcss-nested')
cssvars=require('postcss-simple-vars')
cssrename=require('postcss-class-rename')
cssImport = require('postcss-import')
browserSync = require('browser-sync').create()

;




function css(){
   
    return gulp.src('./asset/css/main.css')
    .pipe(postcss([cssImport,cssvars,cssnested]))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./'));
}


gulp.task(css);

function html(){

}
gulp.task(html);
// function reload(){
//     browserSync.reload();
// }
// gulp.task(reload);
// function injectCss(){
//     return gulp.src('./asset/css/main.css')
//     .pipe(browserSync.stream());
// }
function inject(){
    return gulp.src('./main.css')
  .pipe(browserSync.stream());
}
gulp.task(inject);
function watche(){
    browserSync.init({
        notify:true,
        server: {
            baseDir: "./"
        }
    });
    watch(['./asset/css/main.css','./asset/css/**/*.css'],gulp.series(css,inject));
    watch(['./index.html'],function(){
        browserSync.reload();
    });
}
gulp.task(watche);

