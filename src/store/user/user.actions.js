import { createAction } from "../createAction";
import { USER_TYPES } from "./user.types";

export const login = (authObj) => createAction(USER_TYPES.SET_CURRENT_USER, authObj)