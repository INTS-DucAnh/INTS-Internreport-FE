import {
  Button,
  useDisclosure,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalContent,
  Divider,
} from "@nextui-org/react";
import * as UilIcon from "@iconscout/react-unicons";
import { useContext, useState } from "react";
import { FormContext } from "../../Context/FormContext";
import { DisplayMarkdown } from "../DisplayMarkdown";

export default function DisplayMardownModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data } = useContext(FormContext);

  const onOpenModal = () => {
    onOpen();
  };

  const onCloseModal = (onClose) => {
    onClose();
  };

  return (
    <>
      <Button
        onPress={onOpenModal}
        color="secondary"
        variant="ghost"
        size="md"
        shouldFlip={true}
        startContent={UilIcon.UilEye}
      >
        Xem trước
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="opaque"
        placement="top-center"
        className="dark text-white"
      >
        <ModalContent className="min-w-[50%] xl:min-w-[80%] h-fit over">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl">
                Xem trước Markdown
              </ModalHeader>
              <Divider orientation="horizontal" />
              <ModalBody>
                <div className="max-h-[600px] overflow-auto">
                  <DisplayMarkdown md={data.report} theme="light" />
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
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
