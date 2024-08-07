import './about.css'
import space from './space-video.jpg'

export default function About() {
    return (
        <section>
            <h2 id='about'>About us</h2>
            <img
                src={space}
                alt="about us video"
                width='1321px;'
                className='about-img'
            ></img>
        </section>
    );
}
