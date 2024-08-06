import './hero.css'
import globe from './globe.svg'
import Header from '../header/header'

export default function Hero() {
    return (
        <section className='hero-section'>
            <Header />
            <div className="hero-text">dive deep in to the future</div>
            <div className='hr-div'>
                <img
                    src={globe}
                    alt="globe"
                    width='33px;'
                    height='33px;'
                />
                <hr className='hr' />
            </div>
        </section>
    )
}
