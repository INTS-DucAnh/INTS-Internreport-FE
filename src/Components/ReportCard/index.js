import { Button, Spacer, Divider } from "@nextui-org/react";
import { EditDocumentIcon } from "../../Asset/editDocument";
import { useNavigate } from "react-router-dom";
import FormModal from "../FormModal";
import * as UilIcon from "@iconscout/react-unicons";
import DeleteModal from "../DeleteModal";
import DrawerReport from "../Drawer";
import { useRef, useState } from "react";

export default function ReportCard({ data, ...props }) {
  const [isOpen, SetIsOpen] = useState(false);
  const navigate = useNavigate();

  const updateOpen = (value) => {
    SetIsOpen(value);
  };

  const OnClickView = () => {
    updateOpen(true);
  };
  const OnClickRedirect = () => {
    navigate(`/${data._id}`);
  };
  return (
    <div
      {...props}
      className="cursor-pointer basis-[80px] shrink-0 h-[80px] w-full flex flex-row justify-between items-center shadow-xl p-3 box-border bg-white bg-opacity-5 rounded-xl duration-100 hover:-translate-y-1 relative hover:bg-opacity-10 md:flex-col md:h-fit"
    >
      <div
        className="w-full h-full absolute left-0 top-0"
        onClick={(e) => {
          if (e.target === e.currentTarget) OnClickView();
        }}
      />
      <DrawerReport data={data} isOpen={isOpen} updateOpen={updateOpen} />
      <div className="flex w-2/5 xl:flex-1 md:w-full h-full items-center">
        <EditDocumentIcon className="w-8 h-8 min-w-8 min-h-8" />

        <Spacer x={3} />

        <div className="my-auto">
          <p className="text-sm font-bold line-clamp-1 w-fit max-w-full overflow-hidden text-ellipsis">
            {data.title}
          </p>
          <p className="text-sm line-clamp-1 w-fit max-w-full overflow-hidden text-ellipsis h-fit">
            {data.description}
          </p>
        </div>
      </div>
      <Divider orientation="vertical" className="mx-3 xl:hidden" />
      <div className="flex w-2/5 h-full items-center justify-between gap-2 xl:hidden">
        <p className="text-sm line-clamp-1 w-fit max-w-1/2 h-fit">
          Ngày: {new Date(data.date).toLocaleDateString()}
        </p>
        <div className="my-auto flex flex-col justify-center items-end w-fit max-w-1/2">
          <p className="text-sm font-bold line-clamp-1 w-fit max-w-1/2 h-fit">
            Tuần: {data.week}
          </p>
          <Spacer x={3} />
          <p className="text-sm font-bold line-clamp-1 w-fit max-w-1/2 h-fit">
            Ngày: {data.day}
          </p>
        </div>
      </div>
      <Divider orientation="vertical" className="mx-3 xl:hidden" />
      <Divider orientation="horizontal" className="my-3 hidden md:block " />
      <div className="flex h-full w-fit justify-center md:justify-end md:w-full items-center">
        <Divider
          orientation="vertical"
          className="mx-3 xl:block hidden md:hidden"
        />
        <Button
          size="sm"
          aria-label="View"
          variant="shadow"
          color="secondary"
          onClick={OnClickRedirect}
          shouldFlip={true}
          isIconOnly
        >
          <UilIcon.UilEye />
        </Button>
        <Spacer x={2} />
        <FormModal type={"update"} form={data} />
        <Spacer x={2} />
        <DeleteModal _id={data._id} />
      </div>
    </div>
  );
}
