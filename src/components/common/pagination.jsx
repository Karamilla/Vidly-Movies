import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = (props) => {
  const { pageSize, itemsCount, onPageChange, currentPage } = props;
  console.log(currentPage);

  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <div>
      <div className=" d-flex justify-content-center">
        <ul className="pagination ">
          <li className="page-item">
            <a className="page-link">Previous</a>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active " : "page-item"
              }
            >
              <a className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link">Next</a>
          </li>
        </ul>
      </div>
      ;
    </div>
  );

  Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    itemsCount: PropTypes.number.isRequired,
    onPageChange: PropTypes.number.isRequired,
    currentPage: PropTypes.func.isRequired,
  };
};

export default Pagination;
