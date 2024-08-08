import About from '../components/about/about'
import Capabilities from '../components/capabilities/capabilities'
import Counters from '../components/counters/counters'
import Hero from '../components/hero/hero'
import Rockets from '../components/rockets/rockets'
import Team from '../components/team/team'
import './homeRout.css'

export default function Home() {
    return (
        <>
            <Hero />
            <Rockets />
            <Counters />
            <About />
            <Team />
            <Capabilities />
        </>
    )
}
