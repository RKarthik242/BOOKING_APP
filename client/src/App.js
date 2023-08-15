import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./Pages/home/Home.js";
import List from "./Pages/list/List.js";
import Hotel from "./Pages/hotel/Hotel.js";
import Login from "./Pages/login/Login.js";
import Register from "./Pages/register/Register.js";


function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
