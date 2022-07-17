import { VIDEOS_TYPES } from "./videos.types";

const INITIAL_STATE = {
    trending: [], 
    searchResults: [],
    channels: [], 
    playlist: [], 
    relatedVideos: [], 
    query: '',
    type: 'trending', 
    currentVideo: {}, 
    currentChannel: {}, 
    loading: false
}

export const videosReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type){

        case VIDEOS_TYPES.SET_TRENDING: 
            return { ...state, trending: payload }

        case VIDEOS_TYPES.SET_SEARCH_RESULTS: 
            return { ...state, searchResults: payload }

        case VIDEOS_TYPES.SET_CHANNELS: 
            return { ...state, channels: payload }
        
        case VIDEOS_TYPES.SET_PLAYLIST: 
            return { ...state, playlist: payload }
        
        case VIDEOS_TYPES.SET_QUERY: 
            return { ...state, query: payload }

        case VIDEOS_TYPES.SET_TYPE: 
            return { ...state, type: payload }

        case VIDEOS_TYPES.SET_CURRENT_VIDEO: 
            return { ...state, currentVideo: payload }
            
        case VIDEOS_TYPES.SET_RELATED_VIDEOS: 
            return { ...state, relatedVideos: payload }
            
        case VIDEOS_TYPES.SET_CURRENT_CHANNEL: 
            return { ...state, currentChannel: payload }
            
        case VIDEOS_TYPES.SET_LOADING: 
            return { ...state, loading: payload }

        default: 
            return state
    }

}