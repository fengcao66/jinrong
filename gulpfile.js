// 应入gulp模块
var gulp = require("gulp");

//引入系统模块path路径
var path=require("path");
var less = require('gulp-less')

// 引入压缩css模块
var cleancss = require('gulp-clean-css')
// 应入重命名
var rename = require("gulp-rename");
//引入热刷新模块
var livereload=require("gulp-livereload");



gulp.task('taxkless', function () {
    gulp.src('./src/less/*.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        
        .pipe(cleancss())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest("./dist/css/minCss"))
        .pipe(livereload()); //开启热刷新
        
});

//配置default默认任务
gulp.task("default",function () {
    //开启监听服务器
    livereload.listen();
    //语法：gulp.watch('观察的目标', ['执行的任务名称']);
    gulp.watch("./src/less/*.less",["taxkless"]);
});






