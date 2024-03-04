import { createPortal } from "react-dom";
import { Drawer, DrawerBody, DrawerHeader } from "./ui.drawer";
import { DisplayMarkdown } from "../DisplayMarkdown";

export default function DrawerReport({ data, isOpen, updateOpen }) {
  if (!isOpen) return;

  return createPortal(
    <Drawer updateOpen={updateOpen}>
      <DrawerBody>
        <DisplayMarkdown md={data.report} />
      </DrawerBody>
    </Drawer>,
    document.body
  );
}
