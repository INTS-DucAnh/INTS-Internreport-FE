import { Input } from "@nextui-org/react";

export default function DeleteForm({ secretKey, validateString }) {
  return (
    <>
      <Input
        isRequired
        variant="faded"
        color="primary"
        type="text"
        label="Secret Key"
        placeholder="Ex: SECRET_KEY_APP"
        value={secretKey}
        onValueChange={(v) => validateString(v)}
      />
    </>
  );
}
