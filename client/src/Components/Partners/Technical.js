import CategoryName from '../CategoryName/CategoryName'
import './Technical.scss'
import ApolloX from './logo/ApolloX.png'
//import InterFi from './logo/InterFi.png'
import SafereumTeam from './images/Technical.png'
import DPS from './logo/DPS.png'

export default function SafereumTea() {
  return (
    <div className="andromedateam">
      <div id="team"></div>
      
      <div className="container">
      <div className="austronaut"> {
          <img src={SafereumTeam} alt="" />
        }
        </div>
        <CategoryName
          title='TECHNICAL PARTNERSHIP'
          subtitle="PARTNERS FROM THIS LIST HELP US TO BUILD OUR PRODUCTS BY PROVIDING FUNDS, KNOWLEDGE OR TECHNICAL BACKUP."/>
        <div className="name_position_wrapper">
          <div className="name_position">
            <img src={ApolloX} alt="" />
            <div className="name_position_p">
              <p className="name_team">ApolloX</p>
              <div className="position_team_link">
                <p className="position_team">CEX/DEX Hybrid</p>
                <a href="https://www.safereum.eu/ApolloX"><svg width="24" height="50" viewBox="0 -10 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="black"/><path d="M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z" fill="black"/>
                </svg></a>
              </div>
            </div>
          </div>
          <div className="name_position">
            <img src={DPS} alt="" />
            <div className="name_position_p">
              <p className="name_team">DappPlayStore</p>
              <div className="position_team_link">
                <p className="position_team">Dapp Segregator</p>
                <a href="https://www.safereum.eu/DappPlayStore"> <svg width="24" height="50" viewBox="0 -10 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 5H8V9H6V3H22V21H6V15H8V19H20V5Z" fill="black"/><path d="M13.0743 16.9498L11.6601 15.5356L14.1957 13H2V11H14.1956L11.6601 8.46451L13.0743 7.05029L18.024 12L13.0743 16.9498Z" fill="black"/>
                </svg></a>
              </div>
            </div>
          </div>
          </div>


      </div>
    </div>
  )
}
