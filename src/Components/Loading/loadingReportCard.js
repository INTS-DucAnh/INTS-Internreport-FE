import { Skeleton, Divider, Spacer } from "@nextui-org/react";

export default function LoadingReportCard() {
  return (
    <div className="2xl:basis-[200px] 2xl:w-1/3 basis-[80px] shrink-0 h-[80px] w-full flex flex-row justify-between items-center shadow-xl p-3 box-border bg-white bg-opacity-[1%] rounded-xl">
      <div className="flex w-2/5 h-full items-center">
        <Skeleton className="rounded-xl w-10 h-10" />

        <Spacer x={3} />

        <div className="my-auto">
          <Skeleton className="rounded-xl w-16 h-4" />
          <Spacer x={3} />
          <Skeleton className="rounded-xl w-36 h-4" />
        </div>
      </div>
      <Divider orientation="vertical" className="mx-3" />
      <div className="flex w-2/5 h-full items-center justify-between">
        <Skeleton className="rounded-xl w-40 h-8" />
        <div className="my-auto flex flex-col justify-center items-end">
          <Skeleton className="rounded-xl w-20 h-4" />
          <Spacer x={3} />
          <Skeleton className="rounded-xl w-20 h-4" />
        </div>
      </div>
      <Divider orientation="vertical" className="mx-3" />
      <div className="flex w-fit h-full items-center">
        <Skeleton className="rounded-lg w-20 h-8" />
      </div>
    </div>
  );
}
