import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import SideBar from './SideBar';
import Props from './Props';
import Arrow from './Arrow_Functions';
// import { Export,Export2, Export3 } from './Export';
import Export, {Export2,Export3} from './Export'

let name = "Harshit Shetty"
let car_obj = {
  name: "Jaguar",
  color: "Red"
}

let a = 19;
let msg = "";
if(a>10){
  msg = "Hello!...."
}
else{
  msg = "Bye!..."
}
const friends = ["Pavan","Vishal","Harsha"]

function App() {
  return (
    <>
    {/* <h1>Content Starts </h1>
    <h3>{msg}</h3>
    <h3>{a<10 ? a + " is less than 10" : a + "is greater than 10"}</h3>
    <div className="App">
      <h1>{name}</h1>
      <h1>{5+8}</h1>
      <h1>{car_obj.name}</h1>
      <h1>{car_obj.color}</h1>
    </div> */}
    {/* <Header/>
    <SideBar/>
    <Footer/> */}
    {/* <Props name = "Harshit" age = "22">
      <p>Children Element 1</p>
      <button type='button' value = "Click">Click 1</button>
    </Props> */}
    <Props age = {a} isMarried = {false} arr={friends}>
      <p>Children Element 2</p>
      <button type='button' value = "Click">Click 2</button>
    </Props>
    <Arrow name = "Harshit"/>
    <Export/>
    <Export2/>
    <Export3/>
    </>
  );
}

export default App;
