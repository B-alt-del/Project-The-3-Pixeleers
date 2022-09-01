
// For now we will each have our own connection setup in here 
// this way for testing we can connect to our own mongoDB and not have to keep changing it
// whenever you do a pull, just comment out the other peoples connection and uncomment your own




// Brads Connection

const mongoose = require('mongoose');
const is_production = process.env.NODE_ENV;

const url = is_production ? 'mongodb+srv://b-alt-del:password12345@cluster0.c5whavk.mongodb.net/?retryWrites=true&w=majority' : 'mongodb://127.0.0.1:27017/ThePixeleers'

  mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

// Fatuuns Connection









//Lees Connection