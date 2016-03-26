const gulp = require("gulp");

(function(){
  const connect = require("gulp-connect");
  const conf = {
      root: "app",
      port: 8888 
  };  
  gulp.task("serve", ()=>{
    connect.server(conf);
  });
})();

(function(){
  const jshint = require("gulp-jshint");
  const target = "app/js/*.js";
  const reporter = "default";

  gulp.task("lint", ()=>{
    return gulp
      .src(target)
      .pipe(jshint)
      .pipe(jshint.reporter(reporter));
  });
})();