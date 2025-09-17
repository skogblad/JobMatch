import {
  LayoutBlockVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import "./Home.css";
import { useEffect, useState } from "react";
import type { IJob } from "../../models/IJob";
import { getJobs } from "../../services/JobService";
import { JobSearch } from "../../components/search/JobSearch";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const res = await getJobs();
      setJobs(res.hits);
    };

    if (jobs.length === 0) getData();
  }, [jobs.length]); // jobs.length som dependency endast om listan är tom

  const searchJobs = async (searchText: string) => {
    const searchResults = await getJobs(searchText);
    setJobs(searchResults.hits); // hits som relevant i detta fall för att undvika typfel i jobs

    navigate(`/jobs?search=${encodeURIComponent(searchText)}`);
  };

  return (
    <>
      <div className="home-page">
        <DigiLayoutBlock
          afVariation={LayoutBlockVariation.SECONDARY}
          className="home-block"
        >
          <DigiLayoutContainer afVerticalPadding>
            <DigiTypography afVariation={TypographyVariation.SMALL}>
              <h1>JobMatch</h1>
              <h2>Hitta ditt nya drömjobb</h2>
            </DigiTypography>

            <JobSearch search={searchJobs} />
          </DigiLayoutContainer>
        </DigiLayoutBlock>
      </div>
    </>
  );
};
