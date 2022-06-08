import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import "../style/AddVine.css";
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
                    <h2>Add Vines</h2>
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
                    Home -&gt; Vines -&gt; Add Vine
               </text>
               
               <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control AddVine"
                            type="add vine"
                            placeholder="New Vine Name"
                            name="add vine"
                            aria-label="New Vine Name"
                        />
                    </form>

                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control AddDescriptionVine"
                            type="add vine"
                            placeholder="New Vine Description"
                            name="add vine"
                            aria-label="New Vine Description"
                        />
                    </form>

                    <button class="btn btn-primary btn-AddVineBtn" >Add Vine</button>
                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines"}>
                    <button class="btn btn-primary btn-BackBtn" >Back</button>
                    </Link>


                </div>
    
            );
        }
    }

              