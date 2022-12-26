import { ReactNode } from 'react';

const Product = ({ title, category }: { title: ReactNode; category: ReactNode; }) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{category}</p>
        </article>
    );
};

export default Product;
