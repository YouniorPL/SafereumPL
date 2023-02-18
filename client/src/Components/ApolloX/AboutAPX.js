import './AboutAPX.scss';
import AboutPlanet from './images/ApolloXLogo.png';
import CategoryName from '../CategoryName/CategoryName';


export default function About() {
  return (
    <div className="aboutapx">
      <div id="aboutapx"></div>
      <div className="container">
      <div className="aboutplanet">
            <img src={AboutPlanet} alt="" />
          </div>
        <CategoryName
          title='ApolloX'
          subtitle='APOLLOX IS THE LEADING DECENTRALIZED SOLUTION SHAPING WEB3 TRADING FOR RETAIL TRADERS AND BUSINESSES.'
        />
        
        <div className="about_wrapper">
          <p className="who_we_are_p"><b>WHAT IS APOLLOX?</b><br />
          ApolloX is the leading decentralized solution shaping Web3 trading. 
          Our two main products consist of ApolloX DEX, the biggest decentralized crypto derivatives exchange on BNB Chain, and ApolloX DEX Engine: a ready-to-go trading solution for businesses to launch their own derivatives DEX. 
          Visit www.apollox.finance and www.apollox.finance/en/broker. </p>
            
          
          <p className="what_are_the"> <b>THE APOLLOX ADVANTAGE</b><br />
          ApolloX aims to offer CEX-like trading experiences of crypto derivatives to DEX users, while ensuring that users hold custody over their funds. With a unique order-book matching and settlement model, ApolloX DEX provides deep liquidity and market depth. Users can choose 8 different types of collateral to trade ApolloX perpetual contracts.
            <br /></p>
            <p className="what_are_the"> <b>ENSURING ECOSYSTEM GROWTH</b><br />
            The ApolloX DEX Engine allows partners to leverage ApolloX DEX's stable trading infrastructure, deep liquidity and marketing support while earning commission on transaction fees. DEX Engine has onboarded 17 partners including PancakeSwap and SafePal Wallet since its July launch, and continues to onboard more on a weekly basis. 
            <br /></p>
            <p className="what_are_the"> <b>COMMUNITY ACTIVITY REWARDS</b><br />
            ApolloX’s Trading Rewards Program, 20% referral commission and APX staking in DAO help users to boost rewards. On a daily basis, when users trade at least 100 USDT on ApolloX, they can claim 20 APX the next day. To celebrate ApolloX’s successful first year, if users’ trading volume hit a certain threshold, they will win APX mystery boxes.  </p>
        </div>

      </div>
    </div>
  )
}