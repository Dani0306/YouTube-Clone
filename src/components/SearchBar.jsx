import { ChevronLeftIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon} from '@heroicons/react/outline'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../api/apiCalls'
import { setQuery, setType, setLoading } from '../store/videos/videos.actions'
import { getResultsVideos } from '../store/videos/videos.actions'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const SearchBar = ({ isMovile, showBar, handleShowBar }) => {

  const query = useSelector(state => state.videos.query);
  const loading = useSelector(state => state.videos.loading)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const handleChange = ({ target: { value } }) => {
      dispatch(setQuery(value))
  }

  const removeSpaces = str => str.replace(/\s/g, '');

  const handleSubmit = async (e) => {

    e.preventDefault();
    if(!query) return;
    dispatch(setLoading(true))

    const items = await search(removeSpaces(query));
    const videos = await Promise.all(items)
    dispatch(setType('results'))
    if(videos) {
      dispatch(getResultsVideos(videos))
      if(location.pathname !== '/results') navigate('/results')
      dispatch(setLoading(false))
    } else {
      console.log('there are no videos')
    }
  }

  return (  
    <form onSubmit={handleSubmit} className={`${isMovile && showBar ? 'flex' : 'hidden'} z-10 items-center px-2 bg-[#222] absolute justify-between w-full py-4 top-0 left-0 lg:flex lg:relative lg:top-auto lg:left-auto lg:justify-center lg:w-[40%]`}>
        <ChevronLeftIcon onClick={() => handleShowBar(false)} className='text-[#bbb] mr-1 w-7 h-7 lg:hidden'/>
         <input  onChange={handleChange} value={query} autoFocus name='query' type="text" className="w-[80%] bg-[#4449] px-4 text-white py-2 text-base border-none outline-none" placeholder='Search' />
         <button className='py-2 hidden text-base px-6 bg-[#555] lg:inline-block'><SearchIcon className='text-[#aaa] h-[23px] w-[23px]'/></button>
        <MicrophoneIcon className='text-[#bbb] mr-1 w-7 h-7 ml-1 lg:hidden'/>
    </form>
  )
}

export default SearchBar