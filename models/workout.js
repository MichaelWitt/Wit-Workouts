const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day: {
		type: Date,
		default: () => new Date()
	},
	exercises: [
		{
			type: {
				type: String,
				trim: true,
				required: 'Enter an exercise type'
			},
			name: {
				type: String,
				trim: true,
				required: 'Enter an exercise name'
			},
			duration: {
				type: Number
			},
			distance: {
				type: Number
			},
			weight: {
				type: Number
			},
			// FINISH THESE
			reps: 10,
			sets: 4
		}
	]
});

// YODATE TO WORKOUT
const Transaction = mongoose.model('Transaction', workoutSchema);

module.exports = Transaction;
