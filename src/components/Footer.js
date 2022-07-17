import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <>
    <div class="footer">
      <div class="displayIcons">
        <div>
          <a href="https://www.linkedin.com/in/brunodsoares/" target="'_blank'">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
        </div>
        <div>
          <a href="https://github.com/Brunodsoares" target="'_blank'">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/brukva86" target="'_blank'">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/brukva86" target="'_blank'">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/brukva86" target="'_blank'">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>
      </div>

      <div class="finalFooter">
        <p>©Bruno da Silva Soares</p>
      </div>
    </div>
  </>
);

export default Footer;
