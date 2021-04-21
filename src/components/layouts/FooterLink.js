import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FooterLink = ({ list, className }) => {
  return list.path.startsWith("/#") ? (
    <a href={list.path} className={className}>
      {list.title}
    </a>
  ) : (
    <Link to={list.path} className={className}>
      {list.title}
    </Link>
  );
};

FooterLink.propTypes = {
  list: PropTypes.shape({}).isRequired,
  className: PropTypes.string.isRequired,
};

export default FooterLink;
