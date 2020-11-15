var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port:"3306",
  user: "root",
  password: "1234",
  database:"sakila"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM actor", function (err, result) {
    if (err) throw err;
    var sql  = result;
    console.log(sql.length);
    for (var index = 0; index < sql.length; index++) {
      console.log(sql[index].first_name)      
  }
  });

  con.end();

});
