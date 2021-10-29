import { NavItem } from "./NavItem";

export function Sidebar() {
  return (
    <div className="relative z-20 w-64 p-4 space-y-2 font-light leading-tight tracking-wider bg-gray-700 shadow">
      <NavItem to="/">Home</NavItem>
      <NavItem to="/getting-started">Getting Started</NavItem>
      <NavItem to="/recipes">Recipes</NavItem>
      <NavItem to="/typescript">Typescript</NavItem>
      <div className="pt-4 space-y-2">
        <div className="pb-1 border-b border-gray-800">
          <h1 className="font-bold text-gray-100">Components</h1>
        </div>
        <NavItem to="/components/when">When</NavItem>
        <NavItem to="/components/match">Match</NavItem>
      </div>
    </div>
  );
}
