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

exports.addTodo = async function(req, res, next) {

  let requestBody = req.body.todo;

  try {
    let data = await todoModuleModel.addOne(requestBody.text, requestBody.status);
    res.status(200).json({ todo: data.rows[0]});
    res.locals.todoId = data.rows[0].id;

    next();
  }
  catch (error) {
    return res.status(500).json({err: error}).end();
  }

}

exports.editTodo = async function(req, res, next) {

  let requestBody = req.body.todo;
  let todoId = req.params.id;
  res.locals.todoId = todoId;

  try {
    let data = await todoModuleModel.editOne(todoId, requestBody.text, requestBody.status);

    res.status(200).json({});
    next();
  }
  catch (err) {
    return res.status(500).json({ err: err }).end();
  }
}

exports.deleteTodo = async function(req, res, next) {

  let todoId = req.params.id;
  res.locals.todoId = todoId;

  try {
    let data = await todoModuleModel.deleteOne(todoId);
    res.status(200).json({});

    next();
  }
  catch (err) {
    return res.status(500).json({ err: err }).end();
  }
}

exports.addTodoHistory = async function (req, res) {

  let action = '';
  let todoId = res.locals.todoId;

  try {
    switch(req.method) {
      case 'POST':
        action = 'add'
        break;
      case 'DELETE':
        action = 'delete'
        break;
      case 'PUT':
        action = 'edit'
        break;
      default:
        break;
    }

    if (action !== '') {
      let data = await todoModuleModel.addTodoHistory(todoId, action);
    }

  }
  catch (err) {
    console.log(`Failed to update todo history: ${err}`);
  }

  return res.end();
}
