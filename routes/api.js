const router = require('express').Router();
const Transaction = require('../models/workout.js');

router.post('/api/workout', ({ body }, res) => {
	Transaction.create(body)
		.then((dbTransaction) => {
			res.json(dbTransaction);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.get('/api/workouts', (req, res) => {
	Transaction.find({})
		.sort({ date: -1 })
		.then((dbTransaction) => {
			res.json(dbTransaction);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

module.exports = router;

// workout.create
// workout.fgindbyidandupdate
// workout.find({}).limit(7)
