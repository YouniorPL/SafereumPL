import './AffiliateTop.scss'
import AboutPlanet from '../../Assets/photos/whatis.png'
import CategoryName from '../CategoryName/CategoryName'
//import BtnCta from '../BtnCta/BtnCta'

export default function About() {
  return (
    <div className="about">
      <div id="about"></div>
      <div className="container">
        <CategoryName
          title='WHAT IS AFFLIATE PROGRAM?'
          subtitle='LEARN WHAT REFFERALS ARE'
          
        />
                  <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
        <div className="about_wrapper">
          <p className="who_we_are_p"><strong>WHAT IS AFFILIATE PROGRAM:</strong><br />
            Affiliate program allows you to earn money by inviting others to invest in Safereum Network.
          </p>

          <p className="what_are_the"><strong>WHAT IS THE REWARD?</strong><br />
          Rewards are calculated as 20% commision of what person invited by you invests, for example if your friend will buy 1 000 USD worth of Safereum Coin
          you will receive 200 USD reward. <br />
          This is not only one time deal! every time said person will invest you will always get 20% out of their investment. <br />
          In addition to that your friend will also receive 5% bonus on every purchase. </p>
          <p className="what_are_the"><strong>HOW AND WHEN CAN I CLAIM MY REWARD?</strong><br />
          The first refferal payout is always done within 24 hours, no matter if it's $100 or $10 000. <br />
          All later payouts are paid weekly every Monday. <br />
          We support withdrawals with:<br />
          - PAYPAL -- <strong>FASTEST!</strong> --<br />
          - Crypto transfers (BTC, ETH, XLM, USDT AND MANY MORE)<br />
          <i>*Availability of payment methods can be different for each country</i></p>
          <p className="what_are_the"><strong>ARE THERE ANY LIMITATIONS?</strong><br />
          No, there is no limit for earnings, you can invite as many friends as you want.
          
           </p>
          
        </div>
      </div>
    </div>
  )
}