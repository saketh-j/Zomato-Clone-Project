import React from 'react'
import './Header.css'
import {FiSearch} from 'react-icons/fi'
import {MdArrowDropDown,MdLocationOn,MdKeyboardArrowDown} from 'react-icons/md'

const Header = () => {
  return (
    <div className='max-width header'>
      <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" 
      alt="logo" className='header-logo' />
      <div className='header-right'>
         <div className='header-location-tracker'>
            <div className='location-wrapper'>
               <div className='location-icon-name'>
                <MdLocationOn className='absolute-center location-icon'/>
                <div>Hyderabad</div>
               </div>
              <i><MdArrowDropDown/></i>
            </div>
            <div className='location-separator'></div>
            <div className='header-searchBar'>
               <i><FiSearch className='absolute-center search-icon'/></i>
               <input type="text" className='search-input'
                placeholder='Search for a restaurant, cusinie or a dish' />
            </div>
         </div>
         <div className='profile-wrapper'>
             <img src="https://b.zmtcdn.com/data/user_profile_pictures/5e5/a8c9801273821cd71b8c7119918bc5e5.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
              alt="profile-img"  className='header-profile-image'/>
              <span className='header-username'>Saketh</span>
              <i><MdKeyboardArrowDown className='absolute-center profile-options-icon'/></i>
         </div>
      </div>
    </div>
  )
}

export default Header
