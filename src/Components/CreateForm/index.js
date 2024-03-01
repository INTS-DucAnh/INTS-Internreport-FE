import { Input, Spacer, Textarea } from "@nextui-org/react";
import { useContext } from "react";
import { FormContext } from "../../Context/FormContext";

export default function CreateForm() {
  const { data, handleDataChange } = useContext(FormContext);
  const validateString = (type, string) => {
    handleDataChange(type, string);
  };

  const validateNumber = (type, number) => {
    if (parseInt(number) > 0) {
      handleDataChange(type, parseInt(number));
    } else {
      handleDataChange(type, 1);
    }
  };

  return (
    <>
      <Input
        variant="faded"
        isRequired
        color="primary"
        type="text"
        label="Tiêu đề"
        placeholder="Nhập tiêu đề ..."
        value={data.title}
        onValueChange={(v) => handleDataChange("title", v)}
      />
      <Spacer y={3} />
      <div className="flex">
        <Input
          variant="faded"
          isRequired
          color="primary"
          type="string"
          label="Thời gian"
          placeholder="Ex: yyyy-mm-dd"
          className="flex-1"
          value={new Date(data.date).toLocaleDateString()}
          onValueChange={(v) => validateString("date", v)}
        />
        <Spacer y={3} />
        <Input
          variant="faded"
          isRequired
          color="primary"
          type="number"
          label="Ngày"
          placeholder="Ex: 1"
          className="basis-20"
          value={data.day}
          onValueChange={(v) => validateNumber("day", v)}
        />
        <Spacer y={3} />
        <Input
          variant="faded"
          isRequired
          color="primary"
          type="number"
          label="Tuần"
          placeholder="Ex: 1"
          className="basis-20"
          value={data.week}
          onValueChange={(v) => validateNumber("week", v)}
        />
      </div>
      <Spacer y={3} />
      <div className="flex">
        <Input
          variant="faded"
          color="primary"
          isRequired
          type="text"
          label="Mô tả"
          placeholder="Ex: Học và tìm hiểu ..."
          value={data.description}
          onValueChange={(v) => validateString("description", v)}
        />
        <Spacer y={3} />
        <Input
          isRequired
          variant="faded"
          color="primary"
          type="password"
          label="Secret Key"
          placeholder="Ex: SECRET_KEY_APP"
          value={data.secretKey}
          onValueChange={(v) => validateString("secretKey", v)}
        />
      </div>
      <Spacer y={6} />

      <Textarea
        variant="faded"
        color="primary"
        isRequired
        type="text"
        label="Tiêu đề"
        placeholder="Markdown content (.md) ..."
        disableAnimation
        maxRows={20}
        className="max-h-[500px] overflow-auto block"
        value={data.report}
        onValueChange={(v) => handleDataChange("report", v)}
      />
    </>
  );
}
