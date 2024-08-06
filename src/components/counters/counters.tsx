import './counters.css'
import { counterItems } from './counterItems'

export default function Counters() {
  return (
    <ul className='counter-list'>
      {counterItems.map((item) =>
        <li key={item.id} className='counter-li'>
          <div className='counter-div'>{item.count}</div>
          <div className='counter-text'>{item.text}</div>
        </li>)}
    </ul>
  )
}
