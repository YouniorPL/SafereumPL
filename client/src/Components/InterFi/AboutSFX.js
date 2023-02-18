import './AboutSFX.scss'
import AboutPlanet from './images/SafereumLogo.png'
import CategoryName from '../CategoryName/CategoryName'
import BtnCta from '../BtnCta/BtnCta';

export default function About() {
  return (
    <div className="about">
      <div id="about"></div>
      <div className="container">
      <div className="aboutSFX">
            <img src={AboutPlanet} alt="" />
          </div>
        <CategoryName
          title='SAFEREUM'
          subtitle='SAFEREUM NETWORK, IS A DECENTRALIZED BLOCKCHAIN NETWORK, AIMING TO SOLVE ONE OF THE 
          MOST COMMON PROBLEMS.'
        />
        
        <div className="about_wrapper">
          <p className="who_we_are_p"><b>WHAT IS SAFEREUM?</b><br />
            Safereum Network is a startup that was created to solve one of the most common problems in cryptocurrency: Payments. <br />
            Currently there are many gateways that allow for payments to take place online, then why is Safereum different?
            There are many factors that make the project unique, let us highlight most important pros. </p>
            
          
          <p className="what_are_the"> <b>THE ECOSYSTEM</b><br />
            Instead of building yet another payment gateway, we decided to focus more on creating partnerships with companies who will allow for cryptocurrency purchases. Any terminal will be useless without partners who will use it.
            <br /></p>
            <p className="what_are_the"> <b>UNIQUE BLOCKCHAIN CONSENSUS</b><br />
            Our mission requires a lot of improvements to currently used blockchain technology, Proof-of-Transaction (temporary name),
            is decentralized network that is being held by businesses to assure full decentralization.
            At the current stage of development we are unable to talk about it freely, be sure to follow our social media for updates.
            <br /></p>
            <p className="what_are_the"> <b>GAS FEES AND MARGIN.</b><br />
            What also makes our vision unique is our business model. You have probably seen many articles about Bitcoin being best alternative for milionaires,
            but nobody is comparing small volume payments, we calculate that gas fees for Safereum Network will be lower than $0.00001 which is 99,9% lower than BTC or ETH.
            In addition to that margin fees for companies is lowered by over 86% in comperasion to <b>VISA</b> or <b>MasterCard</b>. <br /><br />
            <b>TO CELEBRATE OUR NEW COLLABORATION WE ARE GIVING AWAY 1 SFX FOR EVERY PERSON WHO CREATES AN ACCOUNT USING BUTTON BELOW.</b>  </p>
        </div>
        <BtnCta
            body='Claim 1 SFX'
            link='https://ico.safereum.eu/invite?ref=UD00341'
            className='thank-you__btn'
          />
      </div>
    </div>
  )
}