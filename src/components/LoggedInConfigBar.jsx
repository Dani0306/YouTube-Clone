import { AccountBoxOutlined,  VisibilityOff, PersonAddOutlined, YouTube, MonetizationOnOutlined, InsertChartOutlined, AdminPanelSettingsOutlined, SettingsOutlined, HelpOutlined, Close, LogoutOutlined,  } from '@mui/icons-material'
import { useDispatch } from 'react-redux';
import { showConfigMenu } from '../store/buttons/button.actions'
import { SignOutUser } from '../firebase/auth'

const LoggedInConfigBar = ({ user }) => {

    const { displayName, photoURL } = user;
    const dispatch = useDispatch()

    const handleShowMenu = () => {
        dispatch(showConfigMenu(false))
    }

  return (
    <>
        <Close onClick={handleShowMenu} className='absolute top-4 left-3 w-8 h-8 text-white'/>
        <div className='w-full h-[80px] flex mt-10'>
            <div className='w-[20%] pl-3 h-full flex items-center justify-start'>
                <img src={photoURL} className='w-[40px] h-[40px] object-contain rounded-full' alt="user profile" />
            </div>
            <div className='w-[70%] h-full pl-2 flex flex-col items-start justify-evenly'>
                <span className='text-base text-white'>{displayName}</span>
                <span className='text-sm text-blue-500'>Manage your Google account</span>
            </div>
        </div>
        <li className='config-item'>
            <div className='config-div-item'>
                <AccountBoxOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Your Chanel
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className='config-div-item'>
                <VisibilityOff className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Turn on Incognito
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className='config-div-item'>
                <PersonAddOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Add account
                </span>
            </div>
        </li>
        <li onClick={SignOutUser} className='config-item border-b border-[#7778]'>
            <div className='config-div-item'>
                <LogoutOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Logout
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className='config-div-item'>
                <YouTube className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Get youtube premuin
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className='config-div-item'>
                <MonetizationOnOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Purchases and memberships
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className='config-div-item'>
                <InsertChartOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Time watched
                </span> 
            </div>
        </li>
        <li className='config-item border-b border-[#7778]'>
            <div className='config-div-item'>
                <AdminPanelSettingsOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                Your data in Youtube
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className='config-div-item'>
                <SettingsOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Settings
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className='config-div-item'>
                <HelpOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className='config-span-div-item'>
                <span className='config-span-item'>
                    Help & feedback
                </span>
            </div>
        </li>
    </>
  )
}

export default LoggedInConfigBar