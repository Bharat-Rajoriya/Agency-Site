import { ArrowRight, Star } from "lucide-react"
import { Link } from "react-router-dom"
import Avatar1 from "../../assets/images/Home-page/HeroSec/avatar_1.jpg"
import Avatar2 from "../../assets/images/Home-page/HeroSec/avatar_2.jpg"
import Avatar3 from "../../assets/images/Home-page/HeroSec/avatar_3.jpg"
import Avatar4 from "../../assets/images/Home-page/HeroSec/avatar_4.jpg"

 

const HeroSection = () => {
  return (
    <div className="containerd h-[90vh] justify-center items-center flex-col sm:gap-6 gap-4 before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:blur-3xl">
        <h1 className="text-8xl text-center font-semibold filter: blur(0px); opacity: 1; tracking-tighter max-w-5xl ">
            Building bold brands with <span className="span-txt">thoughtful design</span>
        </h1>
        <p className="max-w-152.5 text-gray-800">
            At Awake, we help small startups tackle the world’s biggest challenges with tailored solutions, guiding you from strategy to success in a competitive market.
        </p>

        <div className="flex gap-5 items-center">
        <Link to='/'><button>Get Started <ArrowRight size={30} color="#000" strokeWidth={3} className="p-1 bg-white rounded-full -rotate-45 border " /></button></Link>
            <div className="flex">
                <img src={Avatar1} alt="" width="44px" height="44px" className="rounded-full -mr-2 border-2 border-white" />
                <img src={Avatar2} alt="" width="44px" height="44px" className="rounded-full -mr-2 border-2 border-white" />
                <img src={Avatar3} alt="" width="44px" height="44px" className="rounded-full -mr-2 border-2 border-white" />
                <img src={Avatar4} alt="" width="44px" height="44px" className="rounded-full -mr-2 border-2 border-white" />
            </div>
            <div>
                <div className="flex flex-col">
                     <div className="flex ">
                        <Star color="rgb(245, 158, 11)" size={18} fill="rgb(245, 158, 11)"></Star>
                        <Star color="rgb(245, 158, 11)" size={18} fill="rgb(245, 158, 11)"></Star>
                        <Star color="rgb(245, 158, 11)" size={18} fill="rgb(245, 158, 11)"></Star>
                        <Star color="rgb(245, 158, 11)" size={18} fill="rgb(245, 158, 11)"></Star>
                        <Star color="rgb(245, 158, 11)" size={18}></Star>
                     </div>
                     <p className="text-sm text-gray-700">Trusted by 1000+ clients</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HeroSection