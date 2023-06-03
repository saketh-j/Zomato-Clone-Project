import React from 'react'
import "./dining.css"
import Collection from '../common/collection'
import {BsFilterRight} from 'react-icons/bs'
import { diningOut } from '../../data/diningOut'
import Filters from '../common/Filters'
import ExploreSection from '../common/exploreSection'

const collectionList =[
  {
    id:2,
    title:"16 Picturesque Cafes",
    cover:"https://b.zmtcdn.com/data/collections/bfa5063b43c9b8f6c9c3b1a37c815d3b_1674844132.jpg?output-format=webp",
    places:"16 Places"
  },
  {
    id:2 ,
    title:"17 Newly Opened Restauren....",
    cover:"https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674845310.jpg?output-format=webp",
    places:"17 Places"
  },
  {
    id:3 ,
    title:"14 Places for regional Cu.....",
    cover:"https://b.zmtcdn.com/data/collections/4d8bbdfe1fe2b4cfa8aad710676fcb61_1674847218.jpg?output-format=webp",
    places:"14 Places"
  },
  {
    id:4 ,
    title:"16 Best Pubs and Bars",
    cover:"https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674845423.jpg?output-format=webp",
    places:"16 Places"
  },
  {
    id:5 ,
    title:"13 Fine MicroBreweries",
    cover:"https://b.zmtcdn.com/data/collections/85e2a939e3081d0c056a819edac0f26e_1676541331.jpg?output-format=webp",
    places:"13 Places"
  },
  {
    id: 6,
    title:"18 Blissful Breakfast Places",
    cover:"https://b.zmtcdn.com/data/collections/43d0572e2bcdcefbc2cc9f6a86be05a8_1683054286.jpg?output-format=webp",
    places:"18 Places"
  },
  {
    id:7 ,
    title:"24 Must Visit Legendary ....",
    cover:"https://b.zmtcdn.com/data/collections/bae72a1db8edd0e325a9f8d0f40af692_1674844226.jpg?output-format=webp",
    places:"24 Places"
  },
  {
    id:8 ,
    title:"7 Themed Dining places",
    cover:"https://b.zmtcdn.com/data/collections/b90a3bc172dab4f5befb3389950ffcab_1674844363.jpg?output-format=webp",
    places:"7 Places"
  },
]

const diningFilters =[
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
      title:"Outdoor Seating"
  },
  {
      id:4,
      title:"Serves Alcohol",
  },
  {
    id:5,
    title:"Open Now",
},
]

const diningList =diningOut;
const DiningOut = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width'>
     <Filters  FilterList={diningFilters}/>
     <ExploreSection list={diningList} collectionName="Best Dining Restaurants near you in Jubilee Hills"/>
      </div>
    </div>
  )
}

export default DiningOut
