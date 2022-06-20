import React, { useState,useEffect } from "react";


// here evey time state change it will re-render the App and it will 
// console.log('nidhi') each time
export  function App1() {
    const [value,setValue] = useState(console.log('nidhi'))
    return (
        <div>
        <h1>{value}</h1>
        <button onClick={()=>{
            setValue(Math.random())
        }}>Change value</button>
        </div>
    );
}

 

// ********---but In LAZY STATE it will not print the value of useState each time---******* 
export function App2() {
    const [value,setValue] = useState(()=>3)
    return (
        <div>
        <h1>{value}</h1>
        <button onClick={()=>{
            setValue(Math.random())
        }}>Change value</button>
        </div>
    );
}


// *********** change each state on click on each h1 tag *************
export  function App3() {
    const [value,setValue] = useState({
            counter:1,
            counter2:2
        })
    return (
        <div>
        <h1
        onClick={()=>{
            setValue((prev)=>{
                return{
                    ...prev,
                    counter:prev.counter+1
                }
            })

        }}>{value.counter}</h1>
        <h1 
        onClick={()=>{
            setValue((prev)=>{
                return{
                    ...prev,
                    counter2:prev.counter2+1
                }
            })

        }}>{value.counter2}</h1>
        </div>
    );
}

// *********** USEEFFECT *************

export  function App4() {
    const [value,setValue] = useState(1);
    useEffect(()=>{
        console.log('changes made');

        return()=>{
            // it will clearn the previuous memory
            console.log('previous changes cleared');
        }

    },[value]);
    return (
        <div>
        <h1>{value}</h1>
        <button onClick={()=>{
            setValue((prev)=>{
               return prev+1
            })
        }}>Change value</button>
        </div>
    );
}
