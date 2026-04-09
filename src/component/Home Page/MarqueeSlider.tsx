import BrandIcon1 from '../../assets/images/clients/brand-icon-1.svg'
import BrandIcon2 from '../../assets/images/clients/brand-icon-2.svg'
import BrandIcon3 from '../../assets/images/clients/brand-icon-3.svg'
import BrandIcon4 from '../../assets/images/clients/brand-icon-4.svg'
import BrandIcon5 from '../../assets/images/clients/brand-icon-5.svg'
import '../../assets/style/Home.css'

const MarqueeSlider = () => {
    const items = [BrandIcon1, BrandIcon2, BrandIcon3, BrandIcon4, BrandIcon5];

  return (
      <div className="marquee-container text-center">
        <p className='text-sm mb-6'>Loved by 1000+ big and small brands around the worlds</p>
        <div className="marquee-content">
            {[...items,...items,...items].map((item, index) => (
            <div key={index} className="marquee-item">
                <img src={item} alt={`Brand logo ${index + 1}`} />
            </div>
            ))}
        </div>
      </div>
  )
}

export default MarqueeSlider
