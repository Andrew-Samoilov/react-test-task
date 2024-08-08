import './rocketRout.css'
import { useParams } from "react-router-dom";
import Capabilities from "../components/capabilities/capabilities";
import Header from "../components/header/header";
import Starbase from "../components/starbase/starbase";

export default function RocketRout() {
    const { rocketId } = useParams();
    // console.log(rocketId);

    return (
        <div className='starbase-div'>
            <Header />
            <h1>Rocket</h1>
            <p>Id: {rocketId}</p>
            <Capabilities />
            <Starbase />
        </div>
    )
}
