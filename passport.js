import passport from "passport";
import GithubStrategy from "passport-github";
import KakaoStrategy from "passport-kakao";
import User from "./models/User";
import {
  githubLoginCallback,
  kakaoLoginCallback,
} from "./controllers/userController";
import routes from "./routes";

passport.use(User.createStrategy());

//사용자가 github에서 돌아오는 과정
passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`,
    },
    githubLoginCallback
  )
);

passport.use(
  new KakaoStrategy(
    {
      clientID: process.env.KAKAO_ID,
      clientSecret: process.env.KAKAO_SECRET,
      callbackURL: `http://localhost:4000${routes.kakaoCallback}`,
    },
    kakaoLoginCallback
  )
);

//쿠키에 사용자 정보를 담고
passport.serializeUser(User.serializeUser());
//담긴 정보를 통해 사용자 식별
passport.deserializeUser(User.deserializeUser());
