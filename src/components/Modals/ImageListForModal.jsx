import React from 'react'

const ImageListForModal = ({ imgId, setHeroImgId, item }) => {
  return (
    <div onClick={() => setHeroImgId(imgId)} className="w-[18%] grad-border-olc hover:cursor-pointer">
    <img className="w-[194px] h-[166px]" src={item} alt="room details photo" />
  </div>
  )
}

export default ImageListForModal