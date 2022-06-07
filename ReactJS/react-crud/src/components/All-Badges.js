import React, { Component } from "react";
import { Link } from "react-router-dom";
// import UserDataService from "../services/cyc-fyp.service";
// import BadgesDataService from "../services/badge-cyc-fyp.service";
// import "../style/All-Users.css";
import "../style/All-Badges.css";
import human from "../pictures/human.png";

export default class AllBadgesList extends Component {
    constructor(props) {
        super(props);
        // this.retrieveBadges = this.retrieveBadges.bind(this);
        // this.refreshList = this.refreshList.bind(this);
        this.state = {
            Badges: [],
            currentBadges: null,
            currentIndex: -1,
            searchBadges: ""
        };
    }

    // componentDidMount() {
    //     this.retrieveBadges();
    // }

    // Collect Users data
    // retrieveUsers() {
    //     UserDataService.getAll()
    //         .then(response => {
    //             this.setState({
    //                 Users: response.data
    //             });
    //             console.log(response.data);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

        // Collect Badges data
        // retrieveBadges() {
        //     BadgesDataService.getAll()
        //         .then(response => {
        //             this.setState({
        //                 Badges: response.data
        //             });
        //             console.log(response.data);
        //         })
        //         .catch(e => {
        //             console.log(e);
        //         });
        // }
    

    // Refresh
    refreshList() {
        this.retrieveBadges();
        this.setState({
            currentBadges: null,
            currentIndex: -1
        });
    }

    render() {
        const { Badges } = this.state;
        return (
            <div>
                <a href="/home" type="button" class="btn btn-primary btn-Home"> Home </a>
                <span class="dot"></span>
                <img src={human} alt="badgepicture" className="human-logo" />
                <nav className="navbar navbar-expand-md AllBadge-bar fixedtop">
                    <h2> Badges </h2>
                    <form class="d-flex" method="POST" action="/" no validate>
                        <input
                            class="form-control SearchBar"
                            type="search badges"
                            placeholder="Search badges"
                            name="search badges"
                            aria-label="Search badges"
                        />
                        <button class="btn btn-primary btn-Search" >Search</button>
                    </form>
                </nav>
                <hr size="4" width="100%" />
                <text>
                    Home -&gt; All Badges
                    <a href="./AddUser" type="button" class="btn btn-primary btn-Add User">Add Badge</a>
                </text>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>No.</th>
                            <th style={{ textAlign: "center" }}>Badge Name</th>
                            <th style={{ textAlign: "center" }}>Badge Description</th>
                            <th style={{ textAlign: "center" }}>Badge Vine</th>
                            <th style={{ textAlign: "center" }}>Badge Grapes</th>
                            <th style={{ textAlign: "center" }}>Vine Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Badges && Badges.map((Badge, index) => {
                            return (
                                <tr key={Badges.badge_id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{Badges.badge_name}</td>
                                    <td>{Badges.badge_description}</td>
                                    <td>{Badges.badge_vine}</td>
                                    <td>{Badges.badge_grapes}</td>
                                    <td>{Badges.vine_level}</td>
                                    <tr>
                                        <Link to={"/home/viewbadge/" + Badges.badge_id}>
                                            <button className="btn btn-view">View</button>
                                        </Link>
                                        <Link to={"/home/editbadge/" + Badges.badge_id}>
                                        <button className="btn btn-edit">Edit</button>
                                        </Link>
                                    </tr>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>
        );
    }
}