// var stylesTasks = require('./css.js');
// exports.css = stylesTasks.css;
var gulp =require("gulp"),
watch=require('gulp-watch'),
browserSync = require('browser-sync').create()
;
// import gulp from 'gulp';
// import watch from 'gulp-watch';
// import browserSync from 'browser-sync';

function inject(){
    return gulp.src('./main.css')
  .pipe(browserSync.stream());
}

//  function watche(css){
//     browserSync.init({
//         notify:true,
//         server: {
//             baseDir: "./"
//         }
//     });
//     watch(['./asset/css/main.css','./asset/css/**/*.css'],gulp.series(css,inject));
//     watch(['./index.html'],function(){
//         browserSync.reload();
//     });
  
// }
function browser(done){
    browserSync.init({
        notify:true,
        server: {
            baseDir: "./"
        }
       
})
done();
};

function reloadBrowser(){
    return  browserSync.reload();

}
// exports.watchel=watche;
exports.browser=browser;
exports.inject=inject;
exports.reloadBrowser=reloadBrowser;
// module.exports = {browser ,inject,reloadBrowser };

// export {browser ,inject,reloadBrowser};
// gulp.task('help', []);
