import routes from "../routes";
import Video from "../models/Video";

//global
export const home = async (req, res) => {
  try {
    //db의 모든 video를 가져온다.(array로 생성)
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
export const search = (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

//videos
export const getUpload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUpload = async (req, res) => {
  const {
    body: { title, description },
    file: { path },
  } = req;
  //db에 새로운 비디오 생성
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description,
  });
  console.log(newVideo);
  // To do : Upload and save video
  res.redirect(routes.videoDetail(newVideo.id));
};
export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "video Detail" });
export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "edit Video" });
export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "page Title" });
