import { type IJob, type IJobSearchRes } from "../models/IJob";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se";

export const getJobs = async (searchText?: string, limit: number = 10) => {
    let url = `${BASE_URL}/search?limit=${limit}`;

    if (searchText && searchText.trim() !== "") {
        url += `&q=${encodeURIComponent(searchText)}`;
    }

    const data = await get<IJobSearchRes>(url);
    return data.hits;
}

export const getJobById = async (id: string) => {
    const url = `${BASE_URL}/ad/${id}`;
    return await get<IJob>(url);

}