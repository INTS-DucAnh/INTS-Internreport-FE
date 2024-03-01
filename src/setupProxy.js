const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  const map = [
    "/reports/:id",
    "/reports",
    "/reports/create",
    "/reports/update",
    "/reports/find",
  ];

  map.forEach((e) =>
    app.use(
      e,
      createProxyMiddleware({
        target: "https://intern-report-backend.adaptable.app",
        changeOrigin: true,
      })
    )
  );
};
