
import React from "react"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Components/Home"
export default function App() {
  return (
     <Router>
       <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route path="/home" element={<div>Hello</div>}></Route>
        </Route>
       </Routes>
     </Router>
  );
}


