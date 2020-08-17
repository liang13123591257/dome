const express = require('express');

const query = require('../../db/mysql'); //引入mysql方法，做数据库的查询

const router = express.Router();

router.get('/inqur/:name', async (req, res) => {
    // console.log(6666);
    let {
        name
    } = req.params;
    try {
        let sql = `SELECT * FROM auth WHERE name='${name}'`;
        let p = await query(sql); //[{},{}]
        // console.log(p);
        let inf = {}
            // if (p.length) {
            //     //查到数据：不能注册
            //     inf = {
            //         code: 3000,
            //         flag: false,
            //         message: '用户名已存在，不能注册'
            //     }
            // } else {
            //     //查不到数据:允许注册
            //     inf = {
            //         code: 2000,
            //         flag: true,
            //         message: '可以注册'
            //     }
            // }
        res.send(p);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(inf);
    }
});

//添加
router.post('/insert', async(req, res) => {
    let {
        serial,
        name,
        birthday,
        phone,
        payType
    } = req.body;
    try {
        let sql = `INSERT INTO auth (serial,name,birthday,phone,payType) VALUES ('${serial}','${name}','${birthday}','${phone}','${payType}')`;
        let p = await query(sql); //[{},{}]
        let inf = {}
        if (p.affectedRows) {
            inf = {
                code: 2000,
                flag: true,
                message: '添加成功'
            }
        } else {

            inf = {
                code: 3000,
                flag: false,
                message: '添加失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '链接失败'
        }
        res.send(err);
    }
});

//删除
router.delete('/deledata/:id', async(req, res) => {
    // console.log(req);
    // console.log(req.body);

    // console.log(req.query);

    let id = req.params.id;
    try {
        let sql = `DELETE FROM auth WHERE id=${id}`;
        let p = await query(sql); //[{},{}]
        let inf = {};
        if (p.affectedRows) {
            //删除成功
            inf = {
                code: 2000,
                flag: true,
                message: '删除成功'
            }
        } else {
            //删除失败
            inf = {
                code: 3000,
                flag: false,
                message: '删除失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '链接失败'
        }
        res.send(err);
    }
});

//更改
router.put('/edit/:id', async(req, res) => {
    // console.log(6666);
    //name:账号  psw:密码  keep:是否要七天免登陆 true 就可以生成token
    let obj = req.body; //{name:'小青',psw:'66778'}
    // console.log(obj);
    let str = '';
    //拼接出sql语句想要的结构
    for (let key in obj) {
        str += key + '=' + `'${obj[key]}'` + ','
    }
    str = str.slice(0, -1);
    // console.log(str);
    let id = req.params.id; //获取uid

    try {
        let sql = `UPDATE auth SET ${str} WHERE id=${id}`;
        let p = await query(sql); //[{},{}]
        // console.log(p);
        let inf = {};
        if (p.affectedRows) {
            //修改成功
            inf = {
                code: 2000,
                flag: true,
                message: '修改成功'
            }
        } else {
            //修改失败
            inf = {
                code: 3000,
                flag: false,
                message: '修改失败'
            }
        }
        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(err);
    }
});

//分页
router.get('/paging/:page/:size', async(req, res) => {
    // console.log(req.params);
    let {
        page,
        size
    } = req.params;
    page = page || 1;
    size = size || 5;
    let index = (page - 1) * size;
    /*
        page  size  index
        1      5     0
        2      5     5
        3      5     10
    */
    try {
        let sql = `SELECT * FROM auth LIMIT ${index},${size}`;
        let p = await query(sql); //[{},{}]
        let sql2 = `SELECT * FROM auth`;
        let arr = await query(sql2); //所有的数据 []
        let inf = {};
        if (p.length) {
            inf = {
                code: 2000,
                flag: true,
                message: '查询成功',
                total: arr.length,
                page,
                size,
                data: p
            }
        } else {
            inf = {
                code: 3000,
                flag: false,
                message: '查询失败'
            }
        }

        res.send(inf);
    } catch (err) {
        let inf = {
            code: err.errno,
            flag: false,
            message: '查询失败'
        }
        res.send(err);
    }
});

module.exports = router;