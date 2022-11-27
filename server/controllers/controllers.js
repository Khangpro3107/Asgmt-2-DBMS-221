const homePageMiddleware = async (req, res) => {
  res.send("<h1>Hello world!</h1>")
}

module.exports = homePageMiddleware
// controllers, middlewares here