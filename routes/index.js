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

router.post('/todo/:_id',function(req,res,next){
    todoModel.remove({_id:req.params._id},function(err,result){
        if(err){
            res.send({code:0,msg:'删除错误'})
        }else{
            res.send({code:1,msg:'删除成功'})
        }
    })
});

module.exports = router;
