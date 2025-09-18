import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";

type PaginationProps = {
  total: number | { value: number };
  limit: number;
  page: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  total,
  limit,
  page,
  onPageChange,
}: PaginationProps) => {
  const totalValue = typeof total === "object" ? total.value : total;
  const totalPages = Math.ceil(totalValue / limit);

  const handlePageChange = (event: CustomEvent<number>) => {
    onPageChange(event.detail);
  };

  return (
    <>
      <DigiNavigationPagination
        afTotalPages={totalPages}
        afInitActivePage={page}
        afTotalResults={totalValue}
        afCurrentResultStart={(page - 1) * limit + 1}
        afCurrentResultEnd={Math.min(page * limit, totalValue)}
        afResultName="annonser"
        onAfOnPageChange={handlePageChange}
      />
    </>
  );
};
