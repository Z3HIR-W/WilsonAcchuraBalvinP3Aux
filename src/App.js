import { BrowserRouter } from "react-router-dom";
import { RoutesLayoutAcchura } from "./routes/RoutesLayoutAcchura";
import { NavbarAcchura } from "./routes/NavbarAcchura";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        {/*<NavbarAcchura/>*/}
        {<RoutesLayoutAcchura/>}
      </BrowserRouter>
    </div>
  );
}

export default App;
