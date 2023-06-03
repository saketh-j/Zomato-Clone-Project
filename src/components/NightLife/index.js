import React from 'react'
import "./nightLife.css"
import Collection from '../common/collection'
import {LuArrowUpDown} from 'react-icons/lu'
import {BsFilterRight} from 'react-icons/bs'
import Filters from '../common/Filters'
import ExploreSection from '../common/exploreSection'
import { nightLife } from '../../data/nightLife'


const nightLifeFilters =[
  {
      id:1,
      icon: <i className='absolute-center'><BsFilterRight/> </i>,
      title:"Filters"
  },
  {
      id:2,
      icon: <i className='absolute-center'><LuArrowUpDown/></i>,
      title:"Distance"
  },
  {
      id:3,
      title:"Rating 4.0+"
  },
  {
      id:4,
      title:"Pubs & Bars",
  },
 
]
const collectionList =[
  {
    id:1,
    title:"13 Finest Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg?output-format=webp",
    places:"11 Places"
  },
]
const nightList =nightLife;

const NightLife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
      <Filters FilterList={nightLifeFilters}/>
      <ExploreSection list={nightList} collectionName='Nightlife Restaurants in Jubilee Hills'/>
      </div>
    </div>
  )
}

export default NightLife
