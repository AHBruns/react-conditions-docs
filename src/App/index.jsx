import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";
import { GettingStarted } from "./GettingStarted";
import { Lost } from "./Lost";
import { Recipes } from "./Recipes";
import { Typescript } from "./Typescript";
import { Outlet } from "react-router-dom";
import { WhenComponent } from "./Components/When";
import { MatchComponent } from "./Components/Match";

export function App() {
  return (
    <BrowserRouter basename="/react-conditions-docs">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="getting-started" element={<GettingStarted />} />
          <Route path="recipes" element={<Recipes />} />
          <Route path="typescript" element={<Typescript />} />
          <Route path="components" element={<Outlet />}>
            <Route path="when" element={<WhenComponent />} />
            <Route path="match" element={<MatchComponent />} />
          </Route>
          <Route path="*" element={<Lost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
