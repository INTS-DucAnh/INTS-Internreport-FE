import {
  Button,
  DropdownMenu,
  Dropdown,
  DropdownTrigger,
  DropdownItem,
} from "@nextui-org/react";

export default function DropdownMutiple({
  dataset,
  setSelected,
  selected,
  convertSlugToLabel,
}) {
  return (
    <Dropdown
      size="lg"
      backdrop="blur"
      className=" max-h-[300px] w-fit overflow-auto block"
    >
      <DropdownTrigger className="w-full">
        <Button variant="flat" color="secondary">
          {Array.from(selected)
            .map((e) => convertSlugToLabel(e))
            .join(", ")
            .replaceAll("_", " ") || "Select filter"}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        color="default"
        variant="shadow"
        aria-label="Dropdown Variants"
        closeOnSelect={false}
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {dataset.map((option) => (
          <DropdownItem key={option.slug}>{option.label}</DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
