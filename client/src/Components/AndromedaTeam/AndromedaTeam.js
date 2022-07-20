import CategoryName from '../CategoryName/CategoryName'
import './AndromedaTeam.scss'
import Karol from '../../Assets/andromeda_team/Karol.png'
import Amit from '../../Assets/andromeda_team/Amit.png'
import Mathieu from '../../Assets/andromeda_team/Mathieu.png'
import AndromedaTeam from '../../Assets/photos/astronaut.png'

export default function AndromedaTea() {
  return (
    <div className="andromedateam">
      <div id="team"></div>
      <div className="container">
        <CategoryName
          title='ANDROMEDA CORE TEAM'
          subtitle="SUCCESS STORIES ARE WRITTEN BY 
        PEOPLE WHO STUBBORNLY PURSUE 
        THEIR GOALS, AND THEY DON'T 
        STEP BACK!"/>
        <div className="name_position_wrapper">
          <div className="name_position">
            <img src={Karol} alt="" />
            <div className="name_position_p">
              <p className="name_team">KAROL ZACHARSKI</p>
              <div className="position_team_link">
                <p className="position_team">CEO / FOUNDER</p>
                <a href="https://t.me/Safereum_CEO"> <svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" fill="#CCE1FF"/>
                </svg></a>
              </div>
            </div>
          </div>
          <div className="name_position">
            <img src={Amit} alt="" />
            <div className="name_position_p">
              <p className="name_team">AMIT VAID</p>
              <div className="position_team_link">
                <p className="position_team">BLOCKCHAIN DEVELOPER</p>
                <a href="https://www.linkedin.com/in/amit-vaid/"> <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12.1615V19.5556H15.7134V12.6567C15.7134 10.9236 15.0933 9.74089 13.5417 9.74089C12.3572 9.74089 11.6524 10.538 11.3423 11.309C11.2292 11.5847 11.2001 11.9683 11.2001 12.3542V19.5556H6.91198C6.91198 19.5556 6.96973 7.87112 6.91198 6.66052H11.1997V8.48835C11.191 8.50202 11.1797 8.51676 11.1715 8.53001H11.1997V8.48835C11.7693 7.61096 12.7867 6.35758 15.0638 6.35758C17.885 6.35753 20 8.20061 20 12.1615ZM2.42646 0.444443C0.959506 0.444443 0 1.40665 0 2.67198C0 3.90973 0.931746 4.90114 2.36954 4.90114H2.39818C3.89355 4.90114 4.82352 3.90992 4.82352 2.67198C4.79535 1.40665 3.89355 0.444443 2.42646 0.444443ZM0.254675 19.5556H4.54114V6.66052H0.254675V19.5556Z" fill="#CCE1FF" />
                </svg></a>
              </div>
            </div>
          </div>

          <div className="name_position">
            <img src={Mathieu} alt="" />
            <div className="name_position_p">
              <p className="name_team">MATHIEU GUICHETEAU</p>
              <div className="position_team_link">
                <p className="position_team">GRAPHIC DESIGNER</p>
                <a href="https://www.linkedin.com/in/mathieu-guicheteau/"> <svg width="20" height="20" viewBox="0 0 20 20" class="bi bi-telegram" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12.1615V19.5556H15.7134V12.6567C15.7134 10.9236 15.0933 9.74089 13.5417 9.74089C12.3572 9.74089 11.6524 10.538 11.3423 11.309C11.2292 11.5847 11.2001 11.9683 11.2001 12.3542V19.5556H6.91198C6.91198 19.5556 6.96973 7.87112 6.91198 6.66052H11.1997V8.48835C11.191 8.50202 11.1797 8.51676 11.1715 8.53001H11.1997V8.48835C11.7693 7.61096 12.7867 6.35758 15.0638 6.35758C17.885 6.35753 20 8.20061 20 12.1615ZM2.42646 0.444443C0.959506 0.444443 0 1.40665 0 2.67198C0 3.90973 0.931746 4.90114 2.36954 4.90114H2.39818C3.89355 4.90114 4.82352 3.90992 4.82352 2.67198C4.79535 1.40665 3.89355 0.444443 2.42646 0.444443ZM0.254675 19.5556H4.54114V6.66052H0.254675V19.5556Z" fill="#CCE1FF" />
                </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div className="austronaut"> {
          <img src={AndromedaTeam} alt="" />
        }
        </div>
      </div>
    </div>
  )
}
