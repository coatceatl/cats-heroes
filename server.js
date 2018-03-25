const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send('Hello from server');
});

const PORT = process.env.PORT || 3100;

app.listen(PORT, () => {
  console.log('server started');
})
