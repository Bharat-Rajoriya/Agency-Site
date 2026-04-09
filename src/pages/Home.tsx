import HeroSection from "../component/Home Page/HeroSection"
import HighlightSection from "../component/Home Page/HighlightSection"
import ServicesHome from "../component/Home Page/ServicesHome"
import MarqueeSlider from "../component/Home Page/MarqueeSlider"
import WordSection from "../component/Home Page/WordSection"


const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <MarqueeSlider></MarqueeSlider>
      <HighlightSection></HighlightSection>
      <ServicesHome></ServicesHome>
      <WordSection></WordSection>
    </div>
  )
}

export default Home