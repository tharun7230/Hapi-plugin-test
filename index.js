var bunyan = require('hapi-bunyan')
var log = bunyan.createLogger({
 name: 'Tharun',
 age: 25,
 loaction: 'India'
});

log.info('test1');
log.info('test2');
