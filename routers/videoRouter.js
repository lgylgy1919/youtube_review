import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo,
} from "../controllers/videoController";
import { uploadVieo } from "../middlewares";

const videoRouter = express.Router();

// (router + controller)
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVieo, postUpload);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;