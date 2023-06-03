import React from 'react'
import FilterItem from './filterItem'
import './filters.css'

const Filters = ({FilterList}) => {
  return (
    <div className='filters'>
       {FilterList && FilterList.map((filter)=>{
          return <FilterItem filter={filter} key={filter.id}/>
       })}
    </div>
  )
}

export default Filters
