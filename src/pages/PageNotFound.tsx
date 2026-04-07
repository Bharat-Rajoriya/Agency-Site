import { Link } from "react-router-dom"
import Notfound from "../assets/images/404-page/notfound.png"
import { ArrowRight } from "lucide-react"

const PageNotFound = () => {
  return (
    <div className="containerd justify-center items-center w-full h-screen gap-8 flex-col">
      
      <img className="w-1/2" src={Notfound} alt="404" />

        <h2 className="text-5xl font-medium text-center">
          Oops! The page you are <br/> looking for <span className="span-txt">doesn't exist</span>
        </h2>
        <Link to='/'><button>Back to home <ArrowRight size={30} color="#000" strokeWidth={3} className="p-1 bg-white rounded-full -rotate-45 border transition-all! " /></button></Link>


    </div>
  )
}

export default PageNotFound