import { FlagOutlined, LibraryAddOutlined, ReplyOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@mui/icons-material'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';

const VideoPlayerActions = () => {

    const currentVideo = useSelector(state => state.videos.currentVideo);
    const currentChannel = useSelector(state => state.videos.currentChannel);
    console.log(currentChannel)
    const { id } = useParams()

        // const { snippet: { channelTitle, publishedAt, tags, channelId, deafultAudioLanguage, description, title, }, 
        // contentDetails: { duration, definition }, thumbnails: { high: { url } },
        // statistics: { commentCount, likeCount, viewCount } } = currentVideo;

  return (
    <div className='w-full flex flex-col lg:w-[70%] mr-10'>
            {
               
                <>
                    <div className='w-full min-h-[210px] max-h-[700px] max-w-full flex-grow items-center justify-center flex'>
                  <video src={`https://www.youtube.com/watch?v=${id}`} controls className='w-full h-full object-cover'></video>
              </div>


            <div className='w-full lg:flex justify-between items-center'>      
              <div className='w-full flex flex-col items-start justify-center pt-3 px-4 lg:px-0'>
                <h2 className='text-xl font-semibold text-white'>{currentVideo?.snippet?.title}</h2>
                <span className='text-[#bbb] text-sm'>{currentVideo?.statistics?.viewCount} views - hace 9 dias</span>
              </div>

            <div className='w-full flex items-center justify-between md:justify-start my-5 px-4 lg:justify-end'>
                <div className='flex flex-col items-center justify-center md:mr-4'>
                    <button className='flex items-center justify-center'>
                        <ThumbUpOutlined className='text-white h-8 w-8'/>
                    </button>
                    <strong className='text-white text-xs mt-1'>
                        {currentVideo.statistics?.likeCount}
                    </strong>
                </div>
                <div className='flex flex-col items-center justify-center md:mx-4'>
                    <button className='flex items-center justify-center md:mx-4'>
                        <ThumbDownOutlined className='text-white h-8 w-8'/>
                    </button>
                    <strong className='text-white text-xs mt-1'>
                        Dislike
                    </strong>
                </div>
                <div className='flex flex-col items-center justify-center md:mx-4'>
                    <button className='flex items-center justify-center'>
                        <ReplyOutlined className='text-white h-8 w-8'/>
                    </button>
                    <strong className='text-white text-xs mt-1'>
                        Share
                    </strong>
                </div>
                <div className='flex flex-col items-center justify-center md:mx-4'>
                    <button className='flex items-center justify-center'>
                        <LibraryAddOutlined className='text-white h-8 w-8'/>
                    </button>
                    <strong className='text-white text-xs mt-1'>
                        Save
                    </strong>
                </div>
                <div className='flex flex-col items-center justify-center md:ml-4'>
                    <button className='flex items-center justify-center'>
                        <FlagOutlined className='text-white h-8 w-8'/>
                    </button>
                    <strong className='text-white text-xs mt-1'>
                        Report
                    </strong>
                </div>
            </div>
                </div>
            <div className='flex items-center justify-between w-full my-2'>
                <div className='w-[60%] flex items-center justify-betweeen'>
                    <div className='w-max px-4 flex items-center justify-center'>
                        <img src={currentChannel?.snippet?.thumbnails?.default?.url} className='w-[40px] h-[40px] rounded-full object-contain' alt="" />
                    </div>
                    <div className='w-[70%] flex flex-col items-start justify-center'>
                        <span className='font-bold text-white'>{currentVideo?.snippet?.channelTitle}</span>
                        <span className='text-[#bbb]'>{currentChannel?.statistics?.subscriberCount} subscriptors</span>
                    </div>
                </div>
                <div className='w-[40%] flex items-center justify-end px-4'>
                    <button className='border-none text-red-700 lg:text-white lg:bg-red-700 text-sm lg:py-2 lg:px-6 lg:font-semibold'>SUBSCRIBE</button>
                </div>
            </div>
            <div className='flex items-center justify-between my-2 px-4 lg:my-4'>
                <strong className='text-white'>Comments . {currentVideo?.statistics?.commentCount}</strong>
                <button className='lg:hidden'>watch</button>
            </div>
                </>
            }
    </div>

  )
}

export default VideoPlayerActions