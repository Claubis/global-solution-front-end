
/*import HomePage from '../components/Home'
import DetailsCompany from '../components/DetailsCompany'
import About from '../components/About'
import AboutService from '../components/AboutService'
import AboutSalesForce from '../components/AboutSalesForce'
import InfoSalesForce from '@/components/InfoSalesForce'
import ModalLogin from '../components/ModalLogin'
import AboutForms from '../components/AboutForms'
import InfiniteMovingCardsDemo from './CarroselPartner' */

import HomePage from "@/components/HomePage"
import Missao from "@/components/Missao"
import AboutProject from "@/components/AboutProject"
import Funcionalidades from "@/components/Funcionalidades"
import Data from "@/components/Data"
import AboutMission from "@/components/AboutMission"
import CarroselEvents from "@/components/CarroselEvents"
import RoadMap from "@/components/RoadMap"
import Education from "@/components/Education"

export default function Home() {

  return (
    <div> 
      
      <HomePage/>
      <Missao/>
      <AboutProject/>
      <Funcionalidades/>
      <Data/>
      <AboutMission/>
      <CarroselEvents/>
      <RoadMap/>
      <Education/>

    </div>
  )
}