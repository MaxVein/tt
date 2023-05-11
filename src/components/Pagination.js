import React from "react";
import { Pagination } from "../styles/index";

const PaginationComponent = ({ pages, currentPage, onPageClick }) => {
  const start = currentPage - 5;
  const end = currentPage + 4;
  const shownPages = pages.slice(
    start < 0 ? 0 : start,
    end > pages.length ? pages.length : end
  );

  return (
    <Pagination>
      <button
        disabled={currentPage === 1}
        className="previousPageBtn"
        onClick={() => onPageClick(currentPage - 1)}
      >
        Previous
      </button>
      <div className="pages">
        {shownPages.map((pageNum, index) => (
          <button
            key={index + pageNum}
            className={`pageBtn ${currentPage === pageNum ? "active" : ""}`}
            onClick={() => onPageClick(pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
      <button
        className="nextPageBtn"
        onClick={() => onPageClick(currentPage + 1)}
      >
        Next
      </button>
    </Pagination>
  );
};

export default React.memo(PaginationComponent);
