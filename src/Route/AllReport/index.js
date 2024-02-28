import { useEffect, useState } from "react";
import { fetchListReport } from "../../lib/fetch";
import { Accordion, AccordionItem, Spacer, Divider } from "@nextui-org/react";
import Openning from "../../Components/Openning";
import SearchModel from "../../Components/SearchModal";

export default function AllReportPage() {
  const [list, SetList] = useState([]);
  const [skip, SetSkip] = useState(0);
  const [limit, SetLimit] = useState(10);
  const [week, SetWeek] = useState(1);
  const [day, SetDay] = useState(1);

  const getList = async () => {
    let res = await fetchListReport({
      limit,
      skip,
      week,
      day,
    });

    SetList(res);
  };

  useEffect(() => {
    getList();
  }, [skip, limit, week, day]);

  return (
    <section className="flex flex-col items-center box-border px-[20%] md:px[10%] sm:px-[10px]">
      <Openning />

      <Divider orientation="horizontal" />

      <div className="flex flex-col items-center w-1/2 box-border py-14 sm:w-full sm:px-5 lg:w-4/5 2xl:w-2/3">
        <SearchModel />

        <Spacer y={5} />

        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="date " />
        </Accordion>
      </div>
    </section>
  );
}
