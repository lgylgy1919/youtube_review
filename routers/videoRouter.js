import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  getEditVideo,
  deleteVideo,
  postEditVideo,
} from "../controllers/videoController";
import { uploadVieo } from "../middlewares";

const videoRouter = express.Router();

//(router + controller)
//Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVieo, postUpload);
//Video Detial
videoRouter.get(routes.videoDetail(), videoDetail);
//Edit Video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);
//Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;
