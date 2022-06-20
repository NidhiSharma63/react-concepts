import { useSelector } from "react-redux";


const Coin = () =>{
    const count = useSelector(state => state.counter.counter);
    return (
        <div>
            <h1>Coin:{count}</h1>
        </div>  
    )
};

export default Coin;