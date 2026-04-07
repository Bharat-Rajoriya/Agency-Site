import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./component/Navbar"
import PageNotFound from "./pages/PageNotFound"
import SignIn from "./pages/SignIn"
import SingUp from "./pages/SingUp"


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="singin" element={<SignIn/>}/>
        <Route path="singup" element={<SingUp/>}/>
      </Routes>
    </div>
  )
}

export default App