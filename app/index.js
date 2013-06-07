'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var KnockoutGenerator = module.exports = function KnockoutGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.options = options || {};

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(KnockoutGenerator, yeoman.generators.NamedBase);

KnockoutGenerator.prototype.askFor = function askFor() {

  var cb = this.async();

  // welcome message
  var welcome =
  '\n     _-----_' +
  '\n    |       |' +
  '\n    |' + '--(o)--'.red + '|   .--------------------------.' +
  '\n   `---------´  |    ' + 'Welcome to Yeoman,'.yellow.bold + '    |' +
  '\n    ' + '( '.yellow + '_' + '´U`'.yellow + '_' + ' )'.yellow + '   |   ' + 'ladies and gentlemen!'.yellow.bold + '  |' +
  '\n    /___A___\\   \'__________________________\'' +
  '\n     |  ~  |'.yellow +
  '\n   __' + '\'.___.\''.yellow + '__' +
  '\n ´   ' + '`  |'.red + '° ' + '´ Y'.red + ' `\n';

  console.log(welcome);
  console.log('This comes with knockout.js, requirejs, jquery, and grunt all ready to go');

  if (this.options.promptDefaults) {
     this.appname = this.options.promptDefaults.appname;
     this.appdescription = this.options.promptDefaults.appdescription;
     cb();
     return;
   }

  var prompts = [{
    name: 'appname',
    message: 'What is the name of your app?',
    default: this.appname
  }, {
    name: 'appdescription',
    message: 'Description',
    default: 'An awesome knockout.js app'
  }];

  this.prompt(prompts, function (props) {
    this.appname = props.appname;
    this.appdescription = props.appdescription;

    cb();
  }.bind(this));
};

KnockoutGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

KnockoutGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

KnockoutGenerator.prototype.bower = function bower() {
  this.template('_bower.json', 'bower.json');
};

KnockoutGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
};

KnockoutGenerator.prototype.configs = function jshint() {
  this.copy('jshintrc', '.jshintrc');
  this.copy('editorconfig', '.editorconfig');
}

KnockoutGenerator.prototype.docs = function docs() {
  this.copy('CONTRIBUTING.md', 'CONTRIBUTING.md');
  this.template('README.md', 'README.md');
};

KnockoutGenerator.prototype.app = function app() {
  this.directory('app', 'app');
  this.directory('test', 'test');
  this.template('index.htm', 'index.htm');
};
