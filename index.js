const express = require('express');
const app = express();


app.use(require('./services/users-services/routing'));

const port = process.env.PORT || 3200;
app.listen(port, () => console.log(`listening on port ${port}...`));