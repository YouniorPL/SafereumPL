import './About.scss'
import AboutPlanet from '../../Assets/photos/Img_01.jpeg'
import CategoryName from '../CategoryName/CategoryName'

export default function About() {
  return (
    <div className="about">
      <div id="about"></div>
      <div className="container">
        <CategoryName
          title='ABOUT'
          subtitle='SAFEREUM NETWORK IS THE ANSWER FOR CURRENT DECENTRALIZATION PROBLEMS, STABLE ECOSYSTEM FOR USERS WORLDWIDE!'
        />
        <div className="about_wrapper">
          <p className="who_we_are_p">WHAT IS SAFEREUM??<br />
            Safereum is decentralized blockchain ecosystem build with Masternode
            technology. Its main target is to adapt cryptocurrency worldwide and to 
            host a vast network of services for everyday usage.</p>
          <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
          <p className="what_are_the">WHAT ARE THE ADVANTAGES OF
            OUR SAFEREUM NETWORK?
            That's simple; the Safereum ecosystem connects global industries
            such as grocery stores, car dealers, transport companies, et cetera.
            That way, Safereum is more stable and sustainable than other cryptocurriencies
            beceause of decreasing need for SFX to Fiat conversion.<br />
            <br />
            Thanks to Masternode technology, Safereum Coin allows hosting an increadible
            amount of transfers per secound, instant Tx and private transactions.<br />
            <br />
            Even better, we plan to host various services that allow for even broader coverage of Safereum ecosystem.
            So you may consider Safereum as a currency of the future!</p>
        </div>
      </div>
    </div>
  )
}