import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const CtaBtnBreaker = () => {
  return (
    <div className="containerd gap-4 xl:flex xl:flex-row bg-black items-center justify-between  py-8 px-7 rounded-3xl w-full">
        <div className="flex  flex-col">
            <h3 className="text-2xl text-white!">See Our Work in Action.</h3>
            <h3 className="text-2xl text-white!">Start Your Creative Journey with Us!</h3>
        </div>
        <div className="flex gap-5">
        <Link to='/'><button className="btn2">Let's Collaborate <ArrowRight size={30} color="#fff" strokeWidth={3} className="p-1 bg-black rounded-full -rotate-45 border transition-all! svg-arrow" /></button></Link>
        <Link to='/'><button >Get Started <ArrowRight size={30} color="#000" strokeWidth={3} className="p-1 bg-white rounded-full -rotate-45 border transition-all! svg-arrow" /></button></Link>
        </div>
    </div>
  )
}

export default CtaBtnBreaker