import React from 'react'
import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const brandList=[
    {
        id:1,
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d76be28e0885f4563a1dbaf3a45f4b74_1635882663.png"
    },
    {
        id:2,
        time:"55 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0f13b4a115d1420b049835a5b2037a46_1649660664.png"
    },
    {
        id:3,
        time:"35 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/8e611fa769c66049e2af45b00b1d8d52_1635882594.png"
    },
    {
        id:4,
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252531.png"
    },
    {
        id:5,
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433071.png"
    },
    {
        id:6,
        time:"32 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/3d80cb89fca9e212f7dab2c1914ebd8f_1643983679.png"
    },
    {
        id:7,
        time:"16 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/50760f50e2c9d1220c3c98e5a32eba28_1661166664.png"
    },
    {
        id:8,
        time:"25 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/cba530e2b1d8439cd4170fef9b3f1d51_1635882104.png"
    },
    {
        id:9,
        time:"14 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id:10,
        time:"23 min",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6f7f4964abc7bb71c4bc370ccf36ff91_1633121322.png"
    },
   
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<NextArrow/> ,
    prevArrow:<PrevArrow/> ,
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
       <div className='collection-title'>
          Top brands for you
       </div>
       <Slider {...settings}>
       { brandList.map((brand)=>{
          return <div>
             <div className='top-brands-cover'>
                 <img src={brand.cover} alt={brand.time} className='top-brands-image' />
             </div>
          </div>
       })}
       </Slider>
    </div>
  )
}

export default TopBrands
