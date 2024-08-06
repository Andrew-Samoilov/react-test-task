import About from '../components/about/about'
import Counters from '../components/counters/counters'
import Hero from '../components/hero/hero'
import Rockets from '../components/rockets/rockets'

export default function Home() {
    return (
        <>
            <Hero />
            <Rockets />
            <Counters />
            <About />
            <h2>Team</h2>
            <h2>Capabilities</h2>
        </>
    )
}
