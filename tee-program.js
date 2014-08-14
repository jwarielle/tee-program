var fs = require('fs');
var outPutContainer = fs.createWriteStream(process.argv[2]);

process.stdin.pipe(process.stdout);
process.stdin.pipe(outPutContainer);