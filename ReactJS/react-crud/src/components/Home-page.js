import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import human from "../pictures/human.png";
import "../style/Homepage.css";


export default class Homepage extends Component {
  
        render () {
        return (
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-5 row-gap-3 lg:row-gap-4 px-8 py-4 items-center">
            <label className="ConfigureItems"> Configure Items </label>
            
            <div className="input-group">
             <Link to={"/AllUsers"}>
                <ButtonSolid>Users</ButtonSolid>
             </Link>
            </div>
    
            <div className="input-group">
                <Link to={"/badges"}>
                 <ButtonSolid>Badges</ButtonSolid>
                </Link>
            </div>

            <div className="input-group">
                <Link to={"/vines"}>
                 <ButtonSolid>Vines</ButtonSolid>
                </Link>
            </div>
            
            <div className="input-group">
                <Link to={"/playground"}>
                 <ButtonSolid>Playground</ButtonSolid>
                </Link>
            </div>
        </div>
            )
        }
    }


