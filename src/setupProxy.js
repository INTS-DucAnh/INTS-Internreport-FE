const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  const map = ["/reports/:id", "/reports", "/report/create"];
  map.forEach((e) =>
    app.use(
      e,
      createProxyMiddleware({
        target: "http://localhost:3001",
        changeOrigin: true,
      })
    )
  );
};
