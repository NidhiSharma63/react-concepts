import React, { useState,useContext } from "react";
import { useSelector } from "react-redux";
import Counter from "../Counter/Counter";
import Coin from "../Coin/Coin";
import Theme from "./theme";

const App = () => {
    
    return (
     <>
        <Counter/>
        <Coin/>
        <Theme/>
     </>
    );
}

export default App;