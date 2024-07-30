import React from "react";

const Pokeinfo = () => {
    return(
        <>
            <div className="pokeStats">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt=""/>
                <h1>Bulbasaur</h1>
                <div className="abilities">
                    <h2>Vine Wrap</h2>
                    <h2>Tackle</h2>
                </div>
                <div className="stats">
                    <h2>HP: 123</h2>
                    <h2>ATK: 123</h2>
                </div>
            </div>
        </>
    );

}

export default Pokeinfo;