import { Plus } from 'lucide-react'
import Faq from '../../assets/data/FAQ.json'
import { useState } from 'react'

const FaqSection = () => {

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

    const openans = (index: number) => {
        setOpenFaqIndex((currentIndex) => (currentIndex === index ? null : index))
    }
    
  return (
    <div id="team" className="containerd  flex-col justify-center items-center gap-10 md:gap-20 py-20" >
        <h2 className="text-5xl text-center tracking-tight font-semibold w-112.5">Got questions? We’ve got <span className="span-txt">answers</span></h2>

        <div className='w-full flex flex-col gap-6'>
            {Faq.map((ques,idx)=>{
                return(
                    <div key={idx} className="flex p-6 border w-full rounded-2xl border-gray-300 flex-col gap-5"
                    onClick={() => openans(idx)}
                    >
                        <div className="flex justify-between">
                            <h4 className='text-2xl tracking-tighter font-semibold'>{ques.question}</h4>
                            <span> <Plus/></span>
                        </div>
                        <p className={`text-gray-500 ${openFaqIndex === idx ? 'block' : 'hidden'}`}>{ques.answer}</p>

                    </div>
                )
            })}
        
        </div>
        
 

    </div>
  )
}

export default FaqSection
