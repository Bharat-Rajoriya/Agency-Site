import { SwatchBook, Image, WandSparkles, ChevronsLeftRightEllipsis, ChartColumn } from "lucide-react"
import CtaBtnBreaker from "../CtaBtnBreaker"


const ServicesHome = () => {
  return (
    <div className="containerd flex-col gap-12 h-screen" id="services">
        <div className="flex flex-col justify-center items-center gap-10 lg:gap-16 ">
            <h2 className="text-5xl font-semibold tracking-tight max-w-106.25 text-center" >
                Where innovation meets <span className="span-txt">aesthetics</span>
            </h2>
            <div className="w-full">
                <div className="grid auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:grid-cols-5 gap-6 w-full">
                    <div className="flex flex-col gap-8 h-full p-10 bg-purple-100 text-purple-500 rounded-2xl">
                        <SwatchBook size={35}/>
                        <h3 className="text-purple-500! text-2xl font-semibold tracking-tighter">Brand <br/>Strategy</h3>
                    </div>
                    <div className="flex flex-col gap-8 h-full p-10 bg-cyan-100 text-cyan-500 rounded-2xl">
                        <Image size={35}/>
                        <h3 className="text-cyan-500! text-2xl font-semibold tracking-tighter">Digital<br/>Marketing</h3>
                    </div>
                    <div className="flex flex-col gap-8 h-full p-10 bg-orange-100 text-orange-500 rounded-2xl">
                        <WandSparkles size={35}/>
                        <h3 className="text-orange-500! text-2xl font-semibold tracking-tighter">UI/UX<br/>Design</h3>
                    </div>
                    <div className="flex flex-col gap-8 h-full p-10 bg-green-100 text-green-500 rounded-2xl">
                        <ChartColumn size={35}/>
                        <h3 className="text-green-500! text-2xl font-semibold tracking-tighter">Analytics &<br/>Reporting</h3>
                    </div>
                    <div className="flex flex-col gap-8 h-full p-10 bg-red-100 text-red-500 rounded-2xl">
                        <ChevronsLeftRightEllipsis size={35}/>
                        <h3 className="text-red-500! text-2xl font-semibold tracking-tighter">Web<br/>Development</h3>
                    </div>
                </div>

            </div>
        </div>
        <CtaBtnBreaker></CtaBtnBreaker>
    </div>
  )
}

export default ServicesHome