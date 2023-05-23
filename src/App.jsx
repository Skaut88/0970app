import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Profile } from "./components/Profile";
import { Messages } from "./components/Message";
import { Settings } from "./components/Settings";
import { Shop } from "./components/Shop";

function App() {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="shop">
              Магазин
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Routes>
            <Route path="/messages" element={<Messages />} />
          </Routes>
          <Routes>
            <Route path="/settings" element={<Settings />} />
          </Routes>
          <Routes>
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
