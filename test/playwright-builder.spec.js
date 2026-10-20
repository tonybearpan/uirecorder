'use strict';

var assert = require('assert');
var builder = require('../lib/playwright-builder');

var generated = builder.generate([
    { type: 'url', data: 'https://example.com/?a="b"' },
    { type: 'click', data: { path: '#login', text: 'Login' } },
    { type: 'sendKeys', data: { keys: "a'b\nc" } },
    { type: 'switchFrame', data: null },
    { type: 'sleep', data: 25 }
]);

assert(generated.indexOf('await page.goto("https://example.com/?a=\\"b\\"");') !== -1);
assert(generated.indexOf('scope.locator("#login")') !== -1);
assert(generated.indexOf("pressSequentially(\"a'b\\nc\")") !== -1);
assert(generated.indexOf('await page.waitForTimeout(25);') !== -1);
assert.throws(function () { builder.generate({}); }, /JSON array/);
assert.throws(function () { builder.generate([{ data: {} }]); }, /Invalid raw command/);
assert.throws(function () { builder.generate([{ type: 'select', data: { path: '#select' } }]); }, /no value\/index/);

console.log('Playwright builder tests passed.');
