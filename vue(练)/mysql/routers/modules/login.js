const express = require('express');
const {
    create,
    verify
} = require('./token');

const query = require('../../db/mysql'); //引入mysql方法，做数据库的查询

const router = express.Router();
//登陆验证
router.get('/log/:name/:psw', async (req, res) => {
    //name:账号  psw:密码  keep:是否要七天免登陆 true 就可以生成token
    let {
        name,
        psw
    } = req.params;
    // console.log(name, psw);
    try {
        let sql = `SELECT * FROM auth WHERE cardNum='${name}' and integral='${psw}'`;
        let p = await query(sql); //[{},{}]
        let inf = {}
        if (p.length) {
            //查到数据：可以登陆
            //保留7天
            token = create(psw);
            inf = {
                code: 2000,
                flag: true,
                message: '登录成功',
                data: {
                    name,
                    token
                }
            }
        } else {
            //查不到数据:不能登录
            inf = {
                code: 3000,
                flag: false,
                message: '登录失败'
            }
        }
        // console.log(p);

        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//token验证
router.get('/verify/:token', (req, res) => {
    let {
        token
    } = req.params;
    let result = verify(token);
    let inf = {};
    if (result) {
        //校验成功
        inf = {
            code: 2000,
            flag: true,
            message: '校验成功'
        }
    } else {
        inf = {
            code: 3000,
            flag: false,
            message: '校验失败'
        }
    }
    res.send(inf);
});

//退出
router.post('/logout', (req, res) => {
    console.log(req.body);
    let {
        token
    } = req.body;
    let result = verify(token);
    let inf = {};
    if (result) {
        //校验成功
        inf = {
            code: 2000,
            flag: true,
            message: '退出成功'
        }
    } else {
        inf = {
            code: 3000,
            flag: false,
            message: '退出失败'
        }
    }
    res.send(inf);
});


module.exports = router;