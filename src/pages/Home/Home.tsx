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
import { JobSearch } from "../../components/search/JobSearch";
import { useJobSearch } from "../../hooks/useJobSearch";

export const Home = () => {
  const { searchJobs } = useJobSearch();

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
