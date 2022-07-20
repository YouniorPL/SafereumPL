import CategoryName from '../CategoryName/CategoryName'
import './RoadMap.scss'
import TokenShip from './images/TOKENSHIP.svg'
import TokenShipMob from './images/TOKENSHIPMOB.svg'
import Ruler_Astro from '../../Assets/icons/Ruler_Astro.svg'
import SlickSlider from '../../Components/SlickSlider/SlickSlider'
import April from './images/STAGE1.png'
import May from './images/STAGE2.png'
import June from './images/STAGE3.png'
import July from './images/STAGE4.png'
import August from './images/STAGE5.png'
import September from './images/STAGE6.png'
import October from './images/STAGE7.png'
import November from './images/STAGE8.png'
import January_2021_2022 from './images/STAGE9.gif'
import Planet from '../Planet/Planet'
import dots_1200 from './images/dots_1200.svg'
import cta_btn from './images/cta_btn.svg'

const data = [
  {
    img: April,
    date: 'May 2021',
    text: ['Rounds 4-7 Launching Safereum Coin for Public.'
    ],
    month: 'Stage 1',
  },
  {
    img: May,
    date: 'MAY 2021',
    text: [
      'Deploying Andromeda Token.',
      'Expanding idea of the Andromeda Exchange.'
    ],
    month: 'Stage 2'
  },
  {
    img: June,
    date: 'JUNE 2021',
    text: [
      'Creating first website of Andromeda',
      'Creating Social Media for Andromeda Exchange',
      'Preparing first marketing strategies',
      'Start of the private presale',
      'Starting Airdrop Program.',
    ],
    month: 'Stage 3',
  },
  {
    img: July,
    date: 'JULY 2021',
    text: [
      'Rebranding to Andromeda 2.0',
      'Finishing new website',
      'First Public Presale',
      'End of Airdrop program.',
    ],
    month: 'Stage 4',
  },
  {
    img: August,
    date: 'AUGUST 2021',
    text: [
      'Second Public Presale',
      'Preparing for Launchpad ICO',
      'Publishing concept of Andromeda Exchange',
      'Publishing schedule of LiveStreams and AMA.',
    ],
    month: 'Stage 5',
  },
  {
    img: September,
    date: 'SEPTEMBER 2021',
    text: [
      'Alpha Preview of the Exchange',
      'Establishing first partnership',
      'Expanding Andromeda team.',
    ],
    month: 'Stage 6',
  },
  {
    img: October,
    date: 'OCTOBER 2021',
    text: [
      'Announcement of the first Pre-Listed token',
      'Ending of the Launchpad ICO.'],
    month: 'Stage 7',
  },
  {
    img: November,
    date: 'NOVEMBER 2021',
    text: [
      'Beta preview of the Exchange',
      'Second Partnership.',
    ],
    month: 'Stage 8',
  },
  {
    img: January_2021_2022,
    date: 'DECEMBER 2021/JANUARY 2022',
    text: [
      'Pre-Listing several new tokens',
      'Unlocking Launchpad tokens ',
      'Listing Andromeda Token on first exchange.',
    ],
    month: 'Stage 9'
  },
]

export default function RoadMap() {
  function switchPlanet(planet) {

    switch (planet) {
      case 'Stage 1':
        moveTo(2, 20)
        activateRuler(0)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'Stage 2':
        moveTo(13, 62)
        activateRuler(1)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'Stage 3':
        moveTo(23, 67)
        activateRuler(2)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'Stage 4':
        moveTo(36, 65)
        activateRuler(3)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'Stage 5':
        moveTo(40, 34)
        activateRuler(4)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'Stage 6':
        moveTo(61, 35)
        activateRuler(5)
        moveRullerTo(0)
        hideClickBanner()
        break;
      case 'Stage 7':
        moveTo(75, 19)
        activateRuler(6)
        moveRullerTo(600)
        hideClickBanner()
        break;
      case 'Stage 8':
        moveTo(85, 26)
        activateRuler(7)
        moveRullerTo(600)
        hideClickBanner()
        break;
      case 'Stage 9':
        moveTo(87, 64)
        activateRuler(8)
        moveRullerTo(600)
        hideClickBanner()
        break;
      default:
        break;
    }
  }
  function moveRullerTo(left) {
    const ruler = document.querySelector('.roadmap__wrap')
    ruler.scrollLeft = left
  }
  function moveTo(left, top) {
    const tokenship = document.querySelector('.milkyway__tokenship')
    tokenship.style.left = `${left}%`
    tokenship.style.top = `${top}%`
  }
  function activateRuler(i) {
    const monthes = document.querySelectorAll('.n01')
    monthes.forEach(month => {
      month.classList.remove('n01--active')
    });
    monthes[i].classList.add('n01--active')

    const planets = document.querySelectorAll('.milkyway .planet')
    planets.forEach(planet => {
      planet.classList.remove('planet--active')
    });
    planets[i].classList.add('planet--active')
  }
  function hideClickBanner() {
    const ctaBtn = document.querySelector('.milkyway__cta').style.display = 'none'
    if (ctaBtn) {
      return
    }
  }
  return (
    <div className="roadmap">
      <div id="roadmap"></div>
      <div className="container">
        <CategoryName
          title='ROADMAP'
          subtitle='HERE YOU CAN SEE MILESTONES WE NEED TO COMPLETE FOR OUR PROJECT TO BE FINALIZED.'/>
        <div className="slickslider">
          <div className="title">
            <div className="title__text">
            </div>
            <div className="title__title title__title--big"></div>
          </div>
        </div>
        <div className="roadmap__wraper">
          <div className="tokenship_buttons">
            <img className="tokenship" src={TokenShipMob} alt="" />

          </div>
          <div className="month_column">
            <SlickSlider
              data={data}
            />
          </div>
        </div>
        <div className="milkyway">
          <div className="milkyway__wrap">
            <img className="milkyway__dots" src={dots_1200} alt="" />
            {
              data.map(({ img, month }) => {
                return (
                  <Planet key={month}
                    img={img}
                    txt={month}
                    switchPlanet={() => switchPlanet(month)}
                  />
                )
              })
            }
            <Planet className="milkyway__tokenship"
              img={TokenShip}
              txt='Development'
              switchPlanet={() => switchPlanet()}
            />
            <img className="milkyway__cta" src={cta_btn} alt="" />
          </div>
        </div>
        <div className="roadmap__wrap">
          <div className="roadmap__ruler">
            <img className="ruler_astro" src={Ruler_Astro} alt="" />
            <div className="time_title">
              <div className="n01">
                <p className="number_time">01</p>
                <span><strong>Coin Development</strong><br />
                  <ul>
                  Rounds 4-7
                    <li>
                  Launching Safereum Coin for Public.
                </li>
                  </ul>
                </span>
              </div>
              <div className="n01">
                <p className="number_time">02</p>
                <span><strong>Safepay & Safenet</strong></span>
                <ul>
                Rounds 8-13
                  <li>
                    Enabling primary version of Safepay.
              </li>
                  <li>
                    Expanding list of supported companies.
              </li>
              <li>
                    Safechain v0.1.
              </li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">03</p>
                <span><strong>Essentials</strong></span>
                <ul>
                  Rounds 14-19
                  <li>
                    Deploying SafeWallet.
              </li>
                  <li>
                    Enabling Safereum Smart Contracts.
              </li>
                  <li>
                    Deploying SafeXSwap.
              </li>
                  <li>
                    Deploying Early version of SafeWRK.
              </li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">04</p>
                <span><strong>Centralized Exchange</strong></span>
                <ul>
                  Round 20
                  <li>Safereum Bridge for cross-chain.</li>
                  <li>Early version of SafeXchange.</li>
                  </ul>
              </div>
              <div className="n01">
                <p className="number_time">05</p>
                <span><strong>Advanced Marketing</strong></span>
                <ul>
                  Rounds 21-25
                  <li>Minor and Major exchanges listings.</li>
                  <li>Establishment of Safereum Ambassadors.</li>
                  <li>Major Partnership.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">06</p>
                <span><strong>Major Upgrade</strong></span>
                <ul>
                  Rounds 26-29
                  <li>Beta Access to SafeXchange.</li>
                  <li>Upgrade for all Safereum products.</li>
                  <li>Expanding Safereum team.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">07</p>
                <span><strong>Safechain & More.</strong></span>
                <ul>
                  Rounds 30-35
                  <li>Launching Blockfund platform.</li>
                  <li>SafeChain upgrade to v1.0.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">08</p>
                <span><strong>The Last Push</strong></span>
                <ul>
                  Rounds 36-45
                  <li>Finalization of the project.</li>
                  <li>Expanding project services.</li>
                  <li>Listing Safereum Coin on Top exchanges.</li>
                  <li>Starting 30 days countdown for official launchpad finish.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">09</p>
                <span><strong>Major Marketing</strong></span>
                <ul>
                  Bonus Rounds
                  <li>Global Product Marketing.</li>
                  <li>Unlocking launchpad coins.</li>
                  <li>Providing additional liquidity for SafeSwap USD/SFX pair.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">A</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="container__information">All above information are only estimated, events may be completed sooner or later than it states.</h2>
      </div>
    </div>
  )
}