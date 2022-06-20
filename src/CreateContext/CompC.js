import React, { useContext } from "react";
import {objContex} from './App';


export default function CompC(){
    const obj = useContext(objContex);
    return(
        <div>
            <h1>CompC</h1><p>{obj.name}</p>
        </div>
    )
}
