import BtnCta from '../BtnCta/BtnCta'
import './Docs.scss'
import docs_img from './images/Img_09.jpg'

export default function docs404Comp() {
  return (
    <section className="docs">
      <div className="container">
        <div className="docs__left">
          <div className="docs__block">
            <div className="docs__title">
              Documentation
            </div>
            <div className="docs__subtitle">
              CLICK ON THE BUTTONS TO READ MORE DETAILED INFORMATIONS ABOUT SAFEREUM NETWORK.
            </div>
            
          </div>

          <BtnCta
            grid='1'
            body='WHITEPAPER'
            link='https://drive.google.com/drive/folders/10x1b57zNwqpeBdkChw7zU2VHfISchu8M?usp=sharing'
            className='docs__btn'
          />

        </div>
        <div className="docs__right">
          
          <img src={docs_img} alt="astronaut" className='docs__img' />
        </div>
        
      </div>
    </section>
  )
}