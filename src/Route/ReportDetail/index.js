import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button, Divider, Tooltip } from "@nextui-org/react";
import { toast } from "react-hot-toast";
import { UilAngleLeft } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import ReportDetailLoading from "../../Components/ReportDetailLoading";
import { DisplayMarkdown } from "../../Components/DisplayMarkdown";
import { apiUrl } from "../../config";

export default function ReportDetail() {
  const { rid } = useParams();
  const [report, SetReport] = useState({});
  const navigate = useNavigate();
  const [loading, SetLoading] = useState(true);
  const color = "secondary";
  const variant = "faded";

  const getReportId = (id) => {
    fetch(`${apiUrl}/reports/${id}`)
      .then((res) => res.json())
      .then((data) => {
        SetLoading(false);
        if (data.success) {
          SetReport(data.data);
          toast.success("Lấy báo cáo thành công");
        } else {
          toast.error("Lấy báo cáo thất bại");
        }
      });
  };

  useEffect(() => {
    getReportId(rid);
  }, [rid]);

  return (
    <div className="h-full w-full overflow-auto block relative py-5">
      <div className="fixed top-10 left-10">
        <Tooltip
          content="Về trang chính"
          shouldFlip={true}
          placement="right"
          showArrow
          size="md"
          color="secondary"
        >
          <Button
            isIconOnly
            color="secondary"
            variant="shadow"
            size="md"
            onClick={() => navigate("/")}
          >
            <UilAngleLeft />
          </Button>
        </Tooltip>
      </div>
      {loading ? (
        <ReportDetailLoading />
      ) : (
        <div className="w-[50%] 2xl:w-[60%] xl:w-[95%] relative h-fit overflow-hidden box-border mx-auto border-1 rounded-xl border-zinc-700 bg-white bg-opacity-5 backdrop-blur-xl">
          <div className="flex w-full h-fit flex-wrap box-border px-10 py-10 sticky z-[1] gap-3">
            <Input
              type="text"
              label="Tiêu đề"
              value={report.title}
              className="flex-1 xl:block xl:w-1/2 min-w-[180px]"
              variant={variant}
              color={color}
              isReadOnly
            />

            <Input
              type="text"
              disabled
              label="Mô tả"
              value={report.description}
              className="flex-1 xl:block xl:w-1/2  min-w-[180px]"
              variant={variant}
              color={color}
              isReadOnly
            />

            <Input
              type="string"
              disabled
              label="Thời gian"
              value={new Date(report.date).toLocaleDateString()}
              className="w-32"
              variant={variant}
              color={color}
              isReadOnly
            />
            <Input
              type="number"
              disabled
              label="Ngày"
              value={report.day}
              className="w-20"
              variant={variant}
              color={color}
              isReadOnly
            />
            <Input
              type="number"
              disabled
              label="Tuần"
              value={report.week}
              className="w-20"
              variant={variant}
              color={color}
              isReadOnly
            />
          </div>

          <Divider orientation="horizontal" />

          <DisplayMarkdown md={report.report} theme="dark" />
        </div>
      )}
    </div>
  );
}
