// import logo from './logo.svg';
import './App.css';
import Card1 from './card1.js';
import Card2 from './card2.js';
import Card4 from'./card4.js';
import Card5 from'./card5.js';

function App() {
 return( 
 <div classname="app" >
        <h1 style={{color:"red"}} className="font-link">Some famous paintings.</h1>
        <Card1/>
        <hr />
        <Card2/>
        <hr />
        <Card5/>
        <hr />
        <Card4/>
        <hr />

        
        
         
     </div>);
}

export default App;
// iski mdd se export to another js 