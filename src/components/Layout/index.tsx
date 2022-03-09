import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const PageLayout = ({ useAuth }: { useAuth: any }) => {
  return (
    <div className="w-full flex flex-col h-screen justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default PageLayout;
