import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Read from "./component/Read";
import Create from "./component/Create";
import Update from "./component/Update";
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Create/>} />
        <Route exact path="/all" element={<Read/>} />
        <Route exact path="/update/:id" element={<Update/>} />
        
      </Routes>
      </BrowserRouter>
</div>
  );
}

export default App;
