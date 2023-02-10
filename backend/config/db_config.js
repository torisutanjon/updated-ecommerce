//dependencies
import mongoose from "mongoose";

//connection function
export const conn = async () => {
  mongoose.set("strictQuery", true);
  try {
    await mongoose
      .connect(process.env.MONGO_DB_CONN_SRTING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log(`Connected to Database`));
  } catch (error) {
    if (error) {
      console.log(`Unable to Connect to Database with err: ${error}`);
    }
  }
};
