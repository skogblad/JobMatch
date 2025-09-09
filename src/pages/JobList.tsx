import { useEffect, useState } from "react";
import { getJobs } from "../services/JobService";
import type { IJob } from "../models/IJob";

export const JobList = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  
  useEffect(() => {
    const getData = async () => {
      const jobs = await getJobs();
      setJobs(jobs);
    }

    if(jobs.length > 0) return;

    getData();

    
  });

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
