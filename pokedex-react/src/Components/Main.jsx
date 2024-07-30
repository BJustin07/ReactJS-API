import React from "react";
import Pokeinfo from "./Pokeinfo";
import Card from "./Card";
const Main =() =>{
    return(
        <>
            <div className="container">
                <div className="leftPanel">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className="navButton">
                        <button>Last Page</button>
                        <button>Next Page</button>
                    </div>
                </div>
                <div className="rightPanel">
                    <Pokeinfo/>
                </div>
            </div>
        </>
    );
}

export default Main;