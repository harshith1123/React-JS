import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { increment, decrement } from './reduxToolkit/counterSlice';

function App() {
  const myState = useSelector((state)=> state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <label htmlFor="">Enter Count:</label>
      <input type="number" name="" id=""  value={myState}/>
      <br /><br />
      <button className='btn' id='add' onClick={()=> dispatch(increment())}>ADD 1 </button>
      &nbsp;
      <button className='btn' id='minus' onClick={()=> dispatch(decrement())}>MINUS 1</button>
    </div>
  );
}

export default App;
