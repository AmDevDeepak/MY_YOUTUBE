import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';
const MainContainer = () => {
  return (
      <div className='w-full flex flex-col gap-3 relative mt-[6rem]'>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer