import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormContextProvier({ children }) {
  const [data, SetData] = useState({});

  const handleDataChange = (type, value) => {
    SetData((data) => ({
      ...data,
      [type]: value,
    }));
  };

  return (
    <FormContext.Provider value={{ data, handleDataChange, SetData }}>
      {children}
    </FormContext.Provider>
  );
}
