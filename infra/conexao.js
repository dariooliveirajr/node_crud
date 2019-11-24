var mysql = require('mysql');
function conexao(){
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'node',
        multipleStatements:'true'
    });
}
module.exports = function(){
    return conexao;
}