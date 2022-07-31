import { TailSpin } from "react-loader-spinner"
import { useSelector } from "react-redux"
import VideoRelatedVideoComponent from "./VideoRelatedVideoComponent"

const VideoPlayerRelated = ({ relatedLoading }) => {

  const relatedVideos = useSelector(state => state.videos.relatedVideos)


  return (
    <div className='videoplayer-related scrollbar-hide lg:w-[30%] lg:flex lg:flex-col'>
      {
          relatedLoading ? 
          
          <div className="w-full h-screen flex items-center justify-center">
            <div className="mt-[-150px]">
              <TailSpin color="#fff" widht={60} height={60}/>
            </div>
          </div> 
          
          : 
        
          relatedVideos.map((item, index) => {
              const { items } = item;
              const { contentDetails: { duration }, snippet: {  title, channelTitle, publishedAt, thumbnails: { high: { url } } }, statistics: { viewCount, } } = items[0];
              return <VideoRelatedVideoComponent key={index} duration={duration} channelTitle={channelTitle} publishedAt={publishedAt} viewCount={viewCount} title={title} url={url}/>
          })
      }
    </div>
  )
}

export default VideoPlayerRelated