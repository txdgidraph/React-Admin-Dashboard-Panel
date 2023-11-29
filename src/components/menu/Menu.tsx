import { Link } from "react-router-dom";
import "./menu.scss";
const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title">MAIN</span>
        <Link to="/" className="listItem">
          <img src="/home.svg" alt="" />
          <span className="listItemTitle">Home</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/profile.svg" alt="" />
          <span className="listItemTitle">Profile</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">LISTS</span>
        <Link to="/" className="listItem">
          <img src="/user.svg" alt="" />
          <span className="listItemTitle">Users</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/product.svg" alt="" />
          <span className="listItemTitle">Products</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/order.svg" alt="" />
          <span className="listItemTitle">Orders</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/post.svg" alt="" />
          <span className="listItemTitle">Posts</span>
        </Link>
      </div>

      <div className="item">
        <span className="title">GENERAL</span>
        <Link to="/" className="listItem">
          <img src="/element.svg" alt="" />
          <span className="listItemTitle">Elements</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/note.svg" alt="" />
          <span className="listItemTitle">Notes</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/form.svg" alt="" />
          <span className="listItemTitle">Forms</span>
        </Link>
        <Link to="/" className="listItem">
          <img src="/calendar.svg" alt="" />
          <span className="listItemTitle">Calendar</span>
        </Link>
      </div>
    </div>
  );
};
export default Menu;
