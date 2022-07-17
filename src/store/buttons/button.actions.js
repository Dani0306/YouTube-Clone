import { createAction } from '../createAction'
import { BUTTON_TYPES } from './button.types'

export const showSearchBar = (boolean) => createAction(BUTTON_TYPES.SET_SEARCH_BAR, boolean)

export const showAsideBar = (boolean) => createAction(BUTTON_TYPES.SET_ASIDE_BAR, boolean)

export const showConfigMenu = (boolean) => createAction(BUTTON_TYPES.SET_CONFIG_MENU, boolean)