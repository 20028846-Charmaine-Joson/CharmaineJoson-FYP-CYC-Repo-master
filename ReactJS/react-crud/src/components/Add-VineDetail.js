import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import "../style/AddVine.css";
import face  from "../pictures/Face.jpg";
// import vines from "../pictures/vine.png";


export default class AddVineDetail extends Component {

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
                    Home -&gt; Vines -&gt; Vine Details -&gt; Add Vine Detail
               </text>
               
               <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control AddVine"
                            type="add vine"
                            placeholder="New Vine Detail Name"
                            name="add vine"
                            aria-label="New Vine Detail Name"
                        />
                    </form>

                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control AddDetailDesc"
                            type="add vine"
                            placeholder="New Vine Detail Description"
                            name="add vine"
                            aria-label="New Vine Description"
                        />
                    </form>

                    {/* should be total badge so based on the calculated data from the database
                    
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
                            class="form-control AddBGColour"
                            type="add vine"
                            placeholder="Background Colour"
                            name="add vine"
                            aria-label="Background Colour"
                        />
                    </form>

                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control AddColour"
                            type="add vine"
                            placeholder="Colour"
                            name="add vine"
                            aria-label="Colour"
                        />
                    </form>

                    <button class="btn btn-primary btn-AddVineBtn" >Add</button>

                    {/* this should route back to vine detail page instead  */}
                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines"}>
                    <button class="btn btn-primary btn-BackBtn" >Back</button>
                    </Link>


                </div>
    
            );
        }
    }

              