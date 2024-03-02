export default function ReportOutline({ isOpen, data }) {
  if (!isOpen) return null;

  const TagName = ({ element, ...props }) => {
    const Tag = element.tagName;
    return (
      <a {...props} href={`#${element.id}`} className="scroll-mt-32">
        <Tag
          style={{
            marginLeft: `${parseInt(element.tagName.slice(-1) - 1) * 10}px`,
          }}
        >
          {element.text}
        </Tag>
      </a>
    );
  };
  return (
    <div className="w-full mt-5 2xl:w-fit 2xl:bg-white 2xl:bg-opacity-5 2xl:rounded-xl 2xl:border-1 2xl:backdrop-blur-sm 2xl:border-stone-600 2xl:absolute 2xl:left-0 2xl:right-0 2xl:box-border p-3">
      {Object.values(data).map((e) => (
        <TagName element={e} key={e.id}/>
      ))}
    </div>
  );
}
