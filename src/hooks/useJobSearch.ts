import { useNavigate } from "react-router";
import { getJobs } from "../services/JobService";

export const useJobSearch = () => {
  const navigate = useNavigate();

  const searchJobs = async (text: string) => {
    const searchResult = await getJobs(text); //Kolla att API:t svarar

    if (!searchResult.hits || searchResult.hits.length === 0) {
      navigate("/no-jobs-found");
      return;
    }

    navigate(`/jobs?search=${encodeURIComponent(text)}&page=1`);
  };

  return { searchJobs };
};
