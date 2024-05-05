import { lazy } from "react"
import {BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
const  Dashbooard  =  lazy(() => import('./components/Dashboard'))
const  Landing = lazy( () => import('./components/Landing')) 


function App() {


  return (
    <div>
     <BrowserRouter>
     <Appbar />
     <Routes/>
      <Routes>
       <Route path="/dashboard" element={<Dashbooard />} />
       <Route path="/" element={<Landing />} />
      </Routes>
     </BrowserRouter>
   </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
    <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing Page</button>

        <button onClick={ () => {
          navigate("/dashboard");
        }}>Dashboard</button>
      </div>
      </div>
}

export default App
