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
    date: 'DONE ✓',
    text: ['Finalization of rebranding.'
    ],
    month: 'Stage 1',
  },
  {
    img: May,
    date: 'ACTIVE ⌛',
    text: [
      'Enabling alpha version of SafeSWAP.Futures',
      'Enabling alpha version of SafeSWAP.DEX',
    ],
    month: 'Stage 2'
  },
  {
    img: June,
    date: 'UPCOMING NEXT ⪼',
    text: [
      'Enabling alpha version of Safepay.',
      'Expanding network of supported companies.',
    ],
    month: 'Stage 3',
  },
  {
    img: July,
    date: 'UPCOMING NEXT ⪼',
    text: [
      'Deploying alpha version of SafeWRK platform.',
      'Expanding userbase.'
    ],
    month: 'Stage 4',
  },
  {
    img: August,
    date: 'UPCOMING NEXT ⪼',
    text: [
      'Deploying Safereum Coin at Velas Blockchain',
      'Listing Safereum Coin on minor centralized exchanges.',
      'Launching several campaings for increased exposure of the project.'
    ],
    month: 'Stage 5',
  },
  {
    img: September,
    date: 'UPCOMING NEXT ⪼',
    text: [
      'Updating products to beta version.',
      'Upgrading ICO Launchpad platform.',
      'Expanding Safereum team.',
    ],
    month: 'Stage 6',
  },
  {
    img: October,
    date: 'UPCOMING NEXT ⪼',
    text: [
      'Deploying Testnet version of SafeChain.',
      'Launching Public tests of SafeChain.'
    ],
    month: 'Stage 7',
  },
  {
    img: November,
    date: 'UPCOMING NEXT ⪼',
    text: [
      'Launching final version of Safereum products.',
      'Deploying Safepay Terminals for firms.',
      'Major testing for Safechain Terminals',
    ],
    month: 'Stage 8',
  },
  {
    img: January_2021_2022,
    date: 'UPCOMING NEXT ⪼',
    text: [
      'Global Product Marketing.',
      'Unlocking launchpad coins.',
      'Deploying Safechain 1.0',
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
                <span><strong>Rebranding</strong><br />
                  <ul>
                  DONE ✓
                    <li>
                  Finalization of rebranding.
                </li>
                <li>
                  Relaunch of ICO Launchpad.
                </li>
                  </ul>
                </span>
              </div>
              <div className="n01">
                <p className="number_time">02</p>
                <span><strong>SafeSwap</strong></span>
                <ul>
                ACTIVE ⌛
                  <li>
                    Deploying alpha version of SafeSWAP.Futures
                    
              </li>
                  <li>
                    Deploying alpha version of SafeSWAP.DEX
              </li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">03</p>
                <span><strong>Safepay</strong></span>
                <ul>
                  UPCOMING NEXT ⪼
                  <li>
                    Deploying alpha version of Safepay.
              </li>
                  <li>
                    Expanding network of supported companies.
              </li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">04</p>
                <span><strong>SafeWRK</strong></span>
                <ul>
                  UPCOMING NEXT ⪼
                  <li>Deploying alpha version of SafeWRK platform.</li>
                  <li>Expanding userbase.</li>
                  </ul>
              </div>
              <div className="n01">
                <p className="number_time">05</p>
                <span><strong>Marketing</strong></span>
                <ul>
                UPCOMING NEXT ⪼
                  <li>Deploying Safereum Coin at Velas Blockchain</li>
                  <li>Listing Safereum Coin on minor centralized exchanges.</li>
                  <li>Launching several campaings for increased exposure of the project.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">06</p>
                <span><strong>Major Update</strong></span>
                <ul>
                UPCOMING NEXT ⪼
                  <li>Updating products to beta version.</li>
                  <li>Upgrading ICO Launchpad platform.</li>
                  <li>Expanding Safereum team.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">07</p>
                <span><strong>Safechain Alpha</strong></span>
                <ul>
                UPCOMING NEXT ⪼
                  <li>Deploying Testnet version of SafeChain.</li>
                  <li>Launching Public tests of SafeChain.</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">08</p>
                <span><strong>Major Update</strong></span>
                <ul>
                UPCOMING NEXT ⪼
                  <li>Launching final version of Safereum products.</li>
                  <li>Deploying Safepay Terminals for firms.</li>
                  <li>Major testing for Safechain Terminals</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">09</p>
                <span><strong>Finish</strong></span>
                <ul>
                UPCOMING NEXT ⪼
                  <li>Global Product Marketing.</li>
                  <li>Unlocking launchpad coins.</li>
                  <li>Deploying Safechain 1.0</li>
                </ul>
              </div>
              <div className="n01">
                <p className="number_time">A</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="container__information">All of above milestones are estimate of our plans, please keep in mind that some of them may come in different order.</h2>
      </div>
    </div>
  )
}