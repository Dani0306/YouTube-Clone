import ConfigMenu from "../components/ConfigMenu"
import { useDispatch, useSelector } from "react-redux"
import AsideBar from "../components/AsideBar";
import VideoResult from "../components/VideoResult";
import ChanelPreview from "../components/ChanelPreview";
import { useNavigate } from "react-router-dom";
import { setCurrentVideo, setType } from "../store/videos/videos.actions";
import { useEffect } from "react";
import Loading from "../components/Loading";


const Results = () => {

    const navigate = useNavigate()
    const query = useSelector(state => state.videos.query)
    const results = useSelector(state => state.videos.searchResults);
    const type = useSelector(state => state.videos.type);
    const loading = useSelector(state => state.videos.loading)
    const dispatch = useDispatch()

    const handleVideoClick = (video, id) => {

    if(!video || !id) return;
      dispatch(setCurrentVideo(video))
      dispatch(setType('currentVideo'))
      navigate('/watch/' + id);
    }

    useEffect(() => {
      if(!query) navigate('/')
    }, [])

    if(loading) return <Loading />

  return (
        <div className="w-full h-screen flex justify-between">
        <AsideBar />
            <div className="w-full lg:w-[85%] h-full flex flex-col pt-12 px-6 overflow-y-scroll scrollbar-hide pb-10">
                {
                    type === 'results' && results.map(item => {
                      const { kind } = item;
                      if(kind.includes('channel')){
                        const { id, snippet: { title, description, customUrl, country, thumbnails: { default: { url } } } } = item;
                        return (
                          <ChanelPreview key={id} id={id} title={title} description={description} customUrl={customUrl} url={url} country={country}/>
                        )
                      }
                      else if(kind.includes('video')){
                        const { id, contentDetails: { duration }, snippet: { description, channelId, title, channelTitle,  thumbnails: { high: { url } } }, statistics: { viewCount, likeCount, commentCount } } = item;
                        return (
                        <VideoResult onClick={() => handleVideoClick(item, id)} key={id} description={description} channelId={channelId} duration={duration} title={title} channelTitle={channelTitle} url={url} viewCount={viewCount} commentCount={commentCount} likeCount={likeCount}/>
                      )
                      } else return null
                    })
                }
            </div>
            <ConfigMenu />
        </div>
  )
}

export default Results
