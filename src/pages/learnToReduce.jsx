import React, { useContext, useReducer, useState, useEffect } from "react";
import styled from "styled-components";
import EnquiryMake from "../components/enquiry-make.component";
import EnquiryOverview from "../components/enquiry-overview.component";
import EnquirySupport from "../components/enquiry-support.component";
import PageTitle from "../components/page-title.component";
import { CartContext } from "../context/cart.context";



const initialState = 0;
const reducer = (state, action) => {
    switch(action) {
        case "increase": 
            return state + 1;
        case "decrease":
            return state - 1;
        default:
            return state;
    }
}

const formState = {
    email: "",
    name: "",
    delivery: false,
    description: "",
    cash: false,
    cashAmount: 0.00,
    formNr: 1,
}

const formReducer = (state, action) => {
    switch (action.type) {
        case "name":
            return {...state, name: action.payload};
        case "email":
            return {...state, email: action.payload};
        case "delivery": 
            return {...state, delivery: action.payload};
        case "formNr":
            return {...state, formNr: state.formNr + 1};
        case "description": 
            return {...state, description: action.payload};
        default: 
            return state;
    }
}

const Enquiry = () => {

    const [ enquiryStep, setEnquiryStep ] = useState(1);
    const { cartItems } = useContext(CartContext);

    const [ userOffer, setUserOffer ] = useState({})

    const [ count, dispatch ] = useReducer(reducer, initialState);
    const [ stater, formDispatch ] = useReducer(formReducer, formState);
    // use reducer hook accepts two parameters 
    // - reducer function 
    //  -initial state
    //  also, reducer function accepts two parameters
    // - current state
    // - action

    useEffect(() => {
        console.log(stater);
    }, [stater])

    const inc = () => {
        return dispatch("increase");
    }

    const dec = () => {
        return dispatch("decrease");
    }

    const onEmailChange = (e) => {

        // console.log(e.target.checked);
        const type = e.target.name;
        const payload = type === "delivery"? e.target.checked: e.target.value

        console.log(e.target);
        return formDispatch({type, payload});
    }

    const addForm = (e) => {

        console.log("what")

        return formDispatch({type: "formNr"});
    }




    if (!cartItems.length) return <div>
        <h3>Display Action</h3>
        <h3>{count}</h3>
        <button onClick={inc}>Increase</button>
        <button onClick={dec}>Decrease</button>¸


        {Array(stater.formNr).fill().map(form => (
            <form>
                <label>Email</label>
                <input value={stater.email} onChange={onEmailChange} name="email"/>
                <label>Name</label>
                <input value={stater.name} onChange={onEmailChange} name="name" type="name"/>
                <label>Delivery</label>
                <input value={stater.delivery} onChange={onEmailChange} name="delivery" type="checkbox"/>
                <label>Cash</label>
                <input value={stater.cash} onChange={onEmailChange} name="cash" type="checkbox"/>
                <label>Description</label>
                <textarea value={stater.description} onChange={onEmailChange} name="description"/>
                

                <button type="submit" >Send</button>
            </form>
        ))}

        <button type="button" onClick={addForm}>Dodaj formu...</button>
        


        <p>
            <span>Name: {stater.name}</span>
            <span>Email: {stater.email}</span>
            <span>delivery: {stater.delivery? "yes": "no"}</span>
        </p>

    </div>

    return (
    <EnquiryStyled>
        <div className="enquiry__page-title-wrapper">
            <PageTitle title={`Upit 7272/01 - U tijeku`}/>
        </div>

        <div className="enquiry__offer-step-wrapper">
            {enquiryStep === 1 && <EnquiryMake />}
            {enquiryStep === 2 && <EnquiryOverview />}
        </div>

        <div className="enquiry__enquiry.support-wrapper">
            <EnquirySupport />
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