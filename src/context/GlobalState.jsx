import React, {createContext} from "react";
import axios from axios

const initialState = {
    tasks: []
}

expert const GlobalContext = createContext(initialState)