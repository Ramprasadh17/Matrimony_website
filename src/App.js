import React from "react";
import Header from "./Components/Header/Header";
import Logo from "./Components/Logo/Logo";
import Photo from "./Components/Welcome/Photo";
import Search from "./Components/Search/Search";
import Profile from "./Components/Profiles/Profile";
import About from "./Components/Footer/About";

export default function App() {
  return (
    <div>
      <Header />
      <Logo />
      <Photo />
      {/* <Search /> */}
      <Profile />
      <About />
    </div>
  );
}
