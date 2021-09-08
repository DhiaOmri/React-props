import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Profile = ({
  fullName,
  bio,
  profession,
  handleName,
  children,
  title,
}) => {
  return (
    <>
      <a
        className="img-wrap rotate-scale-down"
        onClick={(e) => {
          //   e.preventDefault();
          handleName(fullName);
        }}
      >
        <img src={children} title={title} />
      </a>
      <h1>{fullName}</h1>
      <p>{bio}</p>
      <p>{profession}</p>
      <ul className="social-link">
        <a href="https://github.com/DhiaOmri" className="social">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: "30px" }} />
        </a>
        <a href="https://github.com/DhiaOmri">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "30px" }} />
        </a>
      </ul>
    </>
  );
};
Profile.defaultProps = {
  fullName: "loading...",
  bio: "loading...",
  profession: "loading...",
  title: "loading...",
};
export default Profile;
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  handleName: PropTypes.func,
  title: PropTypes.string,
};
