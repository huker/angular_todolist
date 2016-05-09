var express = require('express');
var router = express.Router();
var todoModel = require('../model');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/todo', function (req, res, next) {
    todoModel.find({}, function (err, data) {
        if (err) {
            res.send({code:0,msg:'查询错误'})
        } else {
            res.send(data);
        }

    })
});

router.post('/todo', function (req, res, next) {
    todoModel.create(req.body, function (err, data) {
        if(err){
            res.send({code:0,msg:'添加错误'})
        }else{
            res.send(data)
        }
    })
});

module.exports = router;
