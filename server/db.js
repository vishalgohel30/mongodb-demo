//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = "mongodb://localhost:27017/coffeedb";
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true }, function (error) {
    if (!error) {
        console.log('dataBase is conected');
    } else {
        console.log('Error conneting To DataBase');
    }
});

module.exports = mongoose;
