import {
  InfoCardBorderPosition,
  InfoCardHeadingLevel,
  InfoCardType,
  InfoCardVariation,
  LayoutBlockVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiInfoCard,
  DigiLayoutBlock,
  DigiLayoutContainer,
  DigiLinkInternal,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import type { IJob } from "../../models/IJob";
import { getJobById } from "../../services/JobService";
import "./JobInfo.css";

const NO_INFO_TEXT: string = "Information saknas";

export const JobInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<IJob>();
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";

  useEffect(() => {
    const fetchJob = async () => {
      if (!id) return;
      const data = await getJobById(id);
      setJob(data);
    };

    fetchJob();
  }, [id]);


  const formattedDeadline = job?.application_deadline
    ? new Date(job.application_deadline).toLocaleDateString("sv-SE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  const formattedPublishDate = job?.publication_date
    ? new Date(job.publication_date).toLocaleDateString("sv-SE", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <DigiTypography afVariation={TypographyVariation.SMALL}>
      <DigiLayoutBlock
        afVariation={LayoutBlockVariation.PRIMARY}
        style={{ display: "flex" }}
      >
        <DigiLinkInternal
          afHref={`/jobs?search=${encodeURIComponent(searchText)}`}
        >
          Tillbaka
        </DigiLinkInternal>
        <h2>{job?.occupation.label}</h2>

        <div className="job-ad">
          <div className="content-column">
            <DigiLayoutContainer>
              <img src={job?.logo_url} alt={job?.employer?.name} />
              <h3>{job?.headline}</h3>
              <h4>{job?.employer?.name}</h4>
              
              <p>
                <strong>Plats:</strong> {job?.workplace_address?.municipality && job?.workplace_address?.region ? `${job?.workplace_address?.municipality} i
                ${job?.workplace_address?.region}` : NO_INFO_TEXT}
              </p>
              
              <p>
                <strong>Anställningsform:</strong> {job?.description.conditions ?? NO_INFO_TEXT}
              </p>
              
              <p>
                <strong>Lönetyp:</strong> {job?.salary_type.label ?? NO_INFO_TEXT}
              </p>
            </DigiLayoutContainer>

            <div className="job-description">
              <DigiLayoutContainer>
                <h4>Om tjänsten</h4>
                <p style={{ whiteSpace: "pre-line" }}>
                  {job?.description.text}
                </p>
              </DigiLayoutContainer>
            </div>

            {job?.application_contacts?.[0]?.description && (
              <div className="contact">
                <DigiLayoutContainer>
                  <p>
                    <strong>Kontakt: </strong>
                    {job.application_contacts[0].description}
                  </p>
                  {job.application_contacts[0].email && (
                    <p>{job.application_contacts[0].email}</p>
                  )}
                </DigiLayoutContainer>
              </div>
            )}

            <DigiLayoutContainer>
              <div className="id-published">
                <p><strong>Annons-Id:</strong> {job?.id}</p>
                <p><strong>Publicerad:</strong> {formattedPublishDate}</p>
              </div>
            </DigiLayoutContainer>
          </div>

          <div className="info-card-column">
            <DigiInfoCard
              afHeading="Sök jobbet"
              afHeadingLevel={InfoCardHeadingLevel.H2}
              afType={InfoCardType.RELATED}
              afLinkHref={job?.application_details.url}
              afLinkText="Ansök här"
              afVariation={InfoCardVariation.PRIMARY}
              afBorderPosition={InfoCardBorderPosition.LEFT}
            >
              <p>
                Ansök senast <strong>{formattedDeadline}</strong>
              </p>
              {job?.application_details.reference && (
                <p>
                  Ange referens{" "}
                  <strong>{job.application_details.reference}</strong> i din
                  ansökan
                </p>
              )}
            </DigiInfoCard>
          </div>
        </div>
      </DigiLayoutBlock>
    </DigiTypography>
  );
};
