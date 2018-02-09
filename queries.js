const db = require('./connection')

function getUserUrl() {
    return db('igusdatabase').select();
}




module.exports = {
    getUserUrl,
    getUserName
}