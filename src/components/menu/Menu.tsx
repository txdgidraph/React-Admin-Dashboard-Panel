import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {/* <div className="logoContainer">
        <img src="/images/Pos_Logo_white.png" alt="" className="logoImage"/>
      </div> */}
      {menu.map((item) => {
        return (
          <div className="item" key={item.id}>
            <Link to={item.ur1} className="listItem" key={item.id}>
              {/* <img src={item.icon} alt="" /> */}
              <span className="listItemTitle">{item.title}</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default Menu;
