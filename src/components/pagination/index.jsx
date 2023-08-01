import React from "react";
import "./pag.css";

const Pagination = ({ page, total, backBtn, nextBtn }) => {
  return (
    <div>
      <center>
        <div className="btns">
          <button className="back" onClick={backBtn}>
            Back
          </button>
          <p>
            {page + 1} de {total}
          </p>
          <button className="next" onClick={nextBtn}>
            Next
          </button>
        </div>
      </center>
    </div>
  );
};

export default Pagination;
