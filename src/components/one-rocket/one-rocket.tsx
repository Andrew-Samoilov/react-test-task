import './one-rocket.css'
import rocketImg from '../hero/toy-rocket.gif'
import { useParams } from 'react-router-dom';
import { Rocket } from '../../types/Rocket.types'
import useSWR from 'swr';

const fetcher = (...args: [RequestInfo, RequestInit?]) => fetch(...args).then((res) => res.json());

export default function OneRocket() {
  const { rocketId } = useParams();
  const {
    data: rockets,
    error,
    isValidating,
  } = useSWR(' https://api.spacexdata.com/v4/dragons', fetcher);

  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  const oneRocket = rockets.find((item: Rocket) => item.id === rocketId);

  return (
    <section>
      <h2>{oneRocket.name}</h2>
      <article className='one-rocket-article'>
        <img src={rocketImg} alt={oneRocket.name} width='791px;' className='rocket-img' />
        <div>
          <h3 className='one-rocket-h3'>{oneRocket.name}</h3>
          <div className='div-parameter-values'>
            <div>Height</div>
            <div>{oneRocket.height_w_trunk.meters} m / {oneRocket.height_w_trunk.feet} ft</div>
          </div>
          <div className='div-parameter-values'>
            <div>diameter</div>
            <div>{oneRocket.diameter.meters} m / {oneRocket.diameter.feet} ft</div>
          </div>
          <div className='div-parameter-values'>
            <div>spacecraft volume</div>
            <div>{oneRocket.return_payload_vol.cubic_meters} m<sup>3</sup> / {oneRocket.return_payload_vol.cubic_feet} ft<sup>3</sup></div>
          </div>
          <div className='div-parameter-values'>
            <div>trunk volume</div>
            <div>{oneRocket.trunk.trunk_volume.cubic_meters} m<sup>3</sup> / {oneRocket.trunk.trunk_volume.cubic_feet} ft<sup>3</sup></div>
          </div>
          <div className='div-parameter-values'>
            <div>lunch payload mass</div>
            <div>{oneRocket.launch_payload_mass.kg.toLocaleString('en-US')} kg / {oneRocket.launch_payload_mass.lb.toLocaleString('en-US')} lbs</div>
          </div>
          <div className='div-parameter-values'>
            <div>return payload mass</div>
            <div>{oneRocket.return_payload_mass.kg.toLocaleString('en-US')} kg / {oneRocket.return_payload_mass.lb.toLocaleString('en-US')} lbs</div>
          </div>
          <div className='div-parameter-values'>
            <div>return payload mass</div>
            <div>{oneRocket.return_payload_mass.kg.toLocaleString('en-US')} kg / {oneRocket.return_payload_mass.lb.toLocaleString('en-US')} lbs</div>
          </div>
          <p className='p-one-rocket'>DESCRIPRION: {oneRocket.description}</p>
        </div>
      </article>
    </section>
  );
}
