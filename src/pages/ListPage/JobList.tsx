import "./JobList.css";
import { DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { JobSearch } from "../../components/search/JobSearch";
import { ListContent } from "../../components/list/ListContent";
import { useJobSearch } from "../../hooks/useJobSearch";

export const JobList = () => {
  const { searchJobs } = useJobSearch();

  return (
    <DigiLayoutContainer className="page-container">
      <JobSearch search={searchJobs} />
      <ListContent />
    </DigiLayoutContainer>
  );
};
