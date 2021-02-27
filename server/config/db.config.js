import mysql from 'mysql'

const dbConn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'test_schema'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

export default dbConn