const log4js = require('log4js');

// log4js config
log4js.configure({
  appenders: {
    console: { type: 'stdout', layout: { type: 'colored' } },
  },
  categories: {
    default: { appenders: ['console'], level: 'info' }
  }
});

// replace console.log
const logger = log4js.getLogger('console');
console.log = logger.info.bind(logger);