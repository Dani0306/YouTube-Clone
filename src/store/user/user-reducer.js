import { USER_TYPES } from "./user.types";

const USER_INITIAL_STATE = {
    user: null,
}


export const userReducer = (state = USER_INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){

        case USER_TYPES.SET_CURRENT_USER: 
            return { ...state, user: payload }
        default: 
            return state
    }

}