import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/Login"
import Home from "./pages/dashboard/Home"
import Signup from "./pages/auth/Signup"


function App() {
  return (
    <>
       <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        <Route element={<Home/>} index/>
       </Routes>
    </>
  )
}

export default App
