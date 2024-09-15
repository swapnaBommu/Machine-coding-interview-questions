import React from 'react'

const Carousel = ({
  images = [],
  isLoading = false,
  limtPerSlide = 1,
  imageLimit = images.length,
  customPrevbutton,
  customNextbutton
}) => {
  return isLoading?<div>Loading...</div> : <div className='carousel'>
    <div className='image-container'>
      {images.slice(0, imageLimit > images.length ? images.length : imageLimit)
      .map((image,index)=>{
          return <img
           key={image.id}
           src={image.url}
           alt={image.title}
           className='image' 
          />
      })}
    </div>
  </div>
}

export default Carousel