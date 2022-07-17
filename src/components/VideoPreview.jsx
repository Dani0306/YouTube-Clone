import { useEffect, useState } from "react";
import { getChannel } from "../api/apiCalls";

const VideoPreview = ({ onClick, id, description, channelId, title, channelTitle, url , duration, viewCount, likeCount, commentCount } ) => {


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

    const formatNumbers = (str = "") => {
        let arr = str.split('').filter(x => !isNaN(Number(x)));
        let amount = Math.floor(arr.length / 3)
    
        if(amount > 0){
            return arr.reverse().map((item, index) => {
                if((index + 1) % 3 === 0 && index !== 0 && index !== (arr.length - 1)) return item + ','
                else return item
            }).reverse().join('')
        }
    
        return arr.join('')
    }
    

    useEffect(() => {
        const fetchChannel = async () => {
          const channel = await getChannel(channelId);
          if(channel) setChannel(channel)
        }
        fetchChannel();
      }, [])
    

  return (
    <div onClick={onClick} className="flex items-center justify-center min-h-[300px] max-h-[400px] w-full flex-col my-4 flex-grow">
        <div className="w-full h-[65%] relative">
            <img src={url} className="w-full h-full object-cover" alt="thumbnail" />
            <span className="text-xs text-white font-bold bg-[rgba(0,0,0,.7)] p-1 absolute right-2 bottom-1">
                {formatDuration(duration)}
            </span>
        </div>

        <div className="flex items-center justify-center w-full h-[35%] px-4">
            <div className="h-full w-max flex items-center justify-start pt-2">
                <img src={channel && channel.snippet.thumbnails.default.url} className="w-[40px] h-[40px] rounded-full object-contain" alt="chanel image" />
            </div>
            <div className="w-[100%] h-full flex items-start justify-center flex-col pt-2 px-4">
                <strong className="text-base font-bold text-white mt-1">{title.length > 40 ? title.substring(0, 40) + '...' : title}</strong>
                <span className="text-xs text-white">{channelTitle}</span>
                <span className="text-xs text-white mt-3">{formatNumbers(viewCount)} views - 5 months ago</span>
            </div>
        </div>
    </div>
  )
}

export default VideoPreview