var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'goods'
});
 
connection.connect();
 
connection.query('select user_name,email from p_users limit 5', function (error, results, fields) {
    console.log(results)
  
});
connection.end();
