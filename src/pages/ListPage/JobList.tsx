import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import { getJobs } from "../../services/JobService";
import type { IJob } from "../../models/IJob";
import {
  DigiLayoutContainer,
  DigiList,
  DigiLayoutMediaObject,
  DigiMediaImage,
  DigiTypography,
  DigiLayoutColumns,
} from "@digi/arbetsformedlingen-react";
import "./JobList.css";
import placeholder from "../../assets/placeholder.svg";
import {
  LayoutColumnsElement,
  LayoutColumnsVariation,
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
    <DigiLayoutContainer>
      <DigiLayoutColumns
        className="page-column"
        afElement={LayoutColumnsElement.DIV}
        afVariation={LayoutColumnsVariation.ONE}
      >
        <DigiList className="job-list">
          {jobs.map((j) => (
            <li className="job-list-item" key={j.id}>
              <DigiLayoutMediaObject
                afAlignment={LayoutMediaObjectAlignment.CENTER}
              >
                <DigiMediaImage className="item-img" slot="media">
                  {j.logo_url ? (
                    <img src={j.logo_url} alt={j.headline} />
                  ) : (
                    <img src={placeholder} alt="Placeholder image" />
                  )}
                </DigiMediaImage>

                <DigiTypography afVariation={TypographyVariation.SMALL}>
                  <Link to={`/jobs/${j.id}`}>
                    <h3>{j.headline}</h3>
                  </Link>

                  <p>{j.occupation.label}</p>
                  <p>Publiserad {j.publication_date}</p>
                </DigiTypography>
              </DigiLayoutMediaObject>
            </li>
          ))}
        </DigiList>
      </DigiLayoutColumns>
    </DigiLayoutContainer>
  );
};
