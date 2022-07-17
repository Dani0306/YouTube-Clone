import { BUTTON_TYPES } from "./button.types";

const INITIAL_STATE = {
    searchBar: false, 
    asideBar: false, 
    configMenu: false
}


export const buttonsReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){
        
        case BUTTON_TYPES.SET_SEARCH_BAR: 
            return { ...state, searchBar: payload }
        
        case BUTTON_TYPES.SET_ASIDE_BAR:
            return { ...state, asideBar: payload }

        case BUTTON_TYPES.SET_CONFIG_MENU: 
            return { ...state, configMenu: payload }

        default: 
            return state
    }
}