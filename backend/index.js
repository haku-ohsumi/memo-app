const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3001;

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Haku_0717',
  database: 'memo_app'
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  connection.query(
    'SELECT * FROM users',
    function(err, results, fields){
      if(err){
        console.log('接続エラー');
        throw err;
      }
      res.json({message: results[0].name});
    }
  )
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})