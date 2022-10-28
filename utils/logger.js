const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(
    timestamp(),
    myFormat,
    format.json()
  ),
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' })
  ]
});

module.exports = { logger }