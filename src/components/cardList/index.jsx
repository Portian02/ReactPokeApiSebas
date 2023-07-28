

const ProfileCard = ({ pokemons }) => {
  const { name,
    id,
    sprites,
    // weight,
    // heigth,
    types,
    // hp,
    // attack,
    // defense,
    // speed,
    // specialAttack,
    // specialDefense,
  } = pokemons;

  return (
    <div className="profile-card">
      <ul>
        <li>
          {" "}
          <img
            src={sprites.other["official-artwork"].front_default}
            alt="Profile"
            className=" profile-picture"
          />
          <div className="profile-details">
            <h2>{name}</h2>
            <p>Type: {types.map((type) => {
                    return (
                      <p key={id} className={type.type.name} id="type">
                        {type.type.name}
                      </p>
                    );
                  })}</p>
            {/* <p>Weight:{weight}kg</p>
            <p>Height:{heigth}cm</p>
            <h3>Stats</h3>
            <p>Hp:{hp}</p>
            <p>Speed:{speed}</p>
            <p>Attack:{attack}</p>
            <p>Defense:{defense}</p>
            <p>Special Attack:{specialAttack}</p>
            <p>Special Defense:{specialDefense}</p> */}
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ProfileCard;
