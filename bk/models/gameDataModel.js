const mongoose = require('mongoose');
//User Schema

const GameUserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    score: {
        type: Number,
    }
});

const GameData = module.exports = mongoose.model('GameData', GameUserSchema);

