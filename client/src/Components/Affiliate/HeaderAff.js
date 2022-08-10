import CategoryName from '../CategoryName/CategoryName';
import './HeaderAff.scss';


export default function HeaderLitepaper() {
  return (
    <div className="headerlitepaper">
      <div className="container">
        <a className="come_back" href="/">
          <p>GO BACK</p>
        </a>
        <CategoryName
          title="AFFILIATE PROGRAM"
          subtitle="YOU DON'T NEED TO INVEST YOUR MONEY TO BECOME AFFILIATE, SIMPLY FOLLOW THE INSTRUCTIONS BELOW TO EARN MONEY!"
        />
        <div className="seemore_text">
          <p className="seemore">READ MORE</p>
        </div>
      </div>
    </div>
  )
}