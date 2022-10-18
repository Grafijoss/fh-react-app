import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import { ShoppingPage } from "../02-components-patterns/pages/ShoppingPage";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shoop"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Shoop
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="shoop" element={<ShoppingPage />} />
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="home" element={<h1>Home Page</h1>} />

          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
