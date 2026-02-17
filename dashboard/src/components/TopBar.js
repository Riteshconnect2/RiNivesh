import { NavLink } from "react-router-dom";

import "../index.css";

const TopBar = () => {
  return (
    <>
      <div className="top-nav ">
        <div className="left">
          <img src="Icon.png" alt="icon" height={50} width={250} />
        </div>

        <div className="center">
          <NavLink to="/" className="nav-item">
            Dashboard
          </NavLink>
          <NavLink to="/orders" className="nav-item">
            Orders
          </NavLink>
          <NavLink to="/holdings" className="nav-item">
            Holdings
          </NavLink>
          <NavLink to="/positions" className="nav-item">
            Positions
          </NavLink>
          <NavLink to="/funds" className="nav-item">
            Funds
          </NavLink>
          <NavLink to="/apps" className="nav-item">
            Apps
          </NavLink>
        </div>

        <div className="right">
          <div className="avatar">ZU</div>
          <span className="userid">USERID</span>
        </div>
      </div>

      <div className="indices-bar">
        <div>
          <span>NIFTY 50</span>
          <span className="red">100.2</span>
        </div>
        <div>
          <span>SENSEX</span>
          <span className="red">100.2</span>
        </div>
      </div>
    </>
  );
};

export default TopBar;
