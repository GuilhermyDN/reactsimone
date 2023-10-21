import{ useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../CounterSlice';

function App() {
    const dispatch = useDispatch()
    const aux = useSelector((state) => state)
    console.log(aux);
    const cont = useSelector((state) => state.counter.value);
    const [text,setText] = useState(localStorage.getItem('text'));
    const [num,setNum] = useState(0);

    return (
    <div className="App">
        <h1> TWIST</h1>
        <h3> o valor de {text} é {cont}</h3>
        <input value={num} onChange ={(e) => setNum(e.target.value)}/>
        <button onClick={() => dispatch(incrementByAmount(num))}> + </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(reset())}> reset </button>
        <input value={text} onChange ={(e) => setText(e.target.value)}/>
    </div>
    );
    }


export default App;