import './starbase.css'
import starbaseImg from './starbase.jfif'

export default function Starbase() {
  return (
    <section className='starbase-section'>
      <img src={starbaseImg}
        alt="Starbase"
        height='863px;'
      />
      <div className='capabilies-div'>
      <h2>Starbase</h2>
        <p>Development and manufacturing of Starship takes place at Starbase, one of the world’s first commercial spaceports designed for orbital missions.</p>
      </div>
    </section>
  )
}
