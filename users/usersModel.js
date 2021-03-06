const db = require('../data/dbConfig.js');

function getAll() {
   return db('users');
}

function insert(user) {
   return db('users').insert(user);
}
function findById(id) {
   return db('users').where('id', id);
}
function remove(id) {
   return db('users').where('id', id).del();
}


module.exports = {
   getAll, insert, remove, findById
};