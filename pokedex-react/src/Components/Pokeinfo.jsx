import React from 'react';

const Pokeinfo = ({ stats }) => {
  return (
    <>
      {!stats ? (
        ''
      ) : (
        <>
          <h1>{stats.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${stats.id}.svg`}
            alt=""
          />
          <div className="abilities">
            {stats.abilities.map((poke) => {
              console.log(poke);
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {stats.stats.map((poke) => {
              console.log(poke);
              return (
                <>
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
