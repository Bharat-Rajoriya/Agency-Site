import TeamCard from "../TeamCard"

const TeamSection = () => {
  return (
    <div id="team" className="containerd  flex-col justify-center items-center gap-10 md:gap-20 py-20" >
        <h2 className="text-5xl text-center tracking-tight font-semibold w-167.5">Meet the creative minds behind <span className="span-txt">our success</span></h2>
        <TeamCard></TeamCard>
    </div>
  )
}

export default TeamSection