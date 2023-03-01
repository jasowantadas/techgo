//Connection to database

import mongoose from "mongoose";
const connectToDatabase = async () => {
  try {
    mongoose.set("strictQuery", false); //no need to remember
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true, //remember
      useNewUrlParser: true, //remember
    });

    console.log(`MongoDB connected:${connect.connection.host}`);
  } catch (error) {
    console.log(error.message);
  }
};
export default connectToDatabase;
