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
import { uploadVieo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

//(router + controller)
//Upload
videoRouter.get(routes.upload, onlyPrivate, getUpload);
videoRouter.post(routes.upload, onlyPrivate, uploadVieo, postUpload);
//Video Detial
videoRouter.get(routes.videoDetail(), videoDetail);
//Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideo);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideo);
//Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideo);

export default videoRouter;
