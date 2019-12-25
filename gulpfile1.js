var gulp =require("gulp"),
watch=require('gulp-watch');

gulp.task('html',function(){

    console.log("hi my glourian ");
});
gulp.task('css',function(){
    gulp.src('./asset/main.css').pipe(gulp.dest('./style.css'));
})



// gulp.task('watch',function(done){
// watch('./index.html',function(){
// gulp.start('html');
// });
// watch('./asset/*.css',function(){
//     gulp.start('css');
//     });

// done();
// });
gulp.task('default',()=>{
    gulp.series(css,html);
})
