const mongoose = require("mongoose")
module.exports = async () => {
console.log("dataloaded")
  try {

  
      // Mongodb Connect 
      mongoose.set('strictQuery', true)
      mongoose.connect(process.env.mongodbURL,
        {
          connectTimeoutMS: 90000,
          dbName: 'aramporject'
        })
      const db = mongoose.connection;
      db.on('error', (err) => {
        console.error('MongoDB connection error:', err)
      });
      db.once('open', async () => {
        console.log('Connected to the Mongodb Database');

      })



  } catch (err) {
    console.log(err)
  }
}