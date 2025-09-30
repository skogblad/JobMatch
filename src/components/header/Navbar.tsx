import { DigiHeader, DigiHeaderNavigation, DigiHeaderNavigationItem, DigiLayoutBlock, DigiLayoutContainer, DigiMediaImage } from "@digi/arbetsformedlingen-react";
import "./Navbar.css";
import { LayoutBlockVariation, LayoutContainerVariation } from "@digi/arbetsformedlingen";
import { Link, useLocation } from "react-router";
import logo from "../../assets/logo_green.png"

export const Navbar = () => {
  const location = useLocation();

  return (
    <DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY}>
      <DigiLayoutContainer afVariation={LayoutContainerVariation.NONE}>
        <DigiHeader
          afSystemName="JobMatch"
          afHideSystemName={true}
          afMenuButtonText="Meny"
          className="custom-header"
        >
          <a slot="header-logo" aria-label="JobMatch startsida" href="/">
              <DigiMediaImage
                afUnlazy
                afHeight="60"
                afWidth="60"
                afSrc={logo}
                afAlt="JobMatch logotyp"
              />
          </a>
            
          <div slot="header-content" className="nav-links">
            <DigiHeaderNavigation
              afCloseButtonText="Stäng"
              afCloseButtonAriaLabel="Stäng meny"
              afNavAriaLabel="Huvudmeny"
            >

              <DigiHeaderNavigationItem afCurrentPage={location.pathname === "/"} className="nav-item">
                <Link to="/">Hem</Link>
              </DigiHeaderNavigationItem>

              <DigiHeaderNavigationItem afCurrentPage={location.pathname === "/jobs"}>
                <Link to="/jobs">Jobbannonser</Link>
              </DigiHeaderNavigationItem>

            </DigiHeaderNavigation>
          </div>
        </DigiHeader>
      </DigiLayoutContainer>
    </DigiLayoutBlock>
      
  );
};
