import './AboutInterFi.scss';
import AboutInterFi from './images/InterFiLogo.png';
import CategoryName from '../CategoryName/CategoryName';


export default function About() {
  return (
    <div className="aboutInter">
      <div id="aboutInter"></div>
      <div className="container">
      <div className="aboutINT">
            <img src={AboutInterFi} alt="" />
          </div>
        <CategoryName
          title='InterFi Network'
          subtitle='InterFi ECHELON-1 Smart Contract Auditing is Reliable, Fast, Secure, and Cost-Effective!'
        />
        
        <div className="about_wrapper">
          <p className="who_we_are_p"><b>WHAT IS INTERFI?</b><br />
          InterFi provides professional, thorough, fast, and easy-to-understand smart contract security audit. We do in-depth and penetrative static, manual, automated, and intelligent analysis of the smart contract. Some of our automated scans include tools like ConsenSys MythX, Mythril, Slither, Surya. We can audit custom smart contracts, DApps, NFTs, etc. </p>
            
          
          <p className="what_are_the"> <b>SMART CONTRACT AUDIT</b><br />
          A smart contract audit is an extensive analysis of solidity code. InterFi provides fast, thorough, affordable, and easy-to-understand smart contract security audit. We do manual, static, and dynamic solidity source code analysis.
            <br /></p>
            <p className="what_are_the"> <b>CONTRACT DEVELOPMENT</b><br />
            Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. InterFi can develop and test custom smart contracts, staking & presale contracts, and NFT contracts.
            <br /></p>
            <p className="what_are_the"> <b>PROJECT VERIFICATION</b><br />
            Project Verification is an in-depth analysis of the public project. This analysis is freely accessible. InterFi provides independent project evaluation by assessing vision, team, tech stack, maturity, funding, and community.</p>
        </div>

      </div>
    </div>
  )
}