const bunyan = require('bunyan');

const appname = 'Shopsy';

module.exports = {
  applicationName: appname,
  logger: bunyan.createLogger({ name: appname }),

  // add information about the database connection
  mongodb: {
    dsn: 'mongodb://localhost:37017/shopsy',
  },
};
