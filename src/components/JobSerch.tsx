import { ButtonType, FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useState } from "react";

type JobSearchProps = {
  search: (searchText: string) => void;
}

export const JobSearch = ({ search }: JobSearchProps) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = () => {
    console.log("handleSubmit called, searchText:", searchText);
    if(!searchText || searchText.trim() === "") return;
    search(searchText.trim());
  }

  const handleChange = (e: CustomEvent) => {
    const input = e.detail.target as HTMLInputElement;
    const val = input.value ?? "";
    console.log("input ändrad:", val)
    setSearchText(val);
  }

  return (
    <>
      <DigiFormInputSearch
        afLabel="Sök på ett eller flera ord"
        afVariation={FormInputSearchVariation.LARGE}
        afType={FormInputType.SEARCH}
        afLabelDescription="Skriv t.ex. målare Malmö"
        afButtonText="Sök"
        afButtonType={ButtonType.SUBMIT}
        afValue={searchText}
        onAfOnChange={handleChange}
        onAfOnSubmitSearch={handleSubmit}
      />
    </>
  )
}
