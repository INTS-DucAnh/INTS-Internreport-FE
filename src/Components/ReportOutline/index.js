import { Divider } from "@nextui-org/react";

export default function ReportOutline({ isOpen, data, ...props }) {
  if (!isOpen) return null;

  const TagName = ({ element, ...props }) => {
    const Tag = element.tagName;
    return (
      <a
        href={`#${element.id}`}
        className=" opacity-50 hover:opacity-100 relative before:hidden hover:before:block before:absolute before:left-0 before:top-0 before:h-full before:bg-gradient-to-r before:from-[#bb6dff75] before:to-transparent before:border-l-3 before:border-purple-200 before:to-[20%] before:w-full"
      >
        <Tag>{element.text}</Tag>
      </a>
    );
  };
  return (
    <div
      {...props}
      className="w-full m-5 2xl:w-fit 2xl:max-w-[35%]: xl:max-w-[60%] 2xl:bg-white 2xl:bg-opacity-5 2xl:rounded-xl 2xl:border-1 2xl:backdrop-blur-sm 2xl:border-stone-600 2xl:absolute 2xl:left-0 2xl:right-0 2xl:box-border p-5"
    >
      <p className=" text-2xl font-bold">Outline</p>
      <Divider orientation="horizontal" className="my-3" />
      <div className="w-fit max-h-[500px] overflow-auto markdown-outline overflow-x-hidden">
        {Object.values(data).map((e) => (
          <TagName element={e} key={e.id} />
        ))}
      </div>
    </div>
  );
}
