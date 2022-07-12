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
                            class="form-control EditDetail"
                            type="add vine"
                            placeholder="Edit Vine Detail Name"
                            name="add vine"
                            aria-label="Edit Vine Detail Name"
                        />
                    </form>

                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control EditDetailDesc"
                            type="add vine"
                            placeholder="Edit Vine Detail Description"
                            name="add vine"
                            aria-label="Edit Vine Description"
                        />
                    </form>

                    {/* this part should be total badge so based on the calculated data from the database
                    
                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control AddDescriptionVine"
                            type="add vine"
                            placeholder="New Vine Detail Description"
                            name="add vine"
                            aria-label="New Vine Description"
                        />
                    </form> */}

                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control EditBGColour"
                            type="edit vine"
                            placeholder="Background Colour"
                            name="edit vine"
                            aria-label="Background Colour"
                        />
                    </form>

                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control EditColour"
                            type="edit vine"
                            placeholder="Colour"
                            name="edit vine"
                            aria-label="Colour"
                        />
                    </form>

                    <button class="btn btn-primary btn-EditVineBtn" >Edit Vine Detail</button>
                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines"}>
                    <button class="btn btn-primary btn-EditBackBtn" >Back</button>
                    </Link>

                </div>
    
            );
        }
    }

              