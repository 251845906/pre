var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'my'
});
//开始你的mysql连接
connection.connect();
app.use(bodyParser.urlencoded({ extended: false }))
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "text/html;charset=utf-8");
    next();
})
console.log('数据库链接成功')
app.route("/test").get((req, res) => {
    connection.query('SELECT * FROM t1', (err, rows, fields) => {

        res.end(JSON.stringify(rows));
    })
}).post((req, res) => {
    connection.query('SELECT * FROM t1', (err, rows, fields) => {

        res.end(JSON.stringify(rows));

    })
})



app.listen(800, '127.0.0.1');
//在server关闭的时候也关闭mysql连接
app.on('close', () => {
    connection.end();
});
console.log('listening on port  800');