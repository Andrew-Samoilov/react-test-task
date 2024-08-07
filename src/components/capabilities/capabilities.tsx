import useSWR from 'swr';
import './capabilities.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Capabilities() {
  const {
    data: rockets,
    error,
    isValidating,
  } = useSWR(' https://api.spacexdata.com/v4/dragons', fetcher);

  if (error) return <div className='failed'>failed to load</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;

  // console.log(rockets);

  return (
    <section className='swiper-section'>
      
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper">

        {rockets.map((rocket) =>
          <>
            {rocket.flickr_images.map((imgUrl, index) =>
              <SwiperSlide key={rocket.id + index}>
                <img
                  src={imgUrl}
                  alt={`${rocket.name} ${index + 1}`}
                />
                <div className="capabilies-div">
                  <h2>Capabilities</h2>
                  <p>As the most powerful launch system ever developed, Starship will be able to carry up to 100 people on long-duration, interplanetary flights. Starship will also help enable satellite delivery, the development of a Moon base, and point-to-point transport here on Earth.</p>
                  <p>{rocket.name}</p>
                </div>
              </SwiperSlide>
            )}
          </>
        )}
      </Swiper>

    </section>
  )
}
