import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onAuthStateChangedListener } from './firebase/auth.js'
import { createDocumentUser } from './firebase/auth.js'
import { login } from './store/user/user.actions'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import MainSection from './pages/MainSection'
import Results from './pages/Results.jsx'
import VideoPlayer from './pages/VideoPlayer.jsx'

const App = () => {  

const dispatch = useDispatch()

useEffect(() => {
  const unsubscribe = onAuthStateChangedListener(user => {
    if(user){
      const { displayName, email, photoURL } = user;
      dispatch(login({ displayName, email, photoURL }))
      createDocumentUser(user)
    } else dispatch(login(user))
    
  })

  return unsubscribe;
}, [dispatch])


  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<MainSection />}/>
        <Route path='/results' element={<Results />}/>
        <Route path='/watch/:id' element={<VideoPlayer />}/>
      </Route>
    </Routes>
  )
}

export default App




{/* <Routes>
<Route index element={<Navbar />}>

</Route>
</Routes> */}