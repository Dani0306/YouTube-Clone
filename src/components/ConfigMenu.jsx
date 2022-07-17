import { useSelector } from "react-redux"
import NotLoggedInConfigBar from "./NotLoggedInConfigBar"
import LoggedInConfigBar from "./LoggedInConfigBar"

const ConfigMenu = () => {

    const user = useSelector(state => state.user.user)
    const showConfigMenu = useSelector(state => state.buttons.configMenu)

    if(!showConfigMenu) return null

  return (
    <div className="w-full h-screen lg:h-max absolute z-20 top-0 py-2 bg-[#222] lg:border border-[#444] flex flex-col lg:w-[300px] lg:right-5 lg:top-[80px]">
        <ul className="flex flex-col w-full h-max">
            {
                user ? <LoggedInConfigBar user={user} /> : <NotLoggedInConfigBar />
            }
        </ul>
    </div>
  )
}

export default ConfigMenu