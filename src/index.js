const express = require('express');
const routerApi = require('./routes');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 1234;

app.use(express.json());

app.use(cors());    

routerApi(app);

app.listen(port, () => {
  console.log('My port: ' + port);
});
