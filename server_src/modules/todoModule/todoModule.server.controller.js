'use strict'

let todoModuleModel = require('./todoModule.server.model');

exports.getTodo = async function(req, res, next) {

  try {
    let data = await todoModuleModel.getAll();

    res.status(200).json({todo: data.rows});

    next();
  }
  catch (err) {
    return res.status(500).json({ err: err }).end();
  }
}

exports.addTodo = async function(req, res) {

  let requestBody = req.body.todo;

  try {
    let data = await todoModuleModel.addOne(requestBody.text, requestBody.status);
    return res.status(200).json({ todo: data.rows[0]}).end();
  }
  catch (error) {
    return res.status(500).json({err: error}).end();
  }

}

exports.editTodo = async function(req, res) {

  let requestBody = req.body.todo;
  let todoId = req.params.id;

  try {
    let data = await todoModuleModel.editOne(todoId, requestBody.text, requestBody.status);

    return res.status(200).json({}).end();
  }
  catch (err) {
    return res.status(500).json({ err: err }).end();
  }
}

exports.deleteTodo = async function(req, res) {

  let todoId = req.params.id;

  try {
    let data = await todoModuleModel.deleteOne(todoId);
    return res.status(200).json({}).end();
  }
  catch (err) {
    return res.status(500).json({ err: err }).end();
  }
}
