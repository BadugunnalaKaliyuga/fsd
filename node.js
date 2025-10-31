// server.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello from Codespaces!</h1><p>Email: 23f3001556@ds.study.iitm.ac.in</p>');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server is running on port 3000');
});
