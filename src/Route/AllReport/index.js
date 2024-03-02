import React, { useContext, useEffect, useState } from "react";
import { fetchListReport } from "../../lib/fetch";
import { Spacer, Divider, Pagination, Card, CardBody } from "@nextui-org/react";
import Openning from "../../Components/Openning";
import SearchModel from "../../Components/SearchModal";
import ReportCard from "../../Components/ReportCard";
import LoadingReportCard from "../../Components/Loading/loadingReportCard";
import FormModal from "../../Components/FormModal";
import { FormContextProvier } from "../../Context/FormContext";
import { ListReportContext } from "../../Context/ListRepotrContext";

export default function AllReportPage() {
  const { list, max, SetList, updateMax } = useContext(ListReportContext);
  const [limit, SetLimit] = useState(10);
  const [week, SetWeek] = useState(0);
  const [day, SetDay] = useState(0);
  const [init, SetInit] = useState(false);
  const [current, SetCurrent] = useState(1);
  const [loading, SetLoading] = useState(true);

  const getList = () => {
    fetchListReport({
      limit,
      skip: (current - 1) * limit,
      week,
      day,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data.length) {
          SetList(res.data);
          updateMax(limit);
          document.title = `(${res.max}) Báo cáo học tập - Nguyễn Hoàng Đức Anh`;
        }

        SetLoading(false);
      });
  };

  useEffect(() => {
    SetInit(true);
    SetLoading(true);
    getList();
  }, [current, limit, week, day]);

  return (
    <FormContextProvier>
      <section className="flex flex-col h-full items-center box-border px-[20%] md:px-[10%] sm:px-5">
        <Openning />

        <Divider orientation="horizontal" />

        <div className="flex flex-1 flex-col items-center w-3/4 box-border py-7 xl:w-full 2xl:w-3/4">
          <div className="flex w-full justify-end">
            <SearchModel />
            <Spacer x={4} />

            <FormModal
              type={"create"}
              form={{
                date: new Date(),
                title: "",
                description: "",
              }}
            />
          </div>

          <Spacer y={5} />
          <Card className="flex-1 shrink-0 basis-10 w-full p-8 flex-col box-border 2xl:p-3">
            <CardBody className="flex flex-col 2xl:flex-rol flex-wrap-normal gap-3 flex-shrink-0 w-full h-full overflow-auto">
              {loading ? (
                new Array(10).fill(0).map(() => <LoadingReportCard />)
              ) : !list.length ? (
                <p className="my-auto w-full text-center font-bold text-2xl">
                  Không có bản ghi nào
                </p>
              ) : (
                list.map((e) => <ReportCard key={e._id} data={e} />)
              )}
            </CardBody>
          </Card>

          <Spacer y={5} />

          <Pagination
            total={max}
            initialPage={current}
            variant="faded"
            color="secondary"
            onChange={SetCurrent}
          />
        </div>
      </section>
    </FormContextProvier>
  );
}
