const mongoose = require('mongoose');
const { MONGODB_URI } = require('../server/config/config.js')
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
.then(() => {
  console.log('MongoDB connected')
})
.catch((err) => console.log(err));
mongoose.set('useCreateIndex', true);
module.exports = {
  mongoose: mongoose
}