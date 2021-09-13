const winston = require("winston");

const logger = winston.createLogger({
  transports: [
    winston.transports.Console,
    new winston.transports.File({
      filename: "log.log",
      level: "warn",
    }),
  ],
  exitOnError: true,
});

module.exports = logger;
