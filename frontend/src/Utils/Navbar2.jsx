import React from 'react'

const Navbar2 = () => {
    return (
        <div>
            <div className='navbar px-2 bg-dark navbar-dark text-light'>

                <div className='d-flex align-items-center'>
                    {<div className=''><button class="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                        <div class="offcanvas offcanvas-start " style={{ width: "230px" }} tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header p-1 d-flex align-items-center justify-content-start ">
                                <a href='/' className='text-decoration-none text-dark'>
                                    <div className='d-flex justify-content-start'>
                                        <button class="btn " type="button" >
                                            {/* <span className="navbar-toggler-icon" style={{ color: "black !important" }}></span> */}
                                            {/* <span className='fw-bolder fs-3'> &times;</span> */}
                                        </button>
                                        <div className='d-flex align-items-center'>
                                            <i className='bi bi-youtube fs-2' style={{ color: "red", background: "" }}></i> &nbsp;<strong className='fs-4 '>You<b style={{ color: "", fontFamily: "Kanit, Poppins , Roboto Condensed !important" }}>Tube</b></strong>
                                        </div>
                                        <center className='' style={{ fontSize: "12px", marginTop: "-120px" }}>IN</center>
                                    </div>
                                </a>
                            </div>
                            <hr />
                            <div class="offcanvas-body p-0">
                                <div>
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
                    <a href='/' className='text-decoration-none d-flex text-light'>
                        <div className='d-flex align-items-center'>
                            <i className='bi bi-youtube fs-2' style={{ color: "red", background: "" }}></i> &nbsp;<strong className='fs-3'>You<b style={{ color: "" }}>Tube</b></strong>
                        </div>
                        <center className='' style={{ fontSize: "12px" }}>IN</center>
                    </a>
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
        </div>
    )
}

export default Navbar2