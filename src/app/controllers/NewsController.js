class NewsController {
  // [GET] /news
  news(req, res) {
    res.render("news");
  }
  // [GET] /news/detail1
  detail1(req, res) {
    res.send("day la trang detail 1");
  }
}
module.exports = new NewsController();
