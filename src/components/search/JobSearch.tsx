import {
  ButtonType,
  FormInputSearchVariation,
  FormInputType,
} from "@digi/arbetsformedlingen";
import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { useEffect, useState } from "react";
import { getJobCompletion } from "../../services/JobService";
import "./jobsearch.css";

type JobSearchProps = {
  search: (searchText: string) => void;
};

export const JobSearch = ({ search }: JobSearchProps) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = () => {
    console.log("handleSubmit called, searchText:", searchText);
    if (!searchText || searchText.trim() === "") return;
    search(searchText.trim());
  };

  const handleChange = (e: CustomEvent) => {
    const input = e.detail.target as HTMLInputElement;
    const val = input.value ?? "";
    console.log("input ändrad:", val);
    setSearchText(val);
  };

  const handleCompletion = async (query: string) => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }

    const completions = await getJobCompletion(query, 5);
    setSuggestions(completions.map((c) => c.found_phrase || c.value));
  };

  useEffect(() => {
    handleCompletion(searchText);
  }, [searchText]);

  return (
    <div style={{ position: "relative" }}>
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
        onAfOnInput={(e: CustomEvent) => {
          const input = e.detail.target as HTMLInputElement;
          const value = input.value ?? "";
          setSearchText(value);
          handleCompletion(value);
        }}
      />
      {suggestions.length > 0 && (
        <ul role="listbox" className="suggestions">
          {suggestions.map((s, i) => (
            <li
              key={i}
              role="option"
              className="suggestion"
              onClick={() => {
                setSearchText(s);
                search(s);
                setSuggestions([]);
              }}
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
