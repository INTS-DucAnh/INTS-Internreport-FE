import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Divider,
} from "@nextui-org/react";
import { SearchIcon } from "../../Asset/searchIcon";
import DropdownMutiple from "../Dropdown";
import ReportCard from "../ReportCard";
import { apiUrl } from "../../config";

export default function SearchModel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [filter, SetFilter] = useState([]);
  const [form, SetForm] = useState({});
  const [limit, SetLimit] = useState(10);
  const [current, SetCurrent] = useState(1);
  const [list, SetList] = useState([]);
  const [load, SetLoad] = useState(false);
  const [expand, SetExpand] = useState(true);
  const dataSet = [
    {
      slug: "week",
      label: "Tuần",
    },
    {
      slug: "day",
      label: "Ngày",
    },
    {
      slug: "date",
      label: "Thời gian",
    },
  ];

  const convertSlugToLabel = (slug) => {
    return dataSet.filter((e) => e.slug === slug)[0].label;
  };

  const handleFormChange = (type, value) => {
    if (parseInt(value) > 0 || type === "date")
      SetForm((form) => ({ ...form, [type]: value }));
    else SetForm((form) => ({ ...form, [type]: "" }));
    if (current !== 1) SetCurrent(1);
    SetExpand(true);
  };

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && expand) {
      SetCurrent((current) => current + 1);
    }
  };

  const searchData = () => {
    const body = Array.from(filter.entries()).reduce((prev, curr) => {
      prev.push(`${curr[0]}=${form[curr[0]] || ""}`);
      return prev;
    }, []);
    fetch(
      `${apiUrl}/reports/find?limit=${limit}&skip=${(current - 1) * limit}${
        body.length ? "&" : ""
      }${body.join("&")}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.success && load && res.data.length !== 0) {
          SetList((list) =>
            current < res.max ? [...list, ...res.data] : res.data
          );
        } else {
          SetExpand(current === res.max);
        }
        !load && SetLoad(true);
        SetLoad(true);
      });
  };

  useEffect(() => {
    searchData();
  }, [current]);

  return (
    <>
      <Button
        onPress={onOpen}
        startContent={SearchIcon()}
        color="secondary"
        variant="shadow"
        className="flex-1"
        size="lg"
      >
        Tìm kiếm báo cáo
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
        placement="top-center"
        backdrop="blur"
        className="dark text-white"
      >
        <ModalContent className="min-w-[750px] xl:min-w-[60%] 2xl:min-w-[50%] md:min-w-[90%]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Tìm kiếm
              </ModalHeader>
              <Divider orientation="horizontal" />
              <ModalBody>
                <div className="flex flex-col space-x-2 items-end gap-2">
                  <DropdownMutiple
                    dataset={dataSet}
                    setSelected={SetFilter}
                    selected={filter}
                    convertSlugToLabel={convertSlugToLabel}
                  />
                  {Array.from(filter) &&
                    Array.from(filter).map((e) => {
                      return (
                        <div className="flex gap-3 items-center justify-between w-full">
                          <p className="w-20 capitalize font-bold">
                            {convertSlugToLabel(e)}{" "}
                          </p>
                          <Input
                            type={e !== "date" ? "number" : "string"}
                            size="xs"
                            placeholder={`EX: ${convertSlugToLabel(e)} ${
                              e !== "date" ? "1" : "YYYY/MM/DD"
                            }`}
                            startContent={SearchIcon()}
                            value={form[e]}
                            onValueChange={(v) => handleFormChange(e, v)}
                            className="flex-1"
                          />
                        </div>
                      );
                    })}

                  {/* <Divider orientation="vertical" className="mx-2" /> */}
                </div>
                <Divider orientation="horizontal" />
                <div
                  onScroll={handleScroll}
                  className="flex flex-col gap-2 max-h-[500px] overflow-auto"
                >
                  {list.map((e) => (
                    <ReportCard data={e} key={e._id} />
                  ))}
                </div>
              </ModalBody>
              <Divider orientation="horizontal" />
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button color="primary" onPress={searchData}>
                  Tìm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
