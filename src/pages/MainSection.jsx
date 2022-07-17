import { useSelector } from "react-redux"
import AsideBar from "../components/AsideBar"
import ConfigMenu from "../components/ConfigMenu"
import VideoPreview from "../components/VideoPreview"
import { getTrendingdingVideos } from '../api/apiCalls.js'
import { getTradingVideos, setCurrentVideo, setLoading, setType } from '../store/videos/videos.actions.js'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Loading from "../components/Loading"

const MainSection = () => {

  const videos = useSelector(state => state.videos.trending)
  const type = useSelector(state => state.videos.type)
  const loading = useSelector(state => state.videos.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleVideoClick = (video, id) => {

    if(!video || !id) return;

    dispatch(setCurrentVideo(video))
    dispatch(setType('currentVideo'))
    navigate('/watch/' + id);
    
  }

  useEffect(() => {
  const getVideos = async () => { 
    dispatch(setLoading(true))
    const items = await getTrendingdingVideos()
    if(items) {
      dispatch(getTradingVideos(items))
      dispatch(setType('trending'))
      dispatch(setLoading(false))
    }
  }
  getVideos()
}, [])

 if(loading) return <Loading />


  return (

    <div className='w-full h-screen flex justify-between'>

      <AsideBar  />
      <div className="main-section scrollbar-hide">
        {
          type === 'trending' && videos.map(item => {
            const { kind } = item;
            if(kind.includes('channel')) return
            else {
              const { id, contentDetails: { duration }, snippet: { description, channelId, title, channelTitle,  thumbnails: { high: { url } } }, statistics: { viewCount, likeCount, commentCount } } = item
              return (
                <VideoPreview onClick={() => handleVideoClick(item, id)} key={id} description={description} duration={duration} channelId={channelId} title={title} channelTitle={channelTitle} url={url} viewCount={viewCount} commentCount={commentCount} likeCount={likeCount}/>
              )
            }
          })
        }
      </div>
        <ConfigMenu />
    </div>
  )
}

export default MainSection