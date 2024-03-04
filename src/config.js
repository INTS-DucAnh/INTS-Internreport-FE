const backend_urls = {
  development: "http://localhost:3001",
  production: "https://intern-report-backend.adaptable.app",
};

const env = process.env.NODE_ENV || "development";

// export const apiUrl = backend_urls[env];
export const apiUrl = backend_urls["production"];
