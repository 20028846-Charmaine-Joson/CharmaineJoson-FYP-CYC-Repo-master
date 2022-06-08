import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserDataService from "../services/cyc-fyp.service";
import "../style/ViewVines.css";
import face  from "../pictures/Face.jpg";
import vines from "../pictures/vine.png";


export default class ViewVines extends Component {

        render () {
        return (

            <div>
                <a href="/home" type="button" class="btn btn-primary btn-Home"> Home </a>
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

                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines/AddVine"}>
                <a href="/ViewVines/new" type="button" class="btn btn-primary btn-Add EditVines">Edit Vine</a>
                </Link>

                    <Link style={{textDecoration: "none"}} to={"/home/ViewVines/AddVine"}>
                <a href="/ViewVines/new" type="button" class="btn btn-primary btn-Add addVines">Add Vine</a>
                </Link>
               </text>

               
            </div>
    
            );
        }
    }

              