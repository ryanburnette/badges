#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var URL = require('url');

// current dir
var dir = process.cwd();
// console.log(dir);

// load the package info
var pkg = require(path.resolve(dir, 'package.json'));
// console.log(pkg);

// find the readme file
var readmeOpts = ['README.md', 'Readme.md', 'readme.md'];
var readmeFile = readmeOpts.reduce(function(f, el) {
  if (f) {
    return f;
  }
  var p = path.resolve(dir, el);
  if (fs.existsSync(p)) {
    return p;
  }
}, false);
// console.log(readmeFile);

var badges = [];
var badgeStyle = 'flat-square';
// make the repo badge
if (pkg.repository && pkg.repository.url) {
  var repoUrl = pkg.repository.url;
  var repoType;
  try {
    repoType = URL.parse(repoUrl).hostname;
  } catch (err) {
    repoType = 'repository';
  }
  if (repoUrl.includes('github.com')) {
    repoType = 'Github';
  }
  repoUrl = repoUrl.replace('git+', '');
  if (repoUrl.endsWith('.git')) {
    repoUrl = repoUrl.substring(0, repoUrl.length - 4);
  }
  var repoBadge =
    '[![repo](https://img.shields.io/badge/repository-' +
    repoType +
    '-black.svg?style=' +
    badgeStyle +
    ')](' +
    repoUrl +
    ')';
  badges.push(repoBadge);
}

// make the npm badge
if (!pkg.private) {
  var npmUrl = 'https://www.npmjs.com/package/' + pkg.name;
  var npmBadge =
    '[![npm](https://img.shields.io/badge/package-NPM-green.svg?style=' +
    badgeStyle +
    ')](' +
    npmUrl +
    ')';
  badges.push(npmBadge);
}

// console.log(badges);

console.log(badges.join(' '));
