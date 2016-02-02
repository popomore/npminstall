/**
 * Copyright(c) cnpm and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <m@fengmk2.com> (http://fengmk2.com)
 */

'use strict';

/**
 * Module dependencies.
 */

module.exports = {
  env: {
    NVM_NODEJS_ORG_MIRROR: 'https://npm.taobao.org/mirrors/node',
    NVM_IOJS_ORG_MIRROR: 'https://npm.taobao.org/mirrors/iojs',
    PHANTOMJS_CDNURL: 'https://npm.taobao.org/mirrors/phantomjs',
    CHROMEDRIVER_CDNURL: 'http://oss.npm.taobao.org/dist/chromedriver',
    ELECTRON_MIRROR: 'https://npm.taobao.org/mirrors/electron/',
    SASS_BINARY_SITE: 'https://npm.taobao.org/mirrors/node-sass',
    npm_config_fse_binary_host_mirror: 'https://npm.taobao.org/mirrors/fsevents/',
    // show node-pre-gyp http info
    // like "node-pre-gyp http GET https://npm.taobao.org/mirrors/fsevents/v1.0.6/fse-v1.0.6-node-v46-darwin-x64.tar.gz"
    npm_config_loglevel: 'http',
  },
};