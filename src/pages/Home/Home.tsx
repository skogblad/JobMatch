import { LayoutBlockVariation, TypographyVariation } from "@digi/arbetsformedlingen"
import { DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react"
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
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} className="home-block">
            <DigiLayoutContainer afVerticalPadding>
                <DigiTypography afVariation={TypographyVariation.SMALL}>
                    <h1>JobMatch</h1>
                    <h2>Hitta ditt nya drömjobb</h2>
                </DigiTypography>

                <JobSearch search={searchJobs}/>
            </DigiLayoutContainer>
        </DigiLayoutBlock>
      </div>
    </>
  )
}