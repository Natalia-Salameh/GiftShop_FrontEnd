// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'your_username',
//   password: 'your_password',
//   database: 'gift-shop',
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database');
// });
// connection.query('SELECT * FROM products', (err, results) => {
//   if (err) {
//     console.error('Error executing the query:', err);
//     return;
//   }
//   console.log('Fetched data:', results);
//   // Process the retrieved data as neededAA
// });
// connection.end((err) => {
//   if (err) {
//     console.error('Error closing the database connection:', err);
//     return;
//   }
//   console.log('Database connection closed');
// });
