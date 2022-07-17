import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => (
  <>
    <div class="title">
      {"< >"} Developer FullStack <span>Bruno Soares</span> {"< />"}
    </div>

    <div class="navbar">
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <div>
        <Link to="/SoftSkill">Soft Skill</Link>
      </div>
      <div>
        <Link to="/HardSkill">Hard Skill</Link>
      </div>
      <div>
        <Link to="/Project">Project</Link>
      </div>
      <div>
        <Link to="/Contact">Contact</Link>
      </div>
    </div>
  </>
);

export default NavBar;
