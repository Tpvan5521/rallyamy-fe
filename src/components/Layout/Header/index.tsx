import React from "react";
import { Link } from "react-router-dom";
// import AuthStatus from "../AuthStatus";

const Header = () => {
  return (
    <div className="header bg-gray-200">
      {/* <AuthStatus useAuth={useAuth} /> */}
      <ul className="flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header