import gulp from 'gulp'
import typescript from 'gulp-typescript'
// import { parse } from 'jsonc-parser';
// import * as fs from "fs";

// const fileContent = fs.readFileSync("./tsconfig.json", "utf8");
// const tsconfig = parse(fileContent)

gulp.task('server', (done) => {
  gulp
    .src([
      './server/**/*.ts',
      '!./server/node_modules/**',
      // '!./front/node_modules/**',
      // '!./node_modules/**',
    ])
    .pipe(typescript({}))
    .pipe(gulp.dest('./server/'));

  done()
});