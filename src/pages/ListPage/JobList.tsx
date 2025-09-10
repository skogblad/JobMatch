import "./JobList.css";
import placeholder from "../../assets/placeholder.svg";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getJobs } from "../../services/JobService";
import type { IJob } from "../../models/IJob";

import {
  DigiLayoutContainer,
  DigiLayoutMediaObject,
  DigiLink,
  DigiList,
  DigiMediaImage,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import {
  LayoutMediaObjectAlignment,
  TypographyVariation,
} from "@digi/arbetsformedlingen";

export const JobList = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";

  useEffect(() => {
    const getData = async () => {
      const jobs = await getJobs(searchText);
      setJobs(jobs);
    };

    getData();
  }, [searchText]);

  return (
    <DigiLayoutContainer className="page-container">
      <DigiList className="job-list">
        {jobs.map((j) => (
          <li key={j.id}>
            <DigiLayoutMediaObject
              className="job-list-item"
              afAlignment={LayoutMediaObjectAlignment.CENTER}
            >
              <DigiMediaImage slot="media" className="item-img">
                {j.logo_url ? (
                  <img src={j.logo_url} alt={j.headline} />
                ) : (
                  <img src={placeholder} alt="Placeholder image" />
                )}
              </DigiMediaImage>
              <DigiTypography afVariation={TypographyVariation.SMALL}>
                <DigiLink afHref={`/jobs/${j.id}`}>
                  <h3>{j.headline}</h3>
                </DigiLink>
                <p>{j.occupation.label}</p>
                <p>Publiserad {j.publication_date}</p>
              </DigiTypography>
            </DigiLayoutMediaObject>
          </li>
        ))}
      </DigiList>
    </DigiLayoutContainer>
  );
};
