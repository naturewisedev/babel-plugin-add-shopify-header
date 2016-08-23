import fs from 'fs';
import path from 'path';
import assert from 'assert';

export default function() {
  it('should only add header to b.js and add custom', () => {
    const codeExpected = fs.readFileSync(path.resolve(__dirname, 'fixtures', 'expect-test-many-files-add-to-header.js'), 'utf8');

    // this file is generated by npm scripts because for some reason babel does not exit properly on CircleCI
    const codeOutput = fs.readFileSync(path.resolve(__dirname, 'out-test-many-files-add-to-header.js'), 'utf8');

    assert.equal(codeOutput, codeExpected, 'Generated source matches expected source');
  });
}
