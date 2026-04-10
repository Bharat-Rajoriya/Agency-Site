import TestimonialsImg from '../../assets/images/Home-page/Testimonials/creativity_img.jpg'

const TestmonialsSection = () => {
  return (
    <div id="team" className="containerd  flex-col justify-center items-center gap-10 md:gap-20 py-20" >
        <h2 className="text-5xl text-center tracking-tight font-semibold w-167.5">What our satisfied customers are saying<span className="span-txt">about us</span></h2>

        <div className='containerd flex-col gap-6'>
            <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className="p-8 gap-64 rounded-2xl flex flex-col relative object-cover bg-center h-full w-full bg-cover bg-no-repeat bg-custom-img" >
                    <span className='text-white/60 uppercase text-sm font-medium'> Customer stories</span>
                    <div className='flex flex-col gap-6'>
                        <h3 className='text-5xl text-white! tracking-tight font-semibold'>“Awake’s expertise transformed my vision into success!”</h3>
                        <div className='flex flex-col gap-1'>
                            <p className='text-white font-medium'>Ananya Shah</p>
                            <p className='text-white/60 text-sm font-medium'>Founder of Chipsland</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between min-w-1/4 gap-36 xl:max-w-25 bg-yellow-400/50 rounded-2xl p-8'>
                    <div>
                        <span className='uppercase text-sm font-medium text-black/60'>Facts & numbers</span>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <h2 className='text-7xl font-medium text-black'>91%</h2>
                        <h3 className='text-2xl'>Clients recommend our design services.</h3>
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:flex xl:flex-row gap-6'>
                <div className='flex flex-col justify-between min-w-1/4 gap-5 xl:max-w-25 bg-gray-950 rounded-2xl p-8'>
                    <div>
                        <span className='uppercase text-sm font-medium text-white/60'>Customer stories</span>
                        <h2 className='text-2xl tracking-tight font-medium text-white! leading-7'>Their creativity and attention to detail transformed our brand completely!</h2>
                    </div>
                    <div>
                        <img src={TestimonialsImg} alt="" />
                    </div>
                </div>
                <div className='p-8 gap-24 rounded-2xl flex flex-col relative object-cover bg-center h-full w-full bg-cover bg-no-repeat bg-gray-200'>
                    <div className='flex flex-col gap-6'>
                        <span className='text-black/60 uppercase text-sm font-medium'> Customer stories</span>
                        <h3 className='text-[42px] text-black! tracking-tight font-semibold leading-12'>“Awake Design Agency brought our ideas to life with exceptional creativity and precision, exceeding expectations.”</h3>
                    </div>
                        <div className='flex flex-col gap-1'>
                            <p className='text-black/60 font-medium'>Kabir Shah</p>
                            <p className='text-black/60 text-sm font-medium'>Founder of Chipsland</p>
                        </div> 
                </div>
                
            </div>
            

        </div>
        
    </div>
  )
}

export default TestmonialsSection