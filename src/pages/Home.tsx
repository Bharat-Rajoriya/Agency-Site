import HeroSection from "../component/Home Page/HeroSection"
import HighlightSection from "../component/Home Page/HighlightSection"
import ServicesHome from "../component/Home Page/ServicesHome"
import MarqueeSlider from "../component/Home Page/MarqueeSlider"
import WorkSection from "../component/Home Page/WorkSection"
import TeamSection from "../component/Home Page/TeamSection"
import TestmonialsSection from "../component/Home Page/TestmonialsSection"
import PricingSection from "../component/Home Page/PricingSection"


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <MarqueeSlider></MarqueeSlider>
      <HighlightSection></HighlightSection>
      <ServicesHome></ServicesHome>
      <WorkSection></WorkSection>
      <TeamSection></TeamSection>
      <TestmonialsSection/>
      <PricingSection></PricingSection>
    </div>
  )
}

export default Home