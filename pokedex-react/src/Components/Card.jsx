import React from 'react';

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading
        ? 'Loading...'
        : pokemon.map((item) => {
            return (
              <>
                <div
                  className="pokeCard"
                  key={item.id}
                  onClick={() => infoPokemon(item)}
                >
                  <h2>{item.id}</h2>
                  <img src={item.sprites.front_default} alt="" />
                  <h2>{item.name}</h2>
                </div>
              </>
            );
          })}
    </>
  );
};

export default Card;
