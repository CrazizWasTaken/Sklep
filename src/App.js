import './App.css';
import pom from './pomarancza.jpg'; 
import Comp from './component.js';
import water from './watermelon.jpg';
import ras from './rasberry.jpg';
import sal from './salata.jpg';
const Stuff=[{name:"pomarancza",desc:"pomaranczowa",instock:"100",price:"3,00",img:pom},
  {name:"arbuz",desc:"eksplodujacy",instock:"2 ",price:"9.98",img:water},
  {name:"malina",desc:"przepyszna",instock:"836 ",price:"0.40",img:ras},
  {name:"salata",desc:"zielona",instock:"98",price:"3.42",img:sal}
]
function App() {
  return (
    <div>
      <div id="Top">
        <h2>Internetowy sklep z eko-warzywami</h2>
      </div>
      <div id="Top2">
        <ol>
          <li>warzywa</li>
          <li>owoce</li>
          <li>soki</li>
        </ol>
      </div>
      <div id="Main">
        <Comp max={Stuff[0]}/>
        <Comp max={Stuff[1]}/>
        <Comp max={Stuff[2]}/>
        <Comp max={Stuff[3]}/>
      </div>
    </div>
  );
}

export default App;
