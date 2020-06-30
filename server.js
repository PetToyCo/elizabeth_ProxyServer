const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('./product', (req, res) => {
  var itemId = req.query;
  console.log('itemId: ', itemId);

  
})

app.listen(3000, () => {
  console.log('Proxy server is listening on PORT 3000');
})