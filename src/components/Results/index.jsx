import "./result.css";
const PokemonFound = ({ name, types, image, id, weight, height }) => {
  const reload = () => {
    window.location.reload(false);
  };
  return (
    <div className="card">
      <button onClick={reload}>
        <h1 className="text-btn">X</h1>{" "}
      </button>

      <div className="info">
        <img src={image} alt={`${name} sprites`} />
        <p>{id}</p>
        <h2>{name}</h2>
        <p>{types}</p>
        <div className="pokeInfo">
          <p>{weight / 10}kg</p>
          <p>{height * 10}cm</p>
        </div>
        <div className="stats"></div>
      </div>
    </div>
  );
};

export default PokemonFound;
