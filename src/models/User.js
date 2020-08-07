import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";
//Defining schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  avatarUrl: String,
  kakaoId: Number,
  githubId: Number,
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  videos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Video" }],
});

UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });
//Creating model(Schema를 사용하기 위해서는 model로 변경해주어야 한다.)
const model = mongoose.model("User", UserSchema);

export default model;
