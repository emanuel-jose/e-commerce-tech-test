import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { next, prev } from "../../features/pagination/paginationSlice";
import ChevronLeft from "../../shared/svg/chevron-left";
import ChevronRight from "../../shared/svg/chevron-right";
import { ArrowButton, Container, PagesWrapper } from "./styles";

interface PaginationProps {
  totalElements: number;
  pageSize: number;
}

export function Pagination({ pageSize, totalElements }: PaginationProps) {
  const [totalPages, setTotalPages] = useState(0);
  const currentPage = useAppSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const dispatch = useAppDispatch();

  const calculateTotalPages = () => {
    if (pageSize < 20) {
      return;
    }
    const pages = Math.round(Math.floor(totalElements / pageSize));
    setTotalPages(pages);
  };

  const prevPage = () => {
    if (currentPage === 0) {
      return;
    }

    dispatch(prev(currentPage - 1));
  };

  const nextPage = () => {
    console.log({ totalPages, currentPage: currentPage + 1 });
    if (currentPage >= totalPages) {
      return;
    }
    dispatch(next(currentPage + 1));
  };

  const createPagination = () => {};

  useEffect(() => {
    calculateTotalPages();
  }, []);

  return (
    <Container>
      <ArrowButton onClick={prevPage}>{<ChevronLeft />}</ArrowButton>

      <PagesWrapper></PagesWrapper>

      <ArrowButton onClick={nextPage}>{<ChevronRight />}</ArrowButton>
    </Container>
  );
}
