import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Input } from "@nextui-org/react";

export default function ReportDetail() {
  const { rid } = useParams();
  const [report, SetReport] = useState({});

  const getReportId = (id) => {
    fetch(`/reports/${id}`)
      .then((res) => res.json())
      .then((data) => {
        SetReport(data);
      });
  };

  useMemo(() => {
    // getReportId(rid);
  }, [rid]);

  return (
    <div>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
      {/* <Markdown>{report.body || ""}</Markdown> */}
      <p>This is Report detail for {rid}</p>;
    </div>
  );
}
