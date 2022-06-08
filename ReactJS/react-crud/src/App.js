import React, { Component } from "react";
import { Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Logo from './pictures/CYC-Logo.png';
import AllUserList from "./components/All-Users";
import FrontPage from "./components/Front-Page";
import LoginPage from "./components/Login-page";
import Homepage from "./components/Home-page";
import ViewVinesList from "./components/View-Vines";
import AllBadgesList from "./components/All-Badges";
import PlaygroundDisplay from "./components/Playground-Display";
import AddVine from "./components/Add-Vine";
import EditVine from "./components/Edit-Vine";
import VineDetail from "./components/Vine-Detail";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md nav-bar fixedtop">
          <a className="navbar-brand">
            <img src={Logo} className="App-Logo" />
          </a>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route exact path="/" element={<FrontPage />} />
            <Route exact path="/Login" element={<LoginPage />} />
            <Route exact path="/home" element={<Homepage />} />
            <Route exact path="/home/AllUsers" element={<AllUserList />} /> 
            <Route exact path="/home/ViewVines" element={<ViewVinesList />} />   
            <Route exact path="/home/ViewVines/AddVine" element={<AddVine />} />
            <Route exact path="/home/ViewVines/EditVine" element={<EditVine />} />
            <Route exact path="/home/ViewVines/VineDetail" element={<VineDetail />} />

            <Route exact path="/home/AllBadges" element={<AllBadgesList />} />
            <Route exact path="/home/playground" element={<PlaygroundDisplay />} />
            
          </Routes>
        </div>  
      </div>
    );
  }
}
export default App;
