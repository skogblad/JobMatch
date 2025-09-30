import { FooterCardVariation, FooterVariation } from "@digi/arbetsformedlingen";
import logo from "../../assets/logo3.png";
import {
  DigiFooter,
  DigiFooterCard,
  DigiIconHome,
  DigiIconJobSuggestion,
  DigiMediaImage,
} from "@digi/arbetsformedlingen-react";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <>
      <DigiFooter afVariation={FooterVariation.SMALL}>
        <div slot="content-top">
          <div>
            <DigiFooterCard afType={FooterCardVariation.ICON}>
              <ul>
                <li>
                  <Link to="/">
                    <DigiIconHome></DigiIconHome>
                    Hem
                  </Link>
                </li>
                <li>
                  <Link to="/jobs">
                    <DigiIconJobSuggestion></DigiIconJobSuggestion>
                    Jobbannonser
                  </Link>
                </li>
              </ul>
            </DigiFooterCard>
          </div>
        </div>
        <div slot="content-bottom-left">
          <Link to="/">
            <DigiMediaImage
              afUnlazy
              className="logo-img"
              afHeight="100"
              afWidth="100"
              afSrc={logo}
              afAlt="Page logo image"
            />
          </Link>
        </div>
        <div slot="content-bottom-right">
          <p>Följ oss på</p>
          <a href="#">Facebook</a>
          <a href="#">Youtube</a>
          <a href="#">Linkedin</a>
        </div>
      </DigiFooter>
    </>
  );
};
