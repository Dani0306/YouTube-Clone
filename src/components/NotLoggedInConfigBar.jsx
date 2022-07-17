import { Close, AccountBoxOutlined, SettingsOutlined, VerifiedUserOutlined, FeedbackOutlined, HelpOutline } from "@mui/icons-material"
import { useDispatch } from "react-redux"
import { showConfigMenu } from "../store/buttons/button.actions"

const NotLoggedInConfigBar = () => {

    const dispatch = useDispatch() 

    const handleShowMenu = () => {
        dispatch(showConfigMenu(false))
    }

  return (
    <>
        <li className='config-item'>
            <div className="config-div-item">
                <Close onClick={handleShowMenu} className="h-8 w-8 text-white"/>
            </div>
            <div className="config-span-div-item">
                <span className="config-span-item">
                    Account
                </span>
            </div>
        </li>
        <li className='config-item border-b border-[#7778]'>
            <div className="config-div-item">
                <AccountBoxOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className="config-span-div-item">
                <span className="config-span-item">
                    Sign In
                </span>
        </div>
        </li>
        <li className='config-item'>
            <div className="config-div-item">
                <SettingsOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className="config-span-div-item">
                <span className="config-span-item">
                    Settings
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className="config-div-item">
                <VerifiedUserOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className="config-span-div-item">
                <span className="config-span-item">
                    Your data in YouTube
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className="config-div-item">
                <FeedbackOutlined className="h-8 w-8 text-white"/>
            </div>
            <div className="config-span-div-item">
                <span className="config-span-item">
                Feedback
                </span>
            </div>
        </li>
        <li className='config-item'>
            <div className="config-div-item">
                <HelpOutline className="h-8 w-8 text-white"/>
            </div>
            <div className="config-span-div-item">
                <span className="config-span-item">
                Help
                </span>
            </div>
        </li>
</>
  )
}

export default NotLoggedInConfigBar