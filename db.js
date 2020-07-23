import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
const handleOpne = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log(`❌Error on DB connection${error}`);
db.once("open", handleOpne);
db.on("error", handleError);
