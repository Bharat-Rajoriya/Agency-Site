import { Link } from "react-router-dom"
import Logo from "../assets/images/Logo.svg"
import NavMenu from "./NavMenu"
import { useEffect, useState } from "react"
import { Moon, SunDim } from "lucide-react"

const Navbar = () => {

  const [theme, setTheme] = useState(false)
  const [menubg, setMenubg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setMenubg(window.scrollY >= 100)
    }

    window.addEventListener("scroll", handleScroll)
    
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className={`containerd fixed top-0 left-1/2 -translate-x-1/2 rounded-full w-fit justify-between items-center py-3 z-999  gap-12 mt-2 ${menubg ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="items-center min-w-60"><Link to="/"><img src={Logo} alt="" /></Link></div>
      <div className="flex justify-center"><NavMenu></NavMenu></div>
      <div className="flex justify-end gap-2 items-center min-w-60">
        <Link to='singin'> <button className="py-2! px-4!">Sign In</button> </Link>
        <Link to='singup'> <button className="py-2! px-4!">Sign Up</button> </Link>
          <div className="flex hover:rotate-180 transition-all cursor-pointer">
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