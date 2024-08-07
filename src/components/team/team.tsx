import './team.css'
import arrow from './arrow.svg'
import { teamMembers } from './teamMembers'
import team1 from './team1.png'

export default function Team() {

  return (
    <section className='team-section'>
      <div className='team-header-text-div'>
        <div>
          <h2>Team</h2>
          <p className='team-text'
          >Our team is composed of dedicated professionals with a passion for innovation and excellence. Each member brings unique skills and perspectives, making us a dynamic and versatile group. We are committed to achieving outstanding results and driving success in every project we undertake.</p>
        </div>
        <div>
          <button
            disabled={true}
            className='team-button'>
            <img src={arrow} alt=""
              width='77px;'
              height='78px;'
            />
          </button>
          <button
            disabled={true}
            className='team-button right-button'>
            <img src={arrow} alt=""
              width='77px;'
              height='78px;'
            />
          </button>
        </div>
      </div>

        {teamMembers.slice(0,2).map((item) =>
          <article
            key={item.id}
          className='team-article'
          >
            <img
              src={team1}
              alt={item.name}
              width='423px;'
            />
            <div className='team-profession'>{item.profession}</div>
            <div>{item.name}</div>
          </article>)}
    </section>
  );
}
