import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

const Profile = () => {
  return <h1>Эта страница с профилем</h1>;
};
const Messages = () => {
  return <h1>Эта страница с сообщениями</h1>;
};
const Settings = () => {
  return <h1>Эта страница с настройками</h1>;
};
const Shop = () => {
  return <h1>Магазин</h1>;
};

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
