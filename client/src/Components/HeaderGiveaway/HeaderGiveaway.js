import CategoryName from '../CategoryName/CategoryName';
import './HeaderGiveaway.scss';


export default function HeaderLitepaper() {
  return (
    <div className="headerlitepaper">
      <div className="container">
        <a className="come_back" href="/">
          <p>GO BACK</p>
        </a>
        <CategoryName
          title="HUGE GIVEAWAY!"
          subtitle="HAVE YOU EVER WANTED TO DRIVE REAL LAMBORHINI? TODAY IS YOUR CHANCE! ALL YOU HAVE TO DO IS WIN IN OUR GIVEAWAY."
        />
        <div className="seemore_text">
          <p className="seemore">HOW TO PARTICIPATE</p>
        </div>
      </div>
    </div>
  )
}