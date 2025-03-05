import "./navbar.scss";
import { navBarMenuItems } from "../../data";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="topBlueCont">
        <div className="logoCont">
          <img src="/images/Pos_Logo_white.png" alt="" className="logoImage" />
        </div>
        <div className="topBlueCont_Menus">
          {navBarMenuItems.map((item) => {
            return (
              <div>
                <Link to={item.ur1} key={item.id}>
                  <span>{item.title}</span>
                  {/* <img src={item.image} alt="" className="topBlueCont_Menus_Icon" /> */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="yellowBottomCont">
      {navBarMenuItems.map((item) => {
            return (
              <div className="yellowBottomCont_Menus">
                <Link to="" key={item.id}>
                  <img src={item.image} alt="" className="topBlueCont_Menus_Icon" />
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Navbar;
