import './Paypal.scss'
import paypalPlanet from '../../../Assets/photos/paypal.png'
import CategoryName from '../../CategoryName/CategoryName'
import BtnCta from '../../BtnCta/BtnCta'



export default function Paypal() {
  return (
    <div className="paypal">
      <div id="paypal">

      </div>
      <div className="container">
        <div className="paypal_wrapper">

          <CategoryName
            title='PayPal'
            subtitle='Purchase using PayPal balance or credit cards without account. In some rare cases PayPal may ask you for additional verification.(KYC)' />
            <img src={paypalPlanet} alt="" />
          <div className="paypal_text">
            <p className="paypal_first_p" ><strong>PayPal Balance or Credit Card.</strong><br/><br/> 
            1. Go to https://ico.safereum.eu/user/contribute or click 'Buy Token' button at your launchpad account dashboard.<strong>(MUST BE LOGGED IN)</strong> <br/>
            2. Choose your payment currency (USD/EUR/TRY/SGD/PLN/GBP) Must be non-crypto to work. <br/>
            3. Type in Amount of SFX you want to purchase, calculator will tell you exact amount of your currency you need for purchase. <br/> 
            4. Click on 'Make Payment' button at the bottom of the window. <br/>  
            5. Click 'Pay with PayPal' button and accept purchase agreement by clicking the box on the left, then click 'Buy Token Now' button. <br/>
            6. You will be redirected to PayPal website where you must to login to your PayPal account or click 'Pay with card', there you need to follow instructions provided by PayPal.
          
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
