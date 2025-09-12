import { DigiHeader, DigiHeaderNavigation, DigiHeaderNavigationItem, DigiLayoutBlock, DigiLayoutContainer, DigiMediaImage } from "@digi/arbetsformedlingen-react";
import "./Navbar.css";
import { LayoutBlockVariation, LayoutContainerVariation } from "@digi/arbetsformedlingen";
import { useLocation } from "react-router";

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
                afSrc="src/assets/logo3.png"
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
                <a href="/">Hem</a>
              </DigiHeaderNavigationItem>

              <DigiHeaderNavigationItem afCurrentPage={location.pathname === "/jobs"}>
                <a href="/jobs">Jobbannonser</a>
              </DigiHeaderNavigationItem>

            </DigiHeaderNavigation>
          </div>
        </DigiHeader>
      </DigiLayoutContainer>
    </DigiLayoutBlock>
      
  );
};
