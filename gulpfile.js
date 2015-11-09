var gulp = require('gulp');
var npdcGulp = require('npdc-gulp');
var baseConf = npdcGulp.baseConfig;
var config = {
  src: {
    config: baseConf.src.config.concat(baseConf.src.root + '/**/*.md')
  }
};
npdcGulp.loadAppTasks(gulp, config);
