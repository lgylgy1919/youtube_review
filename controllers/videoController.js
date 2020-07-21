import videoRouter from "../routers/videoRouter";

//global
export const home = (req, res) => res.send("it's Home");
export const search = (req, res) => res.send("it's Search");

//videos -
export const videos = (req, res) => res.send("it's videos");
export const upload = (req, res) => res.send("it's upload");
export const videoDetail = (req, res) => res.send("it's video detail");
export const editVideo = (req, res) => res.send("it's edit video");
export const deleteVideo = (req, res) => res.send("it's delete video");
