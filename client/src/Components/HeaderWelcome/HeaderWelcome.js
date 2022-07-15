import CategoryName from '../CategoryName/CategoryName';
import './HeaderWelcome.scss';


export default function HeaderLitepaper() {
  return (
    <div className="headerlitepaper">
      <div className="container">
        <a className="come_back" href="/">
          <p>GO BACK</p>
        </a>
        <CategoryName
          title="WELCOME!"
          subtitle="IF YOU SEE THIS, THEN YOU WERE MOST LIKELY INVITED BY SOMEONE TO JOIN OUR REVOLUTIONARY PROJECT, PLEASE TAKE YOUR TIME AND READ ABOUT OUR PROJECT ESSENTIALS BELOW"
        />
        <div className="seemore_text">
          <p className="seemore">SEE MORE</p>
        </div>
      </div>
    </div>
  )
}