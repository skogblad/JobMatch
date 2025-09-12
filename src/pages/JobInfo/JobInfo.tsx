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
import { useParams } from "react-router";
import type { IJob } from "../../models/IJob";
import { getJobById } from "../../services/JobService";
import "./JobInfo.css";

export const JobInfo = () => {
  const { id } = useParams<{ id: string }>();
  const [job, setJob] = useState<IJob>();

  useEffect(() => {
    const fetchJob = async () => {
      if (!id) return;
      const data = await getJobById(id);
      setJob(data);
    };

    fetchJob();
  }, [id]);

  console.log("Job:", job);
  console.log("Description:", job?.description);
  console.log("Needs:", job?.description.needs);

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
        <DigiLinkInternal afHref="/jobs">Tillbaka</DigiLinkInternal>
        <h2>{job?.occupation.label}</h2>

        <div className="job-ad">
          <div className="content-column">
            <DigiLayoutContainer>
              <img src={job?.logo_url} alt={job?.employer?.name} />
              <h3>{job?.headline}</h3>
              <h4>{job?.employer?.name}</h4>
              <p>
                Plats: {job?.workplace_address?.municipality} i{" "}
                {job?.workplace_address?.region}
              </p>
              <p>Anställningsform: {job?.description.conditions}</p>
              <p>Lönetyp: {job?.salary_type.label}</p>
            </DigiLayoutContainer>

            <DigiLayoutContainer>
              <p style={{ whiteSpace: "pre-line" }}>{job?.description.text}</p>
            </DigiLayoutContainer>


            <DigiLayoutContainer>
              <p>
                <strong>Kontakt: </strong>
                {job?.application_contacts[0]?.description}
              </p>
              <p>{job?.application_contacts[0]?.email}</p>
            </DigiLayoutContainer>
            
            <DigiLayoutContainer>
              <p>Annons-Id: {job?.id}</p>
              <p>Publicerad: {formattedPublishDate}</p>
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
