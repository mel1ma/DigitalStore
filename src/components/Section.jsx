import React from "react";
import PropTypes from "prop-types";

const Section = ({ title, titleAlign, link, children }) => {
    return (
        <div className="section">
            <h2 style={{ textAlign: titleAlign }}>{title}</h2>
            <a href={link.href}>{link.text}</a>
            <div>{children}</div>
        </div>
    );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    titleAlign: PropTypes.string.isRequired,
    link: PropTypes.object.isRequired,
    children: PropTypes.node
};

export default Section;