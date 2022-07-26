import './AboutG.scss'
import AboutPlanet from '../../Assets/photos/HOW.png'
import CategoryName from '../CategoryName/CategoryName'
import BtnCta from '../BtnCta/BtnCta'

export default function About() {
  return (
    <div className="about">
      <div id="about"></div>
      <div className="container">
        <CategoryName
          title='GUIDE'
          subtitle='STEP BY STEP INSTRUCTIONS FOR PARTICIPANTS'
          
        />
                  <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
        <div className="about_wrapper">
          <p className="who_we_are_p"><strong>STEP 1: REGISTRATION</strong><br />
            USE BUTTON BELOW TO CREATE YOUR LAUNCHPAD ACCOUNT
            <BtnCta
            body='Register Here'
            link='https://ico.safereum.eu'
            className='thank-you__btn'
          />
          </p><br />

          <p className="what_are_the"><strong>STEP 2: ACTIVATE YOUR ACCOUNT</strong><br />
          CONNECT TO YOUR EMAIL AND CLICK ON VERIFICATION MESSAGE.</p>
          <p className="what_are_the"><strong>STEP 3: MAKE A PURCHASE</strong><br />
          ONCE YOUR ACCOUNT IS ACTIVATED YOU CAN PURCHASE SAFEREUM COIN <br />
          OUR PLATFORM ACCEPTS MANY PAYMENT METHODS INCLUDING:<br />
          - PAYPAL -- <strong>FASTEST!</strong> --<br />
          - DIRECT DEPOSIT (BTC, ETH, XLM, USDT AND MANY MORE)<br />
          - COINPAYMENTS GATEWAY <br />
          <i>*Availability of payment methods can be different for each country</i></p>
          <p className="what_are_the"><strong>STEP 4: DONE!</strong><br />
          AFTER YOUR PURCHASE IS CONFIRMED SYSTEM WILL AUTOMATICALLY ALLOCATE YOUR TICKETS, THEY ARE NOT VISIBILE FOR YOU!<br />
         <i>-- 1 USD IS EQUAL TO ONE TICKET --</i>
           </p>
          
        </div>
      </div>
    </div>
  )
}