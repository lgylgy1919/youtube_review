import routes from "./routes";
import multer from "multer";
// multer?? 파일 업로드에 필요.
const multerVideo = multer({ dest: "uploads/videos/" });

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  //pug템플릿에서 링크를 걸기 위해 사용하는 변수.
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: false,
    id: 1,
  };
  next();
};

//Single은 하나의 파일만 업로드하겠다는 의미, videorouter에서 미들웨어로 사용
export const uploadVieo = multerVideo.single("videoFile");
