import HeroSection from "../component/Home Page/HeroSection"
import HighlightSection from "../component/Home Page/HighlightSection"
import ServicesHome from "../component/Home Page/ServicesHome"
import MarqueeSlider from "../component/Home Page/MarqueeSlider"


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <MarqueeSlider></MarqueeSlider>
      <HighlightSection></HighlightSection>
      <ServicesHome></ServicesHome>
    </div>
  )
}

export default Home