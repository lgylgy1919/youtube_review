import routes from "../routes";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  // password 확인과 똑같은지 점검
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // To do : register User
    // To do : log user in
    res.redirect(routes.home);
  }
};

export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
  res.redirect(routes.home);
};
export const logout = (req, res) => {
  // To Do : Process Log Out
  res.render("logout", { pageTitle: "Log Out" });
};

export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "user Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "change Password" });
