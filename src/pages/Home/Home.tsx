import { TypographyVariation } from "@digi/arbetsformedlingen"
import { DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react"
import "./Home.css"
import { useEffect, useState } from "react";
import type { IJob } from "../../models/IJob";
import { getJobs } from "../../services/JobService";
import { JobSearch } from "../../components/JobSerch";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const navigate = useNavigate();
    
    useEffect(() => {
      const getData = async () => {
        const jobs = await getJobs();
        setJobs(jobs);
      }
  
      if(jobs.length > 0) return;
  
      getData();
    });

    const searchJobs = async (searchText: string) => {
      const searchResults = await getJobs(searchText);
      setJobs(searchResults);

      navigate(`/jobs?search=${encodeURIComponent(searchText)}`);
    }
    
  return (
    <> 
      <div className="home-page">
        <DigiLayoutContainer afVerticalPadding style={{ width: "100%", maxWidth: "700px", background: "beige" }}>
          <DigiTypography afVariation={TypographyVariation.LARGE}>
            <h2>Jobbannonser</h2>
            <p>Hitta ditt nya drömjobb</p>
          </DigiTypography>

          <JobSearch search={searchJobs}/>
        </DigiLayoutContainer>
      </div>
    </>
  )
}