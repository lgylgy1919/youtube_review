import mongoose from "mongoose";

//Defining schema
const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required",
  },
  title: {
    type: String,
    required: "Title is required",
  },
  description: String,
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

//정의한 schema를 생성 ( ModelName, schema)
const model = mongoose.model("Video", VideoSchema);

export default model;
