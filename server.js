const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  console.log(err.name, err.message);
  console.log('UNCUAGHT EXCEPTION! 💥 Shutting down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
// const DB = process.env.DATABASE_LOACL;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connecting to database was successful👏'));

// const testTour = new Tour({
//   name: 'The Park Camper',
//   price: 560
// });

// testTour
//   .save()
//   .then(doc => console.log(doc))
//   .catch(err => console.log('Error 💥', err));

const port = process.env.PORT || 3000;

// console.log(process.env);

const server = app.listen(port, () => {
  console.log(`app running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
