const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const db = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

// const db = mongoose
//   .connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log(`DB connected `))
//   .catch((e) => console.error(e));

module.exports = db;
