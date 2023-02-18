import BtnCta from '../BtnCta/BtnCta'
import './Swap.scss'
import swap_img from './images/Img_09.jpg'

export default function swap404Comp() {
  return (
    <section className="swap">
      <div className="container">
        <div className="swap__left">
          <div className="swap__block">
            <div className="swap__title">
              SafeSwap
            </div>
            <div className="swap__subtitle">
              SAFESWAP IS A DECENTRALIZED EXCHANGE THAT ALLOWS FOR QUICK AND CHEAP CRYPTOCURRENCY PURCHASES.
            </div>
            
          </div>
          <BtnCta
            grid='2'
            body='FUTURES'
            link='https://futures.safereum.eu'
            className='swap__btn'
          /> 
          <BtnCta
            grid='1'
            body='EXCHANGE *SOON*'
            link='/'
            className='swap__btn'
          />
        </div>
        <div className="swap__right">
          
          <img src={swap_img} alt="astronaut" className='swap__img' />
        </div>
        
      </div>
    </section>
  )
}