import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";
import type { DigiNavigationPagination as DigiNavigationPaginationType } from "@digi/arbetsformedlingen/components/digi-navigation-pagination";

export const Pagination = ({ total }: { total: number }) => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page") || "1", 10) || 1;

  const paginationRef = useRef<DigiNavigationPaginationType>(null);
  const navigate = useNavigate();

  const handlePageChange = (event: CustomEvent<number>) => {
    const newPage = event.detail;
    navigate(`?search=${searchText}&page=${newPage}`);
  };

  return (
    <>
      <DigiNavigationPagination
        afTotalPages={44}
        afInitActivePage={page}
        afTotalResults={total}
        afResultName="annonser"
        onAfOnPageChange={handlePageChange}
        ref={paginationRef}
      />
    </>
  );
};
