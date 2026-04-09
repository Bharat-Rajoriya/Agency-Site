import WorkCardSection from "../WorkCardSection"
import CardImg from '../../assets/images/Home-page/Work/online_img_1.jpg'
import CardImg2 from '../../assets/images/Home-page/Work/online_img_2.jpg'
import CardImg3 from '../../assets/images/Home-page/Work/online_img_3.jpg'
import CardImg4 from '../../assets/images/Home-page/Work/online_img_4.jpg'


const WordSection = () => {

    const workData = [
        {
            image: CardImg,
            title: "FlowBank",
            tag1: "UX Research",
            tag2: "Interface Design"
        },
        {
            image: CardImg2,
            title: "Academy.co",
            tag1: "Product Design",
            tag2: "Interaction Design"
        },
        {
            image: CardImg3,
            title: "Genome",
            tag1: "Brand identity design",
            tag2: "UX Research"
        },
        {
            image: CardImg4,
            title: "Hotto",
            tag1: "Visual Storytelling",
            tag2: "Web & Mobile Design"
        },
    ]

  return (
    <div className="containerd w-full flex-col items-center justify-center py-20 gap-10">
        <h2 className="text-5xl text-center max-w-167.5 tracking-tight font-semibold">How we transformed a small business’s <span className="span-txt">online presence</span></h2>
        
        <div className="flex flex-wrap gap-y-10 ">
            {workData.map((elem,idx) =>{
            return(
                <div key={idx} className="flex-wrap w-[49%]">
                    <WorkCardSection image={elem.image} title={elem.title} tag1={elem.tag1} tag2={elem.tag2} />
                </div>
            )
        }) }
        </div>

    </div>
  )
}

export default WordSection