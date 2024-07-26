const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL).then((data) => {
    console.log(`Mongoose connected successfully !:${data.connection.host}`);
  });
};

module.exports = connectDatabase;
