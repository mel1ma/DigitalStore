import React, { useState } from "react";
import PropTypes from "prop-types";

const ProductOptions = ({ options, shape, radius, type }) => {
    const [selected, setSelected] = useState(null);

    return (
        <div className="product-options">
            {options.map((option, index) => (
                <div
                    key={index}
                    onClick={() => setSelected(option)}
                    style={{
                        borderRadius: shape === "circle" ? "50%" : radius,
                        border: selected === option ? "2px solid #F39C12" : "1px solid lightgray",
                        padding: "10px",
                        margin: "5px",
                        width: shape === "circle" ? "31px" : "46px",
                        height: shape === "circle" ? "31px" : "46px",
                        backgroundColor: type === "color" ? option : "transparent",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: type === "text" ? "24px" : "16px",
                        color: type === "text" ? "darkgray" : "transparent"
                    }}
                >
                    {type === "text" && option}
                </div>
            ))}
        </div>
    );
};

ProductOptions.propTypes = {
    options: PropTypes.array.isRequired,
    shape: PropTypes.oneOf(["square", "circle"]).isRequired,
    radius: PropTypes.string,
    type: PropTypes.oneOf(["text", "color"]).isRequired
};

export default ProductOptions;