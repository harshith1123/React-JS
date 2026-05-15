import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { inc,dec } from './actions';

function App() {
  const myState = useSelector((state)=> state.inc_dec);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <label htmlFor="">Enter Count:</label>
      <input type="number" name="" id=""  value={myState}/>
      <br /><br />
      <button className='btn' id='add' onClick={()=> dispatch(inc())}>ADD 1 </button>
      &nbsp;
      <button className='btn' id='minus' onClick={()=> dispatch(dec())}>MINUS 1</button>
    </div>
  );
}

export default App;
