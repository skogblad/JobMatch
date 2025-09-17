import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getJobs } from "../../services/JobService";
import type { IJob } from "../../models/IJob";
import placeholder from "../../assets/placeholder.svg";
import { formatDate } from "../../helpers/dateHelper";

import {
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
import { Pagination } from "./Pagination";

export const ListContent = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [total, setTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10) || 1;
  const limit = 10;

  useEffect(() => {
    const getData = async () => {
      const res = await getJobs(searchText, limit, page);
      setJobs(res.hits);
      setTotal(res.total.value);
    };

    getData();
  }, [searchText, page, limit]);

  return (
    <>
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
                <DigiLink
                  afHref={`/jobs/${j.id}?search=${encodeURIComponent(
                    searchText
                  )}`}
                >
                  <h3>{j.headline}</h3>
                </DigiLink>
                <p>{j.occupation.label}</p>
                <p>
                  Publicerad {formatDate(j.publication_date) ?? "Datum saknas"}
                </p>
              </DigiTypography>
            </DigiLayoutMediaObject>
          </li>
        ))}
      </DigiList>

      <Pagination
        total={total}
        limit={limit}
        page={page}
        onPageChange={(newPage) => {
          const params = new URLSearchParams(searchParams);
          params.set("page", newPage.toString());
          setSearchParams(params);
        }}
      />
    </>
  );
};
