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
    console.log(pokeData);
  };

  const getPokemon = async (res) => {
    res.map(async (pokemon) => {
      const res = await axios.get(pokemon.url);
      setPokeData((state) => {
        state = [...state, res.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <>
      <div className="container">
        <div className="leftPanel">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
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
