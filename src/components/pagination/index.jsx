import React from "react";
import "./pag.css";

const Pagination = () => {
  return (
    <div>
      <center>
        <div className="btns">
          <button className="back">Back</button>
          <p> 1 de 65</p>
          <button className="next">Next</button>
        </div>
      </center>
    </div>
  );
};

export default Pagination;
