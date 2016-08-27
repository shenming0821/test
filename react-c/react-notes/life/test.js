

function sendElementInfo(req, res) {
    var http = require('http');
    var body = {projectID: 47,};
    var bodyString = JSON.stringify(body);
    var headers = {'Content-Type': 'application/json', 'Content-Length': bodyString.length};
    var options = {host: '', port: 8080, path: '', method: 'POST', headers: headers};
    var req;
    req = http.request(options, function (res) {
        res.setEncoding('utf-8');
        var responseString = '';
        res.on('data', function (data) {
            responseString += data;
        });
        res.on('end', function () {
            var resultObject = JSON.parse(responseString);
            console.log('-----resBody-----', resultObject);
        });
        req.on('error', function (e) {
            console.log('-----error-------', e);
        });
    });
    req.write(bodyString);
    req.end();
}