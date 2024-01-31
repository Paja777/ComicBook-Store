import coverImg from '../../assets/hero cover.png'
import HeroHeadline from './HeroHeadline'


const Hero = () =>  (
    <div className='relative '>
        <img src={coverImg} alt='spiderman' className='absolute right-0'/>
        <HeroHeadline />
    </div>
  )


export default Hero