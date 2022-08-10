import CategoryName from '../CategoryName/CategoryName';
import './HeaderPartners.scss';


export default function HeaderPartners() {
  return (
    <div className="headerlitepaper">
      <div className="container">
        <a className="come_back" href="/">
          <p>GO BACK</p>
        </a>
        <CategoryName
          title="Partners"
          subtitle="OUR PROJECT WOULD BE NOTHING WITHOUT THEM, DON'T HESITATE TO CHECK THEM OUT!"
        />
        <div className="seemore_text">
          <p className="seemore">THE LIST</p>
        </div>
      </div>
    </div>
  )
}