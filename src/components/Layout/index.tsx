import React from "react";
import {
  Link,
  Outlet,
} from "react-router-dom";
import { AuthStatus } from "routes/routes";

function PageLayout() {
  return (
    <div>
      <AuthStatus />
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
