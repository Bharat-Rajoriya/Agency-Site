import { ArrowRight} from "lucide-react"

type WorkCardSectionProps = {
  image: string
  title: string
  tag1: string
  tag2: string
}

const WorkCardSection = ({ image, title, tag1, tag2 }: WorkCardSectionProps) => {
  return (
    <div className="flex flex-1 flex-col gap-6 cursor-pointer card-image-box-main" >
        <div className="relative w-full h-100 rounded-2xl overflow-hidden">
            <img className='w-full h-full ' src={image} alt={title}/>
            <div className="absolute card-image-box top-0 left-0 w-full h-full bg-black/50">
                <ArrowRight size={40} color="#000000" className="absolute right-5 top-4 -rotate-45 rounded-full p-2 bg-white"/>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-2xl tracking-tight">{title}</h3>
            <div className="flex gap-3">
                <h5 className="text-sm border border-gray-400 text-gray-400 w-fit py-1.5 px-4 rounded-full hover:bg-black hover:text-white!">{tag1}</h5>
                <h5 className="text-sm border border-gray-400 text-gray-400 w-fit py-1.5 px-4 rounded-full hover:bg-black hover:text-white! ">{tag2}</h5>
            </div>
        </div>
        
    </div>
  )
}

export default WorkCardSection
