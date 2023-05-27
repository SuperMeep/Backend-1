const mongoose = require("mongoose");
const CONNECTION_STRING =
  "mongodb+srv://lokomoko:Cm0Db7py789cFs9t@cluster0.t3ofapx.mongodb.net/mycontacts-backend?retryWrites=true&w=majority";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(CONNECTION_STRING);
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
