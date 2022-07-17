import ConfigMenu from '../components/ConfigMenu'
import VideoPlayerActions from '../components/VideoPlayerActions'
import VideoPlayerRelated from '../components/VideoPlayerRelated'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getChannel, getRelatedVideos, getVideo } from '../api/apiCalls'
import { useDispatch } from 'react-redux'
import { setCurrentVideo, setRelatedVideos, setCurrentChannel } from '../store/videos/videos.actions'
import Loading from '../components/Loading'

const VideoPlayer = () => {

  const currentVideo = useSelector(state => state.videos.currentVideo);
  const [relatedLoading, setRelatedLoading] = useState(false)
  const loading = useSelector(state => state.videos.loading)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
      const getChannels = async () => {
        setRelatedLoading(true)
        let items;
        if(currentVideo?.snippet?.tags){
          items = await getRelatedVideos(currentVideo?.snippet?.tags?.slice(0, 4), "5");
        } else {
          let title = [currentVideo?.snippet?.title]
          items = await getRelatedVideos(title, "5");
        }
        const relatedvideos = await Promise.all(items);
        dispatch(setRelatedVideos(relatedvideos))
        setRelatedLoading(true)
    }
    getChannels()
  }, [])

  useEffect(() => {
    const getCurrentVideo = async () => {
      const video = await getVideo(id);
      if(video) {
        dispatch(setCurrentVideo(video))
        const { snippet: { channelId } } = video;
        const channel = await getChannel(channelId)
        if(channel) dispatch(setCurrentChannel(channel))
      }
    }
    getCurrentVideo()
  }, [])

  if(loading) return <Loading />


  return (
    <div className='w-full flex h-screen justify-between overflow-y-scroll scrollbar-hide lg:px-10 pt-10'> 
        <div className='w-full h-screen flex flex-col lg:w-[100%] lg:flex-row'>          
            {
              currentVideo && 
              <>
                <VideoPlayerActions />
                <VideoPlayerRelated relatedLoading={relatedLoading}/>
              </>
            }
        </div>
        <ConfigMenu />
    </div>
  )
}

export default VideoPlayer