'use strict'

//let dbConnection = require('');

//const { Pool, Client } = require('pg')
const db = require('../../common/databaseConnection');

exports.getAll = async function () {

  return await db.query(`
                        SELECT * 
                        FROM todos
                        ORDER BY id`);

}

exports.addOne = async function (text, status) {

  return await db.query(`
                        INSERT INTO todos (id, text, status)
                        VALUES (DEFAULT, $1, $2)
                        RETURNING *
                        `,
                        [text, status]
  );
},

exports.deleteOne = async function (id) {

  return await db.query(`
                        DELETE FROM todos
                        WHERE id = $1
                        `,
                        [id]
  );
}

exports.editOne = async function (id, text, status) {

  return await db.query(`
                        UPDATE todos
                        SET text = $2, status = $3
                        WHERE id = $1
                        `,
                        [id, text, status]
  );
}

exports.logChange = async function (id, text, status) {

  return await db.query(`
                        INSERT INTO todo_history (todo_id, action, date)
                        VALUES (id, text, NOW())
                        `,
                        [id, text, status]
  );
}


