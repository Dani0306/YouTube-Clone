import { HomeIcon } from '@heroicons/react/solid'
import { ExploreOutlined, VideoLibraryOutlined, WatchLaterOutlined, VideoSettingsOutlined } from '@mui/icons-material' 
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AsideBar = () => {

    const showSideBar = useSelector(state => state.buttons.asideBar)

  return (
   <div className={`hidden lg:inline-flex sticky top-[140px] left-0 z-30`}>
     <div className={`${showSideBar ? 'left-0' : 'left-[-168px]'} h-screen hidden bg-[#333] pt-20 overflow-hidden items-center flex-col w-[220px] absolute transition-all duration-1000 lg:flex`}>
        <div className='item'>
            <div className='span-item'>
                <Link to='/'>
                    <span className='text-white text-base'>Home</span>
                </Link>
            </div>
            <div className='h-full w-[20%]'>
                <HomeIcon className='text-white h-8 w-8'/>
            </div>
        </div>
        <div className='item'>
            <div className='span-item'>
                <span className='text-white text-base'>Explore</span>
            </div>
            <div className='h-full w-[20%]'>
                <ExploreOutlined className='text-white h-8 w-8'/>
            </div>
        </div>
        <div className='item'>
            <div className='span-item'>
                <span className='text-white text-base'>Subscriptions</span>
            </div>
            <div className='h-full w-[20%]'>
                <VideoSettingsOutlined className='text-white h-8 w-8'/>
            </div>
        </div>
        <div className='item'>
            <div className='span-item'>
                <span className='text-white text-base'>Library</span>
            </div>
            <div className='h-full w-[20%]'>
                <VideoLibraryOutlined className='text-white h-8 w-8'/>
            </div>
        </div>
        <div className='item'>
            <div className='span-item'>
                <span className='text-white text-base'>History</span>
            </div>
            <div className='h-full w-[20%]'>
                <WatchLaterOutlined className='text-white h-8 w-8'/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default AsideBar