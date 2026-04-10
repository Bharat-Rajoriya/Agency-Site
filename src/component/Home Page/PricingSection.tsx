import { ArrowRight } from 'lucide-react'
import plans from '../../assets/data/plans.json'

const PricingSection = () => {

    return (
        <div id="pricing" className="containerd  flex-col justify-center items-center gap-10 md:gap-20 py-20" >
            <h2 className="text-5xl text-center tracking-tight font-semibold w-112.5">Pick the plan that fits your <span className="span-txt">start-up</span></h2>

            <div className="flex flex-col lg:flex-row items-center justify-between grow gap-6 w-full flex-wrap">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        style={{ background: plan.theme.bg, color: plan.theme.text }}
                        className="flex width-card p-10 gap-10 rounded-2xl"
                    >
                        <div className="flex flex-col gap-8 w-1/2">
                            <div className='flex gap-3 flex-col items-start'>
                                <span className="px-3 py-1 rounded-full bg-black text-white text-[14px]" >{plan.name}</span>
                                <p>{plan.description}</p>
                            </div>
                            <div className='flex flex-col gap-4 items-start'>
                                <h2 className='text-5xl font-semibold tracking-tighter'>
                                ${plan.price} <span className='text-2xl'>/{plan.billing}</span>
                                </h2>
                                <button
                                    style={{
                                        background: plan.theme.buttonBg,
                                        color: plan.theme.buttonText
                                    }}
                                >
                                    {plan.cta} <ArrowRight size={30} color="#fff" strokeWidth={3} className="p-1 bg-black rounded-full -rotate-45 border "/>
                                </button>
                            </div>
                            
                        </div>

                        <div className="flex w-1/2 border-l pl-10 border-amber-50/50">
                            <ul className='flex justify-between flex-col'>
                                {plan.features.map((feature, i) => (
                                    <li key={i} className='text-[16px]'>✓ {feature}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default PricingSection