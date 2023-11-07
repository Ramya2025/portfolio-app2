import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import AddBank from "./components/AddBank";
import AddUser from "./components/AddUser";
import AddAccount from "./components/AddAccount";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>

      <nav className="navbar  border-bottom navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Online Banking System
        </Link>
        {/* <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
                Moderator Board
              </Link>
            </li>


          )}

          {showAdminBoard && (
            <>
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-bank"} className="nav-link">
                  Bank
                  

                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-user"} className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add-account"} className="nav-link">
                  Account
                </Link>
              </li>
            </>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user-card"} className="nav-link">
                User
              </Link>

            </li>
          )}
        </div> */}
        <div className="navbar-nav mr-auto">
          <li className="nav-link active">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-link active">
              <Link to={"/mod"} className="nav-link">
                Moderator Dashboard
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <>
              <li className="nav-link active">
                <Link to={"/admin"} className="nav-link">
                  Admin Dashboard
                </Link>
              </li>
              <li className="nav-link active">
                <Link to={"/add-bank"} className="nav-link">
                  Bank
                </Link>
              </li>
              <li className="nav-link active">
                <Link to={"/add-user"} className="nav-link">
                  User
                </Link>
              </li>
              <li className="nav-link active">
                <Link to={"/add-account"} className="nav-link">
                  Account
                </Link>
              </li>
            </>
          )}

          {currentUser && !showAdminBoard && (
            <li className="nav-link active">
              <Link to={"/user"} className="nav-link">
                  User Dashboard
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-link active">
              <Link to={"/user"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-link active">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-link active">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-link active">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          
          <Route path="/mod" element={<BoardModerator />} />
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/add-bank" element={<AddBank />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-account" element={<AddAccount />} />
          <Route path="/view-profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          <Route path="/user-profile" element={<Profile />} />
          <Route path="/admin-dashboard" element={currentUser && showAdminBoard ? <BoardAdmin /> : <Navigate to="/login" />} />
<Route path="/user-dashboard" element={currentUser && !showAdminBoard ? <BoardUser /> : <Navigate to="/login" />} />

        </Routes>
      </div>

    </div>
  );
};

export default App;
