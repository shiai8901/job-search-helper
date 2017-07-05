const express = require('express');
const app = express();

const port = process.env.PORT || 8080;


app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);