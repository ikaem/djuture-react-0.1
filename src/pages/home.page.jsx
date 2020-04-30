import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import NewestProduct from "../components/newest-product.component";
import ProductsSortingPagination from "../components/products-sorting-pagination.component";
import OtherProductsActual from "../components/other-products.component";

import { CartContext } from "../context/cart.context";


// fake db
import { products as fakeProducts } from "../assets/fakeDB";

const Home = () => {

    const { cartItems, setCartItems, createQuickEnquiry } = useContext(CartContext);
    const [ products, setProducts ] = useState([]);

    const addRemoveFromCart = (id) => {
        cartItems.includes(id)?
        (setCartItems(prevItems => prevItems.filter(item => item !== id))):
        (setCartItems(prevItems => [...prevItems, id]))
    }
    
    useEffect(() => {
        setProducts(fakeProducts.slice().sort((a, b) => {
            return new Date(b.dateCreated) - new Date(a.dateCreated);
        }));
    }, []);

    return (
    <HomeStyled>
        <section className="newest-product">
            {products.length && 
            <NewestProduct 
                newestProduct={products[0]}
                cartItems={cartItems}
                addRemoveFromCart={addRemoveFromCart}
                createQuickEnquiry={createQuickEnquiry}
            />}
        </section>
        <section className="other-products">
            <div className="other-products__sorting-pagination-wrapper">
                <ProductsSortingPagination />
            </div>
            <div className="other-products__actual-products-wrapper">
                {products.length && 
                <OtherProductsActual 
                    otherProducts={products.slice(1)}
                    cartItems={cartItems}
                    addRemoveFromCart={addRemoveFromCart}
                    createQuickEnquiry={createQuickEnquiry}
            />}
                    
                />}
            </div>
        </section>
    </HomeStyled>
    )
}

const HomeStyled = styled.main`
    background-color: white;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 0;


    .other-products {
        display: flex;
        flex-direction: column;
        padding: 1rem;

        .other-products__sorting-pagination-wrapper {
            margin-bottom: 1rem;
        }

        .other-products__actual-products-wrapper {
            margin-bottom: 1rem;
        }
    }
`;

export default Home;