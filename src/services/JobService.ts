import type { IJobSearchRes } from "../models/IJob";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se";

export const getJobs = async (limit: number = 10) => {
    const url = `${BASE_URL}/search?limit=${limit}`;

    const data = await get<IJobSearchRes>(url);
    return data.hits;
}