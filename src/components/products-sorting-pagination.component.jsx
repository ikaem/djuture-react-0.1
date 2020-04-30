import React from "react";
import styled from "styled-components";

const ProductsSortingPagination = () => {
    return (
    <ProductsSortingPaginationStyled>
        <div className="products-sorting">
            <span className="products-sorting__icon">>></span>
            <div className="products-sorting__options">
                <span className="products-sorting__option">Stanje
                    <span>></span>
                </span>
                <span className="products-sorting__option selected">Datum
                    <span>></span>
                </span>
            </div>
        </div>
        <div className="products-pagination">
            <span className="products-pagination__icon">>></span>
            <span className="products-pagination__page outer">{"<"}</span>
            <ul className="products-pagination__pages">
                <li className="products-pagination__page inner page-number">
                    1
                </li>
                <li className="products-pagination__page inner">
                    ...
                </li>
                <li className="products-pagination__page inner page-number selected">
                    7
                </li>
                <li className="products-pagination__page inner">
                    ...
                </li>
                <li className="products-pagination__page inner page-number">
                    17
                </li>
            </ul>
            <span className="products-pagination__page outer">{">"}</span>
        </div>
    </ProductsSortingPaginationStyled>
    );
}

const ProductsSortingPaginationStyled = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    align-items: center;

    border-top: 1px solid var(--light-light);
    border-bottom: 1px solid var(--light-light);
    background-color: var(--lighter-light);
    padding: 0.5rem;

    > div {
        /* flex: 1 1 0; */
    }

    .products-sorting {
        display: flex;
        color: var(--dark-light);

        .products-sorting__icon {
            color: var(--darker-light);
            display: inline-block;
            transform: rotateZ(90deg);
        }
        .products-sorting__option {
            margin-left: 0.5rem;
            text-transform: uppercase;

            &.selected {
                color: var(--blackbrown);
                font-weight: 700;
                border-bottom: 1px solid var(--blackbrown);
            }

            span {
                display: inline-block;
                transform: rotateZ(90deg);
                /* display: none; */
            }
        }
    }

    .products-pagination {
        display: flex;
        color: var(--darker-light);


        .products-pagination__icon {
            color: var(--darker-light);
            display: inline-block;
            transform: rotateZ(90deg);
        }

        .products-pagination__page {
            margin-left: 0.5rem;

            &.selected {
                color: var(--blackbrown);
                font-weight: 700;
                border-bottom: 1px solid var(--blackbrown);
            }
        }

        .products-pagination__pages {
            display: flex;
        }
    }




`;


export default ProductsSortingPagination;