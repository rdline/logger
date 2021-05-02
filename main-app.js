require('./services/logger.js')('file.log');
const path=require('path');
var logger=require('intel').getLogger((__filename));

logger.info('Test string 1')
logger.info('Test string 2')

var mod1=require('./services/mod1.js');
mod1();

var mod2=require('./services/mod2.js');
mod2();
