import React from "react";
import {
  Link,
  Outlet,
} from "react-router-dom";
import AuthStatus from "./AuthStatus";

function PageLayout({ useAuth }: { useAuth: any }) {
  return (
    <div>
      <AuthStatus useAuth={useAuth}/>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default PageLayout;
