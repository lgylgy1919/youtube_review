import { videos } from "../db";
import routes from "../routes";

//global
//db의 video 객체를 home.pug에 전달.
export const home = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

//videos
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
  const {
    body: { file, title, description },
  } = req;
  // To do : Upload and save video
  res.redirect(routes.videoDetail());
};
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "page Title" });
