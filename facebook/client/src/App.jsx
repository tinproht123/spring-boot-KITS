import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBell,
  faCaretDown,
  faComment,
  faEllipsis,
  faGamepad,
  faHouse,
  faMagnifyingGlass,
  faStore,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import NewFeed from "./pages/NewFeed";

library.add(
  faMagnifyingGlass,
  faHouse,
  faStore,
  faUsers,
  faGamepad,
  faEllipsis,
  faComment,
  faBell,
  faCaretDown
);

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/new-feed" element={<NewFeed />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
