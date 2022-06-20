import React from "react";
import './App.css';
import List from "./TODO/todoList";
import { Add } from "./TODO/todoListSlice";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

const App = () => {

    const data = useSelector((state) => state.todo);
    const dispatch = useDispatch();
    const [input, setInput] = React.useState("");

    const newObj = {
        id: uuidv4(),
        title: input,
    }

    const SubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(Add(newObj));  // Add action creator
    }

    return (
        <section className='section-center'>
            <form className='grocery-form' onSubmit={SubmitHandler}>
                <h3>grocery bud</h3>
                <div className='form-control'>
                    <input type='text' 
                        className='grocery' 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder='e.g. fruits'>
                    </input>
                    <button className="submit-btn" type="submit">
                        submit
                    </button>
                </div>
            </form>
            <section className='grocery-container'>
                <div className='grocery-list'>
                    {data.length>0
                        &&
                        data.map((item)=>{
                           return <List key={item.id} {...item}/>
                        })
                    }
                </div>
            </section>
        </section>
    )
}

export default App;