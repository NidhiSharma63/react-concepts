import React, { createContext } from 'react';
import CompA from './CompA';


const objContex = createContext();

let obj1={
  name:'passed to CompC'
}

function App() {

  return (
    <main>
      <div className='container'>
        <objContex.Provider value={obj1}>
          <CompA/>
        </objContex.Provider>
      </div>
    </main>
  );
}

export default App;
export {objContex}
