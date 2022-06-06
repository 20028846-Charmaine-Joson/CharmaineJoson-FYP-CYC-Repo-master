import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import "../style/ViewVines.css";
import face  from "../pictures/Face.jpg";


export default class ViewVines extends Component {

        render () {
        return (

            <div>
                <span class="dot"></span>
                <img src={face} alt="face" className="human-logo" />
                <nav className="navbar navbar-expand-md AllUser-bar fixedtop">
                    <h2>Vines</h2>
                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control SearchBar"
                            type="search user"
                            placeholder="Search Vines"
                            name="search user"
                            aria-label="Search Vines"
                        />
                        <button class="btn btn-primary btn-Search" >Search</button>
                    </form>
                </nav>
                <hr size="4" width="100%" />
                <text>
                Home -&gt; Vines
                </text>
               
                </div>
    
            );
        }
    }

              