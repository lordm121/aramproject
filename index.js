const { connection } = require('mongoose');
var fs = require('fs');
var util = require('util');
var path = require('path');
require('dotenv').config()
// monodb connect advanced 
//  var logFilePath = path.join(__dirname, '/debug.log');
//  var log_file = fs.createWriteStream(logFilePath, { flags: 'w' });

// // // Override console.log to write to the log file
//  var originalConsoleLog = console.log;
//  console.log = function (d) {
//   log_file.write(util.format(d) + '\n');
//   originalConsoleLog.apply(console, arguments);
//  };

// // // Override console.error to write to the log file
//  var originalConsoleError = console.error;
//  console.error = function (d) {
//    log_file.write(util.format(d) + '\n'); 
//   originalConsoleError.apply(console, arguments);
// };

// // // Redirect stdout and stderr to a log file
//  var accessFilePath = path.join(__dirname, '/stdout.log');
//  var access = fs.createWriteStream(accessFilePath, { flags: 'w' });
//  process.stdout.write = process.stderr.write = function (data) {

//      try {
//          access.write(data);
//        } catch (error) {
//          console.error('Error writing to stdout.log file:', error.message);
//        }

//  };
process.on('uncaughtException', function (err) {
  console.log((err && err?.stack) ? err?.stack : err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', reason, 'reason:', reason);
});

require('./src/database/connect')(); 
require('./src/dashboard.js')();