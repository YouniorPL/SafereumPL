import './DirectDepo.scss'
import directPlanet from '../../../Assets/photos/DirectDepo.png'
import CategoryName from '../../CategoryName/CategoryName'
import BtnCta from '../../BtnCta/BtnCta'

export default function direct() {
  return (
    <div className="direct">
      <div id="direct"></div>
      <div className="container">
        <CategoryName
          title='Direct Deposit'
          subtitle='You can make a purchase using personal wallet (Metamask, Trust Wallet etc.) or any exchange account (Binance, Kucoin, etc.)'
          
        />
                  <div className="directplanet">
            <img src={directPlanet} alt="" />
          </div>
        <div className="direct_wrapper">
          <p className="who_we_are_p"><strong>Personal Wallet:</strong><br /> <br />
            1. Go to https://ico.safereum.eu/user/contribute or click 'Buy Token' button at your launchpad account dashboard.<strong>(MUST BE LOGGED IN)</strong> <br/>
            2. Choose your payment currency (<strong>BTC/ETH/LTC/XLM/BNB/USDC</strong>) Must be cryptocurrency to work. <br/>
            3. Type in Amount of SFX you want to purchase, calculator will tell you exact amount of your currency you need for purchase. <br/> 
            4. Click on 'Make Payment' button at the bottom of the window. <br/> 
            5. Click 'Direct Crypto Transfer' button and accept purchase agreement by clicking the box on the left, then click 'Buy Token Now' button. <br/> 
            6. Open you personal wallet e.g., Metamask, choose the cryptoccurency you choosen on payment screen and click "Send" button. <br />
            7. Copy the wallet address shown at ICO page and paste it to your personal wallet sending screen, fill the exact amount and confirm transfer.<br />
            8. Direct Deposits are verified manually and it may take up to 24 hours for your deposit to be confirmed.<br />
          <br />
          </p>
        
        <div className='direct_wrapper'>
        <p className='who_we_are_p'> <strong> Deposit From Exchange:</strong> <br /> <br />
        1. Complete personal wallet instructions (1 to 5) <br/>
        2. Login to your exchange account e.g., Binance <br />
        3. Find cryptocurrency in your balance that you choosen on payment screen (For Example: BNB) <br />
        4. Click on "Withdraw" or any button that allows you to send said currency from your account.<br />
        5. Copy the wallet address shown at ICO page and paste it to your personal wallet sending screen, fill the exact amount and confirm transfer.<br />
        6. Direct Deposits are verified manually and it may take up to 24 hours for your deposit to be confirmed.<br /><br />
        
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