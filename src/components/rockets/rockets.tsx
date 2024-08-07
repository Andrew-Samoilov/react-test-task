import useSWR from 'swr';
import './rockets.css'
import rocketImg from '../hero/toy-rocket.gif'
import { Link } from 'react-router-dom';

const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then((res) => res.json());

interface Rocket {
  id: string;
  name: string;
  flickr_images: string[];
  height_w_trunk: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  return_payload_vol: {
    cubic_meters: number;
    cubic_feet: number;
  };
  trunk: {
    trunk_volume: {
      cubic_meters: number;
      cubic_feet: number;
    }
  };
  launch_payload_mass: {
    kg: number;
    lb: number;
  };
  return_payload_mass: {
    kg: number;
    lb: number;
  };
}

export default function Rockets() {
  const {
    data: rockets,
    error,
    isValidating,
  } = useSWR(' https://api.spacexdata.com/v4/dragons', fetcher);

  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  // console.log(rockets);

  return (
    <section className='rockets-section'>
      <h2>Our Rockets</h2>
      <div className='rockets-div'>
        {rockets.map((rocket: Rocket) =>
          <article key={rocket.id} className='rocket-article'>
            <Link to={`/rocket/${rocket.id}`}>
              <img
                src={rocketImg}
                alt={rocket.name}
                height='219px'
                className='rocket-img'
              />
              <h3>{rocket.name}</h3>
              <div className='div-parameter-values'>
                <div>Height</div>
                <div>{rocket.height_w_trunk.meters} m / {rocket.height_w_trunk.feet} ft</div>
              </div>
              <div className='div-parameter-values'>
                <div>diameter</div>
                <div>{rocket.diameter.meters} m / {rocket.diameter.feet} ft</div>
              </div>
              <div className='div-parameter-values'>
                <div>SPACECRAFT VOLUME</div>
                <div>{rocket.return_payload_vol.cubic_meters} m<sup>3</sup> / {rocket.return_payload_vol.cubic_feet} ft<sup>3</sup></div>
              </div>
              <div className='div-parameter-values'>
                <div>trunk volume</div>
                <div>{rocket.trunk.trunk_volume.cubic_meters} m<sup>3</sup> / {rocket.trunk.trunk_volume.cubic_feet} ft<sup>3</sup></div>
              </div>
              <div className='div-parameter-values'>
                <div>lunch payload mass</div>
                <div>{rocket.launch_payload_mass.kg.toLocaleString('en-US')} kg / {rocket.launch_payload_mass.lb.toLocaleString('en-US')} lbs</div>
              </div>
              <div className='div-parameter-values'>
                <div>return payload mass</div>
                <div>{rocket.return_payload_mass.kg.toLocaleString('en-US')} kg / {rocket.return_payload_mass.lb.toLocaleString('en-US')} lbs</div>
              </div>
            </Link>
          </article>)}
      </div>
    </section>
  );
}
