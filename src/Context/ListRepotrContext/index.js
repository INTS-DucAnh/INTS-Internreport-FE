import { createContext, useEffect, useState } from "react";

export const ListReportContext = createContext();

export function ListRepotrContextProvider({ children }) {
  const [list, SetList] = useState([]);
  const [max, SetMax] = useState(1);
  const [limit, SetLimit] = useState(10);

  const addToList = (report) => SetList((arr) => [...arr, report]);
  const updateList = (report) => {
    SetList((arr) => arr.map((r, i) => (r._id === report._id ? report : r)));
  };
  const removeReport = (_id) =>
    SetList((arr) => arr.filter((r, i) => r._id === _id));

  const updateMax = (lim = limit) => {
    SetLimit(lim);
    SetMax(Math.ceil(list.length / lim) || 1);
  };

  useEffect(() => {
    updateMax();
  }, [list]);

  return (
    <ListReportContext.Provider
      value={{
        list,
        max,
        addToList,
        updateList,
        updateMax,
        SetList,
        removeReport,
      }}
    >
      {children}
    </ListReportContext.Provider>
  );
}
