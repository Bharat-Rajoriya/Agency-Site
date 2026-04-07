import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo.svg"
import NavMenu from "./NavMenu"
import { useState } from "react"
import { Moon, SunDim } from "lucide-react"

const Navbar = () => {

  const [theme, setTheme] = useState(false)

  return (
    <div className="containerd justify-between items-center py-3">
      <div className="items-center min-w-60"><Link to="/"><img src={Logo} alt="" /></Link></div>
      <div className="flex justify-center"><NavMenu></NavMenu></div>
      <div className="flex justify-end gap-2 items-center min-w-60">
        <Link to='singin'> <button className="py-2! px-4!">Sign In</button> </Link>
        <Link to='singup'> <button className="py-2! px-4!">Sign Up</button> </Link>
          <div className="flex hover:rotate-180 transition-all">
            {theme?
          <SunDim color="#000" size={30} 
            onClick={()=>{if(theme === true)
            {setTheme(false)}} }/>
          :<Moon color="#000" size={30} 
            onClick={()=>{if(theme === false)
            {setTheme(true)}} }/>}
          </div>
      </div>
    </div>
  )
}

export default Navbar