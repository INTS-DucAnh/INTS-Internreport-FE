import {
  Button,
  Tooltip,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalContent,
  Divider,
  Spinner,
} from "@nextui-org/react";
import * as UilIcon from "@iconscout/react-unicons";
import CreateForm from "../CreateForm";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { FormContext } from "../../Context/FormContext";
import { ListReportContext } from "../../Context/ListRepotrContext";
import DisplayMardownModal from "../DisplayMardownModal";
import { apiUrl } from "../../config";

export default function FormModal({ type, form = {} }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { updateList, addToList } = useContext(ListReportContext);
  const { data, SetData } = useContext(FormContext);
  const [loading, SetLoading] = useState(false);

  const fetchOptions = {
    create: {
      url: "/reports/create",
      method: "POST",
      tooltip: "Tạo mới với Secret Key",
      title: "Tạo mới",
      buttonCf: "Tạo",
      button: "lg",
      text: "Tạo mới",
    },
    update: {
      url: "/reports/update",
      method: "PUT",
      tooltip: "Sửa với Secret Key",
      title: "Sửa",
      buttonCf: "Sửa",
      button: "sm",
      text: "Cập nhật",
    },
  };
  const onOpenModal = () => {
    SetData(form);
    onOpen();
  };

  const onCloseModal = (onClose) => {
    SetData({});
    onClose();
  };

  const onSubmit = (onClose) => {
    SetLoading(true);
    fetch(`${apiUrl}${fetchOptions[type].url}`, {
      method: fetchOptions[type].method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        SetLoading(false);
        if (res.success) {
          toast.success(fetchOptions[type].text + " thành công");
          SetData(res);
          onClose();
          if (type === "create") {
            addToList(data);
          } else {
            updateList(data);
          }
        } else {
          toast.error(fetchOptions[type].text + " thất bại");
        }
      });
  };

  return (
    <>
      <Tooltip
        content={fetchOptions[type].tooltip}
        showArrow={true}
        size="md"
        color="secondary"
      >
        <Button
          onPress={onOpenModal}
          isIconOnly
          color="secondary"
          variant="flat"
          size={fetchOptions[type].button}
          shouldFlip={true}
        >
          <UilIcon.UilPen />
        </Button>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
        placement="top-center"
        backdrop="blur"
        className="dark text-white"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                {fetchOptions[type].title}
              </ModalHeader>
              <Divider orientation="horizontal" />
              <ModalBody>
                <div>
                  <CreateForm />
                </div>
              </ModalBody>
              <Divider orientation="horizontal" />

              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => onCloseModal(onClose)}
                >
                  Đóng
                </Button>
                <DisplayMardownModal />
                <Button color="primary" onPress={() => onSubmit(onClose)}>
                  {loading ? (
                    <Spinner color="white" size="sm" />
                  ) : (
                    fetchOptions[type].buttonCf
                  )}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
