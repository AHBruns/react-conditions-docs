import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function Layout() {
  return (
    <div className="divide-y divide-gray-300">
      <Header />
      <Outlet />
    </div>
  );
}
