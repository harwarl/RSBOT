import * as winston from "winston"
const { createLogger, format, transports } = winston

export const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
  ),
  transports: [
    new transports.File({ filename: "bot_error.log", level: "error" }),
    new transports.File({ filename: "bot_combined.log" }),
    new transports.File({ filename: "bot_info.log", level: "info" }),
  ],
})
