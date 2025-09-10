import { useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import type { IJob } from "../models/IJob";
import { useSearchParams } from "react-router";

export const JobList = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";
  
  useEffect(() => {
    const getData = async () => {
      const jobs = await getJobs(searchText);
      setJobs(jobs);
    }

    getData();

  }, [searchText]);

  console.log(jobs);
    
  return (
    <>
      <h3>A Job List</h3>
      <div>
        {jobs.map((j) => (
          <div key={j.id}>
            <h2>{j.headline}</h2>
        </div>
        ))}
      </div>
    </>
  );
};
