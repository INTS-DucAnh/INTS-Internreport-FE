import { apiUrl } from "../config";

export const fetchListReport = async ({ limit, skip, day, week }) => {
  let res = [];
  try {
    res = await fetch(
      `${apiUrl}/reports?limit=${limit}&skip=${skip}&day=${day}&week=${week}`
    );
  } catch (err) {
    console.log(err);
  }
  return res;
};

export const fetchReportDetail = async ({ rid }) => {
  let res = {};
  try {
    res = await fetch(`${apiUrl}/reports/${rid}`);
  } catch (err) {
    console.log(err);
  }
  return res;
};
