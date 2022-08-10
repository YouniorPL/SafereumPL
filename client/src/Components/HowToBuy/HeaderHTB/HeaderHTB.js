import CategoryName from '../../CategoryName/CategoryName';
import './HeaderHTB.scss';


export default function HeaderHTB() {
  return (
    <div className="headerlitepaper">
      <div className="container">
        <a className="come_back" href="/">
          <p>GO BACK</p>
        </a>
        <CategoryName
          title="HOW TO BUY"
          subtitle="IF YOU WANT TO BUY SAFEREUM COIN, SIMPLY FOLLOW INSTRUCTIONS BELOW, WHOLE PROCESS IS QUICK AND SIMPLE!"
        />
        <div className="seemore_text">
          <p className="seemore">INSTRUCTIONS</p>
        </div>
      </div>
    </div>
  )
}