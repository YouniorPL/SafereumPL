import BtnCta from '../BtnCta/BtnCta'
import Img from './Img_08.jpeg'
import './Promo.scss'





export default function Promo() {
  return (
    <section className="thank-you">
      <div className="container">
        <div className="thank-you__left">
          <img src={Img} alt="astronaut" className='thank-you__img-tablet' />
          <div className="thank-you__block">
            <div className="thank-you__title">
              WELCOME TO <strong>SAFEREUM NETWORK</strong>
            </div>
            <div className="thank-you__subtitle">
              IF YOU SEE THIS MESSAGE, THAT MEANS YOU ARE THE CHOSEN ONE TO RECEIVE A SPECIAL GIFT!
            </div>
          </div>
          <div className="thank-you__text">
            First of all, thank you for joining our marketing campaign. <br /> <br />
            Before you ask what is Safereum Network, here is most important informations, if you are interested to read more please click one of the buttons below. <br />

            Safereum Network is the revolution for cryptocurrency payments, allowing users to pay at their local shops and services with digital money.
            Our Ecosystem is built to assure <strong>stabilization</strong>, <strong>privacy</strong>, and <strong>safety</strong>.
            Most of our products are decentralized. <br /> <br />

            <strong>What about the gift we mentioned earlier?</strong> <br/>

            Everyone who joined thru our markeing campaign receive 5% bonus on their every purchase <strong>FOREVER!</strong> <br />
            Don't hesitate to join our Affiliate Program, where you can earn real money. (More info under Referral Page) <br /> <br />

            What are you waing for? Do not miss your ROI! <br/>



          </div>
          <BtnCta
            body='Claim Bonus'
            link='https://ico.safereum.eu/invite?ref=UD00302'
            className='thank-you__btn'
          />
          <BtnCta
            body='Website'
            link='https://www.safereum.eu'
            className='thank-you__btn'
          />
            <BtnCta
            body='Telegram Community'
            link='https://t.me/SafereumGlobal'
            className='thank-you__btn'
          />
          <BtnCta
            body='Earn With Safereum'
            link='https://www.safereum.eu/affiliate'
            className='thank-you__btn'
          />
        </div>
        <div className="thank-you__right">
          <img src={Img} alt="astronaut" className='thank-you__img' />
        </div>
      </div>
    </section>
  )
}