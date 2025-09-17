import {
  ButtonSize,
  ButtonType,
  ButtonVariation,
  TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
  DigiButton,
  DigiLayoutContainer,
  DigiList,
  DigiTypography,
} from "@digi/arbetsformedlingen-react";
import { useNavigate } from "react-router";

export const NoJobsFound = () => {
  const navigate = useNavigate();

  return (
    <DigiLayoutContainer afVerticalPadding>
      <DigiTypography afVariation={TypographyVariation.SMALL}>
        <h2>0 annonser</h2>
        <h3>Tips för att förbättra din sökning</h3>
        <DigiList>
          <li>Kontrollera din stavnig</li>
          <li>Byt ut eller ta bort ett sökord</li>
        </DigiList>
      </DigiTypography>

      <DigiButton
        afSize={ButtonSize.MEDIUM}
        afVariation={ButtonVariation.FUNCTION}
        afFullWidth={false}
        afAriaLabel="Rensa sökning"
        afType={ButtonType.RESET}
        onAfOnClick={() => navigate("/jobs")}
      >
        Rensa sökning
      </DigiButton>
    </DigiLayoutContainer>
  );
};
