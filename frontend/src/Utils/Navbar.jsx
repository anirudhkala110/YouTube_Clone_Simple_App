import React, { useState } from 'react'
import Homepage from '../Components/Pages/Homepage'

const Navbar = () => {
    const [display, setDisplay] = useState(false)
    const handleDisplay = () => {
        if (display) {
            setDisplay(false)
        }
        if (!display) {
            setDisplay(true)
        }
    }

    const repeater = [1, 2, 3, 4, 5, 6, 7,
        8, 9, 10, 11, 12, 13, 14, 15,
        8, 9, 10, 11, 12, 13, 14, 15,
        16, 17, 18, 19, 20]
    return (
        <div>
            <div className='navbar px-2 bg-dark navbar-dark text-light'>

                <div className='d-flex'>
                    <button class="btn widthmore1000" type="button" onClick={e => handleDisplay(e)}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {<div className='width1000'><button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="offcanvas offcanvas-start " style={{ width: "230px" }} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header p-1 d-flex align-items-center justify-content-start ">
                                <div className='d-flex justify-content-start'>
                                    <button class="btn " type="button" onClick={e => handleDisplay(e)}>
                                        {/* <span className="navbar-toggler-icon" style={{ color: "black !important" }}></span> */}
                                        {/* <span className='fw-bolder fs-3'> &times;</span> */}
                                    </button>
                                    <div className='d-flex align-items-center'>
                                        <i className='bi bi-youtube fs-2' style={{ color: "red", background: "" }}></i> &nbsp;<strong className='fs-3 '>You<b style={{ color: "", fontFamily: "Kanit, Poppins , Roboto Condensed !important" }}>Tube</b></strong>
                                    </div>
                                    <center className='' style={{ fontSize: "12px" }}>IN</center>
                                </div>
                            </div>
                            <hr />
                            <div class="offcanvas-body p-0">
                                <div className=''>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-house'></i>Home</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-house'></i>Shorts</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-house'></i>Subcriptions</div>
                                    <hr />
                                    <b className='ms-3'>You <i className='bi bi-arrow-right'></i></b>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> Your Channel</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>History</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>Your Videos</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Watch Later</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-down'></i>Show More</div>
                                    <hr />
                                    <b className='ms-3'>Subscription</b>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> Your Channel</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>History</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>Your Videos</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Watch Later</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-down'></i>Show More</div>
                                    <hr />
                                    <b className='ms-3'>Explore</b>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> Trending</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>Shopping</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>Musics</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Film</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Live</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Gaming</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>News</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Sport</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Learning</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Fashion & Beauty</div>
                                    <hr />
                                    <b className='ms-3'>More from YouTube</b>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> YouTube Premium</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>YouTube Studio</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>YouTube Music</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>YouTube Kids</div>
                                    <hr />
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-gear '></i> Settings</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>Report history</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-music-note'></i>Help</div>
                                    <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Send feedback</div>
                                    <hr />
                                    <div>
                                        <p>About copyright press</p>
                                        <p>Term and Conditions</p>
                                    </div>
                                </div>
                            </div>
                        </div></div>}

                    <div className='d-flex align-items-center'>
                        <i className='bi bi-youtube fs-2' style={{ color: "red", background: "" }}></i> &nbsp;<strong className='fs-3'>You<b style={{ color: "" }}>Tube</b></strong>
                    </div>
                    <center className='' style={{ fontSize: "12px" }}>IN</center>
                </div>
                <div className='widthmore1000'>
                    <form class="d-flex " style={{ width: "50vw", maxWidth: "650px" }}>
                        <input class="border-0 bg-light text-white py-2 px-1 w-100" type="search" placeholder="Search" aria-label="Search" style={{ borderTopLeftRadius: "50px", borderBottomLeftRadius: "50px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", height: "35px" }} />
                        <div class="border-light px-3 border-white rounded-right border d-flex justify-content-center align-items-center bg-light text-dark" type="submit" style={{ borderTopRightRadius: "50px", borderBottomRightRadius: "50px", height: "35px" }}><i className='bi bi-search'></i></div>
                        <div class="border-light px-1 ms-2 border-white rounded-right border d-flex justify-content-center align-items-center bg-light rounded-5 fs-3 text-dark" type="submit" style={{ height: "35px" }}><i className='bi bi-mic'></i></div>
                    </form>
                </div>

                <div className='d-flex align-items-center'>
                    <div className='width1000'>
                        <div class="border-light px-3 border-white rounded-right d-flex justify-content-center align-items-center bg-none text-light" type="submit"><i className='bi bi-search fs-5'></i></div>
                    </div>
                    <div className='me-1'>
                        <i className='bi bi-camera-video fs-3'></i>
                    </div>
                    <div className='mx-4 d-flex align-items-center'>
                        <i className='bi bi-bell fs-4'></i>
                        <div className='' style={{ marginTop: "-10px", marginLeft: '-12px' }}>
                            <span className='border rounded-pill px-1' style={{ background: "red", fontSize: "12px" }}>21+</span>
                        </div>
                    </div>
                    <div>
                        <i className='bi bi-person-circle fs-3 me-3'></i>
                    </div>
                </div>

            </div>
            <div className='d-flex'>
                {display ? <div className="widthmore1000 " style={{ width: "180px" }}>
                    <div class="offcanvas-body scroll-container-down p-0 " style={{ height: "90vh" }} >
                        <div className='scroll-container-down'>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-house'></i>Home</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-house'></i>Shorts</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-house'></i>Subcriptions</div>
                            <hr />
                            <b className='ms-3'>You <i className='bi bi-arrow-right'></i></b>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> Your Channel</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>History</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>Your Videos</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Watch Later</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-down'></i>Show More</div>
                            <hr />
                            <b className='ms-3'>Subscription</b>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> Your Channel</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>History</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>Your Videos</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Watch Later</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-down'></i>Show More</div>
                            <hr />
                            <b className='ms-3'>Explore</b>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> Trending</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>Shopping</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>Musics</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Film</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Live</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Gaming</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>News</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Sport</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Learning</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-wifi'></i>Fashion & Beauty</div>
                            <hr />
                            <b className='ms-3'>More from YouTube</b>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-person-square '></i> YouTube Premium</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>YouTube Studio</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-play-btn'></i>YouTube Music</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>YouTube Kids</div>
                            <hr />
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-gear '></i> Settings</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-arrow-counterclockwise'></i>Report history</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-music-note'></i>Help</div>
                            <div className='hoverbtn rounded mb-2 py-2 px-3 d-flex align-items-center' style={{ fontSize: "15px" }}><i className='me-4 bi bi-stopwatch'></i>Send feedback</div>
                            <hr />
                            <div>
                                <p>About copyright press</p>
                                <p>Term and Conditions</p>
                            </div>
                        </div>
                    </div>
                </div> : <div className="width550" style={{ width: "100px", minHeight: "100vh" }} >
                    <div class="offcanvas-body">
                        <div className='p-1'>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-house fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Home</div></div>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-globe-central-south-asia fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Shorts</div></div>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-pin-angle fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Subscription</div></div>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-camera fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Yor</div></div>
                        </div>
                    </div>
                </div>}
                <div className="width550 width1000" style={{ width: "100px", minHeight: "100vh" }} >
                    <div class="offcanvas-body">
                        <div className='p-1'>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-house fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Home</div></div>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-globe-central-south-asia fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Shorts</div></div>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-pin-angle fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Subscription</div></div>
                            <div className='hoverbtn rounded mb-4 text-center'><div className='me-4 bi bi-camera fs-3  w-100'></div><div className='' style={{ fontSize: "10px" }}>Yor</div></div>
                        </div>
                    </div>
                </div>
                <div className='m-2 ' style={{ width: "88vw",height:"90vh" }}>
                    <div className='allbase' style={{ maxWidth: "86vw" }}>
                        <div className='mb-4 pe-3  d-flex align-items-center overflow-x-hidden' style={{ width: `${display ? '88vw' : '93vw'}` }}>
                            {/* <hr className='custom-hr' style={{ borderColor: "black" }} /> */}
                            <div className='scroll-container  rounded-4 p-1'>
                                {
                                    repeater.map((i) => (
                                        <div className='border py-1 px-2 me-3 rounded rounded-4 subcontent' key={i} >Content</div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='homescrollbar' style={{height:"88vh"}}>
                            <Homepage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar