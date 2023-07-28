import Button from "react-bootstrap/Button";

import "./btn.css";
const Btn = () => {
  // const [find, setFind] = useState([]);

  // const searchPokemon = (id) => {
  //   const list = PokedexList;
  //   const finding = list.filter((list) => list == id.name);
  //   console.log(list);
  //   return <p>Name:{finding.name}</p>;
  // };

  return (
    <div>
      <Button variant="warning" className="btn">
        <img
          className="lupa"
          src="https://assets.stickpng.com/thumbs/59cfc4d2d3b1936210a5ddc7.png"
          alt=""
        />
      </Button>{" "}
    </div>
  );
};

export default Btn;
