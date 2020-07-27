import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());

//쿠키에 사용자 정보를 담고
passport.serializeUser(User.serializeUser());
//담긴 정보를 통해 사용자 식별
passport.deserializeUser(User.deserializeUser());
