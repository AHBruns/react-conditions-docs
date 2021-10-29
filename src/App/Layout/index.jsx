import React from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const location = useLocation();

  React.useLayoutEffect(() => {
    // runs on location, i.e. route, change
    hljs.highlightAll();
  }, [location]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="relative flex-1 h-full">
          <div
            className="absolute inset-0 overflow-auto"
            key={location.pathname}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
