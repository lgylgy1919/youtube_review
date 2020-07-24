import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

// application을 만든다.
const app = express();

//view engine을 "pgu"로 지정한다.
app.set("view engine", "pug");
//디렉토리에서 파일을 보내주는 미들웨어
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
//쿠키에 유저정보를 저장한다.
app.use(cookieParser());
//사용자가 웹사이트로 전달하는 정보들을 검사, (request 정보에서 form이나 json형태로 된 body를 검사)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//앱 보안을 강화하는 미들웨어
app.use(helmet());
//log 정보를 생성하는 미들웨어
app.use(morgan("dev"));

//local 변수를 전역변수로 사용

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
