import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import "../style/Homepage.css";
import face  from "../pictures/Face.jpg";


export default class Homepage extends Component {

        render () {
        return (

            <div>
                <span class="dot"></span>
                <img src={face} alt="face" className="human-logo" />
                <nav className="navbar navbar-expand-md AllUser-bar fixedtop">
                    <h2>Dashboard</h2>
                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control SearchBar"
                            type="search user"
                            placeholder="Search User"
                            name="search user"
                            aria-label="Search User"
                        />
                        <button class="btn btn-primary btn-Search" >Search</button>
                    </form>
                </nav>
                <hr size="4" width="100%" />
                <text>
                    Configure Items
                </text>
            
               {/* <label className="ConfigureItems">Configure Items</label> */}
                
                <div className="input-group">
                <Link style={{textDecoration: "none"}} to={"/home/AllUsers"}>
                    <p class="ButtonSolid" >Users</p>
                </Link>
                </div>
        
                <div className="input-group">
                        
                    <Link style={{textDecoration: "none"}} to={"/badges"}>
                        
                    <p class="ButtonSolid">Badges</p>
    
                    </Link>
                </div>

                <div className="input-group">
                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines"}>
                    <p class="ButtonSolid">Vines</p>
                    </Link>
                </div>
                
                <div className="input-group">
                    <Link style={{textDecoration: "none"}} to={"/playground"}>
                    <p class="ButtonSolid">Playground</p>
                    </Link>
    
                 
                </div>
            </div>

            );
        }
    }
