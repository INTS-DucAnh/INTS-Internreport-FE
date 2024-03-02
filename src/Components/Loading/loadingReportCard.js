import { Skeleton, Divider, Spacer } from "@nextui-org/react";

export default function LoadingReportCard() {
  return (
    <div className="basis-[80px] shrink-0 h-[80px] w-full flex flex-row justify-between items-center shadow-xl p-3 box-border bg-white bg-opacity-5 rounded-xl duration-100 hover:-translate-y-1  hover:bg-opacity-10 md:flex-col md:h-fit">
      <div className="flex w-2/5 xl:flex-1 md:w-full h-full items-center">
        <Skeleton className="rounded-xl w-8 h-8 min-w-8 min-h-8" />

        <Spacer x={3} />

        <div className="my-auto">
          <Skeleton className="rounded-xl w-16 h-4 md:8" />
          <Spacer x={3} />
          <Skeleton className="rounded-xl w-36 h-4 md:18" />
        </div>
      </div>
      <Divider orientation="vertical" className="mx-3 xl:hidden" />
      <div className="flex w-2/5 h-full items-center justify-between gap-2 xl:hidden">
        <Skeleton className="rounded-xl w-1/2 h-8" />
        <div className="my-auto flex flex-col justify-center items-end w-fit max-w-1/2">
          <Skeleton className="rounded-xl w-20 h-4" />
          <Spacer x={3} />
          <Skeleton className="rounded-xl w-20 h-4" />
        </div>
      </div>
      <Divider orientation="vertical" className="mx-3 xl:hidden" />
      <Divider orientation="horizontal" className="my-3 hidden md:block " />
      <div className="flex h-full w-fit justify-center md:justify-end md:w-full items-center">
        <Skeleton className="rounded-lg w-32 h-8" />
      </div>
    </div>
  );
}
