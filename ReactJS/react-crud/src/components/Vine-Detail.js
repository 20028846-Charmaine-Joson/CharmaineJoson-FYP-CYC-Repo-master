import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import "../style/VineDetail.css";
import face  from "../pictures/Face.jpg";
// import vines from "../pictures/vine.png";


export default class AddVine extends Component {

        render () {
        return (

            <div>
                <a href="/home" type="button" class="btn btn-primary btn-Home"> Home </a>
                <span class="dot"></span>
                <img src={face} alt="face" className="human-logo" />
                <nav className="navbar navbar-expand-md AllUser-bar fixedtop">
                    <h2>Vine Details</h2>
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
                    Home -&gt; Vines -&gt; Vine Details
                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines"}>
                    <button class="btn btn-primary btn-BackBtn" >Back</button>
                    </Link>
               </text>
               
               <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>Vine Name</th>
                            <th style={{ textAlign: "center" }}>Description</th>
                            <th style={{ textAlign: "center" }}>Total Badge</th>
                            <th style={{ textAlign: "center" }}>Background Colour</th>
                            <th style={{ textAlign: "center" }}>Colour</th>
                            <th style={{ textAlign: "center" }}>Date Created</th>
                            <th style={{ textAlign: "center" }}>Date Modified</th>
                        </tr>
                        
                    </thead>
                    </table>
               </div>
    
            );
        }
}

    