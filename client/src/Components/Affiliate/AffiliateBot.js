import './AffiliateBot.scss'
import RulesGimg from '../../Assets/photos/howtouse.png'
import CategoryName from '../CategoryName/CategoryName'




export default function affiliate() {
  return (
    <div className="affiliate">
      <div id="HowTo">

      </div>
      <div className="container">
        <div className="affiliate_wrapper">

          <CategoryName
            title='How To Use'
            subtitle='BELOW INSTRUCTIONS WILL TEACH YOU HOW TO USE OUR AFFILIATE SYSTEM, PLEASE READ THEM BEFORE ASKING QUESTIONS.' />
                        <img src={RulesGimg} alt="" />
          <div className="affiliate_text">
            <p className="affiliate_first_p" ><strong>1: </strong>
            REGISTER / LOGIN TO YOUR ICO ACCOUNT https://ico.safereum.eu<br></br>
              </p>

            <p className="affiliate_second_p"><strong>2: </strong> CLICK ON THE ICON ASIDE OF YOUR NAME (TOP-RIGHT CORNER) THEN CLICK "REFERRAL" OR SIMPLY GO TO <strong>ICO.SAFEREUM.EU/USER/REFERRAL.</strong> </p>
              <p className="affiliate_second_p"><strong>3: </strong> AT REFERRAL PAGE YOU WILL FIND IMPORTANT INFORMATION ABOUT THE AFFILIATE SYSTEM AS WELL AS LIVE DATA OF YOUR REFERRALS.</p>
              <p className="affiliate_second_p"><strong>4: </strong> COPY LINK UNDER "REFERRAL URL"</p>
              <p className="affiliate_second_p"><strong>5: </strong> NOW INVITE YOUR FRIENDS BY SENDING THEM YOUR PERSONAL LINK</p>
              <p className="affiliate_second_p"><strong>6: </strong> EVERY PURCHASE MADE BY YOUR FRIENDS WILL REWARD YOU WITH 20% COMMISIONS.</p>
              <p className="affiliate_second_p"><strong>7: </strong> YOUR FRIENDS WILL RECEIVE 5% BONUS ON EVERY PURCHASE AS WELL!</p>
              <p className="affiliate_second_p"><strong>8: </strong> REMEMBER THAT ONLY THE FIRST REWARD IS PAID INSTANTLY, AFTER FIRST REWARD YOU WILL RECEIVE PAYMENTS EVERY MONDAY.</p>
              <p className="affiliate_second_p"><strong>9: </strong> AFTER FIRST REWARD IS ASSIGNED TO YOUR PROFILE, WE WILL CONTACT YOU VIA EMAIL, MAKE SURE YOU HAVE ACCESS TO YOUR CURRENT ADDRESS.</p>

          </div>
        </div>
      </div>
    </div>
  )
}
