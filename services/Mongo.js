import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connect");
    return conn;
  } catch (e) {
    console.error(e);
  }
};
