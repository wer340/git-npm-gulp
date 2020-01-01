var gulp =require("gulp");
browserSync = require('browser-sync').create();
var a =require('./tasks/css');
var b =require('./tasks/watch');
exports.css=a.css;
exports.configBrowser=b.browser;
exports.reload=b.reloadBrowser;
exports.inject=b.inject;

function watch(){
//  gulp.series(configBrowser);
watch(['./asset/css/main.css','./asset/css/**/*.css'],gulp.series(css,inject));
    watch(['./index.html'],reload)
    

}
exports.watch=watch;