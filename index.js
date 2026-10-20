var initConfig = require('./lib/init.js');
var startRecorder = require('./lib/start.js');
var checkUpdate = require('./lib/update.js');
var playwrightBuilder = require('./lib/playwright-builder.js');
var playwrightBuilder = require('./lib/playwright-builder.js');

module.exports = {
    init: initConfig,
    start: startRecorder,
    checkUpdate: checkUpdate,
    playwright: playwrightBuilder,
    playwright: playwrightBuilder
};
