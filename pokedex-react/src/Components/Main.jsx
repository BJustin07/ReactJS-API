import React from 'react';
import Pokeinfo from './Pokeinfo';
import Card from './Card';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextPageUrl(res.data.next);
    setPrevPageUrl(res.data.prev);
    getPokemon(res.data.results);
    setLoading(false);
  };

  //Previous implementation is this:
  //Issue with this is that it duplicates API data/ID {0,0,1,1,2,2,3,3,4,4,5,5}

  // const getPokemon = async (res) => {
  //     res.map(async (pokemon) => {
  //       const result = await axios.get(pokemon.url);
  //       setPokeData((state) => {
  //         state = [...state, result.data];
  //         state.sort((a, b) => (a.id > b.id ? 1 : -1));
  //         return state;
  //       });
  //     });
  //   };

  // I dont fully understand why Promise.all is needed this is chat-gpt generated
  // what I know is that await already does the waiting for the promise but according to chat gpt
  // What Promise.all do is : Promise.all(): This waits for all the asynchronous operations (fetching Pokémon data) to
  // complete before proceeding. It returns a promise that resolves when all the promises in the array have resolved.

  const getPokemon = async (res) => {
    const allPokemons = [];

    await Promise.all(
      res.map(async (pokemon) => {
        const result = await axios.get(pokemon.url);
        allPokemons.push(result.data);
      }),
    );
    //also this sort parameter is chat-gpt generated and I dont fully understand how this works
    allPokemons.sort((a, b) => a.id - b.id);
    setPokeData(allPokemons);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="leftPanel">
          <Card pokemon={pokeData} loading={loading} />
          <div className="navButton">
            <button>Last Page</button>
            <button>Next Page</button>
          </div>
        </div>
        <div className="rightPanel">
          <Pokeinfo />
        </div>
      </div>
    </>
  );
};

export default Main;
