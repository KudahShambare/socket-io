import './App.css';
import {Routes,Route} from "react-router-dom";



//import routes

import Home from "./pages/Home";



function App() {

  

  return (
    <div className="App">

    <Routes>

    <Route exact path="/" element={<Home/>}/>
 



    </Routes>
     
    </div>
  );
}

export default App;
