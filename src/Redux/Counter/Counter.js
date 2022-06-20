import { createContext, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './CounterSlice';

const Counter = () =>{
    const colorValue = useState("white");

    const count = useSelector(state => state.counter.counter);
    const color = useSelector(state => state.theme.color);
    const dispatch = useDispatch();
    const style = {
        color: colorValue
    };
    return(
            <div>
                <button onClick={()=>dispatch(increment())}>ADD ME</button>
                <h1 style={{color:color}}>Counter: {count}</h1>
                <button onClick={()=>dispatch(decrement())}>SUBTARCT ME</button>
            </div>
    )
}

export default Counter;