import React, { useState } from 'react'
import Header from '../../components/common/Header'
import TabOptions from '../../components/common/tabOptions'
import Footer from '../../components/common/Footer'
import Delivery from '../../components/Delivery'
import DiningOut from '../../components/DiningOut'
import NightLife from '../../components/NightLife'


const HomePage = () => {
    const [activeTab,setActiveTab] = useState("Delivery");
  return (
    <div>
       <Header/>
       <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
       {getCorrectScreen(activeTab)}
       <Footer/>
    </div>
    
  )
};

const getCorrectScreen =(tab)=>{
   switch(tab){
    case"Delivery":
        return <Delivery/>;
    case"DiningOut":
        return <DiningOut/>;
    case"NightLife":
        return <NightLife/>;
        default:
        return <Delivery/>;
   }
}

export default HomePage
