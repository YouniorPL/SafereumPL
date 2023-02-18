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
          subtitle='SAFEREUM IS A VISION OF DECENTRALIZED FINANSES AVAILABLE FOR WHOLE WORLD.'
        />
        <div className="about_wrapper">
          <p className="who_we_are_p"><b>THE PROBLEM</b><br />
            To this day, making payments with Bitcoin or Ethereum meets two problems, the first being high transfer fees,
            many articles try to convince you that bitcoin has lower fees compared to regular banking, hovewer for every example a big amount of money is used for comperasion.
            But the issues start to be visible with transactions of lower values for example 0.1$-10$ where the gas is a big percentage of payment.
            Second problem is the lack of places that accept cryptocurrency payments, which makes it almost impossible to reuse optained crypto, instead it forces us to convert cryptocurrencies into fiat then to be used to buy food, pay bills etc.</p>
          <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
          <p className="what_are_the"><b>WHAT IS UNIQUE ABOUT SAFEREUM?</b><br />
            Safereum Network is all about partners, we believe that by creating ecosystem full of companies who will accept our currency in exchange for their goods and services,
            we can achieve what was always the purpose of blockchain, decentralized and well secured finances. </p>
            <br />
            <p className="what_are_the"><b>GENERAL IDEA</b><br />
            Our ecosystem works very simple, instead of waiting for companies to accept cryptocurrencies themselves, we contact them and offer to integrate our systems.
            That way, we can verify merchant and secure our community from any asset loss also making sure that every product we develop stays decentralized. <br />
            <br />
            We also want to make sure that companies can reuse cryptocurrencies earned with us, for that we always search for any possible B2B connections for transactions circle to stay full.</p>
        </div>
      </div>
    </div>
  )
}