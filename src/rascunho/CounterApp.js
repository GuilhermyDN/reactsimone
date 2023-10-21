import{ useEffect, useState} from 'react';

function CounterApp() {
  
  const [count,setCount] = useState(JSON.parse(localStorage.getItem('contagem')) || 0); // o const use State sempre vem antes 
  const [text,setText] = useState(localStorage.getItem('text'));
  const [num,setNum] = useState(0);

  useEffect(() => {
    console.log('useEffect');
    localStorage.setItem('contagem',count)
  },[count])

  useEffect(() => {
    console.log('useEffectText');
    localStorage.setItem('text',text)
  },[text])

  const hello = () => {
    console.log('hello');
  }
  const add = (a,b)=> {
    return(a + b)
  }

  return (
    <div className="App">
      <h1> TWIST</h1>
      <h3> o valor de {text} é {count}</h3>
      <input value={num} onChange ={(e) => setNum(e.target.value)}/>
      <button onClick={()=> setCount(count+(+num))}> + </button>
      <button onClick={()=> setCount(count-(+num))}> - </button>
      <button onClick={()=> setCount(0)}> reset </button>
      <input value={text} onChange ={(e) => setText(e.target.value)}/>
    </div>
  );
}


export default CounterApp;
