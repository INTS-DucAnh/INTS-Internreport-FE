import { Routes, Route } from "react-router-dom";
import AllReportPage from "../../Route/AllReport";
import ReportDetail from "../../Route/ReportDetail";
export default function AppRouter() {
  return (
    <Routes>
      <Route path="/">
        <Route path="" element={<AllReportPage />} />
        <Route path=":rid" element={<ReportDetail />} />
      </Route>
      <Route path="/*" element={<p>Not found</p>} />
    </Routes>
  );
}
