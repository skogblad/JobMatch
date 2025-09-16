import { type IJob, type IJobSearchRes } from "../models/IJob";
import { type ICompletionResponse } from "../models/ICompletion";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se";

export const getJobs = async (
  searchText?: string,
  limit: number = 10,
  page: number = 1
) => {
  const offset = (page - 1) * limit;
  let url = `${BASE_URL}/search?limit=${limit}&offset=${offset}`;

  if (searchText && searchText.trim() !== "") {
    url += `&q=${encodeURIComponent(searchText)}`;
  }

  const data = await get<IJobSearchRes>(url);
  return data;
};

export const getJobById = async (id: string) => {
  const url = `${BASE_URL}/ad/${id}`;
  return await get<IJob>(url);
};

export const getJobCompletion = async (searchText: string, limit = 5) => {
  const url = `${BASE_URL}/complete?q=${encodeURIComponent(
    searchText
  )}&limit=${limit}`;
  const data = await get<ICompletionResponse>(url);
  return data.typeahead;
};
