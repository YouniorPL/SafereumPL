import './RulesG.scss'
import RulesGimg from '../../Assets/photos/RulesGimg.png'
import CategoryName from '../CategoryName/CategoryName'




export default function Litepaper() {
  return (
    <div className="litepaper">
      <div id="safepay">

      </div>
      <div className="container">
        <div className="litepaper_wrapper">

          <CategoryName
            title='RULES'
            subtitle='PLEASE READE BELOW RULES BEFORE PARTICIPATING' />
          <div className="litepaper_text">
            <p className="litepaper_first_p" ><strong>1: </strong>
            TO PARTICIPATE YOU MUST BE AT LEAST 18 YEARS OLD.<br></br>
              </p>
            <img src={RulesGimg} alt="" />
            <p className="litepaper_second_p"><strong>2: </strong> BELARUS AND RUSSIA CITIZENTS ARE RESTRICTED FROM PARTICIPATING.</p>
              <p className="litepaper_second_p"><strong>3: </strong> PURCHASES BETWEEN ROUNDS 1 AND 33 ONLY ARE EGLIBLE FOR TICKETS.</p>
              <p className="litepaper_second_p"><strong>4: </strong> ANY EXPLOITATION WILL RESULT IN PERMANENT LOCK OF THE ACCOUNT, FROM THERE PARTICIPANT CAN WRITE AN APPEAL FROM THE DECISION.</p>
              <p className="litepaper_second_p"><strong>5: </strong> TICKETS ARE NOT EXCHANGABLE NOR TRADEABLE.</p>
              <p className="litepaper_second_p"><strong>6: </strong> WINNER MAY CHOOSE ONLY ONE REWARD: LAMBORGHINI HURACAN OR $250,000 PAID WITH ANY CRYPTOCURRENCY.</p>
              <p className="litepaper_second_p"><strong>7: </strong> LAMBORGHINI DELIVERY TIME DEPENDS ON AVAILABILITY IN YOUR COUNTRY, FOR WINNER COMFORT WE DECIDED TO LEAVE HIM POSSIBILITY OF CHOOSING SETTINGS OF THE CAR.</p>
              <p className="litepaper_second_p"><strong>8: </strong> CASH REWARD IS PAID WITHIN 7 DAYS AFTER THE WINNER WILL PROVIDE US DETAILS (CURRENCY, WALLET ADDRESS).</p>
              <p className="litepaper_second_p"><strong>9: </strong> IF WINNER WILL NOT APPLY FOR REWARD WITHIN 14 DAYS COUNTING FROM THE DAY OF RAFFLE, NEW WINNER WILL BE PICKED.</p>
              <p className="litepaper_second_p"><strong>10: </strong> NO EXTERNAL COMPANY IS RESPONSIBLE FOR THE GIVEAWAY (INCLUDING LAMBORGINI COMPANY) MEANING YOU SHOULD NOT CONTACT OTHER COMPANIES ABOUT OUR GIVEAWAY.</p>

          </div>
        </div>
      </div>
    </div>
  )
}
