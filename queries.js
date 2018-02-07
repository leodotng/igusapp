const db = require('./connection')

function getUserUrl() {
    return db('users').select();
}




module.exports = {
    getUserUrl,
}