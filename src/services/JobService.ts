import { type IJob, type IJobSearchRes } from "../models/IJob";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se";
const MAX_TOTAL = 2000;
export const getJobs = async (
  searchText?: string,
  limit: number = 10,
  page: number = 1
) => {
  const offset = (page - 1) * limit;

  if (offset + limit > MAX_TOTAL) {
    const adjustedLimit = MAX_TOTAL - offset;

    if (adjustedLimit <= 0) {
      return { hits: [], total: { value: MAX_TOTAL } };
    }

    limit = adjustedLimit;
  }

  let url = `${BASE_URL}/search?limit=${limit}&offset=${offset}`;

  if (searchText && searchText.trim() !== "") {
    url += `&q=${encodeURIComponent(searchText)}`;
  }

  const data = await get<IJobSearchRes>(url);
  return {
    ...data,
    total: { value: Math.min(data.total.value, MAX_TOTAL) },
  };
};

export const getJobById = async (id: string) => {
  const url = `${BASE_URL}/ad/${id}`;
  return await get<IJob>(url);
};
