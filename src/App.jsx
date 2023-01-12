import './App.css'

import Register from'./pages/Register/Register.jsx'
import Details from "./pages/Details/Details.jsx";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";


function App() {

  return (
      <Router>
        <Routes>
          <Route path='/' element={<home />}/>
          <Route oath='/login' element={<Register />}/>
          <Route path='/movie' element={<Details />}/>
        </Routes>
      </Router>
  )
}

export default App
