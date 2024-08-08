import './rocket-rout.css'

import Capabilities from "../components/capabilities/capabilities";
import Header from "../components/header/header";
import OneRocket from '../components/one-rocket/one-rocket';
import Starbase from "../components/starbase/starbase";

export default function RocketRout() {
  return (
    <div className='rocket-route-div'>
      <Header/>
      <OneRocket />
      <Capabilities />
      <Starbase />
    </div>
  )
}
