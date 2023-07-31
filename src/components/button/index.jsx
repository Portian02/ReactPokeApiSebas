import Button from "react-bootstrap/Button";

import "./btn.css";
const Btn = () => {
  return (
    <div>
      <Button variant="warning" className="btn">
        <img className="lupa" src="https://icones.pro/wp-content/uploads/2021/06/icone-loupe-gris.png" alt="" />
      </Button>{" "}
    </div>
  );
};

export default Btn;
