import React from 'react'
import './delivery.css'
import Filters from '../common/Filters'
import {BsFilterRight} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import DeliveryCollections from './deliveryCollections'
import TopBrands from './topBrands'
import ExploreSection from '../common/exploreSection'
import { restaurants } from '../../data/restaurants'

const deliveryFilters =[
    {
        id:1,
        icon: <i className='absolute-center'><BsFilterRight/> </i>,
        title:"Filters"
    },
    {
        id:2,
        title:"Rating 4.0+"
    },
    {
        id:3,
        title:"Pure Veg"
    },
    {
        id:4,
        title:"Cuisines",
        icon:<i className='absolute-center'><IoIosArrowDown/></i>,
    },
]
const restaurantList =restaurants;

const Delivery = () => {
  return (
    <div>
      <div className='max-width'>
        <Filters FilterList={deliveryFilters}/>
      </div>
      <DeliveryCollections/>
      <TopBrands/>
      <ExploreSection  list={restaurantList} collectionName='Delivery Restaurents in Hyderabad'/>

    </div>
  )
}

export default Delivery
