import { NotificationsOutlined } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { getChannel } from '../api/apiCalls'

const ChanelPreview = ({ url, title, description, customUrl, country, id}) => {

  const [channel, setChannel] = useState(null)
  console.log(channel)

  useEffect(() => {
    const fetchChannel = async () => {
      const channel = await getChannel(id);
      if(channel) setChannel(channel)
    }
    fetchChannel();
  }, [])

  return (
   <>
      {
        channel &&  <div className='w-full h-[130px] md:h-[250px] flex items-center justify-between my-4'>
        <div className="w-[45%] md:w-[35%] lg:w-[30%] flex items-center justify-center">
         {
          channel &&  <img src={channel.snippet.thumbnails.default.url} className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] rounded-full object-contain" alt="channel image" />
         }
        </div>
        <div className="w-[55%] md:w-[65%] lg:w-[70%] flex items-center justify-start px-4 md:justify-between">
          <div className="w-max flex flex-col h-full">
            <h2 className="text-white text-base font-bold md:text-2xl my-2">
              {title}
            </h2>
            <span className="text-xs md:text-sm text-[#bbb] mt-1">
              {channel.statistics.subscriberCount} subscribers
            </span>
            <span className="text-xs md:text-sm text-[#bbb]">
              {channel.statistics.videoCount} videos
            </span>
            <span className="hidden text-sm md:inline-flex text-[#bbb]">
              {description}
            </span>
          </div>
          <div className="hidden md:flex h-full items-center justify-center">
            <button className="text-base py-2 px-10 bg-red-600 text-white">
                SUBSCRIBE
            </button>
            <button className="text-xl py-1 px-4 bg-transparent">
              <NotificationsOutlined className='w-6 h-6 text-white'/>
            </button>
          </div>
        </div>
    </div>
      }
   </>
  )
}

export default ChanelPreview