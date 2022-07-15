import './Exchange.scss'
import { Component } from 'react'
import BtnExc from './BtnExc'


const { REACT_APP_ONE_SFX_IN_USD } = process.env

class Exchange extends Component {
  constructor(props) {
    super(props)
    this.state = {
      safereum:'',
      usd: '',
      proportion: REACT_APP_ONE_SFX_IN_USD
    }
    this.usdToSfx = this.usdToSfx.bind(this)

  }

  usdToSfx(event) {
    //eslint-disable-next-line
    let newInp = event.target.value.replace(/[^0-9\.]/g,"").replace(/\.{2,}/,'.')
    console.log(`newInp - ${newInp}`);
    if (newInp > 10001) {
    newInp = 10000
    }
    event.target.value = newInp
    this.setState({
      usd: newInp,
      safereum: newInp / this.state.proportion 
    
    })
  console.log(this.state);
  }
  render() {
    return (
      <div className="exchange">
        <form className="exchange__form">
          <div className="exchange__inputs">
            <input className="exchange__input exchange__input--usd" type="text" placeholder="Choose your USD amount" pattern="[\d*]" onChange={this.usdToSfx} />

            <input className="exchange__input exchange__input--safereum" type="text" placeholder="Here we display SFX amount" value={this.state.safereum} enabled />
          </div>
          <div className="exchange__buttons">
            <BtnExc
             body='Buy Now'
             link='https://ico.safereum.eu/register'
             />
            <BtnExc
             body='⬆ SFX Calculator ⬆'
             />
          </div>
        </form>
      </div>
    );
  }
}

export default Exchange;