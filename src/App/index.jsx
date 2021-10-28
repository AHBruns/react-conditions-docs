import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export function App() {
  return (
    <BrowserRouter basename="/react-conditions-docs">
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="*" element={<p>app</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
