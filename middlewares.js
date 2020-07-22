import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Youtube";
  //pug템플릿에서 링크를 걸기 위해 사용하는 변수.
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1,
  };
  next();
};
