import React, { useReducer } from "react";

import c from './form_example.module.css';

const SET_FIELDS_VALUE = 'SET_FIELDS_VALUE',
    CLEAR_FIELDS_VALUE = 'CLEAR_FIELDS_VALUE';

const initialState = {
    email: '',
    password: '',
};

function reducer (state, action){
    switch (action.type){
        case SET_FIELDS_VALUE :
            return ({
                ...state,
                [action.payload.name]: action.payload.value,
            });

        case CLEAR_FIELDS_VALUE :
            return ({
                ...state,
                email: '',
                password: '',
            });

        default :
            throw console.log("I'm not understand this action type!");
    };
};

function Form (){
    const [fields, dispatch] = useReducer(reducer, initialState);

    function onSubmitHandler (event){
        event.preventDefault();

        console.log(fields);

        dispatch({
            type: CLEAR_FIELDS_VALUE,
        });
    };

    function onChangeHandler (e){
        dispatch({
            type: SET_FIELDS_VALUE,
            payload: {
                name: e.target.name,
                value: e.target.value,
            },
        });
    };

    return (
        <form 
            className={c.form}
            onSubmit={onSubmitHandler}>
                <input 
                    type="text"
                    name="email"
                    placeholder="Your email"
                    value={fields.email}
                    onChange={onChangeHandler} />

                <input 
                    type="text"
                    name="password"
                    placeholder="Your password"
                    value={fields.password}
                    onChange={onChangeHandler} />

                <button>Send</button>
        </form>
    );
};

export default Form;