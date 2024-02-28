import { Spacer, User, Card } from "@nextui-org/react";

export default function Openning() {
  return (
    <div className="py-20 flex flex-col justify-center items-center">
      <div className="w-full flex-col gap-2">
        <h1 className="font-bold text-6xl sm:text-4xl text-center w-full ">
          Báo cáo học tập
        </h1>
        <Spacer y={5} />
        <h2 className="w-full text-center text-medium sm:text-xs text-default-400">
          Những báo cáo về việc học tập trong thời gian học tại INTS
        </h2>
      </div>

      <Spacer y={10} />

      <Card className="h-fit w-fit py-5 px-7 pb-4 rounded-2xl">
        <User
          name="Nguyễn Hoàng Đức Anh"
          description="Thực tập sinh - Backend"
          avatarProps={{
            src: "https://lh3.googleusercontent.com/a/ACg8ocJYO67wovkOP09wW7wrI7zBKN6lfqYc-Qlxrb5nTYYPJw=s260-c-no",
          }}
        />
      </Card>
    </div>
  );
}
