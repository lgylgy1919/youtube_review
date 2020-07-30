import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

//mongoose와 연결할 mongodb 설정
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

//db 생성
const db = mongoose.connection;
const handleOpne = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log(`❌Error on DB connection${error}`);
//db와 연결
db.once("open", handleOpne);
db.on("error", handleError);
