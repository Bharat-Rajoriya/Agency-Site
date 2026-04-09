import { Link } from 'react-router-dom'
import Team1 from '../assets/images/Home-page/Team/creative_img_1.png'
import Team2 from '../assets/images/Home-page/Team/creative_img_2.png'
import Team3 from '../assets/images/Home-page/Team/creative_img_3.png'
import Team4 from '../assets/images/Home-page/Team/creative_img_4.png'

const TeamCard = () => {

  const teamData = [
      {
        image : Team1,
        memberName : "Logan Dang",
        designation : "WordPress Developer",
        socialink1 : "/",
        socialink2 : "/"
      },
      {
        image :Team2,
        memberName : "Ana Belić",
        designation : "Social Media Specialist",
        socialink1 : "/",
        socialink2 : "/"
      },
      {
        image :Team3,
        memberName : "Brian Hanley",
        designation : "Product Designer",
        socialink1 : "/",
        socialink2 : "/"
      },
      {
        image : Team4,
        memberName : "Darko Stanković",
        designation : "UI Designer",
        socialink1 : "/",
        socialink2 : "/"
      },
    ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8" >
        {teamData.map((elem,idx)=>{
          return(
            <div className="flex flex-col gap-6 items-center justify-center team-card-main" key={idx}>
              <img src={elem.image} alt={`"Team Member ${idx + 1}`} className=' :hover-filter-gray ' />
              <h3 className='text-[16px] tracking-tight font-medium text-gray-600! -mb-5'>{elem.memberName}</h3>
              <h3 className='text-[16px] tracking-tight font-medium text-gray-600! -mb-5'>{elem.designation}</h3>
              <div className="flex gap-2 mt-2">
                  <Link to={elem.socialink1} > <img className='w-5 grayscale ' src="data:image/webp;base64,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" alt="" /> </Link>
                  <Link to={elem.socialink2} > <img className='w-5 grayscale ' src="https://th.bing.com/th/id/OIP.Fc-evvSo3ccnVv1tjSvkcQHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="" /> </Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default TeamCard