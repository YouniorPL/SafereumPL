import './HowTB.scss'
import AboutPlanet from '../../../Assets/photos/register.png'
import CategoryName from '../../CategoryName/CategoryName'
import BtnCta from '../../BtnCta/BtnCta'

export default function About() {
  return (
    <div className="about">
      <div id="about"></div>
      <div className="container">
        <CategoryName
          title='STEP 1'
          subtitle='REGISTRATION'
          
        />
                  <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
        <div className="about_wrapper">
          <p className="who_we_are_p"><strong>ICO Launchpad:</strong><br /> <br />
          ICO Launchpad account is required to make a purchase of Safereum Coin during the presale phase,
          We do not collect any personal data to assure decentralization, but in very rare cases we may ask for KYC for security reasons.
          <br />
          </p>
        
        <div className='about_wrapper'>
        <p className='who_we_are_p'> <strong> How to register:</strong> <br /> <br />
        1. Open your browser and type in https://ico.safereum.eu/register or you can click the button on the bottom of this panel. <br/>
        2. Fill the empty boxes with required data: Your name, Email address, Password. Make sure that you read and accept terms of use. <br/>
        3. After the process is completed go to your mailbox and verify your account (if you haven't received any email make sure to check <strong>'SPAM'</strong> folder as well). <br/>
        4. Congrats! Your ICO Launchpad account is now active and you can proceed with the next step. <br/>Press any button from navigation bar to jump straight to payment method you are interested in or simply scroll down. <br /><br />
        <div className="see_more_lite_paper">
            <BtnCta
              body='Register Here'
              link='https://ico.safereum.eu/register'
            />
          </div>
        </p>
        </div>
            
            
            
            

          <br />


          
        </div>
      </div>
    </div>
  )
}