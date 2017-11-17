const _express = require("express");
const _fs = require("fs");


let server_douban = _express();

server_douban.get('/login', (req, res) => {
    let _userObj = req.query
    let _user = _userObj.user
    let _pwd = _userObj.pwd
    let _userData = _fs.createReadStream('./user.json');

    _userData.on('data', chunk => {
        let _chunk = JSON.parse(chunk.toString());
        let _data = _chunk.data;
        for (let _everyUser of _data) {
            if (_everyUser.user == _user && _everyUser.pwd == _pwd) {
                return res.jsonp('{"status":"1","msg":"成功", "userId":"' + _everyUser.userId + '"}')
            }
        }
        return res.jsonp('{"status":"0","msg":"失败"}')
    })
})
server_douban.get('/register', (req, res) => {
    let _user = req.query.user;
    let _pwd = req.query.pwd;
    let _userId = req.query.userId;
    let _userRead = _fs.createReadStream('./user.json');
    _userRead.on('data', chunk => {

        let _userObj = JSON.parse(chunk.toString()).data;
        for (let _everyUser of _userObj) {
            if (_everyUser.user == _user) {
                return res.jsonp('{"status":0,"msg":"账号已存在"}')
            } else if (_everyUser.userId == _userId) {
                return res.jsonp('{"status":0,"msg":"昵称已被占用"}')
            }
        }
        let newUserObj = { "user": _user, "pwd": _pwd, "userId": _userId };
        _userObj.push(newUserObj);
        _userObj = JSON.stringify(_userObj);
        let _newObj = "{\"data\" : " + _userObj + "}"
        _fs.writeFile('./user.json', _newObj, {
            flwg: 'w'
        })
        return res.jsonp('{"status":1,"msg":"注册成功"}')
    })
})

server_douban.listen(8888, () => {
    console.log('服务  ： 开启')
})