const Todo = require("../models/peopleModel");

// belajar
exports.test = function(req, res){
    res.send("Models, controller & router sudah terhubung!")
}

exports.query = function(req, res){ // contoh = http://localhost:3000/api/query?name=walid&age=16
    let name = req.query.name
    let age = req.query.age
    res.send(`QUERY yang di masukan "${name} ${age}"`)
}

exports.params = function(req, res){ // contoh = http://localhost:3000/api/params/walid/19
    let name = req.params.name
    let age = req.params.age
    res.send(`PARAMS yang dimasukan "${name} ${age}"`)
}

// To do list
exports.create = function(req, res){
    let todo = new Todo({
        name: req.body.name,
        age: req.body.age
    });

    todo.save(function(err){
        if(err) return next(err);
        res.send("Create succes!")
    })
}

exports.show = function(req, res){
    Todo.find({}, function(error, succes){
        if(error) return next(error)
        res.send(succes)
    })
}

exports.showDetail = function(req, res){
    Todo.findById(req.params.id, function(error, succes){
        if(error) return next(error)
        res.send(succes)
    })
}

exports.update = function(req, res){
    Todo.findByIdAndUpdate(req.params.id, {$set: req.body}, function(error, succes){
        if(error) return next(error)
        res.send("Succes update")
    })
}

exports.delete = function(req, res){
    Todo.findByIdAndRemove(req.params.id, function(error){
        if(error) return next(error)
        res.send("Succes delete")
    })
}