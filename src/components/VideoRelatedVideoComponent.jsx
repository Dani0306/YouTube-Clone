const VideoRelatedVideoComponent = ({ duration, title, channelTitle, publishedAt, url, viewCount }) => {

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

  return (
    <div className='w-full h-[300px] lg:h-[120px] flex flex-col lg:flex-row items-center justify-between my-4'>
        <div className='w-full lg:w-[40%] h-[65%] lg:h-full flex items-center justify-center relative'>
            <img src={url} className='w-full h-full object-cover' alt="" />
            <span className="text-xs text-white font-bold bg-[rgba(0,0,0,.7)] p-1 absolute right-2 bottom-1">
                {formatDuration(duration)}
            </span>
        </div>
        <div className='w-full h-[35%] lg:w-[60%] lg:h-full flex flex-col items-start justify-start px-4'>
            <h2 className='text-white font-semibold text-xl mt-1'>{title.length > 45 ? title.substring(0, 45) : title}</h2>
            <span className='text-[#bbb] text-sm mt-1'>{channelTitle}</span>
            <span className='text-[#bbb] text-sm mt-1'>{viewCount} views - 2 years ago</span>
        </div>
    </div>
  )
}

export default VideoRelatedVideoComponent