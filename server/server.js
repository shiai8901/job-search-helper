const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();


const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist'));

router.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
	next();
});

router.get('/', (req, res) => {

	res.send("hello")
});

app.use('/api', router);
app.listen(port);
console.log(`API running at localhost:${port}/api`);