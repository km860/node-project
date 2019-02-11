const mongoose = require('mongoose');
const { MONGODB_URI } = require('../server/config/config.js')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useFindAndModify: false })
.then(() => {
  console.log('MongoDB connected')
})
.catch((err) => console.log('error:',err));
mongoose.set('useCreateIndex', true);
module.exports = {
  mongoose: mongoose
}