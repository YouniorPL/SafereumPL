import './AboutDPS.scss';
import AboutPlanet from './images/DPSLogo.png';
import CategoryName from '../CategoryName/CategoryName';
import BtnCta from '../BtnCta/BtnCta';

export default function About() {
  return (
    <div className="aboutapx">
      <div id="aboutapx"></div>
      <div className="container">
      <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
        <CategoryName
          title='DAPP PLAY STORE'
          subtitle='SEARCH, STORE, AND DISCOVER THOUSANDS OF BLOCKCHAIN APPLICATIONS WITH A CLICK OF A BUTTON.'
        />
        
        <div className="about_wrapper">
          <p className="who_we_are_p"><b>WHAT IS DAPP PLAY STORE?</b><br />
          At Dapp Play Store we aim for diversification housing dApps from multiple industries like gaming, music, social, earning rewards and so much more, manage and store your dApps to your personalized profile to track data, rewards and current transactions. </p>
            
          
          <p className="what_are_the"> <b>DAPP PLAY MUSIC</b><br />
          Dapp Play Music is a blockchain-based mobile live streaming music platform, interactive social network, peer-to-peer digital economy for independent musicians and modern music fans around the world. A fully decentralized community of artists, developers, and listeners collaborating to share and defend the world’s music. Both artists and streamers are rewarded and have control.
            <br /></p>
            <p className="what_are_the"> <b>CONTENT MANAGEMENT SYSTEM (CMS)</b><br />
            A content management system (CMS) is a software application that enables users to create, edit, collaborate on, publish and store digital content. A CMS may also provide tools for personalization, or one-to-one marketing. One-to-one marketing is the ability of a dApp to tailor its content and advertising to a user's specific characteristics using information a user provides or a dApp gathers. A CMS makes it easy for businesses to add new web pages as their business grows without the need for a developer also allows to manage and track data of dApp performance. 
            <br /></p>
            <BtnCta
            body='LEARN MORE'
            link='https://www.dapp-playstore.com'
            className='thank-you__btn'
          />
          </div>

      </div>
    </div>
  )
}