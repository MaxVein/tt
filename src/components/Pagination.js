import React from "react";
import { Pagination } from "../styles/index";

const PaginationComponent = ({ pages, currentPage, onPageClick }) => {
  return (
    <Pagination>
      <button
        className="previousPageBtn"
        onClick={onPageClick.bind(null, currentPage - 1)}
      >
        Previous
      </button>
      <div className="pages">
        {pages.slice(currentPage - 1, currentPage + 4).map((pageNum, index) => (
          <button
            key={index + pageNum}
            className={`pageBtn ${currentPage === pageNum ? "active" : ""}`}
            onClick={onPageClick.bind(null, pageNum)}
          >
            {pageNum}
          </button>
        ))}
      </div>
      <button
        className="nextPageBtn"
        onClick={onPageClick.bind(null, currentPage + 1)}
      >
        Next
      </button>
    </Pagination>
  );
};

export default React.memo(PaginationComponent);
