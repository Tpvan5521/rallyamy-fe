import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="main mb-auto">
      <Outlet />{/* pages  */}
    </div>
  )
}

export default Main