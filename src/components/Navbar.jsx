import { Outlet } from 'react-router-dom'
import { MenuIcon, SearchIcon, UserCircleIcon, DotsVerticalIcon, VideoCameraIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import SearchBar from './SearchBar'
import { useEffect } from 'react'
import { GridOn, NotificationsOutlined, ScreenshotMonitorOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { showSearchBar as showSearchBarFunction, showAsideBar as showAsideBarFunction} from '../store/buttons/button.actions'
import { signUpWithPopup } from '../firebase/auth'
import { showConfigMenu } from '../store/buttons/button.actions'


const Navbar = () => {

  const [mobile, setIsMovile] = useState(false)
  const dispatch = useDispatch()
  const showAsideBar = useSelector(state => state.buttons.asideBar)
  const showSearchBar = useSelector(state => state.buttons.searchBar)
  const user = useSelector(state => state.user.user);
 
  const handleShowBar = (bool) => {
      dispatch(showSearchBarFunction(bool))
  }

  const handleShowAsideBar = () => {
    dispatch(showAsideBarFunction(!showAsideBar))
  }

  const handleShowMenu = () => {
    dispatch(showConfigMenu(true))
  }


  useEffect(() => {
    if(typeof(window) !== undefined && window.innerWidth <= 700) setIsMovile(true)
  }, [])

  return (
    <>
        <nav className='w-full h-[80px] bg-[#222] flex items-center justify-between overflow-hidden px-3 z-10 sticky top-0 lg:px-7'> 

                <div className='flex w-max h-full items-center justify-center'>
                  <button className='mr-6 hidden lg:inline-flex'>
                    <MenuIcon onClick={handleShowAsideBar} className='text-[#bbb] h-8 w-8'/>
                  </button>
                  <img className='w-[35px] h-[35px] object-contain' src="/yt.png" alt="" />
                  <h2 className='font-semibold text-white text-2xl ml-1'>YouTube</h2>
                 </div>


           <SearchBar isMovile={mobile} handleShowBar={handleShowBar} showBar={showSearchBar} />

           <div className='flex items-center justify-center h-full w-max'>
              {user ? 
              <>
                  <ScreenshotMonitorOutlined className='inline-block lg:!hidden text-[#bbb] h-7 w-7 mx-1'/> 
                  <NotificationsOutlined className='inline-block lg:!hidden text-[#bbb] !h-7 !w-7  mx-1'/> 
                  <SearchIcon onClick={() => handleShowBar(true)} className='lg:hidden text-[#bbb] h-[26px] w-[26px] mx-1'/>
              </>: 
              <>
                   <UserCircleIcon className='inline-block lg:hidden text-[#bbb] h-8 w-8 ml-2'/>
                    <SearchIcon onClick={() => handleShowBar(true)} className='inline-block lg:hidden text-[#bbb] h-7 w-7'/>
              </>}


                {/* DEKSTOP DESIGN */}

              {
                user ? <>
                <button className=' hidden  items-center justify-evenly h-full mx-4 lg:flex'>
                    <VideoCameraIcon className='text-white h-8 w-8'/>
                    </button>
                  <button className=' hidden  items-center justify-evenly h-full mx-4 lg:flex'>
                    <GridOn className='text-white h-8 w-8'/>
                    </button>
                    <button className=' hidden items-center justify-center h-full mx-4 mr-8 lg:flex'>
                      <NotificationsOutlined className='text-white !h-7 !w-7'/>
                    </button>
                    <div onClick={handleShowMenu} className='w-max h-full flex items-center justify-center'>
                        <img className='w-[32px] ml-3 lg:ml-0 h-[32px] lg:w-[40px] lg:h-[40px] object-contain rounded-full' src={user.photoURL} alt="user profile" />
                    </div>
                </> : 
                <>
                  <button className=' hidden  items-center justify-evenly h-full mx-4 lg:flex'>
                    <GridOn className='text-white h-8 w-8'/>
                  </button>
                  <button className=' hidden  items-center justify-center h-full mx-4 mr-8 lg:flex'>
                    <DotsVerticalIcon className='text-white h-6 w-6'/>
                  </button>
                  <button onClick={signUpWithPopup} className='hidden  items-center justify-center h-[50%] border border-blue-500 px-5 lg:flex'>
                      <UserCircleIcon className='text-blue-500 mr-2 h-7 w-7'/>
                      <h3 className='text-base text-blue-500 ml-2'>LOGIN</h3>
                    </button>
                </>
              }
           </div>
        </nav>
        <Outlet />
    </>
  )
}

export default Navbar

