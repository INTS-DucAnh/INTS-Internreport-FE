import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Input, Button, Divider, Tooltip } from "@nextui-org/react";
import { toast } from "react-hot-toast";
import { UilAngleLeft, UilListUl } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import ReportDetailLoading from "../../Components/ReportDetailLoading";
import { DisplayMarkdown } from "../../Components/DisplayMarkdown";
import { apiUrl } from "../../config";
import ReportOutline from "../../Components/ReportOutline";

export default function ReportDetail() {
  const navigate = useNavigate();
  const { rid } = useParams();
  const [report, SetReport] = useState({});
  const [loading, SetLoading] = useState(true);
  const [openOutline, SetOpenOutline] = useState(false);
  const [headingList, SetHeadingList] = useState([]);
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
          document.title = `${new Date(
            data.data.date
          ).toLocaleDateString()} - ${data.data.description}`;
        } else {
          toast.error("Lấy báo cáo thất bại");
        }
      });
  };

  const addHeading = (heading) => {
    SetHeadingList((hds) => {
      if (headingList.filter((e) => e.id === heading.id).length === 0) {
        hds.push(heading);
      }
      return hds;
    });
  };

  useEffect(() => {
    getReportId(rid);
  }, [rid]);

  return (
    <div className="h-full w-full overflow-auto block relative py-5 2xl:py-32">
      <div className="fixed box-border z-10 xl:mx-auto top-0 left-0 xl mb-5 w-1/5 2xl:w-full">
        <div className=" flex gap-2 w-full p-5 2xl:bg-white 2xl:bg-opacity-5 2xl:backdrop-blur-sm border-b-1 border-b-stone-700">
          <Tooltip
            content="Về trang chính"
            shouldFlip={true}
            placement="bottom"
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

          <Tooltip
            content="Outline"
            shouldFlip={true}
            placement="bottom"
            showArrow
            size="md"
            color="secondary"
          >
            <Button
              isIconOnly
              color="secondary"
              variant="faded"
              size="md"
              id="close-outline"
              onClick={() => {
                SetOpenOutline((outline) => !outline);
              }}
            >
              <UilListUl />
            </Button>
          </Tooltip>
        </div>
        <ReportOutline isOpen={openOutline} data={headingList} />
      </div>
      {loading ? (
        <ReportDetailLoading />
      ) : (
        <div className="w-[55%] 2xl:w-[70%] xl:w-[95%] relative h-fit overflow-hidden box-border mx-auto border-1 rounded-xl border-zinc-700 bg-white bg-opacity-5 backdrop-blur-xl">
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

          <DisplayMarkdown
            md={report.report}
            theme="dark"
            renderHeading={true}
            addHeading={addHeading}
          />
        </div>
      )}
    </div>
  );
}
