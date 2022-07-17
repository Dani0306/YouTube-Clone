import { createAction } from '../createAction'
import { VIDEOS_TYPES } from './videos.types'

// other actions

export const setQuery = (query) => createAction(VIDEOS_TYPES.SET_QUERY, query)

export const setType = (type) => createAction(VIDEOS_TYPES.SET_TYPE, type)


// get videos actions

export const getTradingVideos = (videos) => createAction(VIDEOS_TYPES.SET_TRENDING, videos)

export const getResultsVideos = (videos) => createAction(VIDEOS_TYPES.SET_SEARCH_RESULTS, videos)

export const getChannels = (videos) => createAction(VIDEOS_TYPES.SET_CHANNELS, videos)

export const getPlaylist = (videos) => createAction(VIDEOS_TYPES.SET_PLAYLIST, videos)

export const setCurrentVideo = (video) => createAction(VIDEOS_TYPES.SET_CURRENT_VIDEO, video)

export const setRelatedVideos = (videos) => createAction(VIDEOS_TYPES.SET_RELATED_VIDEOS, videos)

export const setCurrentChannel = (channel) => createAction(VIDEOS_TYPES.SET_CURRENT_CHANNEL, channel)

export const setLoading = (boolean) => createAction(VIDEOS_TYPES.SET_LOADING, boolean)