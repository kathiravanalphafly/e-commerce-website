import React from "react";
import UserSidebar from "./UserSidebar";

function UserLayout({ children }) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      
      <UserSidebar />

      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}

export default UserLayout;
