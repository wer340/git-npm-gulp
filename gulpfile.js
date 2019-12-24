var gulp =require("gulp"),
watch=require('gulp-watch');

gulp.task('html',function(){

    console.log("hi my glourian ");
});
gulp.task('css',function(){
    console.log("hi mr");
})



gulp.task('watch',function(){
watch('./index.html',function(){
gulp.start('html');
});
watch('./asset/*.css',function(){
    gulp.start('css');
    });


});