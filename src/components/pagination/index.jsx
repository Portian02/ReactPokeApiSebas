import React from "react";
import "./pag.css";

const Pagination = ({ page, total, backBtn, nextBtn }) => {
  return (
    <div>
      <center>
        <div className="btns">
          <button className="back" onClick={backBtn}>
            ↩
          </button>
          <h3>
            {page + 1} de {total}
          </h3>
          <button className="next" onClick={nextBtn}>
            ↪
          </button>
        </div>
      </center>
    </div>
  );
};

export default Pagination;
