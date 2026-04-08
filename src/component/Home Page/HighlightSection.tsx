import { Target, WandSparkles, Zap } from "lucide-react"


const HighlightSection = () => {
  return (
    <div id="about" className="containerd flex-col lg:gap-16 gap-5 justify-center items-center h-screen">
        <div className="flex flex-col gap-5">
            <h2 className=" containerd text-5xl max-w-1125px text-center font-semibold tracking-tighter ">Crafting exceptional, well experienced & technology driven strategies to drive impactful results with</h2>
            <div className="flex gap-5 justify-center text-4xl tracking-normal">
                <div className="flex gap-2 bg-purple-500/10 text-purple-500 span-txt items-center px-6 py-2 rounded-full ">
                    <WandSparkles size={30} /> Creativity
                </div>
                <div className="flex gap-2 bg-sky-500/10 text-sky-500 span-txt items-center px-6 py-2 rounded-full ">
                    <Zap size={30} /> Innovation
                </div>
                <div className="flex gap-2 bg-orange-500/10 text-orange-500 span-txt items-center px-6 py-2 rounded-full ">
                    <Target size={30} /> Strategy
                </div>
            </div>
        </div>

        <div className="flex">
            <div className="2xl:px-24 px-16 md:py-8 py-4 flex justify-between items-center flex-col">
               <h2 className="2xl:text-9xl md:text-7xl text-5xl font-semibold">
                    <sup>+</sup>
                    <span>40</span>
                </h2> 
                <p className="mt-2">Total Projects Completed</p>
            </div>
            <div className="2xl:px-24 px-16 md:py-8 py-4 flex justify-between items-center flex-col border-r-gray-900">
               <h2 className="2xl:text-9xl md:text-7xl text-5xl font-semibold">
                    <sup>+</sup>
                    <span>15</span>
                </h2> 
                <p className="mt-2">Years of Experience</p>
            </div>
            <div className="2xl:px-24 px-16 md:py-8 py-4 flex justify-between items-center flex-col">
               <h2 className="2xl:text-9xl md:text-7xl text-5xl font-semibold">
                    <sup>+</sup>
                    <span>12</span>
                </h2> 
                <p className="mt-2">Design Awards</p>
            </div>
        </div>
    </div>
  )
}

export default HighlightSection