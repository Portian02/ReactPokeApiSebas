const Pokemon = ({ name, types, image }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={`${name}sprite`} />
      <div className="poke-tipos">
        {types?.types.map((item) => {
          return (
            <p key={pokemon.id} className={item.type.name} id="type">
              {item.type.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Pokemon;
