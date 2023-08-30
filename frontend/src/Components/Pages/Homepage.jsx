
import React, { useState, useEffect } from 'react';
import tryimg from '../Images/try.jpg';
import shorts from '../Images/shorts.jpg';
import { useNavigate, Link } from 'react-router-dom';

const Homepage = () => {
  const repeater = ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4', '7.mp4', "8.mp4"];
  const repeater2 = ['9.mp4', '10.mp4', '13.mp4', '14.mp4', '15.mp4', '16.mp4', '17.mp4', "18.mp4", '11.mp4', '12.mp4', '19.mp4', '20.mp4', '21.mp4', '22.mp4', '23.mp4', '24.mp4', '25.mp4', '26.mp4', '27.mp4', '28.mp4', 'test.mp4'];
  const id = 1;
  const [playingIndex, setPlayingIndex] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (index) => {
    setPlayingIndex(index);
  };

  const handleMouseLeave = () => {
    setPlayingIndex(null);
  };

  // This useEffect will reset the playingIndex when the component mounts
  useEffect(() => {
    return () => {
      setPlayingIndex(null);
    };
  }, []);

  return (
    <div className='' style={{ height: '100vh' }}>
      <div className='' style={{ width: '-webkit-fill-available', minHeight: '100vh', overflow: "hidden" }}>
        <div className='row border border-5 border-black d-flex homedata ' style={{ width: '100vw' }}>
          {repeater.map((data, i) => (
            <div className='px-1 col-6 col-xs-12 col-md-4 col-lg-3 col-xl-4 col-xxl-3' key={i}>
              <Link
                to={`/watch-video/${i}/${data}`}
                className=' text-decoration-none text-black'
              >
                <div
                  className='mb-4 px-1 innerdata border'
                >
                  <video
                    src={`/Video/${data}`}
                    className='rounded mb-3 border border-black '
                    autoPlay={playingIndex === i}
                    // controls
                    onMouseEnter={(e) => handleMouseEnter(i)}
                    onMouseLeave={e => handleMouseLeave(i)}
                    style={{ width: "100%" }}
                  />
                  <div className='d-flex'>
                    <div className='me-3 mb-1 p-lg-0 p-0 p-md-0 p-sm-0 p-xl-0 p-xxl-0'>
                      <i className='bi bi-person-circle fs-4'></i>
                    </div>
                    <div className='me-3 mb-1'>
                      <div
                        className='fw-bold  mb-0'
                        style={{ fontSize: '20px' }}
                      >
                        Cars Vs Cars 566.555% People Break Their Nails After
                        This Race in GTA 5!
                      </div>
                      <div className='mb-0'>THE CASETOO</div>
                      <div className='mb-0'>
                        75K views{' '}
                        <i
                          className='bi bi-dot fw-bold'
                          style={{ fontSize: '20px' }}
                        ></i>{' '}
                        17 hours ago
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div>
          <div className='btn'>Shorts <i class="bi bi-caret-right"></i></div>
          <hr />
          <div className='d-flex  overflow-x-hidden' style={{ width: "100%" }}>
            <div className='mx-2 scroll-container' style={{ height: "500px", width: "95%" }}>
              {
                repeater.map((i => (
                  <div key={i} className='me-4 shortsdata'>
                    <img src={`${shorts}`} style={{ width: "280px", height: "480px" }} />
                    <div className='text-light bg-dark d-flex justify-content-start align-items-bottom' style={{ marginTop: "-25px", zIndex: "20" }}>Descriptions or name of the short</div>
                  </div>
                )))
              }
              <div className='d-flex align-items-center shortsdata-more text-black px-2 justify-content-center fw-bold'>More <i class="bi bi-caret-right" style={{ height: "" }}></i></div>
            </div>
          </div>
          <hr />
        </div>
        <div className='row border border-5 border-black d-flex homedata ' style={{ width: '100vw' }}>
          {repeater2.map((data, i) => (
            <div className='px-1 col-6 col-xs-12 col-md-4 col-lg-3 col-xl-4 col-xxl-3' key={i}>
              <Link
                to={`/watch-video/${i}/${data}`}
                className=' text-decoration-none text-black'
              >
                <div
                  className='mb-4 px-1 innerdata border'
                >
                  <video
                    src={`/Video/${data}`}
                    className='rounded mb-3 border border-black '
                    autoPlay={playingIndex === i}
                    // controls
                    onMouseEnter={(e) => handleMouseEnter(i)}
                    onMouseLeave={e => handleMouseLeave(i)}
                    style={{ width: "100%" }}
                  />
                  <div className='d-flex'>
                    <div className='me-3 mb-1 p-lg-0 p-0 p-md-0 p-sm-0 p-xl-0 p-xxl-0'>
                      <i className='bi bi-person-circle fs-4'></i>
                    </div>
                    <div className='me-3 mb-1'>
                      <div
                        className='fw-bold  mb-0'
                        style={{ fontSize: '20px' }}
                      >
                        Cars Vs Cars 566.555% People Break Their Nails After
                        This Race in GTA 5!
                      </div>
                      <div className='mb-0'>THE CASETOO</div>
                      <div className='mb-0'>
                        75K views{' '}
                        <i
                          className='bi bi-dot fw-bold'
                          style={{ fontSize: '20px' }}
                        ></i>{' '}
                        17 hours ago
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Homepage