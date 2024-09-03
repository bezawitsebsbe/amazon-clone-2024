import React, { createContext, useReducer, useContext } from 'react';

//prepares the data layer
const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//push and pull info from the datalayer
export const useStateValue = () => useContext(StateContext);