const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
var cors = require('cors');
var app = express();
app.use(cors());

const port = 5000;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url).then((client) => {
	const connect = client.db('local');

	app.get('/productList', (req, res) => {
		let query = {};
		const data =
			req.query ? req.query : {};

		if (data.id) {
			query._id = ObjectId(data.id)
		}

		if (data.categoryType) {
			query.categoryType = data.categoryType;
		}

		connect
			.collection('product_list')
			.aggregate([
				{ $match: query },
			])
			.toArray(function (err, value){
				if (err) {
					res.status(500).send({
						errorMessage: 'Backend failed to fetch data. Please try after some time.',
						error: err,
					});
				}
				res.send(value);
			});
	});

	app.get('/tabDetails', (req, res) => {
		connect
			.collection('tab_details')
			.find({})
			.toArray()
			.then((ans) => {
				res.send(ans);
			})
			.catch((err) => {
				res.status(500).send({
					errorMessage: 'Backend failed to fetch data. Please try after some time.',
					error: err,
				});
			});
	});
});

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
