import { Skeleton, Spacer, Divider } from "@nextui-org/react";

export default function ReportDetailLoading() {
  return (
    <div className="w-[50%] 2xl:w-[60%] xl:w-[95%] relative h-fit overflow-hidden box-border mx-auto border-1 rounded-xl border-zinc-700 bg-white bg-opacity-5 backdrop-blur-xl">
      <div className="flex w-full h-fit flex-wrap box-border px-10 py-10 sticky z-[1] gap-3">
        <Skeleton className="rounded-lg h-12 flex-1 xl:block xl:w-1/2 min-w-[180px]" />
        <Skeleton className="rounded-lg h-12 flex-1 xl:block xl:w-1/2 min-w-[180px]" />

        <Skeleton className="rounded-lg h-12 w-32" />
        <Skeleton className="rounded-lg h-12 w-20" />
        <Skeleton className="rounded-lg h-12 w-20" />
      </div>

      <Divider orientation="horizontal" />

      <div className="flex-col flex flex-1 shrink-1 h-fit overflow-auto box-border px-10 py-10 gap-3">
        <Skeleton className="rounded-lg w-1/2 h-12" />
        <Skeleton className="rounded-lg w-20 h-8" />
        <Skeleton className="rounded-lg w-48 h-8" />
        <Skeleton className="rounded-lg w-3/5 h-8" />

        <Skeleton className="rounded-lg w-1/3 h-12" />
        <Skeleton className="rounded-lg w-32 h-8" />
        <Skeleton className="rounded-lg w-5 h-8" />
        <Skeleton className="rounded-lg w-3/5 h-8" />

        <Skeleton className="rounded-lg w-1/2 h-12" />
        <Skeleton className="rounded-lg w-5 h-8" />
        <Skeleton className="rounded-lg w-10 h-8" />
        <Skeleton className="rounded-lg w-4 h-8" />

        <Skeleton className="rounded-lg w-1/5 h-12" />
        <Skeleton className="rounded-lg w-2/5 h-8" />
        <Skeleton className="rounded-lg w-10 h-8" />
        <Skeleton className="rounded-lg w-4-5 h-8" />
      </div>
    </div>
  );
}
