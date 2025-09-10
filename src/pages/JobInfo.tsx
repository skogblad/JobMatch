import { InfoCardBorderPosition, InfoCardHeadingLevel, InfoCardType, InfoCardVariation, LayoutBlockVariation } from "@digi/arbetsformedlingen"
import { DigiInfoCard, DigiLayoutBlock, DigiLayoutContainer } from "@digi/arbetsformedlingen-react"
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { IJob } from "../models/IJob";
import { getJobById } from "../services/JobService";

export const JobInfo = () => {

    const { id } = useParams<{ id: string }>();
    const [ job, setJob ] = useState<IJob>(); 

      useEffect(() => {
        const fetchJob = async () => {
            if(!id) return; 
          const data = await getJobById(id);
          setJob(data);
        };
    
        fetchJob();
    
    }, [id]);

      console.log("Job:", job);
  console.log("Description:", job?.description);

  const formattedDeadline = job?.application_deadline
  ? new Date(job.application_deadline).toLocaleDateString("sv-SE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  : null;

    return (
        <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
            <DigiLayoutContainer>
                <h2>{job?.headline}</h2>
                <img src={job?.logo_url} alt={job?.employer?.name} />

            </DigiLayoutContainer>

            <DigiLayoutContainer>
                <p>Kvalifikationer</p>
                {/* <p>{job?.description}</p> */}
                <p>Det här är jobb {id}</p>
            </DigiLayoutContainer>

            <DigiLayoutContainer>
                <p>{job?.description[0]?.text}</p>
            </DigiLayoutContainer>

            <DigiInfoCard 
            afHeading="Sök jobbet"
            afHeadingLevel={InfoCardHeadingLevel.H2}
            afType={InfoCardType.RELATED}
            afLinkHref="Företagets webbplats"
            afLinkText="Ansök här"	
            afVariation={InfoCardVariation.PRIMARY}
            afBorderPosition={InfoCardBorderPosition.LEFT}
            >
                <p>Ansök senast <strong>{formattedDeadline}</strong></p>

            </DigiInfoCard>
            


        </DigiLayoutBlock>
    )
}