import { Link } from "react-router-dom";

const ProfileCard = ({ pokemons }) => {
  return (
    <div className="profile-card">
      {pokemons?.map((pokemon) => {
        return (
          <div key={pokemon.id} className="card-Pokemon">
            {/* <p className="poke-id-back">#{pokemon.id}</p> */}
            <div className="poke-imagen">
              <Link to="/">
                <img src={pokemon.img} alt={pokemon.name} />
              </Link>
            </div>
            <div className="pokeInfo">
              <div className="poke-name">
                <p className="id-pokemon">#{pokemon.id}</p>{" "}
                <h2 className="poke-names">{pokemon.name}</h2>
              </div>
              <div className="poke-tipos">
                {pokemon?.types.map((item) => {
                  return (
                    <p key={pokemon.id} className={item.type.name} id="type">
                      {item.type.name}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProfileCard;
