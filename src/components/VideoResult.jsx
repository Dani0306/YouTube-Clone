import React, { useEffect, useState } from 'react'
import { getChannel } from '../api/apiCalls'

const VideoResult = ({ id,onClick,  description, channelId, title, channelTitle, url ,duration, viewCount, likeCount, commentCount }) => {

    const [mobile, setMovile] = useState(false)
    const [channel, setChannel] = useState(null)

    const formatDuration = (str = "") => {
        let duration = str.split('').filter(x => !isNaN(Number(x))).join('');
        switch(duration.length){
    
            case 3: return duration[0] + ':' + duration[1] + duration[2]
            case 4: return duration[0] + duration[1] + ':' + duration[2] + duration[3]
            case 5: return duration[0] + ':' + duration[1] +  duration[2] + ':' + duration[3] + duration[4];
            case 6: return duration[0]  + duration[1] + ':' + duration[2] + duration[3] + ':' + duration[5] + duration[5];
    
            default: return '00:' + duration;
        }
    }

    useEffect(() => {
        if(typeof(window) && window.innerWidth < 700) setMovile(true)
    }, [])

    useEffect(() => {
        const fetchChannel = async () => {
            const channel = await getChannel(channelId);
            if(channel) setChannel(channel)
        }
        fetchChannel()
    }, [])

  return (
    <div onClick={onClick} className='w-full h-[120px] md:h-[250px] flex items-center justify-between my-4'>
        <div className='h-full w-[50%] md:w-[25%] lg:w-[30%] relative'>
            <img src={url} className='h-full w-full object-cover' alt="video thumbnail" />
            <span className="text-xs text-white font-bold bg-[rgba(0,0,0,.7)] p-1 absolute right-2 bottom-1">
                {formatDuration(duration)}
            </span>
        </div>
        <div className='w-[50%] md:w-[75%] lg:w-[70%] h-full flex items-start justify-start flex-col pl-4 md:pl-6'>
            <h2 className='text-base md:text-xl font-bold text-white'>{mobile && title.length > 35 ? title.substring(0, 35) + '...' : title}</h2>
            <span className='text-sm text-[#bbb] mt-1 md:mt-2'>{viewCount} views</span>
            <div className='flex items-center justify-center mt-4 mb-4 md:mt-6 md:mb-6'>
                <img src={channel && channel.snippet.thumbnails.default.url} className='h-[30px] mx-2 rounded-full w-[30px]' alt="chanel image" />
                <span className='text-xs text-[#bbb]'>{channelTitle}</span>
            </div>
            <p className='text-[#bbb] hidden md:inline-flex text-sm'>{description.length > 100 ? description.substring(0, 100) : description}</p>
        </div>
    </div>
  )
}

export default VideoResult