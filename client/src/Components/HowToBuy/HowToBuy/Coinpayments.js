import './Coinpayments.scss'
import LitepaperPlanet from '../../../Assets/photos/cp.png'
import CategoryName from '../../CategoryName/CategoryName'
import BtnCta from '../../BtnCta/BtnCta'



export default function Coinpayments() {
  return (
    <div className="litepaper">
      <div id="coinpayments">

      </div>
      <div className="container">
        <div className="litepaper_wrapper">

          <CategoryName
            title='CoinPayments'
            subtitle='Purchase using Coinpayments gateway, make sure that the amount of payment is equal to amount requested by payment provider.' />
            <img src={LitepaperPlanet} alt="" />
          <div className="litepaper_text">
            <p className="litepaper_first_p" ><strong>Personal Wallet</strong><br/><br/> 
            1. Go to https://ico.safereum.eu/user/contribute or click 'Buy Token' button at your launchpad account dashboard.<strong>(MUST BE LOGGED IN)</strong> <br/>
            2. Choose your payment currency (<strong>BTC/ETH/LTC/XLM/BNB/USDC</strong>) Must be cryptocurrency to work. <br/>
            3. Type in Amount of SFX you want to purchase, calculator will tell you exact amount of your currency you need for purchase. <br/> 
            4. Click on 'Make Payment' button at the bottom of the window. <br/> 
            5. Click 'Direct Crypto Transfer' button and accept purchase agreement by clicking the box on the left, then click 'Buy Token Now' button. <br/> 
            6. Open you personal wallet e.g., Metamask, choose the cryptoccurency you choosen on payment screen and click "Send" button. <br />
            7. Copy the wallet address shown at ICO page and paste it to your personal wallet sending screen, fill the exact amount and confirm transfer.<br />
            8. Direct Deposits are verified manually and it may take up to 24 hours for your deposit to be confirmed.<br />
            <div className="litepaper_text">
            <p className="litepaper_first_p" ><strong>Personal Wallet</strong><br/><br/> 
            1. Go to https://ico.safereum.eu/user/contribute or click 'Buy Token' button at your launchpad account dashboard.<strong>(MUST BE LOGGED IN)</strong> <br/>
            2. Choose your payment currency (<strong>BTC/ETH/LTC/XLM/BNB/USDC</strong>) Must be cryptocurrency to work. <br/>
            3. Type in Amount of SFX you want to purchase, calculator will tell you exact amount of your currency you need for purchase. <br/> 
            4. Click on 'Make Payment' button at the bottom of the window. <br/> 
            5. Click 'Direct Crypto Transfer' button and accept purchase agreement by clicking the box on the left, then click 'Buy Token Now' button. <br/> 
            6. Open you personal wallet e.g., Metamask, choose the cryptoccurency you choosen on payment screen and click "Send" button. <br />
            7. Copy the wallet address shown at ICO page and paste it to your personal wallet sending screen, fill the exact amount and confirm transfer.<br />
            8. Direct Deposits are verified manually and it may take up to 24 hours for your deposit to be confirmed.<br />

            </p></div>
            <div className="see_more_lite_paper">

            <BtnCta
              body='Watch Video Tutorial'
              link='https://www.youtube.com'
            />
          </div>  
              </p>
            
          </div>
        </div>
      </div>
    </div>
  )
}
