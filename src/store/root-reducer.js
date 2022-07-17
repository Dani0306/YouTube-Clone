import { combineReducers } from 'redux'
import { buttonsReducer } from './buttons/buttons-reducer'
import { userReducer } from './user/user-reducer'
import { videosReducer } from './videos/videos-reducer'

export const rootReducer = combineReducers({
    user: userReducer, 
    buttons: buttonsReducer, 
    videos: videosReducer
})