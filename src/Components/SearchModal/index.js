import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { SearchIcon } from "../../Asset/searchIcon";

export default function SearchModel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={onOpen}
        startContent={SearchIcon()}
        color="secondary"
        variant="shadow"
      >
        Tìm kiếm báo cáo
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="lg"
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-xl dark">
                Tìm kiếm
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="dark" onPress={onClose}>
                  Đóng
                </Button>
                <Button color="primary" onPress={onClose}>
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
