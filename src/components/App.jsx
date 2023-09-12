import React from "react";
// import { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";
import "./App.css";
import Main from "./Main/Main.jsx";
import Movies from "./Movies/Movies.jsx";
import SavedMovies from "./SavedMovies/SavedMovies.jsx";
import Profile from "./Profile/Profile.jsx";
import Register from "./Register/Register.jsx";
import Login  from "./Login/Login.jsx";
import NotFound from "./NotFound/NotFound.jsx";

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route
              path="/"
              element={
                <>
                  <Header name="promo" />
                  <Main />
                  <Footer />
                </>
              }
            />
            <Route
              path="/movies"
              element={
                <>
                  <Header name="movies" />
                  <Movies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <>
                  <Header name="movies" />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                  <Header name="movies" />
                  <Profile />
                </>
              }
            />
             <Route
              path="/signup"
              element={
                <>
                  <Register name="signup"/>
                </>
              }
            />
             <Route
              path="/signin"
              element={
                <>
                  <Login name="signin"/>
                </>
              }
            />
            <Route
              path="/profile"
              element={
                <>
                <Header name="movies" />
                  <Profile name="profile"/>
                </>
              }
            />
            <Route
              path="/notfound"
              element={
                <>
                <NotFound />
                </>
              } 
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
