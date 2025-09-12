import "./JobList.css";
import placeholder from "../../assets/placeholder.svg";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { getJobs } from "../../services/JobService";
import type { IJob } from "../../models/IJob";

import {
  DigiLayoutContainer,
  DigiLayoutMediaObject,
  DigiLink,
  DigiList,
  DigiMediaImage,
  DigiNavigationPagination,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";

import {
  LayoutMediaObjectAlignment,
  TypographyVariation,
} from "@digi/arbetsformedlingen";

export const JobList = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [total, setTotal] = useState(0);
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";
  const limit = 10;

  let page = parseInt(searchParams.get("page") || "1", 10);
  if (isNaN(page) || page < 1) page = 1;

  useEffect(() => {
    const getData = async () => {
      const res = await getJobs(searchText, limit, page);
      setJobs(res.hits);
      setTotal(res.total);

      console.log(res.total); //????? varför är det inte ett NUMMER??
    };

    getData();
  }, [searchText, page]);

  const navigate = useNavigate();
  const handlePageChange = (event: CustomEvent<number>) => {
    const newPage = event.detail;
    navigate(`?search=${searchText}&page=${newPage}`);
  };

  return (
    <DigiLayoutContainer className="page-container">
      <DigiList className="job-list">
        {jobs.map((j) => (
          <li key={j.id}>
            <DigiLayoutMediaObject
              className="job-list-item"
              afAlignment={LayoutMediaObjectAlignment.CENTER}
            >
              <DigiMediaImage
                afUnlazy
                slot="media"
                className="item-img"
                afHeight="80"
                afWidth="80"
                afSrc={j.logo_url ? j.logo_url : placeholder}
                afAlt={j.logo_url ? j.employer?.name : "Placeholder image"}
              />
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

      <DigiNavigationPagination
        afTotalPages={10} //TODO: APIet retunerar ett objekt, inte ett rent nummer wth {value: 1234}
        afInitActive-page={1}
        afCurrentResultStart={1}
        afCurrentResultEnd={1}
        afTotalResults={total}
        afResultName="annonser"
        onAfOnPageChange={handlePageChange}
      />
    </DigiLayoutContainer>
  );
};
