import './Litepaper.scss'
import safepayPlanet from '../../Assets/photos/Img_03.jpeg'
import CategoryName from '../CategoryName/CategoryName'
import BtnCta from '../BtnCta/BtnCta'



export default function safepay() {
  return (
    <div className="safepay">
      <div id="safepay">

      </div>
      <div className="container">
        <div className="safepay_wrapper">

          <CategoryName
            title='SAFEPAY'
            subtitle='THE BEST PAYMENT SYSTEM FOR ON-LINE AND DAILY PURCHASES - SOON AVAILABLE AT YOUR CLOSEST GROCERY SHOP.' />
          <div className="safepay_text">
            <p className="safepay_first_p" >ALL ABOUT SAFEPAY:
            <br/>
              Simply put, it is a payment gateway that allows for contactless payments.
              They can be done via the web and at stationary points in your area,
              including grocery stores, fuel stations, beauty salons, and many more.<br></br>
              </p>
            <img src={safepayPlanet} alt="" />
            <p className="safepay_second_p">NFC, QR and WEB3: <br />
              Shops will enable two ways of purchase for you: a QR code system
              that will redirect you to your basket in DAPP.
              And via official Safereum terminals, that support one-use cards generated in your wallet
              use NFC technology for contactless payments.</p>
              <p className="safepay_second_p">SAFEPAY PRICING: <br />
              Our fees are stable and transparent to assure the attractiveness of Safereum Network.
              We do have hidden costs and we do not offer subscriptions from client side.
              The only fees that apply are network fees required for network to function.<br />
             <strong>If you own a company and want to integrate our systems, please see the documentation below.</strong>

              </p>
          </div>
          <div className="see_more_lite_paper">
            <BtnCta
              body='Requirements and Pricing:'
              link='/Pricing.pdf'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
