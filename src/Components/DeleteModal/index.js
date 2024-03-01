import {
  Modal,
  Tooltip,
  Button,
  ModalContent,
  ModalBody,
  ModalHeader,
  ModalFooter,
  useDisclosure,
  Divider,
  Spinner,
} from "@nextui-org/react";
import * as UilIcon from "@iconscout/react-unicons";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import DeleteForm from "../DeleteForm";
import { ListReportContext } from "../../Context/ListRepotrContext";

export default function DeleteModal({ _id }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loading, SetLoading] = useState(false);
  const [secretKey, SetSecret] = useState();
  const { removeReport } = useContext(ListReportContext);

  const onDelete = (onClose) => {
    SetLoading(true);
    fetch(`/reports/delete?id=${_id}&secretKey=${secretKey}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        SetLoading(false);
        if (res.success) {
          toast.success("Xoá thành công!");
          removeReport(_id);
          onClose();
        } else {
          toast.error("Xoá thất bại!");
        }
      });
  };

  const validateString = (string) => {
    SetSecret(string.trim());
  };
  return (
    <>
      <Tooltip content={"Xoá"} showArrow={true} size="md" color="secondary">
        <Button
          onPress={onOpen}
          isIconOnly
          color="danger"
          variant="flat"
          size={"sm"}
          shouldFlip={true}
        >
          <UilIcon.UilTrashAlt />
        </Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Xoá báo cáo
              </ModalHeader>
              <Divider orientation="horizontal" />
              <ModalBody>
                <div>
                  <DeleteForm
                    secretKey={secretKey}
                    validateString={validateString}
                  />
                </div>
              </ModalBody>
              <Divider orientation="horizontal" />
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button color="danger" onPress={() => onDelete(onClose)}>
                  {loading ? <Spinner color="white" size="sm" /> : "Xoá"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
