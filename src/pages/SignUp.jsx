import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

const SignUp = () => {
    // use state
    const [fullname, setFullname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();

    const onSubmit = (event) => {
        event.preventDefault();

        const requestData = { fullname, email, password, username }
        axios.post(`http://localhost:4000/signup`, requestData)
            .then((result) => {
                if (result.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'User successfully registered'
                    })
                    navigate('/login')
                }
                
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: err.response.message || 'some error occurred please try again later'
                })
            })
    }

    return (
        <div className='container signup-container'>
            <div className="row">

                <div className="col-md col-sm- col-lg d-flex align-items-center justify-content-center">
                    <div className="card shadow text-align-center mt-5">

                        <div className="card-body px-5">
                            <h4 className="card-title text-center mt-3 fw-bold">Sign Up</h4>
                            <form onSubmit={(e)=> onSubmit(e)}>
                                <input
                                    type="text"
                                    className="p-2 mt-3 mb-2 form-control "
                                    placeholder='username'
                                    value={username}
                                    onChange={(ev) => setUsername(ev.target.value)}
                                    required
                                />
                                <input
                                    type="email"
                                    className="p-2 mt-3 mb-2 form-control "
                                    placeholder=' Email'
                                    value={email}
                                    onChange={(ev) => setEmail(ev.target.value)}
                                    required
                                />
                                <input
                                    type="text"
                                    className="p-2 mt-3 mb-2 form-control "
                                    placeholder=' Full Name'
                                    value={fullname}
                                    onChange={(ev) => setFullname(ev.target.value)}
                                    required
                                />
                                <input
                                    type="password"
                                    className="p-2 mb-2 form-control "
                                    placeholder='password'
                                    value={password}
                                    onChange={(ev) => setPassword(ev.target.value)}
                                    required
                                />
                                <div className='mt-3 d-grid'>
                                    <button type='submit' className="btn btn-primary">SignUp</button>
                                </div>
                                <div className='my-4'>
                                    <hr className='text-muted' />
                                    <h5 className='text-muted text-center'>OR</h5>
                                    <hr className='text-muted' />
                                </div>
                                <div className='mt-3 mb-5 d-grid '>
                                    <button className="btn btn-primary">
                                        <span className='text fs-6'>Already have an account</span>
                                        <Link to="/login" className='ms-1 text-info fw-bold'>Log in</Link>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp