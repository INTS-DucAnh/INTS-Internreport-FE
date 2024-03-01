import { createContext, useState } from "react";

export const FormUpdateContext = createContext();

export function FormUpdateProvider({ children }) {
  const [data, SetData] = useState({});

  const handleDataChange = (type, value) => {
    SetData((data) => ({
      ...data,
      [type]: value,
    }));
  };

  const changeDataset = (data) => SetData(data);

  return (
    <FormUpdateContext.Provider
      value={{ data, handleDataChange, changeDataset }}
    >
      {children}
    </FormUpdateContext.Provider>
  );
}
