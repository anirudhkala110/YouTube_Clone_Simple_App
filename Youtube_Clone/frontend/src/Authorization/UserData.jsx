import React, { useContext, useEffect, useState } from 'react'
import Navbar2 from '../Utils/Navbar2'
import { userContext } from '../App'
import axios from 'axios'
import Login from './Login'
import { Link, useNavigate } from 'react-router-dom'
axios.defaults.withCredentials = true
const UserData = () => {
    const user = useContext(userContext)
    // console.log(user)
    const [size, setSize] = useState()
    const [post, setPost] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('http://localhost:8090/all-videos')
            .then((posts) => {
                console.log("Data -> ", posts.data)
                if (Array.isArray(posts.data)) {
                    // If it's an array, you can access its length
                    setSize(posts.data.length);
                }
                setPost(posts.data);
            })
            .catch((err) => console.log(err));
    });
    const handleLogout = (e) => {
        alert("Logout")
        axios.get('http://localhost:8090/logout')
            .then(res => {
                console.log()
                if (res.data.msg_type === "good") {
                    navigate('/')
                    // window.location.href = '/'
                }

            })
            .catch(err => console.log(err))
    }
    function getTimeAgo(uploadDate) {
        const currentDate = new Date();
        const uploadDateObject = new Date(uploadDate);
        const timeDifferenceMillis = currentDate - uploadDateObject;

        // Convert milliseconds to seconds
        const timeDifferenceSeconds = Math.floor(timeDifferenceMillis / 1000);

        if (timeDifferenceSeconds < 60) {
            return `${timeDifferenceSeconds} seconds ago`;
        } else if (timeDifferenceSeconds < 3600) {
            const minutes = Math.floor(timeDifferenceSeconds / 60);
            return `${minutes} minutes ago`;
        } else if (timeDifferenceSeconds < 86400) {
            const hours = Math.floor(timeDifferenceSeconds / 3600);
            return `${hours} hours ago`;
        } else {
            // You can customize this part to display the full date if needed
            return uploadDateObject.toLocaleDateString();
        }
    }

    return (
        <div>
            <Navbar2 />
            {
                user.email ?
                    <div className='d-flex justify-content-between'>
                        <div className='p-3 shadow'>
                            <center className='alert alert-success fs-3 fw-bolder shadow'>My Videos</center>
                            <div className=' user-data-info pb-5' style={{ width: '60vw', height: "85vh" }}>
                                {post.map((post, i) => (
                                    <>
                                        {
                                            user.email === post.email ? <div className='p-1' key={i}>
                                                <Link to={`/watch-video/${post.vid}/${size}`} className=' text-decoration-none text-black' >
                                                    <div className='mb-4 p-1 shadow d-flex border' key={i} >
                                                        <video className='me-3' src={`http://localhost:8090/Files/${post.file}`} style={{ maxWidth: "300px" }} />
                                                        <div className='d-flex'>
                                                            {/* <i className='bi bi-person-circle fs-4'></i> */}
                                                            {
                                                                post.profile ? <img src={`http://localhost:8090/Files/${post.profile}`} style={{ width: "40px", height: "40px" }} className='profile-img rounded-5 me-1' /> : <i className='bi bi-person-circle fs-4 me-1'></i>
                                                            }
                                                            <div className='me-3 mb-1'>
                                                                <div className='fw-bold  mb-0' style={{ fontSize: '20px' }}>
                                                                    {post.title}
                                                                </div>
                                                                <div className='mb-0'>{post.username}</div>
                                                                <div className='mb-0'>
                                                                    75K views{' '}
                                                                    <i
                                                                        className='bi bi-dot'
                                                                        style={{ fontSize: '20px' }}
                                                                    ></i>{''}{getTimeAgo(post.updatedAt)}
                                                                </div>
                                                                <div className='mt-3'>
                                                                    <button className='btn btn-success'>Edit</button>
                                                                    <button className='btn btn-danger ms-5'>Delete</button>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </Link>
                                            </div> : <></>
                                        }
                                    </>
                                ))}
                            </div>
                        </div>
                        <div className='p-3' style={{ width: "35vw" }}>
                            <center className='alert alert-warning fs-4 fw-bold'>User Profile</center>
                            <div className='card p-3 me-3 w-100 shadow'>
                                <div className='w-100 d-flex justify-content-center'><img src={`http://localhost:8090/FIles/${user.file}`} style={{}} className='user-profile-img img-thumbnail' /></div>
                                <div className='fs-4 fw-bold'>Name : {user.username}</div>
                                <div className='fs-4 fw-bold'>Email : {user.email}</div>
                            </div>
                            <div className='mt-3'>
                                <button className='btn btn-success'>Edit</button>
                                {/* <button className='btn btn-danger ms-5'>Delete</button> */}
                                <button className='btn btn-danger ms-5' onClick={e => handleLogout(e)}>Logout</button>
                            </div>
                        </div>
                    </div>
                    : <Login />
            }
        </div>
    )
}

export default UserData