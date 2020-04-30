import React from "react";

const ProductsPagination = () => {
    return (
    <div className="products__pagination">
        <span className="pagination__page outer">{"<"}</span>
        <ul className="pagination__pages">
            <li className="pagination__page inner page-number">
                1
            </li>
            <li className="pagination__page inner">
                ...
            </li>
            <li className="pagination__page inner page-number">
                7
            </li>
            <li className="pagination__page inner">
                ...
            </li>
            <li className="pagination__page inner page-number">
                17
            </li>
        </ul>
        <span className="pagination__page outer">{">"}</span>
    </div>
    );
}

export default ProductsPagination;