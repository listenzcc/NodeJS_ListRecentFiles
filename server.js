// Hello world

var fs = require('fs');
var serverjstxt = fs.readFileSync('server.js');
console.log(serverjstxt.toString());

const iconv = require('iconv-lite');
var encoding = 'cp936';
var binaryEncoding = 'binary';

var exec = require('child_process').exec;
var data = 'data';
exec('python list_recentfile.py',
    {encoding: 'binary'},
    function(error, stdout, stderr){
        data = iconv.decode(new Buffer(stdout, 'binary'), 'cp936');
        // console.log(iconv.decode(new Buffer(stdout, binaryEncoding), encoding));
        // console.log(data, iconv.decode(stdout, 'cp936'));
        console.log('--');
    });

console.log('--');

const http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<head><meta charset="utf-8"/></head>');
    res.write('Start...\n');
    res.write('中文测试\n');
    res.write(data);
    res.end('\nStop.');

    console.log(data);

    // res.end(serverjstxt.toString());
    // subprocess.stdout.on('data', (data) => {
    //     res.end('xxx');
    // });
}).listen(8888);


// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

