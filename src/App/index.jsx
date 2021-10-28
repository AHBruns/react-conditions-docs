import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="*" element={<p>app</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
