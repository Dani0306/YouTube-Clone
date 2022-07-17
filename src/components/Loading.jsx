import { TailSpin } from 'react-loader-spinner'

const Loading = () => {

  return (
    <div className='w-ful h-screen flex flex-col items-center justify-start'>
       <div className='flex flex-col items-center justify-center mt-[15%]'>
        <img src="/yt.png" className='h-[130px] w-[130px] object-contain' alt="" />
          <h2 className='text-white font-semibold mb-6 text-2xl'>YouTube</h2>
          <div className='mt-2'><TailSpin color="#fff" width={50} height={50}/></div>
       </div>
    </div>
  )
}

export default Loading