var grunt = require('grunt');
var fs = require('fs');

function readFile(file) {
  'use strict';

  var contents = grunt.file.read(file);

  if (process.platform === 'win32') {
    contents = contents.replace(/\r\n/g, '\n');
  }

  return contents;
}

function assertFileEquality(test, pathToActual, pathToExpected, message) {
    var actual = readFile(pathToActual);
    var expected = readFile(pathToExpected);
    test.equal(expected, actual, message);
}

exports.inline = function(test) {
    'use strict';

    test.expect(5);

    assertFileEquality(test,
      'tmp/test/dist/css.min.html',
      'test/expected/css.min.html',
      'Should compile css inline');

    assertFileEquality(test,
      'tmp/test/dist/img.min.html',
      'test/expected/img.min.html',
      'Should compile image inline');

    assertFileEquality(test,
      'tmp/test/dist/html.min.html',
      'test/expected/html.min.html',
      'Should compile html inline');

    assertFileEquality(test,
      'tmp/test/dist/script.min.html',
      'test/expected/script.min.html',
      'Should compile script inline');

    assertFileEquality(test,
      'tmp/test/dist/img_srcset.min.html',
      'test/expected/img_srcset.min.html',
      'Should compile image srcset inline');

    test.done();
};