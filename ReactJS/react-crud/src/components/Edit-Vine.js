import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import "../style/EditVine.css";
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
                    <h2>Edit Vines</h2>
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
                    Home -&gt; Vines -&gt; Edit Vine
               </text>
               
               <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control EditVine"
                            type="edit vine"
                            placeholder="Edit Vine Name"
                            name="edit vine"
                            aria-label="Edit Vine Name"
                        />
                    </form>

                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control EditDescriptionVine"
                            type="edit vine"
                            placeholder="Vine Description"
                            name="edit vine"
                            aria-label="Vine Description"
                        />
                    </form>

                    <button class="btn btn-primary btn-EditVineBtn" >Edit Vine</button>
                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines"}>
                    <button class="btn btn-primary btn-EditBackBtn" >Back</button>
                    </Link>

                </div>
    
            );
        }
    }

              