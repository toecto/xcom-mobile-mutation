var syntax = 'sass', // Syntax: sass or scss;
    babel = 0;

var gulp = require("gulp"),
  rename = require("gulp-rename"),
  pug = require("gulp-pug"),
  minifyCSS = require("gulp-csso"),
  cleanCSS = require("gulp-clean-css"),
  uglify = require("gulp-uglify"),
  plumber = require("gulp-plumber"),
  notify = require("gulp-notify"),
  webpack = require("webpack"),
  webpackStream = require("webpack-stream"),
  autoprefixer = require("gulp-autoprefixer"),
  newer = require("gulp-newer"),
  sass = require("gulp-sass"),
  pug = require("gulp-pug"),
  browserSync = require("browser-sync").create(),
  concat = require("gulp-concat"),
  image = require("gulp-image"),
  composer = require("gulp-uglify/composer"),
  rigger = require("gulp-rigger");

var minify = composer(uglify, console);

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './public'
    },
    notify: false,
		open: true,
		// online: false, // Work Offline Without Internet Connection
		// tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
  })
});

if ( babel == 1) {
  gulp.task('scripts', function () {
  return gulp.src('./src/js/app.js')
    .pipe(plumber())
    .pipe(webpackStream({
      output: {
        filename: 'app.js',
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
              presets: ['env']
            }
          }
        ]
      },
      externals: {
        jquery: 'jQuery'
      }
    }).on('error', notify.onError()))
    .pipe(gulp.dest('./public/js/'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./public/js/'))
    .on('end', browserSync.reload);
  });
}

if (babel == 0) {
  gulp.task("scripts", function(done) {
    gulp
      .src("./src/js/**/*.js")
      .pipe(plumber())
      .pipe(rigger())
      // .pipe(uglify())
      .pipe(gulp.dest("./public/js/"))
      .on("end", browserSync.reload);
    done();
  });
}


gulp.task("html", function() {
  return (
    gulp
      .src("./src/pages/*.pug")
      // .pipe(plumber())
      .pipe(
        pug({
          pretty: true
        }).on("error", notify.onError())
      )
      .pipe(gulp.dest("./public/"))
      .on("end", browserSync.reload)
  );
});

gulp.task('css', function () {
  return gulp.src('src/' + syntax + '/**/*.' + syntax + '')
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', notify.onError()))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 5 versions'],
      cascade: false
    }))
    .pipe(concat('mobile-adaptation.css'))
    .pipe(gulp.dest('./public/css/'))
    // .pipe(cleanCSS({ level: { 1: { specialComments: 0 } } })) //uncommit on production
    // .pipe(minifyCSS())
    // .pipe(rename({ suffix: '.min' }))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./public/css/'))
    .on('end', browserSync.reload);
});

gulp.task(
  "watch",
  gulp.series(function (cb) {
    gulp.watch(["./src/**/**/*.pug"], gulp.parallel("html"));
    gulp.watch(
      ["./src/" + syntax + "/**/*." + syntax + ""],
      gulp.parallel("css")
    );
    gulp.watch(["./src/js/*.js"], gulp.parallel("scripts"));
    cb();
  })
);

gulp.task("image", function () {
  gulp
    .src("public/img/**/**/*")
    .pipe(newer('public/img-shakal'))
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: false // defaults to false
    }))
    .pipe(gulp.dest("public/img-shakal"));
});

gulp.task('stat', function (done) {
  return gulp
    .src('./src/static/**/*')
    .pipe(gulp.dest("./public/static/"));
  done();

})

gulp.task('ass', function (done) {
  return gulp
    .src('./src/assets/**/*')
    .pipe(gulp.dest("./public/assets/"));
  done()
})

gulp.task(
  "default",
  gulp.series(gulp.parallel('stat', 'ass'), ["html", "css", "scripts", "watch", "browser-sync"])
);