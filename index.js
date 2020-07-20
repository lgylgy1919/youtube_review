import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

// application을 만든다.
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from my home");
const handleProfile = (req, res) => res.send("You are on my profile");

//쿠키에 유저정보를 저장한다.
app.use(cookieParser());
//req에 포함된 form기입값을 가져온다.(서버가 json, urlencoded 등을 이해하도록 설정)
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
//앱 보안을 강화하는 미들웨어
app.use(helmet());
//log 정보를 생성하는 미들웨어
app.use(morgan("dev"));

app.get("/", handleHome);
app.get("/profile", handleProfile);

//port=4000에 접근하면, 콜백함수로 handleListening을 실행한다.
app.listen(PORT, handleListening);
