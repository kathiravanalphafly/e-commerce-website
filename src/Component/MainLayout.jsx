import React from "react";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <div className="min-h-screen">
        {children}
      </div>

      <Footer />
    </>
  );
}

export default MainLayout;
