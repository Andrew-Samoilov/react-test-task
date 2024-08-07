import './team.css'
import arrow from './arrow.svg'

export default function Team() {
  return (
    <section className='team-section'>
      <div>
        <h2>Team</h2>
        <p className='team-text'
        >Our team is composed of dedicated professionals with a passion for innovation and excellence. Each member brings unique skills and perspectives, making us a dynamic and versatile group. We are committed to achieving outstanding results and driving success in every project we undertake.</p>
        <div>
          <button
            className='team-button'
            disabled={true}>
            <img src={arrow} alt=""
              width='77px;'
              height='78px;'
            />
          </button>
          <button
            className='team-button'>
            <img src={arrow} alt=""
              width='77px;'
              height='78px;'
              className='right-button'
            />
          </button>
        </div>
      </div>

      <div>face1</div>
      <div>face2</div>
    </section>
  );
}
