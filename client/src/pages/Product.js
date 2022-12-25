import React from "react";

const Product = ({ title, category }) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{category}</p>
        </article>
    );
};

export default Product;
