var fs = require('fs');
var path = require('path');
var assert = require('assert');
var translator = require('../');
var failed = false;

function it(title, fn) {
  console.log(title);

  try {
    fn();
    console.log('-- ok!');
  } catch (err) {
    console.log('-- fail', err.message);
    failed = true;
  }
}

fs.readdirSync(path.join(__dirname, 'mock'))
.forEach(function(v) {
  it('translates ' + v, function() {
    assert.equal(
      translator.translate(
        fs.readFileSync(
          path.join(__dirname, 'mock/', v), 'utf8')),
      fs.readFileSync(
          path.join(__dirname, 'expected/', v), 'utf8').trim());
  });
});

process.exit(failed ? 1 : 0);
