import React, { useContext, useReducer, useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";

import { CartContext } from "../context/cart.context";
import { UserContext } from "../context/user.context";

import { exchangeStateReducer } from "../reducers/enquiry-form.reducer";

import { products as fakeProducts, enquiries as fakeEnquiries } from "../assets/fakeDB";

import EnquiryMake from "../components/enquiry-make.component";
import EnquiryOverview from "../components/enquiry-overview.component";
import EnquiryThankYou from "../components/enquiry-thankyou.component";
import EnquirySupport from "../components/enquiry-support.component";
import PageTitle from "../components/page-title.component";


const Enquiry = () => {
    const history = useHistory();
    const { cartItems } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const [ cartSummaryItems, setCartSummaryItems ] = useState([]);
    const [ enquiryId, setEnquiryId ] = useState("");
    const [ exchangeState, exchangeDispatch ] = useReducer(exchangeStateReducer, {
        cash: false,
        cashAmount: 0.00,
        delivery: false,
        exchangeItems: [
            {
                name: "",
                description: "",
                photos: {
                    photo1: "",
                    photo2: ""
                },
            },
        ],
    })

    useEffect(() => {
        const fetchedCartItems = fakeProducts.filter(product => {
            return cartItems.includes(product.id);
        })
        .map(({ id, title, condition }) => ({ id, title, condition }));
        setCartSummaryItems(fetchedCartItems);
    }, [cartItems]);

    const handleChange = (e) => {
        const exchangeId = Number(e.target.id.slice(e.target.id.indexOf("-") + 1));
        const type = e.target.name;
        const payload = e.target.type === "checkbox"? e.target.checked: e.target.value;
        const pack = {type, payload, exchangeId}
        return exchangeDispatch (pack);
    }

    const handleSubmit = (e) => {
        // needs to be fixed - this is not actually submitting anything, it is just rendering overview page...
        e.preventDefault();
        if(!exchangeState.cash) {
            exchangeDispatch({type: "cashAmount", payload: 0});
        }
        history.push("/enquiry/overview/")
        console.log(exchangeState);
    }

    const addForm = () => {
        return exchangeDispatch({type: "add form"})
    }


    const sendOffer = () => {

        const fullEnquiry = {
            enquiryId: fakeEnquiries.length + 1,
            dateCreated: new Date(Date.now()),
            dateResolved: "",
            status: "pending",
            storeProducts: cartItems,
            userId: user.id,
            enquiryDetails: exchangeState,
        }

        setEnquiryId(prevEnq => fullEnquiry.enquiryId);
        fakeEnquiries.push(fullEnquiry);
        console.log(fakeEnquiries);


        console.log("here", enquiryId);
        history.push("/enquiry/thankyou")
        // enquiryId && history.push("/enquiry/thankyou")

    }

    return (
    <EnquiryStyled>
        <div className="enquiry__page-title-wrapper">
            <PageTitle title={`Upit 7272/01 - U tijeku`}/>
        </div>

        <div className="enquiry__offer-step-wrapper">
            <Switch>
                <Route exact path="/enquiry/">
                    <EnquiryMake 
                        exchangeState={exchangeState}
                        addForm={addForm}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}/>
                </Route>
                <Route exact path="/enquiry/overview/">

                    <EnquiryOverview 
                        {...exchangeState}
                        sendOffer={sendOffer}
                        enquiryId={enquiryId}
                    />

                    {/* {!enquiryId? 
                    <EnquiryOverview 
                        {...exchangeState}
                        sendOffer={sendOffer}
                    />:
                    <EnquiryThankYou enquiryId={enquiryId}/>} */}
                </Route>
                <Route exact path="/enquiry/thankyou/">

                    {enquiryId && <EnquiryThankYou enquiryId={enquiryId}/>}






                </Route>
            </Switch>




        </div>

        <div className="enquiry__enquiry.support-wrapper">

            <EnquirySupport 
                cartSummaryItems={cartSummaryItems}
                user={user}
            />
        </div>
    </EnquiryStyled>
    );
}

const EnquiryStyled = styled.main`
    margin: 1rem 1rem 2rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    .enquiry__page-title-wrapper {
        margin-bottom: 1rem;
    }
`;

export default Enquiry;