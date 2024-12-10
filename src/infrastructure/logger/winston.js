// winston.js
const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');

// Konfigurasi transport untuk rotasi file
const dailyRotateFileTransport = new DailyRotateFile({
    dirname: 'logs', // Folder penyimpanan log
    filename: 'app-%DATE%.log', // Nama file dengan tanggal
    datePattern: 'YYYY-MM', // Rotasi per bulan (format: Tahun-Bulan)
    zippedArchive: true, // Mengarsipkan file lama dalam format zip
    maxSize: '20m', // Ukuran maksimal file log
    maxFiles: '12', // Simpan file log hingga 12 bulan
});

// Konfigurasi Winston Logger
const winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(), // Log ke console
        dailyRotateFileTransport, // Log ke file dengan rotasi
    ],
});

module.exports = winstonLogger;