import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { add1, sub1 ,add2, div, mult, sub2} from './Action/action2';
import { useState } from 'react';


function App() {
  const dispatch = useDispatch();
  const  count  = useSelector((state)=> state.count);
  

  const [x, setx] = useState(Number(1))

   console.log(typeof(x))

  return (
    <div className="App">
      <header className="App-header">

        <h2>Mini Calculator</h2>
        <div className='box'>

<div className='left'>

      <h1>Value : {count}</h1>
      
      <br />
      <p>Enter value</p>
      <input type="number" placeholder='Enter X value' onChange={(e)=> setx(+e.target.value)} />
      <br />

</div>

      <div className='divs'>
        <div className='2btn'>

      <button onClick={()=> dispatch (add1()) }>Increment</button>
      <button onClick={()=> dispatch (sub1())}>Decrement</button>
        </div>
        <div className='4btn'>

      <button onClick={()=> dispatch (add2(x)) }>Add</button>
      <button onClick={()=> dispatch (sub2(x))}>Sub</button>
      <button onClick={()=> dispatch (mult(x)) }>Mult</button>
      <button onClick={()=> dispatch (div(x))}>Div</button>
        </div>
      </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
